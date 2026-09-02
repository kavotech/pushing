import { NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { sendAdminNotification, sendCustomerConfirmation } from "@/lib/resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EnquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  postcode?: string;
  propertyType?: string;
  service?: string;
  message?: string;
  formType?: "quote" | "contact";
  recaptchaToken?: string;
};

export async function POST(request: Request) {
  let body: EnquiryPayload | null = null;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, postcode, propertyType, service, message, formType, recaptchaToken } =
    body ?? {};

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please fill in your name, email, phone and message." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const recaptchaOk = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaOk) {
    return NextResponse.json(
      { error: "We couldn't verify your submission. Please try again." },
      { status: 400 },
    );
  }

  const details = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    postcode: postcode?.trim(),
    propertyType: propertyType?.trim(),
    service: service?.trim(),
    message: message.trim(),
    formType: formType === "quote" ? ("quote" as const) : ("contact" as const),
  };

  try {
    const adminResult = await sendAdminNotification(details);

    if (!adminResult.sent) {
      // No RESEND_API_KEY configured — log server-side so the submission
      // isn't lost, but don't claim delivery.
      console.log("[enquiry] RESEND_API_KEY not set. Submission received:", details);
      return NextResponse.json({ ok: true, delivered: false });
    }

    // Best-effort courtesy email — the enquiry has already reached the
    // business at this point, so a failure here shouldn't fail the request.
    try {
      await sendCustomerConfirmation(details);
    } catch (error) {
      console.error("[enquiry] Failed to send customer confirmation email:", error);
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[enquiry] Failed to send admin notification email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please call or email us directly." },
      { status: 500 },
    );
  }
}

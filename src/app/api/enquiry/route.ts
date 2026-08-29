import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

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
};

export async function POST(request: Request) {
  let body: EnquiryPayload | null = null;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, postcode, propertyType, service, message, formType } = body ?? {};

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please fill in your name, email, phone and message." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const summary = [
    `New ${formType === "quote" ? "quote request" : "enquiry"} from the Pushing Pressure website`,
    "",
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Phone: ${phone.trim()}`,
    postcode?.trim() ? `Postcode: ${postcode.trim()}` : null,
    propertyType?.trim() ? `Property type: ${propertyType.trim()}` : null,
    service?.trim() ? `Service: ${service.trim()}` : null,
    "",
    "Message:",
    message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!apiKey) {
    // No email provider configured yet — log server-side so the submission
    // isn't lost, but don't claim delivery. Set RESEND_API_KEY and
    // CONTACT_TO_EMAIL before launch so enquiries reach an inbox.
    console.log("[enquiry] RESEND_API_KEY not set. Submission received:\n" + summary);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Pushing Pressure Website <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email.trim(),
        subject: `${formType === "quote" ? "New quote request" : "New website enquiry"} — ${name.trim()}`,
        text: summary,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[enquiry] Resend API error:", errorText);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please call or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[enquiry] Failed to send email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please call or email us directly." },
      { status: 500 },
    );
  }
}

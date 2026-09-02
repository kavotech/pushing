import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

export type EnquiryDetails = {
  name: string;
  email: string;
  phone: string;
  postcode?: string;
  propertyType?: string;
  service?: string;
  message: string;
  formType: "quote" | "contact";
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function emailShell(bodyHtml: string) {
  return `
    <div style="background:#f2f4f7;padding:32px 16px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e6e9ee;">
        <div style="background:#050b16;padding:20px 28px;">
          <span style="color:#ffffff;font-size:16px;font-weight:700;letter-spacing:0.02em;">Pushing Pressure LTD</span>
        </div>
        <div style="padding:28px;color:#1a2433;font-size:15px;line-height:1.6;">
          ${bodyHtml}
        </div>
        <div style="padding:18px 28px;background:#f8f9fb;border-top:1px solid #e6e9ee;color:#6b7684;font-size:12px;line-height:1.6;">
          ${siteConfig.name} &middot; ${siteConfig.phone} &middot; ${siteConfig.email}<br />
          Serving ${siteConfig.serviceAreas.join(", ")}
        </div>
      </div>
    </div>
  `;
}

function detailsTable(details: EnquiryDetails) {
  const rows: [string, string | undefined][] = [
    ["Name", details.name],
    ["Email", details.email],
    ["Phone", details.phone],
    ["Postcode", details.postcode],
    ["Property type", details.propertyType],
    ["Service", details.service],
  ];

  return `
    <table style="width:100%;border-collapse:collapse;margin:16px 0;">
      ${rows
        .filter(([, value]) => value?.trim())
        .map(
          ([label, value]) => `
            <tr>
              <td style="padding:6px 0;color:#6b7684;font-size:13px;width:130px;vertical-align:top;">${label}</td>
              <td style="padding:6px 0;color:#1a2433;font-size:14px;">${escapeHtml(value as string)}</td>
            </tr>
          `,
        )
        .join("")}
    </table>
  `;
}

export async function sendAdminNotification(details: EnquiryDetails) {
  const client = getResendClient();
  if (!client) return { sent: false as const };

  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Pushing Pressure Website <onboarding@resend.dev>";
  const kind = details.formType === "quote" ? "quote request" : "enquiry";

  const html = emailShell(`
    <p>Dear Mr. YOHOU, Jeff,</p>
    <p>You've received a new ${kind} through the Pushing Pressure website.</p>
    ${detailsTable(details)}
    <p style="margin-top:20px;color:#6b7684;font-size:13px;">Message</p>
    <p style="white-space:pre-wrap;">${escapeHtml(details.message)}</p>
    <p style="margin-top:24px;">Reply directly to this email to respond to ${escapeHtml(details.name)}.</p>
  `);

  const result = await client.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: details.email,
    subject: `New ${kind === "quote request" ? "quote request" : "enquiry"} — ${details.name}`,
    html,
  });

  if (result.error) throw new Error(result.error.message);
  return { sent: true as const };
}

export async function sendCustomerConfirmation(details: EnquiryDetails) {
  const client = getResendClient();
  if (!client) return { sent: false as const };

  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Pushing Pressure Website <onboarding@resend.dev>";
  const kind = details.formType === "quote" ? "quote request" : "enquiry";
  const firstName = details.name.trim().split(/\s+/)[0] || details.name;

  const html = emailShell(`
    <p>Hi ${escapeHtml(firstName)},</p>
    <p>
      Thanks for getting in touch with ${siteConfig.name}. We've received your ${kind} and a
      member of our team will be in touch shortly.
    </p>
    <p style="margin-top:20px;color:#6b7684;font-size:13px;">What you sent us</p>
    ${detailsTable(details)}
    <p style="white-space:pre-wrap;">${escapeHtml(details.message)}</p>
    <p style="margin-top:24px;">
      If it's urgent, you can reach us directly on
      <a href="${siteConfig.phoneHref}" style="color:#1487df;">${siteConfig.phone}</a>.
    </p>
    <p>Thanks again for choosing ${siteConfig.name}.</p>
  `);

  const result = await client.emails.send({
    from: fromEmail,
    to: [details.email],
    subject: `We've received your ${kind} — ${siteConfig.name}`,
    html,
  });

  if (result.error) throw new Error(result.error.message);
  return { sent: true as const };
}

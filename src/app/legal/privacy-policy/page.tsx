import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}, explaining how we collect, use and protect your personal data.`,
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Pushing Pressure LTD collects, uses and protects your information."
        surface="abstract"
        breadcrumb={[{ label: "Privacy Policy" }]}
        size="sm"
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="prose max-w-3xl prose-headings:font-display prose-a:text-blue-600">
            <p>
              <strong>Last updated:</strong> This policy explains how {siteConfig.legalName}
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses and protects
              personal information when you use this website or get in touch with us.
            </p>

            <h2>Information we collect</h2>
            <p>
              When you submit an enquiry or quote request through this website, we collect the
              information you provide, which may include your name, email address, phone number,
              postcode, property type and details of the work you&apos;re enquiring about.
            </p>
            <p>
              We may also collect standard technical information when you browse the site, such
              as pages visited and general device information, used only to help us understand
              how the site is used and to keep it running reliably.
            </p>

            <h2>How we use your information</h2>
            <ul>
              <li>To respond to your enquiry or quote request</li>
              <li>To arrange and carry out cleaning work you&apos;ve requested</li>
              <li>To maintain records relating to any work carried out</li>
              <li>To comply with our legal and accounting obligations</li>
            </ul>
            <p>We do not sell or share your personal information with third parties for marketing purposes.</p>

            <h2>How long we keep your information</h2>
            <p>
              We keep personal information only for as long as necessary to fulfil the purposes
              described in this policy, or as required by law, for example for accounting
              records.
            </p>

            <h2>Your rights</h2>
            <p>
              Under UK data protection law, you have the right to request access to, correction
              of, or deletion of the personal information we hold about you. To make a request,
              please contact us using the details below.
            </p>

            <h2>Cookies</h2>
            <p>
              This website does not use tracking or advertising cookies. When you respond to the
              cookie notice, your choice is stored in your browser&apos;s local storage so we can
              remember it on your next visit — this stays on your device and isn&apos;t used to
              identify or track you. Where any other strictly necessary technical storage is used
              to make the site function correctly, it does not identify you personally either.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your
              information, please contact us at{" "}
              <a href={siteConfig.emailHref}>{siteConfig.email}</a> or {siteConfig.phone}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

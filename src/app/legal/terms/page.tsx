import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${siteConfig.name} website and services.`,
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms that apply when you use this website or book work with us."
        surface="abstract"
        breadcrumb={[{ label: "Terms & Conditions" }]}
        size="sm"
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="prose max-w-3xl prose-headings:font-display prose-a:text-blue-600">
            <p>
              These terms and conditions apply to your use of this website and to any cleaning
              services booked with {siteConfig.legalName}. By using this website or booking
              services with us, you agree to these terms.
            </p>

            <h2>Website use</h2>
            <p>
              The content on this website is provided for general information about our services
              and is kept as accurate and up to date as reasonably possible. We may update or
              amend the website, including this page, at any time without notice.
            </p>

            <h2>Quotes and bookings</h2>
            <p>
              Quotes provided through this website, by phone or by email are estimates based on
              the information available at the time. A final price may be confirmed following a
              site visit or once the full scope of work is clear. Quotes are valid for a
              reasonable period unless otherwise stated.
            </p>
            <p>
              Bookings are confirmed once both parties have agreed the scope of work, price and
              date. Either party may reschedule by agreement, including where weather conditions
              make it unsafe or ineffective to carry out exterior cleaning work.
            </p>

            <h2>Access and site conditions</h2>
            <p>
              You are responsible for ensuring reasonable access to the areas to be cleaned,
              including access to an outside water supply and power where required. We&apos;ll
              let you know in advance if specific access arrangements are needed.
            </p>

            <h2>Liability</h2>
            <p>
              We take reasonable care when carrying out all work. If you believe an issue has
              arisen in connection with work we&apos;ve carried out, please contact us as soon as
              possible so we can look into it.
            </p>

            <h2>Payment</h2>
            <p>
              Payment terms will be confirmed at the time of booking or quotation. Invoices are
              issued for commercial and estate work in line with the terms agreed for that
              contract.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales, and any disputes will be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have any questions about these terms, please contact us at{" "}
              <a href={siteConfig.emailHref}>{siteConfig.email}</a> or {siteConfig.phone}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

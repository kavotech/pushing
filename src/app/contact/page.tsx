import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { siteConfig } from "@/lib/site-config";
import { photos } from "@/lib/photos-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Pushing Pressure LTD for professional exterior cleaning across London, Surrey, Essex and Kent.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your property"
        description="Whether you have a question or you're ready for a quote, our team is happy to help. Reach out and we'll get back to you as soon as we can."
        photo={photos.patioDuringClean}
        breadcrumb={[{ label: "Contact" }]}
        size="sm"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              <ContactCard icon={Phone} title="Call us">
                <a href={siteConfig.phoneHref} className="focus-ring block hover:text-blue-600">
                  {siteConfig.phone}
                </a>
              </ContactCard>

              <ContactCard icon={Mail} title="Email us">
                <a href={siteConfig.emailHref} className="focus-ring block hover:text-blue-600">
                  {siteConfig.email}
                </a>
              </ContactCard>

              <ContactCard icon={Clock} title="Opening hours">
                {siteConfig.hours.map((entry) => (
                  <div key={entry.days} className="flex justify-between gap-4 text-sm">
                    <span className="text-ink-500">{entry.days}</span>
                    <span className="text-ink-800">{entry.time}</span>
                  </div>
                ))}
              </ContactCard>

              <ContactCard icon={MapPin} title="Where we work">
                <p className="text-sm text-ink-500">
                  Covering London, Surrey, Essex and Kent for domestic, communal, estate and
                  commercial exterior cleaning.
                </p>
              </ContactCard>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-[0_1px_2px_rgba(10,24,48,0.04)] sm:p-10">
              <h2 className="text-2xl font-semibold text-ink-900">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-500">
                Fill in the form and we&apos;ll get back to you, usually within one working day.
              </p>
              <div className="mt-8">
                <EnquiryForm variant="contact" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-mist-50 p-6">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full border border-blue-200 text-blue-600">
          <Icon className="size-4" strokeWidth={1.5} />
        </span>
        <h3 className="text-base font-semibold text-ink-900">{title}</h3>
      </div>
      <div className="mt-4 space-y-1.5 text-sm font-medium text-ink-700">{children}</div>
    </div>
  );
}

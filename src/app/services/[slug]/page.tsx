import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ClipboardList, HelpCircle, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { MediaPanel, type Surface } from "@/components/shared/MediaPanel";
import { getServiceBySlug, services } from "@/lib/services-data";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema } from "@/lib/schema";

type Params = { slug: string };

const surfaceBySlug: Record<string, Surface> = {
  "pressure-washing": "paving",
  softwashing: "render",
  "gutter-cleaning": "roof",
  "estate-cleaning": "brick",
  "communal-area-cleaning": "paving",
  "commercial-exterior-cleaning": "abstract",
  "domestic-exterior-cleaning": "decking",
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: service.name,
              description: service.summary,
              slug: service.slug,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }}
      />

      <PageHero
        eyebrow={service.tagline}
        title={service.name}
        description={service.heroDescription}
        surface={surfaceBySlug[service.slug] ?? "abstract"}
        breadcrumb={[{ label: "Services", href: "/services" }, { label: service.shortName }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="flex size-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="size-6" strokeWidth={1.6} />
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600 sm:text-lg">
                {service.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-14">
              <h2 className="flex items-center gap-2.5 text-xl font-semibold text-ink-900">
                <ClipboardList className="size-5 text-blue-500" />
                Our process
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {service.process.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-ink-100 bg-mist-50 p-5"
                  >
                    <span className="font-display text-2xl font-bold text-blue-500">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-ink-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-14">
              <h2 className="flex items-center gap-2.5 text-xl font-semibold text-ink-900">
                <HelpCircle className="size-5 text-blue-500" />
                Frequently asked questions
              </h2>
              <div className="mt-6 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-[0_1px_2px_rgba(10,24,48,0.04)]">
                {service.faqs.map((faq) => (
                  <details key={faq.question} className="group p-5 open:bg-mist-50">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink-900 marker:content-none sm:text-base">
                      {faq.question}
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-ink-200 text-xs text-ink-500 transition-transform duration-300 group-open:rotate-45 group-open:border-blue-400 group-open:text-blue-600">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_24px_60px_-24px_rgba(10,24,48,0.3)]">
                <MediaPanel
                  surface={surfaceBySlug[service.slug] ?? "abstract"}
                  tone="after"
                  icon={Icon}
                  className="absolute inset-0"
                />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-ink-100 bg-mist-50 p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                  <Sparkles className="size-4" />
                  What we clean
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.whatWeClean.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-ink-100 bg-mist-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Why it matters
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-100 bg-mist-50 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Explore More" title="Related services" tone="light" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otherServices.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <ServiceCard service={item} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Get a free quote for ${service.shortName.toLowerCase()}`}
        description="Tell us about your property and we'll come back with a clear, no-obligation quote."
      />
    </>
  );
}

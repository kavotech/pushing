import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { areas, getAreaBySlug } from "@/lib/areas-data";
import { services } from "@/lib/services-data";
import { photos } from "@/lib/photos-data";
import { buildMetadata } from "@/lib/metadata";

type Params = { area: string };

// Cycled across areas until each has its own confirmed local photography.
const areaHeroPhotos = [photos.drivewayAfter, photos.gardenPatioHose, photos.patioPressureWashAction];

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return buildMetadata({
    title: `Exterior Cleaning in ${area.name}`,
    description: `Professional pressure washing, softwashing and exterior cleaning across ${area.name}. ${area.summary}`,
    path: `/areas-we-cover/${area.slug}`,
  });
}

export default async function AreaDetailPage({ params }: { params: Promise<Params> }) {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const areaIndex = areas.findIndex((item) => item.slug === area.slug);

  return (
    <>
      <PageHero
        eyebrow="Areas We Cover"
        title={`Exterior cleaning in ${area.name}`}
        description={area.summary}
        surface="paving"
        photo={areaHeroPhotos[areaIndex % areaHeroPhotos.length]}
        breadcrumb={[{ label: "Areas We Cover", href: "/areas-we-cover" }, { label: area.name }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div className="space-y-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              {area.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Services available in {area.name}
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-500" />
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink-100 bg-mist-50 p-7">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                <MapPin className="size-4" />
                Towns &amp; areas we serve in {area.name}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.towns.map((town) => (
                  <span
                    key={town}
                    className="rounded-full border border-ink-100 bg-white px-3.5 py-1.5 text-sm text-ink-600"
                  >
                    {town}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink-500">
                Based outside these areas? We may still be able to help — get in touch with your
                postcode and we&apos;ll confirm coverage.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink-100 bg-mist-50 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Popular Services"
              title={`Exterior cleaning services in ${area.name}`}
              tone="light"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Get a free exterior cleaning quote in ${area.name}`}
        description="Tell us about your property and we'll come back with a clear, no-obligation quote."
      />
    </>
  );
}

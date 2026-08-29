import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { services } from "@/lib/services-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Exterior Cleaning Services",
  description:
    "Pressure washing, softwashing, gutter cleaning and more — professional exterior cleaning services for domestic, communal, estate and commercial properties across London and the South East.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Exterior cleaning services for every property"
        description="Seven specialist services covering domestic, communal, estate and commercial properties across London, Surrey, Essex and Kent — each matched to the surface and job at hand."
        surface="paving"
        breadcrumb={[{ label: "Services" }]}
      />

      <section className="bg-ink-950 py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/lib/services-data";

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-ink-950 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Exterior Cleaning Services"
            description="From single driveways to multi-site commercial contracts, we bring the right method to every surface — professional, methodical and built around your property."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

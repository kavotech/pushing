import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { areas } from "@/lib/areas-data";

export function AreasSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Where We Work"
            title="Areas We Cover"
            description="We carry out exterior cleaning across London and the South East, covering domestic, communal, estate and commercial properties throughout the following counties."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => (
            <Reveal key={area.slug} delay={index * 0.06}>
              <Link
                href={`/areas-we-cover/${area.slug}`}
                className="focus-ring group flex h-full flex-col justify-between rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_1px_2px_rgba(10,24,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_-16px_rgba(10,24,48,0.18)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <MapPin className="size-5" />
                  </span>
                  <span className="text-lg font-semibold text-ink-900">{area.name}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">{area.summary}</p>
                <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  View coverage
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

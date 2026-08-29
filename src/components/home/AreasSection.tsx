import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { areas } from "@/lib/areas-data";

export function AreasSection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.15]" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Where We Work"
            title="Areas We Cover"
            description="We carry out exterior cleaning across London and the South East, covering domestic, communal, estate and commercial properties throughout the following counties."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => (
            <Reveal key={area.slug} delay={index * 0.06}>
              <Link
                href={`/areas-we-cover/${area.slug}`}
                className="focus-ring group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-ink-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-blue-500/10 text-blue-300">
                    <MapPin className="size-5" />
                  </span>
                  <span className="text-lg font-semibold text-white">{area.name}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{area.summary}</p>
                <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-lime-300">
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

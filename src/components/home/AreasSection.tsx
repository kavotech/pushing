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
            description="We carry out exterior cleaning across North, West and East London, covering domestic, communal, estate and commercial properties throughout each area."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => (
            <Reveal key={area.slug} delay={index * 0.06}>
              <Link
                href={`/areas-we-cover/${area.slug}`}
                className="focus-ring group flex h-full flex-col justify-between rounded-xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_28px_-16px_rgba(10,24,48,0.2)] active:scale-[0.98] active:border-blue-200 active:shadow-[0_12px_28px_-16px_rgba(10,24,48,0.2)] active:duration-150"
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="size-5 text-blue-600" strokeWidth={1.5} />
                  <span className="text-lg font-semibold text-ink-900">{area.name}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{area.summary}</p>
                <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  View coverage
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

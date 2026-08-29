import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { MediaPanel } from "@/components/shared/MediaPanel";

const points = [
  "Domestic, communal, estate and commercial properties",
  "Pressure washing and softwashing, matched to the surface",
  "Coverage across London, Surrey, Essex and Kent",
  "Straightforward quotes and clear communication throughout",
];

export function AboutSection() {
  return (
    <section className="relative bg-ink-900 py-24 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="About Pushing Pressure"
            title="Built for exterior cleaning that's done properly"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-200 sm:text-lg">
            <p>
              Pushing Pressure LTD provides professional exterior cleaning solutions for
              residential, communal, estate and commercial properties across London and the
              South East.
            </p>
            <p>
              We take the time to understand each property before we start work, matching the
              right method — pressure washing or softwashing — to the surface in front of us.
              The result is a thorough, consistent clean that protects the surface rather than
              just blasting it.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-ink-200">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lime-300" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="/about" variant="secondary">
              More About Us
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
            <MediaPanel surface="render" tone="brand" className="absolute inset-0" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-ink-950/70 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-lime-300">
                Service Areas
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                London · Surrey · Essex · Kent
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

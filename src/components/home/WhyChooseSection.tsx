import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

const reasons = [
  {
    title: "Method Matched To The Surface",
    description: "Pressure washing or softwashing, chosen for what the material actually needs.",
  },
  {
    title: "Free, No-Obligation Quotes",
    description: "A clear quote before any work starts — no pressure, no surprises.",
  },
  {
    title: "Clear Communication",
    description: "Honest timelines and updates from first enquiry to completed job.",
  },
  {
    title: "Flexible Scheduling",
    description: "Domestic visits, out-of-hours commercial cleans and estate programmes.",
  },
  {
    title: "Regional Coverage",
    description: "One team across London, Surrey, Essex and Kent.",
  },
  {
    title: "Careful, Tidy Work",
    description: "Surroundings protected and everything left tidy once we're done.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
      <Container className="relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Why Pushing Pressure"
              title="Fast, Friendly & Reliable Results"
              description="A considered approach to exterior cleaning, built around clear communication and the right method for every surface."
            />
            <div className="mt-8">
              <Button href="/quote" variant="outline-light">
                Get A Free Quote
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.05} className="flex gap-3.5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-lime-300" strokeWidth={1.75} />
                <div>
                  <h3 className="text-base font-semibold text-white">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-200">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

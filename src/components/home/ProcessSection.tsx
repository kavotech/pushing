import { CalendarCheck, ClipboardCheck, MessageSquare, SprayCan } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    icon: MessageSquare,
    title: "Get In Touch",
    description:
      "Tell us about your property and what you'd like cleaned. We'll ask a few questions to understand the scope.",
  },
  {
    icon: ClipboardCheck,
    title: "Free Quote",
    description:
      "We put together a clear, no-obligation quote based on your property and the surfaces involved.",
  },
  {
    icon: CalendarCheck,
    title: "Book A Date",
    description:
      "Once you're happy to go ahead, we agree a convenient date and confirm access requirements.",
  },
  {
    icon: SprayCan,
    title: "Professional Clean",
    description:
      "Our team carries out the work using the right method for each surface, then checks the result with you.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative bg-ink-950 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A straightforward process, start to finish"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-white/15 to-transparent lg:block"
          />
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08} className="relative">
              <div className="relative flex flex-col items-start">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-white/15 bg-ink-900 text-lime-300">
                  <step.icon className="size-6" strokeWidth={1.6} />
                </div>
                <span className="absolute -left-1 -top-3 font-display text-6xl font-bold text-white/[0.06]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

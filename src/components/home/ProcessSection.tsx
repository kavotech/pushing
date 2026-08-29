import { CalendarCheck, CircleCheckBig, ClipboardCheck, MessageSquare, SprayCan } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MediaPanel } from "@/components/shared/MediaPanel";

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
    <section className="relative bg-white py-24 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="A straightforward process, start to finish"
              tone="light"
            />
          </Reveal>

          <div className="mt-10 space-y-7">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <step.icon className="size-5" strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink-900">
                    <span className="mr-2 text-blue-400">{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(10,24,48,0.35)]">
            <MediaPanel surface="roof" tone="after" className="absolute inset-0" />
          </div>
          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-[0_16px_40px_-16px_rgba(10,24,48,0.25)]">
            <span className="flex size-11 items-center justify-center rounded-full bg-lime-100 text-lime-700">
              <CircleCheckBig className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">Job Done Properly</p>
              <p className="text-xs text-ink-500">Checked with you before we leave</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

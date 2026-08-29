import { Clock, MapPinned, MessagesSquare, Target } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const reasons = [
  {
    icon: Target,
    title: "The right method for the surface",
    description:
      "We choose between pressure washing and softwashing based on the material in front of us — not a single approach applied everywhere.",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    description:
      "Straightforward quotes, honest timelines and a team that keeps you updated from first enquiry to completed job.",
  },
  {
    icon: Clock,
    title: "Flexible scheduling",
    description:
      "Domestic visits, out-of-hours commercial cleans and coordinated estate programmes, planned around your property.",
  },
  {
    icon: MapPinned,
    title: "Regional coverage",
    description:
      "One team covering London, Surrey, Essex and Kent — useful for managing agents and clients with multiple sites.",
  },
];

const stats = [
  { value: "4", label: "Counties Covered" },
  { value: "7", label: "Specialist Services" },
  { value: "2", label: "Cleaning Methods, Matched To Every Surface" },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Pushing Pressure"
            title="A considered approach to exterior cleaning"
          />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-ink-950 text-lime-300">
                  <reason.icon className="size-5" strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-ink-950 to-ink-900 p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-lime-300/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-blue-500/15 blur-3xl"
            />
            <div className="relative space-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-white/8 pb-6 last:border-0 last:pb-0">
                  <span className="font-display text-5xl font-bold text-gradient">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm text-ink-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

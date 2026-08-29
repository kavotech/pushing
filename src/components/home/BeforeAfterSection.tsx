import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { Button } from "@/components/shared/Button";

const examples = [
  { surface: "paving" as const, title: "Driveway Pressure Wash" },
  { surface: "render" as const, title: "Render Softwash" },
  { surface: "roof" as const, title: "Roof Softwash" },
];

export function BeforeAfterSection() {
  return (
    <section className="relative bg-ink-950 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="See The Difference"
            title="Before & After"
            description="Drag the slider to see the kind of transformation a professional exterior clean delivers. Real project photography is added to this gallery as jobs are completed."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {examples.map((example, index) => (
            <Reveal key={example.title} delay={index * 0.08}>
              <BeforeAfterSlider surface={example.surface} title={example.title} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button href="/gallery" variant="secondary">
            View Full Gallery
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

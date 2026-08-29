import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { Button } from "@/components/shared/Button";
import { photoPairs } from "@/lib/photos-data";

const examples = [
  { surface: "render" as const, title: "Render Softwash" },
  { surface: "roof" as const, title: "Roof Softwash" },
];

export function BeforeAfterSection() {
  return (
    <section className="relative bg-mist-50 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="See The Difference"
            title="Before & After"
            description="Drag the slider to see the kind of transformation a professional exterior clean delivers — real project photography, plus example results as more jobs are photographed."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal delay={0}>
            <BeforeAfterSlider
              before={photoPairs[0].before}
              after={photoPairs[0].after}
              title={photoPairs[0].title}
            />
          </Reveal>
          {examples.map((example, index) => (
            <Reveal key={example.title} delay={(index + 1) * 0.08}>
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

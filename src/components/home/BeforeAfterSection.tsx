import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { Button } from "@/components/shared/Button";
import { photoPairs } from "@/lib/photos-data";

export function BeforeAfterSection() {
  return (
    <section className="relative bg-mist-50 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="See The Difference"
            title="Before & After"
            description="Drag the slider to see real results from recent jobs across North, West and East London."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {photoPairs.map((pair, index) => (
            <Reveal key={pair.title} delay={index * 0.08}>
              <BeforeAfterSlider before={pair.before} after={pair.after} title={pair.title} />
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

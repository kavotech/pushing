import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

export function OwnerPreviewSection() {
  return (
    <section className="relative bg-mist-50 py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="A Little About Me"
            title="“A boy from South London with a dream, a pressure washer, and a determination to build something of his own.”"
            description="From one man with a pressure washer to a fully insured team trusted across North, West and East London — here's the story behind Pushing Pressure."
            align="center"
            tone="light"
            className="mx-auto"
          />
          <div className="mt-8 flex justify-center">
            <Button href="/about#about-me" variant="secondary">
              Read My Full Story
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

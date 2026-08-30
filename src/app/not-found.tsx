import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Photo } from "@/components/shared/Photo";
import { photos } from "@/lib/photos-data";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink-950 pt-24">
      <Photo photo={photos.gardenPatioHose} className="absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/85 to-ink-950/70" />
      <Container className="relative text-center">
        <span className="font-display text-7xl font-bold text-gradient sm:text-8xl">404</span>
        <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-300 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Head back home or
          get a free quote for your property.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Back To Home</Button>
          <Button href="/quote" variant="outline-light">
            Get A Free Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}

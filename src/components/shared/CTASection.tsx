import { Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { Photo } from "@/components/shared/Photo";
import { siteConfig } from "@/lib/site-config";
import { photos } from "@/lib/photos-data";

export function CTASection({
  title = "Ready to bring your property back to its best?",
  description = "Get a free, no-obligation quote for pressure washing, softwashing or exterior cleaning anywhere across North, West or East London.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 p-10 shadow-[0_30px_70px_-30px_rgba(10,24,48,0.45)] sm:p-14 lg:p-16">
            <Photo photo={photos.frontGardenDrivewayAfter} className="absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_20%,rgba(6,20,33,0.55),rgba(5,7,8,0.85))]" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-200 sm:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/quote" size="lg">
                  Get A Free Quote
                </Button>
                <a
                  href={siteConfig.phoneHref}
                  className="focus-ring-dark inline-flex items-center gap-2 text-base font-semibold text-white hover:text-lime-300"
                >
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

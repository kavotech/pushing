import { Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { MediaPanel } from "@/components/shared/MediaPanel";
import { siteConfig } from "@/lib/site-config";

export function CTASection({
  title = "Ready to bring your property back to its best?",
  description = "Get a free, no-obligation quote for pressure washing, softwashing or exterior cleaning anywhere across London, Surrey, Essex or Kent.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 p-10 shadow-[0_30px_70px_-30px_rgba(10,24,48,0.45)] sm:p-14 lg:p-16">
            <MediaPanel surface="abstract" tone="brand" className="absolute inset-0" />
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

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { areas } from "@/lib/areas-data";
import { photos } from "@/lib/photos-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Areas We Cover",
  description:
    "Pushing Pressure LTD provides exterior cleaning across London, Surrey, Essex and Kent — covering domestic, communal, estate and commercial properties.",
  path: "/areas-we-cover",
});

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Areas we cover across London & the South East"
        description="We carry out pressure washing, softwashing and exterior cleaning across four counties — from city apartment blocks to estate properties and business premises."
        photo={photos.gardenPatioHose}
        breadcrumb={[{ label: "Areas We Cover" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {areas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 0.06}>
                <Link
                  href={`/areas-we-cover/${area.slug}`}
                  className="focus-ring group flex h-full flex-col rounded-xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_28px_-16px_rgba(10,24,48,0.2)] active:scale-[0.98] active:border-blue-200 active:shadow-[0_12px_28px_-16px_rgba(10,24,48,0.2)] active:duration-150"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="size-6 text-blue-600" strokeWidth={1.5} />
                    <h2 className="text-2xl font-semibold text-ink-900">{area.name}</h2>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                    {area.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.towns.slice(0, 6).map((town) => (
                      <span
                        key={town}
                        className="rounded-full border border-ink-100 bg-mist-50 px-3 py-1 text-xs text-ink-600"
                      >
                        {town}
                      </span>
                    ))}
                  </div>
                  <span className="mt-7 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    View {area.name} coverage
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

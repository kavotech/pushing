import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { MediaPanel } from "@/components/shared/MediaPanel";
import { Photo } from "@/components/shared/Photo";
import { CTASection } from "@/components/shared/CTASection";
import { guides } from "@/lib/guides-data";
import { photos } from "@/lib/photos-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Guides & Insights",
  description:
    "Practical, no-nonsense guides on pressure washing, softwashing and keeping your property's exterior in good condition.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides & Insights"
        title="Exterior cleaning guides & insights"
        description="Practical advice on pressure washing, softwashing and keeping your property looking its best."
        photo={photos.patioPressureWashAction}
        breadcrumb={[{ label: "Guides" }]}
        size="sm"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => (
              <Reveal key={guide.slug} delay={index * 0.06}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="focus-ring group flex h-full flex-col overflow-hidden rounded-xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_28px_-16px_rgba(10,24,48,0.2)] active:scale-[0.98] active:border-blue-200 active:shadow-[0_12px_28px_-16px_rgba(10,24,48,0.2)] active:duration-150"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {guide.photo ? (
                      <Photo photo={guide.photo} className="absolute inset-0" />
                    ) : (
                      <MediaPanel surface={guide.surface} tone="brand" className="absolute inset-0" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
                      <Clock className="size-3.5" />
                      {guide.readTime}
                    </span>
                    <h2 className="mt-3 text-lg font-semibold text-ink-900">{guide.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                      {guide.excerpt}
                    </p>
                    <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                      Read guide
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
                    </span>
                  </div>
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

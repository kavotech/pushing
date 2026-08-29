import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MediaPanel } from "@/components/shared/MediaPanel";
import { guides } from "@/lib/guides-data";

export function GuidesSection() {
  return (
    <section className="relative bg-mist-50 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Guides & Insights"
            title="Explore our exterior cleaning guides"
            description="Practical, no-nonsense advice on keeping your property's exterior in good condition."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Reveal key={guide.slug} delay={index * 0.06}>
              <Link
                href={`/guides/${guide.slug}`}
                className="focus-ring group flex h-full flex-col overflow-hidden rounded-xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_28px_-16px_rgba(10,24,48,0.2)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <MediaPanel surface={guide.surface} tone="brand" className="absolute inset-0" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
                    <Clock className="size-3.5" />
                    {guide.readTime}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">{guide.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {guide.excerpt}
                  </p>
                  <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    Read guide
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { getGuideBySlug, guides } from "@/lib/guides-data";
import { buildMetadata } from "@/lib/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuideDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <PageHero
        eyebrow="Guides & Insights"
        title={guide.title}
        description={guide.excerpt}
        surface={guide.surface}
        photo={guide.photo}
        breadcrumb={[{ label: "Guides", href: "/guides" }, { label: guide.title }]}
        size="sm"
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mb-8 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
              <Clock className="size-3.5" />
              {guide.readTime}
            </div>
            <div className="prose max-w-3xl prose-headings:font-display prose-a:text-blue-600">
              {guide.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

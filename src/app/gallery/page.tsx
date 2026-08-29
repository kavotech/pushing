import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { CTASection } from "@/components/shared/CTASection";
import { buildMetadata } from "@/lib/metadata";
import type { Surface } from "@/components/shared/MediaPanel";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Gallery",
  description:
    "Before and after examples of pressure washing, softwashing and exterior cleaning work from Pushing Pressure LTD across London, Surrey, Essex and Kent.",
  path: "/gallery",
});

const projects: { surface: Surface; title: string; category: string }[] = [
  { surface: "paving", title: "Block Paved Driveway", category: "Pressure Washing" },
  { surface: "render", title: "Render Softwash", category: "Softwashing" },
  { surface: "roof", title: "Roof Tile Softwash", category: "Softwashing" },
  { surface: "brick", title: "Boundary Wall Clean", category: "Estate Cleaning" },
  { surface: "decking", title: "Garden Decking", category: "Domestic Cleaning" },
  { surface: "paving", title: "Communal Walkway", category: "Communal Area Cleaning" },
  { surface: "abstract", title: "Commercial Forecourt", category: "Commercial Cleaning" },
  { surface: "brick", title: "Shopfront Surround", category: "Commercial Cleaning" },
  { surface: "paving", title: "Estate Access Road", category: "Estate Cleaning" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & Gallery"
        title="See the results for yourself"
        description="A growing gallery of before and after transformations from across London, Surrey, Essex and Kent. Drag each slider to compare."
        surface="decking"
        breadcrumb={[{ label: "Gallery" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <p className="max-w-2xl text-sm text-ink-500 sm:text-base">
              This gallery is updated as new projects are completed. Every job is different, so
              results vary depending on the surface, staining and property — get in touch for a
              free assessment of your own.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={`${project.title}-${index}`} delay={(index % 3) * 0.06}>
                <div>
                  <BeforeAfterSlider surface={project.surface} title={project.title} />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {project.category}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want results like these at your property?"
        description="Get a free, no-obligation quote and we'll talk you through the right approach for your surfaces."
      />
    </>
  );
}

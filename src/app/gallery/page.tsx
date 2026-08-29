import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Photo } from "@/components/shared/Photo";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { CTASection } from "@/components/shared/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { photos, photoPairs } from "@/lib/photos-data";
import type { Surface } from "@/components/shared/MediaPanel";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Gallery",
  description:
    "Real project photos plus before and after examples of pressure washing, softwashing and exterior cleaning work from Pushing Pressure LTD across London, Surrey, Essex and Kent.",
  path: "/gallery",
});

const recentWork = [
  { photo: photos.patioPressureWashAction, caption: "Pressure washing a garden patio" },
  { photo: photos.gardenPatioHose, caption: "Garden patio and path, cleaned" },
  { photo: photos.detachedDrivewayAfter, caption: "Driveway and courtyard, after cleaning" },
  { photo: photos.flagstonePatioRotaryCleaner, caption: "Flagstone patio, cleaned with a surface cleaner" },
  { photo: photos.patioDuringClean, caption: "Rear garden patio, mid-clean" },
  { photo: photos.patioBefore, caption: "Rear garden patio, before cleaning" },
];

const projects: { surface: Surface; title: string; category: string }[] = [
  { surface: "render", title: "Render Softwash", category: "Softwashing" },
  { surface: "roof", title: "Roof Tile Softwash", category: "Softwashing" },
  { surface: "brick", title: "Boundary Wall Clean", category: "Estate Cleaning" },
  { surface: "decking", title: "Garden Decking", category: "Domestic Cleaning" },
  { surface: "paving", title: "Communal Walkway", category: "Communal Area Cleaning" },
  { surface: "abstract", title: "Commercial Forecourt", category: "Commercial Cleaning" },
  { surface: "brick", title: "Shopfront Surround", category: "Commercial Cleaning" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & Gallery"
        title="See the results for yourself"
        description="Real project photos from across London, Surrey, Essex and Kent, plus example transformations below."
        photo={photos.drivewayAfter}
        breadcrumb={[{ label: "Gallery" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Recent Work" title="From recent jobs" tone="light" />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recentWork.map((item, index) => (
              <Reveal key={item.caption} delay={index * 0.06}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Photo photo={item.photo} className="absolute inset-0" />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink-950/80 to-transparent p-4">
                    <p className="text-sm font-medium text-white">{item.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-100 bg-mist-50 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Real Before & After"
              title="Real jobs, drag to compare"
              description="Genuine before and after photos from the same property — nothing generated or staged."
              tone="light"
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {photoPairs.map((pair, index) => (
              <Reveal key={pair.title} delay={index * 0.08}>
                <BeforeAfterSlider before={pair.before} after={pair.after} title={pair.title} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Example Transformations"
              title="Typical before & after results"
              description="These illustrate the kind of transformation a professional clean delivers. Every job is different, so results vary depending on the surface, staining and property — get in touch for a free assessment of your own."
              tone="light"
            />
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

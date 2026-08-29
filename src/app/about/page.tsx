import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MediaPanel } from "@/components/shared/MediaPanel";
import { CTASection } from "@/components/shared/CTASection";
import { buildMetadata } from "@/lib/metadata";
import {
  Building2,
  Droplets,
  Handshake,
  MapPinned,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Pushing Pressure LTD provides professional exterior cleaning solutions for residential, communal, estate and commercial properties across London and the South East.",
  path: "/about",
});

const values = [
  {
    icon: Wrench,
    title: "Method matched to the surface",
    description:
      "We choose between pressure washing and softwashing based on what the surface actually needs — never a single approach applied everywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Care for your property",
    description:
      "Surrounding areas, planting and features are protected before work begins, and everything is left tidy once we're done.",
  },
  {
    icon: Handshake,
    title: "Clear, honest communication",
    description:
      "From your first enquiry to the completed job, you'll know what to expect, when to expect it and what it will cost.",
  },
  {
    icon: MapPinned,
    title: "Genuine regional coverage",
    description:
      "One team working across London, Surrey, Essex and Kent — useful whether you manage one property or several.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pushing Pressure"
        title="Professional exterior cleaning, done properly"
        description="Pushing Pressure LTD provides professional exterior cleaning solutions for residential, communal, estate and commercial properties across London and the South East."
        surface="render"
        breadcrumb={[{ label: "About" }]}
      />

      <section className="bg-ink-950 py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
              <MediaPanel surface="brick" tone="brand" icon={Building2} className="absolute inset-0" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Exterior cleaning built around your property"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-200 sm:text-lg">
              <p>
                Pushing Pressure LTD focuses exclusively on exterior cleaning — pressure washing,
                softwashing, gutter clearing and the wider work that keeps a property&apos;s
                exterior looking its best.
              </p>
              <p>
                We work across residential homes, communal buildings, larger estates and
                commercial premises, which means we&apos;re equally comfortable cleaning a single
                driveway or coordinating a multi-area programme across a managed site.
              </p>
              <p>
                Every job starts with understanding the property in front of us: the surfaces
                involved, the access available and what a good result actually looks like for
                that space. From there, we bring the right equipment and method to deliver it.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-ink-900 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="What guides every job we take on"
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-ink-950 p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-blue-500/15 to-lime-300/10 text-lime-300">
                    <value.icon className="size-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Where We Work"
              title="Covering London, Surrey, Essex & Kent"
              description="We take on domestic, communal, estate and commercial work throughout these four counties, with the flexibility to travel further for larger estate and commercial contracts."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <MediaPanel surface="abstract" tone="brand" icon={Droplets} className="relative aspect-[16/10]" />
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

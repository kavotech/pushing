import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Photo } from "@/components/shared/Photo";
import { CTASection } from "@/components/shared/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos-data";
import { Handshake, MapPinned, ShieldCheck, Wrench } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Pushing Pressure LTD provides professional exterior cleaning solutions for residential, communal, estate and commercial properties across North, West and East London.",
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
      "One team working across North, West and East London — useful whether you manage one property or several.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pushing Pressure"
        title="Professional exterior cleaning, done properly"
        description="Pushing Pressure LTD provides professional exterior cleaning solutions for residential, communal, estate and commercial properties across North, West and East London."
        photo={photos.patioPressureWashAction}
        breadcrumb={[{ label: "About" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(10,24,48,0.35)] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Photo photo={photos.gardenPatioHose} className="absolute inset-0" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Exterior cleaning built around your property"
              tone="light"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600 sm:text-lg">
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

      <section className="border-y border-ink-100 bg-mist-50 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="What guides every job we take on"
              align="center"
              tone="light"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="h-full rounded-xl border border-ink-100 bg-white p-6">
                  <value.icon className="size-8 text-blue-600" strokeWidth={1.5} />
                  <h3 className="mt-4 text-base font-semibold text-ink-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Where We Work"
              title="Covering North, West & East London"
              description="We take on domestic, communal, estate and commercial work across all three areas, with the flexibility to travel further for larger estate and commercial contracts."
              tone="light"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_24px_60px_-24px_rgba(10,24,48,0.3)]">
              <Photo photo={photos.estateHousePatio2} className="absolute inset-0" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="about-me" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(20,135,223,0.16),transparent_60%)]" />
        <Container className="relative grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="From The Founder" title="A Little About Me" tone="dark" />
            <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]">
              <Photo photo={photos.heroDrivewaySupercar} className="absolute inset-0" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-ink-200 sm:text-lg">
            <p>
              Pushing Pressure started with just a boy from South London with a dream, a pressure
              washer, and a determination to build something of his own.
            </p>
            <p>
              What began as a small idea has grown into a business I&apos;m genuinely proud of.
              There were no shortcuts — just hard work, long days, learning from every job and
              constantly investing back into better equipment and a better service.
            </p>
            <p>
              Since starting, I&apos;ve had the privilege of cleaning over 100 driveways, patios
              and outdoor spaces across London and surrounding areas, helping homeowners and
              businesses bring their properties back to life.
            </p>
            <p>
              Today, Pushing Pressure Ltd is a fully insured professional exterior cleaning
              company, covered by £1 million Public Liability Insurance, using professional-grade
              equipment and taking pride in every single job — whether it&apos;s a small family
              driveway or a large commercial property.
            </p>
            <p className="font-display text-lg font-semibold text-white sm:text-xl">
              But for me, it&apos;s about more than pressure washing.
            </p>
            <p>
              It&apos;s about building something my family can be proud of, creating a name that
              people can trust, and showing that with consistency, faith and hard work, a simple
              idea can become something special.
            </p>
            <p>
              Every customer who books, recommends us, leaves a review or follows the journey is
              helping that original South London dream continue to grow.
            </p>
            <p>Thank you for trusting Pushing Pressure Ltd with your property.</p>
            <p className="font-display text-lg font-semibold text-white">
              This is only the beginning. 💙
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

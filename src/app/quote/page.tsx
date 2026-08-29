import type { Metadata } from "next";
import { CalendarCheck, CheckCircle2, ClipboardList, MessageSquare, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Get A Free Quote",
  description:
    "Request a free, no-obligation quote from Pushing Pressure LTD for pressure washing, softwashing or exterior cleaning across London, Surrey, Essex and Kent.",
  path: "/quote",
});

const steps = [
  { icon: MessageSquare, text: "Tell us about your property and what needs cleaning" },
  { icon: ClipboardList, text: "We put together a clear, no-obligation quote" },
  { icon: CalendarCheck, text: "We agree a convenient date to carry out the work" },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Quote"
        title="Get a free, no-obligation quote"
        description="Tell us a little about your property and the areas you'd like cleaned. We'll come back with a clear quote — no pressure, no obligation."
        surface="paving"
        breadcrumb={[{ label: "Get A Free Quote" }]}
        size="sm"
      />

      <section className="bg-ink-950 py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
                <h2 className="text-lg font-semibold text-white">What happens next</h2>
                <ul className="mt-5 space-y-5">
                  {steps.map((step, index) => (
                    <li key={step.text} className="flex items-start gap-3.5">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-blue-500/10 text-sm font-semibold text-blue-300">
                        {index + 1}
                      </span>
                      <p className="pt-1.5 text-sm leading-relaxed text-ink-200">{step.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-lime-300/20 bg-lime-300/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-lime-300">
                  Prefer to talk it through?
                </h3>
                <a
                  href={siteConfig.phoneHref}
                  className="focus-ring mt-3 flex items-center gap-2.5 text-xl font-semibold text-white hover:text-lime-300"
                >
                  <Phone className="size-5" />
                  {siteConfig.phone}
                </a>
                <p className="mt-2 text-sm text-ink-300">
                  {siteConfig.hours[0].days}, {siteConfig.hours[0].time}
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "No-obligation, free quotes",
                  "Domestic, communal, estate & commercial",
                  "London, Surrey, Essex & Kent",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink-200">
                    <CheckCircle2 className="size-4 shrink-0 text-lime-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-ink-900 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-white">Request your free quote</h2>
              <p className="mt-2 text-sm text-ink-300">
                The more detail you can give us, the more accurate your quote will be.
              </p>
              <div className="mt-8">
                <EnquiryForm variant="quote" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

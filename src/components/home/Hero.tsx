"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { MediaPanel } from "@/components/shared/MediaPanel";

const heroPoints = [
  { icon: ShieldCheck, label: "Professional Service" },
  { icon: Sparkles, label: "Domestic & Commercial" },
  { icon: Building2, label: "Estates & Communal Sites" },
  { icon: Clock, label: "Flexible Appointments" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(20,135,223,0.28),transparent_65%)]" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.3fr_0.85fr]">
          <MediaPanel
            surface="paving"
            tone="after"
            className="hidden aspect-[4/5] rounded-3xl border border-white/10 lg:block"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              London · Surrey · Essex · Kent
            </span>

            <h1 className="text-balance text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.25rem]">
              Need Your Property{" "}
              <span className="text-gradient">Professionally Cleaned?</span> We Can Help!
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-100 sm:text-lg">
              Powerful, professional exterior cleaning for homes, estates, communal areas and
              commercial properties across London, Surrey, Essex and Kent.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/quote" size="lg">
                Get A Free Quote
              </Button>
              <Button href="/services" size="lg" variant="outline-light">
                View Our Services
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-4">
              {heroPoints.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 text-center text-xs font-medium text-ink-100 sm:text-sm"
                >
                  <Icon className="size-5 text-lime-300" strokeWidth={1.75} />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          <MediaPanel
            surface="render"
            tone="after"
            className="hidden aspect-[4/5] rounded-3xl border border-white/10 lg:block"
          />
        </div>
      </Container>
    </section>
  );
}

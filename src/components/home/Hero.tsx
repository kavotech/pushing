"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { MediaPanel } from "@/components/shared/MediaPanel";

const heroPoints = [
  { icon: Sparkles, label: "Domestic & Commercial" },
  { icon: Building2, label: "Estates & Communal Sites" },
  { icon: ShieldCheck, label: "London & The South East" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink-950 pb-16 pt-40 sm:pb-20 sm:pt-44 lg:min-h-[100vh] lg:pb-24">
      <MediaPanel surface="paving" tone="dusk" className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(20,135,223,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/70 to-ink-950/20" />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
            London · Surrey · Essex · Kent
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Professional Exterior Cleaning Across{" "}
            <span className="text-gradient">London &amp; The South East</span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-ink-100 sm:text-lg lg:text-xl">
            Powerful, professional exterior cleaning for homes, estates, communal areas and
            commercial properties across London, Surrey, Essex and Kent.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/quote" size="lg">
              Get A Free Quote
            </Button>
            <Button href="/services" size="lg" variant="outline-light">
              View Our Services
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
            {heroPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-ink-200">
                <Icon className="size-4 text-lime-300" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

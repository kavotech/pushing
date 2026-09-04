"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { TypewriterHeadline } from "@/components/home/TypewriterHeadline";
import { photos } from "@/lib/photos-data";

const heroPoints = [
  { icon: ShieldCheck, label: "Professional Service" },
  { icon: Sparkles, label: "Domestic & Commercial" },
  { icon: Building2, label: "Estates & Communal Sites" },
  { icon: Clock, label: "Flexible Appointments" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-ink-950 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:min-h-[92vh] lg:pb-20">
      <Photo photo={photos.heroDrivewaySupercar} priority sizes="100vw" className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(20,135,223,0.28),transparent_65%)]" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/75 to-ink-950/35" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <TypewriterHeadline />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-100 sm:text-lg"
          >
            Powerful, professional exterior cleaning for homes, estates, communal areas and
            commercial properties across South, North, West and East London.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="/quote" size="lg">
              Get A Free Quote
            </Button>
            <Button href="/services" size="lg" variant="outline-light">
              View Our Services
            </Button>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-4">
            {heroPoints.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 text-xs font-medium text-ink-100 sm:text-sm"
              >
                <Icon className="size-5 shrink-0 text-lime-300" strokeWidth={1.75} />
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

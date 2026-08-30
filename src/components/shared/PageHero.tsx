"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { MediaPanel, type Surface } from "@/components/shared/MediaPanel";
import { Photo } from "@/components/shared/Photo";
import type { Photo as PhotoData } from "@/lib/photos-data";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  surface = "abstract",
  photo,
  breadcrumb,
  size = "md",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  surface?: Surface;
  /** Real photo to use as the banner background instead of the generated surface. */
  photo?: PhotoData;
  breadcrumb?: { label: string; href?: string }[];
  size?: "sm" | "md";
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ink-950 pb-16 pt-36 sm:pb-20 sm:pt-40",
        size === "md" ? "lg:pt-48 lg:pb-24" : "lg:pt-44 lg:pb-16",
      )}
    >
      {breadcrumb ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Home", url: siteConfig.url },
                ...breadcrumb.map((crumb) => ({
                  name: crumb.label,
                  url: crumb.href ? `${siteConfig.url}${crumb.href}` : undefined,
                })),
              ]),
            ),
          }}
        />
      ) : null}

      {photo ? (
        <Photo photo={photo} priority sizes="100vw" className="absolute inset-0" />
      ) : (
        <MediaPanel surface={surface} tone="dusk" className="absolute inset-0" />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(20,135,223,0.16),transparent_60%)]" />
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/80 to-ink-950/40",
          photo && "via-ink-950/85 to-ink-950/55",
        )}
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {breadcrumb ? (
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-ink-300">
              <Link href="/" className="focus-ring-dark transition-colors hover:text-white">
                Home
              </Link>
              {breadcrumb.map((crumb) => (
                <span key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="focus-ring-dark transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink-100">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : null}

          {eyebrow ? (
            <span className="mb-5 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              <span aria-hidden className="h-[3px] w-7 rounded-full bg-lime-300" />
              {eyebrow}
            </span>
          ) : null}

          <h1 className="text-balance max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-ink-100 sm:text-lg">
              {description}
            </p>
          ) : null}
        </motion.div>
      </Container>
    </section>
  );
}

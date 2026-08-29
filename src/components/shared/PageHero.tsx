import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { MediaPanel, type Surface } from "@/components/shared/MediaPanel";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  surface = "abstract",
  breadcrumb,
  size = "md",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  surface?: Surface;
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
      <MediaPanel surface={surface} tone="dusk" className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(20,135,223,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />

      <Container className="relative">
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
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
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
      </Container>
    </section>
  );
}

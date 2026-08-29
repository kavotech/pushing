import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services-data";
import { cn } from "@/lib/cn";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "focus-ring group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/30 hover:bg-ink-850",
      )}
      style={{ transitionDelay: `${Math.min(index, 6) * 20}ms` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-blue-500/10 blur-3xl transition-colors duration-500 group-hover:bg-lime-300/15"
      />

      <div className="relative">
        <div className="flex size-14 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-blue-500/15 to-lime-300/10 text-blue-300 transition-colors duration-300 group-hover:text-lime-300">
          <Icon className="size-6" strokeWidth={1.6} />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">{service.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-300">{service.summary}</p>
      </div>

      <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-lime-300">
        Learn more
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

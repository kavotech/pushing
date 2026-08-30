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
        "focus-ring group relative flex flex-col justify-between overflow-hidden rounded-xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_28px_-16px_rgba(10,24,48,0.2)] active:scale-[0.98] active:border-blue-200 active:shadow-[0_12px_28px_-16px_rgba(10,24,48,0.2)] active:duration-150",
      )}
      style={{ transitionDelay: `${Math.min(index, 6) * 20}ms` }}
    >
      <div>
        <Icon
          className="size-8 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-active:scale-110"
          strokeWidth={1.5}
        />

        <h3 className="mt-4 text-lg font-semibold text-ink-900">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.summary}</p>
      </div>

      <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
        Learn more
        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
      </div>
    </Link>
  );
}

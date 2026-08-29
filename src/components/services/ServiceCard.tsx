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
        "focus-ring group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-[0_1px_2px_rgba(10,24,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_-16px_rgba(10,24,48,0.18)]",
      )}
      style={{ transitionDelay: `${Math.min(index, 6) * 20}ms` }}
    >
      <div>
        <div className="flex size-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
          <Icon className="size-6" strokeWidth={1.6} />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-ink-900">{service.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">{service.summary}</p>
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600">
        Learn more
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

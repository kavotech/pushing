import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ServiceCTACard() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-blue-500 p-7 text-white shadow-[0_16px_40px_-16px_rgba(20,135,223,0.5)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-lime-300/20 blur-2xl"
      />
      <div className="relative">
        <div className="flex size-14 items-center justify-center rounded-xl bg-white/15 text-white">
          <Phone className="size-6" strokeWidth={1.6} />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Need a service you don&apos;t see here?</h3>
        <p className="mt-3 text-sm leading-relaxed text-blue-50">
          Get in touch and tell us what you need cleaned — we&apos;ll let you know how we can
          help.
        </p>
      </div>

      <a
        href={siteConfig.phoneHref}
        className="focus-ring relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
      >
        <Phone className="size-4" />
        Call Us Now
      </a>
    </div>
  );
}

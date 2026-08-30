import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ServiceCTACard() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-blue-500 p-6 text-white">
      <div>
        <Phone className="size-8" strokeWidth={1.5} />
        <h3 className="mt-4 text-lg font-semibold">Need a service you don&apos;t see here?</h3>
        <p className="mt-2 text-sm leading-relaxed text-blue-50">
          Get in touch and tell us what you need cleaned — we&apos;ll let you know how we can
          help.
        </p>
      </div>

      <a
        href={siteConfig.phoneHref}
        className="focus-ring-dark mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-700 active:scale-95 active:duration-150"
      >
        <Phone className="size-4" />
        Call Us Now
      </a>
    </div>
  );
}

import { cn } from "@/lib/cn";

export function Logo({ className, mark = true }: { className?: string; mark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-display", className)}>
      {mark ? (
        <svg
          viewBox="0 0 40 40"
          className="size-8 shrink-0 sm:size-9"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logoGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#37a3f2" />
              <stop offset="1" stopColor="#cdfb4c" />
            </linearGradient>
          </defs>
          <rect width="40" height="40" rx="10" fill="#0a0d11" />
          <path
            d="M20 8c4.8 5.6 8.4 10.4 8.4 14.8a8.4 8.4 0 1 1-16.8 0C11.6 18.4 15.2 13.6 20 8Z"
            fill="url(#logoGrad)"
          />
          <path
            d="M14.5 24.5c.6 2.6 2.7 4.3 5.2 4.6"
            stroke="#050708"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
        </svg>
      ) : null}
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-bold uppercase tracking-[0.08em] text-white sm:text-base">
          Pushing<span className="text-gradient">Pressure</span>
        </span>
        <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-ink-300">
          Exterior Cleaning
        </span>
      </span>
    </span>
  );
}

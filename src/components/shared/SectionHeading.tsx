import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em]",
            align === "center" && "justify-center",
            tone === "dark" ? "text-lime-300" : "text-blue-600",
          )}
        >
          <span
            aria-hidden
            className={cn("h-[3px] w-7 rounded-full", tone === "dark" ? "bg-lime-300" : "bg-blue-500")}
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-white" : "text-ink-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-balance text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-200" : "text-ink-500",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

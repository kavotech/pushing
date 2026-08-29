import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  variant = "light",
}: {
  className?: string;
  /** "light" sits directly on a white/light background. "dark" wraps the mark
   * in a white plate so it stays legible on the navy header/footer bands. */
  variant?: "light" | "dark";
}) {
  const image = (
    <Image
      src="/logo.jpg"
      alt="Pushing Pressure LTD"
      width={240}
      height={160}
      priority
      className="h-11 w-auto object-contain sm:h-12"
    />
  );

  if (variant === "dark") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm",
          className,
        )}
      >
        {image}
      </span>
    );
  }

  return <span className={cn("inline-flex items-center", className)}>{image}</span>;
}

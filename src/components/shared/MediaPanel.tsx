import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

export type Surface = "paving" | "render" | "roof" | "brick" | "decking" | "abstract";
export type Tone = "before" | "after" | "brand" | "dusk";

const NOISE_URI =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

function surfaceStyle(surface: Surface): React.CSSProperties {
  switch (surface) {
    case "paving":
      return {
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0 2px, transparent 2px 64px), repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0 2px, transparent 2px 32px), repeating-linear-gradient(90deg, rgba(0,0,0,0.35) 0 64px, rgba(0,0,0,0.15) 64px 128px)",
        backgroundSize: "64px 32px, 32px 32px, 128px 32px",
      };
    case "brick":
      return {
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 26px), repeating-linear-gradient(90deg, rgba(0,0,0,0.3) 0 2px, transparent 2px 58px), repeating-linear-gradient(90deg, rgba(0,0,0,0.15) 0 58px, rgba(255,255,255,0.03) 58px 116px)",
        backgroundSize: "58px 26px, 58px 26px, 116px 52px",
        backgroundPosition: "0 0, 0 0, 0 13px",
      };
    case "render":
      return {
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1.4px), radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1.4px)",
        backgroundSize: "7px 7px, 11px 11px",
        backgroundPosition: "0 0, 4px 5px",
      };
    case "roof":
      return {
        backgroundImage:
          "repeating-linear-gradient(115deg, rgba(0,0,0,0.28) 0 3px, transparent 3px 34px), repeating-linear-gradient(115deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 34px)",
        backgroundSize: "48px 48px",
      };
    case "decking":
      return {
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(0,0,0,0.28) 0 4px, transparent 4px 46px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 4px 6px, transparent 6px 46px)",
        backgroundSize: "46px 100%",
      };
    case "abstract":
    default:
      return {
        backgroundImage:
          "radial-gradient(65% 65% at 18% 15%, rgba(20,135,223,0.65), transparent 62%), radial-gradient(60% 60% at 88% 80%, rgba(183,234,40,0.5), transparent 62%)",
      };
  }
}

const toneOverlay: Record<Tone, string> = {
  before:
    "bg-[linear-gradient(160deg,rgba(41,38,20,0.75),rgba(20,22,14,0.9))] saturate-75 brightness-[0.62] contrast-95",
  after:
    "bg-[linear-gradient(160deg,rgba(6,44,79,0.28),rgba(6,17,10,0.55))] saturate-125 brightness-100 contrast-110",
  brand: "bg-[linear-gradient(160deg,rgba(6,20,33,0.4),rgba(5,7,8,0.55))]",
  dusk: "bg-[linear-gradient(160deg,rgba(5,7,8,0.15),rgba(5,7,8,0.6))]",
};

const baseTint =
  "bg-[radial-gradient(130%_130%_at_15%_0%,rgba(20,135,223,0.3),transparent_55%),radial-gradient(130%_130%_at_95%_100%,rgba(183,234,40,0.22),transparent_55%)]";

export function MediaPanel({
  surface = "abstract",
  tone = "brand",
  icon: Icon,
  label,
  className,
  children,
}: {
  surface?: Surface;
  tone?: Tone;
  icon?: LucideIcon;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate overflow-hidden bg-ink-900",
        className,
      )}
    >
      <div className={cn("absolute inset-0", baseTint)} />
      <div className="absolute inset-0" style={surfaceStyle(surface)} />
      <div className={cn("absolute inset-0", toneOverlay[tone])} />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_URI}")` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950/70 via-transparent to-transparent" />
      {Icon ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className={cn(
              "size-10 sm:size-12",
              tone === "after" ? "text-lime-300/70" : "text-white/25",
            )}
            strokeWidth={1.4}
          />
        </div>
      ) : null}
      {label ? (
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-sm">
          {label}
        </span>
      ) : null}
      {children}
    </div>
  );
}

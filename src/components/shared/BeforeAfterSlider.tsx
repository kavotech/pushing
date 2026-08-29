"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { MediaPanel, type Surface } from "./MediaPanel";
import { Photo } from "./Photo";
import type { Photo as PhotoData } from "@/lib/photos-data";
import { cn } from "@/lib/cn";

type BeforeAfterSliderProps = {
  title: string;
  className?: string;
} & ({ surface: Surface; before?: never; after?: never } | {
  surface?: never;
  before: PhotoData;
  after: PhotoData;
});

export function BeforeAfterSlider({ title, className, ...media }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl sm:aspect-[16/11]",
        className,
      )}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as Element).setPointerCapture?.(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      {media.surface ? (
        <MediaPanel surface={media.surface} tone="after" className="absolute inset-0" label="After" />
      ) : (
        <>
          <Photo photo={media.after} className="absolute inset-0" />
          <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-sm">
            After
          </span>
        </>
      )}

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {media.surface ? (
          <MediaPanel
            surface={media.surface}
            tone="before"
            className="absolute inset-0 h-full w-full"
            label="Before"
          />
        ) : (
          <div className="absolute inset-0 h-full w-full">
            <Photo photo={media.before} className="absolute inset-0" />
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-sm">
              Before
            </span>
          </div>
        )}
      </div>

      <div
        className="absolute inset-y-0 z-10 flex w-0.5 -translate-x-1/2 flex-col items-center bg-white/70"
        style={{ left: `${position}%` }}
      >
        <div className="pointer-events-none absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-950 shadow-lg">
          <MoveHorizontal className="size-4" />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`Before and after comparison slider for ${title}`}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />

      <div className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full bg-ink-950/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {title}
      </div>
    </div>
  );
}

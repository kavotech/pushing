"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { MediaPanel, type Surface } from "./MediaPanel";
import { cn } from "@/lib/cn";

export function BeforeAfterSlider({
  surface,
  title,
  className,
}: {
  surface: Surface;
  title: string;
  className?: string;
}) {
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
      <MediaPanel surface={surface} tone="after" className="absolute inset-0" label="After" />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <MediaPanel surface={surface} tone="before" className="absolute inset-0 h-full w-full" label="Before" />
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

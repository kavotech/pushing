"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

type Segment = { text: string; gradient?: boolean };

const segments: Segment[] = [
  { text: "Need Your Property " },
  { text: "Professionally Cleaned?", gradient: true },
  { text: " We Can Help!" },
];

const fullText = segments.map((segment) => segment.text).join("");

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function sliceSegments(visibleChars: number) {
  let remaining = visibleChars;
  return segments.map((segment, index) => {
    const take = Math.max(0, Math.min(segment.text.length, remaining));
    remaining -= take;
    return { ...segment, visible: segment.text.slice(0, take), key: index };
  });
}

export function TypewriterHeadline({ className }: { className?: string }) {
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      i += 1;
      setCount(i);
      if (i < fullText.length) {
        timer = setTimeout(tick, 34);
      }
    }

    const startTimer = setTimeout(tick, 350);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, [reduceMotion]);

  const visibleChars = reduceMotion ? fullText.length : count;
  const done = visibleChars >= fullText.length;
  const rendered = sliceSegments(visibleChars);

  return (
    <h1
      className={cn(
        "text-balance text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.25rem]",
        className,
      )}
    >
      <span aria-hidden="true">
        {rendered.map((segment) =>
          segment.gradient ? (
            <span key={segment.key} className="text-gradient">
              {segment.visible}
            </span>
          ) : (
            <span key={segment.key}>{segment.visible}</span>
          ),
        )}
        {reduceMotion ? null : (
          <span
            className={cn(
              "ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.12em] animate-pulse bg-lime-300 align-middle",
              done && "opacity-70",
            )}
          />
        )}
      </span>
      <span className="sr-only">{fullText}</span>
    </h1>
  );
}

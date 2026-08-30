"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "pushing-pressure-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const timer = setTimeout(() => setVisible(true), 700);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage unavailable (private browsing etc.) — skip the banner.
    }
  }, []);

  function respond(choice: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Ignore — nothing to persist to, the banner just won't reappear this visit.
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie notice"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-md rounded-2xl border border-ink-100 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(10,24,48,0.35)] sm:inset-x-auto sm:left-6 sm:bottom-6"
        >
          <div className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Cookie className="size-4" strokeWidth={1.5} />
            </span>
            <div>
              <h2 className="text-sm font-semibold text-ink-900">Cookies</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                We use essential cookies to make this site work properly. We don&apos;t use
                tracking or advertising cookies.{" "}
                <Link href="/legal/privacy-policy" className="focus-ring underline hover:text-blue-600">
                  Learn more
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => respond("accepted")}
              className="focus-ring inline-flex flex-1 items-center justify-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => respond("declined")}
              className="focus-ring inline-flex flex-1 items-center justify-center rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              Decline
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

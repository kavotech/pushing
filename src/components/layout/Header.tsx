"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { primaryNav } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [renderedPathname, setRenderedPathname] = useState(pathname);

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Backdrop-filter lives on this inner wrapper, not <header> itself —
          a filter/backdrop-filter on the fixed ancestor would turn it into
          the containing block for its fixed children (the mobile overlay
          and drawer below), collapsing them to the header's own height. */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled || open
            ? "bg-ink-950/85 shadow-[0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            : "bg-linear-to-b from-ink-950/70 to-transparent",
        )}
      >
        <Container className="flex h-18 items-center justify-between py-3.5 sm:py-4">
          <Link href="/" className="focus-ring rounded-md" aria-label={`${siteConfig.name} home`}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {primaryNav.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "focus-ring relative text-sm font-medium tracking-wide text-ink-100 transition-colors hover:text-white",
                    active && "text-white",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-lime-300 transition-transform duration-300",
                      active && "scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={siteConfig.phoneHref}
              className="focus-ring flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-lime-300"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
            <Button href="/quote" size="md">
              Get A Free Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col border-l border-white/10 bg-ink-950 px-6 py-6 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white"
                aria-label="Close navigation menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {primaryNav.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="focus-ring flex items-center justify-between border-b border-white/8 py-4 text-lg font-medium text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4 pt-8">
              <a
                href={siteConfig.phoneHref}
                className="focus-ring flex items-center justify-center gap-2 rounded-full border border-white/20 py-3.5 text-sm font-semibold text-white"
              >
                <Phone className="size-4" />
                {siteConfig.phone}
              </a>
              <Button href="/quote" className="w-full justify-center">
                Get A Free Quote
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

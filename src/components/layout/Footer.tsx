import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/shared/SocialIcons";
import { services } from "@/lib/services-data";
import { areas } from "@/lib/areas-data";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink-950">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Container className="relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Pushing Pressure on Facebook"
                className="focus-ring-dark inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-ink-200 transition-colors hover:border-lime-300/50 hover:text-lime-300"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Pushing Pressure on Instagram"
                className="focus-ring-dark inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-ink-200 transition-colors hover:border-lime-300/50 hover:text-lime-300"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="focus-ring-dark text-sm text-ink-300 transition-colors hover:text-lime-300"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Areas We Cover
            </h3>
            <ul className="mt-5 space-y-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas-we-cover/${area.slug}`}
                    className="focus-ring-dark text-sm text-ink-300 transition-colors hover:text-lime-300"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas-we-cover"
                  className="focus-ring-dark text-sm text-blue-300 transition-colors hover:text-lime-300"
                >
                  View all areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-300">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="focus-ring-dark flex items-start gap-3 transition-colors hover:text-lime-300"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-blue-400" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="focus-ring-dark flex items-start gap-3 transition-colors hover:text-lime-300"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-blue-400" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-blue-400" />
                Serving London, Surrey, Essex &amp; Kent
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/guides" className="focus-ring-dark hover:text-ink-200">
              Guides
            </Link>
            <Link href="/legal/privacy-policy" className="focus-ring-dark hover:text-ink-200">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="focus-ring-dark hover:text-ink-200">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="focus-ring-dark hover:text-ink-200">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

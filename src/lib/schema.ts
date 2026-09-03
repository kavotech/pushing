import { siteConfig } from "./site-config";

const DAY_ORDER = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

function expandDayRange(range: string): string[] {
  const [start, end] = range.split("–").map((part) => part.trim());
  if (!end) return [start];
  const startIndex = DAY_ORDER.indexOf(start as (typeof DAY_ORDER)[number]);
  const endIndex = DAY_ORDER.indexOf(end as (typeof DAY_ORDER)[number]);
  if (startIndex === -1 || endIndex === -1) return [];
  const days: string[] = [];
  for (let i = startIndex; i <= endIndex; i += 1) days.push(DAY_ORDER[i]);
  return days;
}

function to24HourTime(time: string): string | null {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})(am|pm)$/i);
  if (!match) return null;
  let hour = Number(match[1]);
  const [, , minute, meridiem] = match;
  const lowerMeridiem = meridiem.toLowerCase();
  if (lowerMeridiem === "pm" && hour !== 12) hour += 12;
  if (lowerMeridiem === "am" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

function openingHoursSpecification() {
  return siteConfig.hours.flatMap((entry) => {
    if (entry.time.toLowerCase() === "closed") return [];
    const [opensRaw, closesRaw] = entry.time.split("–").map((part) => part.trim());
    const opens = to24HourTime(opensRaw);
    const closes = to24HourTime(closesRaw);
    if (!opens || !closes) return [];
    return expandDayRange(entry.days).map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day}`,
      opens,
      closes,
    }));
  });
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.jpg`,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    openingHoursSpecification: openingHoursSpecification(),
    sameAs: Object.values(siteConfig.social),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: args.name,
    name: args.name,
    description: args.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    url: `${siteConfig.url}/services/${args.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

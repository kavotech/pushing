import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import { areas } from "@/lib/areas-data";
import { guides } from "@/lib/guides-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/areas-we-cover`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/guides`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/quote`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/legal/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/legal/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${siteConfig.url}/areas-we-cover/${area.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...guideRoutes];
}

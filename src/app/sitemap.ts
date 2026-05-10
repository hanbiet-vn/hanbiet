import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE = "https://hanbiet.com";

const SLUGS = [
  { path: "", priority: 1, freq: "weekly" as const },
  { path: "/ten-han-quoc", priority: 0.9, freq: "weekly" as const },
  { path: "/sau-han-quoc", priority: 0.9, freq: "weekly" as const },
  { path: "/mon-an-han-quoc", priority: 0.9, freq: "weekly" as const },
  { path: "/gioi-thieu", priority: 0.5, freq: "monthly" as const },
  { path: "/chinh-sach-bao-mat", priority: 0.3, freq: "yearly" as const },
  { path: "/dieu-khoan", priority: 0.3, freq: "yearly" as const },
  { path: "/lien-he", priority: 0.3, freq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const slug of SLUGS) {
    for (const locale of routing.locales) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      const url = `${SITE}${prefix}${slug.path || "/"}`;
      entries.push({
        url: url.replace(/\/$/, "") || `${SITE}${prefix}/`,
        lastModified: now,
        changeFrequency: slug.freq,
        priority: slug.priority,
      });
    }
  }
  return entries;
}

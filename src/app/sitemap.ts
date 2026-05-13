import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { ARTICLES } from "@/lib/articles";
import { FOODS } from "@/lib/foods";

const SITE = "https://hanbiet.com";

const SLUGS = [
  { path: "", priority: 1, freq: "weekly" as const },
  { path: "/ten-han-quoc", priority: 0.9, freq: "weekly" as const },
  { path: "/sau-han-quoc", priority: 0.9, freq: "weekly" as const },
  { path: "/saju-cap-doi", priority: 0.9, freq: "weekly" as const },
  { path: "/mon-an-han-quoc", priority: 0.9, freq: "weekly" as const },
  { path: "/joseon-test", priority: 0.9, freq: "weekly" as const },
  { path: "/doc-seoul", priority: 0.8, freq: "monthly" as const },
  { path: "/bai-viet", priority: 0.8, freq: "weekly" as const },
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

  for (const article of ARTICLES) {
    for (const locale of routing.locales) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      entries.push({
        url: `${SITE}${prefix}/bai-viet/${article.slug}`,
        lastModified: new Date(article.publishDate),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  for (const food of FOODS) {
    for (const locale of routing.locales) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      entries.push({
        url: `${SITE}${prefix}/mon-an-han-quoc/${food.id}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}

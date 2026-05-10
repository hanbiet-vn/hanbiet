import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["vi", "ko"] as const,
  defaultLocale: "vi",
  localePrefix: "as-needed", // "/" → vi, "/ko/..." → ko
  localeDetection: false, // URL is the source of truth — don't auto-redirect by Accept-Language
});

export type Locale = (typeof routing.locales)[number];

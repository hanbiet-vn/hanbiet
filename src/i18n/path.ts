import { routing, type Locale } from "./routing";

// Build a path that respects the locale prefix policy.
// vi (default): "/" -> "/", "/ten-han-quoc" -> "/ten-han-quoc"
// ko:           "/" -> "/ko", "/ten-han-quoc" -> "/ko/ten-han-quoc"
export function localizedPath(locale: Locale, slug: string): string {
  if (locale === routing.defaultLocale) {
    return slug || "/";
  }
  if (slug === "/" || slug === "") return `/${locale}`;
  return `/${locale}${slug.startsWith("/") ? "" : "/"}${slug}`;
}

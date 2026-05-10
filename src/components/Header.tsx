import Link from "next/link";
import { type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import { localizedPath } from "@/i18n/path";

export default function Header({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const p = (slug: string) => localizedPath(locale, slug);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={p("/")} className="flex items-center gap-2 font-bold text-lg">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-white text-sm">
            한
          </span>
          <span className="text-zinc-900">{t.common.siteName}</span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden gap-5 text-sm font-medium text-zinc-700 sm:flex">
            <Link href={p("/ten-han-quoc")} className="hover:text-[var(--brand)]">{t.nav.name}</Link>
            <Link href={p("/sau-han-quoc")} className="hover:text-[var(--brand)]">{t.nav.saju}</Link>
            <Link href={p("/mon-an-han-quoc")} className="hover:text-[var(--brand)]">{t.nav.food}</Link>
            <Link href={p("/bai-viet")} className="hover:text-[var(--brand)]">{t.nav.blog}</Link>
            <Link href={p("/gioi-thieu")} className="hover:text-[var(--brand)]">{t.nav.about}</Link>
          </nav>

          <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-0.5 text-xs">
            <Link
              href="/"
              className={`rounded-full px-2.5 py-1 font-medium ${locale === "vi" ? "bg-[var(--brand)] text-white" : "text-zinc-600 hover:text-zinc-900"}`}
            >
              VI
            </Link>
            <Link
              href="/ko"
              className={`rounded-full px-2.5 py-1 font-medium ${locale === "ko" ? "bg-[var(--brand)] text-white" : "text-zinc-600 hover:text-zinc-900"}`}
            >
              KO
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

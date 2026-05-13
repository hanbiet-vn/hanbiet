import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import { localizedPath } from "@/i18n/path";
import {
  articlesSorted,
  CATEGORY_LABEL,
  CATEGORY_DESC,
  CATEGORY_ORDER,
  type ArticleCategory,
  type Article,
} from "@/lib/articles";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  const path = locale === routing.defaultLocale ? "" : `/${locale}`;
  return {
    title: t.metadata.blogTitle,
    description: t.metadata.blogDesc,
    alternates: { canonical: `https://hanbiet.com${path}/bai-viet` },
  };
}

const CATEGORY_EMOJI: Record<ArticleCategory, string> = {
  trend: "🔥",
  culture: "🎎",
  name: "🌸",
  saju: "🔮",
  food: "🍜",
  language: "📚",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = getDict(locale);
  const sorted = articlesSorted();

  // Group articles by category, preserving newest-first within each
  const grouped = new Map<ArticleCategory, Article[]>();
  for (const cat of CATEGORY_ORDER) grouped.set(cat, []);
  for (const article of sorted) {
    grouped.get(article.category)?.push(article);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-16">
      <header className="mb-10 text-center">
        <div className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--brand)]">
          {t.blogPage.eyebrow}
        </div>
        <h1 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
          {t.blogPage.title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t.blogPage.subtitle}</p>

        {/* Category jump nav */}
        <nav className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {CATEGORY_ORDER.map((cat) => {
            const count = grouped.get(cat)?.length ?? 0;
            if (count === 0) return null;
            return (
              <a
                key={cat}
                href={`#cat-${cat}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <span>{CATEGORY_EMOJI[cat]}</span>
                <span>{CATEGORY_LABEL[locale][cat]}</span>
                <span className="text-zinc-400">({count})</span>
              </a>
            );
          })}
        </nav>
      </header>

      <div className="space-y-14">
        {CATEGORY_ORDER.map((cat) => {
          const items = grouped.get(cat) ?? [];
          if (items.length === 0) return null;
          return (
            <section key={cat} id={`cat-${cat}`} className="scroll-mt-20">
              <div className="mb-5 border-b border-zinc-200 pb-3">
                <h2 className="flex items-center gap-2 text-2xl font-extrabold text-zinc-900">
                  <span>{CATEGORY_EMOJI[cat]}</span>
                  <span>{CATEGORY_LABEL[locale][cat]}</span>
                  <span className="text-base font-normal text-zinc-400">
                    ({items.length})
                  </span>
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  {CATEGORY_DESC[locale][cat]}
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {items.map((a) => (
                  <Link
                    key={a.slug}
                    href={localizedPath(locale, `/bai-viet/${a.slug}`)}
                    className="card group flex flex-col transition hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{a.emoji}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[var(--brand)]">
                          {locale === "ko" ? a.titleKo : a.titleVi}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm text-zinc-600">
                          {locale === "ko" ? a.descKo : a.descVi}
                        </p>
                        <div className="mt-3 text-xs text-zinc-500">
                          {a.publishDate} · {a.readMinutes} {t.blogPage.minRead}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <p className="mt-12 text-center text-sm text-zinc-500">{t.blogPage.moreComing}</p>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import { localizedPath } from "@/i18n/path";
import { articlesSorted, CATEGORY_LABEL } from "@/lib/articles";

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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = getDict(locale);
  const articles = articlesSorted();

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
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={localizedPath(locale, `/bai-viet/${a.slug}`)}
            className="card group flex flex-col transition hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl">{a.emoji}</div>
              <div className="flex-1">
                <span className="inline-block rounded-full bg-[var(--brand-soft)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--brand)]">
                  {CATEGORY_LABEL[locale][a.category]}
                </span>
                <h2 className="mt-2 text-lg font-bold text-zinc-900 group-hover:text-[var(--brand)]">
                  {locale === "ko" ? a.titleKo : a.titleVi}
                </h2>
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

      <p className="mt-10 text-center text-sm text-zinc-500">{t.blogPage.moreComing}</p>
    </div>
  );
}

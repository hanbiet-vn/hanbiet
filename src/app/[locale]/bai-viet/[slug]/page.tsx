import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import { localizedPath } from "@/i18n/path";
import {
  ARTICLES,
  CATEGORY_LABEL,
  articlesSorted,
  getArticle,
} from "@/lib/articles";
import ArticleBody from "@/components/ArticleBody";
import ShareButtons from "@/components/ShareButtons";
import AdSlot from "@/components/AdSlot";

const SITE_URL = "https://hanbiet.com";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const a of ARTICLES) {
      params.push({ locale, slug: a.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const path = locale === routing.defaultLocale ? "" : `/${locale}`;
  return {
    title: locale === "ko" ? article.titleKo : article.titleVi,
    description: locale === "ko" ? article.descKo : article.descVi,
    alternates: { canonical: `${SITE_URL}${path}/bai-viet/${article.slug}` },
    openGraph: {
      title: locale === "ko" ? article.titleKo : article.titleVi,
      description: locale === "ko" ? article.descKo : article.descVi,
      type: "article",
      publishedTime: article.publishDate,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getArticle(slug);
  if (!article) notFound();

  const t = getDict(locale);
  const title = locale === "ko" ? article.titleKo : article.titleVi;
  const desc = locale === "ko" ? article.descKo : article.descVi;
  const others = articlesSorted()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
      <Link
        href={localizedPath(locale, "/bai-viet")}
        className="inline-block text-sm font-medium text-[var(--brand)] hover:underline"
      >
        ← {t.blogPage.backToList}
      </Link>

      <header className="mt-4 mb-8">
        <span className="inline-block rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]">
          {CATEGORY_LABEL[locale][article.category]}
        </span>
        <h1 className="mt-3 text-3xl font-extrabold text-zinc-900 sm:text-4xl">
          <span className="mr-2">{article.emoji}</span>
          {title}
        </h1>
        <p className="mt-3 text-zinc-600">{desc}</p>
        <div className="mt-4 text-sm text-zinc-500">
          {article.publishDate} · {article.readMinutes} {t.blogPage.minRead}
        </div>
      </header>

      <ArticleBody blocks={article.body} locale={locale} />

      <div className="mt-10 border-t border-zinc-200 pt-6">
        <ShareButtons
          title={title}
          text={
            locale === "ko"
              ? `📖 흥미로운 글 발견 — "${article.titleKo}" via Hanbiet`
              : `📖 Bài viết hay từ Hanbiet — "${article.titleVi}"`
          }
          url={`${SITE_URL}${localizedPath(locale, `/bai-viet/${article.slug}`)}`}
          locale={locale}
        />
      </div>

      <div className="my-10">
        <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_ARTICLE_BOTTOM} locale={locale} />
      </div>

      {others.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">{t.blogPage.related}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={localizedPath(locale, `/bai-viet/${a.slug}`)}
                className="card transition hover:shadow-md"
              >
                <div className="text-2xl">{a.emoji}</div>
                <div className="mt-2 text-sm font-semibold text-zinc-900 line-clamp-2">
                  {locale === "ko" ? a.titleKo : a.titleVi}
                </div>
                <div className="mt-1 text-xs text-zinc-500">
                  {a.readMinutes} {t.blogPage.minRead}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

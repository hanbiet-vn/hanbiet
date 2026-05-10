import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import { localizedPath } from "@/i18n/path";

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
    title: t.metadata.aboutTitle,
    description: t.metadata.aboutDesc,
    alternates: { canonical: `https://hanbiet.com${path}/gioi-thieu` },
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
  const p = (slug: string) => localizedPath(locale, slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">{t.about.title}</h1>
      <div className="mt-6 space-y-5 text-zinc-700">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <ul className="list-disc pl-6">
          <li>
            <Link className="font-semibold text-[var(--brand)] underline" href={p("/ten-han-quoc")}>
              {t.about.l1a}
            </Link>
            {t.about.l1b}
          </li>
          <li>
            <Link className="font-semibold text-[var(--brand)] underline" href={p("/sau-han-quoc")}>
              {t.about.l2a}
            </Link>
            {t.about.l2b}
          </li>
        </ul>
        <p>{t.about.p3}</p>
        <p>
          {t.about.p4a}
          <Link className="text-[var(--brand)] underline" href={p("/lien-he")}>
            {t.about.p4link}
          </Link>
          {t.about.p4b}
        </p>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";

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
    title: t.metadata.termsTitle,
    description: t.metadata.termsDesc,
    alternates: { canonical: `https://hanbiet.com${path}/dieu-khoan` },
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
  const updated = new Date().toLocaleDateString(locale === "ko" ? "ko-KR" : "vi-VN");

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">{t.terms.title}</h1>
      <p className="mt-2 text-sm text-zinc-500">{t.terms.lastUpdated}: {updated}</p>

      <div className="mt-8 space-y-6 text-zinc-700">
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.terms.h1}</h2>
          <p>{t.terms.p1}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.terms.h2}</h2>
          <p>{t.terms.p2}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.terms.h3}</h2>
          <p>{t.terms.p3}</p>
          <ul className="list-disc pl-6">
            {t.terms.p3list.map((x: string) => (<li key={x}>{x}</li>))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.terms.h4}</h2>
          <p>{t.terms.p4}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.terms.h5}</h2>
          <p>{t.terms.p5}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.terms.h6}</h2>
          <p>{t.terms.p6}</p>
        </section>
      </div>
    </article>
  );
}

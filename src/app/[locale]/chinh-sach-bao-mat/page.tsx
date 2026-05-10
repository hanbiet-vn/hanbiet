import type { Metadata } from "next";
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
    title: t.metadata.privacyTitle,
    description: t.metadata.privacyDesc,
    alternates: { canonical: `https://hanbiet.com${path}/chinh-sach-bao-mat` },
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
      <h1 className="text-3xl font-extrabold">{t.privacy.title}</h1>
      <p className="mt-2 text-sm text-zinc-500">{t.privacy.lastUpdated}: {updated}</p>

      <div className="mt-8 space-y-6 text-zinc-700">
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.privacy.h1}</h2>
          <p>{t.privacy.p1}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.privacy.h2}</h2>
          <p><strong>{t.privacy.p2a}</strong></p>
          <p>{t.privacy.p2b}</p>
          <ul className="list-disc pl-6">
            {t.privacy.p2list.map((x: string) => (<li key={x}>{x}</li>))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.privacy.h3}</h2>
          <p>{t.privacy.p3a}</p>
          <ul className="list-disc pl-6">
            {t.privacy.p3list.map((x: string) => (<li key={x}>{x}</li>))}
          </ul>
          <p>{t.privacy.p3b}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.privacy.h4}</h2>
          <p>{t.privacy.p4a}</p>
          <p>
            {t.privacy.p4b}{" "}
            <a className="text-[var(--brand)] underline" href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer">
              {t.privacy.p4link}
            </a>.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.privacy.h5}</h2>
          <p>{t.privacy.p5}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-zinc-900">{t.privacy.h6}</h2>
          <p>
            {t.privacy.p6a}{" "}
            <a className="text-[var(--brand)] underline" href={localizedPath(locale, "/lien-he")}>
              {t.privacy.p6link}
            </a>.
          </p>
        </section>
      </div>
    </article>
  );
}

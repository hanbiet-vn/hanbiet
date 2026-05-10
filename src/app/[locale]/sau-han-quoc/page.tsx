import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import SajuForm from "@/components/SajuForm";
import AdSlot from "@/components/AdSlot";

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
    title: t.metadata.sajuTitle,
    description: t.metadata.sajuDesc,
    alternates: { canonical: `https://hanbiet.com${path}/sau-han-quoc` },
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

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:py-16">
      <header className="mb-10 text-center">
        <div className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--brand)]">
          {t.sajuPage.eyebrow}
        </div>
        <h1 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">{t.sajuPage.title}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t.sajuPage.subtitle}</p>
      </header>

      <SajuForm locale={locale} />

      <div className="my-12">
        <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_SAJU_BOTTOM} locale={locale} />
      </div>

      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-zinc-900">{t.sajuPage.aboutTitle}</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>{t.sajuPage.about1}</p>
          <p>{t.sajuPage.about2}</p>
          <p>{t.sajuPage.about3}</p>
          <p>{t.sajuPage.about4}</p>
        </div>
      </section>
    </div>
  );
}

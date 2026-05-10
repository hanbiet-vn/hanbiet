import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import NameGeneratorForm from "@/components/NameGeneratorForm";
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
    title: t.metadata.nameTitle,
    description: t.metadata.nameDesc,
    alternates: { canonical: `https://hanbiet.com${path}/ten-han-quoc` },
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
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
      <header className="mb-10 text-center">
        <div className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--brand)]">
          {t.namePage.eyebrow}
        </div>
        <h1 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">{t.namePage.title}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t.namePage.subtitle}</p>
      </header>

      <NameGeneratorForm locale={locale} />

      <div className="my-12">
        <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_NAME_BOTTOM} locale={locale} />
      </div>

      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-zinc-900">{t.namePage.aboutTitle}</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>{t.namePage.about1}</p>
          <p>{t.namePage.about2}</p>
          <p>{t.namePage.about3}</p>
          <p>{t.namePage.about4}</p>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import FoodQuiz from "@/components/FoodQuiz";
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
    title: t.metadata.foodTitle,
    description: t.metadata.foodDesc,
    alternates: { canonical: `https://hanbiet.com${path}/mon-an-han-quoc` },
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
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
      <header className="mb-8 text-center">
        <div className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--brand)]">
          {t.foodPage.eyebrow}
        </div>
        <h1 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">{t.foodPage.title}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t.foodPage.subtitle}</p>
      </header>

      <FoodQuiz locale={locale} />

      <div className="my-12">
        <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_FOOD_BOTTOM} locale={locale} />
      </div>

      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-zinc-900">{t.foodPage.aboutTitle}</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>{t.foodPage.about1}</p>
          <p>{t.foodPage.about2}</p>
        </div>
      </section>
    </div>
  );
}

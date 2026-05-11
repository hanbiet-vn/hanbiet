import type { Metadata } from "next";
import { Nanum_Brush_Script } from "next/font/google";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import JoseonTest from "@/components/JoseonTest";
import AdSlot from "@/components/AdSlot";

const brush = Nanum_Brush_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brush",
});

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
    title: t.metadata.joseonTitle,
    description: t.metadata.joseonDesc,
    alternates: { canonical: `https://hanbiet.com${path}/joseon-test` },
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
    <div className={`${brush.variable} mx-auto max-w-3xl px-4 py-10 sm:py-16`}>
      {/* Hanji background hero */}
      <header
        className="mb-10 rounded-3xl border border-amber-200/50 p-8 text-center sm:p-12"
        style={{
          backgroundColor: "#f5ecd9",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(180,150,100,0.10) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(120,80,50,0.06) 0%, transparent 50%)",
        }}
      >
        <div className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-amber-800/70">
          {t.joseon.eyebrow}
        </div>
        <h1 className="font-brush text-4xl text-amber-900 sm:text-6xl">
          {t.joseon.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-amber-900/80 sm:text-base">
          {t.joseon.subtitle}
        </p>
      </header>

      <JoseonTest locale={locale} />

      <div className="my-12">
        <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_JOSEON_BOTTOM} locale={locale} />
      </div>

      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-zinc-900">{t.joseon.aboutTitle}</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>{t.joseon.about1}</p>
          <p>{t.joseon.about2}</p>
        </div>
      </section>
    </div>
  );
}

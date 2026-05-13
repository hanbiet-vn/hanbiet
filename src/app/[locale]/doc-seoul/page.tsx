import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import { HILLS, type Difficulty } from "@/lib/seoul-hills";
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
    title: t.metadata.hillsTitle,
    description: t.metadata.hillsDesc,
    alternates: { canonical: `https://hanbiet.com${path}/doc-seoul` },
  };
}

const DIFFICULTY_COLOR: Record<Difficulty, string> = {
  1: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  2: "bg-lime-100 text-lime-800 ring-lime-200",
  3: "bg-amber-100 text-amber-800 ring-amber-200",
  4: "bg-orange-100 text-orange-800 ring-orange-200",
  5: "bg-rose-100 text-rose-800 ring-rose-200",
};

function DifficultyBadge({
  level,
  locale,
}: {
  level: Difficulty;
  locale: Locale;
}) {
  const t = getDict(locale);
  const labels = [
    t.hills.diff1,
    t.hills.diff2,
    t.hills.diff3,
    t.hills.diff4,
    t.hills.diff5,
  ];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ${DIFFICULTY_COLOR[level]}`}
    >
      <span>{"🥾".repeat(level)}</span>
      <span>{labels[level - 1]}</span>
    </span>
  );
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
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-16">
      {/* Hero */}
      <header className="mb-10 text-center">
        <div className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--brand)]">
          {t.hills.eyebrow}
        </div>
        <h1 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
          {t.hills.title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
          {t.hills.subtitle}
        </p>
      </header>

      {/* Warning callout */}
      <div className="mb-10 rounded-2xl border-2 border-amber-200 bg-amber-50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="text-3xl">⚠️</div>
          <div>
            <div className="font-bold text-amber-900">{t.hills.warnTitle}</div>
            <p className="mt-1 text-sm leading-relaxed text-amber-900/90">
              {t.hills.warnDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty legend */}
      <div className="mb-10">
        <h2 className="mb-4 text-lg font-bold text-zinc-900">
          {t.hills.legendTitle}
        </h2>
        <div className="grid gap-2 sm:grid-cols-5">
          {([1, 2, 3, 4, 5] as Difficulty[]).map((lv) => (
            <div
              key={lv}
              className={`flex flex-col items-center justify-center rounded-xl p-3 text-center ring-1 ${DIFFICULTY_COLOR[lv]}`}
            >
              <div className="text-base">{"🥾".repeat(lv)}</div>
              <div className="mt-1 text-xs font-bold">
                {
                  [
                    t.hills.diff1,
                    t.hills.diff2,
                    t.hills.diff3,
                    t.hills.diff4,
                    t.hills.diff5,
                  ][lv - 1]
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hill cards */}
      <div className="space-y-6">
        {HILLS.map((h) => (
          <article
            key={h.id}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
          >
            <div className="flex flex-wrap items-start gap-3">
              <div className="text-4xl">{h.emoji}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-extrabold text-zinc-900 sm:text-2xl">
                  {locale === "ko" ? h.nameKo : h.nameVi}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  {locale === "ko" ? h.shortKo : h.shortVi}
                </p>
              </div>
              <DifficultyBadge level={h.difficulty} locale={locale} />
            </div>

            {/* Quick stats */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              <div className="rounded-lg bg-zinc-100 px-3 py-1.5 font-semibold text-zinc-700">
                ⏱️ {h.walkingMinutes} {t.hills.minutesFromSubway}
              </div>
              <div className="rounded-lg bg-zinc-100 px-3 py-1.5 font-semibold text-zinc-700">
                ⛰️ {t.hills.elevation} {h.elevationMeters}m
              </div>
            </div>

            <p className="mt-4 leading-relaxed text-zinc-700">
              {locale === "ko" ? h.descKo : h.descVi}
            </p>

            <div className="mt-4 rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
                🚇 {t.hills.subwayLabel}
              </div>
              <p className="mt-1 text-sm font-medium text-blue-900">
                {locale === "ko" ? h.subwayKo : h.subwayVi}
              </p>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
                💡 {t.hills.tipsLabel}
              </div>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {(locale === "ko" ? h.tipsKo : h.tipsVi).map((tip) => (
                  <li key={tip} className="flex gap-2">
                    <span className="text-[var(--brand)]">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                🚕 {t.hills.alternativeLabel}
              </div>
              <p className="mt-1 text-sm font-medium text-emerald-900">
                {locale === "ko" ? h.alternativeKo : h.alternativeVi}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="my-12">
        <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_HILLS_BOTTOM} locale={locale} />
      </div>

      {/* General tips footer */}
      <section className="mt-12 rounded-2xl border-2 border-zinc-200 bg-zinc-50 p-6 sm:p-8">
        <h2 className="text-2xl font-extrabold text-zinc-900">
          🎒 {t.hills.generalTitle}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="font-bold text-zinc-900">👟 {t.hills.gear1Title}</div>
            <p className="mt-1 text-sm text-zinc-700">{t.hills.gear1Desc}</p>
          </div>
          <div>
            <div className="font-bold text-zinc-900">💧 {t.hills.gear2Title}</div>
            <p className="mt-1 text-sm text-zinc-700">{t.hills.gear2Desc}</p>
          </div>
          <div>
            <div className="font-bold text-zinc-900">🚕 {t.hills.gear3Title}</div>
            <p className="mt-1 text-sm text-zinc-700">{t.hills.gear3Desc}</p>
          </div>
          <div>
            <div className="font-bold text-zinc-900">📱 {t.hills.gear4Title}</div>
            <p className="mt-1 text-sm text-zinc-700">{t.hills.gear4Desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

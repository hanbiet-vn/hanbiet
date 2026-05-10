import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import { localizedPath } from "@/i18n/path";
import { FOODS, descOf } from "@/lib/foods";
import { getRecipe, gradientFor } from "@/lib/recipes";
import ShareButtons from "@/components/ShareButtons";
import AdSlot from "@/components/AdSlot";

const SITE_URL = "https://hanbiet.com";

export function generateStaticParams() {
  const params: { locale: string; id: string }[] = [];
  for (const locale of routing.locales) {
    for (const f of FOODS) {
      params.push({ locale, id: f.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const food = FOODS.find((f) => f.id === id);
  if (!food) return {};
  const path = locale === routing.defaultLocale ? "" : `/${locale}`;
  const title =
    locale === "ko"
      ? `${food.hangul} 레시피 — ${food.romanized}`
      : `Công thức ${food.hangul} (${food.nameVi}) — Hanbiet`;
  return {
    title,
    description: descOf(food, locale),
    alternates: { canonical: `${SITE_URL}${path}/mon-an-han-quoc/${food.id}` },
    openGraph: {
      title,
      description: descOf(food, locale),
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const food = FOODS.find((f) => f.id === id);
  if (!food) notFound();
  const t = getDict(locale);
  const recipe = getRecipe(food.id);
  const gradient = gradientFor(food.tags);
  const ingredients = recipe ? (locale === "ko" ? recipe.ingredientsKo : recipe.ingredientsVi) : [];
  const steps = recipe ? (locale === "ko" ? recipe.stepsKo : recipe.stepsVi) : [];
  const tip = recipe ? (locale === "ko" ? recipe.tipsKo : recipe.tipsVi) : undefined;

  const others = FOODS.filter((f) => f.id !== food.id).slice(0, 4);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
      <Link
        href={localizedPath(locale, "/mon-an-han-quoc")}
        className="inline-block text-sm font-medium text-[var(--brand)] hover:underline"
      >
        ← {t.foodDetail.backToList}
      </Link>

      {/* Hero with emoji gradient */}
      <div
        className={`mt-4 mb-6 flex h-56 items-center justify-center rounded-3xl bg-gradient-to-br ${gradient} sm:h-72`}
      >
        <div className="text-center text-white">
          <div className="text-7xl sm:text-8xl drop-shadow-lg">{food.emoji}</div>
          <div className="mt-2 text-2xl font-bold drop-shadow">{food.hangul}</div>
          <div className="text-sm opacity-90">{food.romanized}</div>
        </div>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
          {food.hangul}
          <span className="ml-2 text-xl font-normal text-zinc-500">({food.romanized})</span>
        </h1>
        <p className="mt-1 text-lg text-zinc-700">{food.nameVi}</p>
        <p className="mt-4 text-zinc-700 leading-relaxed">{descOf(food, locale)}</p>
      </header>

      {recipe && (
        <>
          {/* Recipe meta */}
          <div className="mb-8 grid grid-cols-3 gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center">
            <div>
              <div className="text-xs font-medium text-zinc-500">{t.foodDetail.difficulty}</div>
              <div className="mt-1 text-base font-bold text-zinc-900">
                {"⭐".repeat(recipe.difficulty)}
              </div>
            </div>
            <div>
              <div className="text-xs font-medium text-zinc-500">{t.foodDetail.time}</div>
              <div className="mt-1 text-base font-bold text-zinc-900">
                {recipe.totalMinutes} {t.foodDetail.minute}
              </div>
            </div>
            <div>
              <div className="text-xs font-medium text-zinc-500">{t.foodDetail.servings}</div>
              <div className="mt-1 text-base font-bold text-zinc-900">
                {recipe.servings} {t.foodDetail.servingsLabel}
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <section className="mb-8">
            <h2 className="mb-3 text-2xl font-bold text-zinc-900">
              🛒 {t.foodDetail.ingredients}
            </h2>
            <ul className="space-y-1.5 text-zinc-700">
              {ingredients.map((ing, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--brand)]">•</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Steps */}
          <section className="mb-8">
            <h2 className="mb-3 text-2xl font-bold text-zinc-900">
              👨‍🍳 {t.foodDetail.steps}
            </h2>
            <ol className="space-y-3 text-zinc-700">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {tip && (
            <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="font-bold text-amber-900">💡 {t.foodDetail.tipTitle}</div>
              <p className="mt-1 text-sm text-amber-900">{tip}</p>
            </div>
          )}
        </>
      )}

      {!recipe && (
        <div className="mb-8 rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-center text-zinc-600">
          {t.foodDetail.recipeComing}
        </div>
      )}

      <div className="my-8">
        <ShareButtons
          title={food.hangul}
          text={
            locale === "ko"
              ? `🍜 한식 레시피 — ${food.hangul} (${food.romanized})! 만들어보세요 👉`
              : `🍜 Công thức ${food.hangul} (${food.nameVi}) — đơn giản tại nhà 👉`
          }
          url={`${SITE_URL}${localizedPath(locale, `/mon-an-han-quoc/${food.id}`)}`}
          locale={locale}
        />
      </div>

      <div className="my-10">
        <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_FOOD_BOTTOM} locale={locale} />
      </div>

      {/* Related foods */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-bold text-zinc-900">{t.foodDetail.related}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((f) => (
            <Link
              key={f.id}
              href={localizedPath(locale, `/mon-an-han-quoc/${f.id}`)}
              className="card flex items-center gap-3 transition hover:shadow-md"
            >
              <div className="text-3xl">{f.emoji}</div>
              <div>
                <div className="text-sm font-bold text-zinc-900">{f.hangul}</div>
                <div className="text-xs text-zinc-500">{f.nameVi}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

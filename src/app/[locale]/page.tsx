import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import AdSlot from "@/components/AdSlot";
import { localizedPath } from "@/i18n/path";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = getDict(locale);
  const p = (slug: string) => localizedPath(locale, slug);

  return (
    <div>
      <section className="bg-gradient-to-b from-[var(--brand-soft)] to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/20 bg-white px-4 py-1.5 text-xs font-medium text-[var(--brand)]">
            {t.home.badge}
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            {t.home.titleA}
            <br />
            <span className="text-[var(--brand)]">{t.home.titleB}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">{t.home.desc}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href={p("/ten-han-quoc")} className="btn-primary">{t.home.ctaName}</Link>
            <Link href={p("/sau-han-quoc")} className="btn-outline">{t.home.ctaSaju}</Link>
            <Link href={p("/saju-cap-doi")} className="btn-outline">{t.home.ctaCouple}</Link>
            <Link href={p("/mon-an-han-quoc")} className="btn-outline">{t.home.ctaFood}</Link>
            <Link href={p("/joseon-test")} className="btn-outline">{t.home.ctaJoseon}</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <Link href={p("/ten-han-quoc")} className="card group transition hover:shadow-md">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-2xl">✨</div>
            <h2 className="text-xl font-bold text-zinc-900">{t.home.cardNameTitle}</h2>
            <p className="mt-2 text-zinc-600">{t.home.cardNameDesc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand)] group-hover:underline">
              {t.home.cardNameCta}
            </span>
          </Link>
          <Link href={p("/sau-han-quoc")} className="card group transition hover:shadow-md">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-2xl">🔮</div>
            <h2 className="text-xl font-bold text-zinc-900">{t.home.cardSajuTitle}</h2>
            <p className="mt-2 text-zinc-600">{t.home.cardSajuDesc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand)] group-hover:underline">
              {t.home.cardSajuCta}
            </span>
          </Link>
          <Link href={p("/saju-cap-doi")} className="card group transition hover:shadow-md">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-2xl">💞</div>
            <h2 className="text-xl font-bold text-zinc-900">{t.home.cardCoupleTitle}</h2>
            <p className="mt-2 text-zinc-600">{t.home.cardCoupleDesc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand)] group-hover:underline">
              {t.home.cardCoupleCta}
            </span>
          </Link>
          <Link href={p("/mon-an-han-quoc")} className="card group transition hover:shadow-md">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-2xl">🍜</div>
            <h2 className="text-xl font-bold text-zinc-900">{t.home.cardFoodTitle}</h2>
            <p className="mt-2 text-zinc-600">{t.home.cardFoodDesc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand)] group-hover:underline">
              {t.home.cardFoodCta}
            </span>
          </Link>
          <Link href={p("/joseon-test")} className="card group transition hover:shadow-md">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-2xl">🏯</div>
            <h2 className="text-xl font-bold text-zinc-900">{t.home.cardJoseonTitle}</h2>
            <p className="mt-2 text-zinc-600">{t.home.cardJoseonDesc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand)] group-hover:underline">
              {t.home.cardJoseonCta}
            </span>
          </Link>
        </div>

        <div className="my-12">
          <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_HOME_MID} locale={locale} />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-zinc-900">{t.home.whyTitle}</h2>
          <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
            <div>
              <div className="text-2xl">🆓</div>
              <div className="mt-2 font-semibold">{t.home.why1Title}</div>
              <p className="mt-1 text-sm text-zinc-600">{t.home.why1Desc}</p>
            </div>
            <div>
              <div className="text-2xl">🎓</div>
              <div className="mt-2 font-semibold">{t.home.why2Title}</div>
              <p className="mt-1 text-sm text-zinc-600">{t.home.why2Desc}</p>
            </div>
            <div>
              <div className="text-2xl">⚡</div>
              <div className="mt-2 font-semibold">{t.home.why3Title}</div>
              <p className="mt-1 text-sm text-zinc-600">{t.home.why3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "lienhe@hanbiet.com";

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
    title: t.metadata.contactTitle,
    description: t.metadata.contactDesc,
    alternates: { canonical: `https://hanbiet.com${path}/lien-he` },
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
    <article className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">{t.contact.title}</h1>
      <p className="mt-4 text-zinc-700">{t.contact.desc}</p>
      <div className="mt-8 card">
        <div className="text-sm font-medium text-zinc-500">{t.contact.emailLabel}</div>
        <a className="mt-1 block text-lg font-semibold text-[var(--brand)] hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <p className="mt-3 text-sm text-zinc-600">{t.contact.replyTime}</p>
      </div>
    </article>
  );
}

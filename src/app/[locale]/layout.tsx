import type { Metadata } from "next";
import { Be_Vietnam_Pro, Noto_Sans_KR } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-vi",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});
const notoKr = Noto_Sans_KR({
  variable: "--font-ko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://hanbiet.com";
// AdSense publisher ID is public info (visible in the script tag to all visitors),
// so we keep a default here and let env var override for dev/forks.
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-9235079129033755";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = getDict(locale);
  const path = locale === routing.defaultLocale ? "" : `/${locale}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.metadata.siteTitle, template: `%s | ${t.common.siteName}` },
    description: t.metadata.siteDesc,
    openGraph: {
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "vi_VN",
      url: `${SITE_URL}${path}`,
      siteName: t.common.siteName,
      title: t.metadata.ogTitle,
      description: t.metadata.ogDesc,
    },
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: { vi: SITE_URL, ko: `${SITE_URL}/ko`, "x-default": SITE_URL },
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const children = props.children;
  setRequestLocale(locale);
  const typedLocale = locale as Locale;
  const fontClass = locale === "ko" ? notoKr.variable : beVietnam.variable;

  return (
    <html lang={locale} className={`${fontClass} h-full antialiased`}>
      <head>
        {ADSENSE_CLIENT ? (
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <Header locale={typedLocale} />
        <main className="flex-1">{children}</main>
        <Footer locale={typedLocale} />
      </body>
    </html>
  );
}

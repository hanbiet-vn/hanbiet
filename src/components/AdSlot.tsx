"use client";

import { useEffect, useRef } from "react";
import { type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

type Props = {
  slot?: string;
  locale: Locale;
  format?: string;
  responsive?: boolean;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdSlot({
  slot, locale, format = "auto", responsive = true, className = "",
}: Props) {
  const pushed = useRef(false);
  useEffect(() => {
    if (!ADSENSE_CLIENT || !slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch { /* ignore */ }
  }, [slot]);

  if (!ADSENSE_CLIENT || !slot) {
    const t = getDict(locale);
    return (
      <div
        className={`flex items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-4 py-6 text-xs text-zinc-400 ${className}`}
      >
        {t.ad.placeholder}
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}

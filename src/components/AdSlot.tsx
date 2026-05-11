"use client";

import { useEffect, useRef } from "react";
import { type Locale } from "@/i18n/routing";

const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-9235079129033755";

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
    return null;
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

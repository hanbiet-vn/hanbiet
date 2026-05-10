"use client";

import { useState } from "react";
import { getDict } from "@/i18n/dict";
import type { Locale } from "@/i18n/routing";

type Props = {
  title: string;
  text: string;
  url: string;
  locale: Locale;
  compact?: boolean;
};

export default function ShareButtons({ title, text, url, locale, compact = false }: Props) {
  const t = getDict(locale);
  const [copied, setCopied] = useState(false);

  async function handleNative() {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url });
      } catch {
        /* user cancelled */
      }
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked */
    }
  }

  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
  const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;

  const hasNativeShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  const sizeClass = compact
    ? "h-8 w-8 text-sm"
    : "h-10 w-10 text-base";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {!compact && <span className="text-sm font-medium text-zinc-600">{t.share.label}</span>}
      {hasNativeShare && (
        <button
          type="button"
          onClick={handleNative}
          aria-label={t.share.share}
          title={t.share.share}
          className={`${sizeClass} inline-flex items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-sm transition hover:opacity-90`}
        >
          📤
        </button>
      )}
      <a
        href={fbUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        title="Facebook"
        className={`${sizeClass} inline-flex items-center justify-center rounded-full bg-[#1877F2] font-bold text-white transition hover:opacity-90`}
      >
        f
      </a>
      <a
        href={xUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="X (Twitter)"
        title="X"
        className={`${sizeClass} inline-flex items-center justify-center rounded-full bg-black font-bold text-white transition hover:opacity-90`}
      >
        𝕏
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={t.share.copy}
        title={t.share.copy}
        className={`${sizeClass} inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-[var(--brand)] hover:text-[var(--brand)]`}
      >
        {copied ? "✓" : "🔗"}
      </button>
      {copied && <span className="text-xs font-medium text-green-600">{t.share.copied}</span>}
    </div>
  );
}

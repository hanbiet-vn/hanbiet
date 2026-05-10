"use client";

import { useState } from "react";
import { generateNames, type GeneratedName } from "@/lib/name-generator";
import { type VibeTag } from "@/lib/korean-data";
import { getDict } from "@/i18n/dict";
import { type Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/path";
import ShareButtons from "./ShareButtons";

const VIBE_OPTIONS: VibeTag[] = [
  "trendy", "intelligent", "beautiful", "strong", "lucky", "kind", "bright", "noble",
];

const SITE_URL = "https://hanbiet.com";

export default function NameGeneratorForm({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const [gender, setGender] = useState<"M" | "F">("F");
  const [vibes, setVibes] = useState<VibeTag[]>(["trendy"]);
  const [results, setResults] = useState<GeneratedName[]>([]);
  const [generated, setGenerated] = useState(false);

  function toggleVibe(v: VibeTag) {
    setVibes((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  }

  function run() {
    setResults(generateNames({
      gender, vibes, count: 6, seed: Date.now(), locale,
    }));
    setGenerated(true);
  }

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    run();
  }

  const trendyBadge = locale === "ko" ? "🔥 요즘 인기" : "🔥 Đang HOT";
  const pageUrl = `${SITE_URL}${localizedPath(locale, "/ten-han-quoc")}`;

  function shareText(n: GeneratedName) {
    if (locale === "ko") {
      return `🇰🇷 내 한국 이름은 "${n.fullHangul} (${n.fullRomanized})"!\n${n.story}\n\n나만의 한국 이름 만들기 👉`;
    }
    return `🇰🇷 Tên Hàn Quốc của tôi là "${n.fullHangul} (${n.fullRomanized})"!\n${n.story}\n\nTạo tên Hàn của bạn 👉`;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
      <form onSubmit={handleGenerate} className="card h-fit">
        <h2 className="mb-4 text-lg font-bold">{t.nameForm.yourInfo}</h2>

        <div className="mb-4">
          <label className="label">{t.nameForm.gender}</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGender("F")}
              className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
                gender === "F"
                  ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
              }`}
            >
              {t.nameForm.female}
            </button>
            <button
              type="button"
              onClick={() => setGender("M")}
              className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
                gender === "M"
                  ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
              }`}
            >
              {t.nameForm.male}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="label">{t.nameForm.vibe}</label>
          <div className="flex flex-wrap gap-2">
            {VIBE_OPTIONS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => toggleVibe(v)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                  vibes.includes(v)
                    ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
                }`}
              >
                {t.nameForm.vibes[v]}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="btn-primary w-full">{t.nameForm.generate}</button>
        <p className="mt-3 text-xs text-zinc-500">{t.nameForm.hint}</p>
      </form>

      <div>
        {!generated && (
          <div className="card flex h-full min-h-[300px] items-center justify-center text-center text-zinc-500">
            {t.nameForm.placeholder}
          </div>
        )}

        {generated && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">{t.nameForm.resultsTitle}</h2>
              <button
                type="button"
                onClick={run}
                className="text-sm font-semibold text-[var(--brand)] hover:underline"
              >
                {t.nameForm.regenerate}
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {results.map((n, idx) => (
                <div key={idx} className="card relative flex flex-col">
                  {n.isTrendy && (
                    <span className="absolute right-3 top-3 rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-semibold text-rose-700">
                      {trendyBadge}
                    </span>
                  )}
                  <div className="flex items-baseline justify-between gap-3 pr-16">
                    <div className="text-3xl font-bold text-zinc-900">{n.fullHangul}</div>
                    <div className="text-base text-zinc-500" title="Hanja">{n.fullHanja}</div>
                  </div>
                  <div className="mt-1 text-sm font-medium text-[var(--brand)]">{n.fullRomanized}</div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-700">{n.story}</p>
                  <div className="mt-4 border-t border-zinc-100 pt-3">
                    <ShareButtons
                      title={n.fullHangul}
                      text={shareText(n)}
                      url={pageUrl}
                      locale={locale}
                      compact
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

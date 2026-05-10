"use client";

import { useState } from "react";
import { calculateSaju, WUXING_LABEL, type SajuResult, type WuXingKey } from "@/lib/saju";
import { getDict } from "@/i18n/dict";
import { type Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/path";
import ShareButtons from "./ShareButtons";

const SITE_URL = "https://hanbiet.com";

const ELEMENT_EMOJI: Record<WuXingKey, string> = {
  wood: "🌳", fire: "🔥", earth: "🪨", metal: "⚙️", water: "💧",
};
const ELEMENT_BG: Record<WuXingKey, string> = {
  wood: "bg-emerald-50 text-emerald-700 border-emerald-200",
  fire: "bg-rose-50 text-rose-700 border-rose-200",
  earth: "bg-amber-50 text-amber-700 border-amber-200",
  metal: "bg-zinc-100 text-zinc-700 border-zinc-300",
  water: "bg-sky-50 text-sky-700 border-sky-200",
};
const ELEMENT_KEYS: WuXingKey[] = ["wood", "fire", "earth", "metal", "water"];

export default function SajuForm({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const today = new Date();
  const [year, setYear] = useState(1995);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [unknownTime, setUnknownTime] = useState(false);
  const [gender, setGender] = useState<"M" | "F">("F");
  const [consent, setConsent] = useState(false);
  const [result, setResult] = useState<SajuResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!consent) {
      setError(t.sajuForm.consentRequired);
      return;
    }
    try {
      if (year < 1900 || year > today.getFullYear()) throw new Error(t.sajuForm.errorYear);
      const r = calculateSaju({
        year, month, day,
        hour: unknownTime ? 12 : hour,
        minute: unknownTime ? 0 : minute,
        locale,
      });
      setResult(r);
      setTimeout(() => {
        document.getElementById("saju-result")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  const years = Array.from({ length: today.getFullYear() - 1899 }, (_, i) => today.getFullYear() - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div>
      <form onSubmit={handleSubmit} className="card mx-auto max-w-2xl">
        <h2 className="mb-4 text-lg font-bold">{t.sajuForm.birthInfo}</h2>

        <div className="mb-4">
          <label className="label">{t.sajuForm.gender}</label>
          <div className="grid grid-cols-2 gap-2">
            {(["F", "M"] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
                  gender === g
                    ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
                }`}
              >
                {g === "F" ? t.sajuForm.female : t.sajuForm.male}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-3">
          <div>
            <label className="label">{t.sajuForm.year}</label>
            <select className="input" value={year} onChange={(e) => setYear(Number(e.target.value))}>
              {years.map((y) => (<option key={y} value={y}>{y}</option>))}
            </select>
          </div>
          <div>
            <label className="label">{t.sajuForm.month}</label>
            <select className="input" value={month} onChange={(e) => setMonth(Number(e.target.value))}>
              {months.map((m) => (<option key={m} value={m}>{m}</option>))}
            </select>
          </div>
          <div>
            <label className="label">{t.sajuForm.day}</label>
            <select className="input" value={day} onChange={(e) => setDay(Number(e.target.value))}>
              {days.map((d) => (<option key={d} value={d}>{d}</option>))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={unknownTime} onChange={(e) => setUnknownTime(e.target.checked)} />
            <span>{t.sajuForm.unknownTime}</span>
          </label>
          {!unknownTime && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">{t.sajuForm.hour}</label>
                <select className="input" value={hour} onChange={(e) => setHour(Number(e.target.value))}>
                  {hours.map((h) => (<option key={h} value={h}>{h}h</option>))}
                </select>
              </div>
              <div>
                <label className="label">{t.sajuForm.minute}</label>
                <input className="input" type="number" min={0} max={59} value={minute} onChange={(e) => setMinute(Number(e.target.value))} />
              </div>
            </div>
          )}
        </div>

        <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <div className="mb-1.5 text-sm font-bold text-blue-900">
            {t.sajuForm.privacyTitle}
          </div>
          <p className="text-xs leading-relaxed text-blue-800">
            {t.sajuForm.privacyNote}
          </p>
          <label className="mt-3 flex cursor-pointer items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 cursor-pointer accent-[var(--brand)]"
            />
            <span className="font-medium text-blue-900">{t.sajuForm.consent}</span>
          </label>
        </div>

        {error && <div className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{error}</div>}

        <button
          type="submit"
          disabled={!consent}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          {t.sajuForm.submit}
        </button>
        <p className="mt-3 text-xs text-zinc-500">{t.sajuForm.hint}</p>
      </form>

      {result && (
        <div id="saju-result" className="mt-10 space-y-6">
          <div className="card">
            <h3 className="mb-1 text-sm font-medium text-zinc-500">{t.sajuForm.sajuTitle}</h3>
            <p className="mb-4 text-sm text-zinc-600">
              {t.sajuForm.bornOn} {result.inputDate} · {t.sajuForm.zodiac} {result.zodiac}
            </p>
            <div className="grid grid-cols-4 gap-3 text-center">
              {(["year", "month", "day", "time"] as const).map((key) => {
                const p = result.pillars[key];
                const labels = {
                  year: t.sajuForm.pillarYear,
                  month: t.sajuForm.pillarMonth,
                  day: t.sajuForm.pillarDay,
                  time: t.sajuForm.pillarTime,
                };
                return (
                  <div key={key} className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                    <div className="text-xs font-medium text-zinc-500">{labels[key]}</div>
                    <div className="mt-2 text-2xl font-bold text-zinc-900">{p.ganZhi}</div>
                    <div className="mt-1 text-xs text-zinc-600">{p.ganHangul}{p.zhiHangul}</div>
                    <div className={`mt-2 inline-block rounded-full border px-2 py-0.5 text-[11px] font-medium ${ELEMENT_BG[p.ganWuxing]}`}>
                      {ELEMENT_EMOJI[p.ganWuxing]} {WUXING_LABEL[locale][p.ganWuxing]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card">
            <h3 className="mb-3 font-bold">{t.sajuForm.wuxingTitle}</h3>
            <div className="grid grid-cols-5 gap-2">
              {ELEMENT_KEYS.map((el) => (
                <div key={el} className={`rounded-lg border px-3 py-3 text-center ${ELEMENT_BG[el]}`}>
                  <div className="text-2xl">{ELEMENT_EMOJI[el]}</div>
                  <div className="text-sm font-semibold">{WUXING_LABEL[locale][el]}</div>
                  <div className="mt-1 text-xs">{result.wuxingCount[el]}/8</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-600">
              {t.sajuForm.dominantElement}: <strong>{WUXING_LABEL[locale][result.dominantElement]}</strong> ·{" "}
              {t.sajuForm.weakestElement}: <strong>{WUXING_LABEL[locale][result.weakestElement]}</strong>
            </p>
          </div>

          <div className="card">
            <h3 className="mb-3 font-bold">{t.sajuForm.interpretationTitle}</h3>
            <div className="space-y-3 text-zinc-700 leading-relaxed">
              {result.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Today's fortune */}
          <div className="card border-2 border-[var(--brand)]/30 bg-gradient-to-br from-[var(--brand-soft)]/40 to-white">
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 className="font-bold text-lg">{t.sajuForm.todayTitle}</h3>
              <div className="text-xl tracking-wider text-amber-500">
                {"★".repeat(result.today.level)}
                <span className="text-zinc-300">{"★".repeat(5 - result.today.level)}</span>
              </div>
            </div>
            <p className="mb-4 text-xs text-zinc-500">
              {t.sajuForm.todayDayPillar}: <strong className="text-zinc-700">{result.today.todayPillar}</strong>
              {" "}({result.today.todayStemHangul}) · {WUXING_LABEL[locale][result.today.todayElement]}
            </p>
            <p className="mb-5 text-zinc-800 leading-relaxed">{result.today.text}</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-zinc-200 bg-white p-3 text-center">
                <div className="text-xs font-medium text-zinc-500">{t.sajuForm.todayColor}</div>
                <div
                  className="mx-auto mt-2 h-6 w-6 rounded-full border border-zinc-200"
                  style={{ backgroundColor: result.today.luckyColorHex }}
                />
                <div className="mt-2 text-xs font-semibold text-zinc-800">{result.today.luckyColor}</div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-3 text-center">
                <div className="text-xs font-medium text-zinc-500">{t.sajuForm.todayNumber}</div>
                <div className="mt-1 text-3xl font-extrabold text-[var(--brand)]">{result.today.luckyNumber}</div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-3 text-center">
                <div className="text-xs font-medium text-zinc-500">{t.sajuForm.todayDirection}</div>
                <div className="mt-1 text-2xl">🧭</div>
                <div className="mt-1 text-sm font-semibold text-zinc-800">{result.today.luckyDirection}</div>
              </div>
            </div>
          </div>

          {/* Compatible zodiacs */}
          <div className="card">
            <h3 className="mb-2 font-bold">{t.sajuForm.compatTitle}</h3>
            <p className="mb-3 text-xs text-zinc-500">{t.sajuForm.compatHint}</p>
            <div className="flex flex-wrap gap-2">
              {result.compatibleZodiacs.map((z) => (
                <span
                  key={z}
                  className="rounded-full bg-rose-50 px-3 py-1.5 text-sm font-medium text-rose-700 border border-rose-200"
                >
                  {z}
                </span>
              ))}
            </div>
          </div>

          {/* Career & hobby */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card">
              <h3 className="mb-2 font-bold">{t.sajuForm.careerTitle}</h3>
              <p className="mb-3 text-xs text-zinc-500">{t.sajuForm.careerHint}</p>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {result.careers.map((c) => (<li key={c}>• {c}</li>))}
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-2 font-bold">{t.sajuForm.hobbyTitle}</h3>
              <p className="mb-3 text-xs text-zinc-500">{t.sajuForm.hobbyHint}</p>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {result.hobbies.map((h) => (<li key={h}>• {h}</li>))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card">
              <h3 className="mb-3 font-bold">{t.sajuForm.luckyColorsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {result.luckyColors.map((c) => (
                  <span key={c} className="rounded-full bg-zinc-100 px-3 py-1 text-sm">{c}</span>
                ))}
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                {t.sajuForm.luckyColorsHint.replace("{el}", WUXING_LABEL[locale][result.weakestElement])}
              </p>
            </div>
            <div className="card">
              <h3 className="mb-3 font-bold">{t.sajuForm.recommendationsTitle}</h3>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {result.recommendations.map((r) => (<li key={r}>• {r}</li>))}
              </ul>
            </div>
          </div>

          <div className="card flex flex-col items-center gap-3">
            <ShareButtons
              title={t.sajuForm.sajuTitle}
              text={
                locale === "ko"
                  ? `🔮 내 사주 — 일간 ${result.dayMaster.gan}(${result.dayMaster.ganHangul}), ${WUXING_LABEL[locale][result.dominantElement]} 기운이 강해요. 무료 사주 보기 👉`
                  : `🔮 Tứ Trụ của tôi — Nhật chủ ${result.dayMaster.gan}(${result.dayMaster.ganHangul}), hành ${WUXING_LABEL[locale][result.dominantElement]} chiếm ưu thế. Xem bói miễn phí 👉`
              }
              url={`${SITE_URL}${localizedPath(locale, "/sau-han-quoc")}`}
              locale={locale}
            />
          </div>

          <p className="text-center text-xs text-zinc-500">{t.sajuForm.disclaimer}</p>
        </div>
      )}
    </div>
  );
}

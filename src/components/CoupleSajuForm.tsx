"use client";

import { useState } from "react";
import { calculateCouple, type CoupleResult } from "@/lib/saju-couple";
import { WUXING_LABEL } from "@/lib/saju";
import { getDict } from "@/i18n/dict";
import type { Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/path";
import ShareButtons from "./ShareButtons";

const SITE_URL = "https://hanbiet.com";

type PersonState = {
  label: "P1" | "P2";
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  unknownTime: boolean;
};

function defaultPerson(label: "P1" | "P2"): PersonState {
  return { label, year: 1995, month: 1, day: 1, hour: 12, minute: 0, unknownTime: false };
}

function PersonInputs({
  state, setState, namePrefix, t,
}: {
  state: PersonState;
  setState: (s: PersonState) => void;
  namePrefix: string;
  t: ReturnType<typeof getDict>;
}) {
  const today = new Date();
  const years = Array.from({ length: today.getFullYear() - 1899 }, (_, i) => today.getFullYear() - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-zinc-900">{namePrefix}</h3>
      <div className="grid grid-cols-3 gap-2">
        <select className="input" value={state.year} onChange={(e) => setState({ ...state, year: Number(e.target.value) })}>
          {years.map((y) => (<option key={y} value={y}>{y}{t.couple.yearSuffix}</option>))}
        </select>
        <select className="input" value={state.month} onChange={(e) => setState({ ...state, month: Number(e.target.value) })}>
          {months.map((m) => (<option key={m} value={m}>{m}{t.couple.monthSuffix}</option>))}
        </select>
        <select className="input" value={state.day} onChange={(e) => setState({ ...state, day: Number(e.target.value) })}>
          {days.map((d) => (<option key={d} value={d}>{d}{t.couple.daySuffix}</option>))}
        </select>
      </div>
      <label className="inline-flex items-center gap-2 text-xs">
        <input type="checkbox" checked={state.unknownTime} onChange={(e) => setState({ ...state, unknownTime: e.target.checked })} />
        <span>{t.couple.unknownTime}</span>
      </label>
      {!state.unknownTime && (
        <div className="grid grid-cols-2 gap-2">
          <select className="input" value={state.hour} onChange={(e) => setState({ ...state, hour: Number(e.target.value) })}>
            {hours.map((h) => (<option key={h} value={h}>{h}h</option>))}
          </select>
          <input className="input" type="number" min={0} max={59} value={state.minute}
                 onChange={(e) => setState({ ...state, minute: Number(e.target.value) })} />
        </div>
      )}
    </div>
  );
}

const SCORE_COLOR = (s: number) => {
  if (s >= 80) return "from-rose-400 to-pink-500";
  if (s >= 65) return "from-amber-400 to-orange-500";
  if (s >= 50) return "from-yellow-300 to-amber-400";
  return "from-zinc-300 to-zinc-400";
};

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-200">
      <div
        className={`h-full bg-gradient-to-r ${SCORE_COLOR(score)} transition-all`}
        style={{ width: `${score}%` }}
      />
    </div>
  );
}

export default function CoupleSajuForm({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const [p1, setP1] = useState<PersonState>(defaultPerson("P1"));
  const [p2, setP2] = useState<PersonState>(defaultPerson("P2"));
  const [consent, setConsent] = useState(false);
  const [result, setResult] = useState<CoupleResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!consent) {
      setError(t.couple.consentRequired);
      return;
    }
    try {
      const r = calculateCouple({
        person1: { year: p1.year, month: p1.month, day: p1.day,
                   hour: p1.unknownTime ? 12 : p1.hour, minute: p1.unknownTime ? 0 : p1.minute },
        person2: { year: p2.year, month: p2.month, day: p2.day,
                   hour: p2.unknownTime ? 12 : p2.hour, minute: p2.unknownTime ? 0 : p2.minute },
        locale,
      });
      setResult(r);
      setTimeout(() => {
        document.getElementById("couple-result")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  const lblVi = (cat: { key: string; labelVi: string }) => cat.labelVi;
  const lblKo = (cat: { key: string; labelKo: string }) => cat.labelKo;

  return (
    <div>
      <form onSubmit={handleSubmit} className="card mx-auto max-w-3xl">
        <h2 className="mb-6 text-center text-lg font-bold">{t.couple.formTitle}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <PersonInputs state={p1} setState={setP1} namePrefix={t.couple.person1} t={t} />
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <PersonInputs state={p2} setState={setP2} namePrefix={t.couple.person2} t={t} />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <div className="mb-1.5 text-sm font-bold text-blue-900">{t.couple.privacyTitle}</div>
          <p className="text-xs leading-relaxed text-blue-800">{t.couple.privacyNote}</p>
          <label className="mt-3 flex cursor-pointer items-start gap-2 text-sm">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)}
                   className="mt-0.5 h-4 w-4 cursor-pointer accent-[var(--brand)]" />
            <span className="font-medium text-blue-900">{t.couple.consent}</span>
          </label>
        </div>

        {error && <div className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{error}</div>}

        <button type="submit" disabled={!consent}
                className="btn-primary mt-4 w-full disabled:cursor-not-allowed disabled:opacity-50">
          {t.couple.submit}
        </button>
      </form>

      {result && (
        <div id="couple-result" className="mt-10 space-y-6">
          {/* Overall score */}
          <div className="card text-center">
            <div className="text-sm font-medium text-zinc-500">{t.couple.overall}</div>
            <div className="my-2 text-6xl font-extrabold text-[var(--brand)]">{result.overall}</div>
            <div className="text-lg font-bold text-zinc-900">
              {locale === "ko" ? result.levelLabelKo : result.levelLabelVi}
            </div>
            <div className="mx-auto mt-4 max-w-md">
              <ScoreBar score={result.overall} />
            </div>
          </div>

          {/* Each person mini-saju summary */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: t.couple.person1, saju: result.saju1 },
              { label: t.couple.person2, saju: result.saju2 },
            ].map((p, i) => (
              <div key={i} className="card">
                <div className="mb-2 text-xs font-medium text-zinc-500">{p.label}</div>
                <div className="text-sm">
                  {t.sajuForm.bornOn}: <strong>{p.saju.inputDate}</strong>
                </div>
                <div className="mt-1 text-sm">
                  {t.sajuForm.zodiac}: <strong>{p.saju.zodiac}</strong>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-1.5 text-center">
                  {(["year", "month", "day", "time"] as const).map((k) => {
                    const pi = p.saju.pillars[k];
                    return (
                      <div key={k} className="rounded-lg bg-zinc-50 p-1.5">
                        <div className="text-base font-bold text-zinc-900">{pi.ganZhi}</div>
                        <div className="text-[10px] text-zinc-500">{pi.ganHangul}{pi.zhiHangul}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 text-xs">
                  {t.couple.dayMasterShort}:{" "}
                  <strong>{p.saju.dayMaster.gan} ({p.saju.dayMaster.ganHangul})</strong> ·{" "}
                  {WUXING_LABEL[locale][p.saju.dayMaster.wuxing]}
                </div>
              </div>
            ))}
          </div>

          {/* Category scores */}
          <div className="card">
            <h3 className="mb-4 font-bold">{t.couple.categoriesTitle}</h3>
            <div className="space-y-4">
              {result.categories.map((c) => (
                <div key={c.key}>
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="font-semibold text-zinc-800">
                      {locale === "ko" ? lblKo(c) : lblVi(c)}
                    </span>
                    <span className="text-sm font-bold text-[var(--brand)]">{c.score}/100</span>
                  </div>
                  <ScoreBar score={c.score} />
                  <p className="mt-2 text-sm text-zinc-700">
                    {locale === "ko" ? c.textKo : c.textVi}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths + Challenges */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card">
              <h3 className="mb-3 font-bold">✅ {t.couple.strengths}</h3>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {(locale === "ko" ? result.strengthsKo : result.strengthsVi).map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-3 font-bold">⚠️ {t.couple.challenges}</h3>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {(locale === "ko" ? result.challengesKo : result.challengesVi).map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Advice */}
          <div className="card border-2 border-[var(--brand)]/30 bg-[var(--brand-soft)]/40">
            <h3 className="mb-2 font-bold">💝 {t.couple.adviceTitle}</h3>
            <p className="text-zinc-800 leading-relaxed">
              {locale === "ko" ? result.adviceKo : result.adviceVi}
            </p>
          </div>

          {/* Share */}
          <div className="card flex flex-col items-center gap-3">
            <ShareButtons
              title={locale === "ko" ? result.levelLabelKo : result.levelLabelVi}
              text={
                locale === "ko"
                  ? `💞 우리 커플 사주 궁합 — ${result.overall}/100 (${result.levelLabelKo})! 너희도 해봐 👉`
                  : `💞 Bói tương hợp Saju của chúng tôi — ${result.overall}/100 (${result.levelLabelVi})! Bạn cũng thử nhé 👉`
              }
              url={`${SITE_URL}${localizedPath(locale, "/saju-cap-doi")}`}
              locale={locale}
            />
          </div>

          <p className="text-center text-xs text-zinc-500">{t.sajuForm.disclaimer}</p>
        </div>
      )}
    </div>
  );
}

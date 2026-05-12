"use client";

import { useState } from "react";
import {
  QUESTIONS,
  CHARACTERS,
  calculateCharacter,
  getCharacter,
  type Letter,
  type CharacterId,
} from "@/lib/joseon-test";
import { getDict } from "@/i18n/dict";
import type { Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/path";
import ShareButtons from "./ShareButtons";

const SITE_URL = "https://hanbiet.com";

export default function JoseonTest({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Letter>>({});
  const [result, setResult] = useState<CharacterId | null>(null);

  const total = QUESTIONS.length;
  const q = QUESTIONS[step];
  const progress = Math.round(((step + (result ? 1 : 0)) / total) * 100);

  function pick(letter: Letter) {
    const next = { ...answers, [q.id]: letter };
    setAnswers(next);
    setTimeout(() => {
      if (step < total - 1) {
        setStep(step + 1);
      } else {
        const id = calculateCharacter(next);
        setResult(id);
        setTimeout(() => {
          document.getElementById("joseon-result")?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }, 280);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setResult(null);
  }

  if (result) {
    const c = getCharacter(result);
    const match = CHARACTERS[c.matchId];
    const anti = CHARACTERS[c.antiMatchId];
    return (
      <div id="joseon-result" className="space-y-6">
        {/* Hanji-styled hero — white card with accent bar */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-amber-200/60 bg-white p-8 text-center shadow-xl sm:p-12">
          <div
            className="absolute inset-x-0 top-0 h-2"
            style={{ background: c.accent }}
          />
          <div className="text-xs font-medium tracking-[0.3em] text-zinc-500">
            {t.joseon.youAre}
          </div>
          {c.image ? (
            <div className="my-2 flex justify-center">
              <img
                src={c.image}
                alt={c.hangul}
                width={224}
                height={224}
                className="h-48 w-48 object-contain sm:h-56 sm:w-56"
              />
            </div>
          ) : (
            <div className="my-3 text-7xl sm:text-8xl">{c.emoji}</div>
          )}
          <h2
            className="font-brush bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
            style={{ backgroundImage: c.accent }}
          >
            {c.hangul}
          </h2>
          <div className="mt-1 text-lg text-zinc-500">{c.hanja}</div>
          <div className="mt-3 text-base font-semibold text-zinc-800">
            {locale === "ko" ? c.roleKo : c.roleVi}
          </div>
          <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
            「 {locale === "ko" ? c.taglineKo : c.taglineVi} 」
          </p>
          {/* Rarity badge */}
          <div className="mx-auto mt-5 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">
            <span>✨</span>
            <span>
              {locale === "ko"
                ? `전체의 ${c.rarity}%만 나오는 희귀 유형`
                : `Chỉ ${c.rarity}% người ra kết quả này`}
            </span>
          </div>
        </div>

        {/* Destiny one-liner */}
        <div
          className="rounded-2xl border-2 p-6 text-center"
          style={{
            borderColor: "transparent",
            backgroundImage: `linear-gradient(white, white), ${c.accent}`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            🌸 {t.joseon.destiny}
          </div>
          <p
            className="bg-clip-text text-xl font-extrabold leading-snug text-transparent sm:text-2xl"
            style={{ backgroundImage: c.accent }}
          >
            「 {locale === "ko" ? c.destinyKo : c.destinyVi} 」
          </p>
        </div>

        {/* Description */}
        <div className="card">
          <h3 className="mb-3 font-bold">📜 {t.joseon.personality}</h3>
          <p className="text-zinc-700 leading-relaxed">
            {locale === "ko" ? c.descKo : c.descVi}
          </p>
        </div>

        {/* Strengths + Watch-outs */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card">
            <h3 className="mb-3 font-bold">✨ {t.joseon.strengths}</h3>
            <ul className="space-y-1.5 text-sm text-zinc-700">
              {(locale === "ko" ? c.strengthsKo : c.strengthsVi).map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="mb-3 font-bold">🌱 {t.joseon.watchOut}</h3>
            <ul className="space-y-1.5 text-sm text-zinc-700">
              {(locale === "ko" ? c.watchOutKo : c.watchOutVi).map((w) => (
                <li key={w}>• {w}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modern careers */}
        <div className="card">
          <h3 className="mb-3 font-bold">💼 {t.joseon.modernTitle}</h3>
          <p className="mb-3 text-sm text-zinc-600">{t.joseon.modernSubtitle}</p>
          <div className="flex flex-wrap gap-2">
            {(locale === "ko" ? c.modernCareersKo : c.modernCareersVi).map((career) => (
              <span
                key={career}
                className="rounded-full px-3 py-1.5 text-sm font-semibold text-white"
                style={{ backgroundImage: c.accent }}
              >
                {career}
              </span>
            ))}
          </div>
        </div>

        {/* Compatible match + Anti-match */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card">
            <h3 className="mb-3 font-bold">💞 {t.joseon.match}</h3>
            <div className="flex items-start gap-4">
              {match.image ? (
                <img
                  src={match.image}
                  alt={match.hangul}
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 object-contain"
                />
              ) : (
                <div className="text-4xl">{match.emoji}</div>
              )}
              <div>
                <div className="text-lg font-bold text-zinc-900">
                  {match.hangul} <span className="text-sm font-normal text-zinc-500">({match.hanja})</span>
                </div>
                <div className="text-sm text-[var(--brand)]">
                  {locale === "ko" ? match.roleKo : match.roleVi}
                </div>
                <p className="mt-1 text-sm text-zinc-700">
                  {locale === "ko" ? match.taglineKo : match.taglineVi}
                </p>
              </div>
            </div>
          </div>
          <div className="card border-zinc-300/60 bg-zinc-50/50">
            <h3 className="mb-3 font-bold">💢 {t.joseon.antiMatch}</h3>
            <div className="flex items-start gap-4">
              {anti.image ? (
                <img
                  src={anti.image}
                  alt={anti.hangul}
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 object-contain grayscale"
                />
              ) : (
                <div className="text-4xl opacity-60">{anti.emoji}</div>
              )}
              <div>
                <div className="text-lg font-bold text-zinc-700">
                  {anti.hangul} <span className="text-sm font-normal text-zinc-500">({anti.hanja})</span>
                </div>
                <div className="text-sm text-zinc-500">
                  {locale === "ko" ? anti.roleKo : anti.roleVi}
                </div>
                <p className="mt-1 text-sm text-zinc-600">
                  {locale === "ko" ? anti.taglineKo : anti.taglineVi}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="card flex flex-col items-center gap-3 bg-gradient-to-br from-amber-50 to-rose-50">
          <p className="text-center text-sm font-medium text-zinc-700">
            {t.joseon.shareCallout}
          </p>
          <ShareButtons
            title={c.hangul}
            text={
              locale === "ko"
                ? `🏯 조선시대에 태어났다면 나는 "${c.hangul}" (전체의 ${c.rarity}%!)\n「 ${c.destinyKo} 」\n너는 어떤 조선인일까? 👇`
                : `🏯 Nếu sinh vào thời Joseon, tôi là "${c.hangul}" (chỉ ${c.rarity}%!)\n「 ${c.destinyVi} 」\nCòn bạn? 👇`
            }
            url={`${SITE_URL}${localizedPath(locale, "/joseon-test")}`}
            locale={locale}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={reset} className="btn-primary">
            {t.joseon.retakeCta}
          </button>
          <button onClick={reset} className="btn-outline">
            {t.joseon.retake}
          </button>
        </div>

        <p className="text-center text-xs text-zinc-500">{t.joseon.disclaimer}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between text-sm text-zinc-500">
          <span>{t.joseon.question} {step + 1} / {total}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
          <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="card">
        <p className="mb-5 text-lg font-medium leading-snug text-zinc-900 sm:text-xl">
          {locale === "ko" ? q.textKo : q.textVi}
        </p>
        <div className="space-y-2.5">
          {q.options.map((opt, i) => {
            const selected = answers[q.id] === opt.letter;
            return (
              <button
                key={i}
                onClick={() => pick(opt.letter)}
                className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-left transition ${
                  selected
                    ? "border-[var(--brand)] bg-[var(--brand-soft)]"
                    : "border-zinc-200 bg-white hover:border-[var(--brand)] hover:bg-zinc-50"
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 font-medium text-zinc-800">
                  {locale === "ko" ? opt.textKo : opt.textVi}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {step > 0 && (
        <div className="flex justify-start">
          <button
            onClick={() => setStep(step - 1)}
            className="text-sm font-medium text-zinc-600 hover:text-[var(--brand)]"
          >
            ← {t.joseon.back}
          </button>
        </div>
      )}
    </div>
  );
}


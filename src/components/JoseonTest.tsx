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
    return (
      <div id="joseon-result" className="space-y-6">
        {/* Hanji-styled hero */}
        <div
          className={`relative overflow-hidden rounded-3xl border-2 border-amber-200/60 bg-gradient-to-br ${c.accent} p-8 text-center text-white shadow-xl sm:p-12`}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.08) 0%, transparent 50%)",
          }}
        >
          {/* Red stamp */}
          <div className="absolute right-4 top-4 sm:right-8 sm:top-8">
            <RedStamp char={c.hanja[0]} />
          </div>
          <div className="text-xs font-medium tracking-[0.3em] opacity-80">
            {t.joseon.youAre}
          </div>
          <div className="my-3 text-7xl sm:text-8xl drop-shadow-lg">{c.emoji}</div>
          <h2 className="font-brush text-5xl font-extrabold tracking-tight drop-shadow sm:text-6xl">
            {c.hangul}
          </h2>
          <div className="mt-1 text-lg opacity-80">{c.hanja}</div>
          <div className="mt-3 text-base font-medium">
            {locale === "ko" ? c.roleKo : c.roleVi}
          </div>
          <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed opacity-95 sm:text-base">
            「 {locale === "ko" ? c.taglineKo : c.taglineVi} 」
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

        {/* Compatible match */}
        <div className="card">
          <h3 className="mb-3 font-bold">💞 {t.joseon.match}</h3>
          <div className="flex items-start gap-4">
            <div className="text-4xl">{match.emoji}</div>
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

        {/* Share */}
        <div className="card flex flex-col items-center gap-3 bg-gradient-to-br from-amber-50 to-rose-50">
          <p className="text-center text-sm font-medium text-zinc-700">
            {t.joseon.shareCallout}
          </p>
          <ShareButtons
            title={c.hangul}
            text={
              locale === "ko"
                ? `🏯 조선시대에 태어났다면, 나는 "${c.hangul} (${c.roleKo})"! 너는 누구일까? 👉`
                : `🏯 Nếu sinh vào thời Joseon, tôi sẽ là "${c.hangul} - ${c.roleVi}"! Còn bạn? 👉`
            }
            url={`${SITE_URL}${localizedPath(locale, "/joseon-test")}`}
            locale={locale}
          />
        </div>

        <div className="flex justify-center">
          <button onClick={reset} className="btn-primary">
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

// Decorative red seal/stamp SVG — uses single hanja character on red square.
function RedStamp({ char }: { char: string }) {
  return (
    <div className="relative inline-block">
      <svg
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 sm:h-20 sm:w-20 drop-shadow-md"
      >
        <rect x="2" y="2" width="76" height="76" rx="6" fill="#dc2626" />
        <rect x="2" y="2" width="76" height="76" rx="6" fill="none" stroke="#7f1d1d" strokeWidth="2" />
        {/* Decorative cracks for old seal look */}
        <line x1="20" y1="78" x2="22" y2="65" stroke="#7f1d1d" strokeWidth="0.8" opacity="0.4" />
        <line x1="60" y1="2" x2="58" y2="15" stroke="#7f1d1d" strokeWidth="0.8" opacity="0.4" />
        <text
          x="40"
          y="55"
          textAnchor="middle"
          fontSize="44"
          fontWeight="900"
          fill="#fef2f2"
          fontFamily="'Noto Serif KR', serif"
        >
          {char}
        </text>
      </svg>
    </div>
  );
}

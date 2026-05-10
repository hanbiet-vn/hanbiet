"use client";

import { useState } from "react";
import { STATEMENTS, recommendFromAnswers, descOf, type FoodResult } from "@/lib/foods";
import { getDict } from "@/i18n/dict";
import { type Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/path";
import ShareButtons from "./ShareButtons";

const SITE_URL = "https://hanbiet.com";

const LIKERT_BUTTONS: { value: 1 | 2 | 3 | 4 | 5; emoji: string; color: string }[] = [
  { value: 1, emoji: "😣", color: "border-red-300 bg-red-50 hover:bg-red-100 text-red-700" },
  { value: 2, emoji: "🙁", color: "border-orange-300 bg-orange-50 hover:bg-orange-100 text-orange-700" },
  { value: 3, emoji: "😐", color: "border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-700" },
  { value: 4, emoji: "🙂", color: "border-lime-300 bg-lime-50 hover:bg-lime-100 text-lime-700" },
  { value: 5, emoji: "😍", color: "border-green-400 bg-green-50 hover:bg-green-100 text-green-700" },
];
const LIKERT_SELECTED: Record<number, string> = {
  1: "border-red-500 bg-red-100 text-red-800 ring-2 ring-red-200",
  2: "border-orange-500 bg-orange-100 text-orange-800 ring-2 ring-orange-200",
  3: "border-zinc-500 bg-zinc-200 text-zinc-800 ring-2 ring-zinc-300",
  4: "border-lime-500 bg-lime-100 text-lime-800 ring-2 ring-lime-200",
  5: "border-green-600 bg-green-100 text-green-800 ring-2 ring-green-200",
};

export default function FoodQuiz({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [results, setResults] = useState<FoodResult[] | null>(null);

  const total = STATEMENTS.length;
  const current = STATEMENTS[step];
  const isLast = step === total - 1;
  const progress = Math.round(((step + (results ? 1 : 0)) / total) * 100);
  const currentRating = answers[current?.id];

  const likertLabels = [
    t.foodQuiz.likert.l1,
    t.foodQuiz.likert.l2,
    t.foodQuiz.likert.l3,
    t.foodQuiz.likert.l4,
    t.foodQuiz.likert.l5,
  ];

  function selectRating(stmtId: string, rating: number) {
    const newAnswers = { ...answers, [stmtId]: rating };
    setAnswers(newAnswers);
    setTimeout(() => {
      if (!isLast) {
        setStep(step + 1);
      } else {
        setResults(recommendFromAnswers(newAnswers, 3));
        setTimeout(() => {
          document.getElementById("quiz-result")?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }, 450);
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResults(null);
  }

  // Result view
  if (results) {
    return (
      <div id="quiz-result" className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-zinc-900">{t.foodQuiz.resultTitle}</h2>
          <p className="mt-2 text-zinc-600">{t.foodQuiz.resultSubtitle}</p>
        </div>

        <div className="space-y-4">
          {results.map((r, idx) => (
            <div key={r.food.id} className={`card ${idx === 0 ? "border-2 border-[var(--brand)] bg-[var(--brand-soft)]/30" : ""}`}>
              <div className="flex items-start gap-4">
                <div className="text-5xl">{r.food.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <div>
                      <div className="text-2xl font-bold text-zinc-900">
                        {r.food.hangul}
                        <span className="ml-2 text-base font-normal text-zinc-500">({r.food.romanized})</span>
                      </div>
                      <div className="text-sm text-zinc-600">{r.food.nameVi}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {idx === 0 && (
                        <span className="rounded-full bg-[var(--brand)] px-2 py-0.5 text-[11px] font-bold text-white">
                          {t.foodQuiz.bestMatch}
                        </span>
                      )}
                      <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-bold text-white">
                        {r.matchPercent}%
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-zinc-700">{descOf(r.food, locale)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card flex flex-col items-center gap-3">
          <ShareButtons
            title={results[0].food.hangul}
            text={
              locale === "ko"
                ? `🍜 한식 MBTI 결과 — 나에게 맞는 한식은 "${results[0].food.hangul}" (${results[0].matchPercent}% 매칭)! 너도 해봐 👉`
                : `🍜 Quiz món Hàn của tôi — món hợp nhất là "${results[0].food.hangul} (${results[0].food.nameVi})" — ${results[0].matchPercent}% match! Bạn cũng thử đi 👉`
            }
            url={`${SITE_URL}${localizedPath(locale, "/mon-an-han-quoc")}`}
            locale={locale}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button onClick={reset} className="btn-primary">{t.foodQuiz.retake}</button>
        </div>

        <p className="text-center text-xs text-zinc-500">{t.foodQuiz.disclaimer}</p>
      </div>
    );
  }

  // Quiz view
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between text-sm text-zinc-500">
          <span>{t.foodQuiz.question} {step + 1} / {total}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
          <div className="h-full bg-[var(--brand)] transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="card">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
          {t.foodQuiz.instruction}
        </p>
        <div className="mb-6 flex items-start gap-3">
          <div className="text-3xl">{current.emoji}</div>
          <p className="flex-1 text-lg font-medium leading-snug text-zinc-900">
            {locale === "ko" ? current.textKo : current.textVi}
          </p>
        </div>

        <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {LIKERT_BUTTONS.map((b, i) => {
            const selected = currentRating === b.value;
            return (
              <button
                key={b.value}
                onClick={() => selectRating(current.id, b.value)}
                className={`flex flex-col items-center justify-center gap-1 rounded-xl border-2 px-2 py-3 text-center transition ${
                  selected ? LIKERT_SELECTED[b.value] : b.color
                }`}
              >
                <span className="text-2xl sm:text-3xl">{b.emoji}</span>
                <span className="text-[10px] font-medium leading-tight sm:text-xs">
                  {likertLabels[i]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {step > 0 && (
        <div className="flex justify-between">
          <button
            onClick={() => setStep(step - 1)}
            className="text-sm font-medium text-zinc-600 hover:text-[var(--brand)]"
          >
            {t.foodQuiz.back}
          </button>
        </div>
      )}
    </div>
  );
}

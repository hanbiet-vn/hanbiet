import {
  NAME_SYLLABLES,
  SURNAMES,
  TRENDY_PRESETS_M,
  TRENDY_PRESETS_F,
  tellNameStory,
  type Char,
  type GivenNamePreset,
  type NameSyllable,
  type Surname,
  type VibeTag,
} from "./korean-data";
import type { Locale } from "@/i18n/routing";

export type GeneratedName = {
  surname: Surname;
  preset?: GivenNamePreset;
  syl1?: Char;
  syl2?: Char;
  fullHangul: string;
  fullHanja: string;
  fullRomanized: string;
  story: string;
  isTrendy: boolean;
};

export type GenerateOptions = {
  gender: "M" | "F";
  vibes: VibeTag[];
  count?: number;
  seed?: number;
  locale: Locale;
};

const ROMANIZATION: Record<string, string> = {
  준: "Jun", 민: "Min", 우: "Woo", 호: "Ho", 진: "Jin", 현: "Hyun", 성: "Sung",
  재: "Jae", 영: "Young", 태: "Tae", 건: "Geon", 동: "Dong",
  원: "Won", 찬: "Chan", 혁: "Hyuk", 수: "Soo",
  지: "Ji", 유: "Yoo", 서: "Seo", 아: "Ah", 은: "Eun", 예: "Ye", 채: "Chae",
  윤: "Yoon", 하: "Ha", 린: "Rin", 소: "So", 혜: "Hye", 주: "Joo",
  별: "Byeol",
  선: "Sun", 온: "On", 복: "Bok", 광: "Kwang",
};

function romanize(syl: Char): string {
  return ROMANIZATION[syl.hangul] ?? syl.hangul;
}

function mulberry32(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(arr: T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)];
}

function filterByGender(syl: NameSyllable[], gender: "M" | "F"): NameSyllable[] {
  return syl.filter((s) => s.gender === gender || s.gender === "U");
}

function scoreByVibes(s: NameSyllable, vibes: VibeTag[]): number {
  if (!vibes.length) return 1;
  const nonTrendyVibes = vibes.filter((v) => v !== "trendy") as VibeTag[];
  if (!nonTrendyVibes.length) return 1;
  return s.vibe.filter((v: VibeTag) => nonTrendyVibes.includes(v)).length;
}

function weightedPick(
  pool: NameSyllable[],
  vibes: VibeTag[],
  rand: () => number,
): NameSyllable {
  const weighted = pool.flatMap((s) => {
    const score = Math.max(1, scoreByVibes(s, vibes) * 3);
    return Array<NameSyllable>(score).fill(s);
  });
  return pick(weighted, rand);
}

export function generateNames(opts: GenerateOptions): GeneratedName[] {
  const count = opts.count ?? 5;
  const seed = opts.seed ?? Date.now();
  const rand = mulberry32(seed);
  const pool = filterByGender(NAME_SYLLABLES, opts.gender);
  const presets = opts.gender === "M" ? TRENDY_PRESETS_M : TRENDY_PRESETS_F;
  const trendyBoost = opts.vibes.includes("trendy");
  const trendyChance = trendyBoost ? 0.7 : 0.35;

  const results: GeneratedName[] = [];
  const seen = new Set<string>();

  let attempts = 0;
  while (results.length < count && attempts < count * 30) {
    attempts++;
    const surname = pick(SURNAMES, rand);
    const useTrendy = rand() < trendyChance;

    if (useTrendy) {
      const preset = pick(presets, rand);
      const key = surname.hangul + preset.hangul;
      if (seen.has(key)) continue;
      seen.add(key);

      const story = tellNameStory({
        syl1: preset.syl1,
        syl2: preset.syl2,
        noteVi: preset.noteVi,
        noteKo: preset.noteKo,
        locale: opts.locale,
        rand,
      });

      results.push({
        surname,
        preset,
        fullHangul: surname.hangul + preset.hangul,
        fullHanja: surname.hanja + preset.hanja,
        fullRomanized: `${surname.romanized} ${preset.romanized}`,
        story,
        isTrendy: true,
      });
    } else {
      const s1 = weightedPick(pool, opts.vibes, rand);
      const s2 = weightedPick(pool, opts.vibes, rand);
      if (s1.hangul === s2.hangul) continue;
      const key = surname.hangul + s1.hangul + s2.hangul;
      if (seen.has(key)) continue;
      seen.add(key);

      const story = tellNameStory({
        syl1: s1, syl2: s2, locale: opts.locale, rand,
      });

      results.push({
        surname,
        syl1: s1,
        syl2: s2,
        fullHangul: surname.hangul + s1.hangul + s2.hangul,
        fullHanja: surname.hanja + s1.hanja + s2.hanja,
        fullRomanized: `${surname.romanized} ${romanize(s1)}${romanize(s2)}`,
        story,
        isTrendy: false,
      });
    }
  }
  return results;
}

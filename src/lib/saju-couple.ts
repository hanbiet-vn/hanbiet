import { calculateSaju, type SajuResult, type WuXingKey, WUXING_LABEL } from "./saju";
import type { Locale } from "@/i18n/routing";

export type BirthInput = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute?: number;
};

export type CategoryScore = {
  key: "dayMaster" | "zodiac" | "complement";
  score: number; // 0-100
  labelVi: string;
  labelKo: string;
  textVi: string;
  textKo: string;
};

export type CoupleResult = {
  saju1: SajuResult;
  saju2: SajuResult;
  overall: number; // 0-100
  level: "soulmate" | "great" | "good" | "average" | "challenging";
  levelLabelVi: string;
  levelLabelKo: string;
  categories: CategoryScore[];
  strengthsVi: string[];
  strengthsKo: string[];
  challengesVi: string[];
  challengesKo: string[];
  adviceVi: string;
  adviceKo: string;
};

// Element relation: how p2's day-master element relates to p1's
type RelationType = "generates_me" | "i_control" | "same" | "i_generate" | "controls_me";

const RELATION: Record<WuXingKey, Record<WuXingKey, RelationType>> = {
  wood:  { wood: "same", fire: "i_generate", earth: "i_control", metal: "controls_me", water: "generates_me" },
  fire:  { fire: "same", earth: "i_generate", metal: "i_control", water: "controls_me", wood: "generates_me" },
  earth: { earth: "same", metal: "i_generate", water: "i_control", wood: "controls_me", fire: "generates_me" },
  metal: { metal: "same", water: "i_generate", wood: "i_control", fire: "controls_me", earth: "generates_me" },
  water: { water: "same", wood: "i_generate", fire: "i_control", earth: "controls_me", metal: "generates_me" },
};

const SANHE: Record<string, string[]> = {
  子: ["辰", "申"], 辰: ["子", "申"], 申: ["子", "辰"],
  丑: ["巳", "酉"], 巳: ["丑", "酉"], 酉: ["丑", "巳"],
  寅: ["午", "戌"], 午: ["寅", "戌"], 戌: ["寅", "午"],
  卯: ["未", "亥"], 未: ["卯", "亥"], 亥: ["卯", "未"],
};
const LIUHE: Record<string, string> = {
  子: "丑", 丑: "子",
  寅: "亥", 亥: "寅",
  卯: "戌", 戌: "卯",
  辰: "酉", 酉: "辰",
  巳: "申", 申: "巳",
  午: "未", 未: "午",
};
const LIUCHONG: Record<string, string> = {
  子: "午", 午: "子",
  丑: "未", 未: "丑",
  寅: "申", 申: "寅",
  卯: "酉", 酉: "卯",
  辰: "戌", 戌: "辰",
  巳: "亥", 亥: "巳",
};

const DM_SCORE: Record<RelationType, number> = {
  generates_me: 90,
  i_generate: 85,
  same: 75,
  i_control: 65,
  controls_me: 50,
};

const DM_TEXT: Record<RelationType, { vi: string; ko: string }> = {
  generates_me: {
    vi: "Người ấy 'sinh' bạn — mang lại năng lượng, sự ủng hộ và cảm giác an toàn cho bạn. Mối quan hệ ấm áp tự nhiên.",
    ko: "상대가 당신을 '생'해주는 관계 — 에너지와 든든함을 줍니다. 따뜻한 안정감이 있어요.",
  },
  i_generate: {
    vi: "Bạn 'sinh' người ấy — bạn cho đi nhiều, người ấy cảm thấy được nuôi dưỡng. Hãy nhớ chăm sóc bản thân.",
    ko: "당신이 상대를 '생'해주는 관계 — 당신이 많이 베풀고 상대가 그 따뜻함을 받아요. 자신도 챙기세요.",
  },
  same: {
    vi: "Hai người cùng hành — giống nhau, hiểu nhau dễ dàng nhưng cũng dễ thiếu sự khác biệt thú vị.",
    ko: "같은 오행 — 비슷해서 이해가 쉽지만, 서로 자극 주는 차이가 부족할 수 있어요.",
  },
  i_control: {
    vi: "Bạn 'khắc' người ấy — bạn dễ là người dẫn dắt. Người ấy có thể cảm thấy hơi áp lực, hãy mềm mỏng.",
    ko: "당신이 상대를 '극'하는 관계 — 당신이 주도권을 가지지만 상대가 부담을 느낄 수 있어요. 부드럽게 대해주세요.",
  },
  controls_me: {
    vi: "Người ấy 'khắc' bạn — người ấy dễ trở thành người dẫn dắt. Hãy giao tiếp rõ ràng để giữ cân bằng.",
    ko: "상대가 당신을 '극'하는 관계 — 상대가 주도하기 쉬워요. 분명한 소통으로 균형을 잡으세요.",
  },
};

function dayMasterRelation(dm1: WuXingKey, dm2: WuXingKey): RelationType {
  return RELATION[dm1][dm2];
}

function zodiacScore(zhi1: string, zhi2: string): { score: number; key: "sanhe" | "liuhe" | "liuchong" | "neutral" } {
  if (SANHE[zhi1]?.includes(zhi2)) return { score: 95, key: "sanhe" };
  if (LIUHE[zhi1] === zhi2) return { score: 90, key: "liuhe" };
  if (LIUCHONG[zhi1] === zhi2) return { score: 35, key: "liuchong" };
  return { score: 65, key: "neutral" };
}

const ZODIAC_TEXT: Record<"sanhe" | "liuhe" | "liuchong" | "neutral", { vi: string; ko: string }> = {
  sanhe: {
    vi: "Tuổi của hai người thuộc Tam Hợp — sự kết nối tự nhiên rất mạnh, hợp tác và đồng hành dễ dàng.",
    ko: "두 사람의 띠가 삼합 — 자연스러운 연결이 매우 강해서 협력과 동행이 쉬워요.",
  },
  liuhe: {
    vi: "Tuổi của hai người thuộc Lục Hợp — cặp đôi 'duyên kiếp' theo sách vở. Bổ trợ tự nhiên, hợp lâu dài.",
    ko: "두 사람의 띠가 육합 — '천생연분'으로 알려진 짝. 자연스럽게 보완되고 오래 어울려요.",
  },
  liuchong: {
    vi: "Tuổi của hai người thuộc Lục Xung — dễ va chạm tính cách, hay tranh luận. Cần khéo léo trong giao tiếp.",
    ko: "두 사람의 띠가 육충 — 성격이 부딪치기 쉽고 논쟁이 잦아요. 소통에 더 신경 쓰면 좋아요.",
  },
  neutral: {
    vi: "Tuổi của hai người không có quan hệ đặc biệt — cần xây dựng sự hiểu biết qua thời gian.",
    ko: "두 사람의 띠는 특별한 관계가 없어요 — 시간을 들여 서로 알아가는 노력이 필요합니다.",
  },
};

function complementScore(saju1: SajuResult, saju2: SajuResult): number {
  let score = 60;
  if (saju1.weakestElement === saju2.dominantElement) score += 18;
  if (saju2.weakestElement === saju1.dominantElement) score += 18;
  if (
    saju1.dominantElement === saju2.dominantElement &&
    saju1.weakestElement === saju2.weakestElement
  ) {
    // Both strong/weak in same elements: similar but not complementary
    score = 55;
  }
  return Math.max(0, Math.min(100, score));
}

function complementText(saju1: SajuResult, saju2: SajuResult, locale: Locale): { vi: string; ko: string } {
  const w1 = saju1.weakestElement;
  const d2 = saju2.dominantElement;
  const w2 = saju2.weakestElement;
  const d1 = saju1.dominantElement;
  const lab = (k: WuXingKey, l: Locale) => WUXING_LABEL[l][k];

  if (w1 === d2 && w2 === d1) {
    return {
      vi: `Tuyệt vời — hai bạn bổ sung lẫn nhau hoàn hảo: bạn yếu ${lab(w1, "vi")} thì người ấy mạnh, người ấy yếu ${lab(w2, "vi")} thì bạn mạnh. Cặp đôi 'âm dương cân bằng'.`,
      ko: `완벽한 보완 — 당신이 약한 ${lab(w1, "ko")} 기운을 상대가 강하게 가지고 있고, 상대가 약한 ${lab(w2, "ko")}를 당신이 보완해줍니다.`,
    };
  }
  if (w1 === d2) {
    return {
      vi: `Người ấy mạnh ở hành ${lab(d2, "vi")} — đúng là điều bạn cần để cân bằng. Một sự bổ trợ rất giá trị.`,
      ko: `상대가 ${lab(d2, "ko")} 기운이 강해서 — 당신이 필요한 부분을 채워줘요. 좋은 보완이에요.`,
    };
  }
  if (w2 === d1) {
    return {
      vi: `Bạn mạnh ở hành ${lab(d1, "vi")} — chính là điều người ấy cần. Bạn là người bổ sung quan trọng cho cuộc đời họ.`,
      ko: `당신이 ${lab(d1, "ko")} 기운이 강해서 — 상대에게 필요한 부분을 채워줘요. 의미 있는 인연.`,
    };
  }
  if (saju1.dominantElement === saju2.dominantElement) {
    return {
      vi: `Hai người cùng mạnh ở hành ${lab(d1, "vi")} — chia sẻ nhiều điểm chung nhưng cũng dễ giẫm chân nhau. Hãy tìm sự khác biệt thú vị ở nhau.`,
      ko: `두 사람 모두 ${lab(d1, "ko")} 기운이 강해서 — 비슷한 점이 많지만 같은 영역에서 부딪칠 수 있어요. 서로의 다른 점을 찾아보세요.`,
    };
  }
  return {
    vi: `Hai bạn không bổ sung trực tiếp nhưng cũng không xung khắc — sự hài hòa cần được xây dựng qua giao tiếp và quan tâm.`,
    ko: `직접 보완 관계는 아니지만 충돌도 아니에요 — 소통과 배려로 조화를 만들어가는 사이.`,
  };
}

function levelOf(score: number): CoupleResult["level"] {
  if (score >= 88) return "soulmate";
  if (score >= 75) return "great";
  if (score >= 62) return "good";
  if (score >= 48) return "average";
  return "challenging";
}

const LEVEL_LABEL: Record<CoupleResult["level"], { vi: string; ko: string }> = {
  soulmate: { vi: "Tâm giao trời định 💞", ko: "운명의 짝 💞" },
  great: { vi: "Cặp đôi tuyệt vời 💕", ko: "아주 좋은 인연 💕" },
  good: { vi: "Hợp nhau tốt 💖", ko: "잘 어울리는 사이 💖" },
  average: { vi: "Bình thường, có thể vun đắp 🌱", ko: "평범 — 노력하면 좋아져요 🌱" },
  challenging: { vi: "Khá thử thách — cần nỗ lực hai bên 🔥", ko: "도전적 — 두 사람의 노력이 필요해요 🔥" },
};

const ADVICE_BY_LEVEL: Record<CoupleResult["level"], { vi: string; ko: string }> = {
  soulmate: {
    vi: "Mối quan hệ rất hài hòa — đừng lười biếng, hãy tiếp tục trân trọng và giao tiếp đều đặn.",
    ko: "매우 조화로운 관계 — 안주하지 말고 서로를 소중히 여기며 꾸준한 소통을 이어가세요.",
  },
  great: {
    vi: "Đôi bên hợp tự nhiên. Tận dụng sự đồng điệu này để cùng đặt mục tiêu chung và cùng phát triển.",
    ko: "자연스럽게 잘 맞는 사이. 이 조화로 함께 목표를 세우고 같이 성장하세요.",
  },
  good: {
    vi: "Hợp khá tốt. Hãy chú ý lắng nghe và bày tỏ cảm xúc — sự hiểu biết sẽ làm tình cảm bền vững.",
    ko: "꽤 잘 맞아요. 듣고 감정을 표현하세요 — 이해가 관계를 단단하게 만듭니다.",
  },
  average: {
    vi: "Điểm bình thường không có nghĩa là không hợp — quan hệ tốt được xây bằng nỗ lực, không phải số mệnh. Hãy tập trung vào điểm chung và tôn trọng khác biệt.",
    ko: "평범한 점수가 곧 안 맞는다는 뜻은 아닙니다 — 좋은 관계는 노력으로 만들어요. 공통점에 집중하고 차이를 존중하세요.",
  },
  challenging: {
    vi: "Có nhiều điểm khác biệt cần khéo léo. Nếu cả hai sẵn sàng học hỏi từ nhau, mối quan hệ này có thể sâu sắc hơn nhiều cặp 'hợp dễ dàng'. Tôn trọng và kiên nhẫn là chìa khóa.",
    ko: "차이가 많아 세심함이 필요해요. 두 사람이 서로에게 배울 의지가 있다면, '쉽게 잘 맞는 사이'보다 더 깊은 관계가 될 수 있어요. 존중과 인내가 열쇠입니다.",
  },
};

export function calculateCouple(args: {
  person1: BirthInput;
  person2: BirthInput;
  locale: Locale;
}): CoupleResult {
  const { person1, person2, locale } = args;
  const saju1 = calculateSaju({ ...person1, locale });
  const saju2 = calculateSaju({ ...person2, locale });

  // Day master compatibility
  const dmRel = dayMasterRelation(saju1.dayMaster.wuxing, saju2.dayMaster.wuxing);
  const dmScore = DM_SCORE[dmRel];
  const dmText = DM_TEXT[dmRel];

  // Zodiac year-zhi
  const zd = zodiacScore(saju1.pillars.year.zhi, saju2.pillars.year.zhi);
  const zdText = ZODIAC_TEXT[zd.key];

  // Element complement
  const cmpScore = complementScore(saju1, saju2);
  const cmpText = complementText(saju1, saju2, locale);

  // Overall: weighted
  const overall = Math.round(dmScore * 0.35 + zd.score * 0.30 + cmpScore * 0.35);
  const level = levelOf(overall);

  const categories: CategoryScore[] = [
    {
      key: "dayMaster",
      score: dmScore,
      labelVi: "Hô hấp Nhật chủ",
      labelKo: "일간 호흡",
      textVi: dmText.vi,
      textKo: dmText.ko,
    },
    {
      key: "zodiac",
      score: zd.score,
      labelVi: "Tuổi hợp nhau",
      labelKo: "띠 궁합",
      textVi: zdText.vi,
      textKo: zdText.ko,
    },
    {
      key: "complement",
      score: cmpScore,
      labelVi: "Bổ sung Ngũ Hành",
      labelKo: "오행 보완",
      textVi: cmpText.vi,
      textKo: cmpText.ko,
    },
  ];

  // Strengths and challenges
  const strengthsVi: string[] = [];
  const strengthsKo: string[] = [];
  const challengesVi: string[] = [];
  const challengesKo: string[] = [];

  if (dmScore >= 75) {
    strengthsVi.push("Nhật chủ hai người ăn ý — dễ hiểu nhau và phối hợp.");
    strengthsKo.push("두 사람의 일간 궁합이 좋아 — 서로 이해와 협력이 쉬워요.");
  } else if (dmScore < 60) {
    challengesVi.push("Nhật chủ tạo áp lực một chiều — cần giao tiếp tinh tế.");
    challengesKo.push("일간이 한쪽으로 압박을 주는 형태 — 세심한 소통이 필요해요.");
  }
  if (zd.score >= 85) {
    strengthsVi.push("Tuổi hai bạn hợp nhau tự nhiên — duyên gặp gỡ rất sâu.");
    strengthsKo.push("띠가 자연스럽게 잘 맞음 — 인연의 깊이가 느껴져요.");
  } else if (zd.score < 50) {
    challengesVi.push("Tuổi tương xung — dễ tranh luận về vấn đề nhỏ.");
    challengesKo.push("띠가 부딪침 — 사소한 문제로 다툴 수 있어요.");
  }
  if (cmpScore >= 80) {
    strengthsVi.push("Bổ sung Ngũ Hành xuất sắc — hai bạn 'hoàn thiện' nhau.");
    strengthsKo.push("오행 보완이 훌륭 — 서로를 '완성'해주는 관계.");
  } else if (cmpScore < 60) {
    challengesVi.push("Cần tìm hiểu nhau nhiều hơn — sự khác biệt là cơ hội học hỏi.");
    challengesKo.push("서로 더 알아가는 시간이 필요 — 차이가 배움의 기회.");
  }

  if (strengthsVi.length === 0) {
    strengthsVi.push("Mỗi mối quan hệ đều có điểm mạnh — hãy quan sát những điều nhỏ tốt đẹp giữa hai bạn.");
    strengthsKo.push("모든 관계는 강점이 있어요 — 두 사람 사이의 작은 좋은 순간들을 살펴보세요.");
  }
  if (challengesVi.length === 0) {
    challengesVi.push("Không có điểm xung đột rõ rệt — duy trì sự quan tâm và giao tiếp là đủ.");
    challengesKo.push("뚜렷한 충돌점은 없어요 — 관심과 소통을 꾸준히 유지하면 충분합니다.");
  }

  return {
    saju1,
    saju2,
    overall,
    level,
    levelLabelVi: LEVEL_LABEL[level].vi,
    levelLabelKo: LEVEL_LABEL[level].ko,
    categories,
    strengthsVi,
    strengthsKo,
    challengesVi,
    challengesKo,
    adviceVi: ADVICE_BY_LEVEL[level].vi,
    adviceKo: ADVICE_BY_LEVEL[level].ko,
  };
}

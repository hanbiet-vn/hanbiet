import { Solar } from "lunar-typescript";
import type { Locale } from "@/i18n/routing";

// Five elements (오행 / 五行).
export type WuXingKey = "wood" | "fire" | "earth" | "metal" | "water";

export const WUXING_LABEL: Record<Locale, Record<WuXingKey, string>> = {
  vi: { wood: "Mộc", fire: "Hỏa", earth: "Thổ", metal: "Kim", water: "Thủy" },
  ko: { wood: "목(木)", fire: "화(火)", earth: "토(土)", metal: "금(金)", water: "수(水)" },
};

const WUXING_HANJA_TO_KEY: Record<string, WuXingKey> = {
  木: "wood", 火: "fire", 土: "earth", 金: "metal", 水: "water",
};

const GAN_WUXING: Record<string, string> = {
  甲: "木", 乙: "木", 丙: "火", 丁: "火", 戊: "土",
  己: "土", 庚: "金", 辛: "金", 壬: "水", 癸: "水",
};
const ZHI_WUXING: Record<string, string> = {
  子: "水", 丑: "土", 寅: "木", 卯: "木", 辰: "土", 巳: "火",
  午: "火", 未: "土", 申: "金", 酉: "金", 戌: "土", 亥: "水",
};

const GAN_HANGUL: Record<string, string> = {
  甲: "갑", 乙: "을", 丙: "병", 丁: "정", 戊: "무",
  己: "기", 庚: "경", 辛: "신", 壬: "임", 癸: "계",
};
const ZHI_HANGUL: Record<string, string> = {
  子: "자", 丑: "축", 寅: "인", 卯: "묘", 辰: "진", 巳: "사",
  午: "오", 未: "미", 申: "신", 酉: "유", 戌: "술", 亥: "해",
};

const ZODIAC: Record<Locale, Record<string, string>> = {
  vi: {
    子: "Tý (Chuột)", 丑: "Sửu (Trâu)", 寅: "Dần (Hổ)", 卯: "Mão (Mèo)",
    辰: "Thìn (Rồng)", 巳: "Tỵ (Rắn)", 午: "Ngọ (Ngựa)", 未: "Mùi (Dê)",
    申: "Thân (Khỉ)", 酉: "Dậu (Gà)", 戌: "Tuất (Chó)", 亥: "Hợi (Lợn)",
  },
  ko: {
    子: "쥐띠 (자)", 丑: "소띠 (축)", 寅: "호랑이띠 (인)", 卯: "토끼띠 (묘)",
    辰: "용띠 (진)", 巳: "뱀띠 (사)", 午: "말띠 (오)", 未: "양띠 (미)",
    申: "원숭이띠 (신)", 酉: "닭띠 (유)", 戌: "개띠 (술)", 亥: "돼지띠 (해)",
  },
};

// Compatibility (삼합 + 육합) for each year branch.
const ZODIAC_COMPAT: Record<string, string[]> = {
  子: ["辰", "申", "丑"],
  丑: ["巳", "酉", "子"],
  寅: ["午", "戌", "亥"],
  卯: ["未", "亥", "戌"],
  辰: ["申", "子", "酉"],
  巳: ["酉", "丑", "申"],
  午: ["寅", "戌", "未"],
  未: ["亥", "卯", "午"],
  申: ["子", "辰", "巳"],
  酉: ["巳", "丑", "辰"],
  戌: ["寅", "午", "卯"],
  亥: ["卯", "未", "寅"],
};

// === Day master detailed traits (warm narrative form) ===
type ElementProfile = {
  trait: string;
  ability: string;
  feel: string;
  watchout: string;
  dominantTrait: string;
  weakestAdvice: string;
  closing: string;
};

const ELEMENT_VI: Record<WuXingKey, ElementProfile> = {
  wood: {
    trait: "tinh thần sáng tạo, lòng tử tế và khao khát phát triển không ngừng nghỉ",
    ability: "nhìn ra tiềm năng trong những điều người khác bỏ qua, và nuôi dưỡng nó kiên nhẫn như chăm cây",
    feel: "một sự ấm áp, đáng tin và nguồn năng lượng tích cực đầy hy vọng",
    watchout: "đôi khi bạn quá mềm lòng và dễ ôm việc của người khác — hãy nhớ rằng việc chăm sóc bản thân không phải là ích kỷ",
    dominantTrait: "thể hiện tinh thần phát triển, sáng tạo và sự dịu dàng tự nhiên trong cuộc sống hàng ngày",
    weakestAdvice: "thêm cây xanh vào không gian sống, dành thời gian ở công viên, hoặc bắt đầu một sở thích sáng tạo mới",
    closing: "Bạn là kiểu người mà thế giới luôn cần thêm — đừng để những thất vọng tạm thời khiến bạn mất đi sự tử tế tự nhiên ấy.",
  },
  fire: {
    trait: "ngọn lửa nhiệt huyết, sự thẳng thắn và sức cuốn hút tự nhiên khiến người ta nhớ mãi",
    ability: "thắp sáng phòng họp chỉ bằng nụ cười, và truyền cảm hứng cho người xung quanh",
    feel: "sự sống động, năng lượng và một niềm tin rằng mọi chuyện rồi sẽ ổn",
    watchout: "cảm xúc của bạn dễ bùng cháy nhanh và cũng dễ kiệt sức — hãy học cách dừng lại, lắng nghe, và cho bản thân thời gian phục hồi",
    dominantTrait: "tỏa ra năng lượng nhiệt huyết, biểu cảm và sự tự tin trong mọi tương tác",
    weakestAdvice: "thắp nến ấm trong nhà, đeo trang sức màu đỏ, hoặc tham gia hoạt động nhóm năng động",
    closing: "Đừng để nỗi sợ bị hiểu nhầm dập tắt ngọn lửa của bạn — thế giới cần những người dám sáng.",
  },
  earth: {
    trait: "sự đáng tin cậy, ổn định và một tâm hồn chín chắn vượt tuổi",
    ability: "tạo cảm giác an toàn cho mọi người xung quanh chỉ bằng sự hiện diện của mình",
    feel: "một nơi nương tựa vững vàng — như đất mẹ luôn ở đó",
    watchout: "đôi khi bạn quá an phận và để cuộc đời trôi qua một cách nhẹ nhàng — đừng quên rằng bạn xứng đáng có những điều lớn lao hơn",
    dominantTrait: "thể hiện sự kiên định, đáng tin và khả năng giữ mọi thứ cân bằng trong khủng hoảng",
    weakestAdvice: "trồng rau trên ban công, dùng đồ gốm sứ trong nhà, hoặc đi cắm trại gần thiên nhiên",
    closing: "Bạn là điểm tựa của nhiều người mà có thể bạn không nhận ra — hãy cho phép mình cũng được nương tựa.",
  },
  metal: {
    trait: "sự quyết đoán, kỷ luật và một cảm giác công bằng mạnh mẽ",
    ability: "nhìn rõ bản chất vấn đề và đưa ra quyết định dứt khoát khi người khác do dự",
    feel: "sự rõ ràng, đáng tin và một tiêu chuẩn cao mà người khác vô thức muốn vươn tới",
    watchout: "sự cứng rắn của bạn đôi khi vô tình làm tổn thương người thân — mềm mỏng không có nghĩa là yếu đuối",
    dominantTrait: "thể hiện sự rõ ràng, kỷ luật và khả năng cắt bỏ những điều không cần thiết",
    weakestAdvice: "đeo trang sức bạc, mặc đồ trắng/xám, và sắp xếp lại không gian sống cho gọn gàng",
    closing: "Bạn không cần phải hoàn hảo để có giá trị — chính những vết xước nhỏ làm bạn trở nên thật và đẹp.",
  },
  water: {
    trait: "sự linh hoạt, chiều sâu cảm xúc và trí tuệ thấu hiểu",
    ability: "đọc được không gian và cảm xúc người khác trước cả khi họ kịp nói ra",
    feel: "một sự êm dịu, sâu lắng và đầy thấu cảm như dòng sông bình lặng",
    watchout: "bạn dễ bị cảm xúc của người khác cuốn đi — hãy đặt ranh giới rõ ràng để bảo vệ năng lượng của mình",
    dominantTrait: "thể hiện sự linh hoạt, trực giác sắc bén và khả năng đọc tình huống nhanh nhạy",
    weakestAdvice: "đặt bể cá hoặc đài phun nước nhỏ trong nhà, du lịch gần biển/hồ, hoặc tập thiền ven nước",
    closing: "Sự nhạy cảm không phải điểm yếu mà là siêu năng lực — hãy học cách quản lý nó thay vì che giấu.",
  },
};

const ELEMENT_KO: Record<WuXingKey, ElementProfile> = {
  wood: {
    trait: "창의적인 정신, 따뜻한 마음, 그리고 끊임없이 성장하려는 열망",
    ability: "남들이 놓치는 가능성을 알아보고 묵묵히 키워내는 능력",
    feel: "신뢰할 수 있는 따뜻함과 희망찬 긍정 에너지",
    watchout: "마음이 너무 약해서 남의 일까지 떠안기 쉬워요 — 자신을 챙기는 건 결코 이기적인 게 아닙니다",
    dominantTrait: "성장 지향적이고 창의적이며, 일상에서 자연스러운 다정함을 드러내는 편",
    weakestAdvice: "공간에 식물을 들이고, 공원에서 시간을 보내며, 새로운 창작 취미를 시작해보세요",
    closing: "당신은 세상에 늘 필요한 사람이에요 — 일시적인 실망이 본래의 다정함을 잃게 두지 마세요.",
  },
  fire: {
    trait: "뜨거운 열정, 솔직함, 그리고 사람을 끄는 자연스러운 매력",
    ability: "미소만으로 분위기를 밝히고 주변 사람에게 영감을 주는 능력",
    feel: "생동감 있고 활기찬 에너지, '잘될 거야'라는 믿음",
    watchout: "감정이 빨리 타오르고 빨리 식기 쉬워요 — 잠시 멈추고 듣고, 회복할 시간을 자신에게 주세요",
    dominantTrait: "모든 만남에서 열정과 표현력, 자신감 있는 에너지를 발산",
    weakestAdvice: "집에 따뜻한 캔들을 켜고, 빨간 액세서리를 착용하며, 활동적인 모임에 참여해보세요",
    closing: "오해받을까 두려워 빛을 죽이지 마세요 — 세상은 빛나기를 두려워하지 않는 사람을 필요로 합니다.",
  },
  earth: {
    trait: "신뢰할 수 있는 안정감과 나이를 뛰어넘는 성숙함",
    ability: "존재만으로도 주변 사람에게 안전한 느낌을 주는 능력",
    feel: "흙처럼 늘 그 자리에 있어 주는 든든한 의지처",
    watchout: "때로 너무 안주하며 인생이 흘러가게 두기 쉬워요 — 당신은 더 큰 것을 받을 자격이 있어요",
    dominantTrait: "흔들림 속에서도 균형을 잃지 않는 신뢰의 중심",
    weakestAdvice: "베란다에서 채소를 키우고, 도자기 그릇을 사용하며, 자연 가까이 캠핑을 가보세요",
    closing: "많은 사람의 의지처가 되고 있다는 걸 모를 수 있어요 — 당신도 기댈 수 있도록 허락해주세요.",
  },
  metal: {
    trait: "결단력, 절제, 그리고 강한 정의감",
    ability: "남들이 망설일 때 본질을 꿰뚫고 명확한 결정을 내리는 능력",
    feel: "명료함과 신뢰, 무의식적으로 기준이 되어 주는 사람",
    watchout: "단호함이 가까운 사람에게 상처가 될 수 있어요 — 부드러움은 결코 약함이 아닙니다",
    dominantTrait: "명료하게 절제하며, 불필요한 것을 잘라내는 결단력",
    weakestAdvice: "은 액세서리를 착용하고, 흰색·회색 옷을 입으며, 공간을 깔끔하게 정리해보세요",
    closing: "완벽하지 않아도 충분히 가치 있어요 — 작은 흠집들이 당신을 진짜이고 아름답게 만듭니다.",
  },
  water: {
    trait: "유연함, 깊은 감수성, 그리고 통찰력",
    ability: "상대가 말하기도 전에 분위기와 감정을 읽어내는 능력",
    feel: "잔잔한 강물처럼 부드럽고 깊이 있는 공감",
    watchout: "남의 감정에 휘둘리기 쉬워요 — 분명한 경계를 세워 자신의 에너지를 지켜주세요",
    dominantTrait: "유연하게 흘러가면서도 직관적으로 상황을 빠르게 읽어내는 편",
    weakestAdvice: "집에 어항이나 작은 분수를 두고, 바다·호수로 여행하며, 물가에서 명상해보세요",
    closing: "예민함은 약점이 아니라 초능력이에요 — 숨기지 말고 다스리는 법을 배우세요.",
  },
};

// === Today's fortune relations ===
type RelationType = "generates_me" | "i_control" | "same" | "i_generate" | "controls_me";

const RELATION: Record<WuXingKey, Record<WuXingKey, RelationType>> = {
  wood:  { wood: "same", fire: "i_generate", earth: "i_control", metal: "controls_me", water: "generates_me" },
  fire:  { fire: "same", earth: "i_generate", metal: "i_control", water: "controls_me", wood: "generates_me" },
  earth: { earth: "same", metal: "i_generate", water: "i_control", wood: "controls_me", fire: "generates_me" },
  metal: { metal: "same", water: "i_generate", wood: "i_control", fire: "controls_me", earth: "generates_me" },
  water: { water: "same", wood: "i_generate", fire: "i_control", earth: "controls_me", metal: "generates_me" },
};

const RELATION_LEVEL: Record<RelationType, 1 | 2 | 3 | 4 | 5> = {
  generates_me: 5,
  i_control: 5,
  same: 4,
  i_generate: 3,
  controls_me: 2,
};

const RELATION_TEXT: Record<Locale, Record<RelationType, string>> = {
  vi: {
    generates_me: "Hôm nay vũ trụ đang ủng hộ bạn — đây là ngày tuyệt vời để học điều mới, gặp người thầy hoặc lắng nghe lời khuyên từ người lớn tuổi. Tinh thần dễ được nâng đỡ.",
    i_control: "Năng lượng dồi dào, bạn dễ đạt được điều mình muốn hôm nay. Thích hợp để đàm phán, mua sắm lớn, hoặc thực hiện kế hoạch tài chính/tỏ tình với crush.",
    same: "Một ngày ổn định và an toàn — phù hợp để hoàn thành công việc thường ngày, gặp lại bạn cũ hoặc dọn dẹp lại cuộc sống của mình.",
    i_generate: "Bạn cho đi nhiều năng lượng hôm nay — tốt cho công việc sáng tạo, viết lách, dạy dỗ. Đừng quên dành thời gian cho bản thân nhé.",
    controls_me: "Hôm nay có thể có thử thách hoặc áp lực. Đừng vội phản ứng — hít thở sâu, xử lý từng việc một, mọi chuyện rồi sẽ qua.",
  },
  ko: {
    generates_me: "오늘은 우주가 당신을 도와주는 날이에요. 새로운 것을 배우거나 멘토를 만나기에 좋은 하루예요. 마음이 자연스럽게 가벼워질 거예요.",
    i_control: "에너지가 충만해서 원하는 걸 얻기 쉬워요. 협상, 큰 쇼핑, 재정 계획, 또는 좋아하는 사람에게 마음을 표현하기에 좋은 날.",
    same: "안정되고 평온한 하루 — 일상 업무를 마무리하거나 오랜 친구를 만나거나, 자신의 일상을 정리하기에 좋아요.",
    i_generate: "오늘은 에너지를 많이 쏟아내는 하루예요. 창작, 글쓰기, 가르치는 일에 좋지만 자신을 위한 시간도 꼭 챙기세요.",
    controls_me: "오늘은 압박이나 도전이 있을 수 있어요. 성급하게 반응하지 말고 깊게 호흡하며 하나씩 처리하면 다 지나갈 거예요.",
  },
};

// Element-specific lucky data
const COLOR_HEX: Record<WuXingKey, string> = {
  wood: "#10b981", fire: "#f43f5e", earth: "#d97706", metal: "#94a3b8", water: "#1e3a8a",
};
const COLOR_LABEL: Record<Locale, Record<WuXingKey, string>> = {
  vi: { wood: "xanh lá", fire: "đỏ / cam", earth: "vàng đất / nâu", metal: "trắng / bạc", water: "xanh dương đậm / đen" },
  ko: { wood: "초록색", fire: "빨강·주황", earth: "황토색·갈색", metal: "흰색·은색", water: "진한 파랑·검정" },
};
const NUMBER_BY_ELEMENT: Record<WuXingKey, [number, number]> = {
  wood: [3, 8], fire: [2, 7], earth: [5, 10], metal: [4, 9], water: [1, 6],
};
const DIRECTION: Record<Locale, Record<WuXingKey, string>> = {
  vi: { wood: "Đông", fire: "Nam", earth: "Trung tâm", metal: "Tây", water: "Bắc" },
  ko: { wood: "동쪽", fire: "남쪽", earth: "중앙", metal: "서쪽", water: "북쪽" },
};

const CAREERS: Record<Locale, Record<WuXingKey, string[]>> = {
  vi: {
    wood: ["Giáo viên / Giảng viên", "Thiết kế / Sáng tạo", "Nhà văn / Biên tập", "Y tế / Dược sĩ", "Cảnh quan / Nông nghiệp"],
    fire: ["Truyền thông / PR", "Marketing / Sales", "Diễn viên / Người mẫu", "Thời trang / Mỹ phẩm", "Lãnh đạo / Chính trị"],
    earth: ["Bất động sản", "Ẩm thực / Nhà hàng", "Khách sạn / Du lịch", "Nông nghiệp", "Tư vấn / Nhân sự"],
    metal: ["Tài chính / Ngân hàng", "Luật / Pháp lý", "Kỹ sư / IT", "Quân đội / Cảnh sát", "Trang sức / Kim hoàn"],
    water: ["Thương mại / Logistics", "Công nghệ / Lập trình", "Truyền thông số", "Du lịch / Hàng không", "Tâm lý / Tư vấn"],
  },
  ko: {
    wood: ["교사 / 강사", "디자인 / 창작", "작가 / 편집", "의료 / 약학", "조경 / 농업"],
    fire: ["미디어 / PR", "마케팅 / 영업", "배우 / 모델", "패션 / 뷰티", "리더십 / 정치"],
    earth: ["부동산", "외식업 / 요리사", "호텔 / 관광", "농업", "컨설팅 / 인사"],
    metal: ["금융 / 은행", "법률 / 변호사", "엔지니어 / IT", "군인 / 경찰", "주얼리 / 귀금속"],
    water: ["무역 / 물류", "IT / 개발자", "디지털 미디어", "여행 / 항공", "심리 / 상담"],
  },
};

const HOBBIES: Record<Locale, Record<WuXingKey, string[]>> = {
  vi: {
    wood: ["Trồng cây / Làm vườn", "Đọc sách", "Vẽ tranh", "Viết nhật ký"],
    fire: ["Khiêu vũ", "Thể thao đối kháng", "Hát / Biểu diễn", "Du lịch khám phá"],
    earth: ["Nấu ăn", "Gốm sứ / Thủ công", "Cắm trại", "Yoga / Pilates"],
    metal: ["Chơi nhạc cụ", "Sưu tầm", "Thiết kế đồ họa", "Tập gym"],
    water: ["Bơi lội", "Nhiếp ảnh", "Thiền / Mindfulness", "Du lịch biển"],
  },
  ko: {
    wood: ["식물 키우기 / 가드닝", "독서", "그림 그리기", "일기 쓰기"],
    fire: ["춤 / 댄스", "격투 스포츠", "노래 / 공연", "탐험 여행"],
    earth: ["요리", "도예 / 공예", "캠핑", "요가 / 필라테스"],
    metal: ["악기 연주", "수집", "그래픽 디자인", "헬스"],
    water: ["수영", "사진", "명상 / 마음챙김", "바다 여행"],
  },
};

export type Pillar = {
  ganZhi: string;
  gan: string;
  zhi: string;
  ganHangul: string;
  zhiHangul: string;
  ganWuxing: WuXingKey;
  zhiWuxing: WuXingKey;
  zodiac?: string;
};

export type TodayFortune = {
  todayPillar: string;
  todayStem: string;
  todayStemHangul: string;
  todayElement: WuXingKey;
  relation: RelationType;
  level: 1 | 2 | 3 | 4 | 5;
  text: string;
  luckyColor: string;
  luckyColorHex: string;
  luckyNumber: number;
  luckyDirection: string;
};

export type SajuResult = {
  inputDate: string;
  locale: Locale;
  pillars: { year: Pillar; month: Pillar; day: Pillar; time: Pillar };
  wuxingCount: Record<WuXingKey, number>;
  dominantElement: WuXingKey;
  weakestElement: WuXingKey;
  dayMaster: { gan: string; ganHangul: string; wuxing: WuXingKey };
  zodiac: string;
  story: string[]; // 5 warm paragraphs
  today: TodayFortune;
  compatibleZodiacs: string[];
  careers: string[];
  hobbies: string[];
  luckyColors: string[];
  recommendations: string[];
};

function buildPillar(ganZhi: string, locale: Locale, includeZodiac = false): Pillar {
  const gan = ganZhi[0];
  const zhi = ganZhi[1];
  return {
    ganZhi, gan, zhi,
    ganHangul: GAN_HANGUL[gan] ?? gan,
    zhiHangul: ZHI_HANGUL[zhi] ?? zhi,
    ganWuxing: WUXING_HANJA_TO_KEY[GAN_WUXING[gan]],
    zhiWuxing: WUXING_HANJA_TO_KEY[ZHI_WUXING[zhi]],
    zodiac: includeZodiac ? ZODIAC[locale][zhi] : undefined,
  };
}

function computeTodayFortune(myElement: WuXingKey, locale: Locale): TodayFortune {
  const now = new Date();
  const todaySolar = Solar.fromYmdHms(
    now.getFullYear(), now.getMonth() + 1, now.getDate(), 12, 0, 0,
  );
  const todayEC = todaySolar.getLunar().getEightChar();
  const todayPillar = todayEC.getDay();
  const todayStem = todayPillar[0];
  const todayElement = WUXING_HANJA_TO_KEY[GAN_WUXING[todayStem]];
  const rel = RELATION[myElement][todayElement];
  const numbers = NUMBER_BY_ELEMENT[todayElement];
  const luckyNumber = numbers[now.getDate() % numbers.length];
  return {
    todayPillar,
    todayStem,
    todayStemHangul: GAN_HANGUL[todayStem] ?? todayStem,
    todayElement,
    relation: rel,
    level: RELATION_LEVEL[rel],
    text: RELATION_TEXT[locale][rel],
    luckyColor: COLOR_LABEL[locale][todayElement],
    luckyColorHex: COLOR_HEX[todayElement],
    luckyNumber,
    luckyDirection: DIRECTION[locale][todayElement],
  };
}

function buildStory(args: {
  locale: Locale;
  dayMaster: { gan: string; ganHangul: string; wuxing: WuXingKey };
  dominantElement: WuXingKey;
  weakestElement: WuXingKey;
  wuxingCount: Record<WuXingKey, number>;
}): string[] {
  const { locale, dayMaster, dominantElement, weakestElement, wuxingCount } = args;
  const profile = locale === "ko" ? ELEMENT_KO[dayMaster.wuxing] : ELEMENT_VI[dayMaster.wuxing];
  const dmEl = WUXING_LABEL[locale][dayMaster.wuxing];
  const domEl = WUXING_LABEL[locale][dominantElement];
  const weakEl = WUXING_LABEL[locale][weakestElement];
  const dominantSelf = dominantElement === dayMaster.wuxing;

  if (locale === "ko") {
    const p1 = `당신은 일간(日干) ${dayMaster.gan}(${dayMaster.ganHangul})의 인도 아래 태어났어요. 사주의 핵심으로, 세상에 보여주는 모습이 아니라 아무도 보지 않을 때의 진짜 당신을 나타냅니다. 당신의 본질은 ${dmEl} 기운 — ${profile.trait}이 깃들어 있습니다.`;
    const p2 = `${dmEl} 기운의 사람은 ${profile.ability}이 있어요. 가까운 사람들은 당신에게서 ${profile.feel}을(를) 느낄 거예요.`;
    const p3 = `다만 모든 기질에는 살펴야 할 면이 있어요. ${profile.watchout}.`;
    const balance = dominantSelf
      ? `당신의 사주에서는 ${domEl} 기운이 가장 강해요(${wuxingCount[dominantElement]}/8) — 일간과 같은 기운이라 자기 색깔이 더욱 또렷이 드러나는 편이에요. ${profile.dominantTrait}.`
      : `당신의 사주에서는 ${domEl} 기운이 가장 강해요(${wuxingCount[dominantElement]}/8). 일간(${dmEl})과 함께 이 기운의 특성이 일상에서 자연스럽게 드러납니다. 반면 ${weakEl} 기운(${wuxingCount[weakestElement]}/8)이 가장 약해요 — 균형을 위해 보완이 필요해요.`;
    const balanceAdvice = locale === "ko" ? (
      weakestElement === dayMaster.wuxing ? profile.weakestAdvice : (ELEMENT_KO[weakestElement].weakestAdvice)
    ) : "";
    const p4 = balance;
    const p5 = `운세 균형을 위해서는 ${balanceAdvice}. 작은 습관들이 모이면 큰 변화를 만들어요.`;
    const p6 = `💝 ${profile.closing}`;
    return [p1, p2, p3, p4, p5, p6];
  }
  // vi
  const p1 = `Bạn được sinh ra dưới sự dẫn dắt của Nhật chủ ${dayMaster.gan}(${dayMaster.ganHangul}), thuộc hành ${dmEl}. Đây là yếu tố cốt lõi nhất trong tứ trụ — không phải mặt nạ bạn đeo cho thế giới, mà là chính bạn khi không ai nhìn. Bản chất của bạn là ${profile.trait}.`;
  const p2 = `Người mệnh ${dmEl} như bạn có khả năng ${profile.ability}. Những người thân thiết quanh bạn thường cảm nhận được ${profile.feel}.`;
  const p3 = `Tuy nhiên, không có thiên tính nào hoàn hảo. ${profile.watchout}.`;
  const balance = dominantSelf
    ? `Trong tứ trụ của bạn, hành ${domEl} mạnh nhất (${wuxingCount[dominantElement]}/8) — cùng hành với Nhật chủ, khiến đặc tính này càng đậm nét. Bạn ${profile.dominantTrait}.`
    : `Trong tứ trụ của bạn, hành ${domEl} chiếm ưu thế (${wuxingCount[dominantElement]}/8) — cùng với Nhật chủ ${dmEl}, đặc tính này dễ thể hiện trong cuộc sống. Trong khi đó, hành ${weakEl} của bạn yếu nhất (${wuxingCount[weakestElement]}/8) — cần bổ sung để cân bằng vận mệnh.`;
  const balanceAdvice = weakestElement === dayMaster.wuxing
    ? profile.weakestAdvice
    : ELEMENT_VI[weakestElement].weakestAdvice;
  const p4 = balance;
  const p5 = `Để cân bằng vận mệnh, hãy ${balanceAdvice}. Những thói quen nhỏ tích lũy sẽ tạo nên thay đổi lớn.`;
  const p6 = `💝 ${profile.closing}`;
  return [p1, p2, p3, p4, p5, p6];
}

export function calculateSaju(args: {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute?: number;
  locale: Locale;
}): SajuResult {
  const { year, month, day, hour, locale } = args;
  const minute = args.minute ?? 0;
  const solar = Solar.fromYmdHms(year, month, day, hour, minute, 0);
  const lunar = solar.getLunar();
  const ec = lunar.getEightChar();

  const yearPillar = buildPillar(ec.getYear(), locale, true);
  const monthPillar = buildPillar(ec.getMonth(), locale);
  const dayPillar = buildPillar(ec.getDay(), locale);
  const timePillar = buildPillar(ec.getTime(), locale);

  const wuxingCount: Record<WuXingKey, number> = {
    wood: 0, fire: 0, earth: 0, metal: 0, water: 0,
  };
  for (const p of [yearPillar, monthPillar, dayPillar, timePillar]) {
    wuxingCount[p.ganWuxing]++;
    wuxingCount[p.zhiWuxing]++;
  }

  const sortedElements = (Object.keys(wuxingCount) as WuXingKey[]).sort(
    (a, b) => wuxingCount[b] - wuxingCount[a],
  );
  const dominantElement = sortedElements[0];
  const weakestElement = sortedElements[sortedElements.length - 1];

  const dayMaster = {
    gan: dayPillar.gan,
    ganHangul: dayPillar.ganHangul,
    wuxing: dayPillar.ganWuxing,
  };

  const story = buildStory({ locale, dayMaster, dominantElement, weakestElement, wuxingCount });

  const today = computeTodayFortune(dayMaster.wuxing, locale);

  const yearZhi = yearPillar.zhi;
  const compatZhis = ZODIAC_COMPAT[yearZhi] ?? [];
  const compatibleZodiacs = compatZhis.map((z) => ZODIAC[locale][z]);

  const careers = CAREERS[locale][dayMaster.wuxing];
  const hobbies = HOBBIES[locale][dayMaster.wuxing];

  const luckyColors = COLOR_LABEL[locale][weakestElement].split(/[·/]/).map((s) => s.trim());

  const recommendations = locale === "ko"
    ? [
        `보완이 필요한 ${WUXING_LABEL.ko[weakestElement]} 기운에 어울리는 색을 일상에서 자주 보세요`,
        `${DIRECTION.ko[weakestElement]} 방향에 일·공부 공간을 두면 좋아요`,
        `행운의 숫자: ${NUMBER_BY_ELEMENT[weakestElement][0]}, ${NUMBER_BY_ELEMENT[weakestElement][1]}`,
      ]
    : [
        `Hãy thường xuyên nhìn thấy/dùng màu hợp với hành ${WUXING_LABEL.vi[weakestElement]} (hành đang yếu)`,
        `Đặt bàn làm việc/học tập về hướng ${DIRECTION.vi[weakestElement]} sẽ hỗ trợ bạn`,
        `Số may mắn: ${NUMBER_BY_ELEMENT[weakestElement][0]}, ${NUMBER_BY_ELEMENT[weakestElement][1]}`,
      ];

  return {
    inputDate: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    locale,
    pillars: { year: yearPillar, month: monthPillar, day: dayPillar, time: timePillar },
    wuxingCount,
    dominantElement,
    weakestElement,
    dayMaster,
    zodiac: yearPillar.zodiac ?? "",
    story,
    today,
    compatibleZodiacs,
    careers,
    hobbies,
    luckyColors,
    recommendations,
  };
}

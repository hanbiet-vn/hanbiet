import type { Locale } from "@/i18n/routing";

export type Surname = {
  hangul: string;
  hanja: string;
  romanized: string;
  meaningVi: string;
  meaningKo: string;
};

export const SURNAMES: Surname[] = [
  { hangul: "김", hanja: "金", romanized: "Kim", meaningVi: "vàng / kim loại quý", meaningKo: "쇠, 금" },
  { hangul: "이", hanja: "李", romanized: "Lee", meaningVi: "cây mận", meaningKo: "오얏나무" },
  { hangul: "박", hanja: "朴", romanized: "Park", meaningVi: "mộc mạc, giản dị", meaningKo: "순박함" },
  { hangul: "최", hanja: "崔", romanized: "Choi", meaningVi: "đỉnh núi cao", meaningKo: "높을 최" },
  { hangul: "정", hanja: "鄭", romanized: "Jung", meaningVi: "trang nghiêm", meaningKo: "정중함" },
  { hangul: "강", hanja: "姜", romanized: "Kang", meaningVi: "cội nguồn vững vàng", meaningKo: "성씨 강" },
  { hangul: "조", hanja: "趙", romanized: "Cho", meaningVi: "Triệu (tên nước cổ)", meaningKo: "조나라" },
  { hangul: "윤", hanja: "尹", romanized: "Yoon", meaningVi: "người dẫn dắt", meaningKo: "다스릴 윤" },
  { hangul: "장", hanja: "張", romanized: "Jang", meaningVi: "rộng mở", meaningKo: "베풀 장" },
  { hangul: "임", hanja: "林", romanized: "Lim", meaningVi: "rừng", meaningKo: "수풀" },
  { hangul: "한", hanja: "韓", romanized: "Han", meaningVi: "Hàn (tên nước)", meaningKo: "나라이름 한" },
  { hangul: "오", hanja: "吳", romanized: "Oh", meaningVi: "Ngô (tên nước)", meaningKo: "오나라" },
  { hangul: "서", hanja: "徐", romanized: "Seo", meaningVi: "thong dong", meaningKo: "천천히 서" },
  { hangul: "신", hanja: "申", romanized: "Shin", meaningVi: "lặp lại, vững bền", meaningKo: "거듭 신" },
  { hangul: "권", hanja: "權", romanized: "Kwon", meaningVi: "quyền lực, uy nghi", meaningKo: "권세 권" },
  { hangul: "황", hanja: "黃", romanized: "Hwang", meaningVi: "sắc vàng quý phái", meaningKo: "누를 황" },
  { hangul: "안", hanja: "安", romanized: "Ahn", meaningVi: "an yên", meaningKo: "편안할 안" },
  { hangul: "송", hanja: "宋", romanized: "Song", meaningVi: "Tống (tên nước)", meaningKo: "송나라" },
  { hangul: "유", hanja: "柳", romanized: "Yoo", meaningVi: "cây liễu", meaningKo: "버들 유" },
  { hangul: "홍", hanja: "洪", romanized: "Hong", meaningVi: "rộng mênh mông", meaningKo: "넓을 홍" },
];

export type VibeTag =
  | "trendy" | "intelligent" | "beautiful" | "strong"
  | "lucky" | "kind" | "bright" | "noble";

// A single hanja character paired with its short noun-form meaning,
// suitable for use in a flowing sentence.
export type Char = {
  hangul: string;
  hanja: string;
  coreVi: string;
  coreKo: string;
};

export type NameSyllable = Char & {
  vibe: VibeTag[];
  gender: "M" | "F" | "U";
};

// Procedural pool — used when "trendy" is mixed with other vibes or for variety.
export const NAME_SYLLABLES: NameSyllable[] = [
  // Male-leaning
  { hangul: "준", hanja: "俊", coreVi: "vẻ tuấn tú", coreKo: "준수함", vibe: ["beautiful", "noble"], gender: "M" },
  { hangul: "민", hanja: "敏", coreVi: "sự nhanh trí", coreKo: "민첩함과 영리함", vibe: ["intelligent"], gender: "U" },
  { hangul: "우", hanja: "宇", coreVi: "vũ trụ rộng lớn", coreKo: "우주의 광활함", vibe: ["noble", "strong"], gender: "M" },
  { hangul: "호", hanja: "浩", coreVi: "sự rộng lớn", coreKo: "큰 마음과 넓음", vibe: ["strong", "noble"], gender: "M" },
  { hangul: "진", hanja: "眞", coreVi: "lòng chân thật", coreKo: "참되고 진실한 마음", vibe: ["kind", "noble"], gender: "U" },
  { hangul: "현", hanja: "賢", coreVi: "sự hiền tài", coreKo: "현명함과 어짊", vibe: ["intelligent", "kind"], gender: "U" },
  { hangul: "성", hanja: "成", coreVi: "sự thành tựu", coreKo: "이루어 냄", vibe: ["lucky", "strong"], gender: "M" },
  { hangul: "재", hanja: "才", coreVi: "tài năng", coreKo: "재능과 재주", vibe: ["intelligent"], gender: "M" },
  { hangul: "영", hanja: "英", coreVi: "tinh hoa, tài hoa", coreKo: "꽃부리, 영웅", vibe: ["noble", "strong"], gender: "U" },
  { hangul: "태", hanja: "泰", coreVi: "sự bình yên rộng lớn", coreKo: "크고 평온함", vibe: ["lucky", "kind"], gender: "M" },
  { hangul: "건", hanja: "健", coreVi: "sức khỏe và sự cứng cáp", coreKo: "굳세고 건강함", vibe: ["strong"], gender: "M" },
  { hangul: "동", hanja: "東", coreVi: "hướng đông, mặt trời mọc", coreKo: "동녘, 해 뜨는 곳", vibe: ["bright"], gender: "M" },
  { hangul: "원", hanja: "源", coreVi: "nguồn cội", coreKo: "근원과 시작", vibe: ["noble"], gender: "U" },
  { hangul: "찬", hanja: "燦", coreVi: "ánh sáng rực rỡ", coreKo: "찬란한 빛", vibe: ["bright"], gender: "M" },
  { hangul: "혁", hanja: "赫", coreVi: "sự hiển hách", coreKo: "혁혁한 빛남", vibe: ["bright", "strong"], gender: "M" },
  { hangul: "수", hanja: "秀", coreVi: "vẻ xuất sắc", coreKo: "빼어남", vibe: ["beautiful", "intelligent"], gender: "U" },

  // Female-leaning
  { hangul: "지", hanja: "智", coreVi: "trí tuệ", coreKo: "지혜로움", vibe: ["intelligent"], gender: "U" },
  { hangul: "유", hanja: "柔", coreVi: "sự dịu dàng", coreKo: "부드러움", vibe: ["kind", "beautiful"], gender: "F" },
  { hangul: "서", hanja: "瑞", coreVi: "điềm lành", coreKo: "상서로움", vibe: ["lucky"], gender: "F" },
  { hangul: "아", hanja: "雅", coreVi: "vẻ tao nhã", coreKo: "우아함", vibe: ["beautiful", "noble"], gender: "F" },
  { hangul: "은", hanja: "恩", coreVi: "ân tình ấm áp", coreKo: "은혜로움", vibe: ["kind", "lucky"], gender: "F" },
  { hangul: "예", hanja: "藝", coreVi: "tài nghệ", coreKo: "예술적 감각", vibe: ["intelligent", "beautiful"], gender: "F" },
  { hangul: "채", hanja: "彩", coreVi: "sắc màu rực rỡ", coreKo: "빛깔과 색채", vibe: ["bright", "beautiful"], gender: "F" },
  { hangul: "윤", hanja: "潤", coreVi: "sự óng ả", coreKo: "윤택하고 빛남", vibe: ["beautiful", "kind"], gender: "F" },
  { hangul: "하", hanja: "夏", coreVi: "mùa hè rạng rỡ", coreKo: "여름의 따뜻함", vibe: ["bright"], gender: "F" },
  { hangul: "린", hanja: "璘", coreVi: "ánh ngọc đẹp", coreKo: "옥빛 광채", vibe: ["beautiful", "noble"], gender: "F" },
  { hangul: "소", hanja: "笑", coreVi: "nụ cười", coreKo: "환한 미소", vibe: ["bright", "kind"], gender: "F" },
  { hangul: "혜", hanja: "慧", coreVi: "trí tuệ sáng suốt", coreKo: "총명한 지혜", vibe: ["intelligent", "kind"], gender: "F" },
  { hangul: "주", hanja: "珠", coreVi: "ngọc trai quý", coreKo: "진주", vibe: ["beautiful", "noble"], gender: "F" },
  { hangul: "별", hanja: "별", coreVi: "ngôi sao (tiếng thuần Hàn)", coreKo: "별 (순우리말)", vibe: ["bright", "noble"], gender: "F" },

  // Unisex
  { hangul: "선", hanja: "善", coreVi: "lòng thiện", coreKo: "선량함", vibe: ["kind"], gender: "U" },
  { hangul: "온", hanja: "溫", coreVi: "sự ấm áp", coreKo: "온화함", vibe: ["kind"], gender: "U" },
  { hangul: "복", hanja: "福", coreVi: "phúc lành", coreKo: "복", vibe: ["lucky"], gender: "U" },
  { hangul: "광", hanja: "光", coreVi: "ánh sáng", coreKo: "빛", vibe: ["bright"], gender: "U" },
];

export type GivenNamePreset = {
  hangul: string;
  hanja: string;
  romanized: string;
  syl1: Char;
  syl2: Char;
  noteVi?: string;
  noteKo?: string;
};

export const TRENDY_PRESETS_M: GivenNamePreset[] = [
  { hangul: "도윤", hanja: "度允", romanized: "Doyoon",
    syl1: { hangul: "도", hanja: "度", coreVi: "phép tắc, chuẩn mực", coreKo: "법도와 균형" },
    syl2: { hangul: "윤", hanja: "允", coreVi: "lòng chân thật", coreKo: "진실과 신의" },
    noteVi: "Đang là tên nam được đặt nhiều nhất ở Hàn Quốc 2024",
    noteKo: "2024년 한국 남자 이름 1위" },
  { hangul: "하준", hanja: "夏俊", romanized: "Hajun",
    syl1: { hangul: "하", hanja: "夏", coreVi: "mùa hè rạng rỡ", coreKo: "여름의 따뜻함" },
    syl2: { hangul: "준", hanja: "俊", coreVi: "vẻ tuấn tú", coreKo: "준수함" } },
  { hangul: "서준", hanja: "瑞俊", romanized: "Seojun",
    syl1: { hangul: "서", hanja: "瑞", coreVi: "điềm lành", coreKo: "상서로움" },
    syl2: { hangul: "준", hanja: "俊", coreVi: "vẻ tuấn tú", coreKo: "준수함" } },
  { hangul: "시우", hanja: "時雨", romanized: "Siwoo",
    syl1: { hangul: "시", hanja: "時", coreVi: "đúng thời điểm", coreKo: "때, 시기" },
    syl2: { hangul: "우", hanja: "雨", coreVi: "cơn mưa lành", coreKo: "단비" },
    noteVi: "Cái tên thơ 'như cơn mưa đến đúng lúc'",
    noteKo: "'때맞춰 내리는 단비'라는 시적인 이름" },
  { hangul: "주원", hanja: "柱元", romanized: "Juwon",
    syl1: { hangul: "주", hanja: "柱", coreVi: "trụ cột vững vàng", coreKo: "기둥 같은 든든함" },
    syl2: { hangul: "원", hanja: "元", coreVi: "đứng đầu, khởi nguyên", coreKo: "으뜸, 시작" } },
  { hangul: "도현", hanja: "度賢", romanized: "Dohyun",
    syl1: { hangul: "도", hanja: "度", coreVi: "phép tắc", coreKo: "법도" },
    syl2: { hangul: "현", hanja: "賢", coreVi: "sự hiền tài", coreKo: "현명함과 어짊" } },
  { hangul: "시윤", hanja: "時允", romanized: "Siyoon",
    syl1: { hangul: "시", hanja: "時", coreVi: "đúng thời điểm", coreKo: "때, 시기" },
    syl2: { hangul: "윤", hanja: "允", coreVi: "sự chân thật", coreKo: "진실" } },
  { hangul: "지호", hanja: "智浩", romanized: "Jiho",
    syl1: { hangul: "지", hanja: "智", coreVi: "trí tuệ", coreKo: "지혜" },
    syl2: { hangul: "호", hanja: "浩", coreVi: "sự rộng lớn", coreKo: "광활함" } },
  { hangul: "예준", hanja: "藝俊", romanized: "Yejun",
    syl1: { hangul: "예", hanja: "藝", coreVi: "tài nghệ, năng khiếu", coreKo: "예술과 재능" },
    syl2: { hangul: "준", hanja: "俊", coreVi: "vẻ tuấn tú", coreKo: "준수함" } },
  { hangul: "유준", hanja: "裕俊", romanized: "Yujun",
    syl1: { hangul: "유", hanja: "裕", coreVi: "sự sung túc", coreKo: "풍요로움" },
    syl2: { hangul: "준", hanja: "俊", coreVi: "vẻ tuấn tú", coreKo: "준수함" } },
  { hangul: "건우", hanja: "健宇", romanized: "Geonwoo",
    syl1: { hangul: "건", hanja: "健", coreVi: "sức khỏe cứng cáp", coreKo: "건강함" },
    syl2: { hangul: "우", hanja: "宇", coreVi: "vũ trụ rộng lớn", coreKo: "우주" } },
  { hangul: "우진", hanja: "宇眞", romanized: "Woojin",
    syl1: { hangul: "우", hanja: "宇", coreVi: "vũ trụ", coreKo: "우주" },
    syl2: { hangul: "진", hanja: "眞", coreVi: "lòng chân thật", coreKo: "참됨" } },
  { hangul: "민준", hanja: "敏俊", romanized: "Minjun",
    syl1: { hangul: "민", hanja: "敏", coreVi: "sự nhanh trí", coreKo: "민첩함과 영리함" },
    syl2: { hangul: "준", hanja: "俊", coreVi: "vẻ tuấn tú", coreKo: "준수함" } },
  { hangul: "지후", hanja: "智厚", romanized: "Jihoo",
    syl1: { hangul: "지", hanja: "智", coreVi: "trí tuệ", coreKo: "지혜" },
    syl2: { hangul: "후", hanja: "厚", coreVi: "tình cảm sâu đậm", coreKo: "두텁고 깊은 마음" } },
  { hangul: "선우", hanja: "善宇", romanized: "Sunwoo",
    syl1: { hangul: "선", hanja: "善", coreVi: "lòng thiện", coreKo: "선함" },
    syl2: { hangul: "우", hanja: "宇", coreVi: "vũ trụ", coreKo: "우주" } },
  { hangul: "정우", hanja: "廷宇", romanized: "Jungwoo",
    syl1: { hangul: "정", hanja: "廷", coreVi: "phẩm cách trang nghiêm", coreKo: "조정과 위엄" },
    syl2: { hangul: "우", hanja: "宇", coreVi: "vũ trụ", coreKo: "우주" } },
  { hangul: "지안", hanja: "智安", romanized: "Jian",
    syl1: { hangul: "지", hanja: "智", coreVi: "trí tuệ", coreKo: "지혜" },
    syl2: { hangul: "안", hanja: "安", coreVi: "sự bình an", coreKo: "평안함" } },
  { hangul: "은우", hanja: "銀宇", romanized: "Eunwoo",
    syl1: { hangul: "은", hanja: "銀", coreVi: "ánh bạc tinh khiết", coreKo: "은빛" },
    syl2: { hangul: "우", hanja: "宇", coreVi: "vũ trụ", coreKo: "우주" },
    noteVi: "Cảm hứng từ Cha Eun-woo (ASTRO)",
    noteKo: "차은우 같은 느낌의 이름" },
  { hangul: "윤우", hanja: "允宇", romanized: "Yoonwoo",
    syl1: { hangul: "윤", hanja: "允", coreVi: "sự chân thật", coreKo: "진실" },
    syl2: { hangul: "우", hanja: "宇", coreVi: "vũ trụ", coreKo: "우주" } },
  { hangul: "도훈", hanja: "度勳", romanized: "Dohoon",
    syl1: { hangul: "도", hanja: "度", coreVi: "phép tắc", coreKo: "법도" },
    syl2: { hangul: "훈", hanja: "勳", coreVi: "công lao", coreKo: "공훈" } },
];

export const TRENDY_PRESETS_F: GivenNamePreset[] = [
  { hangul: "서아", hanja: "瑞雅", romanized: "Seoah",
    syl1: { hangul: "서", hanja: "瑞", coreVi: "điềm lành", coreKo: "상서로움" },
    syl2: { hangul: "아", hanja: "雅", coreVi: "vẻ tao nhã", coreKo: "우아함" },
    noteVi: "Đang là tên nữ được đặt nhiều nhất ở Hàn Quốc 2024",
    noteKo: "2024년 한국 여자 이름 1위" },
  { hangul: "서윤", hanja: "瑞潤", romanized: "Seoyoon",
    syl1: { hangul: "서", hanja: "瑞", coreVi: "điềm lành", coreKo: "상서로움" },
    syl2: { hangul: "윤", hanja: "潤", coreVi: "sự óng ả", coreKo: "윤택함" } },
  { hangul: "하윤", hanja: "夏潤", romanized: "Hayoon",
    syl1: { hangul: "하", hanja: "夏", coreVi: "mùa hè rạng rỡ", coreKo: "여름의 따뜻함" },
    syl2: { hangul: "윤", hanja: "潤", coreVi: "sự óng ả", coreKo: "윤택함" } },
  { hangul: "지유", hanja: "智裕", romanized: "Jiyu",
    syl1: { hangul: "지", hanja: "智", coreVi: "trí tuệ", coreKo: "지혜" },
    syl2: { hangul: "유", hanja: "裕", coreVi: "sự sung túc", coreKo: "풍요로움" } },
  { hangul: "지아", hanja: "智雅", romanized: "Jia",
    syl1: { hangul: "지", hanja: "智", coreVi: "trí tuệ", coreKo: "지혜" },
    syl2: { hangul: "아", hanja: "雅", coreVi: "vẻ tao nhã", coreKo: "우아함" } },
  { hangul: "아인", hanja: "雅仁", romanized: "Ain",
    syl1: { hangul: "아", hanja: "雅", coreVi: "vẻ tao nhã", coreKo: "우아함" },
    syl2: { hangul: "인", hanja: "仁", coreVi: "lòng nhân hậu", coreKo: "인자함" } },
  { hangul: "하린", hanja: "夏璘", romanized: "Harin",
    syl1: { hangul: "하", hanja: "夏", coreVi: "mùa hè", coreKo: "여름" },
    syl2: { hangul: "린", hanja: "璘", coreVi: "ánh ngọc đẹp", coreKo: "옥빛 광채" } },
  { hangul: "유나", hanja: "裕娜", romanized: "Yuna",
    syl1: { hangul: "유", hanja: "裕", coreVi: "sự sung túc", coreKo: "풍요로움" },
    syl2: { hangul: "나", hanja: "娜", coreVi: "vẻ duyên dáng", coreKo: "아름다움" } },
  { hangul: "채원", hanja: "彩源", romanized: "Chaewon",
    syl1: { hangul: "채", hanja: "彩", coreVi: "sắc màu rực rỡ", coreKo: "색채" },
    syl2: { hangul: "원", hanja: "源", coreVi: "nguồn cội", coreKo: "근원" } },
  { hangul: "시아", hanja: "時雅", romanized: "Siah",
    syl1: { hangul: "시", hanja: "時", coreVi: "đúng thời điểm", coreKo: "때" },
    syl2: { hangul: "아", hanja: "雅", coreVi: "vẻ tao nhã", coreKo: "우아함" } },
  { hangul: "다인", hanja: "多仁", romanized: "Dain",
    syl1: { hangul: "다", hanja: "多", coreVi: "sự dồi dào", coreKo: "많음" },
    syl2: { hangul: "인", hanja: "仁", coreVi: "lòng nhân hậu", coreKo: "인자함" } },
  { hangul: "서연", hanja: "瑞娟", romanized: "Seoyeon",
    syl1: { hangul: "서", hanja: "瑞", coreVi: "điềm lành", coreKo: "상서로움" },
    syl2: { hangul: "연", hanja: "娟", coreVi: "vẻ yêu kiều", coreKo: "아리따움" } },
  { hangul: "지우", hanja: "智雨", romanized: "Jiwoo",
    syl1: { hangul: "지", hanja: "智", coreVi: "trí tuệ", coreKo: "지혜" },
    syl2: { hangul: "우", hanja: "雨", coreVi: "cơn mưa lành", coreKo: "단비" } },
  { hangul: "예린", hanja: "藝璘", romanized: "Yerin",
    syl1: { hangul: "예", hanja: "藝", coreVi: "tài nghệ", coreKo: "예술" },
    syl2: { hangul: "린", hanja: "璘", coreVi: "ánh ngọc đẹp", coreKo: "옥빛 광채" } },
  { hangul: "수아", hanja: "秀雅", romanized: "Sua",
    syl1: { hangul: "수", hanja: "秀", coreVi: "vẻ xuất sắc", coreKo: "빼어남" },
    syl2: { hangul: "아", hanja: "雅", coreVi: "vẻ tao nhã", coreKo: "우아함" } },
  { hangul: "윤서", hanja: "潤瑞", romanized: "Yoonseo",
    syl1: { hangul: "윤", hanja: "潤", coreVi: "sự óng ả", coreKo: "윤택함" },
    syl2: { hangul: "서", hanja: "瑞", coreVi: "điềm lành", coreKo: "상서로움" } },
  { hangul: "은서", hanja: "恩瑞", romanized: "Eunseo",
    syl1: { hangul: "은", hanja: "恩", coreVi: "ân tình", coreKo: "은혜" },
    syl2: { hangul: "서", hanja: "瑞", coreVi: "điềm lành", coreKo: "상서로움" } },
  { hangul: "다은", hanja: "多恩", romanized: "Daeun",
    syl1: { hangul: "다", hanja: "多", coreVi: "sự dồi dào", coreKo: "많음" },
    syl2: { hangul: "은", hanja: "恩", coreVi: "ân tình", coreKo: "은혜" } },
  { hangul: "하은", hanja: "夏恩", romanized: "Haeun",
    syl1: { hangul: "하", hanja: "夏", coreVi: "mùa hè rạng rỡ", coreKo: "여름의 따뜻함" },
    syl2: { hangul: "은", hanja: "恩", coreVi: "ân tình", coreKo: "은혜" } },
  { hangul: "소율", hanja: "笑律", romanized: "Soyul",
    syl1: { hangul: "소", hanja: "笑", coreVi: "nụ cười", coreKo: "미소" },
    syl2: { hangul: "율", hanja: "律", coreVi: "giai điệu", coreKo: "음률" } },
];

export const VIBE_LABELS: Record<Locale, Record<VibeTag, string>> = {
  vi: {
    trendy: "🔥 Hiện đại (2024)",
    intelligent: "Thông minh",
    beautiful: "Xinh đẹp",
    strong: "Mạnh mẽ",
    lucky: "May mắn",
    kind: "Hiền lành",
    bright: "Tươi sáng",
    noble: "Cao quý",
  },
  ko: {
    trendy: "🔥 요즘 스타일",
    intelligent: "지적",
    beautiful: "아름다운",
    strong: "강한",
    lucky: "행운",
    kind: "친절한",
    bright: "밝은",
    noble: "고귀한",
  },
};

const ENDINGS_KO = [
  "어디서나 자기 색을 빛내는 사람이 떠올라요.",
  "차분하면서도 자기 색이 또렷한 인상이에요.",
  "마음을 따뜻하게 만드는 이름이에요.",
  "조용히 자기 길을 걸어가는 단단한 사람이 그려져요.",
  "친구들 사이에서 늘 환영받는 사람일 것 같아요.",
  "당당하면서도 따뜻한 사람의 이름이에요.",
  "단아하면서도 자기다움을 잃지 않는 이름이에요.",
];

const ENDINGS_VI = [
  "vẽ nên hình ảnh một người tỏa sáng theo cách rất riêng.",
  "gợi cảm giác trầm tĩnh nhưng vững vàng bên trong.",
  "có sức hút bởi sự ấm áp tự nhiên.",
  "khắc họa một người dịu dàng nhưng có cá tính rõ rệt.",
  "khiến người ta vừa thấy gần gũi vừa thấy đặc biệt.",
  "vừa đường hoàng vừa ấm áp, dễ được bạn bè quý mến.",
  "vừa thanh tao vừa giữ được nét riêng đầy bản sắc.",
];

export function tellNameStory(args: {
  syl1: Char;
  syl2: Char;
  noteVi?: string;
  noteKo?: string;
  locale: Locale;
  rand?: () => number;
}): string {
  const { syl1, syl2, noteVi, noteKo, locale } = args;
  const r = args.rand ?? Math.random;
  if (locale === "ko") {
    const ending = ENDINGS_KO[Math.floor(r() * ENDINGS_KO.length)];
    const note = noteKo ? `${noteKo}이며, ` : "";
    return `${syl1.hanja}(${syl1.hangul})은 '${syl1.coreKo}', ${syl2.hanja}(${syl2.hangul})은 '${syl2.coreKo}'을 담은 글자예요. ${note}두 글자가 어우러져 ${ending}`;
  }
  const ending = ENDINGS_VI[Math.floor(r() * ENDINGS_VI.length)];
  const note = noteVi ? `${noteVi}, và ` : "";
  return `Chữ ${syl1.hanja}(${syl1.hangul}) gợi '${syl1.coreVi}', còn ${syl2.hanja}(${syl2.hangul}) là '${syl2.coreVi}'. ${note}hai chữ hòa cùng nhau ${ending}`;
}

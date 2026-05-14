import type { Locale } from "@/i18n/routing";

// 4 axes, each scored from -3 (one side) to +3 (other side) via 3 questions.
// Final letter combination → 16 characters.
//
// I/O = 內(inside) vs 外(outside) — introvert vs extrovert
// W/M = 文(scholar) vs 武(warrior) — bookish/cerebral vs physical/active
// G/S = 集(group) vs 獨(solo) — group-oriented vs lone wolf
// R/U = 義(righteous) vs 利(useful) — principle-driven vs profit-driven

export type AxisKey = "IO" | "WM" | "GS" | "RU";
export type Letter = "I" | "O" | "W" | "M" | "G" | "S" | "R" | "U";
export type CharacterId =
  // 內 (I)
  | "IWGR" | "IWGU" | "IWSR" | "IWSU"
  | "IMGR" | "IMGU" | "IMSR" | "IMSU"
  // 外 (O)
  | "OWGR" | "OWGU" | "OWSR" | "OWSU"
  | "OMGR" | "OMGU" | "OMSR" | "OMSU";

export type QuizOption = {
  letter: Letter;
  textVi: string;
  textKo: string;
};

export type Question = {
  id: string;
  axis: AxisKey;
  textVi: string;
  textKo: string;
  options: [QuizOption, QuizOption];
};

export const QUESTIONS: Question[] = [
  // === IO axis (內/外) ===
  {
    id: "io1", axis: "IO",
    textVi: "Bạn của bạn nhắn: 'Tối nay tụ tập đông lắm, đi không?' Phản ứng đầu tiên trong lòng bạn:",
    textKo: "친구가 갑자기 '오늘 사람들 많이 모이는데 갈래?' 한다. 마음 속 첫 반응은?",
    options: [
      { letter: "I", textVi: "'Thôi để mình ở nhà...'", textKo: "'음... 나는 집에 있을게'" },
      { letter: "O", textVi: "'OK! Ai đến nữa thế?'", textKo: "'좋아! 누구누구 와?'" },
    ],
  },
  {
    id: "io2", axis: "IO",
    textVi: "Sáng thứ Hai trên tàu điện đi làm, bạn thường:",
    textKo: "월요일 아침 출근길 지하철에서 당신은?",
    options: [
      { letter: "I", textVi: "Đeo tai nghe, đắm chìm vào thế giới của riêng mình", textKo: "이어폰 끼고 혼자만의 세계로" },
      { letter: "O", textVi: "Chat với bạn, hoặc quan sát mọi người xung quanh", textKo: "친구와 카톡 또는 사람 구경" },
    ],
  },
  {
    id: "io3", axis: "IO",
    textVi: "Buổi giới thiệu bản thân tại một nhóm mới, bạn:",
    textKo: "새 모임에서 자기소개 차례가 왔다",
    options: [
      { letter: "I", textVi: "Nói ngắn gọn, muốn nhanh ngồi xuống nghe", textKo: "짧게 말하고 듣는 자리로 빨리 가고 싶다" },
      { letter: "O", textVi: "Thêm một hai câu đùa, khuấy động không khí", textKo: "농담 한두 마디 섞어 분위기 띄운다" },
    ],
  },
  // === WM axis (文/武) ===
  {
    id: "wm1", axis: "WM",
    textVi: "Bạn được tặng 1 năm tự do làm gì cũng được. Bạn chọn:",
    textKo: "1년의 완전한 자유시간이 주어진다면?",
    options: [
      { letter: "W", textVi: "Sống trong thư viện lớn nhất thành phố, đọc cho đã", textKo: "전국 최고의 도서관에서 살기" },
      { letter: "M", textVi: "Đi khắp đất nước, học bằng đôi tay và đôi chân", textKo: "전국 팔도 여행하며 손과 발로 경험하기" },
    ],
  },
  {
    id: "wm2", axis: "WM",
    textVi: "Bạn thân mở quán cà phê mới. Bạn giúp được nhất ở khâu nào?",
    textKo: "친구가 새 카페를 열었다. 당신이 가장 잘 도울 수 있는 건?",
    options: [
      { letter: "W", textVi: "Viết menu, content Instagram, định vị concept", textKo: "메뉴판 카피·인스타 글·컨셉 정리" },
      { letter: "M", textVi: "Khiêng bàn ghế, sửa nội thất, sắp xếp luồng đi", textKo: "인테리어 손보기·기물 옮기기·동선 잡기" },
    ],
  },
  {
    id: "wm3", axis: "WM",
    textVi: "Buổi tối sau giờ làm, lúc nào bạn cảm thấy thỏa mãn nhất?",
    textKo: "퇴근 후 가장 만족스러운 시간은?",
    options: [
      { letter: "W", textVi: "Đắm chìm vào một cuốn sách trong 2 tiếng", textKo: "책 한 권에 푹 빠지는 두 시간" },
      { letter: "M", textVi: "Tự nấu một bữa ngon, hoặc tập thể thao đẫm mồ hôi", textKo: "직접 요리하거나 운동 후 샤워" },
    ],
  },
  // === GS axis (集/獨) ===
  {
    id: "gs1", axis: "GS",
    textVi: "Trong buổi liên hoan công ty, bạn thường:",
    textKo: "회식 자리에서 당신은?",
    options: [
      { letter: "G", textVi: "Đi vòng quanh, kết nối, quản 'vibe' của bàn", textKo: "사람들 사이를 누비며 분위기 챙긴다" },
      { letter: "S", textVi: "Ngồi một góc, chỉ chuyện với 1-2 người thân", textKo: "한쪽에서 친한 1-2명이랑만" },
    ],
  },
  {
    id: "gs2", axis: "GS",
    textVi: "Bạn vừa nhận dự án khó. Bạn an tâm hơn khi:",
    textKo: "어려운 프로젝트가 떨어졌다. 더 마음 편한 건?",
    options: [
      { letter: "G", textVi: "Đồng đội cùng kéo, chia sẻ trách nhiệm", textKo: "팀원들과 함께 끌고 가기" },
      { letter: "S", textVi: "Mình tự kiểm soát toàn bộ", textKo: "내가 전부 컨트롤하기" },
    ],
  },
  // === RU axis (義/利) ===
  {
    id: "ru1", axis: "RU",
    textVi: "Có cơ hội kiếm số tiền lớn, nhưng phải hạ thấp danh dự một chút. Bạn:",
    textKo: "큰돈을 벌 기회. 단, 체면이 좀 깎인다. 당신은?",
    options: [
      { letter: "R", textVi: "'Danh dự là trên hết — không làm đâu'", textKo: "'체면이 먼저지 — 안 한다'" },
      { letter: "U", textVi: "'Danh dự có nuôi cơm đâu — cơ hội phải nắm'", textKo: "'체면이 밥 먹여주나 — 기회는 잡아야지'" },
    ],
  },
  {
    id: "ru2", axis: "RU",
    textVi: "Bạn thân vừa quyết định một điều rõ ràng là sai. Bạn:",
    textKo: "친한 친구가 명백히 잘못된 선택을 했다",
    options: [
      { letter: "R", textVi: "Nói thẳng, kể cả khiến bạn ấy buồn", textKo: "솔직히 말해준다, 서운해해도" },
      { letter: "U", textVi: "Xem tình hình, nói khéo cho dễ nghe", textKo: "분위기 봐서 돌려서 말한다" },
    ],
  },
];

// Character data — 16 archetypes
export type Character = {
  id: CharacterId;
  hangul: string;
  hanja: string;
  emoji: string;
  image?: string;
  // Short role label
  roleVi: string;
  roleKo: string;
  // 1-line essence
  taglineVi: string;
  taglineKo: string;
  // Full personality description (2-3 sentences)
  descVi: string;
  descKo: string;
  // 3-4 strengths
  strengthsVi: string[];
  strengthsKo: string[];
  // 2-3 watch-outs
  watchOutVi: string[];
  watchOutKo: string[];
  // Compatible match (mutual)
  matchId: CharacterId;
  // Incompatible character (clash)
  antiMatchId: CharacterId;
  // Rarity percentage (sums to ~100% across all 16)
  rarity: number;
  // Punchy one-line destiny (viral share quote)
  destinyVi: string;
  destinyKo: string;
  // 3 modern-day careers
  modernCareersVi: string[];
  modernCareersKo: string[];
  // "This is YOU" — 3 specific everyday scenes that make people nod
  scenesVi: string[];
  scenesKo: string[];
  // What you do under stress
  stressVi: string;
  stressKo: string;
  // Your love language / dating style
  loveVi: string;
  loveKo: string;
  // Korean celebrities with this vibe (fun cultural anchor)
  celebrityVi: string;
  celebrityKo: string;
  // Theme color — CSS gradient string
  accent: string;
};

export const CHARACTERS: Record<CharacterId, Character> = {
  // === 內 (Introverted) ===
  IWGR: {
    id: "IWGR", hangul: "중전", hanja: "中殿", emoji: "👸", image: "/joseon/jungjeon.png",
    roleVi: "Trung điện (Hoàng hậu)",
    roleKo: "중전 (中殿)",
    taglineVi: "Người dẫn dắt thầm lặng nhưng đầy uy quyền",
    taglineKo: "조용하지만 강한 영향력을 가진 사람",
    descVi:
      "Bạn không thích ồn ào, nhưng khi cần thì lời nói có trọng lượng. Đứng phía sau quyền lực mà không cần ánh đèn — đó là phong cách của bạn. Người ngoài thấy bạn dịu dàng, nhưng bên trong là một ý chí sắt đá.",
    descKo:
      "당신은 떠들썩한 걸 좋아하지 않지만 한 마디 한 마디에 무게가 있어요. 권력 뒤에 서 있되 스포트라이트는 필요 없는 사람. 밖에서는 부드러워 보이지만 안에는 단단한 의지가 있습니다.",
    strengthsVi: ["Trí tuệ chiến lược", "Khả năng quan sát người", "Giữ bí mật giỏi", "Bền bỉ"],
    strengthsKo: ["전략적 지성", "사람을 보는 눈", "비밀 잘 지킴", "끈기"],
    watchOutVi: ["Quá kín đáo dễ bị hiểu lầm", "Áp lực hoàn hảo"],
    watchOutKo: ["너무 닫혀 있으면 오해 받을 수 있어요", "완벽주의 부담"],
    matchId: "OMGR", // 무관
    antiMatchId: "OMSU",
    rarity: 2.1,
    destinyKo: "한 마디로 천 명을 움직이는 사람",
    destinyVi: "Một lời của bạn lay động ngàn người",
    modernCareersKo: ["비서실장", "PR 디렉터", "종합기획자"],
    modernCareersVi: ["Chánh văn phòng CEO", "Giám đốc PR", "Quản lý dự án lớn"],
    scenesKo: [
      "회의에서 끝까지 듣다가 한 마디 했는데, 그 한 마디가 결정이 됨",
      "친한 친구는 5명, 나머지는 정확한 거리 유지",
      "속이 폭발해도 표정은 그대로. 며칠 뒤 혼자서 다 정리",
    ],
    scenesVi: [
      "Trong cuộc họp im lặng nghe đến cuối — nói một câu là quyết định luôn",
      "Bạn thân chỉ 5 người, người khác giữ khoảng cách rõ ràng",
      "Bên trong bùng nổ nhưng mặt vẫn bình thường, vài ngày sau tự xử lý",
    ],
    stressKo: "주변과 거리를 둡니다. 말 적어지고 잠 많아짐. 혼자만의 시간이 곧 회복.",
    stressVi: "Giữ khoảng cách với mọi người. Nói ít hẳn, ngủ nhiều. Thời gian một mình = hồi phục.",
    loveKo: "표현은 드물지만 깊고 한결같음. 사랑하는 사람을 위해 조용히 길을 만들어줘요.",
    loveVi: "Hiếm khi thể hiện nhưng sâu và bền. Âm thầm mở đường cho người mình yêu.",
    celebrityKo: "송혜교 · 아이유 · 김지원 스타일 (조용한 카리스마)",
    celebrityVi: "Phong cách Song Hye-kyo · IU · Kim Ji-won (carisma trầm)",
    accent: "linear-gradient(135deg, #f43f5e, #db2777)",
  },
  IWGU: {
    id: "IWGU", hangul: "의녀", hanja: "醫女", emoji: "🌿", image: "/joseon/uinyeo.png",
    roleVi: "Y nữ (Nữ y sĩ cung đình)",
    roleKo: "의녀 (醫女)",
    taglineVi: "Người chữa lành dịu dàng, luôn nghĩ cho người khác",
    taglineKo: "조용히 다른 이를 돌보는 치유자",
    descVi:
      "Bạn là người luôn quan tâm đến cảm giác của người khác. Không phô trương, nhưng khi ai đó cần — bạn là người đầu tiên xuất hiện. Thực tế, khéo léo, và có đôi tay vàng.",
    descKo:
      "당신은 늘 다른 사람의 컨디션을 살피는 사람이에요. 티 내지 않지만 누군가 힘들 때 가장 먼저 옆에 있어주죠. 현실적이고 손이 빠르며, 묵묵히 일하는 황금손.",
    strengthsVi: ["Tinh tế, biết quan tâm", "Đôi tay khéo léo", "Thực tế", "Đáng tin"],
    strengthsKo: ["섬세한 배려심", "손재주", "현실 감각", "신뢰감"],
    watchOutVi: ["Cho đi quá nhiều — nhớ chăm chính mình", "Ngại nói 'không'"],
    watchOutKo: ["너무 많이 주는 편 — 자신도 챙기세요", "'아니오' 말하기 어려움"],
    matchId: "OWGR", // 왕
    antiMatchId: "OWSR",
    rarity: 9.5,
    destinyKo: "당신의 손길이 누군가의 하루를 구합니다",
    destinyVi: "Bàn tay bạn cứu rỗi một ngày của ai đó",
    modernCareersKo: ["간호사", "임상심리사", "약사"],
    modernCareersVi: ["Y tá", "Tâm lý lâm sàng", "Dược sĩ"],
    scenesKo: [
      "친구 컨디션을 본인이 먼저 알아챔: \"오늘 좀 안 좋아 보이는데?\"",
      "약속 시간보다 10분 일찍 와서 자리 잡아둠",
      "남의 생일은 다 기억하는데, 본인 생일은 가끔 외로움",
    ],
    scenesVi: [
      "Nhận ra bạn không khoẻ trước cả bạn: \"Cậu hôm nay sao thế?\"",
      "Đến trước hẹn 10 phút để giữ chỗ",
      "Nhớ sinh nhật mọi người, nhưng sinh nhật mình thì cô đơn",
    ],
    stressKo: "더 다른 사람을 돌봐요. 본인은 늘 마지막. 결국 몸이 먼저 신호를 보내면 그제야 쉬는 타입.",
    stressVi: "Càng chăm sóc người khác. Bản thân luôn cuối cùng. Cơ thể báo trước thì mới chịu nghỉ.",
    loveKo: "사랑 = 디테일. 그 사람이 좋아하는 커피, 우산 챙겨주기, 약속 시간 외워주기.",
    loveVi: "Yêu = chi tiết. Cà phê người đó thích, mang ô, nhớ giờ hẹn của họ.",
    celebrityKo: "박보영 · 김태리 · 임수정 스타일 (다정한 치유자)",
    celebrityVi: "Phong cách Park Bo-young · Kim Tae-ri · Im Soo-jung (người chữa lành dịu dàng)",
    accent: "linear-gradient(135deg, #10b981, #0d9488)",
  },
  IWSR: {
    id: "IWSR", hangul: "풍수사", hanja: "風水師", emoji: "🧭", image: "/joseon/pungsusa.png",
    roleVi: "Phong thủy sư",
    roleKo: "풍수사 (風水師)",
    taglineVi: "Người đọc dòng chảy của vũ trụ",
    taglineKo: "우주의 흐름을 읽는 사람",
    descVi:
      "Bạn nhìn thấy những thứ người khác bỏ qua. Có một thế giới riêng trong đầu, đầy nguyên tắc và logic. Người ta tìm đến bạn để xin lời khuyên những lúc quan trọng.",
    descKo:
      "당신은 남들이 놓치는 패턴을 봅니다. 머릿속에 자기만의 우주가 있고, 그 안에는 분명한 원칙이 있어요. 중요한 결정을 앞두고 사람들이 당신을 찾는 이유죠.",
    strengthsVi: ["Tư duy sâu", "Nguyên tắc rõ ràng", "Trực giác mạnh", "Tự lập"],
    strengthsKo: ["깊이 있는 사고", "분명한 원칙", "강한 직관", "독립적"],
    watchOutVi: ["Cô đơn vì ít chia sẻ", "Khó nhân nhượng"],
    watchOutKo: ["속을 잘 안 보여서 외로울 수 있음", "타협이 어려움"],
    matchId: "OWSU", // 화공
    antiMatchId: "OMGR",
    rarity: 3.2,
    destinyKo: "남들이 보지 못하는 흐름을 읽는 사람",
    destinyVi: "Bạn đọc được dòng chảy người khác không thấy",
    modernCareersKo: ["데이터 분석가", "인테리어 디자이너", "점성술사"],
    modernCareersVi: ["Nhà phân tích dữ liệu", "Designer nội thất", "Nhà chiêm tinh"],
    scenesKo: [
      "사람들이 못 본 패턴을 봐서 가끔 무서워함: \"저 사람들 곧 헤어질 듯\"",
      "집·자리·동선에 민감. 가구 배치를 계속 바꿈",
      "친구의 새 연인 얘기를 듣자마자 결말이 보임",
    ],
    scenesVi: [
      "Thấy pattern người khác không thấy, đôi khi đáng sợ: \"Cặp đó sắp chia tay\"",
      "Nhạy về nhà cửa, vị trí, luồng đi — bố trí lại đồ đạc liên tục",
      "Bạn kể chuyện người yêu mới — bạn đã thấy kết cục",
    ],
    stressKo: "더 안으로 들어가요. 사람보다 책·자연·혼자 걷기로 풀어요. 한 달 잠수 가능.",
    stressVi: "Càng rút vào trong. Sách, thiên nhiên, đi bộ một mình thay vì gặp người. Có thể \"mất tích\" cả tháng.",
    loveKo: "한 번에 깊게 빠짐. 알아본 사람 외엔 흥미 없어요. 사랑하면 평생.",
    loveVi: "Yêu sâu một lần. Nhận ra ai rồi thì khác hẳn, yêu là cả đời.",
    celebrityKo: "박해일 · 이병헌 · 김혜수 스타일 (속이 깊은 통찰자)",
    celebrityVi: "Phong cách Park Hae-il · Lee Byung-hun · Kim Hye-soo (người sâu sắc)",
    accent: "linear-gradient(135deg, #8b5cf6, #4f46e5)",
  },
  IWSU: {
    id: "IWSU", hangul: "역관", hanja: "譯官", emoji: "📜", image: "/joseon/yeokgwan.png",
    roleVi: "Dịch quan (Phiên dịch viên triều đình)",
    roleKo: "역관 (譯官)",
    taglineVi: "Cầu nối giữa các thế giới",
    taglineKo: "두 세계를 잇는 다리",
    descVi:
      "Bạn giỏi 'đọc' người và tình huống. Không cần ồn ào, nhưng luôn ở đúng chỗ vào đúng lúc. Thực tế và linh hoạt — bạn biết cách biến kiến thức thành cơ hội.",
    descKo:
      "당신은 사람과 상황을 잘 읽어요. 떠들썩하지 않지만 늘 적절한 시점에 적절한 자리에 있죠. 현실적이고 유연해서 지식을 기회로 바꾸는 능력이 있어요.",
    strengthsVi: ["Đa ngôn ngữ/đa văn hóa", "Linh hoạt", "Mạng lưới quan hệ", "Quan sát tinh"],
    strengthsKo: ["다국어/다문화", "유연성", "인맥", "관찰력"],
    watchOutVi: ["Đôi khi 'đu dây' quá", "Ít cảm xúc thật"],
    watchOutKo: ["때로 양쪽에 줄타기 과해요", "진심을 잘 안 보여줌"],
    matchId: "OMSU", // 광대
    antiMatchId: "IMSR",
    rarity: 4.8,
    destinyKo: "두 세계 사이에서 가장 빛나는 사람",
    destinyVi: "Bạn tỏa sáng nhất giữa hai thế giới",
    modernCareersKo: ["동시통역사", "외교관", "글로벌 마케터"],
    modernCareersVi: ["Phiên dịch song song", "Nhà ngoại giao", "Marketing toàn cầu"],
    scenesKo: [
      "여러 외국어를 조금씩 다 함. 어느 하나 완벽하진 않음",
      "낯선 장소에서도 빨리 적응. 메뉴를 봐도 직관으로 골라요",
      "친구마다 보여주는 모습이 살짝 다름 — 본인도 알고 있음",
    ],
    scenesVi: [
      "Biết nhiều ngoại ngữ chút chút, không hoàn hảo cái nào",
      "Thích nghi nhanh ở nơi lạ. Nhìn menu là chọn được bằng trực giác",
      "Mỗi bạn thấy một mặt khác của bạn — và bạn biết điều đó",
    ],
    stressKo: "더 많은 사람을 만나거나 새 환경으로 도망. 한 곳에 오래 있으면 답답해해요.",
    stressVi: "Gặp nhiều người hơn hoặc trốn vào môi trường mới. Ở một chỗ lâu là ngột ngạt.",
    loveKo: "처음엔 호기심, 알수록 진심. 표현은 자연스럽고 능숙해요.",
    loveVi: "Đầu tò mò, càng biết càng thật. Biểu hiện tự nhiên, khéo léo.",
    celebrityKo: "공유 · 이종석 · 고민시 스타일 (코스모폴리탄)",
    celebrityVi: "Phong cách Gong Yoo · Lee Jong-suk · Go Min-si (linh hoạt đa văn hoá)",
    accent: "linear-gradient(135deg, #f59e0b, #ea580c)",
  },
  IMGR: {
    id: "IMGR", hangul: "상궁", hanja: "尙宮", emoji: "🕯️", image: "/joseon/sanggung.png",
    roleVi: "Thượng cung (Quan nhất của cung nữ)",
    roleKo: "상궁 (尙宮)",
    taglineVi: "Quản gia thầm lặng giữ trật tự cho cả tổ chức",
    taglineKo: "조직을 묵묵히 굴리는 든든한 관리자",
    descVi:
      "Bạn là người 'không thấy thì không biết quan trọng'. Mọi thứ vận hành trơn tru là vì bạn lặng lẽ làm hết. Kỷ luật, đáng tin, và có một trí nhớ tuyệt vời.",
    descKo:
      "당신은 '없으면 표시 나는' 그런 사람. 모든 게 매끄럽게 돌아가는 건 당신이 묵묵히 챙기기 때문이에요. 규율 있고 신뢰감 있고 기억력 좋은 베테랑.",
    strengthsVi: ["Tỉ mỉ, chu đáo", "Quản lý giỏi", "Trí nhớ tốt", "Trung thành"],
    strengthsKo: ["꼼꼼함", "관리력", "기억력", "충성심"],
    watchOutVi: ["Hay 'gồng' — cho phép mình nghỉ", "Khó tha thứ lỗi nhỏ"],
    watchOutKo: ["너무 긴장하는 편 — 쉬세요", "작은 실수도 잘 못 넘김"],
    matchId: "OWGR", // 왕
    antiMatchId: "OMSU",
    rarity: 7.2,
    destinyKo: "당신이 없으면 모든 게 멈추는 사람",
    destinyVi: "Không có bạn, mọi thứ ngừng trôi",
    modernCareersKo: ["오피스 매니저", "회계사", "비서팀장"],
    modernCareersVi: ["Quản lý văn phòng", "Kế toán trưởng", "Trưởng phòng hành chính"],
    scenesKo: [
      "가족 단톡방의 일정 다 챙기는 사람이 바로 본인",
      "친구가 잊은 약속을 기억해서 다시 알려주는데, 그래도 가끔 서운함",
      "물건 자리 바뀌면 즉시 알아챔. 사람도 마찬가지",
    ],
    scenesVi: [
      "Chính bạn là người nhớ hết lịch trong group chat gia đình",
      "Nhắc bạn về cuộc hẹn họ quên — nhưng đôi khi vẫn tủi",
      "Đồ đạc đổi chỗ là biết ngay. Người cũng vậy",
    ],
    stressKo: "더 통제하려고 해요. 청소·정리·체크리스트로 마음을 다잡음. 가까운 사람한테는 까칠해질 수 있음.",
    stressVi: "Càng muốn kiểm soát. Dọn dẹp, sắp xếp, lập checklist. Người thân có thể bị nói thẳng hơn.",
    loveKo: "행동으로 사랑함. 챙겨주고 정리해줌. \"사랑해\" 말하기는 어려워해요.",
    loveVi: "Yêu bằng hành động. Chăm sóc và sắp xếp. Khó nói \"anh/em yêu\".",
    celebrityKo: "전도연 · 이영애 · 문근영 스타일 (절제된 단단함)",
    celebrityVi: "Phong cách Jeon Do-yeon · Lee Young-ae · Moon Geun-young (mềm mà cứng)",
    accent: "linear-gradient(135deg, #71717a, #475569)",
  },
  IMGU: {
    id: "IMGU", hangul: "백정", hanja: "白丁", emoji: "🪓",
    roleVi: "Bạch đinh (Người làm nghề mổ thịt)",
    roleKo: "백정 (白丁)",
    taglineVi: "Người làm những việc xã hội cần nhưng ngại nhìn — đôi tay khỏe, lòng tự hào im lặng",
    taglineKo: "사회가 필요로 하지만 외면하는 일을 묵묵히 해내는 강한 손",
    descVi:
      "Bạn là loại người 'không có thì xã hội ngừng quay'. Mọi người tránh né những việc nặng nề, bẩn thỉu — nhưng không có bạn, mọi người sẽ đói. Đôi tay khỏe, ít nói nhưng giữ lời, và một lòng tự hào im lặng mà người ngoài không thấy.",
    descKo:
      "당신은 '없으면 세상이 안 돌아가는' 류의 사람이에요. 모두가 무겁고 더러운 일을 피하지만, 당신이 없으면 다들 굶죠. 강한 손, 말 적지만 약속은 지키고, 남들이 못 보는 조용한 자긍심을 품고 살아가는 사람.",
    strengthsVi: ["Sức bền thân thể", "Tay nghề thật", "Trung thành", "Tự hào im lặng"],
    strengthsKo: ["체력과 끈기", "진짜 손기술", "충성심", "조용한 자긍심"],
    watchOutVi: ["Bị xã hội xem nhẹ — đừng để định nghĩa mình", "Ít chia sẻ cảm xúc thật"],
    watchOutKo: ["사회의 시선 — 그게 당신을 정의하지 못해요", "진짜 감정을 잘 안 드러냄"],
    matchId: "OMSR", // 보부상 (백정과 보부상은 둘 다 길에서 사는 사람)
    antiMatchId: "OWGR",
    rarity: 2.0,
    destinyKo: "당신의 손이 멈추면 세상이 굶습니다",
    destinyVi: "Khi tay bạn dừng, cả thế giới đói",
    modernCareersKo: ["정육 명장", "응급구조사", "재난 구호 전문가"],
    modernCareersVi: ["Chuyên gia thịt", "Nhân viên cấp cứu", "Cứu hộ thảm họa"],
    scenesKo: [
      "약속한 건 무조건 함. \"안 한다\"고 한 적이 한 번도 없음",
      "친구 이사하면 진짜 박스 들러 나타나는 사람",
      "본인 SNS는 비공개 또는 거의 안 함. 표현보다 살아내는 게 먼저",
    ],
    scenesVi: [
      "Đã hứa là làm. Chưa bao giờ nói \"không\"",
      "Bạn chuyển nhà — bạn thực sự đến khiêng thùng",
      "SNS riêng tư hoặc gần như không dùng. Sống quan trọng hơn nói",
    ],
    stressKo: "더 일에 몰두함. 운동·손 쓰는 일·술 한 잔으로 풀어요. 잘 말 안 함.",
    stressVi: "Càng vùi đầu vào việc. Thể thao, làm bằng tay, một ly rượu. Ít nói.",
    loveKo: "표현 안 함. 매일 옆에 있어줌. 어느 날 깨달으면 이미 깊이 사랑하는 중.",
    loveVi: "Không nói. Ngày nào cũng ở bên. Nhận ra thì đã yêu sâu rồi.",
    celebrityKo: "정우성 · 황정민 · 이성민 스타일 (조용한 강함)",
    celebrityVi: "Phong cách Jung Woo-sung · Hwang Jung-min · Lee Sung-min (mạnh thầm lặng)",
    accent: "linear-gradient(135deg, #d97706, #a16207)",
  },
  IMSR: {
    id: "IMSR", hangul: "암행어사", hanja: "暗行御史", emoji: "🕵️", image: "/joseon/amhaengeosa.png",
    roleVi: "Ám hành ngự sử (Mật sứ vua phái)",
    roleKo: "암행어사 (暗行御史)",
    taglineVi: "Người đi tìm sự thật trong bóng tối",
    taglineKo: "어둠 속에서 진실을 찾는 사람",
    descVi:
      "Bạn có một bản năng công lý mạnh và sự kiên nhẫn của thợ săn. Không thích ánh đèn, nhưng khi cần phải đối mặt với bất công — bạn sẽ không lùi bước. Cô đơn nhưng không bao giờ cô độc trong tinh thần.",
    descKo:
      "당신에겐 강한 정의감과 사냥꾼의 인내심이 있어요. 스포트라이트는 싫지만 불의를 봤을 때는 한 발도 물러서지 않습니다. 외롭지만 정신적으로 결코 고독하지 않은 사람.",
    strengthsVi: ["Chính trực", "Quan sát sắc", "Bền bỉ", "Tự kỷ luật cao"],
    strengthsKo: ["정직함", "예리한 관찰", "끈기", "자기 절제"],
    watchOutVi: ["Quá khắt khe với chính mình", "Khó để người khác đến gần"],
    watchOutKo: ["자신에게 너무 엄격함", "사람들이 다가오기 어려워함"],
    matchId: "OMGR", // 포도대장
    antiMatchId: "OWGU",
    rarity: 1.8,
    destinyKo: "어둠 속에서 가장 빛나는 사람",
    destinyVi: "Sáng rực nhất giữa bóng tối",
    modernCareersKo: ["검사", "감사관", "탐사 기자"],
    modernCareersVi: ["Công tố viên", "Kiểm toán viên", "Phóng viên điều tra"],
    scenesKo: [
      "부당한 일을 보면 속이 끓어요. 하루 종일 그 생각만",
      "사람을 한 번 믿으면 다 줌. 배신은 영원히 못 잊음",
      "혼자 영화 보고 혼자 식당 가는 거 자연스러움",
    ],
    scenesVi: [
      "Thấy bất công là máu sôi cả ngày, không thoát khỏi suy nghĩ đó",
      "Tin ai là cho hết. Phản bội thì nhớ mãi mãi",
      "Đi xem phim một mình, ăn một mình — tự nhiên",
    ],
    stressKo: "더 강박적으로 추적해요. 부당한 상황을 끝까지 봐야 마음 풀려요. 사람들과 더 멀어짐.",
    stressVi: "Càng truy đến cùng. Phải thấy chuyện bất công kết thúc mới yên. Càng xa người.",
    loveKo: "깊게 한 사람만. 표현은 적지만 행동은 절대적. 사랑하는 사람 위해 위험도 감수.",
    loveVi: "Yêu sâu một người. Ít nói nhưng hành động tuyệt đối. Dám đối mặt nguy hiểm vì người yêu.",
    celebrityKo: "송강호 · 이정재 · 하정우 스타일 (어둠의 정의)",
    celebrityVi: "Phong cách Song Kang-ho · Lee Jung-jae · Ha Jung-woo (chính nghĩa trong bóng tối)",
    accent: "linear-gradient(135deg, #334155, #27272a)",
  },
  IMSU: {
    id: "IMSU", hangul: "도공", hanja: "陶工", emoji: "🏺", image: "/joseon/dogong.png",
    roleVi: "Đào công (Thợ gốm)",
    roleKo: "도공 (陶工)",
    taglineVi: "Nghệ nhân thầm lặng tạo ra cái đẹp bền lâu",
    taglineKo: "오래 가는 아름다움을 만드는 장인",
    descVi:
      "Bạn yêu thích sự tỉ mỉ và sự im lặng của xưởng làm việc. Mỗi tác phẩm là một mảnh tâm hồn bạn — không cần lời, vẫn nói được nhiều. Thực tế, kiên nhẫn và có gu thẩm mỹ riêng.",
    descKo:
      "당신은 섬세함과 작업장의 고요함을 사랑해요. 만들어내는 작품 하나하나가 자기 영혼의 조각 — 말 없이도 많은 걸 전해요. 현실적이고 인내심 있고 자기만의 미감이 있는 사람.",
    strengthsVi: ["Kiên nhẫn nghệ nhân", "Gu thẩm mỹ", "Tự lập", "Tập trung sâu"],
    strengthsKo: ["장인의 인내심", "심미안", "독립적", "깊은 집중"],
    watchOutVi: ["Khó thương lượng giá", "Hay tự cô lập"],
    watchOutKo: ["흥정에 약해요", "스스로 고립되기 쉬움"],
    matchId: "OWSU", // 화공
    antiMatchId: "OMSR",
    rarity: 5.6,
    destinyKo: "당신의 손에서 시간이 멈추는 사람",
    destinyVi: "Thời gian dừng lại trong đôi tay bạn",
    modernCareersKo: ["도예가", "일러스트레이터", "목공예가"],
    modernCareersVi: ["Nghệ nhân gốm", "Hoạ sĩ minh hoạ", "Thợ mộc nghệ thuật"],
    scenesKo: [
      "작업이나 취미 하나에 빠지면 시간 가는 줄 모름",
      "본인 작업물에 까다로움. 90% 완성도면 시작도 안 함",
      "친구 모임 한 번 빠지면 며칠 더 안 가도 OK",
    ],
    scenesVi: [
      "Đắm chìm vào việc hoặc sở thích là quên thời gian",
      "Khắt khe với sản phẩm mình làm. Dưới 90% hoàn thiện không bắt đầu",
      "Bỏ một buổi gặp bạn — vài ngày sau cũng không sao",
    ],
    stressKo: "더 손에 몰두함. 만들고 또 만듦. 사람과 거의 단절. 결과물로 마음을 비워요.",
    stressVi: "Càng đắm vào việc làm bằng tay. Làm rồi làm. Gần như cắt người. Xả qua sản phẩm.",
    loveKo: "사랑하는 사람을 위해 직접 무언가를 만들어 줌. 말 대신 손으로.",
    loveVi: "Tự tay làm gì đó cho người mình yêu. Bằng tay thay vì lời.",
    celebrityKo: "박찬욱 · 차은우 · V(BTS) 스타일 (몰입형 장인)",
    celebrityVi: "Phong cách Park Chan-wook · Cha Eun-woo · V(BTS) (nghệ nhân chìm đắm)",
    accent: "linear-gradient(135deg, #78716c, #b45309)",
  },

  // === 外 (Extroverted) ===
  OWGR: {
    id: "OWGR", hangul: "왕", hanja: "王", emoji: "👑",
    roleVi: "Vương (Quân vương)",
    roleKo: "왕 (王)",
    taglineVi: "Người sinh ra để gánh vác cả thiên hạ",
    taglineKo: "천하를 짊어지도록 태어난 사람",
    descVi:
      "Bạn có sức ảnh hưởng tự nhiên mà người khác phải công nhận. Khi mọi người dao động, bạn vẫn giữ một tầm nhìn. Lãnh đạo với bạn không phải là khoe quyền lực — mà là biết khi nào lùi, khi nào quyết.",
    descKo:
      "당신에겐 누구도 부정할 수 없는 자연스러운 영향력이 있어요. 모두가 흔들릴 때 당신은 한 시야를 지키죠. 리더십은 권력을 과시하는 게 아니라 언제 물러나고 언제 결단할지 아는 것 — 이걸 본능적으로 압니다.",
    strengthsVi: ["Lãnh đạo bẩm sinh", "Tầm nhìn xa", "Trách nhiệm tối thượng", "Quyết đoán dưới áp lực"],
    strengthsKo: ["타고난 리더십", "원대한 비전", "최고의 책임감", "압박 속 결단"],
    watchOutVi: ["Cô đơn trên đỉnh cao", "Khó tin ai 100%"],
    watchOutKo: ["꼭대기는 외로워요", "누구도 완전히 믿기 어려움"],
    matchId: "IWGU", // 의녀
    antiMatchId: "IMGU",
    rarity: 1.5,
    destinyKo: "당신의 한 마디가 천하의 흐름을 바꿉니다",
    destinyVi: "Một lời của bạn đổi cả dòng chảy thiên hạ",
    modernCareersKo: ["대기업 회장", "정치 지도자", "재단 이사장"],
    modernCareersVi: ["Chủ tịch tập đoàn", "Lãnh đạo chính trị", "Chủ tịch quỹ"],
    scenesKo: [
      "모임에서 자연스럽게 중심이 됨. 본인도 모르게 모두가 의견을 물음",
      "책임이 무거워도 \"내가 할게\"가 자동으로 나옴",
      "사람들 앞에선 약한 모습 절대 안 보임. 혼자 있을 때만",
    ],
    scenesVi: [
      "Tự nhiên thành trung tâm các buổi gặp. Ai cũng hỏi ý kiến bạn",
      "Trách nhiệm nặng nhưng \"tôi làm\" bật ra tự động",
      "Trước mặt mọi người không bao giờ tỏ ra yếu — chỉ khi một mình",
    ],
    stressKo: "혼자 짊어지려고 해요. 약한 모습 안 보임. 결국 몸 또는 정신이 먼저 무너짐.",
    stressVi: "Tự gánh hết. Không cho ai thấy yếu. Cuối cùng cơ thể hoặc tinh thần sụp trước.",
    loveKo: "사랑하는 사람을 지키려는 본능이 강해요. 모든 걸 통제하려 해서 가끔 숨막힐 수 있음.",
    loveVi: "Bản năng bảo vệ người yêu rất mạnh. Muốn kiểm soát mọi thứ — đôi khi ngột ngạt.",
    celebrityKo: "현빈 · 송중기 · 김희애 스타일 (책임의 무게)",
    celebrityVi: "Phong cách Hyun Bin · Song Joong-ki · Kim Hee-ae (sức nặng trách nhiệm)",
    accent: "linear-gradient(135deg, #eab308, #d97706)",
  },
  OWGU: {
    id: "OWGU", hangul: "기방행수", hanja: "妓房行首", emoji: "🎭", image: "/joseon/gibanghaengsu.png",
    roleVi: "Kỹ phòng hành thủ (Trưởng nhà ca kỹ)",
    roleKo: "기방행수 (妓房行首)",
    taglineVi: "Người dẫn dắt thế giới giải trí với tài năng và mưu lược",
    taglineKo: "재능과 수완으로 사람을 다스리는 행수",
    descVi:
      "Bạn vừa tinh tế vừa thực tế. Đọc người chỉ trong vài giây, biết ai cần gì. Mạng lưới quan hệ của bạn rộng và sâu — quyền lực mềm là thế mạnh.",
    descKo:
      "섬세함과 현실 감각을 동시에 가진 사람. 사람을 몇 초 만에 파악하고, 누가 뭐가 필요한지 알아요. 인맥이 넓고 깊은 '소프트 파워' 마스터.",
    strengthsVi: ["EQ cao", "Mạng lưới", "Tinh tế", "Đa tài"],
    strengthsKo: ["높은 감정지능", "인맥", "섬세함", "다재다능"],
    watchOutVi: ["Đôi khi tính toán nhiều", "Khó tin ai 100%"],
    watchOutKo: ["때로 계산이 많음", "누구도 100% 못 믿음"],
    matchId: "OMSU", // 광대
    antiMatchId: "IMSR",
    rarity: 4.2,
    destinyKo: "한 번 보면 잊을 수 없는 사람",
    destinyVi: "Một lần gặp, không thể nào quên",
    modernCareersKo: ["호텔 총지배인", "이벤트 플래너", "인플루언서"],
    modernCareersVi: ["Tổng quản lý khách sạn", "Nhà tổ chức sự kiện", "Influencer"],
    scenesKo: [
      "처음 만난 사람도 30분이면 친구. 깊게 친해지는 사람은 적음",
      "SNS·인맥·이벤트 — 사람을 다루는 본능이 있음",
      "분위기를 읽어요. 누가 누구를 좋아하는지, 누가 화났는지 즉시 감지",
    ],
    scenesVi: [
      "Người mới gặp 30 phút là thành bạn. Nhưng thân sâu thì ít",
      "SNS, mối quan hệ, sự kiện — bản năng dắt người",
      "Đọc không khí. Ai thích ai, ai đang giận — cảm được ngay",
    ],
    stressKo: "더 많은 사람을 만나거나, 정반대로 갑자기 잠수. 양극단을 오갑니다.",
    stressVi: "Càng gặp nhiều người, hoặc ngược lại đột nhiên \"biến mất\". Hai cực.",
    loveKo: "매력 발산은 자연스럽지만 진심 보이는 데 시간 걸림. 누가 진짜인지 신중하게 골라요.",
    loveVi: "Quyến rũ tự nhiên nhưng cần thời gian để mở lòng. Chọn kỹ ai là thật.",
    celebrityKo: "화사 · 제니 · 정유미 스타일 (매혹의 카리스마)",
    celebrityVi: "Phong cách Hwasa · Jennie · Jung Yu-mi (carisma quyến rũ)",
    accent: "linear-gradient(135deg, #ec4899, #e11d48)",
  },
  OWSR: {
    id: "OWSR", hangul: "선비", hanja: "士", emoji: "📚", image: "/joseon/seonbi.png",
    roleVi: "Sĩ (Học giả Nho gia)",
    roleKo: "선비 (士)",
    taglineVi: "Học giả lý tưởng, dám nói thẳng dù trước quyền lực",
    taglineKo: "권력 앞에서도 곧은 학자",
    descVi:
      "Bạn sống bằng nguyên tắc. Khi thấy điều sai, bạn nói thẳng — kể cả với người có quyền. Khẳng khái và đam mê học vấn, bạn là kiểu người mà thời nào cũng cần.",
    descKo:
      "당신은 원칙으로 살아요. 잘못된 걸 보면 권력자 앞에서도 직언합니다. 강직하고 학문에 진심인 — 어느 시대에나 필요한 사람.",
    strengthsVi: ["Chính trực", "Tri thức sâu", "Đam mê", "Dũng cảm"],
    strengthsKo: ["곧은 성품", "깊은 지식", "열정", "용기"],
    watchOutVi: ["Cứng nhắc — cần linh hoạt hơn", "Cô đơn vì 'lý tưởng quá'"],
    watchOutKo: ["고집스러움 — 유연성 필요", "이상이 너무 높아 외로움"],
    matchId: "OMSR", // 보부상
    antiMatchId: "OWGU",
    rarity: 10.6,
    destinyKo: "꺾이지 않는 자만이 시대를 바꿉니다",
    destinyVi: "Chỉ kẻ không cúi đầu mới thay đổi thời đại",
    modernCareersKo: ["대학교수", "변호사", "작가"],
    modernCareersVi: ["Giáo sư đại học", "Luật sư", "Nhà văn"],
    scenesKo: [
      "친구 잘못은 즉시 지적. 미움 받아도 어쩔 수 없다 생각",
      "책·신문·뉴스 — 항상 뭔가 읽고 있음",
      "잘 모르는 분야엔 \"잘 모릅니다\" 하고 입을 닫음. 거짓말 못함",
    ],
    scenesVi: [
      "Bạn sai là chỉ ra ngay. Bị ghét cũng đành chịu",
      "Sách, báo, tin tức — luôn đang đọc gì đó",
      "Không biết là \"tôi không biết\" rồi im. Không bịa được",
    ],
    stressKo: "더 책에 빠지거나 더 강하게 의견을 내요. 융통성이 더 떨어집니다.",
    stressVi: "Càng vùi vào sách hoặc càng nói thẳng. Càng cứng nhắc hơn.",
    loveKo: "표현은 서툴지만 한 번 사랑하면 평생. 거짓말이나 흔들림 없어요.",
    loveVi: "Biểu hiện vụng nhưng yêu là cả đời. Không lừa, không lay.",
    celebrityKo: "박보검 · 유아인 · 이병헌 스타일 (곧은 신념)",
    celebrityVi: "Phong cách Park Bo-gum · Yoo Ah-in · Lee Byung-hun (niềm tin thẳng)",
    accent: "linear-gradient(135deg, #2563eb, #4338ca)",
  },
  OWSU: {
    id: "OWSU", hangul: "화공", hanja: "畵工", emoji: "🎨", image: "/joseon/hwagong.png",
    roleVi: "Hoạ công (Họa sĩ cung đình)",
    roleKo: "화공 (畵工)",
    taglineVi: "Nghệ sĩ tài hoa, sống bằng cái đẹp và sự công nhận",
    taglineKo: "재능과 인정으로 사는 예술가",
    descVi:
      "Bạn nhìn thế giới bằng đôi mắt khác. Cái đẹp với bạn là một ngôn ngữ. Có cái tôi nghệ sĩ và biết cách bán tài năng — không xấu hổ vì tiền.",
    descKo:
      "당신은 세상을 다르게 봐요. 아름다움이 곧 당신의 언어. 예술가의 자아가 있지만 동시에 재능을 잘 팔 줄 알아요 — 돈에 부끄러워하지 않습니다.",
    strengthsVi: ["Sáng tạo", "Nhạy cảm với cái đẹp", "Tự tin", "Biết PR bản thân"],
    strengthsKo: ["창의력", "심미안", "자신감", "자기 PR"],
    watchOutVi: ["Cảm xúc thất thường", "Quá nhạy với chê bai"],
    watchOutKo: ["감정 기복", "비판에 예민"],
    matchId: "IWSR", // 풍수사
    antiMatchId: "OMGR",
    rarity: 3.5,
    destinyKo: "당신이 그리는 모든 것이 곧 당신이 됩니다",
    destinyVi: "Tất cả những gì bạn vẽ trở thành chính bạn",
    modernCareersKo: ["일러스트레이터", "그래픽 디자이너", "영상 감독"],
    modernCareersVi: ["Hoạ sĩ minh hoạ", "Graphic designer", "Đạo diễn hình ảnh"],
    scenesKo: [
      "혼자 카페에서 한 곡을 30분 동안 들음",
      "사진 폴더에 같은 풍경 50장. 한 장만 골랐어야 함",
      "비 오는 날 굳이 우산 안 쓰고 걷고 싶어함",
    ],
    scenesVi: [
      "Một mình quán café nghe một bài 30 phút",
      "Folder ảnh có 50 tấm cùng cảnh — đáng lẽ chọn một",
      "Trời mưa cố tình không cầm ô để đi bộ",
    ],
    stressKo: "혼자 잠수. 며칠 연락 안 됨. 그리고 갑자기 새 작품 들고 나타남.",
    stressVi: "Mất tích. Không liên lạc vài ngày. Rồi bất ngờ xuất hiện với tác phẩm mới.",
    loveKo: "사랑은 시처럼. 사랑하는 사람의 옆모습을 몰래 스케치하는 타입.",
    loveVi: "Yêu như thơ. Lén ký hoạ phía nghiêng người yêu.",
    celebrityKo: "아이유 · 박재범 · 태양 스타일 (몽환적 창작자)",
    celebrityVi: "Phong cách IU · Jay Park · Taeyang (nghệ sĩ mơ màng)",
    accent: "linear-gradient(135deg, #d946ef, #9333ea)",
  },
  OMGR: {
    id: "OMGR", hangul: "포도대장", hanja: "捕盜大將", emoji: "🛡️", image: "/joseon/podaejang.png",
    roleVi: "Bồ đào đại tướng (Tổng quản cảnh sát)",
    roleKo: "포도대장 (捕盜大將)",
    taglineVi: "Người bảo vệ trật tự với sức mạnh và chính nghĩa",
    taglineKo: "힘과 정의로 질서를 지키는 사람",
    descVi:
      "Bạn không sợ đối đầu. Có khả năng dẫn dắt đội nhóm trong lúc căng thẳng nhất. Trung thành với nguyên tắc và rất bảo vệ những ai dưới quyền mình.",
    descKo:
      "당신은 정면 충돌을 두려워하지 않아요. 가장 긴박한 순간에 팀을 이끄는 능력이 있고, 원칙에 충실하며 아래 사람을 끝까지 지킵니다.",
    strengthsVi: ["Lãnh đạo dưới áp lực", "Chính nghĩa", "Bảo vệ đồng đội", "Quyết đoán"],
    strengthsKo: ["압박 속 리더십", "정의감", "동료 보호", "결단력"],
    watchOutVi: ["Có thể nóng tính", "Khó tin sự tinh tế"],
    watchOutKo: ["성격이 급할 수 있음", "섬세함을 잘 못 알아봄"],
    matchId: "IMSR", // 암행어사
    antiMatchId: "OWSU",
    rarity: 2.7,
    destinyKo: "당신이 지키는 한 누구도 다치지 않습니다",
    destinyVi: "Khi bạn canh giữ, không ai bị tổn thương",
    modernCareersKo: ["경찰 간부", "보안 팀장", "군 장교"],
    modernCareersVi: ["Sĩ quan cảnh sát", "Trưởng phòng an ninh", "Sĩ quan quân đội"],
    scenesKo: [
      "친구가 위협 받으면 본능적으로 앞에 서요",
      "운동 매일 함. 자기 관리 강박",
      "화 안 내려고 했는데 정의감 발동하면 멈출 수 없음",
    ],
    scenesVi: [
      "Bạn bị đe doạ — theo bản năng bạn đứng trước",
      "Tập thể thao hằng ngày. Tự quản khắt khe",
      "Cố không nổi nóng nhưng máu chính nghĩa lên là không dừng",
    ],
    stressKo: "운동량 두 배. 헬스장·복싱·달리기로 풀어요. 말은 더 줄고 행동은 더 강해집니다.",
    stressVi: "Tập thể thao gấp đôi. Gym, boxing, chạy. Càng ít nói, càng hành động mạnh.",
    loveKo: "표현은 직접적이고 단순. \"내 사람\" 컨셉. 사랑하는 사람을 위해 모든 걸 함.",
    loveVi: "Biểu hiện thẳng và đơn giản. \"Người của tôi\". Làm mọi thứ vì người yêu.",
    celebrityKo: "마동석 · 정해인 · 박서준 스타일 (든든한 수호자)",
    celebrityVi: "Phong cách Ma Dong-seok · Jung Hae-in · Park Seo-jun (vệ sĩ vững chãi)",
    accent: "linear-gradient(135deg, #dc2626, #be123c)",
  },
  OMGU: {
    id: "OMGU", hangul: "무관", hanja: "武官", emoji: "⚔️", image: "/joseon/mugwan.png",
    roleVi: "Võ quan (Sĩ quan quân đội)",
    roleKo: "무관 (武官)",
    taglineVi: "Chiến binh trung thành, hành động trước nói sau",
    taglineKo: "충직한 무인 — 말보다 행동이 먼저",
    descVi:
      "Bạn là người thực dụng nhất trong số những người chính trực. Trung thành tuyệt đối với người mình tin, và sẵn sàng đi đầu khi cần. Đơn giản nhưng mạnh mẽ.",
    descKo:
      "곧은 사람들 중 가장 실용적인 사람. 한 번 믿은 사람에게는 절대 충직하고, 필요할 땐 가장 먼저 나섭니다. 단순하지만 강한 사람.",
    strengthsVi: ["Trung thành", "Dũng cảm", "Thực tế", "Quyết đoán"],
    strengthsKo: ["충성심", "용기", "현실 감각", "결단"],
    watchOutVi: ["Khó diễn đạt cảm xúc", "Đôi khi quá thẳng"],
    watchOutKo: ["감정 표현 어려움", "때로 너무 직설"],
    matchId: "IWGR", // 중전
    antiMatchId: "IWSR",
    rarity: 8.8,
    destinyKo: "약속한 것은 반드시 지키는 사람",
    destinyVi: "Đã hứa thì giữ trọn",
    modernCareersKo: ["군인", "운동선수", "소방관"],
    modernCareersVi: ["Quân nhân", "Vận động viên", "Lính cứu hoả"],
    scenesKo: [
      "약속한 시간 절대 안 늦음. 5분 일찍 도착 default",
      "친구가 \"도와줘\" 하면 묻지도 따지지도 않고 등판",
      "본인 감정은 표현 잘 못함. 행동으로 다 말함",
    ],
    scenesVi: [
      "Hẹn là không bao giờ trễ. Đến sớm 5 phút mặc định",
      "Bạn nói \"giúp tớ\" — không hỏi gì, có mặt ngay",
      "Cảm xúc bản thân khó nói. Hành động nói thay",
    ],
    stressKo: "운동·잠·맥주 한 잔. 말 적어지고 행동만. 자기 사람 곁엔 무조건 있음.",
    stressVi: "Thể thao, ngủ, một ly bia. Ít nói, chỉ hành động. Người của mình thì luôn ở bên.",
    loveKo: "일관됨. 한결같음. 화려한 이벤트는 없지만 매일 옆에 있음. 안정 그 자체.",
    loveVi: "Một chiều, kiên định. Không event lộng lẫy nhưng ngày nào cũng ở bên. Bình yên thuần khiết.",
    celebrityKo: "이민호 · 임시완 · 소지섭 스타일 (충직한 무인)",
    celebrityVi: "Phong cách Lee Min-ho · Im Si-wan · So Ji-sub (chiến binh trung thành)",
    accent: "linear-gradient(135deg, #ea580c, #b91c1c)",
  },
  OMSR: {
    id: "OMSR", hangul: "보부상", hanja: "褓負商", emoji: "🎒", image: "/joseon/bobusang.png",
    roleVi: "Bồ phụ thương (Thương nhân lưu động)",
    roleKo: "보부상 (褓負商)",
    taglineVi: "Người tự do đi mọi nẻo đường, trung thành với cộng đồng",
    taglineKo: "어디든 가는 자유로운 영혼 — 동료에게는 충직",
    descVi:
      "Bạn không thể bị nhốt trong văn phòng. Đôi chân không nghỉ, đôi mắt luôn tìm cơ hội. Tự lập và linh hoạt, nhưng với 'người trong hội' thì cực kỳ trung thành.",
    descKo:
      "사무실에 갇혀 있을 수 없는 사람. 발걸음이 빠르고 눈은 늘 기회를 찾고 있어요. 독립적이고 유연하지만, '내 사람'에게는 한없이 충직합니다.",
    strengthsVi: ["Tự lập", "Linh hoạt", "Bền bỉ", "Mạng lưới mạnh"],
    strengthsKo: ["독립적", "유연성", "끈기", "강한 인맥"],
    watchOutVi: ["Khó ngồi yên", "Hay đánh đổi sức khỏe vì việc"],
    watchOutKo: ["가만히 있기 어려움", "건강을 일과 바꾸는 경향"],
    matchId: "OWSR", // 선비
    antiMatchId: "IMSU",
    rarity: 12.4,
    destinyKo: "당신의 발이 닿는 곳이 곧 길이 됩니다",
    destinyVi: "Nơi nào bạn đặt chân, nơi đó mở đường",
    modernCareersKo: ["영업 매니저", "무역업자", "자영업자"],
    modernCareersVi: ["Quản lý sales", "Thương mại quốc tế", "Chủ doanh nghiệp tự do"],
    scenesKo: [
      "새 도시 가면 그날 안에 동선 다 파악. 길눈이 천재 수준",
      "인맥이 분야별로 골고루. 누구한테 부탁해야 할지 본능",
      "한 곳에 6개월 이상 있으면 답답해요",
    ],
    scenesVi: [
      "Đến thành phố mới — trong ngày là rành đường. Cảm giác phương hướng thiên tài",
      "Mối quan hệ trải đều khắp lĩnh vực. Biết nên nhờ ai",
      "Ở một chỗ quá 6 tháng là ngột ngạt",
    ],
    stressKo: "새 장소로 떠나거나 새 사람을 만남. 가만히 있으면 더 힘들어해요.",
    stressVi: "Đi nơi mới hoặc gặp người mới. Đứng yên thì càng khó chịu.",
    loveKo: "만나는 사람마다 진심. 다만 한 곳에 오래 묶이는 건 어려워해요. 자유 보장이 사랑의 조건.",
    loveVi: "Mỗi người gặp đều thật lòng. Nhưng khó bị buộc một chỗ lâu. Tự do là điều kiện yêu.",
    celebrityKo: "차태현 · 이서진 · 박해진 스타일 (떠도는 마음)",
    celebrityVi: "Phong cách Cha Tae-hyun · Lee Seo-jin · Park Hae-jin (trái tim phiêu lưu)",
    accent: "linear-gradient(135deg, #f59e0b, #ca8a04)",
  },
  OMSU: {
    id: "OMSU", hangul: "광대", hanja: "廣大", emoji: "🎪", image: "/joseon/gwangdae.png",
    roleVi: "Quảng đại (Nghệ sĩ biểu diễn)",
    roleKo: "광대 (廣大)",
    taglineVi: "Người làm thế giới quên đi nỗi buồn — bằng tài năng và nụ cười",
    taglineKo: "재능과 웃음으로 세상의 시름을 잊게 하는 사람",
    descVi:
      "Bạn sinh ra cho sân khấu. Có khả năng đọc đám đông và biết chính xác lúc nào nên cười, lúc nào nên im. Sống bằng tài năng và không sợ rủi ro — bạn đã quen với việc 'tự nuôi mình'.",
    descKo:
      "당신은 무대를 위해 태어난 사람. 관객을 읽고 언제 웃기고 언제 침묵해야 할지 정확히 알아요. 재능으로 살고 위험을 두려워하지 않는 — '스스로 먹고사는' 데 익숙한 사람.",
    strengthsVi: ["Tài biểu diễn", "Cảm nhận khán giả", "Tự do", "Không sợ thay đổi"],
    strengthsKo: ["공연 재능", "관객을 읽는 능력", "자유로움", "변화에 강함"],
    watchOutVi: ["Mệt vì luôn phải 'làm vui'", "Tâm trạng thất thường"],
    watchOutKo: ["계속 즐겁게 해야 한다는 피로감", "감정 기복"],
    matchId: "OWGU", // 기방행수
    antiMatchId: "IWGR",
    rarity: 4.4,
    destinyKo: "당신이 있는 곳이 곧 축제가 됩니다",
    destinyVi: "Nơi nào có bạn, nơi đó là lễ hội",
    modernCareersKo: ["배우", "스탠드업 코미디언", "유튜버"],
    modernCareersVi: ["Diễn viên", "Stand-up comedy", "YouTuber"],
    scenesKo: [
      "사람들이 우울하면 본인도 우울. 분위기 띄우는 책임을 자기가 매김",
      "즐거워 보이지만 혼자 있을 때 갑자기 텅 빔",
      "SNS 화려, 실생활도 화려. 하지만 진짜 친구 5명 외엔 다 가면",
    ],
    scenesVi: [
      "Mọi người buồn — bạn cũng buồn. Tự gánh trách nhiệm khuấy động",
      "Trông vui mà một mình thì đột nhiên trống rỗng",
      "SNS rực rỡ, đời thường cũng rực rỡ. Nhưng ngoài 5 bạn thật, đều là mặt nạ",
    ],
    stressKo: "더 즐겁게 꾸미려고 해요. 가장 웃을 때가 가장 힘들 때. 혼자 있는 시간이 절대적으로 필요.",
    stressVi: "Càng cố vui vẻ. Cười nhiều nhất = mệt nhất. Cần thời gian một mình tuyệt đối.",
    loveKo: "사랑할 때 가장 본인다워요. 표현은 화려하지만 결국 한 사람만 깊게 사랑.",
    loveVi: "Yêu là lúc bạn thật nhất. Biểu hiện hoành tráng nhưng cuối cùng yêu sâu một người.",
    celebrityKo: "J-Hope(BTS) · 박나래 · 유재석 스타일 (빛의 광대)",
    celebrityVi: "Phong cách J-Hope(BTS) · Park Na-rae · Yoo Jae-suk (ánh sáng vũ đài)",
    accent: "linear-gradient(135deg, #a855f7, #c026d3)",
  },
};

export function calculateCharacter(answers: Record<string, Letter>): CharacterId {
  let io = 0; // - is I, + is O
  let wm = 0; // - is W, + is M
  let gs = 0; // - is G, + is S
  let ru = 0; // - is R, + is U
  for (const q of QUESTIONS) {
    const a = answers[q.id];
    if (!a) continue;
    if (q.axis === "IO") io += a === "I" ? -1 : 1;
    else if (q.axis === "WM") wm += a === "W" ? -1 : 1;
    else if (q.axis === "GS") gs += a === "G" ? -1 : 1;
    else if (q.axis === "RU") ru += a === "R" ? -1 : 1;
  }
  const id = (
    (io <= 0 ? "I" : "O") +
    (wm <= 0 ? "W" : "M") +
    (gs <= 0 ? "G" : "S") +
    (ru <= 0 ? "R" : "U")
  ) as CharacterId;
  return id;
}

export function getCharacter(id: CharacterId): Character {
  return CHARACTERS[id];
}

export function shortVi(c: Character): string { return c.roleVi; }
export function shortKo(c: Character): string { return c.roleKo; }

export type ShortText = {
  roleVi: string;
  roleKo: string;
};

export function characterShortLabel(id: CharacterId, locale: Locale): string {
  const c = CHARACTERS[id];
  return locale === "ko" ? c.roleKo : c.roleVi;
}

// Seoul tourist hill spots — practical guide for Vietnamese visitors who
// expect flat Hanoi/HCMC streets and don't know Seoul's terrain is steep.
//
// Difficulty scale: 1 (easy stroll) ~ 5 (real hike — bring water)

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type HillSpot = {
  id: string;
  emoji: string;
  difficulty: Difficulty;
  walkingMinutes: number; // from nearest subway to main attraction
  elevationMeters: number; // approximate elevation gain
  nameKo: string;
  nameVi: string;
  // 1-line hook
  shortKo: string;
  shortVi: string;
  // Why tourists go there (2-3 sentences)
  descKo: string;
  descVi: string;
  // Best subway station + exit (the one with LEAST climbing)
  subwayKo: string;
  subwayVi: string;
  // Practical tips (3-4 items)
  tipsKo: string[];
  tipsVi: string[];
  // Alternative for those who can't walk uphill (taxi, cable car, elevator, bus)
  alternativeKo: string;
  alternativeVi: string;
};

export const HILLS: HillSpot[] = [
  {
    id: "bukchon",
    emoji: "🏘️",
    difficulty: 3,
    walkingMinutes: 15,
    elevationMeters: 50,
    nameKo: "북촌한옥마을",
    nameVi: "Làng Hanok Bukchon",
    shortKo: "조선시대 한옥 골목 — 가장 유명한 언덕 관광지",
    shortVi: "Làng hanok thời Joseon — điểm đồi nổi tiếng nhất",
    descKo:
      "경복궁과 창덕궁 사이 언덕에 자리한 600년 된 한옥 마을. 좁은 골목길이 위로 갈수록 가파르고, 가회동 11번길(북촌 8경) 부근이 가장 가팔라요. 비 오는 날엔 매우 미끄럽습니다.",
    descVi:
      "Làng hanok 600 năm tuổi nằm trên đồi giữa cung Gyeongbokgung và Changdeokgung. Các con hẻm hẹp càng lên càng dốc, đặc biệt khu Gahoe-dong 11-gil (Bukchon View 8) là dốc nhất. Trơn trượt khi mưa.",
    subwayKo: "3호선 안국역 2번 출구 (덜 가파른 진입)",
    subwayVi: "Tuyến 3, ga Anguk, lối ra 2 (đường lên ít dốc nhất)",
    tipsKo: [
      "운동화 필수 — 구두·샌들 절대 금물",
      "오르막 → 내리막 방향으로 걷기 (정상까지 택시 → 걸어 내려옴)",
      "여름엔 오전 10시 전 또는 일몰 후 (관광객·더위 피해)",
      "주민이 사는 곳 — 조용히, 사진 찍을 때 매너 지키기",
    ],
    tipsVi: [
      "Giày thể thao bắt buộc — KHÔNG mang giày cao gót, sandal",
      "Lên dốc đầu → đi xuống sau (taxi lên đỉnh → đi bộ xuống)",
      "Mùa hè: trước 10h sáng hoặc sau hoàng hôn (tránh đông + nóng)",
      "Đây là khu dân cư — đi nhẹ nói khẽ, lịch sự khi chụp ảnh",
    ],
    alternativeKo: "택시로 가회동 정상까지 약 ₩4,000-6,000 (안국역에서 5분)",
    alternativeVi: "Taxi từ ga Anguk lên đỉnh Gahoe-dong khoảng 4,000-6,000 won (5 phút)",
  },
  {
    id: "namsan",
    emoji: "🗼",
    difficulty: 3,
    walkingMinutes: 30,
    elevationMeters: 243,
    nameKo: "남산서울타워",
    nameVi: "Tháp N Seoul (Namsan)",
    shortKo: "서울 야경 1번지 — 케이블카로 우회 가능",
    shortVi: "Số 1 ngắm đêm Seoul — có thể đi cáp treo bỏ qua dốc",
    descKo:
      "해발 243m 남산 정상의 N타워. 명동에서 정상까지 걸어 올라가는 것도 가능하지만 매우 가파릅니다(30-40분). 대부분 케이블카 또는 순환버스를 이용해요.",
    descVi:
      "Tháp N trên đỉnh núi Namsan cao 243m. Có thể đi bộ từ Myeongdong lên (30-40 phút) nhưng rất dốc. Hầu hết du khách dùng cáp treo hoặc bus vòng quanh.",
    subwayKo: "4호선 명동역 3번 출구 → 케이블카까지 도보 10분",
    subwayVi: "Tuyến 4, ga Myeongdong, lối ra 3 → đi bộ 10 phút đến cáp treo",
    tipsKo: [
      "케이블카 왕복권 ₩14,000 (가장 편한 방법)",
      "남산순환버스 02·03·05번 — 한 번에 정상까지",
      "야경은 일몰 30분 전부터 줄 서기 시작",
      "정상에서 잠금장치(러브락) 사진 — 인기 포토 스팟",
    ],
    tipsVi: [
      "Vé cáp treo khứ hồi 14,000 won (cách dễ nhất)",
      "Bus vòng quanh Namsan số 02·03·05 — một mạch lên đỉnh",
      "Cảnh đêm: xếp hàng từ 30 phút trước hoàng hôn",
      "Chụp ảnh ổ khóa tình yêu (Love Lock) trên đỉnh — spot nổi tiếng",
    ],
    alternativeKo: "케이블카 (₩14,000 왕복) · 순환버스 (₩1,500) · 택시 정상까지 ₩8,000",
    alternativeVi: "Cáp treo (14,000 won khứ hồi) · Bus vòng (1,500 won) · Taxi lên đỉnh 8,000 won",
  },
  {
    id: "naksan",
    emoji: "🎨",
    difficulty: 4,
    walkingMinutes: 25,
    elevationMeters: 125,
    nameKo: "낙산공원·이화벽화마을",
    nameVi: "Công viên Naksan & Làng Bích họa Ihwa",
    shortKo: "벽화로 유명한 달동네 — 계단이 매우 많음",
    shortVi: "Làng vẽ tường trên đồi — RẤT nhiều bậc thang",
    descKo:
      "동대문 옆 낙산(해발 125m)에 자리한 마을. 벽화·계단·전망으로 유명하지만 길이 좁고 가파르며 계단이 끝없이 이어집니다. SNS 인증샷의 대가는 다리 통증.",
    descVi:
      "Làng nằm trên núi Naksan (cao 125m) cạnh Dongdaemun. Nổi tiếng với tranh tường, bậc thang, view đẹp — nhưng đường hẹp, dốc và bậc thang vô tận. Cái giá của ảnh sống ảo là đau chân.",
    subwayKo: "4호선 혜화역 2번 출구 → 도보 10분 (덜 가파른 쪽)",
    subwayVi: "Tuyến 4, ga Hyehwa, lối ra 2 → đi bộ 10 phút (đường ít dốc)",
    tipsKo: [
      "혜화역에서 올라가고, 동대문역으로 내려와요 (반대로 가면 지옥)",
      "물 한 병 꼭 챙기기 — 가게 거의 없음",
      "주민 사는 곳 — 큰 소리·플래시 자제",
      "정상 낙산공원에서 한양도성 산책 가능",
    ],
    tipsVi: [
      "Đi lên từ ga Hyehwa, xuống về ga Dongdaemun (ngược lại sẽ địa ngục)",
      "Mang chai nước — gần như không có cửa hàng",
      "Đây là khu dân cư — tránh ồn ào, không bật flash",
      "Đỉnh Naksan có thể đi tiếp theo tường thành Hanyangdoseong",
    ],
    alternativeKo: "택시로 낙산공원 정상까지 ₩5,000 (혜화역에서 5분)",
    alternativeVi: "Taxi lên đỉnh công viên Naksan 5,000 won (5 phút từ ga Hyehwa)",
  },
  {
    id: "samcheong",
    emoji: "🌳",
    difficulty: 3,
    walkingMinutes: 20,
    elevationMeters: 70,
    nameKo: "삼청동길",
    nameVi: "Phố Samcheong-dong",
    shortKo: "경복궁 옆 카페·갤러리 거리 — 완만하지만 긴 오르막",
    shortVi: "Phố café & gallery cạnh Gyeongbokgung — dốc thoải nhưng dài",
    descKo:
      "경복궁 동쪽 담을 따라 위로 이어지는 카페·갤러리 거리. 가파르지 않지만 1km 이상 오르막이라 다리가 피곤해요. 골목길로 들어가면 더 가팔라집니다.",
    descVi:
      "Phố café và gallery chạy lên dọc theo bức tường phía Đông cung Gyeongbokgung. Không dốc đứng nhưng dài hơn 1km lên dốc nên mỏi chân. Vào các hẻm nhỏ sẽ dốc hơn.",
    subwayKo: "3호선 안국역 1번 출구 → 도보 5분",
    subwayVi: "Tuyến 3, ga Anguk, lối ra 1 → đi bộ 5 phút",
    tipsKo: [
      "북촌과 함께 묶어 코스: 안국역 → 삼청동 → 북촌 → 안국역",
      "카페가 많아 중간중간 쉬기 좋음",
      "정독도서관 입구 부근부터 본격 오르막",
      "주말 인파 → 평일이 훨씬 쾌적",
    ],
    tipsVi: [
      "Kết hợp với Bukchon: Anguk → Samcheong → Bukchon → Anguk",
      "Nhiều café để nghỉ giữa đường",
      "Bắt đầu dốc thực sự từ thư viện Jeongdok",
      "Cuối tuần đông — ngày thường thoáng hơn nhiều",
    ],
    alternativeKo: "택시로 삼청동 끝(국무총리공관)까지 ₩4,500",
    alternativeVi: "Taxi đến cuối Samcheong (gần phủ Thủ tướng) 4,500 won",
  },
  {
    id: "buamdong",
    emoji: "☕",
    difficulty: 3,
    walkingMinutes: 30,
    elevationMeters: 110,
    nameKo: "부암동 카페거리",
    nameVi: "Phố café Buam-dong",
    shortKo: "북악산 자락의 조용한 카페 동네 — 지하철 없어 버스 또는 택시",
    shortVi: "Khu café yên tĩnh dưới chân núi Bugaksan — không có metro",
    descKo:
      "북악스카이웨이 입구 쪽 동네. 한국인이 좋아하는 숨은 핫플로, 큰 창문 카페와 백사실계곡으로 유명해요. 지하철역에서 멀어 버스 또는 택시 필수.",
    descVi:
      "Khu vực gần lối vào Bukak Skyway. Spot hot ẩn của người Hàn — café cửa sổ lớn và suối Baeksasil. Xa ga metro nên cần đi bus hoặc taxi.",
    subwayKo: "3호선 경복궁역 3번 출구 → 1020·7022번 버스 (15분)",
    subwayVi: "Tuyến 3, ga Gyeongbokgung, lối ra 3 → bus 1020 hoặc 7022 (15 phút)",
    tipsKo: [
      "지하철역에서 도보로 가지 마세요 — 너무 멀고 가파름",
      "버스 정류장 '자하문 고개·윤동주문학관' 하차",
      "백사실계곡 산책 시 운동화 필수",
      "토·일은 카페가 매우 붐빔, 평일 추천",
    ],
    tipsVi: [
      "ĐỪNG đi bộ từ metro — quá xa và quá dốc",
      "Xuống trạm bus 'Jahamun Pass · Yun Dong-ju Museum'",
      "Đi suối Baeksasil cần giày thể thao",
      "Cuối tuần café rất đông — nên đi ngày thường",
    ],
    alternativeKo: "택시로 경복궁역에서 부암동까지 ₩6,000-8,000",
    alternativeVi: "Taxi từ ga Gyeongbokgung đến Buam-dong 6,000-8,000 won",
  },
  {
    id: "haebangchon",
    emoji: "🌃",
    difficulty: 4,
    walkingMinutes: 25,
    elevationMeters: 90,
    nameKo: "해방촌·이태원 언덕",
    nameVi: "Đồi Haebangchon & Itaewon",
    shortKo: "외국인 거주지·트렌디한 골목 — 매우 가파른 언덕",
    shortVi: "Khu người nước ngoài & hẻm trendy — đồi RẤT dốc",
    descKo:
      "남산 남쪽 자락의 작은 동네. 신흥시장 골목으로 유명하지만 길이 1:7 경사도 수준으로 가파릅니다. 자전거·킥보드 절대 금지 구간.",
    descVi:
      "Khu nhỏ ở chân Nam Namsan. Nổi tiếng với hẻm Sinheung Market nhưng dốc đến mức tỷ lệ 1:7. KHÔNG nên dùng xe đạp hay e-scooter.",
    subwayKo: "6호선 녹사평역 2번 출구 → 도보 5분 (해방촌 입구)",
    subwayVi: "Tuyến 6, ga Noksapyeong, lối ra 2 → đi bộ 5 phút (cổng vào)",
    tipsKo: [
      "내려갈 때 더 위험 — 발 미끄러지면 멈추기 어려움",
      "비 또는 눈 오는 날 절대 피하세요",
      "전망 좋은 곳: '하늘 계단' (Sky Stairs)",
      "스카프·모자 — 바람이 강해요",
    ],
    tipsVi: [
      "Đi xuống NGUY HIỂM hơn đi lên — trượt chân khó dừng",
      "TUYỆT ĐỐI tránh khi trời mưa hay tuyết",
      "View đẹp nhất: 'Sky Stairs' (Cầu thang trời)",
      "Mang khăn + mũ — gió mạnh",
    ],
    alternativeKo: "택시로 정상까지 ₩4,000 (녹사평역 → 해방촌 정상)",
    alternativeVi: "Taxi lên đỉnh 4,000 won (ga Noksapyeong → đỉnh Haebangchon)",
  },
  {
    id: "gyeongnidan",
    emoji: "🍽️",
    difficulty: 3,
    walkingMinutes: 20,
    elevationMeters: 70,
    nameKo: "경리단길",
    nameVi: "Phố Gyeongnidan-gil",
    shortKo: "맛집·바 거리 — 단일 경사로 1km 직진",
    shortVi: "Phố nhà hàng & quán bar — dốc thẳng 1km",
    descKo:
      "이태원 옆 식당가. 한때 핫했지만 임대료로 많이 빠진 곳, 그래도 분위기는 살아있어요. 입구부터 정상까지 한 방향으로 계속 오르막이라 다리에 점점 무리.",
    descVi:
      "Phố nhà hàng cạnh Itaewon. Đã hạ nhiệt vì giá thuê cao nhưng không khí vẫn còn. Lên dốc thẳng một chiều từ đầu đến cuối, chân càng đi càng nặng.",
    subwayKo: "6호선 녹사평역 2번 출구 → 도보 8분",
    subwayVi: "Tuyến 6, ga Noksapyeong, lối ra 2 → đi bộ 8 phút",
    tipsKo: [
      "맛집 검색 → 정상부터 거꾸로 내려오기 (택시 → 식사 → 도보 하산)",
      "골목 안 식당이 더 매력적, 평지에 있는 곳도 많음",
      "저녁에 가는 게 좋음 — 낮은 더위 + 가파름 더블 펀치",
    ],
    tipsVi: [
      "Tìm nhà hàng → đi taxi lên đỉnh rồi đi xuống (taxi → ăn → xuống đi bộ)",
      "Nhà hàng trong hẻm hấp dẫn hơn, nhiều cái nằm ở chỗ phẳng",
      "Đi buổi tối tốt hơn — ban ngày nóng + dốc = đòn kép",
    ],
    alternativeKo: "택시로 경리단길 정상까지 ₩4,500",
    alternativeVi: "Taxi lên đỉnh Gyeongnidan-gil 4,500 won",
  },
  {
    id: "seochon",
    emoji: "🏯",
    difficulty: 2,
    walkingMinutes: 15,
    elevationMeters: 30,
    nameKo: "서촌(체부동·통의동)",
    nameVi: "Seochon (Chebu-dong, Tongui-dong)",
    shortKo: "경복궁 서쪽 한옥 동네 — 북촌보다 훨씬 평탄",
    shortVi: "Khu hanok phía Tây Gyeongbokgung — phẳng hơn Bukchon NHIỀU",
    descKo:
      "북촌의 대안. 같은 분위기지만 거의 평지에 가까워서 노약자·유아 동반 여행자에게 추천. 통의동 카페·갤러리·옛 부엌(체부동 골목) 분위기 좋아요.",
    descVi:
      "Phương án thay thế Bukchon. Cùng phong cách hanok nhưng gần như bằng phẳng — phù hợp người già, đi cùng trẻ nhỏ. Café & gallery Tongui-dong + hẻm Chebu-dong rất có không khí.",
    subwayKo: "3호선 경복궁역 2번 출구 → 도보 3분",
    subwayVi: "Tuyến 3, ga Gyeongbokgung, lối ra 2 → đi bộ 3 phút",
    tipsKo: [
      "북촌이 너무 가파르다면 → 무조건 서촌으로",
      "통인시장 안쪽 좁은 길이 살짝 오르막",
      "주말도 비교적 한산 — 사진 찍기 좋음",
      "통인시장 도시락 카페 — 옛날 동전으로 반찬 사기 체험",
    ],
    tipsVi: [
      "Bukchon quá dốc → CHỌN Seochon",
      "Bên trong chợ Tongin có đoạn lên dốc nhẹ",
      "Cuối tuần vẫn vắng — chụp ảnh thoải mái",
      "Lunch box café chợ Tongin — đổi tiền cổ mua banchan, trải nghiệm vui",
    ],
    alternativeKo: "거의 평지라 도보 가능",
    alternativeVi: "Gần như phẳng — đi bộ thoải mái",
  },
  {
    id: "inwangsan",
    emoji: "⛰️",
    difficulty: 5,
    walkingMinutes: 90,
    elevationMeters: 338,
    nameKo: "인왕산 둘레길",
    nameVi: "Đường mòn núi Inwangsan",
    shortKo: "본격 등산 — 한양도성 + 서울 360° 전망",
    shortVi: "Leo núi thật sự — view 360° Seoul + tường thành Joseon",
    descKo:
      "해발 338m. 등산 경험 있어야 함. 인왕산 정상 바위에서 서울 전경이 한눈에 보입니다. 정상까지 왕복 2시간, 운동화·물·간식 필수.",
    descVi:
      "Cao 338m. Cần có kinh nghiệm leo núi. Từ đỉnh Inwangsan nhìn toàn cảnh Seoul. Lên xuống 2 tiếng, BẮT BUỘC giày thể thao, nước, đồ ăn nhẹ.",
    subwayKo: "3호선 경복궁역 1번 출구 → 도보 15분",
    subwayVi: "Tuyến 3, ga Gyeongbokgung, lối ra 1 → đi bộ 15 phút",
    tipsKo: [
      "월요일 휴장 — 화~일 9:00-17:00",
      "주민등록증·여권 지참 (입산 신고)",
      "구간별 난이도 차이 — 단군성전 코스가 가장 쉬움",
      "정상은 바위 — 미끄러지지 않게 손잡이 잡고 이동",
    ],
    tipsVi: [
      "ĐÓNG CỬA thứ Hai — Thứ Ba-Chủ nhật 9:00-17:00",
      "Mang HỘ CHIẾU theo (khai báo nhập núi)",
      "Có nhiều đường — đường Dangun Seongjeon dễ nhất",
      "Đỉnh là đá — bám tay vịn để tránh trượt",
    ],
    alternativeKo: "등산 외 대안 없음 — 차량 진입 불가",
    alternativeVi: "Không có lựa chọn khác — xe không vào được",
  },
  {
    id: "bukak-skyway",
    emoji: "🌌",
    difficulty: 4,
    walkingMinutes: 60,
    elevationMeters: 290,
    nameKo: "북악스카이웨이 팔각정",
    nameVi: "Đài Bát Giác Bukak Skyway",
    shortKo: "서울 야경 명소 — 차로 가는 게 정답",
    shortVi: "Spot ngắm đêm — đi xe là chính",
    descKo:
      "북악산 중턱(해발 290m)의 전망대. 걸어 올라가면 한 시간 이상 등산 수준이지만, 택시·차로 5분이면 정상까지. 야경 + 노을 명소.",
    descVi:
      "Đài quan sát giữa núi Bugaksan (290m). Đi bộ lên mất hơn 1 tiếng như leo núi, nhưng taxi/xe chỉ 5 phút lên đỉnh. Spot hoàng hôn + đêm tuyệt vời.",
    subwayKo: "3호선 경복궁역 3번 출구 → 택시 10분",
    subwayVi: "Tuyến 3, ga Gyeongbokgung, lối ra 3 → taxi 10 phút",
    tipsKo: [
      "걸어가지 마세요 — 진심으로 등산 수준",
      "택시 왕복 ₩20,000 정도 (대기 포함)",
      "일몰 30분 전 도착 → 일몰 + 야경 동시 감상",
      "팔각정 카페 있음 (커피 한 잔 ₩5,000)",
    ],
    tipsVi: [
      "ĐỪNG đi bộ — thật sự là leo núi",
      "Taxi khứ hồi khoảng 20,000 won (kể cả chờ)",
      "Đến trước hoàng hôn 30 phút → vừa ngắm hoàng hôn vừa ngắm đêm",
      "Có café trong đài Palgakjeong (cà phê 5,000 won/ly)",
    ],
    alternativeKo: "택시 (왕복 ₩20,000) — 유일한 합리적 옵션",
    alternativeVi: "Taxi (khứ hồi 20,000 won) — lựa chọn duy nhất hợp lý",
  },
];

export function hillsByDifficulty(): HillSpot[] {
  return [...HILLS].sort((a, b) => a.difficulty - b.difficulty);
}

export function getHill(id: string): HillSpot | undefined {
  return HILLS.find((h) => h.id === id);
}

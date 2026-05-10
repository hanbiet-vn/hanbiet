import type { Locale } from "@/i18n/routing";

export type FoodTag =
  | "spicy" | "mild" | "savory" | "sweet"
  | "hot" | "cold"
  | "social" | "solo"
  | "comfort" | "healthy" | "indulgent" | "refreshing"
  | "snack" | "meal" | "hearty" | "light"
  | "traditional" | "modern"
  | "broth" | "chewy" | "soft" | "crispy" | "premium";

export type Food = {
  id: string;
  hangul: string;
  romanized: string;
  nameVi: string;
  emoji: string;
  tags: FoodTag[];
  descVi: string;
  descKo: string;
};

export const FOODS: Food[] = [
  // === Stews & soups (15) ===
  { id: "kimchi-jjigae", hangul: "김치찌개", romanized: "Kimchi-jjigae", nameVi: "Canh kimchi", emoji: "🍲",
    tags: ["spicy","hot","comfort","traditional","meal","broth","hearty","savory"],
    descVi: "Canh kimchi chua cay nóng hổi — món cơm hằng ngày của người Hàn. Đậm đà, ấm bụng, ăn với cơm trắng cực hợp.",
    descKo: "한국인의 일상 메뉴, 매콤하고 따뜻한 김치찌개. 진한 국물에 흰밥이 진리." },
  { id: "doenjang-jjigae", hangul: "된장찌개", romanized: "Doenjang-jjigae", nameVi: "Canh tương đậu nành", emoji: "🥣",
    tags: ["savory","hot","traditional","meal","broth","comfort","healthy","mild"],
    descVi: "Canh tương đậu nành lên men — vị mộc mạc, đậm đà. Linh hồn của bữa cơm gia đình Hàn Quốc.",
    descKo: "구수한 된장찌개 — 한국 가정식의 영혼. 깊고 진한 맛이 일품." },
  { id: "soondubu", hangul: "순두부찌개", romanized: "Sundubu-jjigae", nameVi: "Canh đậu phụ non cay", emoji: "🍲",
    tags: ["spicy","hot","healthy","meal","broth","traditional","comfort","soft"],
    descVi: "Canh đậu phụ non mềm mịn trong nước dùng cay đỏ — bổ dưỡng, ấm bụng, hợp ngày lạnh.",
    descKo: "보들보들한 순두부와 매콤한 국물 — 추운 날 속 풀기 좋은 따끈한 한 그릇." },
  { id: "budae", hangul: "부대찌개", romanized: "Budae-jjigae", nameVi: "Lẩu kiểu quân đội", emoji: "🍲",
    tags: ["spicy","hearty","social","meal","comfort","modern","indulgent","broth","hot"],
    descVi: "Lẩu hỗn hợp xúc xích, ham, mì gói, đậu hũ trong nước dùng cay — món của những đêm tụ tập đông vui.",
    descKo: "햄·소시지·라면·두부가 어우러진 매콤한 부대찌개 — 친구들과 모이는 밤의 대표 메뉴." },
  { id: "galbitang", hangul: "갈비탕", romanized: "Galbitang", nameVi: "Canh sườn bò", emoji: "🍜",
    tags: ["savory","hot","meal","traditional","broth","hearty","mild","premium"],
    descVi: "Canh sườn bò hầm trong veo — thanh nhẹ mà ngọt sâu. Món được ưa chuộng trong những ngày trọng đại.",
    descKo: "맑게 끓여낸 갈비탕 — 깔끔하면서도 깊은 맛. 잔칫상에 자주 오르는 귀한 음식." },
  { id: "seolleongtang", hangul: "설렁탕", romanized: "Seolleongtang", nameVi: "Canh xương bò trắng", emoji: "🍜",
    tags: ["mild","hot","meal","traditional","broth","healthy","comfort","hearty"],
    descVi: "Canh xương bò ninh trắng đục cả ngày — vị thanh, bổ dưỡng. Bữa trưa kinh điển của dân văn phòng Hàn.",
    descKo: "사골을 우려낸 뽀얀 국물의 설렁탕 — 담백하고 든든한 맛. 직장인 점심의 클래식." },
  { id: "samgyetang", hangul: "삼계탕", romanized: "Samgyetang", nameVi: "Gà tần sâm", emoji: "🐔",
    tags: ["mild","hot","meal","traditional","broth","healthy","hearty","premium"],
    descVi: "Gà nguyên con hầm với nhân sâm, táo đỏ, gạo nếp — món bổ dưỡng kinh điển vào ngày nóng nhất năm (복날).",
    descKo: "인삼·대추·찹쌀을 넣어 끓인 삼계탕 — 복날의 대표 보양식." },
  { id: "maeuntang", hangul: "매운탕", romanized: "Maeuntang", nameVi: "Lẩu cá cay", emoji: "🌶️",
    tags: ["spicy","hot","meal","traditional","broth","hearty"],
    descVi: "Lẩu cá tươi nấu cay, đậm đà — món nhậu yêu thích của các bác Hàn ở quán cá hồ.",
    descKo: "신선한 생선으로 끓인 얼큰한 매운탕 — 횟집 단골 안주." },
  { id: "yukgaejang", hangul: "육개장", romanized: "Yukgaejang", nameVi: "Lẩu thịt bò cay", emoji: "🥘",
    tags: ["spicy","hot","meal","traditional","broth","hearty","comfort"],
    descVi: "Canh thịt bò xé sợi với rau xào cay — đỏ rực, đầy đặn. Khi cần nạp năng lượng và 'đốt' cảm xúc.",
    descKo: "결대로 찢은 소고기와 야채로 끓인 얼큰한 육개장 — 기운 보충과 스트레스 해소에 딱." },
  { id: "gamjatang", hangul: "감자탕", romanized: "Gamjatang", nameVi: "Lẩu xương heo khoai tây", emoji: "🥔",
    tags: ["spicy","hot","social","meal","traditional","broth","hearty","indulgent"],
    descVi: "Lẩu xương heo cay với khoai tây, lá tía tô — món tụ tập đêm khuya cùng soju của giới sinh viên.",
    descKo: "돼지 등뼈와 감자가 어우러진 얼큰한 감자탕 — 술집 단골 안주." },
  { id: "tteokguk", hangul: "떡국", romanized: "Tteokguk", nameVi: "Canh bánh gạo", emoji: "🥟",
    tags: ["mild","hot","meal","traditional","broth","comfort","chewy"],
    descVi: "Canh bánh gạo lát mỏng — món Tết Nguyên đán Hàn. Người Hàn nói 'ăn 떡국 = thêm một tuổi'.",
    descKo: "얇게 썬 가래떡으로 끓인 떡국 — 설날의 대표 음식. '떡국 한 그릇 = 한 살'." },
  { id: "tteokmanduguk", hangul: "떡만둣국", romanized: "Tteokmanduguk", nameVi: "Canh bánh gạo & bánh bao", emoji: "🥟",
    tags: ["mild","hot","meal","traditional","broth","comfort","hearty"],
    descVi: "Canh bánh gạo kết hợp bánh bao Hàn — nhẹ nhàng, ấm áp, no bụng. Phiên bản nâng cấp của 떡국.",
    descKo: "떡과 만두가 함께 들어간 떡만둣국 — 푸근하고 든든한 한 그릇." },
  { id: "miyeokguk", hangul: "미역국", romanized: "Miyeokguk", nameVi: "Canh rong biển", emoji: "🌊",
    tags: ["mild","hot","traditional","healthy","broth","light","comfort"],
    descVi: "Canh rong biển — món sinh nhật của người Hàn. Nhẹ nhàng, bổ dưỡng, gợi nhớ vị mẹ nấu.",
    descKo: "한국인의 생일 음식, 미역국 — 담백하고 영양 가득한 엄마의 맛." },
  { id: "dakhanmari", hangul: "닭한마리", romanized: "Dakhanmari", nameVi: "Gà nguyên con hầm", emoji: "🍲",
    tags: ["mild","hot","social","meal","traditional","broth","healthy","hearty"],
    descVi: "Gà nguyên con luộc cùng tỏi và hành — chấm sốt mù tạt ớt. Đặc sản phố cổ Seoul (동대문).",
    descKo: "통닭에 마늘과 파를 넣고 끓인 닭한마리 — 동대문 명물." },
  { id: "gomtang", hangul: "곰탕", romanized: "Gomtang", nameVi: "Canh hầm xương bò", emoji: "🍜",
    tags: ["mild","hot","meal","traditional","broth","healthy","hearty","comfort"],
    descVi: "Anh em với 설렁탕 — nước dùng trong hơn, vị thanh hơn. Bổ dưỡng, dễ ăn.",
    descKo: "설렁탕의 형제 같은 곰탕 — 더 맑고 담백한 국물. 든든한 보양식." },

  // === Grilled meats (6) ===
  { id: "samgyeopsal", hangul: "삼겹살", romanized: "Samgyeopsal", nameVi: "Thịt ba chỉ nướng", emoji: "🥓",
    tags: ["savory","social","indulgent","traditional","meal","hearty"],
    descVi: "Thịt ba chỉ nướng vỉ — cuốn rau xà lách với tỏi và 쌈장. Văn hóa tụ tập kinh điển của người Hàn.",
    descKo: "친구들과 둘러앉아 굽는 삼겹살. 상추·마늘·쌈장과 함께 — 한국식 회식의 정석." },
  { id: "galbi", hangul: "갈비", romanized: "Galbi", nameVi: "Sườn nướng kiểu Hàn", emoji: "🥩",
    tags: ["savory","sweet","social","indulgent","traditional","meal","premium","hearty"],
    descVi: "Sườn bò ướp xì dầu ngọt nướng than — món cao cấp dành cho dịp đặc biệt. Mềm, ngọt, đậm đà.",
    descKo: "달콤짭짤한 양념의 갈비 — 특별한 날에 먹는 고급 메뉴. 부드럽고 깊은 맛." },
  { id: "bulgogi", hangul: "불고기", romanized: "Bulgogi", nameVi: "Thịt bò xào tương ngọt", emoji: "🍖",
    tags: ["sweet","savory","traditional","meal","social","mild"],
    descVi: "Thịt bò thái mỏng ướp tương ngọt rồi xào — dễ ăn, không cay, được trẻ em và người mới ăn Hàn yêu thích.",
    descKo: "달콤한 양념에 재운 소고기를 볶은 불고기 — 어린이도 외국인도 좋아하는 입문용 한식." },
  { id: "dakgalbi", hangul: "닭갈비", romanized: "Dakgalbi", nameVi: "Gà xào cay (Dakgalbi)", emoji: "🌶️",
    tags: ["spicy","social","meal","modern","hearty","savory","chewy"],
    descVi: "Gà xào cay với rau và bánh tteok trên chảo lớn — đặc sản Chuncheon. Cuối bữa thêm cơm chiên!",
    descKo: "춘천 명물 닭갈비 — 매콤한 양념에 야채와 떡을 함께. 마무리는 볶음밥!" },
  { id: "gopchang", hangul: "곱창", romanized: "Gopchang", nameVi: "Lòng nướng", emoji: "🥩",
    tags: ["savory","social","indulgent","traditional","meal","chewy","premium"],
    descVi: "Lòng bò/heo nướng giòn dai — món nhậu quý phái, hơi đắt nhưng ngon đậm đà.",
    descKo: "쫄깃하게 구운 곱창 — 비싸지만 진한 맛으로 인기인 술 안주." },
  { id: "tteokgalbi", hangul: "떡갈비", romanized: "Tteokgalbi", nameVi: "Sườn bò xay nướng", emoji: "🥘",
    tags: ["sweet","savory","meal","traditional","mild","soft"],
    descVi: "Thịt sườn bò xay nhuyễn nặn thành miếng rồi nướng — mềm ngọt, dễ ăn, hợp cả trẻ em.",
    descKo: "다진 갈비살을 빚어 구운 떡갈비 — 부드럽고 달콤해서 아이도 좋아함." },

  // === Boiled / wraps (2) ===
  { id: "bossam", hangul: "보쌈", romanized: "Bossam", nameVi: "Thịt heo luộc cuốn", emoji: "🥬",
    tags: ["savory","social","traditional","meal","mild","soft"],
    descVi: "Thịt heo luộc thái lát ăn cuốn với kimchi tươi và 쌈장 — không dầu mỡ, đậm đà mà nhẹ nhàng.",
    descKo: "부드럽게 삶아낸 수육에 김치와 쌈장 — 기름지지 않으면서도 깊은 맛." },
  { id: "jokbal", hangul: "족발", romanized: "Jokbal", nameVi: "Chân giò luộc thấm xì dầu", emoji: "🐷",
    tags: ["savory","social","indulgent","traditional","meal","chewy"],
    descVi: "Chân giò heo luộc với gia vị xì dầu, gừng — dai mềm, đậm đà. Món gọi giao hàng đêm khuya.",
    descKo: "간장과 향신료에 푹 익힌 족발 — 야식 배달의 양대 산맥." },

  // === Rice dishes (6) ===
  { id: "bibimbap", hangul: "비빔밥", romanized: "Bibimbap", nameVi: "Cơm trộn Hàn Quốc", emoji: "🍚",
    tags: ["mild","healthy","traditional","meal","savory"],
    descVi: "Cơm trộn rau củ, thịt bò, trứng và gochujang — đầy đủ dinh dưỡng, đẹp mắt, không quá cay.",
    descKo: "각종 나물과 소고기·계란을 비벼 먹는 비빔밥. 영양 균형이 좋고 보기에도 예뻐요." },
  { id: "dolsot", hangul: "돌솥비빔밥", romanized: "Dolsot-bibimbap", nameVi: "Cơm trộn nồi đá nóng", emoji: "🍚",
    tags: ["hot","healthy","traditional","meal","savory","mild","chewy"],
    descVi: "Bibimbap đựng trong nồi đá nóng — đáy có lớp cơm cháy giòn rụm. Nâng cấp phiên bản 비빔밥.",
    descKo: "뜨거운 돌솥에 담은 비빔밥 — 바닥의 누룽지가 별미. 비빔밥의 업그레이드 버전." },
  { id: "kimchi-bokkeum", hangul: "김치볶음밥", romanized: "Kimchi-bokkeumbap", nameVi: "Cơm chiên kimchi", emoji: "🍳",
    tags: ["spicy","meal","modern","comfort","savory"],
    descVi: "Cơm chiên với kimchi chua, ham và trứng ốp la — món cứu đói khi tủ lạnh trống trơn.",
    descKo: "신김치와 햄·계란프라이로 만든 김치볶음밥 — 냉장고가 비었을 때의 구원자." },
  { id: "hoedeop", hangul: "회덮밥", romanized: "Hoedeopbap", nameVi: "Cơm cá sống trộn rau", emoji: "🍣",
    tags: ["cold","healthy","meal","modern","light","savory","refreshing"],
    descVi: "Cơm trộn cá sống cắt vuông + rau tươi + sốt cay — phiên bản 비빔밥 với chashimi. Mát, lành.",
    descKo: "회와 신선한 야채를 매콤한 양념에 비벼 먹는 회덮밥 — 깔끔하고 시원한 한 끼." },
  { id: "omurice", hangul: "오므라이스", romanized: "Omurice", nameVi: "Cơm bọc trứng", emoji: "🍳",
    tags: ["mild","sweet","savory","meal","modern","comfort","soft"],
    descVi: "Cơm chiên cà chua bọc trong trứng tráng mỏng + sốt ketchup — món Nhật-Hàn dễ thương, được trẻ em yêu thích.",
    descKo: "케첩 라이스를 얇은 계란 지단으로 감싼 오므라이스 — 어린이가 좋아하는 일식 한식 퓨전." },
  { id: "kimbap", hangul: "김밥", romanized: "Kimbap", nameVi: "Cơm cuộn rong biển", emoji: "🍙",
    tags: ["mild","snack","light","healthy","modern","savory"],
    descVi: "Cơm cuộn rong biển với rau, trứng, thịt — picnic, đi học, đi làm đều tiện. Ăn nhẹ nhưng đầy đủ.",
    descKo: "야채·계란·햄을 김으로 말아낸 김밥 — 소풍·등굣길의 단골 메뉴." },

  // === Noodles (8) ===
  { id: "jjajangmyeon", hangul: "짜장면", romanized: "Jjajangmyeon", nameVi: "Mì tương đen", emoji: "🍜",
    tags: ["mild","savory","comfort","meal","hot","indulgent","modern"],
    descVi: "Mì sốt tương đen béo ngậy — món gọi giao hàng số 1 Hàn Quốc. 14/4 'Black Day' chuyên ăn món này.",
    descKo: "진한 춘장 소스의 짜장면 — 한국 배달 음식 1위. 4월 14일 블랙데이의 주인공." },
  { id: "jjamppong", hangul: "짬뽕", romanized: "Jjamppong", nameVi: "Mì hải sản cay", emoji: "🍜",
    tags: ["spicy","hot","savory","meal","broth","hearty","traditional"],
    descVi: "Mì hải sản cay nóng hổi — đối thủ kinh điển của 짜장면. Dành cho fan cay cấp pro.",
    descKo: "얼큰한 해물 짬뽕 — 짜장면의 영원한 라이벌. 매운 거 좋아하는 사람의 선택." },
  { id: "naengmyeon", hangul: "냉면", romanized: "Naengmyeon", nameVi: "Mì lạnh Hàn Quốc", emoji: "🍝",
    tags: ["cold","refreshing","healthy","mild","traditional","meal","light","chewy"],
    descVi: "Mì lạnh trong nước dùng đá — món giải nhiệt mùa hè đỉnh nhất Hàn Quốc. Lạ miệng nhưng gây nghiện.",
    descKo: "얼음 동동 띄운 시원한 냉면 — 한국 여름의 별미. 한 번 빠지면 못 빠져나옴." },
  { id: "ramyeon", hangul: "라면", romanized: "Ramyeon", nameVi: "Mì ăn liền Hàn Quốc", emoji: "🍜",
    tags: ["spicy","hot","comfort","meal","broth","modern","indulgent","solo"],
    descVi: "Mì gói cay (신라면, 진라면) — món của những đêm khuya mưa rơi. Văn hóa K-drama không thể thiếu.",
    descKo: "신라면·진라면 — 비 오는 밤의 친구. K-드라마에 빠지지 않는 야식." },
  { id: "kalguksu", hangul: "칼국수", romanized: "Kalguksu", nameVi: "Mì sợi tay", emoji: "🍜",
    tags: ["mild","hot","traditional","meal","broth","comfort","soft","healthy"],
    descVi: "Mì sợi cắt tay nấu trong nước dùng nhẹ — vị mộc mạc, ấm bụng. Thích hợp ngày mưa.",
    descKo: "손으로 썰어낸 면을 멸치 육수에 끓인 칼국수 — 비 오는 날 생각나는 따뜻한 한 그릇." },
  { id: "kongguksu", hangul: "콩국수", romanized: "Kongguksu", nameVi: "Mì lạnh nước đậu nành", emoji: "🥛",
    tags: ["cold","refreshing","healthy","mild","traditional","meal","light","soft"],
    descVi: "Mì lạnh ngâm trong nước đậu nành xay mịn — món chay mát lạnh mùa hè. Bổ dưỡng, không gluten.",
    descKo: "곱게 간 콩국에 면을 만 콩국수 — 여름철 시원한 보양식." },
  { id: "bibim-guksu", hangul: "비빔국수", romanized: "Bibim-guksu", nameVi: "Mì trộn cay chua ngọt", emoji: "🌶️",
    tags: ["spicy","cold","sweet","savory","modern","meal","light","chewy"],
    descVi: "Mì sợi mỏng trộn sốt 고추장 cay chua ngọt + dưa leo + trứng — món cứu đói nhanh trong tủ lạnh.",
    descKo: "고추장 양념에 새콤달콤하게 비빈 비빔국수 — 여름철 빠른 한 끼." },
  { id: "rabokki", hangul: "라볶이", romanized: "Rabokki", nameVi: "Bánh gạo & mì cay", emoji: "🌶️",
    tags: ["spicy","sweet","snack","modern","social","comfort","chewy"],
    descVi: "Tteokbokki + mì gói nấu chung trong sốt cay ngọt — phát minh của giới trẻ Hàn. Ngon gấp đôi!",
    descKo: "떡볶이에 라면 사리를 넣은 라볶이 — 한국 학생들의 발명품. 맛은 두 배!" },

  // === Snacks / street food (6) ===
  { id: "tteokbokki", hangul: "떡볶이", romanized: "Tteokbokki", nameVi: "Bánh gạo cay", emoji: "🌶️",
    tags: ["spicy","sweet","snack","modern","social","comfort","chewy"],
    descVi: "Bánh gạo dẻo nấu sốt cay ngọt — món street food huyền thoại của Hàn Quốc. Ai cũng nghiện.",
    descKo: "쫄깃한 떡과 매콤달콤한 양념 — 한국 분식의 아이콘. 누구나 좋아하는 국민 간식." },
  { id: "eomuk", hangul: "어묵", romanized: "Eomuk", nameVi: "Chả cá xiên Hàn Quốc", emoji: "🍢",
    tags: ["mild","hot","snack","traditional","savory","broth","comfort","chewy"],
    descVi: "Chả cá xiên que ngâm trong nước dùng nóng — món street food mùa đông. Húp nước rồi ăn chả, ấm áp ngay.",
    descKo: "꼬치에 꽂은 어묵을 따끈한 국물에 — 겨울 길거리 음식의 위로." },
  { id: "sundae", hangul: "순대", romanized: "Sundae", nameVi: "Dồi máu Hàn Quốc", emoji: "🌭",
    tags: ["savory","snack","traditional","modern","chewy","social"],
    descVi: "Dồi máu Hàn nhồi miến và máu heo — chấm muối tiêu hoặc sốt cay. Đặc sản của các quán 분식.",
    descKo: "당면과 선지를 넣은 순대 — 소금이나 매운 양념과 함께. 분식집 단골." },
  { id: "tteokkkochi", hangul: "떡꼬치", romanized: "Tteokkkochi", nameVi: "Bánh gạo xiên cay", emoji: "🍡",
    tags: ["spicy","sweet","snack","modern","comfort","chewy"],
    descVi: "Tteok xiên nướng phết sốt cay ngọt — món tan học của học sinh Hàn. Vừa ăn vừa thổi!",
    descKo: "꼬치에 꽂은 떡을 구워 매콤달콤 양념을 발라낸 떡꼬치 — 학생들 하굣길 간식." },

  // === Pancakes & dumplings (4) ===
  { id: "pajeon", hangul: "파전", romanized: "Pajeon", nameVi: "Bánh xèo hành Hàn Quốc", emoji: "🥞",
    tags: ["savory","traditional","social","comfort","crispy","indulgent"],
    descVi: "Bánh xèo hành lá to, giòn — món ăn truyền thống ngày mưa. Kẹp với 막걸리 (rượu gạo) là tuyệt cú mèo.",
    descKo: "큼직한 파를 넣어 부친 파전 — 비 오는 날의 친구. 막걸리와 환상의 궁합." },
  { id: "kimchi-jeon", hangul: "김치전", romanized: "Kimchi-jeon", nameVi: "Bánh xèo kimchi", emoji: "🥞",
    tags: ["spicy","savory","traditional","social","comfort","crispy"],
    descVi: "Bánh xèo kimchi giòn rụm — biến tấu kinh điển khi kimchi chua quá. Hợp với rượu gạo.",
    descKo: "묵은지로 부친 김치전 — 신김치 처리법의 클래식. 막걸리 안주로 최고." },
  { id: "japchae", hangul: "잡채", romanized: "Japchae", nameVi: "Miến trộn Hàn Quốc", emoji: "🍝",
    tags: ["sweet","savory","traditional","meal","mild","chewy"],
    descVi: "Miến khoai lang dai trộn rau củ và thịt bò — món tiệc kinh điển. Vừa ngọt vừa mặn, dễ ăn.",
    descKo: "쫄깃한 당면에 야채와 소고기를 무친 잡채 — 잔칫상의 단골. 달짝지근한 맛." },
  { id: "mandu", hangul: "만두", romanized: "Mandu", nameVi: "Bánh bao Hàn Quốc", emoji: "🥟",
    tags: ["snack","savory","comfort","traditional","mild","soft"],
    descVi: "Bánh bao Hàn nhân thịt-rau, hấp hoặc chiên. Tiện lợi, no bụng, ai cũng thích.",
    descKo: "고기와 야채로 속을 채운 만두 — 찌거나 구워서 간편하게." },

  // === Chicken (2) ===
  { id: "chimaek", hangul: "치킨", romanized: "Chikin", nameVi: "Gà rán Hàn Quốc (Chimaek)", emoji: "🍗",
    tags: ["savory","social","indulgent","modern","comfort","meal","crispy"],
    descVi: "Gà rán giòn rụm + bia mát lạnh = 치맥 (Chimaek). Văn hóa cuối tuần của giới trẻ Hàn.",
    descKo: "바삭한 치킨에 시원한 맥주 한잔, 치맥 — 한국 젊은이들의 주말 문화." },
  { id: "yangnyeom", hangul: "양념치킨", romanized: "Yangnyeom-chikin", nameVi: "Gà rán sốt cay ngọt", emoji: "🍗",
    tags: ["spicy","sweet","savory","social","indulgent","modern","crispy"],
    descVi: "Gà rán phủ sốt cay ngọt đỏ rực — đặc sản Hàn nổi tiếng thế giới qua 'Cherry Bomb'.",
    descKo: "매콤달콤한 양념을 입힌 양념치킨 — 한국이 자랑하는 세계적 K-푸드." },
];

// Likert-scale statements with Vietnam-relatable cultural context.
// Users rate 1 (strongly disagree) to 5 (strongly agree).
// When a user agrees, the listed `tags` are weighted positively for matching.
export type Statement = {
  id: string;
  emoji: string;
  textVi: string;
  textKo: string;
  tags: FoodTag[];
};

export const STATEMENTS: Statement[] = [
  {
    id: "weekend-bbq",
    emoji: "🍻",
    textVi:
      "Cuối tuần tụ tập bạn bè, không gì sướng bằng vừa nướng thịt vừa nhậu một chút.",
    textKo:
      "주말에 친구들과 모이면 고기 굽고 한잔하는 게 진리지.",
    tags: ["social", "indulgent", "savory", "hearty", "meal"],
  },
  {
    id: "love-spicy",
    emoji: "🌶️",
    textVi:
      "Tôi yêu vị cay đến mức ra mồ hôi cũng không thấy phiền — càng cay càng đã.",
    textKo:
      "땀을 줄줄 흘릴 정도로 매운 음식이 정말 좋아.",
    tags: ["spicy", "hot"],
  },
  {
    id: "rain-broth",
    emoji: "🌧️",
    textVi:
      "Trời mưa ở Sài Gòn hay Hà Nội làm tôi thèm ngay một bát canh nóng có nước dùng đậm đà.",
    textKo:
      "비 오는 날엔 자연스럽게 따뜻한 국물 음식이 당겨.",
    tags: ["hot", "broth", "comfort", "hearty"],
  },
  {
    id: "kdrama-fan",
    emoji: "📺",
    textVi:
      "Là fan K-drama / K-pop, tôi thấy nhân vật ăn gì là phải tìm thử bằng được.",
    textKo:
      "K-드라마·K-팝 작품 속에 나오는 음식은 꼭 따라 먹어보고 싶어.",
    tags: ["modern", "social", "indulgent"],
  },
  {
    id: "family-tradition",
    emoji: "🏠",
    textVi:
      "Bữa cơm truyền thống cùng gia đình, kiểu mâm cơm đầy đủ canh-thịt-rau, làm tôi yên lòng nhất.",
    textKo:
      "온 가족이 둘러앉아 먹는 전통적인 한 상이 마음을 가장 편안하게 해.",
    tags: ["traditional", "comfort", "healthy", "mild", "meal"],
  },
  {
    id: "sns-photo",
    emoji: "📸",
    textVi:
      "Trước khi ăn, tôi thường chụp ảnh món xinh đẹp để đăng Facebook hoặc TikTok.",
    textKo:
      "먹기 전에 예쁜 음식 사진부터 찍어서 SNS에 올리는 걸 좋아해.",
    tags: ["modern", "sweet", "refreshing", "light"],
  },
  {
    id: "after-class",
    emoji: "🍪",
    textVi:
      "Tan học hoặc tan làm về, tôi luôn cần một món ăn vặt — giống như trà sữa, bánh tráng trộn cứu cánh đời tôi.",
    textKo:
      "하교·퇴근 후엔 떡볶이 같은 가벼운 간식이 꼭 필요해.",
    tags: ["snack", "comfort", "sweet", "modern"],
  },
  {
    id: "organ-fear",
    emoji: "😨",
    textVi:
      "Nội tạng (lòng, dồi, gan…) làm tôi hơi sợ — tôi thích món gì 'sạch sẽ', dễ ăn hơn.",
    textKo:
      "곱창·순대 같은 내장류는 좀 부담스럽고, 깔끔한 음식이 더 좋아.",
    tags: ["mild", "soft", "healthy", "modern", "sweet", "light"],
  },
  {
    id: "vietnam-summer",
    emoji: "🥵",
    textVi:
      "Mùa hè Việt Nam nóng 35°C, tôi chỉ thèm món / đồ uống thật mát lạnh.",
    textKo:
      "베트남 35도 한여름엔 시원한 음식이나 음료만 생각나.",
    tags: ["cold", "refreshing", "sweet", "light"],
  },
  {
    id: "comfort-food",
    emoji: "🥲",
    textVi:
      "Khi tâm trạng đi xuống, một bữa ngon ấm bụng là liều thuốc tốt nhất với tôi.",
    textKo:
      "기분이 처질 때 따뜻한 한 끼가 최고의 위로가 돼.",
    tags: ["comfort", "hot", "broth", "indulgent", "hearty"],
  },
  {
    id: "adventurous",
    emoji: "🚀",
    textVi:
      "Tôi thích thử món lạ hơn là cứ ăn món quen thuộc — đời cần phiêu lưu.",
    textKo:
      "익숙한 메뉴보다 새로운 음식을 시도하는 걸 좋아해.",
    tags: ["modern", "social", "premium"],
  },
  {
    id: "late-night",
    emoji: "🌙",
    textVi:
      "Sau 10 giờ đêm, tôi vẫn thường thèm ăn gì đó — văn hóa đồ ăn đêm Việt Nam đỉnh nhất.",
    textKo:
      "밤 10시 이후에도 야식 생각이 자주 나는 편이야.",
    tags: ["comfort", "indulgent", "modern", "snack"],
  },
];

export type FoodResult = {
  food: Food;
  score: number;
  matchPercent: number;
};

// Likert-scale recommender. `answers` maps statement.id → rating (1..5).
// Rating 3 is neutral (zero weight); 1 = strongly disagree (-2), 5 = strongly agree (+2).
// For each statement the user agrees with, the listed tags accumulate positive
// weight; for each they disagree with, those same tags are penalized.
export function recommendFromAnswers(
  answers: Record<string, number>,
  topN = 3,
): FoodResult[] {
  const tagScores = new Map<FoodTag, number>();
  for (const stmt of STATEMENTS) {
    const rating = answers[stmt.id];
    if (rating === undefined) continue;
    const weight = rating - 3; // -2 to +2
    if (weight === 0) continue;
    for (const tag of stmt.tags) {
      tagScores.set(tag, (tagScores.get(tag) ?? 0) + weight);
    }
  }

  const scored = FOODS.map((f) => {
    let score = 0;
    for (const tag of f.tags) {
      score += tagScores.get(tag) ?? 0;
    }
    return { food: f, score };
  });
  scored.sort((a, b) => b.score - a.score);

  const top = scored[0]?.score ?? 0;
  return scored.slice(0, topN).map((r) => {
    const percent = top <= 0 ? 50 : Math.max(0, Math.round((r.score / top) * 100));
    return { ...r, matchPercent: percent };
  });
}

export function descOf(food: Food, locale: Locale): string {
  return locale === "ko" ? food.descKo : food.descVi;
}

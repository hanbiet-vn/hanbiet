// Recipes for the 47 Korean dishes in foods.ts.
// Indexed by food.id. Includes ingredients, steps and tips for both languages.

export type Recipe = {
  difficulty: 1 | 2 | 3 | 4 | 5;
  servings: number;
  totalMinutes: number;
  // Optional Wikipedia Commons or stable image URL (we fall back to emoji gradient if absent).
  imageUrl?: string;
  ingredientsVi: string[];
  ingredientsKo: string[];
  stepsVi: string[];
  stepsKo: string[];
  tipsVi?: string;
  tipsKo?: string;
};

export const RECIPES: Record<string, Recipe> = {
  // === Stews & soups ===
  "kimchi-jjigae": {
    difficulty: 2, servings: 2, totalMinutes: 30,
    ingredientsVi: [
      "300g kimchi chua (đã muối lâu)", "200g thịt ba chỉ heo thái mỏng",
      "1 miếng đậu hũ (cắt khối)", "1 cây hành lá", "2 tép tỏi băm",
      "1 muỗng canh dầu mè", "500ml nước", "1 muỗng canh gochujang (tùy chọn)",
    ],
    ingredientsKo: [
      "신김치 300g", "삼겹살 200g (얇게 썬 것)", "두부 한 모", "대파 1대",
      "다진 마늘 2쪽", "참기름 1큰술", "물 500ml", "고추장 1큰술 (선택)",
    ],
    stepsVi: [
      "Cắt kimchi và thịt ba chỉ thành miếng vừa ăn.",
      "Đun nóng nồi với dầu mè, xào kimchi 3 phút cho thơm.",
      "Cho thịt ba chỉ vào xào đến khi chín tái.",
      "Thêm tỏi, gochujang, nước. Đun sôi rồi hạ nhỏ lửa.",
      "Cho đậu hũ vào, đun thêm 15 phút.",
      "Rắc hành lá, tắt bếp. Ăn nóng với cơm trắng.",
    ],
    stepsKo: [
      "김치와 삼겹살을 한입 크기로 자릅니다.",
      "냄비에 참기름을 두르고 김치를 3분 볶아 향을 냅니다.",
      "삼겹살을 넣고 겉면이 익을 때까지 볶습니다.",
      "마늘·고추장·물을 넣고 끓이다가 약불로 줄입니다.",
      "두부를 넣고 15분 더 끓입니다.",
      "대파를 올리고 불을 끕니다. 흰밥과 함께 따뜻하게 드세요.",
    ],
    tipsVi: "Kimchi càng chua càng ngon. Có thể thay thịt ba chỉ bằng cá ngừ hộp.",
    tipsKo: "김치가 신 김치일수록 맛있어요. 참치캔으로 대체 가능.",
  },

  "doenjang-jjigae": {
    difficulty: 2, servings: 2, totalMinutes: 25,
    ingredientsVi: [
      "2 muỗng canh tương đậu nành Hàn (된장)", "1 miếng đậu hũ", "1 quả bí ngòi",
      "1 củ khoai tây", "1 cây hành lá", "2 tép tỏi", "500ml nước",
    ],
    ingredientsKo: [
      "된장 2큰술", "두부 한 모", "애호박 1개", "감자 1개",
      "대파 1대", "마늘 2쪽", "물 500ml",
    ],
    stepsVi: [
      "Cắt đậu hũ, bí ngòi, khoai tây thành khối nhỏ.",
      "Đun sôi nước, hòa tan tương đậu vào.",
      "Cho khoai tây vào nấu 5 phút.",
      "Thêm bí ngòi và tỏi, nấu 5 phút.",
      "Cho đậu hũ và hành lá, đun thêm 3 phút. Tắt bếp.",
    ],
    stepsKo: [
      "두부·애호박·감자를 작게 썹니다.",
      "끓는 물에 된장을 풀어줍니다.",
      "감자를 넣고 5분 익힙니다.",
      "애호박과 마늘을 넣고 5분 더 끓입니다.",
      "두부와 대파를 넣고 3분 후 불을 끕니다.",
    ],
    tipsVi: "Tương đậu Hàn có vị mạnh hơn miso Nhật — bắt đầu với 1 muỗng nếu bạn lần đầu thử.",
    tipsKo: "된장은 일본 미소보다 진해서 처음이면 1큰술부터 시작하세요.",
  },

  "soondubu": {
    difficulty: 2, servings: 1, totalMinutes: 20,
    ingredientsVi: [
      "300g đậu hũ non Hàn (순두부)", "100g hải sản (tôm, hến) hoặc thịt heo",
      "2 muỗng canh gochugaru (ớt bột Hàn)", "1 muỗng canh dầu", "2 tép tỏi",
      "1 quả trứng", "300ml nước", "1 cây hành lá",
    ],
    ingredientsKo: [
      "순두부 300g", "해물 또는 돼지고기 100g", "고춧가루 2큰술",
      "기름 1큰술", "마늘 2쪽", "계란 1개", "물 300ml", "대파 1대",
    ],
    stepsVi: [
      "Đun nóng nồi đất với dầu, phi tỏi và gochugaru 1 phút.",
      "Cho hải sản/thịt vào xào.",
      "Đổ nước, đun sôi.",
      "Thêm đậu hũ non (đập vỡ bằng thìa).",
      "Đập trứng vào giữa, không khuấy. Đun 2 phút.",
      "Rắc hành lá, ăn ngay khi còn nóng sôi.",
    ],
    stepsKo: [
      "뚝배기에 기름을 두르고 마늘·고춧가루를 1분 볶습니다.",
      "해물이나 돼지고기를 넣고 볶습니다.",
      "물을 붓고 끓입니다.",
      "순두부를 숟가락으로 깨뜨리며 넣습니다.",
      "가운데에 계란을 깨뜨려 넣고 젓지 않은 채 2분 더 끓입니다.",
      "대파를 올리고 펄펄 끓을 때 바로 드세요.",
    ],
    tipsVi: "Đậu hũ non có sẵn ở H Mart hoặc cửa hàng Hàn. Phải dùng đậu non, không phải đậu thường.",
    tipsKo: "순두부는 일반 두부와 달라요. H마트에서 구할 수 있어요.",
  },

  "budae": {
    difficulty: 2, servings: 3, totalMinutes: 35,
    ingredientsVi: [
      "2 gói mì gói Hàn (라면)", "200g xúc xích thái lát", "200g ham/spam",
      "1 chén kimchi", "1 miếng đậu hũ", "1 muỗng canh gochujang",
      "1 muỗng canh gochugaru", "800ml nước dùng (gà hoặc rau)",
      "Phô mai lát (tùy chọn)", "Hành lá",
    ],
    ingredientsKo: [
      "라면 2봉지", "비엔나 소시지 200g", "햄/스팸 200g",
      "김치 한 컵", "두부 한 모", "고추장 1큰술", "고춧가루 1큰술",
      "육수 800ml", "치즈 (선택)", "대파",
    ],
    stepsVi: [
      "Bày kimchi, xúc xích, ham, đậu hũ trong nồi rộng.",
      "Cho gochujang và gochugaru vào.",
      "Đổ nước dùng, đun sôi.",
      "Khi sôi, thả mì vào nấu 3-4 phút.",
      "Cuối cùng đặt phô mai lên trên, tắt bếp.",
      "Ăn ngay khi phô mai vừa chảy.",
    ],
    stepsKo: [
      "김치·소시지·햄·두부를 넓은 냄비에 보기 좋게 깔아줍니다.",
      "고추장과 고춧가루를 넣습니다.",
      "육수를 붓고 끓입니다.",
      "끓으면 라면을 넣고 3-4분 끓입니다.",
      "마지막에 치즈를 올리고 불을 끕니다.",
      "치즈가 살짝 녹으면 바로 드세요.",
    ],
    tipsVi: "Đây là 'lẩu kiểu quân đội' — món nhậu đêm khuya với bạn bè. Nồi càng đầy nguyên liệu càng vui.",
    tipsKo: "친구들과 와글와글 즐기는 야식. 재료 풍성하게.",
  },

  "galbitang": {
    difficulty: 3, servings: 4, totalMinutes: 180,
    ingredientsVi: [
      "1kg sườn bò", "1 củ hành tây", "1 cây hành lá to", "5 tép tỏi",
      "1 lát gừng", "Miến khoai lang (tùy chọn)", "Muối, tiêu",
    ],
    ingredientsKo: [
      "소갈비 1kg", "양파 1개", "대파 1대", "마늘 5쪽",
      "생강 1조각", "당면 (선택)", "소금·후추",
    ],
    stepsVi: [
      "Ngâm sườn bò trong nước lạnh 1 tiếng để loại máu.",
      "Đun sôi sườn 10 phút, đổ nước đầu đi.",
      "Cho lại sườn vào nồi với 2 lít nước, hành tây, tỏi, gừng.",
      "Đun nhỏ lửa 2 tiếng cho mềm và nước dùng đậm đà.",
      "Vớt sườn ra, lọc nước dùng. Nêm muối, tiêu.",
      "Cho sườn lại vào, đun với hành lá. Có thể thêm miến.",
    ],
    stepsKo: [
      "소갈비를 찬물에 1시간 핏물을 빼줍니다.",
      "끓는 물에 10분 데치고 물을 버립니다.",
      "물 2리터, 양파, 마늘, 생강을 넣고 다시 끓입니다.",
      "약불에서 2시간 푹 고아 진한 국물을 냅니다.",
      "갈비를 건지고 국물을 거른 뒤 소금·후추로 간합니다.",
      "갈비를 다시 넣고 대파를 추가. 당면을 곁들여도 좋아요.",
    ],
    tipsVi: "Mất thời gian nhưng đáng — nước dùng càng ninh lâu càng ngọt.",
    tipsKo: "시간이 걸리지만 그만한 가치가 있어요 — 오래 끓일수록 진합니다.",
  },

  "seolleongtang": {
    difficulty: 3, servings: 4, totalMinutes: 360,
    ingredientsVi: [
      "1kg xương bò", "500g thịt bò (bắp, gân)", "Muối, tiêu", "Hành lá",
      "Cơm trắng để ăn kèm",
    ],
    ingredientsKo: [
      "사골 1kg", "양지·우둔 500g", "소금·후추", "대파", "흰밥",
    ],
    stepsVi: [
      "Ngâm xương trong nước lạnh 4 tiếng, thay nước 2 lần.",
      "Đun sôi xương 15 phút, đổ nước đầu đi.",
      "Cho xương lại vào nồi lớn với 3 lít nước, đun lửa nhỏ 6 tiếng.",
      "Khi nước trắng đục, cho thịt bò vào nấu 1 tiếng nữa.",
      "Vớt thịt ra, thái lát mỏng. Lọc nước dùng.",
      "Múc nước dùng vào tô, đặt thịt thái lát lên. Rắc hành lá. Nêm muối, tiêu khi ăn.",
    ],
    stepsKo: [
      "사골을 찬물에 4시간 핏물 빼고 물을 2번 갈아줍니다.",
      "끓는 물에 15분 데치고 첫 물을 버립니다.",
      "물 3리터에 사골을 넣고 약불로 6시간 푹 우립니다.",
      "국물이 뽀얗게 되면 양지·우둔을 넣고 1시간 더 끓입니다.",
      "고기를 건져 얇게 썰고 국물을 거릅니다.",
      "그릇에 국물을 담고 고기를 올린 뒤 대파를 뿌립니다. 먹을 때 소금·후추로 간하세요.",
    ],
    tipsVi: "Đây là món cần kiên nhẫn — nhưng đầu tuần nấu 1 nồi to đủ ăn 4 ngày.",
    tipsKo: "주말에 한 번 끓이면 4일 먹을 수 있어요.",
  },

  "samgyetang": {
    difficulty: 3, servings: 1, totalMinutes: 90,
    ingredientsVi: [
      "1 con gà mái nhỏ (500-700g)", "100g gạo nếp", "1 củ nhân sâm khô",
      "5 quả táo đỏ (đại táo)", "5 hạt dẻ", "5 tép tỏi", "Muối, tiêu",
    ],
    ingredientsKo: [
      "영계 1마리 (500-700g)", "찹쌀 100g", "수삼 1뿌리",
      "대추 5알", "밤 5알", "마늘 5쪽", "소금·후추",
    ],
    stepsVi: [
      "Rửa sạch gà, để ráo.",
      "Vo gạo nếp, ngâm 30 phút.",
      "Nhồi vào bụng gà: gạo nếp, sâm, táo đỏ, hạt dẻ, tỏi.",
      "Buộc chân gà bằng dây. Cho vào nồi đất ngập nước.",
      "Đun lửa nhỏ 1 tiếng cho gà mềm.",
      "Ăn nóng từ nồi đất, nêm muối tiêu khi ăn.",
    ],
    stepsKo: [
      "영계를 깨끗이 씻어 물기를 빼요.",
      "찹쌀을 씻어 30분 불립니다.",
      "닭 배 속에 찹쌀·수삼·대추·밤·마늘을 채웁니다.",
      "다리를 실로 묶고 뚝배기에 닭이 잠기도록 물을 부어요.",
      "약불에서 1시간 푹 고아줍니다.",
      "뜨거운 뚝배기째로 드세요. 먹을 때 소금·후추로 간하세요.",
    ],
    tipsVi: "Món bồi bổ truyền thống ăn vào ngày nóng nhất năm (복날) — người Hàn tin 'lấy nóng trị nóng'.",
    tipsKo: "복날에 먹는 보양식 — '이열치열'.",
  },

  "maeuntang": {
    difficulty: 3, servings: 3, totalMinutes: 40,
    ingredientsVi: [
      "500g cá tươi (cá vược, cá hồi)", "1 củ củ cải Hàn", "1 quả bí ngòi",
      "2 muỗng canh gochugaru", "2 tép tỏi", "1 cây hành lá", "Muối",
    ],
    ingredientsKo: [
      "생선 500g", "무 1개", "애호박 1개", "고춧가루 2큰술",
      "마늘 2쪽", "대파 1대", "소금",
    ],
    stepsVi: [
      "Cá rửa sạch, cắt khúc.",
      "Đun sôi nước với củ cải thái lát, nấu 10 phút.",
      "Thêm gochugaru, tỏi.",
      "Cho cá vào, đun nhỏ lửa 15 phút.",
      "Thêm bí ngòi, hành lá, nêm muối. Đun thêm 5 phút.",
    ],
    stepsKo: [
      "생선을 손질해서 토막을 냅니다.",
      "물에 무를 썰어 넣고 10분 끓입니다.",
      "고춧가루와 마늘을 넣습니다.",
      "생선을 넣고 약불에서 15분 끓입니다.",
      "애호박과 대파를 넣고 소금으로 간한 뒤 5분 더 끓입니다.",
    ],
  },

  "yukgaejang": {
    difficulty: 3, servings: 4, totalMinutes: 90,
    ingredientsVi: [
      "500g thịt bò (bắp)", "100g giá đỗ", "100g rau dớn (고사리, có ở H Mart)",
      "2 cây hành lá to", "3 muỗng canh gochugaru", "3 tép tỏi",
      "2 muỗng canh dầu mè", "Muối, xì dầu",
    ],
    ingredientsKo: [
      "양지머리 500g", "숙주 100g", "고사리 100g", "대파 2대",
      "고춧가루 3큰술", "마늘 3쪽", "참기름 2큰술", "소금·간장",
    ],
    stepsVi: [
      "Luộc thịt bò 1 tiếng, để nguội rồi xé sợi. Giữ lại nước luộc.",
      "Trong tô lớn, trộn thịt xé với gochugaru, tỏi, dầu mè, xì dầu.",
      "Đun nồi nước luộc thịt, cho rau dớn và giá đỗ vào.",
      "Cho hỗn hợp thịt vào, đun 30 phút.",
      "Thêm hành lá to thái khúc. Nêm muối. Tắt bếp.",
    ],
    stepsKo: [
      "양지를 1시간 삶아 식힌 뒤 결대로 찢어요. 육수는 보관.",
      "큰 그릇에 찢은 고기와 고춧가루·마늘·참기름·간장을 무칩니다.",
      "육수에 고사리와 숙주를 넣어 끓입니다.",
      "양념한 고기를 넣고 30분 더 끓입니다.",
      "대파를 큼직하게 썰어 넣고 소금으로 간한 뒤 불을 끕니다.",
    ],
  },

  "gamjatang": {
    difficulty: 3, servings: 4, totalMinutes: 120,
    ingredientsVi: [
      "1kg xương sống heo (등뼈)", "4 củ khoai tây", "1 nắm lá tía tô",
      "3 muỗng canh gochujang", "2 muỗng canh gochugaru", "5 tép tỏi", "2 cây hành lá",
    ],
    ingredientsKo: [
      "돼지 등뼈 1kg", "감자 4개", "들깻잎 한 줌",
      "고추장 3큰술", "고춧가루 2큰술", "마늘 5쪽", "대파 2대",
    ],
    stepsVi: [
      "Ngâm xương heo trong nước lạnh 1 tiếng để loại máu.",
      "Luộc qua 10 phút, đổ nước đi.",
      "Cho xương vào nồi với 2 lít nước, đun nhỏ 1 tiếng.",
      "Thêm khoai tây, gochujang, gochugaru, tỏi. Đun 30 phút.",
      "Cho hành lá và lá tía tô. Tắt bếp.",
    ],
    stepsKo: [
      "등뼈를 찬물에 1시간 핏물을 빼고 10분 데쳐요.",
      "물 2리터에 약불로 1시간 끓입니다.",
      "감자·고추장·고춧가루·마늘을 넣고 30분 더 끓입니다.",
      "대파와 들깻잎을 넣고 불을 끕니다.",
    ],
  },

  "tteokguk": {
    difficulty: 1, servings: 2, totalMinutes: 25,
    ingredientsVi: [
      "200g bánh gạo lát (떡국떡)", "200g thịt bò (bắp xé)", "2 quả trứng",
      "1 lá rong biển khô", "2 cây hành lá", "Xì dầu, muối, tỏi băm",
    ],
    ingredientsKo: [
      "떡국떡 200g", "양지 200g", "계란 2개", "김 1장", "대파 2대", "간장·소금·다진 마늘",
    ],
    stepsVi: [
      "Ngâm bánh gạo trong nước lạnh 30 phút.",
      "Luộc thịt bò 30 phút, xé sợi. Giữ nước luộc.",
      "Đập trứng, đánh tan, tráng mỏng, cuộn lại và thái sợi.",
      "Đun sôi nước dùng, thêm tỏi, xì dầu.",
      "Cho bánh gạo vào nấu 5 phút (bánh nổi lên).",
      "Múc ra tô, trang trí với thịt xé, trứng, rong biển nướng vụn, hành lá.",
    ],
    stepsKo: [
      "떡을 찬물에 30분 불립니다.",
      "양지를 30분 삶아 결대로 찢고 육수는 사용.",
      "계란 지단을 부쳐 곱게 썹니다.",
      "육수에 다진 마늘·간장으로 간하고 끓입니다.",
      "떡을 넣고 5분 끓이면 떡이 떠오릅니다.",
      "그릇에 담고 양지·지단·구운 김·대파를 올려요.",
    ],
    tipsVi: "Món Tết Hàn Quốc — ăn 떡국 nghĩa là 'thêm 1 tuổi'.",
    tipsKo: "설날 음식 — 떡국 한 그릇 = 한 살.",
  },

  "tteokmanduguk": {
    difficulty: 2, servings: 2, totalMinutes: 30,
    ingredientsVi: [
      "200g bánh gạo lát", "10-12 viên bánh bao Hàn (만두)", "200g thịt bò xé",
      "2 trứng", "Rong biển khô", "Hành lá", "Tỏi, xì dầu",
    ],
    ingredientsKo: [
      "떡국떡 200g", "만두 10-12개", "양지 200g", "계란 2개", "김", "대파", "마늘·간장",
    ],
    stepsVi: [
      "Như công thức 떡국, chỉ thêm bánh bao vào sau khi cho bánh gạo 2 phút.",
      "Đun cho đến khi cả bánh gạo và bánh bao nổi lên.",
      "Trang trí và ăn nóng.",
    ],
    stepsKo: [
      "떡국 레시피와 같지만 떡 넣고 2분 후 만두 추가.",
      "떡과 만두가 모두 떠오를 때까지 끓입니다.",
      "고명 올리고 따뜻하게 드세요.",
    ],
  },

  "miyeokguk": {
    difficulty: 1, servings: 2, totalMinutes: 25,
    ingredientsVi: [
      "20g rong biển khô (미역)", "200g thịt bò xé hoặc hến tươi",
      "1 muỗng canh xì dầu", "1 muỗng canh dầu mè", "2 tép tỏi", "Muối",
    ],
    ingredientsKo: [
      "건미역 20g", "양지 또는 홍합 200g", "간장 1큰술", "참기름 1큰술", "마늘 2쪽", "소금",
    ],
    stepsVi: [
      "Ngâm rong biển trong nước 15 phút, vắt nhẹ, cắt khúc.",
      "Trong nồi, xào thịt bò với dầu mè 2 phút.",
      "Cho rong biển vào xào 2 phút.",
      "Đổ 800ml nước, đun sôi.",
      "Thêm tỏi, xì dầu. Đun nhỏ 15 phút. Nêm muối.",
    ],
    stepsKo: [
      "건미역을 15분 불려 짠 뒤 한입 크기로 자릅니다.",
      "냄비에 참기름과 양지를 2분 볶습니다.",
      "미역을 넣고 2분 더 볶습니다.",
      "물 800ml를 붓고 끓입니다.",
      "마늘·간장을 넣고 약불로 15분. 소금으로 간을 맞춰요.",
    ],
    tipsVi: "Món sinh nhật của người Hàn. Phụ nữ sau sinh cũng ăn món này để bổ máu.",
    tipsKo: "한국인의 생일 음식. 산모식으로도 먹어요.",
  },

  "dakhanmari": {
    difficulty: 2, servings: 4, totalMinutes: 75,
    ingredientsVi: [
      "1 con gà nguyên (1.2kg)", "1 củ tỏi nguyên (10 tép)",
      "1 cây hành lá lớn", "1 củ khoai tây", "Mì udon", "Muối",
      "Sốt chấm: gochujang + xì dầu + giấm + mù tạt vàng",
    ],
    ingredientsKo: [
      "닭 1마리 (1.2kg)", "통마늘 1통", "대파 1대", "감자 1개",
      "칼국수 면", "소금", "양념장: 고추장+간장+식초+겨자",
    ],
    stepsVi: [
      "Rửa gà, cho vào nồi lớn với tỏi, hành lá, khoai tây.",
      "Đổ nước ngập gà, đun sôi rồi hạ lửa nhỏ.",
      "Đun 1 tiếng cho gà mềm, da rời xương.",
      "Vớt gà ra, xé thành miếng vừa ăn.",
      "Chấm với sốt. Sau khi ăn hết gà, cho mì udon vào nước dùng nấu 5 phút.",
    ],
    stepsKo: [
      "닭을 깨끗이 씻어 큰 냄비에 통마늘·대파·감자와 함께 넣어요.",
      "닭이 잠기도록 물을 붓고 끓입니다.",
      "1시간 푹 고아 닭이 부드러워지게 합니다.",
      "닭을 건져 한입 크기로 찢습니다.",
      "양념장에 찍어 먹고, 마지막에 칼국수 면을 5분 끓여 드세요.",
    ],
    tipsVi: "Đặc sản phố cổ Dongdaemun (Seoul) — ấm áp, no bụng cho cả gia đình.",
    tipsKo: "동대문 명물 — 가족이 함께하는 따뜻한 한 그릇.",
  },

  "gomtang": {
    difficulty: 3, servings: 4, totalMinutes: 360,
    ingredientsVi: [
      "1kg xương bò (gân, sụn)", "300g thịt bò (bắp)", "Muối, tiêu", "Hành lá", "Cơm",
    ],
    ingredientsKo: [
      "사골·도가니 1kg", "양지 300g", "소금·후추", "대파", "흰밥",
    ],
    stepsVi: [
      "Tương tự 설렁탕 nhưng nước dùng trong hơn — KHÔNG ninh quá kỹ để giữ độ trong.",
      "Ninh xương 5 tiếng, không dùng lửa lớn (giữ nước trong).",
      "Lọc kỹ. Thái thịt bò mỏng, đặt lên cơm trong tô. Chan nước dùng nóng.",
      "Nêm muối tiêu khi ăn. Rắc hành lá.",
    ],
    stepsKo: [
      "설렁탕보다 더 맑게 끓이는 게 핵심 — 약불 유지.",
      "사골을 5시간 끓입니다.",
      "걸러내고 양지를 얇게 썰어 밥 위에 올린 뒤 국물을 부어요.",
      "먹을 때 소금·후추로 간하고 대파를 뿌립니다.",
    ],
  },

  // === Grilled meats ===
  "samgyeopsal": {
    difficulty: 1, servings: 2, totalMinutes: 25,
    ingredientsVi: [
      "500g thịt ba chỉ heo thái dày 1cm", "Lá xà lách", "Lá tía tô (깻잎)",
      "Tỏi sống thái lát", "Ớt xanh thái lát",
      "쌈장 (mua sẵn) hoặc tự làm: 1 muỗng canh doenjang + 1/2 muỗng canh gochujang + 1 muỗng canh dầu mè + tỏi băm",
    ],
    ingredientsKo: [
      "삼겹살 500g (1cm 두께)", "상추", "깻잎", "마늘", "풋고추",
      "쌈장: 된장 1큰술 + 고추장 1/2큰술 + 참기름 1큰술 + 다진 마늘",
    ],
    stepsVi: [
      "Đun nóng vỉ nướng (hoặc chảo gang) đến rất nóng.",
      "Đặt thịt lên, KHÔNG di chuyển trong 3 phút (để vàng giòn).",
      "Lật, nướng thêm 2 phút bên kia.",
      "Cắt miếng vừa ăn bằng kéo (kiểu Hàn).",
      "Cuốn: lá xà lách + miếng thịt + tỏi sống + chấm 쌈장 + cuộn ăn 1 lần.",
    ],
    stepsKo: [
      "팬을 매우 뜨겁게 달궈주세요.",
      "삼겹살을 올리고 3분간 움직이지 마세요 (노릇하게).",
      "뒤집어서 2분 더 굽습니다.",
      "가위로 한입 크기로 자릅니다.",
      "상추 + 고기 + 생마늘 + 쌈장으로 쌈을 싸 한입에!",
    ],
    tipsVi: "QUY TẮC: cuốn 1 miếng = ăn 1 lần (không cắn 2 lần). Đó là quy tắc lịch sự ở Hàn.",
    tipsKo: "쌈은 한입에! 두 번 베어 물지 않는 게 매너.",
  },

  "galbi": {
    difficulty: 3, servings: 3, totalMinutes: 90,
    ingredientsVi: [
      "1kg sườn bò (galbi cut)",
      "Sốt ướp: 5 muỗng canh xì dầu + 3 muỗng canh đường nâu + 2 muỗng canh dầu mè + 1 quả lê (hoặc táo) xay + 5 tép tỏi băm + 1 muỗng cà phê tiêu + 2 muỗng canh rượu nấu (mirin)",
    ],
    ingredientsKo: [
      "소갈비 1kg",
      "양념: 간장 5큰술 + 흑설탕 3큰술 + 참기름 2큰술 + 배(또는 사과) 갈은 것 1개 + 다진 마늘 5쪽 + 후추 1작은술 + 미림 2큰술",
    ],
    stepsVi: [
      "Ngâm sườn trong nước lạnh 30 phút để loại máu.",
      "Trộn sốt ướp đều.",
      "Ướp sườn trong sốt 1 tiếng (tốt hơn nếu để qua đêm).",
      "Đun nóng vỉ, nướng sườn 4 phút mỗi mặt.",
      "Cuốn với rau xà lách như samgyeopsal.",
    ],
    stepsKo: [
      "갈비를 찬물에 30분 핏물을 뺍니다.",
      "양념을 골고루 섞어요.",
      "갈비를 양념에 1시간 재웁니다 (하룻밤이면 더 좋음).",
      "팬에 양면을 4분씩 굽습니다.",
      "상추쌈으로 즐기세요.",
    ],
  },

  "bulgogi": {
    difficulty: 2, servings: 3, totalMinutes: 40,
    ingredientsVi: [
      "500g thịt bò thái mỏng (rib eye)", "1 quả lê (hoặc táo) xay nhuyễn",
      "5 muỗng canh xì dầu", "3 muỗng canh đường", "2 muỗng canh dầu mè",
      "5 tép tỏi băm", "1 củ hành tây thái lát", "Hành lá",
    ],
    ingredientsKo: [
      "소고기 (불고기용) 500g", "배 갈은 것 1개", "간장 5큰술",
      "설탕 3큰술", "참기름 2큰술", "다진 마늘 5쪽", "양파 1개", "대파",
    ],
    stepsVi: [
      "Trộn lê xay với xì dầu, đường, dầu mè, tỏi.",
      "Ướp thịt bò trong sốt 20 phút.",
      "Đun nóng chảo lớn, xào hành tây 2 phút.",
      "Cho thịt vào xào lửa to 5 phút.",
      "Rắc hành lá. Ăn với cơm.",
    ],
    stepsKo: [
      "배 갈은 것에 간장·설탕·참기름·마늘을 섞어요.",
      "소고기를 양념에 20분 재웁니다.",
      "팬에 양파를 2분 볶고",
      "고기를 넣어 센 불에 5분 볶아요.",
      "대파를 뿌립니다. 흰밥과 함께.",
    ],
  },

  "dakgalbi": {
    difficulty: 2, servings: 3, totalMinutes: 50,
    ingredientsVi: [
      "600g đùi gà thái khối", "200g bắp cải thái lát", "1 củ khoai lang thái lát",
      "100g bánh tteok", "Hành lá",
      "Sốt: 3 muỗng canh gochujang + 2 muỗng canh gochugaru + 2 muỗng canh xì dầu + 2 muỗng canh đường + tỏi",
    ],
    ingredientsKo: [
      "닭다리살 600g", "양배추 200g", "고구마 1개", "떡 100g", "대파",
      "양념: 고추장 3 + 고춧가루 2 + 간장 2 + 설탕 2 + 마늘",
    ],
    stepsVi: [
      "Ướp gà trong sốt 30 phút.",
      "Đun nóng chảo lớn (hoặc nồi), cho gà ướp vào xào 5 phút.",
      "Thêm khoai lang, bắp cải, tteok. Xào 10 phút.",
      "Đậy nắp, để gà chín hẳn (5 phút nữa).",
      "Rắc hành lá. Có thể thêm phô mai để 'cheese dakgalbi' kiểu Chuncheon.",
    ],
    stepsKo: [
      "닭을 양념에 30분 재워요.",
      "큰 팬에 양념 닭을 5분 볶습니다.",
      "고구마·양배추·떡을 넣고 10분 볶아요.",
      "뚜껑을 덮고 5분 더 익힙니다.",
      "대파를 뿌립니다. 치즈를 추가하면 춘천식 치즈닭갈비!",
    ],
  },

  "gopchang": {
    difficulty: 3, servings: 2, totalMinutes: 45,
    ingredientsVi: [
      "400g lòng bò (đã làm sạch)", "1 muỗng canh gochujang",
      "1 muỗng canh xì dầu", "2 tép tỏi", "1 củ hành tây", "Tiêu, dầu mè",
    ],
    ingredientsKo: [
      "곱창 400g", "고추장 1큰술", "간장 1큰술", "마늘 2쪽", "양파 1개", "후추·참기름",
    ],
    stepsVi: [
      "Lòng đã làm sạch, cắt khúc, ướp với gochujang, xì dầu, tỏi 20 phút.",
      "Đun nóng chảo gang/vỉ, nướng lòng 5 phút.",
      "Thêm hành tây, đảo đều.",
      "Rắc tiêu, dầu mè. Ăn nóng.",
    ],
    stepsKo: [
      "손질된 곱창을 양념에 20분 재워요.",
      "팬을 달궈 곱창을 5분 굽습니다.",
      "양파를 추가해 골고루 섞어요.",
      "후추·참기름을 뿌립니다.",
    ],
  },

  "tteokgalbi": {
    difficulty: 2, servings: 4, totalMinutes: 40,
    ingredientsVi: [
      "500g thịt bò xay", "1 củ hành tây băm", "3 tép tỏi băm",
      "3 muỗng canh xì dầu", "2 muỗng canh đường nâu", "1 muỗng canh dầu mè",
      "1 lòng đỏ trứng", "2 muỗng canh bột năng",
    ],
    ingredientsKo: [
      "소고기 다짐육 500g", "양파 다진 것 1개", "다진 마늘 3쪽",
      "간장 3큰술", "흑설탕 2큰술", "참기름 1큰술", "노른자 1개", "전분 2큰술",
    ],
    stepsVi: [
      "Trộn đều tất cả nguyên liệu trong tô lớn.",
      "Nặn thành miếng tròn dày 1.5cm.",
      "Đun nóng chảo, áp chảo mỗi mặt 4 phút.",
      "Hạ lửa, đậy nắp 3 phút cho chín đều.",
      "Ăn với cơm và rau cuốn.",
    ],
    stepsKo: [
      "모든 재료를 큰 그릇에 넣고 잘 섞어요.",
      "1.5cm 두께로 둥글게 빚어요.",
      "팬에 양면을 4분씩 굽습니다.",
      "약불로 줄이고 뚜껑을 덮어 3분 더 익혀요.",
      "흰밥과 쌈채소와 함께.",
    ],
  },

  "bossam": {
    difficulty: 2, servings: 4, totalMinutes: 60,
    ingredientsVi: [
      "800g thịt ba chỉ heo (nguyên miếng)", "1 củ tỏi", "1 lát gừng", "1 muỗng canh đường",
      "1 cốc cà phê đen (để khử mùi)", "Lá xà lách, kimchi tươi", "쌈장",
    ],
    ingredientsKo: [
      "통삼겹살 800g", "마늘 1통", "생강 1조각", "설탕 1큰술", "인스턴트 커피 1봉",
      "상추·생굴김치", "쌈장",
    ],
    stepsVi: [
      "Đun nồi nước với tỏi, gừng, đường, cà phê đen.",
      "Cho thịt ba chỉ vào, đun nhỏ lửa 50 phút.",
      "Vớt thịt ra, để nguội 5 phút, thái lát mỏng.",
      "Cuốn với lá xà lách, kimchi, 쌈장. Ăn 1 miếng.",
    ],
    stepsKo: [
      "물에 마늘·생강·설탕·커피를 넣고 끓입니다.",
      "통삼겹살을 넣고 약불에서 50분 삶아요.",
      "건져서 5분 식힌 뒤 얇게 썰어요.",
      "상추·김치·쌈장과 함께 한입 쌈으로.",
    ],
    tipsVi: "Cà phê đen khử mùi heo — bí quyết của các chợ Hàn.",
    tipsKo: "커피가 누린내 잡아줌 — 시장 비결.",
  },

  "jokbal": {
    difficulty: 3, servings: 4, totalMinutes: 180,
    ingredientsVi: [
      "1.5kg chân giò heo", "1 cốc xì dầu", "1 cốc nước tương đặc",
      "1 củ tỏi", "1 lát gừng", "5 quả táo đỏ", "5 muỗng canh đường",
      "1 cốc cà phê đen", "Quế, hồi, gừng",
    ],
    ingredientsKo: [
      "돼지 족발 1.5kg", "간장 1컵", "진간장 1컵", "마늘 1통", "생강", "대추 5알",
      "설탕 5큰술", "커피 1컵", "계피·팔각·생강",
    ],
    stepsVi: [
      "Ngâm chân giò trong nước 1 tiếng để loại máu.",
      "Đun sôi chân giò 10 phút, đổ nước đi.",
      "Cho lại vào nồi với tất cả gia vị, ngập nước.",
      "Đun nhỏ 2.5 tiếng cho thịt mềm.",
      "Vớt ra, để nguội, thái lát mỏng.",
      "Ăn với 쌈장 và lá xà lách.",
    ],
    stepsKo: [
      "족발을 찬물에 1시간 핏물을 뺍니다.",
      "끓는 물에 10분 데친 뒤 물을 버려요.",
      "냄비에 모든 재료를 넣고 물을 자작하게 부어요.",
      "약불에서 2.5시간 푹 졸입니다.",
      "건져 식힌 뒤 얇게 썰어요.",
      "쌈장과 상추로 쌈 싸 드세요.",
    ],
  },

  // === Rice ===
  "bibimbap": {
    difficulty: 2, servings: 1, totalMinutes: 30,
    ingredientsVi: [
      "1 chén cơm trắng", "1 quả trứng", "100g thịt bò xay",
      "Rau: cà rốt thái sợi, giá đỗ, rau bina, nấm — mỗi loại 50g",
      "1 muỗng canh gochujang", "1 muỗng canh dầu mè", "Tỏi băm",
    ],
    ingredientsKo: [
      "밥 1공기", "계란 1개", "소고기 다짐육 100g",
      "당근채·콩나물·시금치·버섯 각 50g", "고추장 1큰술", "참기름 1큰술", "다진 마늘",
    ],
    stepsVi: [
      "Xào riêng từng loại rau với chút dầu, tỏi, muối.",
      "Xào thịt bò với xì dầu và tỏi.",
      "Trứng ốp la để lòng đỏ chảy.",
      "Cho cơm vào tô, xếp các loại rau và thịt theo vòng tròn.",
      "Đặt trứng ở giữa, thêm gochujang và dầu mè.",
      "Trộn đều khi ăn.",
    ],
    stepsKo: [
      "각 야채를 따로 기름·마늘·소금으로 볶아요.",
      "소고기는 간장과 마늘로 볶아요.",
      "계란프라이 노른자가 흐르게.",
      "그릇에 밥을 담고 야채와 고기를 둘러 담아요.",
      "가운데에 계란을 올리고 고추장·참기름을 더해요.",
      "먹기 전에 잘 비벼주세요.",
    ],
  },

  "dolsot": {
    difficulty: 2, servings: 1, totalMinutes: 35,
    ingredientsVi: [
      "Như công thức 비빔밥, thêm: 1 nồi đá Hàn (돌솥) + dầu mè để bôi đáy nồi",
    ],
    ingredientsKo: [
      "비빔밥과 같음 + 돌솥 + 참기름 (바닥에 두를 것)",
    ],
    stepsVi: [
      "Đun nóng nồi đá trên bếp 5 phút.",
      "Bôi dầu mè khắp đáy và thành nồi.",
      "Cho cơm vào, ấn nhẹ để cơm tiếp xúc đáy nồi.",
      "Xếp rau và thịt như 비빔밥.",
      "Đặt trứng giữa, gochujang.",
      "Đun thêm 3 phút trên lửa nhỏ — đáy cơm sẽ giòn (누룽지).",
    ],
    stepsKo: [
      "돌솥을 5분 달궈요.",
      "바닥과 옆면에 참기름을 발라요.",
      "밥을 담고 살짝 눌러 바닥에 닿게.",
      "야채와 고기를 비빔밥처럼 올려요.",
      "가운데 계란·고추장.",
      "약불에 3분 더 — 바닥이 누룽지로 변해요.",
    ],
    tipsVi: "Phần cơm cháy giòn ở đáy là điểm thú vị nhất.",
    tipsKo: "바닥의 누룽지가 별미.",
  },

  "kimchi-bokkeum": {
    difficulty: 1, servings: 1, totalMinutes: 15,
    ingredientsVi: [
      "1 chén cơm nguội", "1 chén kimchi chua", "100g ham/thịt heo xay",
      "1 quả trứng", "1 muỗng canh dầu mè", "Hành lá",
    ],
    ingredientsKo: [
      "찬밥 1공기", "신김치 1컵", "햄/돼지고기 100g", "계란 1개", "참기름 1큰술", "대파",
    ],
    stepsVi: [
      "Cắt nhỏ kimchi và ham.",
      "Xào ham 2 phút, cho kimchi vào xào 3 phút.",
      "Thêm cơm, xào đều với dầu mè.",
      "Ốp la trứng riêng, đặt lên cơm.",
      "Rắc hành lá. Ăn ngay.",
    ],
    stepsKo: [
      "김치와 햄을 잘게 썰어요.",
      "햄을 2분 볶고 김치를 3분 더 볶아요.",
      "밥과 참기름을 넣고 골고루 볶아요.",
      "계란프라이를 따로 부쳐 위에 올려요.",
      "대파를 뿌립니다.",
    ],
  },

  "hoedeop": {
    difficulty: 1, servings: 1, totalMinutes: 15,
    ingredientsVi: [
      "1 chén cơm trắng", "150g cá sống cắt khối (hồi, cá nục)",
      "Rau xà lách, dưa chuột thái lát, cà rốt thái sợi", "Tảo nori",
      "Sốt: 2 muỗng canh gochujang + 1 muỗng canh giấm + 1 muỗng canh đường + 1/2 muỗng canh dầu mè",
    ],
    ingredientsKo: [
      "밥 1공기", "회 150g (광어·연어 등)", "상추·오이·당근채", "김",
      "양념: 고추장 2 + 식초 1 + 설탕 1 + 참기름 1/2",
    ],
    stepsVi: [
      "Cho cơm vào tô.",
      "Xếp rau và cá sống lên cơm.",
      "Rắc tảo nori vụn.",
      "Rưới sốt lên.",
      "Trộn đều khi ăn.",
    ],
    stepsKo: [
      "그릇에 밥을 담아요.",
      "야채와 회를 보기 좋게 올립니다.",
      "김 가루를 뿌려요.",
      "양념을 끼얹습니다.",
      "잘 비벼서 드세요.",
    ],
  },

  "omurice": {
    difficulty: 2, servings: 1, totalMinutes: 25,
    ingredientsVi: [
      "1 chén cơm nguội", "1 củ hành tây băm", "1/2 củ cà rốt băm",
      "100g ham băm", "2 muỗng canh tương cà chua", "2 quả trứng",
      "1 muỗng canh sữa", "Muối, tiêu",
    ],
    ingredientsKo: [
      "찬밥 1공기", "다진 양파 1개", "다진 당근 1/2개",
      "햄 다진 것 100g", "케첩 2큰술", "계란 2개", "우유 1큰술", "소금·후추",
    ],
    stepsVi: [
      "Xào hành tây, cà rốt, ham 3 phút.",
      "Thêm cơm và tương cà, xào đều.",
      "Để cơm sang dĩa, tạo hình thuôn.",
      "Đập trứng đánh tan với sữa.",
      "Đổ trứng vào chảo nóng tráng mỏng (chỉ chín bề mặt).",
      "Phủ trứng lên cơm. Vẽ hình bằng tương cà.",
    ],
    stepsKo: [
      "양파·당근·햄을 3분 볶아요.",
      "밥과 케첩을 넣고 잘 볶아요.",
      "접시에 길쭉하게 모양을 잡아 담아요.",
      "계란과 우유를 잘 풀어요.",
      "팬에 얇게 부쳐 (반숙).",
      "지단을 밥 위에 덮고 케첩으로 그림을 그려요.",
    ],
    tipsVi: "Món được trẻ em yêu thích — vẽ mặt cười bằng tương cà.",
    tipsKo: "어린이가 좋아하는 메뉴 — 케첩으로 웃는 얼굴 그리기.",
  },

  "kimbap": {
    difficulty: 2, servings: 2, totalMinutes: 30,
    ingredientsVi: [
      "2 lá rong biển khô (김)", "2 chén cơm trắng (ấm)",
      "2 muỗng canh giấm gạo + 1 muỗng canh đường + 1 muỗng cà phê muối",
      "2 quả trứng tráng thái sợi", "Cà rốt thái sợi xào",
      "Củ cải vàng (단무지) thái sợi", "100g ham thái sợi", "Dưa chuột thái sợi",
    ],
    ingredientsKo: [
      "김 2장", "따뜻한 밥 2공기",
      "식초 2큰술 + 설탕 1큰술 + 소금 1작은술",
      "계란 지단 2개", "당근채 볶음", "단무지", "햄 100g", "오이",
    ],
    stepsVi: [
      "Trộn cơm với giấm-đường-muối.",
      "Đặt lá rong biển trên thảm cuốn (mặt sần lên).",
      "Trải cơm mỏng đều, chừa 2cm ở mép trên.",
      "Xếp các nguyên liệu thành hàng ngang ở 1/3 dưới.",
      "Cuộn chặt từ dưới lên, ép nhẹ.",
      "Bôi dầu mè ngoài, cắt thành 8 khoanh.",
    ],
    stepsKo: [
      "밥에 식초·설탕·소금을 섞어요.",
      "김을 김발 위에 거친 면이 위로 향하게.",
      "밥을 얇게 펴고 위쪽 2cm를 비워둡니다.",
      "재료를 가로로 1/3 지점에 정렬.",
      "아래부터 단단히 말아요.",
      "겉에 참기름 발라 8조각으로 자릅니다.",
    ],
  },

  // === Noodles ===
  "jjajangmyeon": {
    difficulty: 3, servings: 2, totalMinutes: 30,
    ingredientsVi: [
      "300g mì jjajangmyeon (mua sẵn)", "200g thịt heo xay",
      "1 củ hành tây thái khối", "1 củ khoai tây thái khối", "1 củ bí ngòi thái khối",
      "3 muỗng canh tương đen Hàn (춘장)", "1 muỗng canh đường", "Bột năng pha nước",
    ],
    ingredientsKo: [
      "짜장면 300g", "돼지고기 다짐육 200g",
      "양파·감자·애호박 깍둑썰기", "춘장 3큰술", "설탕 1큰술", "전분물",
    ],
    stepsVi: [
      "Phi tương đen với dầu 5 phút (rất quan trọng — bỏ bước này tương sẽ đắng).",
      "Xào thịt heo, sau đó cho hành tây vào xào 2 phút.",
      "Thêm khoai tây, bí ngòi. Xào 5 phút.",
      "Cho tương đen đã phi vào, thêm chút nước và đường. Đun 10 phút.",
      "Cho bột năng pha nước để sệt sốt.",
      "Luộc mì đúng thời gian gói. Đặt sốt lên trên.",
    ],
    stepsKo: [
      "기름에 춘장을 5분 볶아요 (생략하면 쓴맛).",
      "돼지고기 볶고 양파를 2분 더 볶아요.",
      "감자·애호박을 넣고 5분 볶아요.",
      "볶은 춘장과 약간의 물·설탕을 넣어 10분 끓여요.",
      "전분물로 농도를 맞춥니다.",
      "면을 삶고 위에 소스를 끼얹어요.",
    ],
    tipsVi: "Phi tương đen ở bước 1 là bí quyết — không bỏ qua!",
    tipsKo: "춘장 볶는 게 핵심 — 생략 금지!",
  },

  "jjamppong": {
    difficulty: 3, servings: 2, totalMinutes: 35,
    ingredientsVi: [
      "300g mì udon trắng", "200g hỗn hợp hải sản (tôm, mực, hến)",
      "100g thịt heo thái sợi", "1 củ hành tây", "100g bắp cải thái lát",
      "3 muỗng canh gochugaru", "1 muỗng canh dầu mè", "5 tép tỏi", "800ml nước",
    ],
    ingredientsKo: [
      "면 300g", "해물 200g (새우·오징어·홍합)", "돼지고기 100g",
      "양파·양배추", "고춧가루 3큰술", "참기름 1큰술", "마늘 5쪽", "물 800ml",
    ],
    stepsVi: [
      "Đun chảo lửa to, xào tỏi và gochugaru 1 phút (sẽ đỏ rực).",
      "Cho thịt heo và hải sản, xào 3 phút.",
      "Thêm rau, xào 2 phút.",
      "Đổ nước, đun sôi 10 phút.",
      "Luộc mì riêng theo gói.",
      "Cho mì vào tô, đổ nước dùng cay lên.",
    ],
    stepsKo: [
      "센 불에 기름·마늘·고춧가루를 1분 볶아요 (빨갛게).",
      "돼지고기와 해물을 3분 볶아요.",
      "야채를 넣고 2분 더 볶아요.",
      "물을 붓고 10분 끓입니다.",
      "면을 따로 삶아 그릇에 담아요.",
      "위에 매운 국물을 부어요.",
    ],
  },

  "naengmyeon": {
    difficulty: 2, servings: 2, totalMinutes: 30,
    ingredientsVi: [
      "200g mì lạnh Hàn (냉면, mua sẵn)", "1L nước dùng bò ướp lạnh",
      "1/2 quả lê thái lát", "2 quả trứng luộc", "Dưa chuột thái sợi",
      "Củ cải Hàn ngâm chua", "Đá viên", "Mù tạt vàng + giấm",
    ],
    ingredientsKo: [
      "냉면 200g", "차게 식힌 육수 1L",
      "배 1/2개", "삶은 계란 2개", "오이채", "동치미 무", "얼음",
      "겨자 + 식초",
    ],
    stepsVi: [
      "Luộc mì theo gói, rửa nước đá nhiều lần đến khi nguội hẳn.",
      "Đặt mì vào tô lớn, thêm đá viên.",
      "Đổ nước dùng lạnh.",
      "Trang trí với lê, trứng, dưa chuột, củ cải.",
      "Thêm mù tạt và giấm theo khẩu vị. Trộn đều khi ăn.",
    ],
    stepsKo: [
      "면을 삶고 얼음물에 여러 번 헹궈 차갑게 합니다.",
      "큰 그릇에 면을 담고 얼음을 추가.",
      "차가운 육수를 부어요.",
      "배·계란·오이·동치미 무를 올려요.",
      "겨자와 식초를 넣어 비벼 드세요.",
    ],
    tipsVi: "Mùa hè tuyệt đỉnh. Mù tạt và giấm rất quan trọng — đừng quên!",
    tipsKo: "여름 별미. 겨자·식초 꼭 넣어주세요!",
  },

  "ramyeon": {
    difficulty: 1, servings: 1, totalMinutes: 8,
    ingredientsVi: [
      "1 gói mì gói Hàn (Shin Ramyun, Jin Ramyen)", "1 quả trứng",
      "Hành lá", "1 lát phô mai (tùy chọn)", "550ml nước",
    ],
    ingredientsKo: [
      "라면 1봉지", "계란 1개", "대파", "치즈 1장 (선택)", "물 550ml",
    ],
    stepsVi: [
      "Đun sôi nước.",
      "Cho gói gia vị và rau khô vào.",
      "Cho mì vào, đun 4-5 phút.",
      "Đập trứng vào (không khuấy).",
      "Tắt bếp, đặt phô mai lên trên. Rắc hành lá.",
    ],
    stepsKo: [
      "물을 끓여요.",
      "스프와 후레이크를 넣어요.",
      "면을 넣고 4-5분 끓입니다.",
      "계란을 깨뜨려 넣고 젓지 않아요.",
      "불을 끄고 치즈를 올려요. 대파 마무리.",
    ],
    tipsVi: "Pro tip: thêm 1 nhúm phô mai làm vị béo + cân bằng cay.",
    tipsKo: "치즈 한 장이 매운맛 잡고 고소함을 더해줘요.",
  },

  "kalguksu": {
    difficulty: 2, servings: 2, totalMinutes: 35,
    ingredientsVi: [
      "300g mì sợi tay (kalguksu)", "10 con cá cơm khô", "1 mảnh tảo bẹ",
      "1 củ bí ngòi thái sợi", "1 củ cà rốt thái sợi", "5 tép tỏi", "Xì dầu",
    ],
    ingredientsKo: [
      "칼국수 면 300g", "멸치 10개", "다시마", "애호박·당근채", "마늘 5쪽", "간장",
    ],
    stepsVi: [
      "Đun 1L nước với cá cơm và tảo bẹ 15 phút. Lọc lấy nước trong.",
      "Cho bí ngòi, cà rốt, tỏi vào nước dùng. Đun 5 phút.",
      "Cho mì vào, đun 4 phút (mì kalguksu mỏng nên nhanh chín).",
      "Nêm xì dầu. Tắt bếp.",
    ],
    stepsKo: [
      "물 1L에 멸치·다시마를 15분 끓이고 거릅니다.",
      "애호박·당근·마늘을 넣고 5분 끓여요.",
      "면을 넣고 4분 끓입니다 (얇아서 빨리 익음).",
      "간장으로 간을 맞추고 불을 끕니다.",
    ],
  },

  "kongguksu": {
    difficulty: 3, servings: 2, totalMinutes: 60,
    ingredientsVi: [
      "1 cốc đậu nành khô (ngâm qua đêm)", "200g mì somen", "Vừng trắng rang",
      "Đá viên", "Muối", "Dưa chuột thái sợi", "Cà chua bi",
    ],
    ingredientsKo: [
      "콩 1컵 (불린 것)", "소면 200g", "볶은 깨", "얼음", "소금", "오이채", "방울토마토",
    ],
    stepsVi: [
      "Luộc đậu nành 15 phút, lột vỏ.",
      "Cho đậu vào blender với 800ml nước, vừng, muối — xay nhuyễn.",
      "Lọc qua rây, để lạnh.",
      "Luộc mì somen, rửa nước lạnh, để lạnh.",
      "Cho mì vào tô, đổ sữa đậu lạnh, thêm đá.",
      "Trang trí dưa chuột, cà chua, vừng.",
    ],
    stepsKo: [
      "콩을 15분 삶아 껍질을 까요.",
      "블렌더에 콩·물 800ml·깨·소금을 넣고 곱게 갈아요.",
      "체에 거르고 냉장.",
      "소면을 삶고 얼음물에 헹궈요.",
      "그릇에 면을 담고 차가운 콩국물·얼음을 부어요.",
      "오이채·토마토·깨로 마무리.",
    ],
  },

  "bibim-guksu": {
    difficulty: 1, servings: 1, totalMinutes: 15,
    ingredientsVi: [
      "200g mì somen", "Dưa chuột thái sợi", "1 quả trứng luộc",
      "Sốt: 2 muỗng canh gochujang + 1 muỗng canh giấm + 1 muỗng canh đường + 1 muỗng canh xì dầu + 1/2 muỗng canh dầu mè + tỏi",
    ],
    ingredientsKo: [
      "소면 200g", "오이채", "삶은 계란 1개",
      "양념: 고추장 2 + 식초 1 + 설탕 1 + 간장 1 + 참기름 1/2 + 마늘",
    ],
    stepsVi: [
      "Luộc mì 4 phút, rửa nước lạnh kỹ.",
      "Trộn mì với sốt trong tô.",
      "Trang trí với dưa chuột, trứng luộc bổ đôi.",
    ],
    stepsKo: [
      "소면을 4분 삶고 찬물에 헹궈요.",
      "양념과 잘 비벼주세요.",
      "오이채와 반숙 계란을 올립니다.",
    ],
  },

  "rabokki": {
    difficulty: 1, servings: 2, totalMinutes: 15,
    ingredientsVi: [
      "200g bánh tteok", "1 gói mì gói Hàn", "100g chả cá Hàn",
      "2 muỗng canh gochujang", "1 muỗng canh đường", "500ml nước", "Hành lá",
    ],
    ingredientsKo: [
      "떡 200g", "라면 1봉지", "어묵 100g", "고추장 2큰술", "설탕 1큰술", "물 500ml", "대파",
    ],
    stepsVi: [
      "Đun sôi nước với gochujang và đường.",
      "Cho tteok và chả cá vào, đun 10 phút.",
      "Cho mì gói (chỉ mì, bỏ gói gia vị), đun 3 phút.",
      "Rắc hành lá. Trộn đều ăn nóng.",
    ],
    stepsKo: [
      "물에 고추장·설탕을 풀어 끓여요.",
      "떡과 어묵을 넣고 10분 끓입니다.",
      "라면 면 (스프 없이)을 넣고 3분 더 끓여요.",
      "대파를 뿌립니다.",
    ],
  },

  // === Snacks ===
  "tteokbokki": {
    difficulty: 1, servings: 2, totalMinutes: 20,
    ingredientsVi: [
      "300g bánh tteok", "100g chả cá Hàn thái lát", "3 muỗng canh gochujang",
      "1 muỗng canh gochugaru", "2 muỗng canh đường", "500ml nước", "Hành lá",
    ],
    ingredientsKo: [
      "떡 300g", "어묵 100g", "고추장 3큰술", "고춧가루 1큰술", "설탕 2큰술", "물 500ml", "대파",
    ],
    stepsVi: [
      "Ngâm tteok trong nước lạnh 10 phút (nếu khô).",
      "Đun sôi 500ml nước với gochujang, gochugaru, đường.",
      "Cho tteok và chả cá vào, đun 10 phút.",
      "Khuấy thường xuyên cho tteok không dính đáy.",
      "Khi sốt sệt và bóng, tắt bếp. Rắc hành lá.",
    ],
    stepsKo: [
      "떡이 마른 경우 찬물에 10분 불립니다.",
      "물에 고추장·고춧가루·설탕을 풀어 끓여요.",
      "떡과 어묵을 넣고 10분 끓입니다.",
      "자주 저어 떡이 붙지 않게.",
      "양념이 진해지면 불을 끄고 대파를 뿌려요.",
    ],
  },

  "eomuk": {
    difficulty: 1, servings: 2, totalMinutes: 25,
    ingredientsVi: [
      "10 chả cá Hàn dạng lá", "Que xiên gỗ", "5 con cá cơm khô",
      "1 mảnh tảo bẹ", "1L nước", "Xì dầu",
    ],
    ingredientsKo: [
      "사각 어묵 10장", "꼬치", "멸치 5개", "다시마", "물 1L", "간장",
    ],
    stepsVi: [
      "Đun nước với cá cơm và tảo bẹ 15 phút. Lọc.",
      "Cuộn chả cá lên que xiên (gấp lại nhiều lần).",
      "Cho que xiên vào nước dùng, đun nhỏ 10 phút.",
      "Nêm xì dầu nhẹ. Ăn nóng từ nồi.",
    ],
    stepsKo: [
      "멸치·다시마로 15분 육수를 내고 거릅니다.",
      "어묵을 꼬치에 접어 끼워요.",
      "꼬치를 육수에 넣고 약불로 10분 끓입니다.",
      "간장으로 살짝 간하고 뜨끈하게 드세요.",
    ],
    tipsVi: "Món street food mùa đông — uống nước dùng nóng làm ấm bụng.",
    tipsKo: "겨울 길거리 음식 — 국물이 진짜 별미.",
  },

  "sundae": {
    difficulty: 4, servings: 4, totalMinutes: 90,
    ingredientsVi: [
      "Sundae mua sẵn ở H Mart (làm tại nhà rất khó)",
      "Sốt chấm: muối tiêu hoặc gochujang + dầu mè",
    ],
    ingredientsKo: [
      "순대 (시판)", "양념: 소금·후추 또는 고추장+참기름",
    ],
    stepsVi: [
      "Sundae thường mua sẵn — tự làm phức tạp.",
      "Hấp 15 phút cho nóng và mềm.",
      "Cắt khoanh dày 1cm. Chấm với muối tiêu hoặc gochujang.",
    ],
    stepsKo: [
      "순대는 시판품을 사용 (직접 만들기 복잡).",
      "15분 찐 뒤 부드럽게.",
      "1cm 두께로 썰어 소금·후추 또는 고추장에 찍어 드세요.",
    ],
    tipsVi: "Người mới có thể không quen với vị — nhưng người Hàn coi đây là 'street food cảm giác mới'.",
    tipsKo: "처음엔 낯설지만 한국인의 추억의 분식.",
  },

  "tteokkkochi": {
    difficulty: 2, servings: 2, totalMinutes: 25,
    ingredientsVi: [
      "300g bánh tteok dài", "Que xiên", "Dầu chiên",
      "Sốt: 2 muỗng canh gochujang + 1 muỗng canh đường + 1 muỗng canh xì dầu + 1 muỗng canh dầu mè",
    ],
    ingredientsKo: [
      "떡 300g (긴 것)", "꼬치", "튀김 기름",
      "양념: 고추장 2 + 설탕 1 + 간장 1 + 참기름 1",
    ],
    stepsVi: [
      "Xiên 4-5 viên tteok lên mỗi que.",
      "Chiên que xiên trong dầu nóng 3 phút cho ngoài hơi giòn.",
      "Đun sốt trong chảo nhỏ.",
      "Phết sốt lên que xiên, nướng thêm 1 phút.",
    ],
    stepsKo: [
      "떡 4-5개를 꼬치에 끼워요.",
      "기름에 3분 튀겨 겉을 살짝 바삭하게.",
      "양념을 졸여요.",
      "꼬치에 양념을 발라 1분 더 구워요.",
    ],
  },

  // === Pancakes & dumplings ===
  "pajeon": {
    difficulty: 1, servings: 2, totalMinutes: 20,
    ingredientsVi: [
      "1 cốc bột mì", "1 quả trứng", "1 cốc nước lạnh",
      "8 cây hành lá lớn (cắt khúc 5cm)", "1/2 củ tỏi tây",
      "Dầu để chiên", "Sốt chấm: 2 muỗng canh xì dầu + 1 muỗng canh giấm + ớt bột",
    ],
    ingredientsKo: [
      "밀가루 1컵", "계란 1개", "찬물 1컵", "대파 8대 (5cm)", "쪽파 1/2단",
      "튀김 기름", "양념장: 간장 2 + 식초 1 + 고춧가루",
    ],
    stepsVi: [
      "Trộn bột, trứng, nước lạnh thành hỗn hợp lỏng.",
      "Đun chảo nhiều dầu cho thật nóng.",
      "Xếp hành lá theo hàng, đổ bột lên.",
      "Chiên 3 phút mặt dưới vàng.",
      "Lật, chiên thêm 3 phút mặt còn lại.",
      "Cắt miếng vuông, chấm sốt.",
    ],
    stepsKo: [
      "밀가루·계란·찬물을 섞어 반죽을 만들어요.",
      "팬에 기름을 넉넉히 두르고 뜨겁게.",
      "대파를 가지런히 깔고 반죽을 부어요.",
      "한 면 3분 노릇하게.",
      "뒤집어 3분 더 굽습니다.",
      "사각으로 잘라 양념장에 찍어 드세요.",
    ],
    tipsVi: "Nước lạnh là bí quyết — làm bánh giòn hơn.",
    tipsKo: "찬물이 비결 — 더 바삭해져요.",
  },

  "kimchi-jeon": {
    difficulty: 1, servings: 2, totalMinutes: 15,
    ingredientsVi: [
      "1 cốc kimchi chua thái nhỏ", "1 cốc bột mì", "1/2 cốc nước",
      "1 quả trứng", "2 muỗng canh nước kimchi (làm màu đỏ đẹp)", "Dầu chiên",
    ],
    ingredientsKo: [
      "신김치 다진 것 1컵", "밀가루 1컵", "물 1/2컵", "계란 1개",
      "김치 국물 2큰술 (예쁜 빨간색)", "튀김 기름",
    ],
    stepsVi: [
      "Trộn tất cả nguyên liệu thành hỗn hợp.",
      "Đun chảo dầu, đổ 1 muỗng canh hỗn hợp.",
      "Chiên mỗi mặt 3 phút.",
      "Ăn nóng với 막걸리 (rượu gạo) hoặc sốt xì dầu.",
    ],
    stepsKo: [
      "재료를 모두 섞어요.",
      "팬에 기름 두르고 한 국자씩 부쳐요.",
      "한 면 3분씩 노릇하게.",
      "막걸리나 간장 양념과 함께.",
    ],
  },

  "japchae": {
    difficulty: 3, servings: 4, totalMinutes: 50,
    ingredientsVi: [
      "150g miến khoai lang Hàn (당면)", "200g thịt bò thái sợi",
      "1 củ cà rốt thái sợi", "1/2 củ hành tây", "100g nấm hương ngâm",
      "100g rau bina", "3 muỗng canh xì dầu", "2 muỗng canh đường",
      "2 muỗng canh dầu mè", "Vừng trắng",
    ],
    ingredientsKo: [
      "당면 150g", "소고기 채썬 것 200g", "당근채", "양파 1/2개",
      "표고버섯 100g", "시금치 100g", "간장 3큰술", "설탕 2큰술", "참기름 2큰술", "깨",
    ],
    stepsVi: [
      "Ngâm miến trong nước ấm 30 phút, luộc 5 phút, để ráo.",
      "Ướp thịt bò với xì dầu, đường, dầu mè 10 phút.",
      "Xào riêng từng loại rau.",
      "Xào thịt bò.",
      "Trộn miến với thịt và rau, thêm xì dầu, đường, dầu mè.",
      "Rắc vừng. Ăn ấm hoặc nguội.",
    ],
    stepsKo: [
      "당면을 따뜻한 물에 30분 불리고 5분 삶아요.",
      "소고기를 간장·설탕·참기름에 10분 재워요.",
      "야채를 따로 볶아요.",
      "소고기를 볶아요.",
      "당면·고기·야채에 간장·설탕·참기름을 더해 무쳐요.",
      "깨를 뿌려 마무리.",
    ],
  },

  "mandu": {
    difficulty: 3, servings: 4, totalMinutes: 60,
    ingredientsVi: [
      "30 vỏ bánh mandu (mua sẵn)", "200g thịt heo xay", "100g đậu hũ vắt nước",
      "100g kim chi thái nhỏ", "1 cây hành lá", "2 tép tỏi",
      "1 muỗng canh xì dầu", "1 muỗng canh dầu mè",
    ],
    ingredientsKo: [
      "만두피 30장", "돼지고기 다짐육 200g", "두부 (물기 짠 것) 100g",
      "김치 다진 것 100g", "대파", "마늘 2쪽", "간장 1큰술", "참기름 1큰술",
    ],
    stepsVi: [
      "Trộn thịt, đậu hũ, kimchi, hành, tỏi, xì dầu, dầu mè thành nhân.",
      "Lấy vỏ mandu, đặt 1 muỗng nhân vào giữa.",
      "Bôi nước viền vỏ, gấp đôi và ép kín.",
      "Hấp 10 phút HOẶC chiên áp chảo với chút dầu 5 phút.",
      "Chấm xì dầu pha giấm.",
    ],
    stepsKo: [
      "고기·두부·김치·대파·마늘·간장·참기름을 섞어 소를 만들어요.",
      "만두피에 소를 한 숟가락 올려요.",
      "가장자리에 물을 발라 반으로 접어 꼭 눌러요.",
      "찜기에 10분 또는 팬에 5분 군만두로.",
      "간장+식초에 찍어 드세요.",
    ],
  },

  // === Chicken ===
  "chimaek": {
    difficulty: 3, servings: 2, totalMinutes: 60,
    ingredientsVi: [
      "1kg cánh gà (hoặc đùi nhỏ)", "1 cốc bột năng + 1/2 cốc bột mì",
      "1 muỗng cà phê muối + 1/2 muỗng cà phê tiêu", "Dầu chiên (1 lít)",
      "1 chai bia mát lạnh để uống kèm",
    ],
    ingredientsKo: [
      "닭 날개 1kg", "전분 1컵 + 밀가루 1/2컵", "소금·후추",
      "튀김 기름 1L", "맥주",
    ],
    stepsVi: [
      "Ướp gà với muối, tiêu 30 phút.",
      "Lăn gà qua bột năng và bột mì.",
      "Đun dầu nóng 170°C, chiên 8 phút (chiên lần 1).",
      "Vớt ra, để nghỉ 5 phút.",
      "Đun dầu lên 190°C, chiên lần 2 trong 3 phút (giòn rụm).",
      "Vớt ra, để ráo. Ăn với bia lạnh — đó chính là 치맥!",
    ],
    stepsKo: [
      "닭에 소금·후추를 30분 재워요.",
      "전분과 밀가루를 입혀요.",
      "기름 170도에 8분 1차 튀김.",
      "건져 5분 쉬게 합니다.",
      "기름을 190도로 올리고 3분 2차 튀김 (바삭).",
      "맥주와 함께 — 이게 바로 치맥!",
    ],
    tipsVi: "Chiên 2 lần là bí quyết để giòn — không bỏ qua bước này!",
    tipsKo: "두 번 튀기는 게 바삭함의 비결.",
  },

  "yangnyeom": {
    difficulty: 3, servings: 2, totalMinutes: 65,
    ingredientsVi: [
      "1kg cánh gà chiên giòn (như 치킨)",
      "Sốt: 4 muỗng canh gochujang + 3 muỗng canh tương cà + 3 muỗng canh đường nâu + 2 muỗng canh xì dầu + 2 muỗng canh mật mía (hoặc đường) + 4 tép tỏi băm + 1 muỗng cà phê gừng băm",
      "Vừng rang", "Đậu phộng giã",
    ],
    ingredientsKo: [
      "튀긴 닭 1kg",
      "양념: 고추장 4 + 케첩 3 + 흑설탕 3 + 간장 2 + 물엿 2 + 마늘 4쪽 + 생강",
      "깨", "땅콩 부순 것",
    ],
    stepsVi: [
      "Chiên gà như công thức 치킨.",
      "Trong chảo nhỏ, đun tất cả gia vị sốt 5 phút cho sệt.",
      "Cho gà chiên vào, đảo đều phủ sốt.",
      "Tắt bếp ngay (giữ độ giòn).",
      "Rắc vừng và đậu phộng.",
    ],
    stepsKo: [
      "치킨 레시피로 닭을 튀겨요.",
      "양념을 5분 졸입니다.",
      "튀긴 닭을 양념에 굴려 골고루 입혀요.",
      "바로 불을 꺼 바삭함을 유지.",
      "깨와 땅콩을 뿌려요.",
    ],
  },
};

export function getRecipe(foodId: string): Recipe | undefined {
  return RECIPES[foodId];
}

const ELEMENT_GRADIENT_BY_TAG: Record<string, string> = {
  spicy: "from-rose-400 to-red-500",
  hot: "from-orange-400 to-red-500",
  cold: "from-sky-300 to-blue-500",
  sweet: "from-pink-300 to-rose-400",
  savory: "from-amber-400 to-orange-500",
  social: "from-fuchsia-400 to-purple-500",
  comfort: "from-amber-300 to-orange-400",
  healthy: "from-emerald-400 to-green-500",
  refreshing: "from-cyan-300 to-sky-500",
  meal: "from-amber-400 to-orange-500",
  snack: "from-yellow-300 to-amber-400",
  traditional: "from-amber-500 to-orange-600",
  modern: "from-pink-400 to-fuchsia-500",
  broth: "from-orange-300 to-red-400",
};

export function gradientFor(tags: readonly string[]): string {
  for (const t of tags) {
    if (ELEMENT_GRADIENT_BY_TAG[t]) return ELEMENT_GRADIENT_BY_TAG[t];
  }
  return "from-zinc-300 to-zinc-400";
}

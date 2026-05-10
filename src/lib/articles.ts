import type { Locale } from "@/i18n/routing";

export type ArticleCategory = "name" | "saju" | "food" | "culture" | "language";

export type Block =
  | { type: "p"; vi: string; ko: string }
  | { type: "h2"; vi: string; ko: string }
  | { type: "h3"; vi: string; ko: string }
  | { type: "ul"; vi: string[]; ko: string[] }
  | { type: "ol"; vi: string[]; ko: string[] }
  | { type: "callout"; vi: string; ko: string }
  | { type: "cta"; href: string; vi: string; ko: string };

export type Article = {
  slug: string;
  emoji: string;
  category: ArticleCategory;
  publishDate: string; // YYYY-MM-DD
  readMinutes: number;
  titleVi: string;
  titleKo: string;
  descVi: string;
  descKo: string;
  body: Block[];
};

export const CATEGORY_LABEL: Record<Locale, Record<ArticleCategory, string>> = {
  vi: {
    name: "Tên Hàn",
    saju: "Bói Tứ Trụ",
    food: "Ẩm thực",
    culture: "Văn hóa",
    language: "Tiếng Hàn",
  },
  ko: {
    name: "한국 이름",
    saju: "사주",
    food: "한식",
    culture: "한국 문화",
    language: "한국어",
  },
};

export const ARTICLES: Article[] = [
  // ============================================================
  // 1. 30 Korean girl names 2025
  // ============================================================
  {
    slug: "30-ten-han-quoc-cho-con-gai-2025",
    emoji: "🌸",
    category: "name",
    publishDate: "2026-05-10",
    readMinutes: 7,
    titleVi: "30 tên Hàn Quốc đẹp cho con gái 2025 — kèm ý nghĩa Hán tự",
    titleKo: "2025년 인기 한국 여자 이름 30선 — 한자 의미 포함",
    descVi:
      "Tổng hợp 30 tên tiếng Hàn đẹp nhất cho con gái năm 2025 — phân loại theo phong cách hiện đại, dịu dàng, mạnh mẽ và truyền thống. Mỗi tên kèm Hangul, Hán tự và ý nghĩa.",
    descKo:
      "2025년 가장 인기 있는 한국 여자 이름 30선 — 모던·우아·강인·전통 스타일별 분류. 한글, 한자, 의미를 모두 정리.",
    body: [
      {
        type: "p",
        vi:
          "Đặt tên tiếng Hàn cho con gái không chỉ là chọn một âm thanh đẹp — đó là gửi gắm cả mong ước của cha mẹ vào một-hai chữ Hán tự. Người Hàn vẫn rất coi trọng việc đặt tên, đến mức nhiều gia đình thuê 작명소 (Tác Danh Sở — văn phòng chuyên đặt tên) để chọn cẩn thận theo Saju.",
        ko:
          "한국 여자 아이의 이름을 짓는 일은 단순히 예쁜 발음을 고르는 것이 아니라, 한두 글자의 한자에 부모의 소망을 담는 일이에요. 그래서 한국에서는 작명소에서 사주를 보고 정성스럽게 이름을 짓는 가정도 많죠.",
      },
      {
        type: "p",
        vi:
          "Bài viết này tổng hợp 30 cái tên đang được yêu thích nhất ở Hàn Quốc 2025–2026, dựa trên thống kê thực tế từ Tòa án Tối cao Hàn Quốc và xu hướng đặt tên hiện đại. Mỗi tên đều có Hangul, Hán tự, và ý nghĩa rõ ràng.",
        ko:
          "이 글에서는 한국 대법원 통계와 최근 트렌드를 바탕으로, 2025–2026년 가장 사랑받는 30개 이름을 모았어요. 모든 이름에 한글·한자·의미를 함께 정리했습니다.",
      },
      {
        type: "h2",
        vi: "Top 10 — Phong cách hiện đại được yêu thích nhất 2026",
        ko: "TOP 10 — 2026년 가장 인기 있는 모던 스타일",
      },
      {
        type: "ol",
        vi: [
          "서아 (瑞雅) Seo-ah — Điềm lành & tao nhã. Tên nữ #1 Hàn Quốc 2026.",
          "서윤 (瑞潤) Seo-yoon — Điềm lành & óng ả, tươi sáng.",
          "하윤 (夏潤) Ha-yoon — Mùa hè & sự óng ả, ấm áp.",
          "지유 (智裕) Ji-yu — Trí tuệ & sự sung túc.",
          "지아 (智雅) Ji-ah — Trí tuệ & vẻ tao nhã.",
          "아인 (雅仁) Ah-in — Tao nhã & lòng nhân hậu.",
          "하린 (夏璘) Ha-rin — Mùa hè & ánh ngọc đẹp.",
          "유나 (裕娜) Yu-na — Sung túc & duyên dáng. Cảm hứng từ idol Yuna (ITZY).",
          "채원 (彩源) Chae-won — Sắc màu & nguồn cội.",
          "시아 (時雅) Si-ah — Đúng thời điểm & tao nhã.",
        ],
        ko: [
          "서아 (瑞雅) Seo-ah — 상서로움과 우아함. 2026년 1위 이름.",
          "서윤 (瑞潤) Seo-yoon — 상서로움과 윤택함, 빛남.",
          "하윤 (夏潤) Ha-yoon — 여름과 윤택함, 따뜻함.",
          "지유 (智裕) Ji-yu — 지혜와 풍요로움.",
          "지아 (智雅) Ji-ah — 지혜와 우아함.",
          "아인 (雅仁) Ah-in — 우아함과 인자함.",
          "하린 (夏璘) Ha-rin — 여름과 옥빛 광채.",
          "유나 (裕娜) Yu-na — 풍요로움과 아름다움. ITZY 유나에서 영감.",
          "채원 (彩源) Chae-won — 색채와 근원.",
          "시아 (時雅) Si-ah — 때와 우아함.",
        ],
      },
      {
        type: "h2",
        vi: "10 tên dịu dàng — phong cách 'em hoa em nắng'",
        ko: "10개의 부드러운 이름 — '여린 봄빛' 스타일",
      },
      {
        type: "ol",
        vi: [
          "다인 (多仁) Da-in — Nhiều lòng nhân hậu.",
          "서연 (瑞娟) Seo-yeon — Điềm lành & yêu kiều.",
          "지우 (智雨) Ji-woo — Trí tuệ & cơn mưa lành.",
          "예린 (藝璘) Ye-rin — Tài nghệ & ngọc đẹp.",
          "수아 (秀雅) Su-ah — Xuất sắc & tao nhã.",
          "윤서 (潤瑞) Yoon-seo — Óng ả & điềm lành.",
          "은서 (恩瑞) Eun-seo — Ân tình & điềm lành.",
          "다은 (多恩) Da-eun — Nhiều ân tình.",
          "하은 (夏恩) Ha-eun — Mùa hè & ân tình.",
          "소율 (笑律) So-yul — Nụ cười & giai điệu.",
        ],
        ko: [
          "다인 (多仁) Da-in — 많은 인자함.",
          "서연 (瑞娟) Seo-yeon — 상서로움과 아리따움.",
          "지우 (智雨) Ji-woo — 지혜와 단비.",
          "예린 (藝璘) Ye-rin — 예술과 옥빛.",
          "수아 (秀雅) Su-ah — 빼어남과 우아함.",
          "윤서 (潤瑞) Yoon-seo — 윤택함과 상서로움.",
          "은서 (恩瑞) Eun-seo — 은혜와 상서로움.",
          "다은 (多恩) Da-eun — 많은 은혜.",
          "하은 (夏恩) Ha-eun — 여름과 은혜.",
          "소율 (笑律) So-yul — 미소와 음률.",
        ],
      },
      {
        type: "h2",
        vi: "10 tên cá tính — mạnh mẽ & độc đáo",
        ko: "10개의 개성 있는 이름 — 강인하고 독특한",
      },
      {
        type: "ol",
        vi: [
          "혜린 (慧璘) Hye-rin — Tuệ tâm & ngọc đẹp.",
          "주아 (珠雅) Ju-ah — Ngọc trai & tao nhã.",
          "별 (별) Byeol — Ngôi sao (tên thuần Hàn, không Hán tự).",
          "라온 (—) Ra-on — 'Vui vẻ' (thuần Hàn).",
          "한별 (韓별) Han-byeol — Ngôi sao Hàn.",
          "가온 (—) Ga-on — 'Trung tâm' (thuần Hàn).",
          "은채 (銀彩) Eun-chae — Bạc & sắc màu.",
          "다윤 (多潤) Da-yoon — Nhiều sự óng ả.",
          "리아 (利雅) Ri-ah — Sắc bén & tao nhã.",
          "예원 (藝源) Ye-won — Tài nghệ & nguồn cội.",
        ],
        ko: [
          "혜린 (慧璘) Hye-rin — 지혜와 옥빛.",
          "주아 (珠雅) Ju-ah — 진주와 우아함.",
          "별 (별) Byeol — 별 (순우리말 이름).",
          "라온 (—) Ra-on — '즐거운' (순우리말).",
          "한별 (韓별) Han-byeol — 한국의 별.",
          "가온 (—) Ga-on — '중심' (순우리말).",
          "은채 (銀彩) Eun-chae — 은빛과 색채.",
          "다윤 (多潤) Da-yoon — 많은 윤택함.",
          "리아 (利雅) Ri-ah — 날카로움과 우아함.",
          "예원 (藝源) Ye-won — 예술과 근원.",
        ],
      },
      {
        type: "callout",
        vi:
          "💡 Lưu ý: Khi đặt tên Hàn cho người Việt, hãy chú ý cả phát âm dễ với người Việt và ý nghĩa Hán tự. Ví dụ '하린' (Ha-rin) vừa dễ phát âm vừa có ý nghĩa đẹp — phù hợp với người Việt mê K-pop.",
        ko:
          "💡 팁: 베트남인을 위한 이름을 지을 때는 베트남어 발음 친화도와 한자 의미를 함께 고려하세요. 예: '하린'은 발음이 부드럽고 의미도 좋아서 K-팝 팬 베트남 사용자에게 잘 맞습니다.",
      },
      {
        type: "h2",
        vi: "Cách chọn tên phù hợp với bạn",
        ko: "당신에게 맞는 이름 고르는 법",
      },
      {
        type: "p",
        vi:
          "Nếu bạn chưa biết tên nào hợp với mình, hãy thử công cụ tạo tên Hàn miễn phí của chúng tôi. Bạn chỉ cần chọn giới tính và phong cách yêu thích — hệ thống sẽ gợi ý 6 tên Hàn 2025-2026 chuẩn, có cả Hán tự và câu chuyện ý nghĩa.",
        ko:
          "어떤 이름이 자신에게 잘 맞는지 모르겠다면, 무료 한국 이름 생성 도구를 써보세요. 성별과 원하는 스타일만 고르면 2025-2026 인기 이름 6개를 한자 의미와 함께 추천해드립니다.",
      },
      {
        type: "cta",
        href: "/ten-han-quoc",
        vi: "✨ Tạo tên Hàn cho riêng tôi",
        ko: "✨ 내 한국 이름 만들기",
      },
    ],
  },

  // ============================================================
  // 2. Saju vs Vietnamese astrology
  // ============================================================
  {
    slug: "saju-vs-tu-vi-viet-nam",
    emoji: "🔮",
    category: "saju",
    publishDate: "2026-05-10",
    readMinutes: 6,
    titleVi: "Saju (사주) và Tử vi Việt Nam — 5 điểm khác biệt cốt lõi",
    titleKo: "사주(四柱)와 베트남 점성술 — 핵심 차이 5가지",
    descVi:
      "Saju Hàn Quốc và Tử vi Việt Nam đều là phương pháp xem mệnh truyền thống Đông Á — nhưng cách tính, cách đọc và bối cảnh văn hóa khác biệt rõ rệt. Tìm hiểu 5 điểm khác biệt cốt lõi.",
    descKo:
      "한국 사주와 베트남 점성술 모두 동아시아 전통 점술이지만, 계산 방식·해석·문화적 배경에서 명확한 차이가 있습니다. 핵심 5가지 차이를 정리했어요.",
    body: [
      {
        type: "p",
        vi:
          "Người Việt từ lâu đã quen với Tử vi (紫微) — một phương pháp xem mệnh truyền thống dựa trên 12 cung và các sao. Khi tiếp xúc với văn hóa Hàn, nhiều người sẽ thấy 'Saju (사주)' nghe quen quen — vì cả hai đều là di sản văn hóa Đông Á chung. Nhưng thực ra, hai phương pháp này khác nhau khá nhiều.",
        ko:
          "베트남인들은 오래전부터 자미두수(紫微) 즉, 12궁과 별자리 기반의 운명학에 익숙합니다. 한국 문화를 접하면 '사주(四柱)'라는 말이 비슷하게 들리지만, 사실 두 방식은 꽤 다릅니다.",
      },
      {
        type: "h2",
        vi: "1. Hệ thống tính khác nhau: 4 trụ vs 12 cung",
        ko: "1. 계산 시스템이 다르다: 4기둥 vs 12궁",
      },
      {
        type: "p",
        vi:
          "Saju (사주, '四柱' tức 'bốn cột trụ') tính theo Năm-Tháng-Ngày-Giờ sinh, mỗi yếu tố là 1 trụ gồm 1 Thiên Can + 1 Địa Chi, tổng cộng 8 chữ (Bát Tự, 八字). Tử vi Việt Nam thì sắp 12 cung trên một bản đồ tròn (Mệnh, Phụ Mẫu, Phúc Đức, Điền Trạch...) và đặt các sao vào từng cung.",
        ko:
          "사주(四柱, '네 기둥')는 출생 연·월·일·시 각각을 천간(天干) 1자 + 지지(地支) 1자로 구성해 총 8글자(팔자, 八字)를 만듭니다. 반면 베트남 점성술은 12궁(命, 父母, 福德, 田宅 등)을 원형 지도에 배치하고 각 궁에 별을 두는 방식입니다.",
      },
      {
        type: "h2",
        vi: "2. Yếu tố cốt lõi khác nhau: Ngũ Hành vs Sao chiếu mệnh",
        ko: "2. 핵심 요소가 다르다: 오행 vs 별",
      },
      {
        type: "p",
        vi:
          "Saju Hàn xoay quanh Ngũ Hành (Mộc·Hỏa·Thổ·Kim·Thủy) — sự cân bằng giữa 5 hành quyết định tính cách và vận mệnh. Tử vi Việt Nam dựa trên 14 sao chính (Tử vi, Thiên Cơ, Thái Dương, Vũ Khúc...) cùng vị trí của chúng trong các cung.",
        ko:
          "한국 사주는 오행(목·화·토·금·수)을 중심으로 해석합니다. 다섯 기운의 균형이 성격과 운명을 좌우하죠. 베트남 점성술은 14개 주성(자미·천기·태양·무곡 등)이 12궁의 어디에 위치하느냐로 풀이합니다.",
      },
      {
        type: "h2",
        vi: "3. Cách đọc kết quả: Tổng quan vs Phân vùng cuộc đời",
        ko: "3. 결과 해석 방식: 통합형 vs 영역별",
      },
      {
        type: "p",
        vi:
          "Saju đọc tổng quan 'người này như thế nào, hợp với gì, cần bổ sung gì' từ Bát Tự. Tử vi Việt thì chia rạch ròi từng khía cạnh đời người: cung Mệnh nói tính cách, cung Tài Bạch nói tiền, cung Phu Thê nói hôn nhân... Bạn có thể xem riêng từng cung.",
        ko:
          "사주는 팔자에서 '이 사람은 어떤 사람이고, 무엇과 잘 맞고, 무엇을 보완해야 하는지'를 통합적으로 풀어냅니다. 베트남 점성술은 인생 영역별로 명확히 나뉩니다: 명궁은 성격, 재백궁은 재물, 부처궁은 결혼 등.",
      },
      {
        type: "h2",
        vi: "4. Bối cảnh văn hóa: Saju gắn với đời thường Hàn",
        ko: "4. 문화적 배경: 사주는 한국인 일상 속에",
      },
      {
        type: "p",
        vi:
          "Ở Hàn Quốc, Saju là một phần của đời sống thường ngày. Người ta xem Saju khi: chọn ngày cưới, đặt tên con, mở công ty, hẹn hò xem có hợp không. Nhiều khu phố có '철학관 (Triết Học Quán)' — văn phòng thầy bói chuyên Saju. Tử vi ở Việt Nam thường được xem trong dịp đặc biệt hơn — cuối năm, đầu năm, hoặc khi có quyết định lớn.",
        ko:
          "한국에서 사주는 일상의 일부입니다 — 결혼 날짜 잡을 때, 아이 이름 지을 때, 사업 시작할 때, 데이트 궁합 볼 때. 철학관이라는 사주 전문 점집도 동네마다 있습니다. 베트남 점성술은 보통 연말연시나 큰 결정을 할 때 더 자주 봅니다.",
      },
      {
        type: "h2",
        vi: "5. Sử dụng hiện đại: App và web",
        ko: "5. 현대적 활용: 앱과 웹사이트",
      },
      {
        type: "p",
        vi:
          "Saju đã được số hóa rất tốt — có nhiều app Hàn Quốc tính Saju tự động trong vài giây (점신, 헬로우봇 등). Tử vi Việt cũng có nhưng độ phổ biến của app thì chưa bằng. Bài học cho người Việt: bạn có thể trải nghiệm Saju online miễn phí mà không cần đến tận Hàn.",
        ko:
          "사주는 매우 잘 디지털화되어 있어 점신·헬로우봇 같은 앱으로 몇 초 만에 결과를 받을 수 있습니다. 베트남 점성술도 디지털화되어 있지만 아직 앱 보급은 그만큼은 아닙니다. 베트남 사용자에게 좋은 점은, 한국에 가지 않아도 온라인에서 무료 사주를 경험할 수 있다는 거예요.",
      },
      {
        type: "callout",
        vi:
          "🤔 Cái nào đúng hơn? Cả hai đều có gốc Đông Á chung, không có cái nào 'đúng hơn'. Nhiều người Việt chọn xem cả hai để có góc nhìn rộng. Thử Saju 1 lần xem có gì thú vị không!",
        ko:
          "🤔 어느 쪽이 더 정확? 둘 다 동아시아의 같은 뿌리에서 나왔고, '정답'이 정해진 건 아닙니다. 많은 베트남인이 두 가지를 함께 봐서 종합적으로 판단하기도 해요. 사주를 한 번 경험해보세요!",
      },
      {
        type: "cta",
        href: "/sau-han-quoc",
        vi: "🔮 Xem bói Saju miễn phí",
        ko: "🔮 무료 사주 풀이 보기",
      },
    ],
  },

  // ============================================================
  // 3. 10 easy Korean dishes to cook at home
  // ============================================================
  {
    slug: "10-mon-han-de-nau-tai-nha",
    emoji: "🍳",
    category: "food",
    publishDate: "2026-05-10",
    readMinutes: 8,
    titleVi: "10 món Hàn Quốc dễ nấu tại nhà cho người Việt — nguyên liệu có ở Việt Nam",
    titleKo: "베트남에서도 쉽게 만들 수 있는 한식 10가지 — 재료까지 정리",
    descVi:
      "10 món Hàn Quốc đơn giản, ngon, mà bạn có thể tự nấu tại Việt Nam — chỉ cần nguyên liệu mua được ở chợ hoặc Lotte/Emart. Kèm thời gian nấu và mẹo cho người mới.",
    descKo:
      "베트남에서도 쉽게 구할 수 있는 재료로 만드는 한식 10가지. 시간·난이도·초보자 팁까지 정리했어요.",
    body: [
      {
        type: "p",
        vi:
          "Nấu món Hàn ở Việt Nam dễ hơn bạn tưởng. Hầu hết nguyên liệu đều có ở Lotte Mart, Emart, hoặc các chợ Hàn ở Sài Gòn (Phú Mỹ Hưng) và Hà Nội (Mỹ Đình). Dưới đây là 10 món phù hợp cho người mới bắt đầu — không cần kỹ thuật cầu kỳ.",
        ko:
          "베트남에서 한식 만들기는 생각보다 쉬워요. 대부분 재료를 롯데마트·이마트·또는 사이공(푸미흥)·하노이(미딩)의 한국 식료품점에서 구할 수 있어요. 초보자에게 좋은 10가지 메뉴를 정리했습니다.",
      },
      {
        type: "h2",
        vi: "🥩 Bulgogi (불고기) — Thịt bò xào tương ngọt",
        ko: "🥩 불고기 — 달콤한 양념 소고기",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐ · Thời gian: 30 phút (gồm ướp). Cần thịt bò thái mỏng, xì dầu, đường, tỏi, lê (hoặc táo) xay. Ướp 20 phút rồi xào lửa to. Ăn với cơm trắng + xà lách. Phù hợp cả trẻ em.",
        ko:
          "난이도: ⭐ · 시간: 30분(재우기 포함). 얇게 썬 소고기, 간장, 설탕, 마늘, 배(또는 사과) 갈은 것. 20분 재운 뒤 센 불에 볶기. 흰밥과 상추쌈으로. 어린이도 좋아함.",
      },
      {
        type: "h2",
        vi: "🍚 Bibimbap (비빔밥) — Cơm trộn",
        ko: "🍚 비빔밥 — 영양 가득한 한 그릇",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐⭐ · Thời gian: 25 phút. Cơm + rau (cà rốt, giá, rau bina) xào riêng + thịt bò xào + trứng ốp la + 1 thìa gochujang. Trộn đều khi ăn. Đẹp mắt, đầy đủ dinh dưỡng.",
        ko:
          "난이도: ⭐⭐ · 시간: 25분. 밥 + 따로 볶은 야채(당근·콩나물·시금치) + 볶은 소고기 + 계란프라이 + 고추장 1 큰술. 비벼서 먹어요. 보기에도 예쁘고 영양가도 만점.",
      },
      {
        type: "h2",
        vi: "🌶️ Tteokbokki (떡볶이) — Bánh gạo cay",
        ko: "🌶️ 떡볶이 — 매콤달콤한 떡요리",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐ · Thời gian: 15 phút. Tteok (mua sẵn) + chả cá + nước + gochujang + đường + tỏi. Đun sôi 10 phút. Ngon lại nhanh — món tủ của học sinh sinh viên Hàn.",
        ko:
          "난이도: ⭐ · 시간: 15분. 떡 + 어묵 + 물 + 고추장 + 설탕 + 마늘. 10분 끓이면 끝. 빠르고 맛있어서 학생들 단골 메뉴.",
      },
      {
        type: "h2",
        vi: "🍲 Kimchi-jjigae (김치찌개) — Canh kimchi",
        ko: "🍲 김치찌개 — 한국인의 일상 국물",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐⭐ · Thời gian: 30 phút. Kimchi chua + thịt ba chỉ + đậu hũ + hành + nước. Đun 25 phút cho ngấm. Ăn nóng với cơm trắng — bạn sẽ hiểu vì sao người Hàn ăn món này hàng tuần.",
        ko:
          "난이도: ⭐⭐ · 시간: 30분. 신김치 + 삼겹살 + 두부 + 파 + 물. 25분 끓여서 깊게 우려내요. 흰밥과 함께 따뜻하게 — 왜 한국인이 매주 먹는지 알게 됩니다.",
      },
      {
        type: "h2",
        vi: "🍝 Japchae (잡채) — Miến trộn",
        ko: "🍝 잡채 — 잔치 단골 메뉴",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐⭐ · Thời gian: 40 phút. Miến khoai lang Hàn (당면) + cà rốt + nấm + thịt bò + xì dầu + đường + dầu vừng. Trộn đều. Phục vụ ấm hoặc nguội — đều ngon.",
        ko:
          "난이도: ⭐⭐ · 시간: 40분. 당면 + 당근 + 버섯 + 소고기 + 간장 + 설탕 + 참기름. 잘 무쳐주세요. 따뜻하게도 차게도 모두 맛있어요.",
      },
      {
        type: "h2",
        vi: "🍙 Kimbap (김밥) — Cơm cuộn",
        ko: "🍙 김밥 — 소풍과 도시락의 클래식",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐⭐ · Thời gian: 30 phút. Lá rong biển + cơm + giấm + đường + nguyên liệu (jambon, trứng, dưa chuột, củ cải vàng, cà rốt xào). Cuốn chặt rồi cắt khúc. Đem đi picnic, đi học, đi làm.",
        ko:
          "난이도: ⭐⭐ · 시간: 30분. 김 + 밥 + 식초 + 설탕 + 속재료(햄·계란·오이·단무지·당근볶음). 단단히 말아서 잘라요. 소풍·도시락에 완벽.",
      },
      {
        type: "h2",
        vi: "🥞 Pajeon (파전) — Bánh xèo hành Hàn",
        ko: "🥞 파전 — 비 오는 날의 친구",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐ · Thời gian: 20 phút. Bột mì + nước + trứng + hành lá to + (tùy chọn) hải sản. Đổ ra chảo dầu nóng, chiên 2 mặt vàng giòn. Chấm xì dầu + giấm + ớt. Đặc biệt hợp với rượu makgeolli.",
        ko:
          "난이도: ⭐ · 시간: 20분. 밀가루 + 물 + 계란 + 큼직한 파 + (선택) 해물. 기름에 양면 노릇하게 부쳐요. 간장+식초+고춧가루 양념장에 찍어 먹어요. 막걸리와 환상의 궁합.",
      },
      {
        type: "h2",
        vi: "🥣 Doenjang-jjigae (된장찌개) — Canh tương đậu",
        ko: "🥣 된장찌개 — 한국 가정식의 영혼",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐⭐ · Thời gian: 25 phút. Tương đậu Hàn (된장) + đậu hũ + bí ngòi + khoai tây + hành + nước. Đun sôi rồi liu riu. Mùi đặc trưng nồng — yêu hoặc ghét, không có giữa.",
        ko:
          "난이도: ⭐⭐ · 시간: 25분. 된장 + 두부 + 애호박 + 감자 + 파 + 물. 끓여서 약불로 졸여요. 구수한 향이 강해서 호불호가 갈리지만 한 번 빠지면 헤어나기 힘들어요.",
      },
      {
        type: "h2",
        vi: "🍳 Kimchi-bokkeumbap (김치볶음밥) — Cơm chiên kimchi",
        ko: "🍳 김치볶음밥 — 신김치 처리법의 정답",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐ · Thời gian: 15 phút. Cơm nguội + kimchi cắt nhỏ + ham hoặc thịt + dầu. Xào 10 phút. Trên cùng đặt 1 trứng ốp la. Đơn giản nhất — và ngon đến bất ngờ.",
        ko:
          "난이도: ⭐ · 시간: 15분. 식은밥 + 잘게 썬 김치 + 햄/고기 + 기름. 10분 볶고 위에 계란프라이 하나. 가장 간단한데 가장 맛있는 메뉴.",
      },
      {
        type: "h2",
        vi: "🥗 Kongnamul-guk (콩나물국) — Canh giá đỗ",
        ko: "🥗 콩나물국 — 숙취 해소 1위",
      },
      {
        type: "p",
        vi:
          "Mức độ dễ: ⭐ · Thời gian: 15 phút. Giá đỗ + nước + tỏi + muối + (tùy) ớt bột. Đun sôi 10 phút. Mát, thanh, giải rượu — món tủ buổi sáng sau đêm vui.",
        ko:
          "난이도: ⭐ · 시간: 15분. 콩나물 + 물 + 마늘 + 소금 + (선택) 고춧가루. 10분 끓여요. 시원하고 깔끔해서 술 마신 다음날 아침에 최고.",
      },
      {
        type: "callout",
        vi:
          "🛒 Mua nguyên liệu Hàn ở đâu tại Việt Nam? Lotte Mart (TPHCM, Hà Nội), Emart (TPHCM), K-Mart (Phú Mỹ Hưng, Mỹ Đình), hoặc đặt online qua Tiki / Shopee. Gochujang, doenjang, dầu vừng là ba thứ luôn nên có sẵn trong tủ bếp.",
        ko:
          "🛒 베트남에서 한식 재료 어디서 살까? 롯데마트(호치민·하노이), 이마트(호치민), K-Mart(푸미흥·미딩), 또는 Tiki·Shopee 온라인. 고추장·된장·참기름 이 세 가지는 베트남 부엌의 필수 아이템.",
      },
      {
        type: "h2",
        vi: "Còn món nào hợp với khẩu vị bạn?",
        ko: "당신 입맛에 맞는 한식은?",
      },
      {
        type: "p",
        vi:
          "Nếu bạn không biết bắt đầu từ món nào, làm thử quiz Hàn Thực MBTI của chúng tôi — 12 câu hỏi 5 phút, gợi ý 3 món Hàn hợp khẩu vị bạn nhất từ 47 món nổi tiếng.",
        ko:
          "어떤 메뉴부터 시작할지 모르겠다면, '한식 MBTI' 퀴즈를 해보세요 — 12문항·5분이면 47가지 한식 중 당신에게 가장 잘 맞는 3가지를 추천받을 수 있어요.",
      },
      {
        type: "cta",
        href: "/mon-an-han-quoc",
        vi: "🍜 Làm Quiz Hàn Thực MBTI",
        ko: "🍜 한식 MBTI 퀴즈 시작",
      },
    ],
  },

  // ============================================================
  // 4. How to read Korean names (romaja guide)
  // ============================================================
  {
    slug: "cach-doc-ten-han-quoc-romaja",
    emoji: "🔤",
    category: "language",
    publishDate: "2026-05-10",
    readMinutes: 6,
    titleVi: "Cách đọc tên Hàn Quốc — hướng dẫn romaja cho người Việt",
    titleKo: "한국 이름 읽는 법 — 베트남인을 위한 로마자 가이드",
    descVi:
      "Tại sao 'Lee' lại đọc là 'Yi'? Sự khác nhau giữa 'eo' và 'e'? Hướng dẫn đọc tên Hàn Quốc bằng tiếng Việt cho người mới — kèm ví dụ K-pop, K-drama.",
    descKo:
      "왜 '이'가 'Lee'로 표기될까? 'eo'와 'e'의 차이는? 베트남인을 위한 한국 이름 읽기 입문 가이드 — K-팝·K-드라마 예시 포함.",
    body: [
      {
        type: "p",
        vi:
          "Bạn từng thắc mắc tại sao 이민호 lại được viết là 'Lee Min-ho' chứ không phải 'I Min-ho'? Hay 'eo' trong 'Seo Yea-ji' đọc thế nào cho đúng? Bài viết này sẽ giúp bạn hiểu cách đọc tên Hàn — không cần học tiếng Hàn, chỉ cần biết vài quy tắc romaja.",
        ko:
          "이민호가 왜 'Lee Min-ho'로 표기될까요? 서예지의 'Seo'에서 'eo'는 어떻게 읽어야 할까요? 이 글은 한국어를 모르는 베트남인을 위한 한국 이름 발음 가이드입니다.",
      },
      {
        type: "h2",
        vi: "Romaja là gì?",
        ko: "로마자란?",
      },
      {
        type: "p",
        vi:
          "Romaja (로마자) là cách viết tiếng Hàn bằng chữ La-tinh. Hệ thống chính thức của Hàn Quốc gọi là Revised Romanization (2000). Tuy nhiên, người Hàn vẫn quen viết tên theo cách cũ — đó là lý do bạn thấy 'Lee', 'Park', 'Kim' thay vì 'I', 'Bak', 'Gim'.",
        ko:
          "로마자란 한국어를 라틴 문자로 표기하는 방식입니다. 공식 표기는 2000년 개정안이지만, 사람 이름은 옛 표기를 그대로 쓰는 경우가 많아 'Lee, Park, Kim' 같은 형태가 익숙하죠.",
      },
      {
        type: "h2",
        vi: "Bảng nguyên âm — quan trọng nhất",
        ko: "모음 표 — 가장 중요한 부분",
      },
      {
        type: "ul",
        vi: [
          "**a** (아) → 'a' như tiếng Việt — 박 (Park) đọc là 'Pak'",
          "**eo** (어) → 'ơ' tiếng Việt — 서 (Seo) đọc là 'Sơ'",
          "**o** (오) → 'ô' tiếng Việt — 호 (Ho) đọc là 'Hô'",
          "**u** (우) → 'u' tiếng Việt — 우 (U/Woo) đọc là 'U'",
          "**eu** (으) → giống 'ư' tiếng Việt — 은 (Eun) đọc là 'Ưn'",
          "**i** (이) → 'i' tiếng Việt — 이 (Lee/I) đọc là 'I'",
          "**ae** (애) → 'e' tiếng Việt — 채 (Chae) đọc là 'Che'",
          "**e** (에) → cũng là 'ê' — 예 (Ye) đọc là 'Yê'",
          "**oe** (외) → 'uê' — 최 (Choi) đọc là 'Chuê'",
          "**ui** (의) → 'ưi' — 의 đọc là 'Ưi'",
        ],
        ko: [
          "**a** (아) → 베트남어 'a' — 박(Park)는 '박'",
          "**eo** (어) → 베트남어 'ơ' — 서(Seo)는 '서'",
          "**o** (오) → 베트남어 'ô' — 호(Ho)는 '호'",
          "**u** (우) → 베트남어 'u' — 우(Woo)는 '우'",
          "**eu** (으) → 베트남어 'ư'와 비슷 — 은(Eun)은 '은'",
          "**i** (이) → 베트남어 'i' — 이(Lee)는 '이'",
          "**ae** (애) → 베트남어 'e' — 채(Chae)는 '채'",
          "**e** (에) → 'ê'에 가까움 — 예(Ye)는 '예'",
          "**oe** (외) → 'uê' — 최(Choi)는 '최'",
          "**ui** (의) → 'ưi' — 의는 '의'",
        ],
      },
      {
        type: "callout",
        vi:
          "⚠️ Lỗi phổ biến nhất: 'eo' KHÔNG phải 'eo' tiếng Anh — mà là 'ơ'. Vậy 정 (Jeong) đọc đúng là 'Jơng', không phải 'Geo-ng'.",
        ko:
          "⚠️ 가장 흔한 실수: 'eo'는 영어식 'eo'가 아니라 'ơ' 발음에 가까워요. 정(Jeong)은 'Jơng'으로 읽는 게 맞습니다.",
      },
      {
        type: "h2",
        vi: "Bảng phụ âm — chú ý vài cặp đặc biệt",
        ko: "자음 표 — 몇 가지 주의 사항",
      },
      {
        type: "ul",
        vi: [
          "**g/k** (ㄱ) — đầu từ là 'k' (가다 = ka-da), giữa từ là 'g' (아가 = a-ga)",
          "**d/t** (ㄷ) — tương tự",
          "**b/p** (ㅂ) — tương tự",
          "**j/ch** (ㅈ) — đầu từ 'ch', giữa từ 'j' nhẹ",
          "**r/l** (ㄹ) — đầu từ 'r', cuối từ 'l'. 라면 = ra-myơn, 갈비 = kal-bi",
          "**ng** (ㅇ) — chỉ có ở cuối âm tiết: 정 = chơng",
        ],
        ko: [
          "**g/k** (ㄱ) — 어두는 'k', 어중은 'g' (가다 = ka-da, 아가 = a-ga)",
          "**d/t** (ㄷ) — 마찬가지",
          "**b/p** (ㅂ) — 마찬가지",
          "**j/ch** (ㅈ) — 어두 'ch', 어중 부드러운 'j'",
          "**r/l** (ㄹ) — 어두 'r', 어말 'l'. 라면 = ra-myơn, 갈비 = kal-bi",
          "**ng** (ㅇ) — 받침에서만: 정 = 정",
        ],
      },
      {
        type: "h2",
        vi: "Ví dụ với người nổi tiếng K-pop",
        ko: "K-팝 스타로 보는 예시",
      },
      {
        type: "ul",
        vi: [
          "**김지수** Kim Ji-soo (BLACKPINK) — 'Kim Chi-su'",
          "**박서준** Park Seo-jun (diễn viên) — 'Pak Sơ-jun'",
          "**이지은** Lee Ji-eun (IU) — 'I Chi-ưn'",
          "**손나은** Son Na-eun (Apink) — 'Son Na-ưn'",
          "**정해인** Jung Hae-in (diễn viên) — 'Chơng He-in'",
          "**조세호** Cho Se-ho (MC) — 'Cho Sê-hô'",
        ],
        ko: [
          "**김지수** Kim Ji-soo (BLACKPINK) — 'Kim Chi-su'",
          "**박서준** Park Seo-jun (배우) — 'Pak Sơ-jun'",
          "**이지은** Lee Ji-eun (IU) — 'I Chi-ưn'",
          "**손나은** Son Na-eun (Apink) — 'Son Na-ưn'",
          "**정해인** Jung Hae-in (배우) — 'Chơng He-in'",
          "**조세호** Cho Se-ho (MC) — 'Cho Sê-hô'",
        ],
      },
      {
        type: "h2",
        vi: "Quy tắc viết tên (xếp thứ tự)",
        ko: "이름 표기 순서 규칙",
      },
      {
        type: "p",
        vi:
          "Tên Hàn theo thứ tự **HỌ + TÊN**, đối lập với phương Tây. Ví dụ '김민준' = họ Kim + tên Minjun. Khi viết bằng romaja, người Hàn thường để theo đúng thứ tự gốc: 'Kim Min-jun' (không phải 'Min-jun Kim'). Tên gồm 2 chữ thường viết liền nhau hoặc cách bằng dấu gạch nối: 'Minjun' hoặc 'Min-jun'.",
        ko:
          "한국 이름은 **성 + 이름** 순서로, 서양 방식의 반대입니다. 예: '김민준' = 성 김 + 이름 민준. 로마자 표기에서도 보통 원래 순서대로 'Kim Min-jun'으로 씁니다. 이름 두 글자는 붙여 쓰거나 하이픈을 넣어요: 'Minjun' 또는 'Min-jun'.",
      },
      {
        type: "cta",
        href: "/ten-han-quoc",
        vi: "✨ Tạo tên Hàn của riêng bạn (kèm phát âm romaja)",
        ko: "✨ 내 한국 이름 만들기 (로마자 표기 포함)",
      },
    ],
  },

  // ============================================================
  // 5. Five Elements (Wu Xing) in Korean culture
  // ============================================================
  {
    slug: "ngu-hanh-trong-van-hoa-han",
    emoji: "🌳",
    category: "culture",
    publishDate: "2026-05-10",
    readMinutes: 7,
    titleVi: "Ngũ Hành (오행) trong văn hóa Hàn — Mộc Hỏa Thổ Kim Thủy là gì?",
    titleKo: "오행(五行)과 한국 문화 — 목·화·토·금·수의 의미",
    descVi:
      "Ngũ Hành là nền tảng của Saju, ẩm thực, kiến trúc và cả phong thủy ở Hàn Quốc. Tìm hiểu 5 yếu tố Mộc Hỏa Thổ Kim Thủy, cách chúng tương sinh tương khắc, và áp dụng vào đời sống hằng ngày.",
    descKo:
      "오행은 사주, 한식, 건축, 풍수까지 한국 문화의 근간을 이룹니다. 목·화·토·금·수 다섯 기운과 상생상극 원리, 그리고 일상에 적용하는 법을 정리했어요.",
    body: [
      {
        type: "p",
        vi:
          "Khi xem Saju, bạn sẽ liên tục thấy 5 từ: Mộc, Hỏa, Thổ, Kim, Thủy. Đó là 'Ngũ Hành' (오행, 五行) — 5 yếu tố cơ bản tạo nên vũ trụ theo triết lý Đông Á cổ. Nhưng Ngũ Hành không chỉ là chuyện bói toán — nó hiện diện khắp nơi trong văn hóa Hàn: trong nấu nướng, trong cách bài trí nhà, thậm chí trong tên gọi các ngày trong tuần.",
        ko:
          "사주를 보면 늘 등장하는 다섯 글자: 목(木)·화(火)·토(土)·금(金)·수(水). 이게 바로 '오행(五行)'으로, 동아시아 사상에서 우주를 이루는 다섯 기운입니다. 오행은 점술뿐 아니라 한국 음식, 인테리어, 요일 이름에까지 스며들어 있어요.",
      },
      {
        type: "h2",
        vi: "5 yếu tố — bản chất và đặc trưng",
        ko: "다섯 기운 — 본질과 특징",
      },
      {
        type: "h3",
        vi: "🌳 Mộc (木, 목) — Sự phát triển",
        ko: "🌳 목(木) — 성장",
      },
      {
        type: "p",
        vi:
          "Đại diện cho cây cối, mùa xuân, hướng Đông, màu xanh lá. Người mệnh Mộc thường sáng tạo, hiền lành, ưa phát triển và đôi khi quá mềm lòng.",
        ko:
          "나무·봄·동쪽·초록색을 상징해요. 목 기운인 사람은 창의적이고 온화하며 성장 지향적이지만, 때로 너무 마음이 약할 수 있어요.",
      },
      {
        type: "h3",
        vi: "🔥 Hỏa (火, 화) — Năng lượng",
        ko: "🔥 화(火) — 에너지",
      },
      {
        type: "p",
        vi:
          "Lửa, mùa hè, hướng Nam, màu đỏ/cam. Người mệnh Hỏa nhiệt huyết, lôi cuốn, hoạt bát — nhưng cũng dễ bốc đồng và kiệt sức.",
        ko:
          "불·여름·남쪽·빨강/주황을 의미합니다. 화 기운인 사람은 열정적이고 매력적이지만, 충동적이거나 쉽게 지칠 수 있어요.",
      },
      {
        type: "h3",
        vi: "🪨 Thổ (土, 토) — Sự ổn định",
        ko: "🪨 토(土) — 안정",
      },
      {
        type: "p",
        vi:
          "Đất, hướng Trung tâm, các tháng giao mùa, màu vàng/nâu. Người mệnh Thổ đáng tin, ổn định, chín chắn — nhưng có thể quá an phận.",
        ko:
          "흙·중앙·환절기·황토색을 상징해요. 토 기운인 사람은 신뢰감 있고 안정적이며 성숙하지만, 때로 너무 안주할 수도 있어요.",
      },
      {
        type: "h3",
        vi: "⚙️ Kim (金, 금) — Sự rõ ràng",
        ko: "⚙️ 금(金) — 명료함",
      },
      {
        type: "p",
        vi:
          "Kim loại, mùa thu, hướng Tây, màu trắng/bạc. Người mệnh Kim quyết đoán, kỷ luật, công bằng — nhưng đôi khi cứng nhắc.",
        ko:
          "쇠·가을·서쪽·흰색/은색을 뜻합니다. 금 기운인 사람은 결단력 있고 절제되어 있으며 공정하지만, 때로 융통성이 부족할 수 있어요.",
      },
      {
        type: "h3",
        vi: "💧 Thủy (水, 수) — Sự linh hoạt",
        ko: "💧 수(水) — 유연함",
      },
      {
        type: "p",
        vi:
          "Nước, mùa đông, hướng Bắc, màu xanh dương đậm/đen. Người mệnh Thủy linh hoạt, sâu sắc, thấu cảm — nhưng dễ bị cảm xúc người khác chi phối.",
        ko:
          "물·겨울·북쪽·진한 파랑/검정을 상징해요. 수 기운인 사람은 유연하고 깊이 있으며 공감 능력이 뛰어나지만, 타인의 감정에 휘둘리기 쉬워요.",
      },
      {
        type: "h2",
        vi: "Tương sinh — Tương khắc",
        ko: "상생과 상극",
      },
      {
        type: "p",
        vi:
          "5 hành không tồn tại độc lập — chúng tác động lẫn nhau theo 2 vòng:",
        ko: "다섯 기운은 독립적으로 존재하지 않고 두 가지 순환으로 서로에게 영향을 줍니다:",
      },
      {
        type: "ul",
        vi: [
          "**Tương sinh** (상생): Mộc → Hỏa → Thổ → Kim → Thủy → Mộc. (Cây cháy thành lửa, lửa tạo tro thành đất, đất tạo kim loại, kim loại làm nước ngưng tụ, nước nuôi cây.)",
          "**Tương khắc** (상극): Mộc khắc Thổ, Thổ khắc Thủy, Thủy khắc Hỏa, Hỏa khắc Kim, Kim khắc Mộc. (Cây hút đất, đất chặn nước, nước dập lửa, lửa nung kim, kim chặt cây.)",
        ],
        ko: [
          "**상생(相生)**: 목→화→토→금→수→목. (나무가 불을 키우고, 불은 흙을 만들고, 흙에서 금속이 나오고, 금속에서 물이 맺히고, 물이 나무를 자라게 함.)",
          "**상극(相剋)**: 목극토, 토극수, 수극화, 화극금, 금극목. (나무는 흙을 흡수, 흙은 물을 막고, 물은 불을 끄고, 불은 쇠를 녹이고, 쇠는 나무를 자름.)",
        ],
      },
      {
        type: "h2",
        vi: "Ngũ Hành trong đời sống Hàn",
        ko: "한국 일상 속의 오행",
      },
      {
        type: "ul",
        vi: [
          "**Ẩm thực**: Bibimbap (비빔밥) cố ý dùng 5 màu sắc tượng trưng 5 hành — đỏ (cà rốt = Hỏa), xanh (rau = Mộc), vàng (trứng = Thổ), trắng (giá = Kim), đen (rong biển = Thủy).",
          "**Ngày trong tuần**: 월(Mộc/Mặt trăng), 화(Hỏa), 수(Thủy), 목(Mộc), 금(Kim), 토(Thổ), 일(Nhật/Mặt trời) — chính là 5 hành + Mặt trời + Mặt trăng.",
          "**Trang phục Hanbok**: 5 màu cơ bản (오방색 — ngũ phương sắc) tương ứng 5 hành & 5 hướng.",
          "**Sau sinh**: ăn 미역국 (canh rong biển) — màu đen (Thủy) để bổ sung sau sinh nở.",
        ],
        ko: [
          "**한식**: 비빔밥은 의도적으로 오색을 사용해요 — 빨강(당근=화), 초록(나물=목), 노랑(계란=토), 흰색(콩나물=금), 검정(김=수).",
          "**요일**: 월·화·수·목·금·토·일 — 그대로 다섯 기운에 해와 달이 더해진 것.",
          "**한복**: 오방색(빨강·노랑·파랑·흰색·검정)은 오행과 다섯 방위에 대응.",
          "**산모식**: 미역국은 검정색(수) 기운으로 출산 후 보충.",
        ],
      },
      {
        type: "h2",
        vi: "Ứng dụng vào Saju của bạn",
        ko: "사주에 적용하기",
      },
      {
        type: "p",
        vi:
          "Khi xem Saju, hệ thống đếm 8 chữ Bát Tự thuộc hành nào, tìm hành mạnh nhất và yếu nhất. Hành mạnh nhất = đặc tính nổi bật của bạn; hành yếu nhất = thứ bạn cần bổ sung. Ví dụ Hỏa yếu thì nên dùng đồ đỏ, hướng Nam, hoạt động sôi nổi để cân bằng.",
        ko:
          "사주를 볼 때 시스템은 팔자(8글자) 각각이 어느 기운에 속하는지 세어, 가장 강한 기운과 약한 기운을 찾습니다. 강한 쪽 = 두드러진 특성, 약한 쪽 = 보완이 필요한 부분. 예: 화가 약하면 빨간 옷, 남향, 활동적인 모임으로 균형을 맞춥니다.",
      },
      {
        type: "callout",
        vi:
          "💡 Tip thú vị: Nhiều cặp đôi Hàn xem Saju 2 người để biết hành nào của người này bổ sung cho người kia — tương sinh thì hợp, tương khắc thì cần khéo léo hơn trong giao tiếp.",
        ko:
          "💡 흥미로운 팁: 한국 커플은 두 사람의 사주를 함께 봐서 누구의 어떤 기운이 상대를 보완하는지 따져봅니다 — 상생이면 잘 맞고, 상극이면 소통에 좀 더 신경 쓰면 좋아요.",
      },
      {
        type: "p",
        vi:
          "Muốn biết bạn thuộc hành nào và hành nào của bạn yếu? Xem Saju miễn phí của Hanbiet — nhập ngày sinh, có ngay phân tích Ngũ Hành chi tiết bằng tiếng Việt.",
        ko:
          "어느 기운에 속하는지, 어떤 기운이 약한지 알고 싶다면 Hanbiet의 무료 사주를 보세요 — 생년월일만 넣으면 베트남어로 오행 분석을 받을 수 있어요.",
      },
      {
        type: "cta",
        href: "/sau-han-quoc",
        vi: "🔮 Xem Saju & phân tích Ngũ Hành",
        ko: "🔮 사주·오행 분석 보기",
      },
    ],
  },

  // ============================================================
  // 6. Korean wedding customs
  // ============================================================
  {
    slug: "phong-tuc-cuoi-hoi-han-quoc",
    emoji: "💍",
    category: "culture",
    publishDate: "2026-05-09",
    readMinutes: 6,
    titleVi: "Phong tục cưới hỏi Hàn Quốc — 5 điều người Việt thường ngạc nhiên",
    titleKo: "한국의 결혼 풍습 — 베트남인이 놀라는 5가지",
    descVi:
      "Đám cưới Hàn Quốc khác đám cưới Việt thế nào? Từ áo cưới Hanbok, lễ Pyebaek, tiền mừng đến tiệc tiếp tân — 5 điểm người Việt thường ngạc nhiên khi dự cưới Hàn lần đầu.",
    descKo:
      "한국 결혼식과 베트남 결혼식의 차이는? 한복, 폐백, 축의금, 피로연까지 — 베트남인이 한국 결혼식을 처음 갈 때 놀라는 5가지를 정리했어요.",
    body: [
      {
        type: "p",
        vi:
          "Người Việt khi xem K-drama hay thấy cảnh đám cưới — cô dâu chú rể đứng trên bục, hai họ ngồi đối diện. Nhưng nếu thực sự dự một đám cưới Hàn, bạn sẽ thấy nhiều điểm khác Việt Nam đến bất ngờ. Bài này tổng hợp 5 điểm khác biệt thú vị nhất.",
        ko:
          "K-드라마에서 결혼식 장면 — 신랑신부가 단상에 서고 양가가 마주 앉는 — 익숙하시죠? 하지만 베트남인이 실제 한국 결혼식을 가보면 베트남과 다른 점이 많아 놀라곤 합니다.",
      },
      {
        type: "h2",
        vi: "1. Đám cưới chính chỉ kéo dài 30 phút",
        ko: "1. 본 결혼식은 30분이면 끝",
      },
      {
        type: "p",
        vi:
          "Đám cưới Việt thường kéo dài 2-4 tiếng với tiệc, hát, MC. Đám cưới Hàn thì khác — phần lễ chính chỉ 20-30 phút, sau đó là tiệc đứng (buffet) ăn nhanh rồi về. Khách thường tới sớm, ký sổ tiền mừng, ăn buffet, rồi xem phần lễ chỉ 20 phút cuối.",
        ko:
          "베트남 결혼식은 2-4시간 동안 식사·노래·사회 등으로 이어지는데, 한국은 다릅니다 — 본 식은 20-30분이고, 그 후 피로연 뷔페에서 빠르게 식사하고 돌아갑니다.",
      },
      {
        type: "h2",
        vi: "2. Tiền mừng đút phong bì trắng — không có thiệp",
        ko: "2. 축의금은 흰 봉투에 — 카드 없음",
      },
      {
        type: "p",
        vi:
          "Ở Việt Nam có thiệp cưới, nhưng ở Hàn người ta dùng phong bì trắng đơn giản (축의금 봉투, có thể mua sẵn ở cửa hàng). Mức tiền: bạn bè 50,000~100,000 won (≈ 1~2 triệu VND), người thân hơn 100,000 won. Số tiền PHẢI là số lẻ (5만원, 7만원, 10만원, 30만원) — số chẵn 4만원 mang ý nghĩa xui (4 = '죽음').",
        ko:
          "베트남은 카드를 쓰지만 한국은 단순한 흰 봉투(축의금 봉투)를 씁니다. 친구는 5만~10만원, 가까운 사이는 그 이상. 액수는 반드시 홀수(3·5·7·10·30만)로 — 4만원은 '죽을 사(死)'를 떠올려 피합니다.",
      },
      {
        type: "h2",
        vi: "3. Pyebaek (폐백) — Lễ chào hỏi gia đình bí mật",
        ko: "3. 폐백 — 비공개 가족 인사 의식",
      },
      {
        type: "p",
        vi:
          "Đây là phần thú vị nhất với người Việt. Sau đám cưới chính, cô dâu chú rể mặc Hanbok truyền thống vào phòng riêng để chào bố mẹ chồng. Bố mẹ chồng ném quả táo tàu (대추) và hạt dẻ (밤) vào áo cô dâu — số quả hứng được tượng trưng số con cái sau này. Khách bình thường không tham dự — chỉ gia đình.",
        ko:
          "베트남인에게 가장 흥미로운 부분. 본 식 후 신랑신부가 한복으로 갈아입고 가족만의 방에서 부모님께 인사드려요. 부모님이 대추·밤을 신부 한복에 던지면 받은 개수가 자녀 수를 상징한다고 해요. 일반 하객은 참여 못 함.",
      },
      {
        type: "h2",
        vi: "4. Studio chụp ảnh trước hôn lễ kéo dài hàng tháng",
        ko: "4. 결혼식 전 스튜디오 촬영 — 몇 달에 걸침",
      },
      {
        type: "p",
        vi:
          "Cặp đôi Hàn dành 1-2 ngày trong studio chuyên nghiệp chụp 200-300 tấm ảnh trước hôn lễ. Album dày 50-100 trang, làm thành sách lưu niệm. Ngân sách trung bình: 1,500,000~3,000,000 won (≈ 30-60 triệu VND) chỉ riêng phần ảnh. Người Việt thường giật mình khi nghe con số.",
        ko:
          "한국 커플은 결혼 전 1-2일 스튜디오에서 200-300장의 사진을 촬영해 50-100페이지 앨범을 만듭니다. 사진 비용만 평균 150-300만원 — 베트남인이 들으면 깜짝 놀라는 부분.",
      },
      {
        type: "h2",
        vi: "5. Có thể không mời nhiều bạn bè — quan trọng là người thân",
        ko: "5. 친구는 많이 안 부를 수 있음 — 가족이 중심",
      },
      {
        type: "p",
        vi:
          "Đám cưới Việt mời 300-500 khách là bình thường. Đám cưới Hàn nhỏ hơn — 100-200 khách phổ biến. Vì đa số là họ hàng, đồng nghiệp gần và bạn thân, không phải mời rộng. Cô dâu/chú rể cũng có thể tổ chức 'small wedding' chỉ 30-50 khách.",
        ko:
          "베트남은 결혼식에 300-500명을 초대하는 게 보통이지만, 한국은 100-200명이 흔합니다. 가족·가까운 동료·친한 친구 위주로 부르고, '스몰웨딩'으로 30-50명만 부르기도 해요.",
      },
      {
        type: "callout",
        vi:
          "💡 Mẹo: Nếu được mời dự đám cưới Hàn, mặc đồ formal (com-lê đen, váy lịch sự), đến trước 30 phút, đút tiền vào phong bì trắng có ghi tên mình ở mặt sau, ăn buffet trước hoặc sau lễ — không phải lúc nào cũng cần ngồi xem hết.",
        ko:
          "💡 한국 결혼식에 초대받으면: 포멀하게(검은 정장·단정한 원피스), 30분 일찍 도착, 흰 봉투 뒷면에 자기 이름 적기, 식 전후 뷔페에서 식사 — 본 식을 끝까지 안 봐도 괜찮아요.",
      },
      {
        type: "cta",
        href: "/bai-viet",
        vi: "📖 Đọc thêm về văn hóa Hàn Quốc",
        ko: "📖 한국 문화 더 읽어보기",
      },
    ],
  },

  // ============================================================
  // 7. Hanbok guide
  // ============================================================
  {
    slug: "hanbok-huong-dan-cho-nguoi-moi",
    emoji: "👘",
    category: "culture",
    publishDate: "2026-05-09",
    readMinutes: 6,
    titleVi: "Hanbok (한복) — Hướng dẫn cho người mới: ý nghĩa, cách mặc, mặc dịp nào",
    titleKo: "한복(韓服) — 입문자 가이드: 의미, 입는 법, 어울리는 자리",
    descVi:
      "Hanbok không chỉ là áo dài Hàn Quốc — nó là biểu tượng văn hóa với ý nghĩa Ngũ Hành sâu sắc. Hướng dẫn về Hanbok cho người Việt: lịch sử, các loại, cách mặc, và mặc dịp nào.",
    descKo:
      "한복은 단순한 한국 전통 의상이 아니라 오행 사상을 담은 문화 상징. 베트남인을 위한 한복 가이드 — 역사·종류·착용법·적합한 자리까지.",
    body: [
      {
        type: "p",
        vi:
          "Du khách đến Hàn Quốc đều một lần thuê Hanbok chụp ảnh ở cung điện Gyeongbokgung. Nhưng Hanbok không chỉ là 'trang phục selfie' — nó là biểu tượng văn hóa, có ý nghĩa Ngũ Hành sâu sắc, và vẫn được mặc trong các dịp quan trọng nhất ở Hàn Quốc.",
        ko:
          "한국에 온 관광객 누구나 경복궁 앞에서 한복 입고 사진을 찍죠. 하지만 한복은 '셀카용 의상'이 아니라 오행 사상이 담긴 문화 상징이며, 한국에서 가장 중요한 자리에 여전히 입는 옷입니다.",
      },
      {
        type: "h2",
        vi: "Cấu trúc Hanbok — Nữ và Nam",
        ko: "한복 구성 — 여성과 남성",
      },
      {
        type: "ul",
        vi: [
          "**Hanbok nữ**: Jeogori (저고리, áo trên ngắn) + Chima (치마, váy dài chân váy rộng). Jeogori thường khác màu với Chima.",
          "**Hanbok nam**: Jeogori (áo trên) + Baji (바지, quần rộng) + Durumagi (두루마기, áo khoác dài) cho dịp trang trọng.",
          "**Phụ kiện**: Norigae (노리개, dây thắt eo trang trí), Beoseon (버선, tất trắng), Kkotsin (꽃신, giày vải có hoa).",
        ],
        ko: [
          "**여자 한복**: 저고리(짧은 윗옷) + 치마(긴 풍성한 치마). 저고리와 치마는 보통 색이 달라요.",
          "**남자 한복**: 저고리 + 바지(통 넓은 바지) + 격식 자리에는 두루마기까지.",
          "**액세서리**: 노리개(허리 장식 끈), 버선(흰 양말), 꽃신(꽃무늬 신발).",
        ],
      },
      {
        type: "h2",
        vi: "Ngũ Phương Sắc (오방색) — 5 màu Ngũ Hành",
        ko: "오방색 — 오행을 담은 5가지 색",
      },
      {
        type: "p",
        vi:
          "Hanbok truyền thống dùng 5 màu cơ bản gắn với 5 hành & 5 hướng: **Đỏ** (Hỏa, Nam), **Xanh** (Mộc, Đông), **Vàng** (Thổ, Trung tâm), **Trắng** (Kim, Tây), **Đen** (Thủy, Bắc). Đó là lý do bạn thấy Hanbok trẻ em hay phụ nữ thường có sự kết hợp đỏ + xanh — biểu tượng cho hài hòa âm dương.",
        ko:
          "전통 한복은 오행과 오방위에 대응하는 5색을 사용해요: **빨강**(화·남), **파랑**(목·동), **노랑**(토·중앙), **흰색**(금·서), **검정**(수·북). 어린이나 신부 한복에 빨강+파랑 조합이 많은 건 음양 조화를 상징.",
      },
      {
        type: "h2",
        vi: "Khi nào người Hàn mặc Hanbok hiện nay?",
        ko: "현대 한국인은 언제 한복을 입을까?",
      },
      {
        type: "ul",
        vi: [
          "**설날/추석** (Seollal, Chuseok): Tết Nguyên đán & Trung thu — gia đình mặc Hanbok cúng tổ tiên.",
          "**Đám cưới**: Cô dâu thường có 1 bộ Hanbok cho lễ Pyebaek (xem bài 'Phong tục cưới Hàn').",
          "**돌잔치** (Doljanchi): Tiệc thôi nôi 1 tuổi — bé mặc Hanbok mini.",
          "**Du lịch**: Du khách thuê Hanbok dạo cung điện (miễn phí vé vào nếu mặc Hanbok!).",
          "**Sự kiện công ty/tốt nghiệp**: Một số công ty Hàn cho phép mặc Hanbok các dịp lớn.",
        ],
        ko: [
          "**설날·추석**: 명절에 가족이 한복으로 차례.",
          "**결혼식**: 신부는 폐백용 한복 1벌 필수.",
          "**돌잔치**: 1살 생일에 아기 한복 입힘.",
          "**여행**: 관광객이 궁궐에서 한복 대여(한복 입으면 입장료 무료!).",
          "**행사·졸업식**: 일부 회사·학교에서 격식 차릴 때.",
        ],
      },
      {
        type: "h2",
        vi: "Thuê Hanbok ở Hàn Quốc",
        ko: "한국에서 한복 대여하기",
      },
      {
        type: "p",
        vi:
          "Khu vực thuê phổ biến nhất: **Bukchon Hanok Village**, **Insadong**, **Gyeongbokgung**. Giá thuê 1-2 tiếng: ~15,000-25,000 won (≈ 300-500k VND). Nhiều shop có cả tóc, phụ kiện, vali gửi đồ. Lưu ý: nếu mặc Hanbok, vào cung điện Gyeongbokgung MIỄN PHÍ — tiết kiệm 3,000 won.",
        ko:
          "대표 대여 지역: **북촌한옥마을**, **인사동**, **경복궁** 앞. 1-2시간 대여 ~1만5천원-2만5천원. 헤어·액세서리·짐 보관까지 포함된 곳이 많음. **한복 입으면 경복궁 입장료 면제** — 3,000원 절약!",
      },
      {
        type: "callout",
        vi:
          "💡 Tip Vietnam-friendly: Người Việt thường thấy Hanbok 'rộng quá' lúc đầu — nhưng đó là điểm đặc biệt. Phong cách Hanbok cố ý tạo silhouette rộng để 'che thân, lộ tâm hồn'. Khác hoàn toàn với áo dài Việt ôm cơ thể.",
          ko:
          "💡 베트남 친화 팁: 베트남인은 한복이 '너무 풍성하다'고 느끼지만 그게 핵심. 한복은 의도적으로 풍성한 실루엣으로 '몸을 가리고 마음을 보여주는' 미학 — 몸매를 강조하는 베트남 아오자이와 정반대.",
      },
      {
        type: "cta",
        href: "/bai-viet",
        vi: "📖 Khám phá thêm bài viết văn hóa Hàn",
        ko: "📖 한국 문화 글 더 보기",
      },
    ],
  },

  // ============================================================
  // 8. 20 Korean greetings
  // ============================================================
  {
    slug: "20-cau-chao-tieng-han",
    emoji: "👋",
    category: "language",
    publishDate: "2026-05-09",
    readMinutes: 5,
    titleVi: "20 câu chào tiếng Hàn cho người Việt mới học (Annyeong, Gomawo, Saranghae...)",
    titleKo: "베트남인 입문자를 위한 한국어 인사 20개",
    descVi:
      "Học 20 câu chào tiếng Hàn quan trọng nhất để bắt đầu nói chuyện với người Hàn — kèm cách phát âm, mức độ trang trọng và bối cảnh sử dụng.",
    descKo:
      "한국 사람과 대화 시작하기 위한 한국어 인사 20개 — 발음, 격식 정도, 사용 상황까지 정리.",
    body: [
      {
        type: "p",
        vi:
          "Tiếng Hàn có hệ thống kính ngữ phức tạp — cùng một câu chào, bạn nói với sếp khác với nói với bạn cùng tuổi. Bài viết này tổng hợp 20 câu chào quan trọng nhất, chia theo mức độ trang trọng, kèm phát âm tiếng Việt.",
        ko:
          "한국어는 존댓말이 복잡합니다 — 같은 인사라도 윗사람과 친구에게 말하는 방식이 다릅니다. 가장 중요한 20개 인사를 격식 단계별로 정리했어요.",
      },
      {
        type: "h2",
        vi: "🤝 Chào trang trọng (với người lớn, sếp, người lạ)",
        ko: "🤝 격식체 인사 (어른·상사·낯선 사람에게)",
      },
      {
        type: "ol",
        vi: [
          "**안녕하세요** (Annyeonghaseyo) — '안-녕-하-세-요' — 'Xin chào'. An toàn nhất, mọi người đều dùng.",
          "**안녕히 가세요** (Annyeonghi gaseyo) — 'Tạm biệt' (nói với người ĐANG ĐI).",
          "**안녕히 계세요** (Annyeonghi gyeseyo) — 'Tạm biệt' (nói với người Ở LẠI khi mình đi).",
          "**감사합니다** (Gamsahamnida) — 'Cảm ơn'. Trang trọng.",
          "**죄송합니다** (Joesonghamnida) — 'Xin lỗi'. Trang trọng (thực sự xin lỗi).",
          "**처음 뵙겠습니다** (Cheoeum boepgetseumnida) — 'Lần đầu gặp anh/chị'. Lần đầu gặp người mới.",
          "**잘 부탁드립니다** (Jal butakdeurimnida) — 'Mong được anh/chị giúp đỡ'. Bắt buộc khi giới thiệu bản thân.",
        ],
        ko: [
          "**안녕하세요** — 'an-nyeong-ha-se-yo' — 가장 무난한 인사.",
          "**안녕히 가세요** — 떠나는 사람에게.",
          "**안녕히 계세요** — 머무는 사람에게 떠나면서.",
          "**감사합니다** — 격식체 '고맙다'.",
          "**죄송합니다** — 격식체 '미안합니다' (진심 사과).",
          "**처음 뵙겠습니다** — 처음 만났을 때.",
          "**잘 부탁드립니다** — 자기소개할 때 필수.",
        ],
      },
      {
        type: "h2",
        vi: "👫 Chào thân mật (với bạn, em, người gần)",
        ko: "👫 친근한 인사 (친구·동생·가까운 사이)",
      },
      {
        type: "ol",
        vi: [
          "**안녕** (Annyeong) — 'An-nyong' — 'Hi/Bye'. Dùng cả khi gặp và chia tay với bạn.",
          "**잘 가** (Jal ga) — 'Đi cẩn thận' / 'Bye'.",
          "**고마워** (Gomawo) — 'Cảm ơn' (thân mật).",
          "**미안해** (Mianhae) — 'Xin lỗi' (thân mật).",
          "**오랜만이야** (Oraenmaniya) — 'Lâu rồi không gặp'.",
          "**잘 자** (Jal ja) — 'Ngủ ngon'. Nói với người yêu, gia đình.",
        ],
        ko: [
          "**안녕** — 'an-nyong' — 친구 만남·헤어짐 둘 다.",
          "**잘 가** — '잘 가렴' 친근.",
          "**고마워** — 친근 '고맙다'.",
          "**미안해** — 친근 '미안하다'.",
          "**오랜만이야** — 오래간만.",
          "**잘 자** — 연인·가족에게.",
        ],
      },
      {
        type: "h2",
        vi: "💝 Câu nói cảm xúc (cho fan K-pop)",
        ko: "💝 감정 표현 (K-팝 팬용)",
      },
      {
        type: "ol",
        vi: [
          "**사랑해** (Saranghae) — 'Yêu (em/anh)'. Thân mật.",
          "**사랑해요** (Saranghaeyo) — 'Yêu (anh/chị)'. Trang trọng nhẹ.",
          "**보고 싶어** (Bogo sipeo) — 'Nhớ (em)'. Thân mật.",
          "**대박** (Daebak) — 'Đỉnh! Tuyệt vời!'. Thán từ cảm thán.",
          "**파이팅** (Paiting) — 'Cố lên!'. Cổ vũ.",
          "**잘했어** (Jalhaesseo) — 'Làm tốt lắm'. Khen.",
          "**축하해** (Chukhahae) — 'Chúc mừng'. Thân mật.",
        ],
        ko: [
          "**사랑해** — 친근 '사랑한다'.",
          "**사랑해요** — 약간 격식.",
          "**보고 싶어** — '보고 싶다'.",
          "**대박** — '와우, 대단해!' 감탄사.",
          "**파이팅** — '힘내!'",
          "**잘했어** — '잘했다' 칭찬.",
          "**축하해** — 친근 '축하한다'.",
        ],
      },
      {
        type: "callout",
        vi:
          "⚠️ Quan trọng: KHÔNG dùng câu thân mật (안녕, 고마워) với sếp, người lớn tuổi, hoặc người mới gặp — sẽ bị coi là thiếu lịch sự. Khi không chắc, dùng dạng trang trọng có '요' ở cuối là an toàn.",
        ko:
          "⚠️ 중요: 친근체(안녕·고마워)는 윗사람·낯선 사람에게 사용 금지 — 무례해 보입니다. 잘 모르겠으면 '요'가 붙는 격식체가 안전합니다.",
      },
      {
        type: "cta",
        href: "/ten-han-quoc",
        vi: "✨ Tạo tên Hàn của bạn để bắt đầu cuộc trò chuyện",
        ko: "✨ 한국 이름 만들고 대화 시작하기",
      },
    ],
  },

  // ============================================================
  // 9. Learn Hangul in 1 hour
  // ============================================================
  {
    slug: "hoc-hangul-trong-1-gio",
    emoji: "📝",
    category: "language",
    publishDate: "2026-05-09",
    readMinutes: 7,
    titleVi: "Học Hangul trong 1 giờ — 24 chữ cái Hàn dễ hơn bạn nghĩ",
    titleKo: "1시간 만에 한글 배우기 — 24자, 생각보다 쉬워요",
    descVi:
      "Hangul là bảng chữ cái dễ học nhất thế giới — Vua Sejong tạo ra để 'người dân thường có thể học trong nửa ngày'. Hướng dẫn 1 giờ cho người Việt: 14 phụ âm + 10 nguyên âm cơ bản.",
    descKo:
      "한글은 세계에서 가장 배우기 쉬운 글자 — 세종대왕이 '백성이 반나절이면 익힐 수 있게' 만들었습니다. 베트남인을 위한 1시간 입문: 자음 14개 + 모음 10개.",
    body: [
      {
        type: "p",
        vi:
          "Năm 1443, Vua Sejong phát minh ra Hangul với mục tiêu: 'Mọi người dân thường đều có thể đọc viết được'. Mỗi chữ cái có hình dáng dựa trên cơ quan phát âm — đây là lý do Hangul được UNESCO công nhận là bảng chữ cái khoa học nhất thế giới. Người Việt có thể học cơ bản chỉ trong 1 giờ.",
        ko:
          "1443년 세종대왕은 '평민도 읽고 쓸 수 있도록' 한글을 만들었습니다. 각 글자는 발음 기관 모양을 본떠서, UNESCO가 가장 과학적인 문자로 인정했어요. 베트남인도 1시간이면 기초를 배울 수 있습니다.",
      },
      {
        type: "h2",
        vi: "Bước 1: 10 nguyên âm cơ bản (15 phút)",
        ko: "1단계: 기본 모음 10개 (15분)",
      },
      {
        type: "ul",
        vi: [
          "**ㅏ** = a (như 'a' tiếng Việt)",
          "**ㅑ** = ya",
          "**ㅓ** = eo (như 'ơ' tiếng Việt)",
          "**ㅕ** = yeo (như 'yơ')",
          "**ㅗ** = o (như 'ô' tiếng Việt)",
          "**ㅛ** = yo",
          "**ㅜ** = u",
          "**ㅠ** = yu",
          "**ㅡ** = eu (như 'ư' tiếng Việt)",
          "**ㅣ** = i",
        ],
        ko: [
          "**ㅏ** = a",
          "**ㅑ** = ya",
          "**ㅓ** = eo (베트남어 'ơ'와 비슷)",
          "**ㅕ** = yeo",
          "**ㅗ** = o (베트남어 'ô')",
          "**ㅛ** = yo",
          "**ㅜ** = u",
          "**ㅠ** = yu",
          "**ㅡ** = eu (베트남어 'ư')",
          "**ㅣ** = i",
        ],
      },
      {
        type: "callout",
        vi:
          "🧠 Mẹo nhớ: Vạch dài = nguyên âm cơ bản. Thêm 1 vạch nhỏ = thêm 'y' phía trước (ㅏ→ㅑ là 'a→ya'). Đơn giản!",
        ko:
          "🧠 외우는 법: 긴 획 = 기본 모음. 짧은 획 추가 = 앞에 'y' 음 추가 (ㅏ→ㅑ는 a→ya). 간단해요!",
      },
      {
        type: "h2",
        vi: "Bước 2: 14 phụ âm cơ bản (20 phút)",
        ko: "2단계: 기본 자음 14개 (20분)",
      },
      {
        type: "ul",
        vi: [
          "**ㄱ** = g/k (đầu từ k, giữa từ g)",
          "**ㄴ** = n",
          "**ㄷ** = d/t",
          "**ㄹ** = r/l (đầu từ r, cuối từ l)",
          "**ㅁ** = m",
          "**ㅂ** = b/p",
          "**ㅅ** = s",
          "**ㅇ** = câm (đầu từ) hoặc ng (cuối từ)",
          "**ㅈ** = j/ch",
          "**ㅊ** = ch (mạnh)",
          "**ㅋ** = k (mạnh)",
          "**ㅌ** = t (mạnh)",
          "**ㅍ** = p (mạnh)",
          "**ㅎ** = h",
        ],
        ko: [
          "**ㄱ** = g/k",
          "**ㄴ** = n",
          "**ㄷ** = d/t",
          "**ㄹ** = r/l",
          "**ㅁ** = m",
          "**ㅂ** = b/p",
          "**ㅅ** = s",
          "**ㅇ** = 묵음(어두) / ng(받침)",
          "**ㅈ** = j",
          "**ㅊ** = ch (강함)",
          "**ㅋ** = k (강함)",
          "**ㅌ** = t (강함)",
          "**ㅍ** = p (강함)",
          "**ㅎ** = h",
        ],
      },
      {
        type: "h2",
        vi: "Bước 3: Ghép thành âm tiết (20 phút)",
        ko: "3단계: 음절로 조합하기 (20분)",
      },
      {
        type: "p",
        vi:
          "Hangul ghép phụ âm + nguyên âm thành 1 'ô vuông' = 1 âm tiết. Ví dụ: ㅎ + ㅏ = 하 (ha). ㄴ + ㅏ + ㅁ = 남 (nam). ㅅ + ㅏ + ㅇ + ㅣ = không tồn tại — phụ âm cuối phải nằm dưới! Đúng cấu trúc: 사이 (sai) hoặc 산 (san — ㅅㅏㄴ).",
        ko:
          "한글은 자음+모음을 한 '네모' 안에 모아 음절로 만듭니다. 예: ㅎ+ㅏ=하. ㄴ+ㅏ+ㅁ=남. 받침은 아래 칸에. 사이(saі)·산(san) 처럼 받침 위치 주의.",
      },
      {
        type: "h2",
        vi: "Bước 4: Đọc thử (5 phút)",
        ko: "4단계: 직접 읽어보기 (5분)",
      },
      {
        type: "ul",
        vi: [
          "**한국** = han-guk (Hàn Quốc)",
          "**사랑** = sa-rang (yêu)",
          "**김치** = kim-chi",
          "**감사** = gam-sa (cảm ơn)",
          "**대박** = dae-bak (đỉnh!)",
          "**오빠** = o-ppa (anh)",
          "**한국어** = han-gug-eo (tiếng Hàn)",
        ],
        ko: [
          "**한국** = han-guk",
          "**사랑** = sa-rang",
          "**김치** = kim-chi",
          "**감사** = gam-sa",
          "**대박** = dae-bak",
          "**오빠** = o-ppa",
          "**한국어** = han-gug-eo",
        ],
      },
      {
        type: "p",
        vi:
          "Đọc được những từ trên là bạn đã thành công bước cơ bản! Tiếp theo: học từ vựng và ngữ pháp. Apps khuyến nghị cho người Việt: Duolingo Korean, Talk To Me In Korean, hoặc xem K-drama có phụ đề kép (Hàn + Việt).",
        ko:
          "위 단어를 읽을 수 있다면 기초 성공! 다음 단계: 어휘와 문법 학습. 베트남인 추천 앱: Duolingo Korean, Talk To Me In Korean, 또는 한국어+베트남어 자막 K-드라마.",
      },
      {
        type: "cta",
        href: "/ten-han-quoc",
        vi: "✨ Thử đặt tên Hàn để luyện đọc Hangul",
        ko: "✨ 한국 이름 지어 한글 읽기 연습하기",
      },
    ],
  },

  // ============================================================
  // 10. Zodiac compatibility in Saju
  // ============================================================
  {
    slug: "tuoi-hop-tuoi-xung-trong-saju",
    emoji: "🐉",
    category: "saju",
    publishDate: "2026-05-08",
    readMinutes: 6,
    titleVi: "Tuổi hợp tuổi xung trong Saju — 12 con giáp Hàn Quốc và sự tương hợp",
    titleKo: "사주 속 띠 궁합 — 12지신과 상생상극",
    descVi:
      "Tam Hợp, Lục Hợp, Lục Xung — 3 nguyên tắc quan trọng nhất khi xem tuổi hợp trong Saju. Áp dụng vào hôn nhân, hợp tác, và bạn bè. Bảng tra cứu 12 con giáp đầy đủ.",
    descKo:
      "삼합·육합·육충 — 사주 띠 궁합의 핵심 3원칙. 결혼·동업·우정에 적용하는 법과 12지신 호환표.",
    body: [
      {
        type: "p",
        vi:
          "Khi xem Saju cho hôn nhân hoặc hợp tác, người Hàn quan tâm nhất đến 'tuổi hợp tuổi xung' (궁합). Hệ thống dựa trên 12 con giáp (12지) giống Việt Nam — Tý, Sửu, Dần, Mão... Nhưng cách tính sự tương hợp có 3 nguyên tắc rõ ràng.",
        ko:
          "결혼이나 동업을 위한 사주를 볼 때 한국인이 가장 신경 쓰는 건 '궁합'. 12지(쥐·소·호랑이·토끼…)는 베트남과 같지만, 호환성 계산에는 3가지 원칙이 있어요.",
      },
      {
        type: "h2",
        vi: "1. Tam Hợp (삼합) — 3 con giáp tạo nhóm hài hòa",
        ko: "1. 삼합 — 3개 띠가 이루는 조화 그룹",
      },
      {
        type: "p",
        vi:
          "12 con giáp được chia thành 4 nhóm Tam Hợp, mỗi nhóm 3 tuổi. Trong cùng nhóm, các tuổi cộng hưởng tốt:",
        ko: "12지는 4개의 삼합 그룹으로 나뉘고, 같은 그룹 안에서 띠들이 잘 어울립니다:",
      },
      {
        type: "ul",
        vi: [
          "**Nhóm Thủy** (Mộc khí): 申 (Thân/Khỉ) + 子 (Tý/Chuột) + 辰 (Thìn/Rồng)",
          "**Nhóm Mộc** (Hỏa khí): 亥 (Hợi/Lợn) + 卯 (Mão/Mèo) + 未 (Mùi/Dê)",
          "**Nhóm Hỏa** (Kim khí): 寅 (Dần/Hổ) + 午 (Ngọ/Ngựa) + 戌 (Tuất/Chó)",
          "**Nhóm Kim** (Thủy khí): 巳 (Tỵ/Rắn) + 酉 (Dậu/Gà) + 丑 (Sửu/Trâu)",
        ],
        ko: [
          "**수국 (수 기운 모임)**: 申(원숭이) + 子(쥐) + 辰(용)",
          "**목국 (목 기운 모임)**: 亥(돼지) + 卯(토끼) + 未(양)",
          "**화국 (화 기운 모임)**: 寅(호랑이) + 午(말) + 戌(개)",
          "**금국 (금 기운 모임)**: 巳(뱀) + 酉(닭) + 丑(소)",
        ],
      },
      {
        type: "h2",
        vi: "2. Lục Hợp (육합) — 6 cặp đôi vàng",
        ko: "2. 육합 — 6쌍의 황금 매칭",
      },
      {
        type: "ul",
        vi: [
          "子-丑 (Tý-Sửu)",
          "寅-亥 (Dần-Hợi)",
          "卯-戌 (Mão-Tuất)",
          "辰-酉 (Thìn-Dậu)",
          "巳-申 (Tỵ-Thân)",
          "午-未 (Ngọ-Mùi)",
        ],
        ko: [
          "子-丑 (쥐-소)",
          "寅-亥 (호랑이-돼지)",
          "卯-戌 (토끼-개)",
          "辰-酉 (용-닭)",
          "巳-申 (뱀-원숭이)",
          "午-未 (말-양)",
        ],
      },
      {
        type: "p",
        vi:
          "Cặp đôi Lục Hợp được coi là 'duyên kiếp' — tự nhiên hiểu nhau, dễ kết hôn lâu dài. Nhiều cha mẹ Hàn xem cái này trước khi đồng ý cho con kết hôn.",
        ko:
          "육합 짝은 '천생연분'으로 여겨져요 — 자연스럽게 통하고 결혼 생활도 안정적. 한국 부모님이 자녀 혼사 결정 전에 자주 따져봅니다.",
      },
      {
        type: "h2",
        vi: "3. Lục Xung (육충) — 6 cặp đối lập",
        ko: "3. 육충 — 충돌하는 6쌍",
      },
      {
        type: "ul",
        vi: [
          "子-午 (Tý-Ngọ)",
          "丑-未 (Sửu-Mùi)",
          "寅-申 (Dần-Thân)",
          "卯-酉 (Mão-Dậu)",
          "辰-戌 (Thìn-Tuất)",
          "巳-亥 (Tỵ-Hợi)",
        ],
        ko: [
          "子-午 (쥐-말)",
          "丑-未 (소-양)",
          "寅-申 (호랑이-원숭이)",
          "卯-酉 (토끼-닭)",
          "辰-戌 (용-개)",
          "巳-亥 (뱀-돼지)",
        ],
      },
      {
        type: "p",
        vi:
          "Tuổi Lục Xung dễ va chạm tính cách, hay cãi vã. Không phải nhất định không hợp — chỉ là cần khéo léo hơn trong giao tiếp và tôn trọng khác biệt.",
        ko:
          "육충 띠끼리는 성격 충돌이 쉽고 다툼도 잦아요. 절대 안 맞는다는 뜻은 아니고, 소통에 더 신경 쓰고 차이를 존중하면 됩니다.",
      },
      {
        type: "callout",
        vi:
          "🤔 Tin được hay không? Tuổi hợp xung là tham khảo văn hóa, không phải định mệnh. Cặp đôi Lục Xung vẫn có thể hạnh phúc nếu hiểu nhau. Cặp Tam Hợp vẫn có thể chia tay nếu thiếu nỗ lực. Saju là gợi ý, không phải phán quyết!",
        ko:
          "🤔 믿어야 할까? 띠 궁합은 문화적 참고일 뿐 운명은 아닙니다. 육충이라도 서로 이해하면 행복하고, 삼합이라도 노력 없으면 헤어질 수 있어요. 사주는 가이드이지 판결이 아니에요.",
      },
      {
        type: "cta",
        href: "/sau-han-quoc",
        vi: "🔮 Xem Saju để biết tuổi hợp với bạn",
        ko: "🔮 내 띠 궁합 사주로 확인하기",
      },
    ],
  },

  // ============================================================
  // 11. Heavenly Stems (천간) personality
  // ============================================================
  {
    slug: "thien-can-tinh-cach-theo-ngay-sinh",
    emoji: "✨",
    category: "saju",
    publishDate: "2026-05-08",
    readMinutes: 6,
    titleVi: "Bí mật 10 Thiên Can (천간) — Tính cách của bạn theo ngày sinh",
    titleKo: "10개의 천간(天干) — 일간으로 보는 타고난 성격",
    descVi:
      "Trong Saju, Thiên Can ngày sinh (Nhật chủ) chính là 'bạn'. 10 Thiên Can (Giáp, Ất, Bính, Đinh...) đại diện 10 kiểu tính cách cốt lõi. Khám phá Nhật chủ của bạn nói gì.",
    descKo:
      "사주에서 일간(태어난 날의 천간)은 '나 자신'을 나타냅니다. 10개의 천간(갑·을·병·정…)은 10가지 핵심 성격 유형. 당신의 일간이 말해주는 것은?",
    body: [
      {
        type: "p",
        vi:
          "Trong tứ trụ Saju, có 4 Thiên Can (천간) — nhưng cái quan trọng nhất là Thiên Can NGÀY (일간), gọi là Nhật chủ — Day Master. Đây là 'cái tôi cốt lõi' của bạn. 10 Thiên Can chia thành 5 hành × âm/dương.",
        ko:
          "사주의 사주(四柱)에 천간이 4개 있지만, 가장 중요한 건 **일간(日干)**으로 'Day Master'라고 불러요 — 당신의 핵심 자아를 나타냅니다. 10개의 천간은 오행 × 음양으로 구성됩니다.",
      },
      {
        type: "h2",
        vi: "Bảng 10 Thiên Can",
        ko: "10개의 천간 표",
      },
      {
        type: "ul",
        vi: [
          "**甲 (갑/Giáp)** — Mộc dương (cây lớn): Thẳng thắn, lãnh đạo, kiên định. Người tiên phong.",
          "**乙 (을/Ất)** — Mộc âm (cỏ): Linh hoạt, sáng tạo, mềm mỏng. Người nghệ sĩ.",
          "**丙 (병/Bính)** — Hỏa dương (mặt trời): Sáng chói, lạc quan, hào phóng. Người truyền cảm hứng.",
          "**丁 (정/Đinh)** — Hỏa âm (đèn nến): Tinh tế, có tài năng riêng, ấm áp. Người hỗ trợ tốt.",
          "**戊 (무/Mậu)** — Thổ dương (núi): Vững chắc, đáng tin, kiên nhẫn. Người trụ cột.",
          "**己 (기/Kỷ)** — Thổ âm (đất nuôi cây): Chăm sóc, thực tế, khôn ngoan. Người đứng sau.",
          "**庚 (경/Canh)** — Kim dương (sắt thô): Quyết đoán, mạnh mẽ, công bằng. Người kỷ luật.",
          "**辛 (신/Tân)** — Kim âm (vàng/bạc): Tinh tế, đẳng cấp, kiên nhẫn. Người nghệ thuật.",
          "**壬 (임/Nhâm)** — Thủy dương (sông lớn): Linh hoạt, rộng rãi, đầy tham vọng. Người mơ ước lớn.",
          "**癸 (계/Quý)** — Thủy âm (sương mưa): Sâu sắc, thấu cảm, kín đáo. Người trí thức.",
        ],
        ko: [
          "**甲 (갑)** — 목 양(큰 나무): 곧고 리더십 있고 굳건함. 개척자형.",
          "**乙 (을)** — 목 음(풀): 유연·창의·부드러움. 예술가형.",
          "**丙 (병)** — 화 양(태양): 밝고 낙천적이며 호탕함. 영감을 주는 사람.",
          "**丁 (정)** — 화 음(촛불): 섬세하고 재능 있으며 따뜻함. 좋은 조력자.",
          "**戊 (무)** — 토 양(산): 단단하고 신뢰감 있고 인내심 강함. 기둥형.",
          "**己 (기)** — 토 음(흙): 돌봄·실용·지혜. 뒤에서 받쳐주는 사람.",
          "**庚 (경)** — 금 양(쇠): 결단력·강직·공정. 절제형.",
          "**辛 (신)** — 금 음(보석): 섬세·고급·인내. 예술감각형.",
          "**壬 (임)** — 수 양(큰 강): 유연·관대·야망. 큰 꿈 꾸는 사람.",
          "**癸 (계)** — 수 음(이슬·비): 깊이 있고 공감력 강하며 내성적. 지식인형.",
        ],
      },
      {
        type: "h2",
        vi: "Cách biết Thiên Can ngày sinh của bạn",
        ko: "내 일간 알아보는 법",
      },
      {
        type: "p",
        vi:
          "Tự tính khá phức tạp vì cần lịch âm dương Đông Á. Cách dễ nhất: dùng công cụ Saju của Hanbiet — nhập ngày sinh, hệ thống tính tự động và hiển thị Nhật chủ ngay với câu chuyện chi tiết về tính cách bạn.",
        ko:
          "직접 계산하려면 동아시아 음양력이 필요해서 복잡합니다. 가장 쉬운 방법: Hanbiet의 사주 도구에 생년월일을 넣으면 일간이 자동 계산되고, 성격 풀이까지 자세히 나옵니다.",
      },
      {
        type: "callout",
        vi:
          "💡 Cùng hành nhưng âm dương khác — khác hẳn người. Ví dụ 甲 (Mộc dương) là cây sồi cao lớn vững chãi; 乙 (Mộc âm) là cỏ mềm mại linh hoạt. Cùng 'mệnh Mộc' nhưng tính cách hoàn toàn khác.",
        ko:
          "💡 같은 오행이라도 음양이 다르면 성격이 완전히 다릅니다. 예: 甲(목 양)은 우람한 참나무, 乙(목 음)은 부드러운 풀. 같은 '목' 기운이지만 사람은 매우 다릅니다.",
      },
      {
        type: "cta",
        href: "/sau-han-quoc",
        vi: "🔮 Khám phá Nhật chủ của bạn ngay",
        ko: "🔮 내 일간 지금 확인하기",
      },
    ],
  },

  // ============================================================
  // 12. Korean BBQ ordering guide
  // ============================================================
  {
    slug: "an-o-quan-bbq-han-cach-goi-mon",
    emoji: "🥩",
    category: "food",
    publishDate: "2026-05-08",
    readMinutes: 5,
    titleVi: "Ăn ở quán BBQ Hàn lần đầu — đặt món gì, ăn thế nào, kiêng gì",
    titleKo: "한국 고깃집 처음 가는 베트남인을 위한 가이드",
    descVi:
      "Vào quán BBQ Hàn (고깃집) lần đầu rất dễ lúng túng. Hướng dẫn người Việt: đặt món thịt nào, banchan miễn phí, cách cuốn rau, dùng kéo cắt thịt, và quy tắc rót rượu.",
    descKo:
      "한국 고깃집을 처음 가는 베트남인이 헤매지 않도록 — 고기 메뉴 고르기, 무료 반찬, 쌈 싸 먹는 법, 가위로 자르기, 술 따르기 예절까지.",
    body: [
      {
        type: "p",
        vi:
          "Vào một quán BBQ Hàn (고깃집 — Gogijip) lần đầu, bạn sẽ hơi choáng: thịt sống chưa nướng, đủ loại banchan, không có thực đơn cơm bún, cô phục vụ mang kéo... Đừng lo, đây là hướng dẫn chi tiết cho người Việt.",
        ko:
          "한국 고깃집을 처음 가면 어리둥절합니다 — 생고기, 수많은 반찬, 밥·면 메뉴 없음, 종업원이 가위 들고 옴… 걱정 마세요, 베트남인을 위한 단계별 가이드입니다.",
      },
      {
        type: "h2",
        vi: "1. Đặt thịt — chọn gì cho lần đầu?",
        ko: "1. 고기 주문 — 처음이면 뭘 시킬까?",
      },
      {
        type: "ul",
        vi: [
          "**삼겹살 (Samgyeopsal)** — Thịt ba chỉ heo. KHÔNG ướp. An toàn nhất, ai cũng thích. Khoảng 15,000-25,000 won/200g.",
          "**목살 (Moksal)** — Thịt cổ heo. Mềm, ít mỡ hơn 삼겹살.",
          "**갈비 (Galbi)** — Sườn bò ướp xì dầu ngọt. Đắt hơn (35,000-50,000 won) nhưng cực ngon.",
          "**불고기 (Bulgogi)** — Thịt bò xào tương ngọt. Có nước, dễ ăn.",
          "**대패삼겹살** — Thịt ba chỉ thái MỎNG như giấy. Ăn nhanh, hợp người mới.",
        ],
        ko: [
          "**삼겹살** — 양념 없는 안전한 메뉴, 1인분 200g 1.5만~2.5만원.",
          "**목살** — 더 부드럽고 기름기 적음.",
          "**갈비** — 달콤짭짤한 양념 (3.5만~5만원).",
          "**불고기** — 국물 있어 먹기 편함.",
          "**대패삼겹살** — 종이처럼 얇아 빨리 익음.",
        ],
      },
      {
        type: "h2",
        vi: "2. Banchan — không cần đặt, ăn miễn phí",
        ko: "2. 반찬 — 주문 안 해도 무료",
      },
      {
        type: "p",
        vi:
          "Quán Hàn tự động đem 5-10 loại banchan (반찬 — món ăn kèm): kimchi, củ cải vàng, đậu hũ lạnh, bí xanh xào, giá đỗ... ĂN HẾT cũng được, người ta sẽ refill MIỄN PHÍ. Đừng ngại gọi 'jeogiyo' (저기요 — Anh/chị ơi) để xin thêm.",
        ko:
          "한국 식당은 김치·단무지·콩나물·시금치 무침 등 5-10가지 반찬을 자동으로 줍니다. 다 먹어도 무료로 리필됩니다. '저기요'라고 부르고 더 달라고 해도 됩니다.",
      },
      {
        type: "h2",
        vi: "3. Cuốn rau (쌈) — bí kíp ngon",
        ko: "3. 쌈 싸 먹기 — 진짜 비결",
      },
      {
        type: "p",
        vi:
          "Lá xà lách (상추) hoặc lá tía tô (깻잎) → đặt 1 miếng thịt nướng → 1 lát tỏi sống → 1 chấm 쌈장 (sauce đậu nành lên men) → cuốn lại. Một miếng cắn HẾT trong 1 lần (đó là quy tắc — không cắn 2 lần). Mạnh dạn nhồi đầy!",
        ko:
          "상추 또는 깻잎 → 구운 고기 한 점 → 생마늘 한 조각 → 쌈장 → 말아서 한입에. **두 번 베어 물지 않는 게 매너** — 입에 쏙 들어갈 만큼 만들어야 하지만, 풍성하게 채우세요!",
      },
      {
        type: "h2",
        vi: "4. Quy tắc rót rượu (소주/맥주) với người Hàn",
        ko: "4. 한국인과 술 따르기 예절",
      },
      {
        type: "ul",
        vi: [
          "Người trẻ rót cho người lớn TRƯỚC — KHÔNG tự rót cho mình.",
          "Rót bằng 2 tay (tay phải cầm chai, tay trái đỡ cánh tay phải).",
          "Khi nhận rượu từ người lớn — cũng nhận bằng 2 tay.",
          "Khi uống — quay đầu sang TRÁI (về phía vai trái), không uống trực diện trước mặt người lớn.",
          "Cụng ly — ly mình PHẢI thấp hơn ly của người lớn.",
        ],
        ko: [
          "젊은 사람이 윗사람에게 먼저 — 자기 잔 본인이 따르지 않음.",
          "두 손으로 따름 (오른손 병, 왼손 받침).",
          "받을 때도 두 손으로.",
          "마실 때 윗사람 앞에서 정면으로 마시지 않고 왼쪽으로 고개 돌림.",
          "건배 시 윗사람 잔보다 낮게.",
        ],
      },
      {
        type: "callout",
        vi:
          "🍽️ Đến cuối bữa: phục vụ thường hỏi '식사 하시겠어요?' (Anh/chị ăn cơm không?) — đó là gợi ý ăn 볶음밥 (cơm chiên) hoặc 냉면 (mì lạnh) cuối bữa. Bữa BBQ Hàn 'chuẩn' luôn kết bằng món tinh bột.",
        ko:
          "🍽️ 마무리: '식사 하시겠어요?'라는 질문은 볶음밥이나 냉면 추천. 한국식 고깃집 코스의 정석은 탄수화물로 마무리하는 것.",
      },
      {
        type: "cta",
        href: "/mon-an-han-quoc",
        vi: "🍜 Quiz món Hàn nào hợp với bạn",
        ko: "🍜 어떤 한식이 나에게 맞을까?",
      },
    ],
  },

  // ============================================================
  // 13. 30 Korean boy names 2025
  // ============================================================
  {
    slug: "30-ten-han-quoc-cho-con-trai-2025",
    emoji: "👦",
    category: "name",
    publishDate: "2026-05-08",
    readMinutes: 6,
    titleVi: "30 tên Hàn Quốc đẹp cho con trai 2025 — kèm ý nghĩa Hán tự",
    titleKo: "2025년 인기 한국 남자 이름 30선 — 한자 의미 포함",
    descVi:
      "30 tên tiếng Hàn cho con trai phổ biến nhất 2025-2026 — chia theo phong cách hiện đại, mạnh mẽ, hiền lành, và độc đáo. Kèm Hangul, Hán tự và ý nghĩa.",
    descKo:
      "2025-2026년 가장 인기 있는 한국 남자 이름 30선 — 모던·강인·온화·개성별로. 한글, 한자, 의미까지.",
    body: [
      {
        type: "p",
        vi:
          "Bạn từng để ý K-drama nam chính tên gì không? 도윤, 하준, 지호... — đây đều là tên đang HOT ở Hàn Quốc 2025-2026. Bài này tổng hợp 30 tên con trai được yêu thích nhất, với Hán tự và ý nghĩa rõ ràng.",
        ko:
          "K-드라마 남주의 이름이 도윤·하준·지호인 거 눈치채셨나요? 모두 2025-2026년 한국에서 가장 인기 있는 이름입니다. 30개 남자 이름을 한자 의미와 함께 정리했어요.",
      },
      {
        type: "h2",
        vi: "Top 10 — Hiện đại được yêu thích nhất 2026",
        ko: "TOP 10 — 2026년 가장 사랑받는 모던 이름",
      },
      {
        type: "ol",
        vi: [
          "도윤 (度允) Do-yoon — Chuẩn mực & chân thật. Tên nam #1 Hàn 2026.",
          "하준 (夏俊) Ha-jun — Mùa hè & tuấn tú.",
          "서준 (瑞俊) Seo-jun — Điềm lành & tuấn tú.",
          "시우 (時雨) Si-woo — Mưa đúng lúc (tên thơ).",
          "주원 (柱元) Ju-won — Trụ cột & đứng đầu.",
          "도현 (度賢) Do-hyun — Chuẩn mực & hiền tài.",
          "시윤 (時允) Si-yoon — Đúng lúc & chân thật.",
          "지호 (智浩) Ji-ho — Trí tuệ & rộng lớn.",
          "예준 (藝俊) Ye-jun — Tài nghệ & tuấn tú.",
          "건우 (健宇) Geon-woo — Khỏe khoắn & vũ trụ.",
        ],
        ko: [
          "도윤 (度允) — 도리·진실. 2026년 남자 1위.",
          "하준 (夏俊) — 여름·준수함.",
          "서준 (瑞俊) — 상서로움·준수함.",
          "시우 (時雨) — 단비.",
          "주원 (柱元) — 기둥·으뜸.",
          "도현 (度賢) — 법도·현명함.",
          "시윤 (時允) — 때·진실.",
          "지호 (智浩) — 지혜·광활함.",
          "예준 (藝俊) — 예술·준수함.",
          "건우 (健宇) — 건강·우주.",
        ],
      },
      {
        type: "h2",
        vi: "10 tên cá tính mạnh mẽ",
        ko: "10개의 강인한 이름",
      },
      {
        type: "ol",
        vi: [
          "우진 (宇眞) Woo-jin — Vũ trụ & chân thật.",
          "민준 (敏俊) Min-jun — Nhanh trí & tuấn tú.",
          "지후 (智厚) Ji-hoo — Trí tuệ & sâu sắc.",
          "은우 (銀宇) Eun-woo — Bạc & vũ trụ (như Cha Eun-woo).",
          "윤우 (允宇) Yoon-woo — Chân thật & vũ trụ.",
          "도훈 (度勳) Do-hoon — Chuẩn mực & công lao.",
          "선우 (善宇) Sun-woo — Lòng thiện & vũ trụ.",
          "정우 (廷宇) Jung-woo — Triều đình & vũ trụ.",
          "지안 (智安) Ji-an — Trí tuệ & bình an.",
          "유준 (裕俊) Yu-jun — Sung túc & tuấn tú.",
        ],
        ko: [
          "우진 (宇眞) — 우주·참됨.",
          "민준 (敏俊) — 민첩·준수.",
          "지후 (智厚) — 지혜·두터움.",
          "은우 (銀宇) — 은빛·우주 (차은우 느낌).",
          "윤우 (允宇) — 진실·우주.",
          "도훈 (度勳) — 법도·공훈.",
          "선우 (善宇) — 선함·우주.",
          "정우 (廷宇) — 조정·우주.",
          "지안 (智安) — 지혜·평안.",
          "유준 (裕俊) — 풍요·준수.",
        ],
      },
      {
        type: "h2",
        vi: "10 tên truyền thống & độc đáo",
        ko: "10개의 전통·독특한 이름",
      },
      {
        type: "ol",
        vi: [
          "현우 (賢宇) Hyun-woo — Hiền tài & vũ trụ.",
          "재현 (在賢) Jae-hyun — Tồn tại & hiền tài.",
          "성민 (成敏) Seong-min — Thành tựu & nhanh trí.",
          "태양 (太陽) Tae-yang — Mặt trời.",
          "한결 (—) Han-gyeol — 'Trước sau như một' (tên thuần Hàn).",
          "이안 (利安) Yi-an — Lợi & bình an.",
          "율 (律) Yul — Giai điệu, nhịp điệu.",
          "결 (潔) Gyeol — Trong sạch.",
          "한별 (韓별) Han-byeol — Ngôi sao Hàn (thuần Hàn + Hán tự).",
          "유찬 (裕燦) Yu-chan — Sung túc & rực rỡ.",
        ],
        ko: [
          "현우 (賢宇) — 현명·우주.",
          "재현 (在賢) — 존재·현명.",
          "성민 (成敏) — 성취·민첩.",
          "태양 (太陽) — 태양.",
          "한결 — '한결같이' (순우리말).",
          "이안 (利安) — 이로움·평안.",
          "율 (律) — 음률·리듬.",
          "결 (潔) — 깨끗함.",
          "한별 (韓별) — 한국의 별.",
          "유찬 (裕燦) — 풍요·찬란함.",
        ],
      },
      {
        type: "callout",
        vi:
          "💡 Cách chọn tên cho người Việt: Ưu tiên tên dễ phát âm bằng tiếng Việt (도윤 = 'Đô Doãn' rất dễ), có ý nghĩa Hán tự đẹp, và phù hợp với sở thích cá nhân (mê K-pop chọn tên giống idol, mê K-drama chọn tên giống nam chính).",
        ko:
          "💡 베트남 사용자 팁: 베트남어로 발음하기 쉬운 이름(도윤 = 'Đô Doãn'은 쉬움), 한자 의미가 좋은 이름, 그리고 개인 취향에 맞는 이름(K-팝 좋아하면 아이돌 이름, K-드라마 좋아하면 남주 이름)을 우선해보세요.",
      },
      {
        type: "cta",
        href: "/ten-han-quoc",
        vi: "✨ Tạo tên Hàn cho riêng bạn",
        ko: "✨ 내 한국 이름 만들기",
      },
    ],
  },

  // ============================================================
  // 14. K-pop fan guide for beginners
  // ============================================================
  {
    slug: "k-pop-fan-guide-cho-nguoi-viet",
    emoji: "🎤",
    category: "culture",
    publishDate: "2026-05-08",
    readMinutes: 7,
    titleVi: "K-pop fan guide cho người Việt mới — BTS, BLACKPINK, NewJeans và 'fandom' Hàn Quốc",
    titleKo: "K-팝 입문 가이드 — BTS·BLACKPINK·NewJeans와 한국 팬덤 문화",
    descVi:
      "Bạn mới yêu K-pop? Hướng dẫn cho người Việt: thuật ngữ fandom, top groups 2025-2026, cách follow idol, và lifestyle K-pop fan ở Việt Nam.",
    descKo:
      "K-팝에 빠진 베트남 입문자를 위한 가이드: 팬덤 용어, 2025-2026 인기 그룹, 아이돌 팔로우 방법, 베트남 K-팝 팬 라이프스타일.",
    body: [
      {
        type: "p",
        vi:
          "K-pop ở Việt Nam giờ không chỉ là âm nhạc — đó là cả lifestyle. Concert ở Sài Gòn / Hà Nội cháy vé trong vài phút. Fan Việt biết tới Korean takeout, Hangul cơ bản, văn hóa fan-meeting... Bài này tổng hợp những điều cơ bản người mới yêu K-pop nên biết.",
        ko:
          "베트남에서 K-팝은 이제 음악이 아니라 라이프스타일입니다. 호치민·하노이 콘서트는 몇 분 만에 매진. 베트남 팬은 한국 음식, 기초 한글, 팬미팅 문화를 압니다. K-팝 입문자가 알아야 할 기본을 정리했어요.",
      },
      {
        type: "h2",
        vi: "Top 10 nhóm K-pop được yêu nhất ở VN 2025-2026",
        ko: "베트남에서 사랑받는 K-팝 그룹 TOP 10 (2025-2026)",
      },
      {
        type: "ol",
        vi: [
          "**BTS** (방탄소년단) — Boy group #1 thế giới. Fandom: ARMY.",
          "**BLACKPINK** (블랙핑크) — Girl group #1. Fandom: BLINK.",
          "**NewJeans** (뉴진스) — Y2K-vibe girl group. Fandom: Bunnies.",
          "**SEVENTEEN** (세븐틴) — 13 thành viên. Fandom: CARAT.",
          "**Stray Kids** (스트레이 키즈) — Boy group hardcore. Fandom: STAY.",
          "**TWICE** (트와이스) — Veteran girl group. Fandom: ONCE.",
          "**LE SSERAFIM** (르세라핌) — Girl group concept hiện đại. Fandom: FEARNOT.",
          "**aespa** (에스파) — Concept AI/metaverse. Fandom: MY.",
          "**(G)I-DLE** ((여자)아이들) — Self-produced. Fandom: NEVERLAND.",
          "**ENHYPEN** (엔하이픈) — I-LAND audition winners. Fandom: ENGENE.",
        ],
        ko: [
          "**BTS** (방탄소년단) — 세계 1위 보이그룹. 팬덤 ARMY.",
          "**BLACKPINK** (블랙핑크) — 1위 걸그룹. 팬덤 BLINK.",
          "**NewJeans** (뉴진스) — Y2K 감성. 팬덤 Bunnies.",
          "**SEVENTEEN** (세븐틴) — 13인조. 팬덤 CARAT.",
          "**Stray Kids** (스트레이 키즈) — 강렬한 보이그룹. 팬덤 STAY.",
          "**TWICE** (트와이스) — 베테랑 걸그룹. 팬덤 ONCE.",
          "**LE SSERAFIM** (르세라핌) — 모던 컨셉. 팬덤 FEARNOT.",
          "**aespa** (에스파) — AI·메타버스 컨셉. 팬덤 MY.",
          "**(G)I-DLE** — 셀프 프로듀싱. 팬덤 NEVERLAND.",
          "**ENHYPEN** (엔하이픈) — 아이랜드 출신. 팬덤 ENGENE.",
        ],
      },
      {
        type: "h2",
        vi: "Thuật ngữ fan cơ bản (phải biết)",
        ko: "기본 팬덤 용어",
      },
      {
        type: "ul",
        vi: [
          "**Bias** — Idol bạn yêu nhất trong nhóm.",
          "**Bias wrecker** — Thành viên khác làm bạn 'lung lay' khỏi bias.",
          "**Maknae** (막내) — Em út trong nhóm.",
          "**Visual** — Thành viên 'mặt đẹp nhất'.",
          "**Daesang** (대상) — Giải thưởng lớn nhất K-pop awards.",
          "**Comeback** — Phát hành album mới.",
          "**Stan** — Fan trung thành, fan cuồng.",
          "**Lightstick** — Đèn chuyên dụng để cầm khi xem concert.",
          "**Fancafe** — Trang web chính thức của fandom.",
          "**Streaming party** — Sự kiện fan stream MV mới cùng lúc tăng view.",
        ],
        ko: [
          "**Bias** — 그룹 중 가장 좋아하는 멤버.",
          "**Bias wrecker** — bias를 흔드는 다른 멤버.",
          "**Maknae** — 막내.",
          "**Visual** — 비주얼 멤버.",
          "**Daesang** — K-팝 시상식 대상.",
          "**Comeback** — 신곡·신앨범 발매.",
          "**Stan** — 충성스러운 팬.",
          "**Lightstick** — 응원봉.",
          "**Fancafe** — 공식 팬카페.",
          "**Streaming party** — 신곡 MV 동시 시청 이벤트.",
        ],
      },
      {
        type: "h2",
        vi: "Cách follow idol đúng cách",
        ko: "아이돌 팔로우 방법",
      },
      {
        type: "ul",
        vi: [
          "**Weverse** — App chính thức nhiều idol viết bài, livestream.",
          "**Bubble** — App nhắn tin trả phí với idol (không phải mỗi nhóm có).",
          "**YouTube channels** — HYBE Labels, JYP, SM, YG, V LIVE clips.",
          "**Twitter/X** — Tài khoản chính thức nhóm + thành viên.",
          "**TikTok** — Choreography, behind-the-scenes.",
        ],
        ko: [
          "**Weverse** — 아이돌 공식 앱 (글·라이브).",
          "**Bubble** — 아이돌과 메시지 (유료).",
          "**YouTube** — HYBE·JYP·SM·YG 채널.",
          "**Twitter/X** — 공식 계정.",
          "**TikTok** — 안무·비하인드.",
        ],
      },
      {
        type: "callout",
        vi:
          "💝 Mẹo nhỏ: Bạn có thể đặt tên Hàn của riêng mình lấy cảm hứng từ idol — như nhiều fan ARMY có 'Korean name' để dùng khi gặp BTS. Thử công cụ Hanbiet để tìm tên hợp với bạn!",
        ko:
          "💝 팁: 좋아하는 아이돌에서 영감을 받아 자신만의 한국 이름을 지을 수 있어요 — ARMY들이 'Korean name'을 미리 정해두는 것처럼. Hanbiet 도구로 자신에게 맞는 이름 찾아보세요!",
      },
      {
        type: "cta",
        href: "/ten-han-quoc",
        vi: "✨ Đặt Korean name của riêng tôi (idol style)",
        ko: "✨ 아이돌 스타일 내 한국 이름 만들기",
      },
    ],
  },

  // ============================================================
  // 15. Korean cafe culture vs Vietnamese
  // ============================================================
  {
    slug: "van-hoa-cafe-han-vs-viet",
    emoji: "☕",
    category: "culture",
    publishDate: "2026-05-08",
    readMinutes: 5,
    titleVi: "Văn hóa cà phê Hàn Quốc vs Việt Nam — 6 điểm khác biệt thú vị",
    titleKo: "한국 vs 베트남 카페 문화 — 흥미로운 6가지 차이",
    descVi:
      "Cà phê là đời sống ở cả Hàn và Việt — nhưng cách trải nghiệm khác hẳn. Cà phê sữa đá Sài Gòn vs Americano Seoul, không gian tiệm cà phê, văn hóa làm việc... 6 điểm khác biệt.",
    descKo:
      "한국과 베트남 모두 카페가 일상이지만 경험은 매우 다릅니다. 사이공 까페 스어 다 vs 서울 아메리카노, 카페 공간, 일하는 문화… 6가지 차이.",
    body: [
      {
        type: "p",
        vi:
          "Người Việt và người Hàn đều mê cà phê — nhưng theo cách hoàn toàn khác. Khi du học hoặc du lịch sang Hàn, người Việt thường shock với 'cà phê' ở Hàn (sao đắt thế? sao không có sữa đặc?). Bài này so sánh 6 điểm khác biệt thú vị.",
        ko:
          "한국인과 베트남인 모두 커피를 사랑하지만 방식은 완전히 다릅니다. 한국에 유학·여행 간 베트남인은 한국 카페에서 종종 충격받죠 (이 가격에? 연유는 어디에?). 6가지 차이를 비교해봅니다.",
      },
      {
        type: "h2",
        vi: "1. Pha chế: Phin truyền thống vs Espresso machine",
        ko: "1. 추출 방식: 핀 vs 에스프레소 머신",
      },
      {
        type: "p",
        vi:
          "Việt Nam = phin nhỏ giọt + cà phê Robusta đậm đặc. Hàn = espresso máy + Arabica nhẹ. Một ly Việt mạnh gấp 2-3 lần ly Hàn về caffeine. Đó là lý do người Hàn lần đầu uống cà phê Việt 'không ngủ được cả đêm'.",
        ko:
          "베트남 = 핀(드립 필터) + 강한 로부스타. 한국 = 에스프레소 머신 + 부드러운 아라비카. 베트남 커피가 한국 커피보다 카페인 2-3배. 한국인이 베트남 커피 마시고 '밤새 잠 못 잤다'는 이유.",
      },
      {
        type: "h2",
        vi: "2. Đường sữa: Sữa đặc vs Đường siro",
        ko: "2. 단맛: 연유 vs 시럽",
      },
      {
        type: "p",
        vi:
          "Cà phê sữa đá VN dùng sữa đặc đường (condensed milk) — ngọt, đậm, đặc trưng Đông Nam Á. Hàn dùng sữa tươi + đường siro — nhẹ, tinh tế. Khi gọi 'milk coffee' ở Hàn, bạn sẽ KHÔNG được sữa đặc — phải gọi 'condensed milk latte' nếu muốn vị Việt.",
        ko:
          "베트남 cà phê sữa đá는 가당연유 사용 — 진하고 단 동남아 특징. 한국은 우유+시럽 — 가볍고 섬세. 한국에서 '밀크커피'를 시키면 연유 안 나옴 — 베트남식이 그리우면 'condensed milk latte'로 주문하세요.",
      },
      {
        type: "h2",
        vi: "3. Không gian: Vỉa hè vs Studio đẹp",
        ko: "3. 공간: 길거리 vs 인스타용 스튜디오",
      },
      {
        type: "p",
        vi:
          "Sài Gòn / Hà Nội — cà phê vỉa hè ghế nhựa thấp, nói chuyện cả buổi với 30,000 VND. Seoul — cà phê là 'studio Instagram' với thiết kế đắt tiền, mỗi quán một concept (sách, hoa, vintage, Y2K...). Người Hàn coi cà phê là 'social design space', không chỉ là chỗ uống.",
        ko:
          "사이공·하노이 = 길거리 플라스틱 의자 + 3만동(2천원 미만)으로 한나절. 서울 = 인스타그램 스튜디오, 각 매장이 독특한 컨셉(책·꽃·빈티지·Y2K…). 한국인에게 카페는 '소셜 디자인 공간'.",
      },
      {
        type: "h2",
        vi: "4. Giá cả: 30,000 VND vs 5,000 won (≈100,000 VND)",
        ko: "4. 가격: 베트남 ₫30,000 vs 한국 ₩5,000",
      },
      {
        type: "p",
        vi:
          "Một ly cà phê đường phố Việt = 25,000-50,000 VND. Một ly Americano Starbucks Hàn = 4,500-5,000 won (≈ 80,000-90,000 VND) — gấp 2-3 lần. Quán cà phê độc lập đẹp ở Seoul có thể 6,000-8,000 won (≈ 120,000-150,000 VND).",
        ko:
          "베트남 길거리 커피 25,000-50,000동. 한국 스타벅스 아메리카노 4,500-5,000원 (베트남의 2-3배). 서울 독립 카페는 6,000-8,000원까지.",
      },
      {
        type: "h2",
        vi: "5. Cà phê = Văn phòng tạm thời",
        ko: "5. 카페 = 임시 사무실",
      },
      {
        type: "p",
        vi:
          "Người Hàn dùng cà phê làm văn phòng — sinh viên học bài, freelancer làm việc, người tìm việc phỏng vấn. Có Wifi miễn phí, ổ điện, không gian yên tĩnh. Bạn có thể ngồi 4-5 tiếng với 1 ly cà phê. Ở Việt Nam cũng có nhưng văn hóa 'cà phê công sở' chưa rộng bằng.",
        ko:
          "한국인은 카페를 사무실처럼 씁니다 — 학생 공부, 프리랜서 작업, 면접까지. 와이파이·콘센트·조용한 공간. 커피 한 잔으로 4-5시간 머무는 게 정상. 베트남에도 있지만 '카페 오피스' 문화는 아직 한국만큼은 아님.",
      },
      {
        type: "h2",
        vi: "6. Dessert culture",
        ko: "6. 디저트 문화",
      },
      {
        type: "p",
        vi:
          "Cà phê Hàn luôn đi kèm dessert đẹp — bingsu, croissant, tiramisu, macaron, croffle. Đặc biệt 빙수 (đá bào) là quốc dân mùa hè. Cà phê Việt đơn giản hơn — chủ yếu chỉ uống, ít kèm đồ ngọt.",
        ko:
          "한국 카페는 늘 예쁜 디저트와 함께 — 빙수, 크루아상, 티라미수, 마카롱, 크로플. 특히 빙수는 한국 여름의 국민 디저트. 베트남 카페는 더 단순 — 주로 음료만, 디저트 적음.",
      },
      {
        type: "callout",
        vi:
          "🤳 Mẹo: Khi đến Seoul, đừng bỏ qua các 'cafe street' nổi tiếng — Yeonnam-dong, Hongdae, Seongsu-dong. Mỗi nơi có concept khác nhau, lý tưởng để check-in.",
        ko:
          "🤳 팁: 서울 여행 시 '카페 거리'는 꼭 — 연남동, 홍대, 성수동. 각각 컨셉이 달라 인스타 인증샷에 최적.",
      },
      {
        type: "cta",
        href: "/bai-viet",
        vi: "📖 Đọc thêm về văn hóa Hàn Quốc",
        ko: "📖 한국 문화 글 더 읽기",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesSorted(): Article[] {
  return [...ARTICLES].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

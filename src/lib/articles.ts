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
          "Bài viết này tổng hợp 30 cái tên đang được yêu thích nhất ở Hàn Quốc 2024–2025, dựa trên thống kê thực tế từ Tòa án Tối cao Hàn Quốc và xu hướng đặt tên hiện đại. Mỗi tên đều có Hangul, Hán tự, và ý nghĩa rõ ràng.",
        ko:
          "이 글에서는 한국 대법원 통계와 최근 트렌드를 바탕으로, 2024–2025년 가장 사랑받는 30개 이름을 모았어요. 모든 이름에 한글·한자·의미를 함께 정리했습니다.",
      },
      {
        type: "h2",
        vi: "Top 10 — Phong cách hiện đại được yêu thích nhất 2024",
        ko: "TOP 10 — 2024년 가장 인기 있는 모던 스타일",
      },
      {
        type: "ol",
        vi: [
          "서아 (瑞雅) Seo-ah — Điềm lành & tao nhã. Tên nữ #1 Hàn Quốc 2024.",
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
          "서아 (瑞雅) Seo-ah — 상서로움과 우아함. 2024년 1위 이름.",
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
          "Nếu bạn chưa biết tên nào hợp với mình, hãy thử công cụ tạo tên Hàn miễn phí của chúng tôi. Bạn chỉ cần chọn giới tính và phong cách yêu thích — hệ thống sẽ gợi ý 6 tên Hàn 2024-2025 chuẩn, có cả Hán tự và câu chuyện ý nghĩa.",
        ko:
          "어떤 이름이 자신에게 잘 맞는지 모르겠다면, 무료 한국 이름 생성 도구를 써보세요. 성별과 원하는 스타일만 고르면 2024-2025 인기 이름 6개를 한자 의미와 함께 추천해드립니다.",
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
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesSorted(): Article[] {
  return [...ARTICLES].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

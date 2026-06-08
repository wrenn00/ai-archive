// ============================================================================
// video-tools.ts  —  영상 생성 AI 모델 데이터 (2026년 6월 기준 리서치)
// ----------------------------------------------------------------------------
// 원본 리서치 데이터의 필드명을 기존 Tool 타입에 맞춰 매핑했다:
//   example(string)  → useCases: [example]
//   tip(string)      → tips: [tip]
//   price            → pricing
//   link             → officialUrl
//   + thumbnail(picsum, slug 시드) / addedAt(설명 기준 추정일) 추가
// 가격·버전은 빨리 바뀌므로 priceNote에 "2026 기준" 표기. 운영 시 공식 페이지 재검증 권장.
// ============================================================================

import type { Tool } from "./tools";

export const videoTools: Tool[] = [
  {
    slug: "google-veo-3-1",
    name: "Google Veo 3.1",
    tagline: "네이티브 음성·립싱크가 강한 구글의 영상 모델 라인",
    description:
      "구글 딥마인드의 영상 생성 모델. Veo 3 아키텍처 기반으로 프롬프트 충실도와 모션 일관성을 높였고, 영상에 어울리는 공간 음향·효과음·대사를 함께 생성한다. 라이트/패스트/스탠다드 3개 티어로 나뉘어 용도에 맞게 고를 수 있다. 시작·끝 프레임 제어, 16:9·9:16, 720p·1080p, 4·6·8초 길이를 지원한다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote:
      "2026 기준 · API $0.05~0.75/초(티어별) · 소비자용은 Google AI Pro $19.99/월부터, Ultra $249.99/월",
    strengths: [
      "업계 최고 수준의 립싱크와 네이티브 오디오",
      "라이트($0.05/초)부터 스탠다드까지 비용·품질 티어 선택",
      "참조 이미지로 장면 간 인물·사물 일관성 유지",
    ],
    useCases: ["제품 광고용 8초 컷에 대사·효과음까지 한 번에 생성"],
    tips: [
      "초안은 Fast/Lite로 빠르게 돌리고 최종만 Standard로 렌더하면 비용이 크게 절약된다.",
    ],
    thumbnail: "/tools/veo/ve-1.mp4",
    gallery: [
      "/tools/veo/ve-1.mp4",
      "/tools/veo/ve-2.mp4",
      "/tools/veo/ve-3.mp4",
      "/tools/veo/ve-4.mp4",
    ],
    officialUrl: "https://deepmind.google/technologies/veo/",
    addedAt: "2026-05-22",
    featured: true,
  },
  {
    slug: "seedance-2-0",
    name: "Seedance 2.0",
    tagline: "텍스트·이미지·오디오·영상을 모두 입력받는 바이트댄스 멀티모달 모델",
    description:
      "바이트댄스 Seed 팀의 플래그십 영상 모델(2026년 2월 공개). 단일 멀티모달 아키텍처로 구성·모션·카메라 설계·오디오를 한 번에 생성한다. 최대 15초 안에서 컷이 나뉜 멀티샷을 만들어 편집된 시퀀스처럼 보이게 하고, 동기화된 스테레오 오디오·비트 싱크·역할 기반 에셋 태깅·참조 기반 모션 제어를 지원한다. Artificial Analysis 아레나에서 이미지→영상 부문 최상위권.",
    categories: ["video", "image"],
    pricing: "paid",
    priceNote:
      "2026 기준 · fal·getimg·invideo 등 서드파티 API/플랫폼을 통해 사용(사용량 과금)",
    strengths: [
      "참조(이미지·영상·오디오) 기반의 강한 방향성 제어",
      "한 번 생성으로 멀티샷·자연스러운 컷 전환",
      "오디오-영상 정합(립싱크·효과음 타이밍)이 뛰어남",
    ],
    useCases: ["레퍼런스 클립을 넣고 같은 톤·움직임의 광고 시퀀스 생성"],
    tips: [
      "리서치 중 확인: 헐리우드 스튜디오와의 저작권 분쟁으로 일부 지역 롤아웃이 보류된 적이 있어, 상업 사용 시 약관을 꼭 확인.",
    ],
    thumbnail: "/tools/seedance/sd-1.mp4",
    gallery: [
      "/tools/seedance/sd-1.mp4",
      "/tools/seedance/sd-2.mp4",
      "/tools/seedance/sd-3.mp4",
      "/tools/seedance/sd-4.mp4",
      "/tools/seedance/sd-5.mp4",
      "/tools/seedance/sd-6.mp4",
    ],
    officialUrl: "https://seed.bytedance.com/en/seedance2_0",
    addedAt: "2026-02-20",
    featured: true,
  },
  {
    slug: "happyhorse-1-0",
    name: "HappyHorse 1.0",
    tagline: "공개 직후 글로벌 아레나 1위를 찍은 알리바바의 영상·오디오 모델",
    description:
      "알리바바 타오톈 Future Life Lab이 만든 150억 파라미터 영상 모델. 단일 스트림 트랜스포머가 영상과 동기화 오디오를 한 번의 추론으로 함께 생성하고, 네이티브 1080p와 7개 언어 립싱크를 지원한다. 2026년 4월 익명으로 Artificial Analysis 아레나에 등장해 텍스트→영상·이미지→영상 양쪽에서 1위에 올랐다(공개 후 알리바바 제작으로 확인). 가중치는 Apache-2.0으로 오픈소스화 예정.",
    categories: ["video"],
    pricing: "freemium",
    priceNote:
      "2026 기준 · 베타 단계 · fal 등 일부 호스팅 제공, 가중치 오픈소스 공개 예정",
    strengths: [
      "블라인드 평가 기반 아레나에서 최상위 품질",
      "영상+오디오 단일 패스 생성(별도 후처리 불필요)",
      "Apache-2.0 오픈소스 공개 예정 — 자체 호스팅 가능성",
    ],
    useCases: ["한 문장 프롬프트로 효과음까지 붙은 1080p 컷 생성"],
    tips: [
      "리서치 중 확인: 아직 베타·제한적 접근 단계이고 공개 API는 미정. 오픈 가중치 공개 일정을 지켜보는 게 좋다.",
    ],
    thumbnail: "/tools/happyhorse/hh-1.mp4",
    gallery: [
      "/tools/happyhorse/hh-1.mp4",
      "/tools/happyhorse/hh-2.mp4",
      "/tools/happyhorse/hh-3.mp4",
      "/tools/happyhorse/hh-4.mp4",
      "/tools/happyhorse/hh-5.mp4",
      "/tools/happyhorse/hh-6.mp4",
      "/tools/happyhorse/hh-7.mp4",
      "/tools/happyhorse/hh-8.mp4",
      "/tools/happyhorse/hh-1.mp4",
    ],
    officialUrl: "https://fal.ai/happyhorse-1.0",
    addedAt: "2026-04-18",
    featured: true,
  },
  {
    slug: "minimax-hailuo-2-3",
    name: "MiniMax Hailuo 2.3",
    tagline: "가성비 좋은 1080p, 빠르고 다이내믹한 영상",
    description:
      "MiniMax의 Hailuo 영상 모델 최신 버전. 격렬한 움직임·액션 표현이 강하고, 비교적 넉넉한 무료 티어와 낮은 단가(약 $0.07/초)로 가성비가 좋다. 카메라 제어가 가능한 디렉터 모드 계열도 제공한다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료 티어 + 사용량 과금(약 $0.07/초 수준)",
    strengths: [
      "높은 다이내믹 모션(액션·움직임) 표현",
      "단가가 낮아 대량 생성·반복 테스트에 유리",
      "넉넉한 무료 티어",
    ],
    useCases: ["짧은 액션 클립·소셜용 다이내믹 영상 대량 생성"],
    tips: [
      "고품질 컷은 Pro 엔드포인트, 빠른 초안은 표준 엔드포인트로 나눠 쓰면 효율적.",
    ],
    thumbnail: "/tools/hailuo/hl-1.mp4",
    gallery: [
      "/tools/hailuo/hl-1.mp4",
      "/tools/hailuo/hl-2.mp4",
      "/tools/hailuo/hl-3.mp4",
      "/tools/hailuo/hl-4.mp4",
      "/tools/hailuo/hl-5.mp4",
      "/tools/hailuo/hl-6.mp4",
    ],
    officialUrl: "https://hailuoai.video/",
    addedAt: "2026-03-20",
    featured: false,
  },
  {
    slug: "wan-2-7",
    name: "Wan 2.7",
    tagline: "시작·끝 프레임 제어와 9분할 입력을 지원하는 알리바바 오픈 모델",
    description:
      "알리바바 Wan 시리즈의 영상 생성 모델(2026년 4월). 시작/끝 프레임 제어, 9분할 이미지 입력, 최대 5,000자 프롬프트를 지원해 정밀한 연출이 가능하다. Wan-Bench 2.0에서 상위권이며, Wan 계열은 오픈 가중치 기반이라 자체 호스팅·커스텀에 강하다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote: "2026 기준 · 오픈 가중치(무료) + 호스팅 API는 사용량 과금",
    strengths: [
      "시작·끝 프레임 제어로 정확한 장면 시작/종료 지정",
      "9분할 이미지 입력 등 풍부한 제어 옵션",
      "오픈 가중치 — 보안·내부망 환경에서 자체 호스팅 가능",
    ],
    useCases: ["시작 프레임과 끝 프레임을 지정해 의도한 전환의 클립 생성"],
    tips: [
      "자체 호스팅은 GPU 자원이 필요하니, 가벼운 사용은 호스팅 API로 시작하는 게 편하다.",
    ],
    thumbnail: "/tools/wan/wn-1.mp4",
    gallery: [
      "/tools/wan/wn-1.mp4",
      "/tools/wan/wn-2.mp4",
      "/tools/wan/wn-3.mp4",
      "/tools/wan/wn-4.mp4",
      "/tools/wan/wn-5.mp4",
      "/tools/wan/wn-6.mp4",
    ],
    officialUrl: "https://github.com/Wan-Video",
    addedAt: "2026-04-05",
    featured: false,
  },
  {
    slug: "luma-ray3",
    name: "Luma Ray3",
    tagline: "네이티브 16비트 HDR을 지원하는 Luma의 영상 모델",
    description:
      "Luma AI의 Dream Machine을 구동하는 영상 모델. AI 영상 최초로 네이티브 16비트 HDR을 생성해 EXR로 내보내 프로 컬러 파이프라인에 바로 넣을 수 있다. Ray3.14 업데이트(2026년 1월)와 영상→영상 편집(Ray3 Modify)을 제공한다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료 체험 + 유료 $7.99/월부터",
    strengths: [
      "네이티브 16비트 HDR(EXR) — 색 후반작업에 유리",
      "이미지→영상(스틸 애니메이션) 품질이 강함",
      "비교적 저렴한 진입 요금($7.99/월부터)",
    ],
    useCases: ["스틸 이미지를 넣어 색 보정 여지가 큰 HDR 클립으로 변환"],
    tips: [
      "컬러 그레이딩이 중요한 작업이면 EXR 출력을 살려 후반에서 손보는 게 강점.",
    ],
    thumbnail: "/tools/luma/lm-1.mp4",
    gallery: [
      "/tools/luma/lm-1.mp4",
      "/tools/luma/lm-2.mp4",
      "/tools/luma/lm-3.mp4",
      "/tools/luma/lm-4.mp4",
      "/tools/luma/lm-5.mp4",
      "/tools/luma/lm-6.mp4",
    ],
    officialUrl: "https://lumalabs.ai/dream-machine",
    addedAt: "2026-01-22",
    featured: false,
  },
  {
    slug: "ltx-2",
    name: "LTX-2",
    tagline: "로컬에서 돌아가는 오픈소스 네이티브 4K 영상 모델",
    description:
      "Lightricks의 오픈 가중치 영상 모델(LTX-2.3, 2026년 3월). 220억 파라미터로 네이티브 4K·50fps와 24kHz 스테레오 오디오를 지원하고, 세로형(포트레이트) 학습이 되어 있어 모바일/숏폼에 강하다. Pro·Fast 변형을 제공하며 소비자급 GPU에서 자체 구동이 가능하다.",
    categories: ["video"],
    pricing: "free",
    priceNote: "2026 기준 · 오픈 가중치(무료, 자체 호스팅) · 호스팅 서비스는 별도 과금",
    strengths: [
      "오픈소스 — 무료·자체 호스팅·커스터마이즈 자유",
      "네이티브 4K 50fps + 스테레오 오디오",
      "세로형 영상에 최적화(숏폼 친화)",
    ],
    useCases: ["RTX 40 시리즈 로컬 환경에서 비용 없이 숏폼 클립 생성"],
    tips: [
      "외부 API를 못 쓰는 보안 환경이면 자체 호스팅 가능한 오픈 모델이 현실적 선택지.",
    ],
    thumbnail: "/tools/ltx/lt-1.mp4",
    gallery: [
      "/tools/ltx/lt-1.mp4",
      "/tools/ltx/lt-2.mp4",
      "/tools/ltx/lt-3.mp4",
      "/tools/ltx/lt-4.mp4",
      "/tools/ltx/lt-5.mp4",
      "/tools/ltx/lt-6.webm",
    ],
    officialUrl: "https://www.lightricks.com/ltxv",
    addedAt: "2026-03-12",
    featured: false,
  },
  {
    slug: "vidu",
    name: "Vidu",
    tagline: "캐릭터 일관성과 낮은 단가가 강점인 Shengshu의 영상 모델",
    description:
      "중국 Shengshu Technology(칭화대 연구진 창업, Baidu·Ant 투자)가 만든 영상 모델. 텍스트·이미지에서 최대 1080p 영상을 약 10초 만에 생성한다. 현재 Vidu Q3는 참조 입력 기반(Reference-to-Video)으로 컷이 바뀌어도 캐릭터를 유지하는 일관성에 강하고 단가가 가장 낮은 축이다. 3~7장의 참조 이미지로 인물·사물·장면 일관성을 지키는 Multi-Entity Consistency, Q2의 듀얼 렌더링(Turbo/Cinematic)·시작·끝 프레임 연속도 지원한다. 애니메이션 스타일에 특히 강하다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote:
      "2026 기준 · 무료(크레딧 80) + Standard/Pro(Cinema 화질·최대 32초) · API 약 $0.042/초~",
    strengths: [
      "참조 기반 멀티 엔티티 — 컷 간 캐릭터 일관성",
      "초당 약 $0.042~로 매우 낮은 단가",
      "애니메이션/스타일라이즈드 영상에 강함",
    ],
    useCases: ["캐릭터 참조 이미지로 여러 컷에서 같은 인물을 유지하는 시퀀스 생성"],
    tips: [
      "프리뷰는 Turbo, 최종은 Cinematic으로. 최상위 화질은 Veo/Kling에 못 미치니 '일관성·비용'이 중요한 작업에 적합하다.",
    ],
    thumbnail: "/tools/vidu/vd-1.mp4",
    gallery: [
      "/tools/vidu/vd-1.mp4",
      "/tools/vidu/vd-2.mp4",
      "/tools/vidu/vd-3.mp4",
      "/tools/vidu/vd-4.mp4",
      "/tools/vidu/vd-5.mp4",
      "/tools/vidu/vd-1.mp4",
    ],
    officialUrl: "https://www.vidu.com/",
    addedAt: "2026-04-02",
    featured: false,
  },
  {
    slug: "pixverse",
    name: "PixVerse",
    tagline: "빠르고 스타일라이즈드 영상에 강한, 접근성 좋은 영상 모델",
    description:
      "Aishi Technology가 만든 영상 생성 모델. 텍스트·이미지에서 30~60초 안에 짧은 클립을 만들고, 시작·끝 프레임 제어와 360p~4K 해상도, 5~15초 길이를 지원한다. 최신 V6는 카메라 워크·캐릭터 연기·멀티샷과 네이티브 오디오를 개선했고, 영화 제작용 C1(스토리보드→영상)과 실시간 월드 모델 R1까지 라인업을 넓혔다. 스타일라이즈드·애니 비주얼에 특히 강하고 무료 티어가 있어 진입이 쉽다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료(워터마크) + 유료 ~$199/월 · API 약 $0.01/초(Fal 등)",
    strengths: [
      "빠른 생성(30~60초)과 낮은 진입 장벽",
      "스타일라이즈드·애니 비주얼에 강함",
      "시작·끝 프레임 제어 + 네이티브 오디오(V6)",
    ],
    useCases: ["소셜용 짧은 스타일라이즈드 클립을 빠르게 대량 생성"],
    tips: [
      "'완성 영상'이 아니라 '시도'에 과금되는 구조라 보통 클립당 2~5번 반복이 필요하다. 무료는 워터마크가 붙으니 공개용은 유료가 필요.",
    ],
    thumbnail: "https://picsum.photos/seed/pixverse/800/500",
    officialUrl: "https://pixverse.ai/",
    addedAt: "2026-05-20",
    featured: false,
  },
];

// image-tools-2.ts
// 힉스필드 목록 중 '독립적으로 존재하는' 추가 모델 (2026년 6월 기준 리서치).
// 이미 넣은 것(GPT Image 2, Nano Banana Pro, Recraft, FLUX.2)과 힉스필드 자체 제품은 제외.
//
// 사용법: src/data/ 에 넣고 tools.ts 에서 합친다.
//   import { imageTools } from "./image-tools";
//   import { imageTools2 } from "./image-tools-2";
//   export const tools: Tool[] = [...imageTools, ...imageTools2, /* ... */];

import type { Tool } from "./tools";

export const imageTools2: Tool[] = [
  {
    slug: "seedream-5",
    name: "Seedream 5.0",
    tagline: "웹 검색과 추론을 갖춘 바이트댄스의 지능형 이미지 모델",
    description:
      "틱톡 모회사 바이트댄스의 Seed 팀이 만든 텍스트·이미지 생성 모델. 이미지 모델 최초로 실시간 웹 검색을 탑재해 오늘의 날씨나 트렌드 같은 '현재 정보'를 반영한 이미지를 만들 수 있고, 복잡한 프롬프트를 '생각'해서 레이아웃·텍스트·공간 관계를 정확히 처리한다. 고해상도 이미지를 30초 안에 뽑을 만큼 빠른 것도 강점이다.",
    categories: ["image"],
    pricing: "freemium",
    priceNote: "Lite 버전 무료 제공 / 플랫폼별 크레딧 (2026 기준)",
    strengths: ["실시간 웹 검색 반영", "복잡한 레이아웃·텍스트 처리", "빠른 고해상도 생성", "최대 14장 레퍼런스 일관성"],
    useCases: ["시의성 있는 뉴스·소셜 그래픽", "정보성 포스터·인포그래픽", "제품 이미지 대량 변형", "프레젠테이션 비주얼"],
    tips: [
      "현재 이슈나 데이터 기반 이미지가 필요할 때 웹 검색 기능이 빛난다.",
      "여러 장 빠르게 뽑으며 비교하는 작업에 속도 이점이 크다.",
    ],
    thumbnail: "https://picsum.photos/seed/seedream5/800/500",
    officialUrl: "https://seed.bytedance.com/",
    addedAt: "2026-02-15",
    featured: false,
  },
  {
    slug: "nano-banana-2",
    name: "Nano Banana 2",
    tagline: "Pro급 품질을 Flash 속도로 — 구글의 대중형 모델",
    description:
      "구글 딥마인드의 Gemini 3.1 Flash Image 모델. 상위 모델 Nano Banana Pro의 고품질과 Flash의 빠른 속도를 합쳐, 비싼 구독 없이도 누구나 빠르게 쓸 수 있게 했다. 제미나이 앱·검색·광고 등 구글 생태계 전반에서 기본 모델로 쓰이며, 512px부터 4K까지 다양한 해상도를 지원한다.",
    categories: ["image"],
    pricing: "freemium",
    priceNote: "제미나이 무료 기본 모델 / 고급 기능 유료 (2026 기준)",
    strengths: ["Pro급 품질 + 빠른 속도", "이미지 편집·인페인팅", "최대 4K 해상도", "구글 생태계 통합"],
    useCases: ["빠른 이미지 생성·반복", "기존 이미지 편집", "소셜·마케팅 비주얼", "일상적 빠른 작업"],
    tips: [
      "속도가 필요한 대부분의 일상 작업에 기본값으로 두기 좋다.",
      "더 정밀한 작업이 필요하면 같은 계열의 Nano Banana Pro로 올려 쓴다.",
    ],
    thumbnail: "https://picsum.photos/seed/nanobanana2/800/500",
    officialUrl: "https://gemini.google.com/",
    addedAt: "2026-02-26",
    featured: false,
  },
  {
    slug: "grok-imagine",
    name: "Grok Imagine",
    tagline: "이미지·영상을 한 모델로 다루는 xAI의 크로스모달 도구",
    description:
      "일론 머스크의 xAI가 만든 멀티모달 생성 모델. 텍스트→이미지, 이미지 편집, 텍스트→영상, 이미지→영상, 영상→영상까지 한 모델에서 다루는 게 특징이다. X(트위터)의 실시간 데이터와 연결되고, 여러 장 합성과 자연어 편집을 지원한다. 품질 모드(Quality)는 사실적 제품 렌더와 광고 비주얼에 강하다.",
    categories: ["image", "video"],
    pricing: "freemium",
    priceNote: "Grok 유료 계정 필요 / API 종량제 약 $0.02~$0.055·장 (2026 기준)",
    strengths: ["이미지+영상 한 모델", "실시간 X 데이터 연동", "자연어 편집·다중 합성", "사실적 제품·광고 렌더"],
    useCases: ["이미지와 영상을 오가는 작업", "브랜드 광고 비주얼", "소셜용 짧은 클립", "제품 렌더 변형"],
    tips: [
      "이미지에서 바로 영상으로 이어지는 워크플로에 강하다.",
      "프롬프트로 기존 이미지를 수정·합성하는 편집 기능을 적극 활용한다.",
    ],
    thumbnail: "https://picsum.photos/seed/grokimagine/800/500",
    officialUrl: "https://grok.com/",
    addedAt: "2026-05-04",
    featured: false,
  },
  {
    slug: "reve",
    name: "Reve",
    tagline: "디자인 파일처럼 다루는 레이아웃 우선 이미지 모델",
    description:
      "요소를 직접 배치하고 결과물을 디자인 파일처럼 편집하는 '레이아웃 우선' 접근의 이미지 모델. 최대 4K까지 또렷한 텍스트 렌더링을 지원하고, Reve Flow 기능으로 자연어 대화를 통해 이미지를 실시간 수정할 수 있어 배우기 쉽다는 평이 많다.",
    categories: ["image", "uiux"],
    pricing: "freemium",
    priceNote: "무료 티어 제공 / 유료 플랜 별도 (2026 기준)",
    strengths: ["레이아웃 정밀 배치", "또렷한 4K 텍스트", "대화형 실시간 편집(Reve Flow)", "쉬운 학습 곡선"],
    useCases: ["요소 배치가 중요한 그래픽", "문구가 들어간 디자인", "빠른 편집·이터레이션", "레이아웃 시안"],
    tips: [
      "한 번에 완벽한 프롬프트보다, Reve Flow로 대화하며 다듬는 방식이 잘 맞는다.",
      "텍스트·구도를 통제해야 하는 디자인 작업에 적합하다.",
    ],
    thumbnail: "https://picsum.photos/seed/reve/800/500",
    officialUrl: "https://reve.art/",
    addedAt: "2026-03-01",
    featured: false,
  },
  {
    slug: "z-image",
    name: "Z-Image",
    tagline: "로컬에서 무료로 돌리는 알리바바의 오픈소스 모델",
    description:
      "알리바바 통이(Tongyi) 연구소가 공개한 60억 파라미터 오픈소스 이미지 모델. Apache 2.0 라이선스로 상업 사용이 자유롭고, 일반 소비자 GPU에서도 돌아갈 만큼 가볍다. 8스텝 만에 사실적 이미지를 뽑는 빠른 Turbo 버전과 파인튜닝용 Base 버전이 있으며, 영어·중국어 텍스트 렌더링이 정확하다.",
    categories: ["image"],
    pricing: "free",
    priceNote: "오픈소스 무료(Apache 2.0), 로컬 실행 (2026 기준)",
    strengths: ["완전 오픈소스·상업 사용 자유", "로컬 실행(저사양 GPU 가능)", "매우 빠른 생성", "영어·중국어 텍스트 렌더링"],
    useCases: ["비용 없는 대량 생성", "자체 파인튜닝·커스터마이징", "프라이버시가 중요한 작업", "로컬 워크플로(ComfyUI 등)"],
    tips: [
      "클라우드 구독 없이 내 컴퓨터에서 무제한으로 돌리고 싶을 때 1순위.",
      "빠른 결과는 Turbo, 세밀한 커스터마이징은 Base 버전을 쓴다.",
    ],
    thumbnail: "https://picsum.photos/seed/zimage/800/500",
    officialUrl: "https://github.com/Tongyi-MAI/Z-Image",
    addedAt: "2026-01-28",
    featured: false,
  },
  {
    slug: "topaz",
    name: "Topaz",
    tagline: "이미지를 고해상도로 키워주는 업스케일 도구",
    description:
      "AI로 이미지 해상도와 디테일을 끌어올리는 업스케일·화질 향상 전문 도구(Gigapixel 등). 생성보다는 '이미 만든 이미지의 마무리'에 쓰이며, 인쇄용 고해상 출력이나 저해상 소스 보정에 강하다. 생성 모델로 뽑은 결과물을 최종 납품 전에 키우는 단계에서 자주 함께 쓰인다.",
    categories: ["render"],
    pricing: "paid",
    priceNote: "유료 소프트웨어(영구 라이선스/구독) (2026 기준)",
    strengths: ["고품질 업스케일", "디테일·노이즈 보정", "인쇄용 고해상 출력", "다른 생성 모델과 마무리 조합"],
    useCases: ["저해상 이미지 확대", "인쇄용 고해상화", "AI 생성물 최종 화질 향상", "오래된 사진 복원"],
    tips: [
      "생성→Topaz 업스케일 순으로 쓰면 최종 품질이 한 단계 올라간다.",
      "생성 도구가 아니므로 '만들기'가 아니라 '키우기/다듬기' 단계에 배치한다.",
    ],
    thumbnail: "https://picsum.photos/seed/topaz/800/500",
    officialUrl: "https://www.topazlabs.com/",
    addedAt: "2026-01-10",
    featured: false,
  },
];

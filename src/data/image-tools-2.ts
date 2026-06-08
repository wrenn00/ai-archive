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
    slug: "seedream",
    name: "Seedream",
    tagline: "웹 검색·추론을 갖춘 바이트댄스의 지능형 이미지 모델 — 5.0·Lite 서빙",
    description:
      "틱톡 모회사 바이트댄스의 Seed 팀이 만든 텍스트·이미지 생성 모델 라인. 이미지 모델 최초로 실시간 웹 검색을 탑재해 오늘의 날씨나 트렌드 같은 '현재 정보'를 반영한 이미지를 만들 수 있고, 복잡한 프롬프트를 '생각'해서 레이아웃·텍스트·공간 관계를 정확히 처리한다. 현재는 플래그십 5.0과 무료 경량 Lite를 함께 서빙한다.",
    categories: ["image"],
    pricing: "freemium",
    priceNote: "Lite 버전 무료 제공 / 플랫폼별 크레딧 (2026 기준)",
    strengths: ["실시간 웹 검색 반영", "복잡한 레이아웃·텍스트 처리", "빠른 고해상도 생성", "최대 14장 레퍼런스 일관성"],
    useCases: ["시의성 있는 뉴스·소셜 그래픽", "정보성 포스터·인포그래픽", "제품 이미지 대량 변형", "프레젠테이션 비주얼"],
    tips: [
      "현재 이슈나 데이터 기반 이미지가 필요할 때 웹 검색 기능이 빛난다.",
      "여러 장 빠르게 뽑으며 비교하는 작업에 속도 이점이 크다.",
    ],
    versions: [
      {
        name: "5.0",
        tagline: "웹 검색·추론을 갖춘 최신 플래그십",
        description:
          "실시간 웹 검색과 추론을 갖춘 최신 메인 버전. 복잡한 레이아웃·텍스트·공간 관계를 정확히 처리하고 고해상도 이미지를 30초 안에 뽑을 만큼 빠르다.",
        pricing: "freemium",
        current: true,
      },
      {
        name: "5.0 Lite",
        tagline: "무료로 쓰는 경량 버전",
        description:
          "핵심 생성 기능을 가볍게 제공하는 무료 버전. 비용 없이 빠른 시도·반복에 적합하다.",
        pricing: "free",
        current: true,
      },
    ],
    thumbnail: "/tools/seedream/sd-1.webp",
    gallery: [
      "/tools/seedream/sd-1.webp",
      "/tools/seedream/sd-2.webp",
      "/tools/seedream/sd-3.webp",
      "/tools/seedream/sd-4.webp",
      "/tools/seedream/sd-5.webp",
      "/tools/seedream/sd-6.webp",
      "/tools/seedream/sd-7.webp",
      "/tools/seedream/sd-8.webp",
      "/tools/seedream/sd-9.webp",
      "/tools/seedream/sd-10.webp",
      "/tools/seedream/sd-11.webp",
      "/tools/seedream/sd-1.webp",
    ],
    officialUrl: "https://seed.bytedance.com/",
    addedAt: "2026-02-15",
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
    thumbnail: "/tools/grok/g-thumb.mp4",
    gallery: [
      "/tools/grok/g-vid-1.mp4",
      "/tools/grok/g-vid-2.mp4",
      "/tools/grok/g-vid-3.mp4",
      "/tools/grok/g-vid-4.mp4",
    ],
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
    thumbnail: "/tools/reve/rv-1.jpg",
    gallery: [
      "/tools/reve/rv-1.jpg",
      "/tools/reve/rv-2.jpg",
      "/tools/reve/rv-3.jpg",
      "/tools/reve/rv-4.jpg",
      "/tools/reve/rv-5.jpg",
      "/tools/reve/rv-6.jpg",
      "/tools/reve/rv-7.jpg",
      "/tools/reve/rv-8.jpg",
      "/tools/reve/rv-9.jpg",
      "/tools/reve/rv-10.jpg",
      "/tools/reve/rv-11.jpg",
      "/tools/reve/rv-12.jpg",
    ],
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
    tagline: "디테일 '보존'에 강한 실사진용 업스케일·복원 도구 (Gigapixel 8)",
    description:
      "AI로 이미지 해상도와 디테일을 끌어올리는 업스케일·화질 향상 전문 도구. 2026년 기준 최신은 Gigapixel 8(8.2)·Photo AI로, 원본에 없던 걸 상상해 그려 넣기보다 실제 픽셀의 디테일을 '보존'하며 키우는 비생성 계열이라 실제 사진(인물·풍경·제품)에 특히 강하다. 인쇄용 고해상 출력이나 저해상 소스 보정, 생성 모델 결과물의 최종 마무리 단계에서 많이 쓰인다.",
    categories: ["render"],
    pricing: "paid",
    priceNote: "유료 소프트웨어(영구 라이선스/구독) (2026 기준)",
    strengths: ["디테일 보존형 업스케일(실사진에 강함)", "노이즈·블러 보정과 얼굴 복원", "인쇄용 고해상 출력", "다른 생성 모델과 마무리 조합"],
    useCases: ["실제 사진의 고해상화·복원", "인쇄용 고해상화", "AI 생성물 최종 화질 마무리", "오래된 사진 복원"],
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

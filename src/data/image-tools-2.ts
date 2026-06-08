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
    tagline: "텍스트·이미지에서 영상까지 빠르게 뽑는 xAI의 영상 모델",
    description:
      "일론 머스크의 xAI가 만든 멀티모달 모델 중 영상 생성 부분. 텍스트→영상, 이미지→영상, 영상→영상을 지원하고, X(트위터)의 실시간 데이터와 연결된다. 이미지에서 바로 움직이는 클립으로 이어지는 워크플로가 강점이라 소셜용 짧은 영상·광고 비주얼 제작에 잘 맞는다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote: "Grok 유료 계정 필요 / API 종량제 약 $0.02~$0.055·장 (2026 기준)",
    strengths: ["이미지→영상 워크플로가 매끄러움", "실시간 X 데이터 연동", "빠른 생성 속도", "소셜·광고용 짧은 클립에 강함"],
    useCases: ["정지 이미지에서 움직이는 클립 생성", "브랜드 광고 영상", "소셜용 짧은 클립", "영상 변형(video-to-video)"],
    tips: [
      "이미지에서 바로 영상으로 이어지는 워크플로에 강하다.",
      "정지 컷을 먼저 다듬은 뒤 영상으로 확장하면 결과가 안정적이다.",
    ],
    thumbnail: "/tools/grok/g-vid-5.mp4",
    gallery: [
      "/tools/grok/g-vid-1.mp4",
      "/tools/grok/g-vid-2.mp4",
      "/tools/grok/g-vid-3.mp4",
      "/tools/grok/g-vid-4.mp4",
      "/tools/grok/g-vid-5.mp4",
      "/tools/grok/g-vid-6.mp4",
      "/tools/grok/g-vid-7.mp4",
      "/tools/grok/g-vid-8.mp4",
      "/tools/grok/g-vid-9.mp4",
    ],
    officialUrl: "https://grok.com/",
    addedAt: "2026-05-04",
    featured: false,
  },
  {
    slug: "grok-imagine-image",
    name: "Grok Imagine",
    tagline: "사실적 렌더와 자연어 편집에 강한 xAI의 이미지 모델",
    description:
      "일론 머스크의 xAI가 만든 멀티모달 모델 중 이미지 생성 부분. 텍스트→이미지와 이미지 편집을 다루고, X(트위터)의 실시간 데이터와 연결된다. 여러 장 합성과 자연어 편집을 지원하며, 품질 모드(Quality)는 사실적인 제품 렌더와 광고 비주얼에 특히 강하다.",
    categories: ["image"],
    pricing: "freemium",
    priceNote: "Grok 유료 계정 필요 / API 종량제 약 $0.02~$0.055·장 (2026 기준)",
    strengths: ["사실적 제품·광고 렌더", "실시간 X 데이터 연동", "자연어 편집·다중 합성", "고해상도 출력"],
    useCases: ["브랜드 광고 비주얼", "사실적 제품 렌더", "콘셉트 이미지", "프롬프트 기반 이미지 편집"],
    tips: [
      "사실적 결과가 필요하면 품질 모드(Quality)를 쓴다.",
      "프롬프트로 기존 이미지를 수정·합성하는 편집 기능을 적극 활용한다.",
    ],
    thumbnail: "/tools/grok-img/gi-1.jpg",
    gallery: [
      "/tools/grok-img/gi-1.jpg",
      "/tools/grok-img/gi-2.jpg",
      "/tools/grok-img/gi-3.jpg",
      "/tools/grok-img/gi-4.jpg",
      "/tools/grok-img/gi-5.jpg",
      "/tools/grok-img/gi-6.jpg",
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
    categories: ["image"],
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
    slug: "comfyui",
    name: "ComfyUI",
    tagline: "모델·파라미터·출력을 노드로 완전 제어하는 비주얼 AI 워크플로우 엔진",
    description:
      "단일 모델을 부르는 도구가 아니라, Stable Diffusion·FLUX 등 여러 모델과 처리 단계를 노드로 연결해 파이프라인을 짜는 오픈소스 워크플로우 엔진. 모든 파라미터와 단계가 보이고 조정 가능해 전문가급 제어가 강점이다. 내 PC에서 도는 Comfy Local(오픈소스), 클라우드(Comfy Cloud), 프로덕션 API(Comfy API), 엔터프라이즈까지 제공하며, 초보자용 App Mode와 커뮤니티 워크플로우(Comfy Hub)도 있다. Netflix·Amazon Studios·Ubisoft 등 실무 스튜디오에서 쓰인다.",
    categories: ["image"],
    pricing: "freemium",
    priceNote: "2026 기준 · Comfy Local 오픈소스(무료) + Comfy Cloud/API 유료",
    strengths: [
      "노드 기반 완전 제어 — 모델·파라미터·단계 전부 조정",
      "60,000+ 노드와 수천 개 커뮤니티 워크플로우",
      "로컬·클라우드·API·엔터프라이즈 전 범위 지원",
    ],
    useCases: ["SD/FLUX 생성 → 업스케일 → 보정을 하나의 워크플로우로 자동화"],
    tips: [
      "자유도가 높은 만큼 학습 곡선이 있다. 처음엔 App Mode나 커뮤니티 템플릿에서 시작하는 게 좋다.",
    ],
    thumbnail: "/tools/comfyui/cf-1.webm",
    officialUrl: "https://comfy.org/",
    addedAt: "2026-05-25",
    featured: false,
  },
];

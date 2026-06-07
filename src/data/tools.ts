import { imageTools } from "./image-tools";
import { imageTools2 } from "./image-tools-2";
import { videoTools } from "./video-tools";

export type Category = "image" | "video" | "3d" | "uiux" | "render" | "tips";
export type Pricing = "free" | "freemium" | "paid";

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  categories: Category[];
  pricing: Pricing;
  priceNote?: string;
  strengths: string[];
  useCases: string[];
  tips?: string[];
  thumbnail: string;
  gallery?: string[];
  officialUrl: string;
  /** ISO date (YYYY-MM-DD) */
  addedAt: string;
  featured?: boolean;
}

const img = (seed: string) =>
  `https://picsum.photos/seed/${seed}/800/600`;
const gal = (seed: string) => [
  `https://picsum.photos/seed/${seed}-1/1200/800`,
  `https://picsum.photos/seed/${seed}-2/1200/800`,
  `https://picsum.photos/seed/${seed}-3/1200/800`,
];

// 이미지 카테고리는 image-tools.ts 의 imageTools 가 담당.
// 여기 남은 stable-diffusion 은 오픈소스 대표 + tips 카테고리 유지용.
const otherTools: Tool[] = [
  // -------------------------------------------------- IMAGE (오픈소스 보강)
  {
    slug: "stable-diffusion",
    name: "Stable Diffusion",
    tagline: "완전히 통제 가능한 오픈소스 생성",
    description:
      "로컬에서 돌릴 수 있는 오픈소스 이미지 모델. ControlNet, LoRA, 인페인팅 등 생태계가 방대해 구도·포즈·스타일을 픽셀 단위로 통제할 수 있다. 자유도가 높은 만큼 학습 곡선도 있다.",
    categories: ["image", "tips"],
    pricing: "free",
    priceNote: "오픈소스, 로컬 실행 무료",
    strengths: [
      "ControlNet으로 정밀한 구도 제어",
      "LoRA로 특정 스타일·캐릭터 학습",
      "데이터가 외부로 나가지 않음",
    ],
    useCases: [
      "일관된 캐릭터 시트",
      "제품 목업 합성",
      "대량 배치 생성",
    ],
    tips: [
      "ComfyUI로 노드 기반 워크플로를 저장해 재사용한다.",
      "negative prompt에 'lowres, bad hands'를 넣어 품질을 끌어올린다.",
    ],
    thumbnail: img("stablediffusion"),
    gallery: gal("stablediffusion"),
    officialUrl: "https://stability.ai",
    addedAt: "2025-08-21",
  },
  // ---------------------------------------------------------------- VIDEO
  {
    slug: "runway-gen-3",
    name: "Runway Gen-3",
    tagline: "프롬프트로 만드는 시네마틱 영상",
    description:
      "텍스트·이미지에서 고품질 영상을 생성하는 대표 도구. 모션 브러시, 카메라 컨트롤 등 영상 연출에 특화된 기능이 풍부해 광고·뮤직비디오 현장에서도 실사용된다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote: "무료 크레딧 후 월 $12부터",
    strengths: [
      "자연스러운 모션과 일관성",
      "모션 브러시로 부분 움직임 지정",
      "이미지→영상 변환 품질",
    ],
    useCases: [
      "광고·프로모 영상",
      "스토리보드 모션 테스트",
      "뮤직비디오 비주얼",
    ],
    tips: [
      "정지 이미지를 먼저 확정한 뒤 image-to-video로 가면 통제가 쉽다.",
    ],
    thumbnail: img("runway"),
    gallery: gal("runway"),
    officialUrl: "https://runwayml.com",
    addedAt: "2025-11-01",
    featured: true,
  },
  {
    slug: "pika",
    name: "Pika",
    tagline: "가볍고 빠른 영상 생성 플레이그라운드",
    description:
      "직관적인 UI와 빠른 생성 속도로 인기를 얻은 영상 도구. 특정 영역만 움직이게 하거나 효과를 더하는 'Pikaffects' 같은 재미있는 기능으로 숏폼 콘텐츠 제작에 적합하다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote: "무료 플랜 제공",
    strengths: [
      "쉬운 진입 장벽",
      "빠른 반복 생성",
      "독특한 이펙트 프리셋",
    ],
    useCases: [
      "SNS 숏폼",
      "밈·움짤",
      "아이디어 프로토타이핑",
    ],
    thumbnail: img("pika"),
    gallery: gal("pika"),
    officialUrl: "https://pika.art",
    addedAt: "2025-07-18",
  },
  {
    slug: "kling-ai",
    name: "Kling AI",
    tagline: "긴 길이·고해상도 영상 생성",
    description:
      "최대 수 분 길이의 영상과 사실적인 물리 표현으로 주목받은 모델. 인물의 동작과 표정 표현이 강점이며 립싱크·스타트/엔드 프레임 지정 기능을 제공한다.",
    categories: ["video"],
    pricing: "freemium",
    priceNote: "일일 무료 크레딧 제공",
    strengths: [
      "비교적 긴 영상 길이",
      "사실적인 인물 모션",
      "시작·끝 프레임 지정",
    ],
    useCases: [
      "인물 중심 영상",
      "제품 소개 클립",
      "콘셉트 필름",
    ],
    thumbnail: img("kling"),
    gallery: gal("kling"),
    officialUrl: "https://klingai.com",
    addedAt: "2025-10-22",
  },

  {
    slug: "sora",
    name: "Sora",
    tagline: "물리를 이해하는 텍스트→영상 모델",
    description:
      "OpenAI가 공개한 텍스트-투-비디오 모델로, 장면 안의 사물과 인물이 물리 법칙을 비교적 일관되게 따른다. 한 프롬프트로 여러 샷이 이어지는 복잡한 장면을 만들어 내며 리믹스·스토리보드 편집 기능을 제공한다.",
    categories: ["video"],
    pricing: "paid",
    priceNote: "ChatGPT Plus/Pro 플랜 연동",
    strengths: [
      "장면의 물리적 일관성",
      "복잡한 멀티샷 연출",
      "스토리보드·리믹스 편집",
    ],
    useCases: [
      "콘셉트 필름",
      "광고 프리비주얼",
      "내러티브 영상 실험",
    ],
    thumbnail: img("sora"),
    gallery: gal("sora"),
    officialUrl: "https://openai.com/sora",
    addedAt: "2025-11-08",
  },

  // ------------------------------------------------------------------- 3D
  {
    slug: "spline-ai",
    name: "Spline AI",
    tagline: "웹에서 바로 쓰는 3D 디자인 툴",
    description:
      "브라우저에서 동작하는 3D 디자인 도구로, 텍스트 프롬프트로 오브젝트·머티리얼·애니메이션을 생성한다. 결과물을 코드 한 줄로 웹사이트에 임베드할 수 있어 인터랙티브 랜딩에 강하다.",
    categories: ["3d", "uiux"],
    pricing: "freemium",
    priceNote: "개인 무료 플랜",
    strengths: [
      "노코드 3D 씬 제작",
      "웹 임베드·React 연동",
      "실시간 협업",
    ],
    useCases: [
      "인터랙티브 랜딩 페이지",
      "3D 아이콘·히어로",
      "제품 3D 쇼케이스",
    ],
    thumbnail: img("spline"),
    gallery: gal("spline"),
    officialUrl: "https://spline.design",
    addedAt: "2025-09-14",
  },
  {
    slug: "luma-ai",
    name: "Luma AI",
    tagline: "사진과 영상에서 3D를",
    description:
      "스마트폰 촬영물로 NeRF·가우시안 스플래팅 기반의 정교한 3D 캡처를 만들어 내는 도구. 실제 공간이나 사물을 빠르게 3D 에셋으로 디지털화할 수 있다.",
    categories: ["3d", "render"],
    pricing: "freemium",
    priceNote: "무료 캡처 제공",
    strengths: [
      "사진 기반 고품질 3D 캡처",
      "별도 장비 없이 모바일로 촬영",
      "다양한 포맷 익스포트",
    ],
    useCases: [
      "실물 제품 3D화",
      "공간·부동산 캡처",
      "VFX 에셋 소스",
    ],
    thumbnail: img("luma"),
    gallery: gal("luma"),
    officialUrl: "https://lumalabs.ai",
    addedAt: "2025-08-03",
  },
  {
    slug: "meshy",
    name: "Meshy",
    tagline: "텍스트·이미지에서 3D 모델 생성",
    description:
      "프롬프트나 한 장의 이미지로 텍스처가 입혀진 3D 메시를 빠르게 생성한다. 게임·AR용 에셋 제작 시간을 크게 줄여 주며 PBR 텍스처와 리토폴로지 옵션을 지원한다.",
    categories: ["3d"],
    pricing: "freemium",
    priceNote: "무료 크레딧 후 월 구독",
    strengths: [
      "빠른 텍스트→3D 변환",
      "PBR 텍스처 자동 생성",
      "게임 엔진 친화적 포맷",
    ],
    useCases: [
      "게임 프롭 에셋",
      "AR 오브젝트",
      "3D 프로토타입",
    ],
    thumbnail: img("meshy"),
    gallery: gal("meshy"),
    officialUrl: "https://www.meshy.ai",
    addedAt: "2025-10-11",
  },

  // ----------------------------------------------------------------- UIUX
  {
    slug: "v0",
    name: "v0 by Vercel",
    tagline: "프롬프트로 만드는 React UI",
    description:
      "자연어 설명으로 Tailwind·shadcn/ui 기반의 실제 React 컴포넌트를 생성하는 도구. 생성된 코드를 그대로 복사해 프로젝트에 붙여 넣을 수 있어 프론트엔드 프로토타이핑 속도를 끌어올린다.",
    categories: ["uiux"],
    pricing: "freemium",
    priceNote: "무료 크레딧 제공",
    strengths: [
      "바로 쓰는 프로덕션급 코드",
      "shadcn/ui·Tailwind 네이티브",
      "이미지 첨부로 디자인 재현",
    ],
    useCases: [
      "랜딩·대시보드 UI 초안",
      "컴포넌트 빠른 생성",
      "디자인→코드 변환",
    ],
    tips: [
      "원하는 레퍼런스 스크린샷을 붙이면 레이아웃 재현도가 올라간다.",
    ],
    thumbnail: img("v0"),
    gallery: gal("v0"),
    officialUrl: "https://v0.dev",
    addedAt: "2025-11-20",
    featured: true,
  },
  {
    slug: "galileo-ai",
    name: "Galileo AI",
    tagline: "텍스트에서 고해상도 UI 디자인",
    description:
      "원하는 화면을 문장으로 설명하면 편집 가능한 고해상도 UI 디자인을 생성한다. 결과를 피그마로 내보내 디테일을 다듬을 수 있어 디자이너의 초안 작업을 빠르게 한다.",
    categories: ["uiux"],
    pricing: "paid",
    priceNote: "유료 구독",
    strengths: [
      "완성도 높은 화면 시안",
      "피그마 익스포트",
      "일관된 디자인 시스템",
    ],
    useCases: [
      "앱 화면 초안",
      "디자인 탐색·발산",
      "클라이언트 시안",
    ],
    thumbnail: img("galileo"),
    gallery: gal("galileo"),
    officialUrl: "https://www.usegalileo.ai",
    addedAt: "2025-07-29",
  },
  {
    slug: "uizard",
    name: "Uizard",
    tagline: "손그림·텍스트를 목업으로",
    description:
      "손으로 그린 와이어프레임 스케치나 텍스트 설명을 클릭 가능한 목업으로 변환한다. 비전문가도 빠르게 앱·웹 프로토타입을 만들 수 있도록 템플릿과 테마를 제공한다.",
    categories: ["uiux"],
    pricing: "freemium",
    priceNote: "무료 플랜 제공",
    strengths: [
      "스케치→디지털 변환",
      "풍부한 템플릿",
      "비전문가 친화적",
    ],
    useCases: [
      "아이디어 프로토타입",
      "워크숍 와이어프레임",
      "기획 초안 공유",
    ],
    thumbnail: img("uizard"),
    gallery: gal("uizard"),
    officialUrl: "https://uizard.io",
    addedAt: "2025-06-15",
  },

  // --------------------------------------------------------------- RENDER
  {
    slug: "magnific-ai",
    name: "Magnific AI",
    tagline: "디테일을 창조하는 업스케일러",
    description:
      "단순 확대를 넘어 없던 디테일을 새로 그려 넣는 업스케일·인핸스 도구. 'creativity' 슬라이더로 원본 충실도와 상상력의 균형을 조절하며 저해상도 이미지를 인쇄급으로 끌어올린다.",
    categories: ["render", "image"],
    pricing: "paid",
    priceNote: "유료 구독",
    strengths: [
      "디테일 재생성형 업스케일",
      "creativity·HDR 슬라이더",
      "인쇄급 고해상도 출력",
    ],
    useCases: [
      "AI 이미지 후보정",
      "저해상 소스 복원",
      "제품 비주얼 디테일 강화",
    ],
    tips: [
      "creativity를 너무 높이면 원본과 멀어지니 중간값부터 올려 본다.",
    ],
    thumbnail: img("magnific"),
    gallery: gal("magnific"),
    officialUrl: "https://magnific.ai",
    addedAt: "2025-10-30",
  },
];

// 이미지 모델(최신 리서치) + 나머지 카테고리 합본.
export const tools: Tool[] = [
  ...imageTools,
  ...imageTools2,
  ...videoTools,
  ...otherTools,
];

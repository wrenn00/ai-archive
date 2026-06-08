// ============================================================================
// uiux-tools.ts  —  UI/UX 생성 AI 도구 데이터 (2026년 6월 기준, 현재 서비스 중인 것만)
// ----------------------------------------------------------------------------
// 원본 리서치 데이터의 필드명을 기존 Tool 타입에 맞춰 매핑했다:
//   example(string) → useCases: [example]   tip(string) → tips: [tip]
//   price → pricing                          link → officialUrl
//   + thumbnail(picsum, slug 시드) / addedAt(추정일) 추가
// 가격·버전은 빨리 바뀌므로 priceNote에 "2026 기준" 표기. 운영 시 공식 페이지 재검증 권장.
// ============================================================================

import type { Tool } from "./tools";

export const uiuxTools: Tool[] = [
  {
    slug: "google-stitch",
    name: "Google Stitch",
    tagline: "Galileo의 후신, Gemini로 UI와 프론트엔드 코드를 만드는 무료 도구",
    description:
      "구글의 AI UI 디자인 도구. 인수한 Galileo AI를 흡수해 Gemini 모델로 재출시했다. 텍스트·이미지·와이어프레임 입력에서 UI 레이아웃과 프론트엔드 코드를 생성하고, 무한 캔버스·음성 입력·디자인 에이전트를 지원한다. Figma·HTML/CSS/Tailwind로 내보내거나 MCP 서버로 Claude Code·Cursor에 디자인을 넘길 수 있다. 0→1 아이디어 탐색 단계에 특히 강하다.",
    categories: ["uiux"],
    pricing: "free",
    priceNote: "2026 기준 · 무료(월 350회 수준) · 유료 플랜은 2026 하반기 예정",
    strengths: [
      "Gemini 기반 — 텍스트·이미지·와이어프레임 멀티 입력",
      "넉넉한 무료 사용량(월 350회 수준)",
      "Figma·코드 익스포트 + Claude Code/Cursor로 MCP 연동",
    ],
    useCases: [
      "'다크모드 핀테크 온보딩 대시보드' 프롬프트로 초안 화면 수 분 내 생성",
    ],
    tips: [
      "결과가 generic해지기 쉬우니 프롬프트를 구체적으로. 탐색은 Stitch, 정밀 마무리는 Figma로 가는 워크플로우가 정석.",
    ],
    thumbnail: "/tools/stitch/st-1.webp",
    gallery: ["/tools/stitch/st-1.webp", "/tools/stitch/st-2.webp"],
    officialUrl: "https://stitch.withgoogle.com/",
    addedAt: "2026-05-15",
    featured: true,
  },
  {
    slug: "figma-make",
    name: "Figma Make",
    tagline: "Figma 안에서 프롬프트로 편집 가능한 UI를 만드는 AI",
    description:
      "Figma에 내장된 AI 디자인 기능. 텍스트 프롬프트를 편집 가능한 UI 레이아웃으로 바꾸고, AI 채팅과 시각 편집을 결합해 Figma를 떠나지 않고 빠르게 시안을 만든다. 이미 Figma 생태계에 있는 팀에게 가장 자연스러운 선택지로, 정밀 편집·디자인 시스템 관리·개발자 핸드오프까지 한 곳에서 이어진다.",
    categories: ["uiux"],
    pricing: "freemium",
    priceNote:
      "2026 기준 · 무료 티어 + Figma 유료 플랜(Professional 약 $15/에디터·월)에 포함",
    strengths: [
      "Figma 내부에서 바로 — 별도 도구 전환 불필요",
      "고품질 UI + 디자인 시스템·핸드오프 연결",
      "AI 채팅과 시각 편집의 조합",
    ],
    useCases: ["Figma 안에서 프롬프트로 화면 시안 생성 후 그대로 정밀 편집"],
    tips: [
      "코드로 UI를 바꿔야 하면 v0 쪽이, 디자인 파일 안에서 다듬는 거라면 Figma Make가 유리하다.",
    ],
    thumbnail: "/tools/figma/fm-1.mp4",
    gallery: [
      "/tools/figma/fm-1.mp4",
      "/tools/figma/fm-2.mp4",
      "/tools/figma/fm-3.mp4",
    ],
    officialUrl: "https://www.figma.com/make/",
    addedAt: "2026-04-25",
    featured: true,
  },
  {
    slug: "lovable",
    name: "Lovable",
    tagline: "UI·백엔드·배포까지 한 번에 만드는 풀스택 '바이브 코딩' 빌더",
    description:
      "프롬프트로 UI뿐 아니라 백엔드 로직·인증·DB·배포까지 한 워크플로우에서 만드는 AI 앱 빌더. 디자인 파일이나 코드 없이 아이디어→작동하는 웹앱으로 빠르게 가는 게 목표라, 창업자·PM·소규모 팀의 MVP 제작에 특히 맞는다.",
    categories: ["uiux"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료(하루 5회 수준) + Pro 약 $25/월",
    strengths: [
      "프론트+백엔드+배포까지 통합(풀스택)",
      "비개발자도 작동하는 프로토타입 제작 가능",
      "레퍼런스 이미지에서 영감 받아 생성",
    ],
    useCases: ["시드 투자 데모용 인증·결제 붙은 MVP를 짧은 기간에 제작"],
    tips: [
      "비주얼을 정밀하게 다듬는 용도보다, 작동하는 제품을 빠르게 세우는 데 최적. 디자인 디테일은 별도 도구 병행이 좋다.",
    ],
    thumbnail: "/tools/lovable/scene-1.webm",
    gallery: [
      "/tools/lovable/lv-1.avif",
      "/tools/lovable/lv-2.avif",
      "/tools/lovable/lv-3.avif",
      "/tools/lovable/lv-4.avif",
      "/tools/lovable/lv-5.webp",
      "/tools/lovable/lv-6.webp",
      "/tools/lovable/lv-7.webp",
      "/tools/lovable/lv-8.avif",
      "/tools/lovable/lv-9.webp",
      "/tools/lovable/lv-10.avif",
      "/tools/lovable/lv-11.avif",
      "/tools/lovable/lv-1.avif",
    ],
    officialUrl: "https://lovable.dev/",
    addedAt: "2026-04-10",
    featured: true,
  },
  {
    slug: "bolt-new",
    name: "Bolt.new",
    tagline: "브라우저에서 풀스택 프로토타입을 바로 만드는 빌더",
    description:
      "StackBlitz의 AI 앱 빌더. 프롬프트로 브라우저 안에서 풀스택 앱을 생성하고, 제품 개발 단계를 보여주며 코드까지 만든다. 사용할 AI 모델(예: Claude)을 고를 수 있고, 아이디어→기능하는 프로토타입까지 빠르게 가는 데 강하다.",
    categories: ["uiux"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료 티어 + 유료 구독(토큰/사용량 기준)",
    strengths: [
      "브라우저에서 풀스택 코드 생성·실행",
      "AI 모델 선택 가능(Claude 등)",
      "개발 과정을 단계별로 보여줌",
    ],
    useCases: ["재료·기분 기반 식단 추천 앱 같은 기능 프로토타입을 대화로 완성"],
    tips: [
      "Lovable과 성격이 비슷하다. 코드 제어를 더 원하면 Bolt, 비개발자 친화 풀스택이면 Lovable 쪽.",
    ],
    thumbnail: "/tools/bolt/bolt-1.webm",
    officialUrl: "https://bolt.new/",
    addedAt: "2026-03-20",
    featured: false,
  },
  {
    slug: "ux-pilot",
    name: "UX Pilot",
    tagline: "Figma 프레임과 실사용 코드를 함께 뽑는 디자인 우선 도구",
    description:
      "전체 사용자 플로우 단위로 UI를 생성하는 디자인 우선 AI 도구. 결과를 Figma 프레임으로 내보내거나 React·TypeScript·Tailwind·Vue 코드로 익스포트할 수 있고, Figma 플러그인으로 기존 작업과 연결된다. 디자인 핸드오프 중심 팀에 잘 맞는다.",
    categories: ["uiux"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료 티어 + 유료 구독",
    strengths: [
      "단발 컴포넌트가 아니라 전체 플로우 생성",
      "Figma 프레임 + 멀티 프레임워크 코드 익스포트",
      "Figma 플러그인으로 기존 워크플로우 연동",
    ],
    useCases: ["여러 화면으로 이어지는 사용자 플로우를 생성해 Figma로 핸드오프"],
    tips: [
      "코드 1:1 핸드오프가 목적이면 강점이 크다. 풀스택 작동 앱이 필요하면 Lovable/Bolt를 병행.",
    ],
    thumbnail: "/tools/uxpilot/up-1.mp4",
    gallery: [
      "/tools/uxpilot/up-1.mp4",
      "/tools/uxpilot/up-2.mp4",
      "/tools/uxpilot/up-3.mp4",
    ],
    officialUrl: "https://uxpilot.ai/",
    addedAt: "2026-03-05",
    featured: false,
  },
  {
    slug: "framer",
    name: "Framer",
    tagline: "AI로 만든 인터랙티브 디자인을 그대로 라이브 사이트로 게시",
    description:
      "디자인을 실제로 동작하는 웹사이트로 게시하는 AI 웹 빌더. 프롬프트·AI 기능으로 레이아웃을 만들고, 인터랙티브한 결과물을 코드 없이 바로 퍼블리시한다. 마케팅 사이트·랜딩페이지·포트폴리오처럼 '디자인=배포되는 사이트'인 작업에 강하다.",
    categories: ["uiux"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료 티어 + 유료(에디터당 약 $40/월부터)",
    strengths: [
      "디자인을 라이브 사이트로 바로 게시",
      "인터랙션·애니메이션 표현이 강함",
      "코드 없이 퍼블리시까지 한 번에",
    ],
    useCases: ["AI로 만든 랜딩페이지를 그대로 도메인에 게시"],
    tips: [
      "무료 티어 외 에디터 추가 시 비용($40/월·에디터 수준)이 붙으니 팀 규모를 고려.",
    ],
    thumbnail: "https://picsum.photos/seed/framer/800/500",
    officialUrl: "https://www.framer.com/",
    addedAt: "2026-02-15",
    featured: false,
  },
];

// ============================================================================
// render-tools.ts  —  렌더·업스케일 AI 도구 데이터 (2026년 6월 기준, 현재 서비스 중인 것만)
// ----------------------------------------------------------------------------
// 원본 리서치 데이터의 필드명을 기존 Tool 타입에 맞춰 매핑했다:
//   example(string) → useCases: [example]   tip(string) → tips: [tip]
//   price → pricing                          link → officialUrl
//   + thumbnail(picsum, slug 시드) / addedAt(추정일) 추가
//
// 참고: 2026년 업스케일러는 두 진영으로 갈린다.
//   · '디테일 재창조'(diffusion): Magnific, SUPIR, Clarity, Krea — AI 아트에 강함
//   · '디테일 보존'(GAN/비생성): Topaz, ESRGAN/Upscayl — 실제 사진에 강함
// ============================================================================

import type { Tool } from "./tools";

export const renderTools: Tool[] = [
  {
    slug: "upscayl",
    name: "Upscayl",
    tagline: "워터마크·계정 없이 로컬에서 돌리는 무료 오픈소스 업스케일러",
    description:
      "Windows·macOS·Linux에서 로컬로 동작하는 무료 오픈소스 데스크톱 업스케일러. Real-ESRGAN 계열 모델을 사용해 이미지를 2×·3×·4×(최대 16×)로 키운다. 모든 처리가 내 컴퓨터에서 일어나 업로드·파일 크기 제한·구독이 없고, 결과물에 워터마크도 없다. 프라이버시가 중요하거나 비용 없이 쓰려는 경우에 가장 명확한 선택지다.",
    categories: ["render"],
    pricing: "free",
    priceNote: "2026 기준 · 무료 오픈소스(데스크톱) · 일부 클라우드 기능은 별도",
    strengths: [
      "완전 무료·오픈소스, 워터마크/계정 불필요",
      "로컬 처리 — 업로드 없이 프라이버시 보장",
      "Win·Mac·Linux 네이티브 앱, 배치 처리",
    ],
    useCases: ["민감한 클라이언트 이미지를 외부 업로드 없이 4× 업스케일"],
    tips: [
      "4× 초과(최대 16×)는 AI 효과가 약해지고 기기 성능을 많이 타니, 보통 4×까지가 안전하다.",
    ],
    thumbnail: "https://picsum.photos/seed/upscayl/800/500",
    officialUrl: "https://upscayl.org/",
    addedAt: "2026-04-12",
    featured: true,
  },
  {
    slug: "supir",
    name: "SUPIR",
    tagline: "오픈소스 디퓨전 복원의 선두, ComfyUI로 쓰는 업스케일러",
    description:
      "오픈소스 디퓨전 기반 이미지 복원·업스케일 모델(SUPIR-v0). 원본에 없던 디테일을 생성해 채우는 '재창조' 계열의 오픈 선두주자로, ComfyUI 노드로 워크플로우에 끼워 쓸 수 있다. 자체 GPU 환경에서 무료로 돌릴 수 있지만 VRAM 요구가 큰 편이다.",
    categories: ["render"],
    pricing: "free",
    priceNote: "2026 기준 · 오픈 가중치(무료, 자체 호스팅 시 고사양 GPU 필요)",
    strengths: [
      "오픈소스 디퓨전 복원 중 최상위 품질",
      "ComfyUI 노드로 파이프라인 통합",
      "무료 자체 호스팅(가중치 공개)",
    ],
    useCases: ["ComfyUI 워크플로우에서 저해상 렌더를 디테일까지 살려 업스케일"],
    tips: [
      "VRAM을 많이 쓰므로 사양을 확인하고, 실제 사진보다 AI/렌더 이미지에 더 적합하다.",
    ],
    thumbnail: "https://picsum.photos/seed/supir/800/500",
    officialUrl: "https://github.com/Fanghua-Yu/SUPIR",
    addedAt: "2026-02-20",
    featured: false,
  },
  {
    slug: "clarity-upscaler",
    name: "Clarity Upscaler",
    tagline: "공개 API와 ComfyUI 노드를 제공하는 오픈소스 크리에이티브 업스케일러",
    description:
      "디퓨전 기반의 오픈소스 '크리에이티브' 업스케일러. 인물·피부 텍스처 복원에 강하고, 공개 API와 ComfyUI 노드를 함께 제공해 자체 호스팅과 호스팅 API를 모두 쓸 수 있다. 오픈 진영에서 Magnific에 가장 근접한 동작으로 자주 비교된다.",
    categories: ["render"],
    pricing: "freemium",
    priceNote: "2026 기준 · 오픈소스(무료) + 호스팅 API 사용량 과금",
    strengths: [
      "오픈소스 + 공개 API(호스팅) 둘 다 가능",
      "인물·피부 텍스처 복원에 강함",
      "ComfyUI 노드 제공",
    ],
    useCases: ["포트레이트의 피부 디테일을 살려 고해상으로 업스케일"],
    tips: [
      "creativity 계열이라 실제 인물의 정체성이 미세하게 바뀔 수 있으니, 사실 보존이 중요하면 Topaz를 병행.",
    ],
    thumbnail: "https://picsum.photos/seed/clarity-upscaler/800/500",
    officialUrl: "https://github.com/philz1337x/clarity-upscaler",
    addedAt: "2026-03-10",
    featured: false,
  },
  {
    slug: "lets-enhance",
    name: "Let's Enhance",
    tagline: "배치·API에 강한 클라우드 업스케일·복원 서비스",
    description:
      "웹 기반 클라우드 업스케일러. 대량 배치 처리와 성숙한 API(Claid 포함)를 제공해 이커머스 카탈로그처럼 많은 이미지를 일관되게 키우고 보정하는 데 강하다. 설치 없이 브라우저에서 바로 쓸 수 있다.",
    categories: ["render"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료 체험 크레딧 + 유료 구독/API 사용량 과금",
    strengths: [
      "대량 배치 처리에 강함",
      "성숙한 업스케일 API 제공",
      "이커머스 등 충실도 중심 작업에 적합",
    ],
    useCases: ["수백 장의 제품 사진을 일괄로 고해상·프린트용으로 변환"],
    tips: [
      "API 요청 제한(레이트 리밋)이 있으니 대량 파이프라인은 처리량을 미리 확인.",
    ],
    thumbnail: "https://picsum.photos/seed/lets-enhance/800/500",
    officialUrl: "https://letsenhance.io/",
    addedAt: "2026-01-25",
    featured: false,
  },
  {
    slug: "remini",
    name: "Remini",
    tagline: "흐린 사진·얼굴을 원터치로 복원하는 소비자용 인핸서",
    description:
      "저해상·오래된 사진을 빠르게 복원·선명화하는 소비자용 AI 인핸서. 특히 얼굴 디테일 복원과 블러 제거에 초점이 맞춰져 있어, 흐릿한 인물 사진이나 옛날 가족 사진 복원에 강하다. 모바일 앱 중심으로 원터치 워크플로우가 간편하고, 영상 업스케일러도 제공한다.",
    categories: ["render"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료(제한적) + 유료 구독",
    strengths: [
      "얼굴 복원·블러 제거에 특화",
      "원터치, 모바일 친화 워크플로우",
      "사진뿐 아니라 영상 업스케일도 지원",
    ],
    useCases: ["흐릿한 옛날 가족 사진을 한 번에 선명하게 복원"],
    tips: [
      "얼굴 복원에 강한 대신 디테일을 만들어 채우는 편이라, 인물의 정확한 원형 보존이 중요하면 결과를 확인.",
    ],
    thumbnail: "https://picsum.photos/seed/remini/800/500",
    officialUrl: "https://remini.ai/",
    addedAt: "2026-02-05",
    featured: false,
  },
];

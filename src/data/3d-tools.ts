// ============================================================================
// 3d-tools.ts  —  3D 생성 AI 모델 데이터 (2026년 6월 기준 리서치)
// ----------------------------------------------------------------------------
// 원본 리서치 데이터의 필드명을 기존 Tool 타입에 맞춰 매핑했다:
//   example(string) → useCases: [example]   tip(string) → tips: [tip]
//   price → pricing                          link → officialUrl
//   + thumbnail(picsum, slug 시드) / addedAt(추정일) 추가
// 가격·버전은 빨리 바뀌므로 priceNote에 "2026 기준" 표기. 운영 시 공식 페이지 재검증 권장.
// ============================================================================

import type { Tool } from "./tools";

export const threeDTools: Tool[] = [
  {
    slug: "rodin-hyper3d",
    name: "Rodin (Hyper3D)",
    tagline: "100억 파라미터로 프로덕션급 메시를 뽑는 최상위 3D 모델",
    description:
      "Deemos의 3D 생성 모델(구 Hyper3D). Rodin Gen-2는 100억 파라미터 규모로 시장 최고 수준의 사실적 품질과 4K 텍스처를 만들고, 깔끔한 쿼드 토폴로지·T/A 포즈 강제·다중 이미지 융합을 지원한다. 영화·광고·메타버스에서 히어로 에셋용으로 많이 쓰인다.",
    categories: ["3d"],
    pricing: "freemium",
    priceNote:
      "2026 기준 · 생성 무료 + 다운로드 과금(모델당 약 $0.50~) · 웹 Pro 약 $99/월",
    strengths: [
      "시장 최고 수준의 사실적 품질·4K 텍스처",
      "후처리 없이 바로 쓸 만한 깔끔한 토폴로지",
      "다중 이미지 융합으로 정확한 형상 복원",
    ],
    useCases: ["레퍼런스 이미지 여러 장으로 영화·광고용 히어로 캐릭터 메시 생성"],
    tips: [
      "생성은 무료, 다운로드 시 과금 구조라 여러 안을 먼저 뽑아보고 마음에 드는 것만 받는 게 효율적.",
    ],
    thumbnail: "https://picsum.photos/seed/rodin-hyper3d/800/500",
    officialUrl: "https://hyper3d.ai/",
    addedAt: "2026-05-10",
    featured: true,
  },
  {
    slug: "tripo-ai",
    name: "Tripo AI",
    tagline: "빠른 속도와 게임 친화 토폴로지, 스타일 변환이 강한 3D 도구",
    description:
      "Tripo의 텍스트·이미지→3D 모델. 게임 엔진에 맞는 깔끔한 쿼드 토폴로지와 오토 리깅을 제공하고, 레고·복셀·카툰 같은 독특한 스타일 변환이 강점이다. v3.0은 최대 200만 폴리곤의 조각 수준 디테일까지 지원하며 STL 익스포트로 3D 프린팅에도 쓰인다.",
    categories: ["3d"],
    pricing: "freemium",
    priceNote:
      "2026 기준 · 무료 플랜(가입 시 크레딧 제공) + 유료 약 $11.94/월부터 · API 별도",
    strengths: [
      "게임용 깔끔한 쿼드 토폴로지 + 오토 리깅",
      "레고·복셀·카툰 등 스타일 변환 옵션이 독보적",
      "빠른 생성(이전 버전 25~30초대) + v3.0 고디테일",
    ],
    useCases: ["콘셉트 이미지에서 바로 리깅된 게임 캐릭터 에셋 생성"],
    tips: [
      "v3.0은 디테일이 높은 대신 느리니(약 100초), 반복 테스트는 빠른 버전으로 돌리는 게 좋다.",
    ],
    thumbnail: "https://picsum.photos/seed/tripo-ai/800/500",
    officialUrl: "https://www.tripo3d.ai/",
    addedAt: "2026-04-20",
    featured: true,
  },
  {
    slug: "hunyuan3d",
    name: "Hunyuan3D",
    tagline: "자체 호스팅 가능한 텐센트의 오픈소스 3D 모델",
    description:
      "텐센트의 오픈소스 3D 생성 모델. 유기적인 형태·캐릭터·매끈한 표면 오브젝트에 강하고, 가중치가 공개돼 있어 자체 GPU에서 무료로 무제한 생성·커스터마이즈할 수 있다. 로컬 제어가 필요하거나 비용 없이 운영하려는 팀에게 가장 진지한 오픈 선택지다.",
    categories: ["3d"],
    pricing: "free",
    priceNote: "2026 기준 · 오픈 가중치(무료, 자체 호스팅 시 GPU 필요)",
    strengths: [
      "오픈소스 — 무료·무제한·자체 호스팅",
      "유기적 형태·캐릭터 표현이 강함",
      "텐센트의 지속적인 업데이트",
    ],
    useCases: ["내부망/보안 환경에서 자체 호스팅으로 3D 에셋 대량 생성"],
    tips: [
      "자체 구동에는 성능 좋은 GPU가 필요하다. 가볍게 쓰려면 이 모델을 제공하는 호스팅 서비스로 시작해도 된다.",
    ],
    thumbnail: "https://picsum.photos/seed/hunyuan3d/800/500",
    officialUrl: "https://github.com/Tencent/Hunyuan3D-2",
    addedAt: "2026-03-15",
    featured: true,
  },
  {
    slug: "trellis-2",
    name: "TRELLIS 2",
    tagline: "비주얼 충실도가 뛰어난 마이크로소프트 오픈소스 3D 모델",
    description:
      "마이크로소프트의 오픈소스 3D 생성 모델. 단일/다중 뷰 입력에서 높은 비주얼 충실도를 보여줘 시네마틱 프리비즈나 고품질 에셋 생성에 적합하다. 오픈소스라 비용 없이 자체 호스팅이 가능하고, 품질 대비 비용 면에서 좋은 균형을 보인다.",
    categories: ["3d"],
    pricing: "free",
    priceNote: "2026 기준 · 오픈 가중치(무료, 자체 호스팅)",
    strengths: [
      "오픈소스 중 최상위 비주얼 충실도",
      "무료·자체 호스팅 가능",
      "단일·다중 뷰 입력 모두 지원",
    ],
    useCases: ["콘셉트 이미지에서 시네마틱 프리비즈용 고품질 3D 생성"],
    tips: [
      "최종 게임 에셋은 리토폴로지가 필요할 수 있으니, 프리비즈·시각화 단계에서 강점을 살리는 게 좋다.",
    ],
    thumbnail: "https://picsum.photos/seed/trellis-2/800/500",
    officialUrl: "https://trellis3d.github.io/",
    addedAt: "2026-02-10",
    featured: false,
  },
  {
    slug: "hitem3d",
    name: "Hitem3D",
    tagline: "다중 뷰 복원과 초고해상도 메시에 강한 3D 모델",
    description:
      "여러 각도의 이미지를 결합해 정밀하게 복원하는 다중 뷰 3D 생성 도구. 최대 1536³의 고해상도 메시와 부위별 시맨틱 분할을 지원하고, 깔끔한 STL 익스포트로 미니어처·피규어 등 3D 프린팅에 특히 강하다.",
    categories: ["3d", "render"],
    pricing: "freemium",
    priceNote: "2026 기준 · 무료 체험 + 유료 구독(생성량 기준)",
    strengths: [
      "다중 뷰 결합으로 정확한 형상 복원",
      "최대 1536³ 초고해상도 메시(미니어처에 유리)",
      "깔끔한 STL — 3D 프린팅 친화",
    ],
    useCases: ["여러 각도 사진으로 프린팅용 고해상도 피규어 메시 생성"],
    tips: [
      "프린팅이 목적이면 해상도와 워터타이트 메시 품질이 강점. 게임용은 폴리곤 감량이 필요할 수 있다.",
    ],
    thumbnail: "https://picsum.photos/seed/hitem3d/800/500",
    officialUrl: "https://hitem3d.ai/",
    addedAt: "2026-03-25",
    featured: false,
  },
  {
    slug: "stability-sf3d",
    name: "Stability SF3D",
    tagline: "0.5초대 초고속 생성, 빠른 프리뷰용 3D 모델",
    description:
      "Stability AI의 Stable Fast 3D. 단일 이미지에서 약 0.5초 만에 3D 메시를 만들어 시장에서 가장 빠른 축에 속한다. 디테일·텍스처 품질은 최상위급 모델에 못 미치지만, 즉각적인 프리뷰나 대량 초안 생성에 적합하다.",
    categories: ["3d"],
    pricing: "freemium",
    priceNote:
      "2026 기준 · Stability API 사용량 과금(생성당 약 10크레딧) · fal 등에서도 제공",
    strengths: [
      "약 0.5초대의 압도적인 생성 속도",
      "즉시 프리뷰·대량 초안 생성에 최적",
      "Stability API·fal 등으로 쉽게 연동",
    ],
    useCases: ["수십 개 오브젝트의 빠른 3D 프리뷰를 한 번에 생성"],
    tips: [
      "최종 품질보다 속도·반복이 중요한 단계에서 쓰고, 마무리는 Rodin·Tripo 같은 고품질 모델로 넘기면 좋다.",
    ],
    thumbnail: "https://picsum.photos/seed/stability-sf3d/800/500",
    officialUrl: "https://stability.ai/stable-3d",
    addedAt: "2026-01-30",
    featured: false,
  },
];

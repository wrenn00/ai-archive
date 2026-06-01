export interface ShowcaseItem {
  id: string;
  title: string;
  author: string;
  image: string;
  /** 사용한 툴 slug 목록 (tools 데이터와 매칭) */
  toolSlugs: string[];
}

const img = (seed: string, h: number) =>
  `https://picsum.photos/seed/${seed}/800/${h}`;

export const showcase: ShowcaseItem[] = [
  {
    id: "sc-01",
    title: "네온 도시의 밤",
    author: "수강생 · 김도현",
    image: img("show-neon", 1000),
    toolSlugs: ["midjourney", "magnific-ai"],
  },
  {
    id: "sc-02",
    title: "브랜드 30초 필름",
    author: "에디터 · 한별",
    image: img("show-film", 600),
    toolSlugs: ["runway-gen-3", "sora"],
  },
  {
    id: "sc-03",
    title: "제품 랜딩 3D 히어로",
    author: "수강생 · 이서연",
    image: img("show-3d", 760),
    toolSlugs: ["spline-ai", "v0"],
  },
  {
    id: "sc-04",
    title: "캐릭터 시트 연작",
    author: "수강생 · 박준",
    image: img("show-char", 900),
    toolSlugs: ["stable-diffusion"],
  },
  {
    id: "sc-05",
    title: "모바일 앱 컨셉 UI",
    author: "에디터 · 윤지",
    image: img("show-ui", 560),
    toolSlugs: ["galileo-ai", "uizard"],
  },
  {
    id: "sc-06",
    title: "실사 합성 광고 키비주얼",
    author: "수강생 · 최민",
    image: img("show-key", 820),
    toolSlugs: ["adobe-firefly", "krea-ai"],
  },
  {
    id: "sc-07",
    title: "공간 스캔 → 3D 에셋",
    author: "수강생 · 정하늘",
    image: img("show-scan", 680),
    toolSlugs: ["luma-ai", "meshy"],
  },
  {
    id: "sc-08",
    title: "뮤직비디오 무드 클립",
    author: "에디터 · 도윤",
    image: img("show-mv", 940),
    toolSlugs: ["kling-ai", "pika"],
  },
];

import { tools, type Tool, type Category, type Pricing } from "@/data/tools";

/** 등록일 내림차순(최신순)으로 전체 툴 반환 */
export function getAllTools(): Tool[] {
  return [...tools].sort((a, b) => b.addedAt.localeCompare(a.addedAt));
}

/** slug로 단일 툴 조회 */
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

/** featured 표시된 툴만 반환 */
export function getFeatured(): Tool[] {
  return getAllTools().filter((t) => t.featured);
}

export type ToolSort = "recent" | "name";

export interface ToolFilter {
  /** 지정 시 해당 카테고리를 하나라도 가진 툴만 */
  category?: Category;
  /** 여러 카테고리 중 하나라도 가진 툴만 (OR) */
  categories?: Category[];
  /** 지정 시 해당 가격 정책만 */
  pricing?: Pricing;
  /** 이름·태그라인·설명 대상 검색어 */
  query?: string;
  /** featured만 보기 */
  featuredOnly?: boolean;
  /** 정렬 기준 (기본 recent) */
  sort?: ToolSort;
}

/** 조건에 맞는 툴을 필터링/정렬 */
export function filterTools(filter: ToolFilter = {}): Tool[] {
  const { category, categories, pricing, query, featuredOnly, sort } = filter;
  const q = query?.trim().toLowerCase();
  const cats = categories && categories.length ? categories : undefined;

  const result = getAllTools().filter((tool) => {
    if (category && !tool.categories.includes(category)) return false;
    if (cats && !cats.some((c) => tool.categories.includes(c))) return false;
    if (pricing && tool.pricing !== pricing) return false;
    if (featuredOnly && !tool.featured) return false;
    if (q) {
      const haystack =
        `${tool.name} ${tool.tagline} ${tool.description}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  if (sort === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }
  return result;
}

/** 같은 카테고리를 공유하는 비슷한 툴 (자기 자신 제외) */
export function getRelatedTools(slug: string, limit = 3): Tool[] {
  const base = getToolBySlug(slug);
  if (!base) return [];
  return getAllTools()
    .filter(
      (t) =>
        t.slug !== slug &&
        t.categories.some((c) => base.categories.includes(c)),
    )
    .slice(0, limit);
}

/** 카테고리별 툴 개수 맵 */
export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const tool of tools) {
    for (const c of tool.categories) {
      counts[c] = (counts[c] ?? 0) + 1;
    }
  }
  return counts;
}

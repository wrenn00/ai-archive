import type { Metadata } from "next";
import type { Category, Pricing } from "@/data/tools";
import { filterTools, type ToolSort } from "@/lib/tools";
import { categoryList, pricingList } from "@/lib/labels";
import FilterBar, { type FilterState } from "@/components/FilterBar";
import ResultsGrid from "@/components/ResultsGrid";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "아카이브 — ARCHIVE/AI",
  description: "AI 디자인 툴을 분야·가격으로 필터링해 살펴보세요.",
};

const CATEGORY_VALUES = new Set(categoryList.map((c) => c.value));
const PRICING_VALUES = new Set(pricingList.map((p) => p.value));

function first(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

export default async function ArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;

  const categories = (first(sp.category) ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is Category => CATEGORY_VALUES.has(s as Category));

  const pricingRaw = first(sp.pricing);
  const pricing =
    pricingRaw && PRICING_VALUES.has(pricingRaw as Pricing)
      ? (pricingRaw as Pricing)
      : undefined;

  const sort: ToolSort = first(sp.sort) === "name" ? "name" : "recent";
  const q = first(sp.q)?.trim() ?? "";

  const state: FilterState = { categories, pricing, sort, q };

  const results = filterTools({ categories, pricing, query: q, sort });

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-12">
      <SectionHeading
        label="Archive"
        title="전체 아카이브"
        aside="분야와 가격으로 좁혀 원하는 도구를 찾아보세요."
        className="mb-8"
      />

      <FilterBar {...state} />

      <p className="py-6 font-mono text-sm text-text-dim">
        <span className="text-text">{results.length}</span>개의 툴
      </p>

      <ResultsGrid tools={results} />
    </main>
  );
}

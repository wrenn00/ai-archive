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
    <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
      <SectionHeading
        en="Archive"
        ko="분야별 AI 디자인 툴 모음"
        className="mb-10"
      />

      <FilterBar {...state} />

      <p className="py-8 font-body text-xs uppercase tracking-widest text-text-dim [font-variant-numeric:tabular-nums]">
        <span className="text-text">{String(results.length).padStart(2, "0")}</span>{" "}
        Tools
      </p>

      <ResultsGrid tools={results} />
    </main>
  );
}

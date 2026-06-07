"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import type { Category, Pricing } from "@/data/tools";
import type { ToolSort } from "@/lib/tools";
import { categoryList, pricingList } from "@/lib/labels";

export interface FilterState {
  categories: Category[];
  pricing?: Pricing;
  sort: ToolSort;
  q: string;
}

export default function FilterBar(state: FilterState) {
  const router = useRouter();
  const [q, setQ] = useState(state.q);

  // URL이 외부에서 바뀌면 입력값도 동기화
  useEffect(() => setQ(state.q), [state.q]);

  function push(next: Partial<FilterState>) {
    const merged: FilterState = { ...state, q, ...next };
    const params = new URLSearchParams();
    if (merged.categories.length)
      params.set("category", merged.categories.join(","));
    if (merged.pricing) params.set("pricing", merged.pricing);
    if (merged.sort !== "recent") params.set("sort", merged.sort);
    if (merged.q.trim()) params.set("q", merged.q.trim());
    const qs = params.toString();
    router.push(qs ? `/archive?${qs}` : "/archive", { scroll: false });
  }

  // 검색어 디바운스
  useEffect(() => {
    if (q === state.q) return;
    const id = setTimeout(() => push({ q }), 350);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, state.q]);

  function toggleCategory(c: Category) {
    const has = state.categories.includes(c);
    push({
      categories: has
        ? state.categories.filter((x) => x !== c)
        : [...state.categories, c],
    });
  }

  const hasFilters =
    state.categories.length > 0 ||
    !!state.pricing ||
    state.sort !== "recent" ||
    !!state.q;

  return (
    <div className="sticky top-20 z-40 -mx-6 border-b border-border bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] px-6 py-5 backdrop-blur-md sm:-mx-12 sm:px-12 lg:-mx-20 lg:px-20">
      <div className="flex flex-col gap-4">
        {/* 분야 멀티 선택 */}
        <div className="flex flex-wrap items-center gap-2">
          {categoryList.map(({ value, label }) => {
            const active = state.categories.includes(value);
            return (
              <button
                key={value}
                type="button"
                onClick={() => toggleCategory(value)}
                data-cursor="hover"
                className={clsx(
                  "rounded-[2px] border px-3 py-1 font-body text-sm transition-colors",
                  active
                    ? "border-text bg-text text-bg"
                    : "border-border text-text-dim hover:border-text-dim hover:text-text",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* 가격 / 정렬 / 검색 */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {/* 가격 */}
            <div className="flex items-center gap-1.5">
              <span className="mr-1 font-mono text-xs uppercase tracking-widest text-text-dim">
                가격
              </span>
              <PillButton
                active={!state.pricing}
                onClick={() => push({ pricing: undefined })}
              >
                전체
              </PillButton>
              {pricingList.map(({ value, label }) => (
                <PillButton
                  key={value}
                  active={state.pricing === value}
                  onClick={() => push({ pricing: value })}
                >
                  {label}
                </PillButton>
              ))}
            </div>

            {/* 정렬 */}
            <div className="flex items-center gap-1.5">
              <span className="mr-1 font-mono text-xs uppercase tracking-widest text-text-dim">
                정렬
              </span>
              <PillButton
                active={state.sort === "recent"}
                onClick={() => push({ sort: "recent" })}
              >
                최신
              </PillButton>
              <PillButton
                active={state.sort === "name"}
                onClick={() => push({ sort: "name" })}
              >
                이름순
              </PillButton>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="툴 검색…"
              className="w-full rounded-[2px] border border-border bg-transparent px-4 py-2 font-body text-sm text-text placeholder:text-text-dim focus:border-text focus:outline-none sm:w-64"
            />
            {hasFilters && (
              <button
                type="button"
                onClick={() => router.push("/archive", { scroll: false })}
                data-cursor="hover"
                className="shrink-0 font-body text-sm text-text-dim transition-colors hover:text-text"
              >
                초기화
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PillButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-cursor="hover"
      className={clsx(
        "rounded-[2px] px-3 py-1 font-body text-sm transition-colors",
        active ? "bg-text text-bg" : "text-text-dim hover:text-text",
      )}
    >
      {children}
    </button>
  );
}

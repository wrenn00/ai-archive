import clsx from "clsx";
import type { Category } from "@/data/tools";
import { categoryLabels } from "@/lib/labels";

export interface CategoryTagProps {
  category: Category;
  className?: string;
}

/** 카테고리 라벨 — 얇은 헤어라인 칩, 모노톤. */
export default function CategoryTag({ category, className }: CategoryTagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-[2px] border border-border px-2 py-0.5",
        "font-body text-[11px] text-text-dim transition-colors",
        "group-hover:border-text-dim/60",
        className,
      )}
    >
      {categoryLabels[category]}
    </span>
  );
}

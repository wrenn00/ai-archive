import clsx from "clsx";
import type { Category } from "@/data/tools";
import { categoryLabels } from "@/lib/labels";

export interface CategoryTagProps {
  category: Category;
  className?: string;
}

export default function CategoryTag({ category, className }: CategoryTagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-border px-3 py-1",
        "font-body text-xs text-text-dim transition-colors",
        "hover:border-accent hover:text-accent",
        className,
      )}
    >
      {categoryLabels[category]}
    </span>
  );
}

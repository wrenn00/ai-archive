import clsx from "clsx";
import type { Pricing } from "@/data/tools";
import { pricingLabels } from "@/lib/labels";

export interface PriceBadgeProps {
  pricing: Pricing;
  className?: string;
}

/** 가격 표기 — 작은 점 + 라벨의 절제된 모노톤. 무료만 라임 점으로 미세 강조. */
export default function PriceBadge({ pricing, className }: PriceBadgeProps) {
  const isFree = pricing === "free";

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 font-body text-xs text-text-dim",
        className,
      )}
    >
      <span
        aria-hidden
        className={clsx(
          "h-1 w-1 rounded-full",
          isFree ? "bg-accent" : "bg-text-dim/60",
        )}
      />
      {pricingLabels[pricing]}
    </span>
  );
}

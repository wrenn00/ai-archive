import clsx from "clsx";
import type { Pricing } from "@/data/tools";
import { pricingLabels } from "@/lib/labels";

export interface PriceBadgeProps {
  pricing: Pricing;
  className?: string;
}

export default function PriceBadge({ pricing, className }: PriceBadgeProps) {
  const isFree = pricing === "free";

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 font-body text-xs font-semibold",
        isFree
          ? "bg-accent text-bg"
          : "border border-border text-text-dim",
        className,
      )}
    >
      {pricingLabels[pricing]}
    </span>
  );
}

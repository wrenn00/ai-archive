"use client";

import { useState } from "react";
import clsx from "clsx";
import type { ToolVersion } from "@/data/tools";
import { pricingLabels } from "@/lib/labels";

/**
 * 같은 모델의 여러 버전을 한 상세에서 탭으로 전환해 보여준다.
 * (예: Nano Banana → Pro / 2(Flash), Seedream → 5.0 / Lite)
 */
export default function VersionTabs({ versions }: { versions: ToolVersion[] }) {
  const [active, setActive] = useState(0);
  const v = versions[active];

  return (
    <div className="flex flex-col gap-8 border-t border-border pt-12">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Versions
        </span>
        <p className="font-body text-sm text-text-dim">현재 서빙 중인 버전</p>
      </div>

      {/* 탭 */}
      <div className="flex flex-wrap gap-2">
        {versions.map((ver, i) => (
          <button
            key={ver.name}
            type="button"
            onClick={() => setActive(i)}
            data-cursor="hover"
            className={clsx(
              "inline-flex items-center gap-2 rounded-[2px] border px-4 py-2 font-body text-sm transition-colors",
              i === active
                ? "border-text bg-text text-bg"
                : "border-border text-text-dim hover:border-text-dim hover:text-text",
            )}
          >
            {ver.name}
            {ver.current && (
              <span
                aria-hidden
                className={clsx(
                  "h-1 w-1 rounded-full",
                  i === active ? "bg-accent" : "bg-accent/70",
                )}
              />
            )}
          </button>
        ))}
      </div>

      {/* 선택된 버전 상세 */}
      <div className="flex max-w-2xl flex-col gap-4">
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="font-display text-2xl font-medium tracking-tight text-text">
            {v.name}
          </h3>
          {v.current && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
              현재 서빙
            </span>
          )}
          {v.pricing && (
            <span className="font-body text-xs text-text-dim">
              · {pricingLabels[v.pricing]}
            </span>
          )}
        </div>
        <p className="font-body text-base text-text">{v.tagline}</p>
        <p className="font-body text-sm leading-relaxed text-text-dim">
          {v.description}
        </p>
      </div>
    </div>
  );
}

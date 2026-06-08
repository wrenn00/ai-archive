"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import type { Tool } from "@/data/tools";
import CategoryTag from "@/components/CategoryTag";
import PriceBadge from "@/components/PriceBadge";
import { DUR, EASE, REVEAL_Y, STAGGER, VIEWPORT } from "@/lib/motion";

export interface ToolCardProps {
  tool: Tool;
  /** 그리드 내 순서 — 진입 애니메이션 stagger 용 */
  index?: number;
}

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const { slug, name, tagline, categories, pricing, thumbnail, featured } =
    tool;
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: REVEAL_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{
        duration: DUR.base,
        delay: Math.min(index * STAGGER, 0.4),
        ease: EASE,
      }}
      className="h-full"
    >
      <Link
        href={`/tool/${slug}`}
        data-cursor="hover"
        className="group flex h-full flex-col"
      >
        {/* Thumbnail — 전 카드 동일 비율(4:3), cover 로 잘라 높이 통일 */}
        <div
          className={clsx(
            "relative aspect-[4/3] overflow-hidden rounded-[3px] border bg-surface",
            featured ? "border-text-dim/40" : "border-border",
          )}
        >
          {/\.(mp4|webm)$/i.test(thumbnail) ? (
            <video
              src={thumbnail}
              muted
              loop
              playsInline
              autoPlay={!reduce}
              preload="metadata"
              aria-label={name}
              className="h-full w-full object-cover"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnail}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          )}

          {/* Hover overlay — 절제된 모노톤 */}
          <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:bg-bg/10 group-hover:opacity-100">
            <span className="font-body text-xs text-text">자세히 보기 →</span>
          </div>

          {featured && (
            <span className="absolute left-3 top-3 bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#0e0e0e]">
              Featured
            </span>
          )}
        </div>

        {/* Body — flex column, 메타 줄은 항상 카드 하단에 정렬 */}
        <div className="flex flex-1 flex-col pt-5">
          <h3 className="line-clamp-2 font-display text-lg font-medium leading-tight tracking-tight text-text">
            {name}
          </h3>
          <p className="mt-2 line-clamp-1 font-body text-sm leading-relaxed text-text-dim">
            {tagline}
          </p>

          {/* 메타: 카테고리(왼쪽) / 가격(오른쪽 끝) 한 줄 */}
          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((c) => (
                <CategoryTag key={c} category={c} />
              ))}
            </div>
            <PriceBadge pricing={pricing} className="shrink-0" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

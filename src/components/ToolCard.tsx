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
      className={clsx(featured && "sm:col-span-2")}
    >
      <Link
        href={`/tool/${slug}`}
        data-cursor="hover"
        className="group flex h-full flex-col"
      >
        {/* Thumbnail 16:10 */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] border border-border bg-surface">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Hover overlay — 절제된 모노톤 */}
          <div className="absolute inset-0 flex items-end bg-bg/0 p-4 opacity-0 transition-opacity duration-500 group-hover:bg-bg/10 group-hover:opacity-100">
            <span className="font-body text-xs text-text">자세히 보기 →</span>
          </div>

          {featured && (
            <span className="absolute left-3 top-3 bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#0d0d0c]">
              Featured
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-3 pt-5">
          <div className="flex flex-col gap-1.5">
            <h3
              className={clsx(
                "font-display font-medium leading-tight tracking-tight text-text transition-colors",
                featured ? "text-2xl" : "text-lg",
              )}
            >
              {name}
            </h3>
            <p className="font-body text-sm leading-relaxed text-text-dim">
              {tagline}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            {categories.map((c) => (
              <CategoryTag key={c} category={c} />
            ))}
            <PriceBadge pricing={pricing} className="ml-auto" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

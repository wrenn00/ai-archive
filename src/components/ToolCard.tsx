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
        className={clsx(
          "group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-colors",
          featured
            ? "border-accent/40 hover:border-accent/70"
            : "border-border hover:border-text-dim",
        )}
      >
        {/* Thumbnail 16:10 */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-bg/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="translate-y-3 font-mono text-sm uppercase tracking-[0.3em] text-accent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              VIEW
            </span>
          </div>

          {featured && (
            <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-bg">
              Featured
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="flex flex-col gap-1.5">
            <h3
              className={clsx(
                "font-display font-bold leading-tight tracking-tight text-text",
                featured ? "text-2xl" : "text-xl",
              )}
            >
              {name}
            </h3>
            <p className="font-body text-sm text-text-dim">{tagline}</p>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2">
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

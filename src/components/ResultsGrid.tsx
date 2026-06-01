"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import type { Tool } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { DUR, EASE } from "@/lib/motion";

export default function ResultsGrid({ tools }: { tools: Tool[] }) {
  const reduce = useReducedMotion();
  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border py-28 text-center">
        <span className="font-display text-2xl font-bold text-text">
          결과가 없어요
        </span>
        <p className="max-w-sm font-body text-sm text-text-dim">
          조건에 맞는 툴을 찾지 못했습니다. 필터를 조정하거나 검색어를 바꿔
          보세요.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {tools.map((tool) => (
          <motion.div
            key={tool.slug}
            layout
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: reduce ? 0 : DUR.fast, ease: EASE }}
            className={clsx(tool.featured && "sm:col-span-2")}
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Tool } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { DUR, EASE } from "@/lib/motion";

export default function ResultsGrid({ tools }: { tools: Tool[] }) {
  const reduce = useReducedMotion();
  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 border-y border-border py-32 text-center">
        <span className="font-display text-2xl font-medium tracking-tight text-text">
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
      // 균일한 격자: 모바일 1열 / 태블릿 2열 / 데스크탑 3열, 칸 너비 동일(1fr).
      // featured 라도 칸을 넓히지 않는다. gap 가로 32px·세로 56px.
      className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {tools.map((tool) => (
          <motion.div
            key={tool.slug}
            layout
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: reduce ? 0 : DUR.fast, ease: EASE }}
            className="h-full"
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

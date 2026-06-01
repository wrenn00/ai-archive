"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DUR, EASE } from "@/lib/motion";

/**
 * 라우트 전환 시 덮개가 내려와 화면을 덮었다가(이전 페이지 exit)
 * 다시 위로 걷히며 새 페이지를 드러낸다(다음 페이지 enter).
 * mode="wait" 라서 '닫힘 → 열림' 순서가 보장된다.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} className="flex flex-1 flex-col">
        {children}

        {/* 덮개 */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[90] origin-top bg-bg"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: DUR.fast, ease: EASE }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

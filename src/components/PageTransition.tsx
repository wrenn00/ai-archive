"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DUR, EASE } from "@/lib/motion";

/**
 * 라우트 전환 시 덮개가 화면을 덮은 채로 새 경로에 진입했다가
 * 위로 걷히며(scaleY 1 → 0) 콘텐츠를 드러낸다.
 *
 * 핵심: 덮개를 페이지 콘텐츠(children)와 완전히 분리한다.
 * 이전 구조는 덮개를 children 과 같은 keyed motion.div 안에 두어서,
 * 동적 라우트 /archive(`await searchParams`)가 mount 시 suspend 되면
 * mode="wait" AnimatePresence 가 새 자식의 enter 라이프사이클을 실행하지
 * 못했고, 덮개가 transform:none(전체 크기)으로 화면을 덮은 채 멈췄다.
 * 덮개를 분리하고 children 을 Suspense 로 격리하면, 덮개는 suspend 와
 * 무관하게 항상 걷힌다.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // 콘텐츠는 항상 즉시 렌더하고, suspend 는 여기서 가둔다.
  const content = <Suspense fallback={null}>{children}</Suspense>;

  // 모션 비활성: 덮개 없이 즉시 표시.
  if (reduce) return content;

  return (
    <>
      {content}

      {/* 덮개: children 과 분리된 별도 트리. 경로가 바뀌면 새 덮개가
          덮은 상태(scaleY:1)로 mount 되어 걷힌다(scaleY:0).
          initial={false} 라 최초 로드에는 연출 없이 열린 상태로 시작. */}
      <AnimatePresence initial={false}>
        <motion.div
          key={pathname}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[90] origin-top bg-bg"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: DUR.fast, ease: EASE }}
        />
      </AnimatePresence>
    </>
  );
}

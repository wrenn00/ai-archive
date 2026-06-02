"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, REVEAL_Y } from "@/lib/motion";
import { scheduleScrollRefresh } from "@/lib/scrollRefresh";

export interface RevealProps {
  children: React.ReactNode;
  /** 시작 y 오프셋(px) */
  y?: number;
  delay?: number;
  className?: string;
  /** 감싸는 태그 (기본 div) */
  as?: "div" | "section" | "li";
}

export default function Reveal({
  children,
  y = REVEAL_Y,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as "div";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration: DUR.slow,
        delay,
        ease: "power3.out",
        // once: 한 번 발동 후 되돌리지 않음 → 다시 opacity:0 으로 갇히지 않게.
        // start 위치는 SmoothScroll 의 ScrollTrigger.refresh() 로 재계산되어
        // 첫 페인트에 이미 보이는 요소는 즉시 발동된다.
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    });
    // 콘텐츠가 DOM 에 들어온 뒤 시작 위치 재계산을 예약(첫 로드/라우트 전환 공통).
    scheduleScrollRefresh();
    return () => ctx.revert();
  }, [y, delay]);

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}

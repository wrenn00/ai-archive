"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, REVEAL_Y } from "@/lib/motion";

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
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });
    return () => ctx.revert();
  }, [y, delay]);

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}

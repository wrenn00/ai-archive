"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Only on desktop (fine pointer + hover) and when motion is allowed.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduce);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor");

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest(
        'a, button, [data-cursor="hover"]',
      );
      setHovering(!!t);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const loop = () => {
      // 살짝 더 빠른 추종으로 점과의 거리감을 줄임.
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className={clsx(
        "pointer-events-none fixed inset-0 z-[100] hidden transition-opacity duration-300 md:block",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      {/* center dot — transform은 JS가 제어하므로 표시 변화는 opacity로만. */}
      <div
        ref={dotRef}
        className={clsx(
          "absolute left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent transition-opacity duration-200",
          hovering && "opacity-0",
        )}
      />
      {/* trailing ring */}
      <div
        ref={ringRef}
        className={clsx(
          "absolute left-0 top-0 rounded-full border transition-[width,height,margin,border-color,background-color,opacity] duration-200",
          hovering
            ? "-ml-6 -mt-6 h-12 w-12 border-accent bg-accent/10"
            : "-ml-4 -mt-4 h-8 w-8 border-text-dim",
          pressed && "opacity-50",
        )}
      />
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DUR, EASE, STAGGER } from "@/lib/motion";

const LINES = ["AI 아카이브"];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 sm:px-12 lg:px-20">
      <motion.span
        className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-text-dim"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DUR.base, ease: EASE }}
      >
        AI Design Tool Archive
      </motion.span>

      <h1
        className="font-display font-semibold leading-[0.95] tracking-tight text-text"
        style={{ fontSize: "clamp(48px, 10vw, 132px)" }}
      >
        {LINES.map((line, i) => (
          <span key={line} className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: DUR.slow,
                delay: 0.1 + i * STAGGER,
                ease: EASE,
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        className="mt-10 max-w-md font-body text-base leading-relaxed text-text-dim"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DUR.base, delay: 2 * STAGGER + 0.1, ease: EASE }}
      >
        AI 디자인 툴의 정보격차를 줄이는 오픈 아카이브.
        흩어진 도구를 한곳에 모아 누구에게나 공개합니다.
      </motion.p>

      {/* Scroll indicator — 모노톤, 은은하게 */}
      <motion.div
        className="absolute bottom-12 left-6 flex items-center gap-3 sm:left-12 lg:left-20"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DUR.base, delay: 3 * STAGGER + 0.2 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-dim">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-border">
          {!reduce && (
            <motion.span
              className="absolute inset-x-0 top-0 h-1/3 bg-text-dim"
              animate={{ y: ["-100%", "300%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </span>
      </motion.div>
    </section>
  );
}

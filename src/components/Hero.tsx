"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DUR, EASE, STAGGER } from "@/lib/motion";

const LINES = ["누구나", "같은 출발선에서"];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center px-6 sm:px-12">
      <h1
        className="font-display font-bold leading-[0.92] tracking-tight text-text"
        style={{ fontSize: "clamp(48px, 10vw, 140px)" }}
      >
        {LINES.map((line, i) => (
          <span key={line} className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: DUR.slow,
                delay: i * STAGGER,
                ease: EASE,
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        className="mt-8 max-w-xl font-body text-lg text-text-dim"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DUR.base, delay: 2 * STAGGER + 0.1, ease: EASE }}
      >
        AI 디자인 툴 정보격차를 줄이는 오픈 아카이브.
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-6 flex items-center gap-3 sm:left-12"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DUR.base, delay: 3 * STAGGER + 0.1 }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-text-dim">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-border">
          {!reduce && (
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-accent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </span>
      </motion.div>
    </section>
  );
}

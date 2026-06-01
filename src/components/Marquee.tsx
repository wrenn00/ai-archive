"use client";

import { motion, useReducedMotion } from "framer-motion";

const ITEMS = ["WEEKLY UPDATED", "OPEN ARCHIVE"];

export default function Marquee() {
  const reduce = useReducedMotion();

  // 끊김 없는 루프를 위해 동일 트랙을 두 번 이어 붙이고 -50% 이동.
  const track = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-border py-5">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {[...track, ...track].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-mono text-lg uppercase tracking-[0.25em] text-text-dim">
              {item}
            </span>
            <span className="text-accent">●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

const ITEMS = ["Weekly Updated", "Open Archive", "Information For All"];

export default function Marquee() {
  const reduce = useReducedMotion();

  const track = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-border py-6">
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {[...track, ...track].map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-mono text-sm uppercase tracking-[0.25em] text-text-dim">
              {item}
            </span>
            <span aria-hidden className="text-text-dim/40">
              /
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

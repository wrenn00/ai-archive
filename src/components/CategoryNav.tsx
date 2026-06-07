"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import type { Category } from "@/data/tools";

export interface CategoryNavItem {
  value: Category;
  label: string;
  thumbnail: string;
  count: number;
}

export default function CategoryNav({ items }: { items: CategoryNavItem[] }) {
  const [active, setActive] = useState<CategoryNavItem | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
      <ul
        className="flex flex-col border-t border-border"
        onMouseLeave={() => setActive(null)}
      >
        {items.map((item, i) => {
          const on = active?.value === item.value;
          return (
            <li key={item.value}>
              <Link
                href={`/archive?category=${item.value}`}
                data-cursor="hover"
                onMouseEnter={() => setActive(item)}
                className="group flex items-center justify-between border-b border-border py-7 transition-colors"
              >
                <div className="flex items-baseline gap-5 sm:gap-8">
                  <span className="font-mono text-xs text-text-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={clsx(
                      "font-display font-medium leading-none tracking-tight text-text transition-transform duration-300",
                      on && "translate-x-1",
                    )}
                    style={{ fontSize: "clamp(28px, 4.5vw, 56px)" }}
                  >
                    {item.label}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-text-dim">
                    {String(item.count).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className={clsx(
                      "text-text-dim transition-all duration-300",
                      on
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0",
                    )}
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hover preview */}
      <div className="relative hidden lg:block">
        <div className="sticky top-28 aspect-[4/3] overflow-hidden rounded-[3px] border border-border bg-surface">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.img
                key={active.value}
                src={active.thumbnail}
                alt={active.label}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
                className="h-full w-full object-cover"
              />
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-full w-full items-center justify-center"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-dim">
                  Hover a category
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

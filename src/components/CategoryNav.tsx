"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import type { Category } from "@/data/tools";
import { categoryList } from "@/lib/labels";

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
    <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
      <ul className="flex flex-col" onMouseLeave={() => setActive(null)}>
        {items.map((item) => (
          <li key={item.value}>
            <Link
              href={`/archive?category=${item.value}`}
              data-cursor="hover"
              onMouseEnter={() => setActive(item)}
              className="group flex items-baseline justify-between border-b border-border py-5 transition-colors"
            >
              <span
                className={clsx(
                  "font-display font-bold leading-none tracking-tight transition-colors",
                  active?.value === item.value ? "text-accent" : "text-text",
                )}
                style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
              >
                {item.label}
              </span>
              <span className="ml-4 font-mono text-sm text-text-dim">
                {String(item.count).padStart(2, "0")}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hover preview */}
      <div className="relative hidden lg:block">
        <div className="sticky top-28 aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.img
                key={active.value}
                src={active.thumbnail}
                alt={active.label}
                initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.4, ease: "easeOut" }}
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
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-text-dim">
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

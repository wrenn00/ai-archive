"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GalleryMedia from "@/components/GalleryMedia";
import Reveal from "@/components/Reveal";
import { DUR, EASE, STAGGER } from "@/lib/motion";

const isVideo = (s: string) => /\.(mp4|webm|mov)$/i.test(s);

/**
 * 결과물 갤러리 — 그리드 + 클릭 시 크게 보는 라이트박스.
 * 이미지/영상 모두 지원, 좌우 이동(◀▶/화살표키)·ESC 닫기.
 */
export default function Gallery({
  items,
  name,
}: {
  items: string[];
  name: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") move(1);
      else if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, move]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((src, i) => (
          <Reveal key={`${i}-${src}`} delay={(i % 3) * STAGGER}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              data-cursor="hover"
              aria-label={`${name} 결과물 ${i + 1} 크게 보기`}
              className="block aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <GalleryMedia src={src} alt={`${name} 예시 ${i + 1}`} />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-bg/92 p-4 backdrop-blur-md sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DUR.fast, ease: EASE }}
            onClick={close}
          >
            {/* 닫기 */}
            <button
              type="button"
              onClick={close}
              data-cursor="hover"
              aria-label="닫기"
              className="absolute right-5 top-5 text-3xl leading-none text-text-dim transition-colors hover:text-text"
            >
              ×
            </button>

            {/* 좌/우 */}
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    move(-1);
                  }}
                  data-cursor="hover"
                  aria-label="이전"
                  className="absolute left-3 top-1/2 -translate-y-1/2 px-3 text-2xl text-text-dim transition-colors hover:text-text sm:left-6"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    move(1);
                  }}
                  data-cursor="hover"
                  aria-label="다음"
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-3 text-2xl text-text-dim transition-colors hover:text-text sm:right-6"
                >
                  ›
                </button>
              </>
            )}

            {/* 큰 미디어 */}
            <motion.div
              key={open}
              className="flex max-h-[88vh] max-w-5xl items-center justify-center"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: DUR.fast, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              {isVideo(items[open]) ? (
                <video
                  src={items[open]}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="max-h-[88vh] w-auto rounded-[3px]"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={items[open]}
                  alt={`${name} 예시 ${open + 1}`}
                  className="max-h-[88vh] w-auto rounded-[3px] object-contain"
                />
              )}
            </motion.div>

            {/* 인덱스 */}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs text-text-dim [font-variant-numeric:tabular-nums]">
              {open + 1} / {items.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

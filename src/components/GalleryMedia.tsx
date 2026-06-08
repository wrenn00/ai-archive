"use client";

import { useReducedMotion } from "framer-motion";

/**
 * 갤러리 아이템 — 영상(.mp4/.webm)이면 <video>, 아니면 <img>.
 * 영상은 음소거 루프 자동재생(쇼릴)하되, prefers-reduced-motion 이면
 * 자동재생을 끄고 컨트롤만 제공한다.
 */
export default function GalleryMedia({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const reduce = useReducedMotion();
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);

  if (isVideo) {
    return (
      <video
        src={src}
        muted
        loop
        playsInline
        autoPlay={!reduce}
        controls={!!reduce}
        preload="metadata"
        aria-label={alt}
        className="h-full w-full object-cover"
      />
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    />
  );
}

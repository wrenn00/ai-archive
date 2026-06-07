import type { Metadata } from "next";
import Link from "next/link";
import { showcase } from "@/data/showcase";
import { getToolBySlug } from "@/lib/tools";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { STAGGER } from "@/lib/motion";

export const metadata: Metadata = {
  title: "쇼케이스 — ARCHIVE/AI",
  description: "에디터와 수강생이 AI 툴로 만든 작업물 갤러리.",
};

export default function ShowcasePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-12">
      <SectionHeading
        en="Showcase"
        ko="에디터와 수강생이 만든 작업물"
        className="mb-12"
      />

      {/* 메이슨리 (CSS columns) */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {showcase.map((item, i) => (
          <Reveal
            key={item.id}
            delay={(i % 3) * STAGGER}
            className="break-inside-avoid"
          >
            <figure className="group overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex flex-col gap-3 p-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-bold tracking-tight text-text">
                    {item.title}
                  </h3>
                  <span className="font-body text-sm text-text-dim">
                    {item.author}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.toolSlugs.map((slug) => {
                    const tool = getToolBySlug(slug);
                    if (!tool) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/tool/${slug}`}
                        data-cursor="hover"
                        className="rounded-full border border-border px-3 py-1 font-body text-xs text-text-dim transition-colors hover:border-accent hover:text-accent"
                      >
                        {tool.name}
                      </Link>
                    );
                  })}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </main>
  );
}

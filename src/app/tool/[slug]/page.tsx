import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { getToolBySlug, getRelatedTools } from "@/lib/tools";
import { categoryLabels, pricingLabels } from "@/lib/labels";
import CategoryTag from "@/components/CategoryTag";
import PriceBadge from "@/components/PriceBadge";
import ToolCard from "@/components/ToolCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import VersionTabs from "@/components/VersionTabs";
import GalleryMedia from "@/components/GalleryMedia";
import { STAGGER } from "@/lib/motion";

// 툴 데이터셋은 고정이므로 목록에 없는 slug(삭제된 galileo-ai 등)는
// 온디맨드로 렌더하지 않고 곧바로 404를 반환한다.
export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "찾을 수 없음 — ARCHIVE/AI" };
  return {
    title: `${tool.name} — ARCHIVE/AI`,
    description: tool.tagline,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = getRelatedTools(slug, 3);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-12">
      <Link
        href="/archive"
        data-cursor="hover"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-dim transition-colors hover:text-accent"
      >
        ← Archive
      </Link>

      {/* 1. 히어로 */}
      <Reveal className="mt-8 flex flex-col gap-6">
        <h1
          className="font-display font-bold leading-[0.95] tracking-tight text-text"
          style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
        >
          {tool.name}
        </h1>
        <p className="max-w-2xl font-body text-xl text-text-dim">
          {tool.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {tool.categories.map((c) => (
            <CategoryTag key={c} category={c} />
          ))}
          <PriceBadge pricing={tool.pricing} />
        </div>

        <div>
          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-body font-semibold text-[#0e0e0e] transition-opacity hover:opacity-90"
          >
            공식 사이트 방문
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </Reveal>

      {/* 2. 대표 이미지/영상 */}
      <Reveal className="mt-12">
        <div className="aspect-video overflow-hidden rounded-3xl border border-border bg-surface">
          <GalleryMedia src={tool.thumbnail} alt={tool.name} />
        </div>
      </Reveal>

      {/* 버전 (있을 때만) — 한 모델의 여러 버전을 탭으로 */}
      {tool.versions && tool.versions.length > 0 && (
        <Reveal className="mt-16">
          <VersionTabs versions={tool.versions} />
        </Reveal>
      )}

      {/* 3. 본문 2단 */}
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="flex flex-col gap-5">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Overview
          </span>
          <p className="font-body text-lg leading-relaxed text-text">
            {tool.description}
          </p>
        </Reveal>

        <Reveal>
          <aside className="flex flex-col gap-8 rounded-3xl border border-border bg-surface p-8">
            <MetaRow label="분야">
              <div className="flex flex-wrap gap-2">
                {tool.categories.map((c) => (
                  <span key={c} className="font-body text-sm text-text">
                    {categoryLabels[c]}
                  </span>
                ))}
              </div>
            </MetaRow>

            <MetaRow label="가격">
              <span className="font-body text-sm text-text">
                {pricingLabels[tool.pricing]}
                {tool.priceNote && (
                  <span className="text-text-dim"> · {tool.priceNote}</span>
                )}
              </span>
            </MetaRow>

            <MetaRow label="강점">
              <ul className="flex flex-col gap-2">
                {tool.strengths.map((s) => (
                  <li
                    key={s}
                    className="flex gap-2 font-body text-sm text-text"
                  >
                    <span className="text-accent">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </MetaRow>
          </aside>
        </Reveal>
      </div>

      {/* 4. 이렇게 쓰세요 */}
      <section className="mt-24">
        <Reveal>
          <SectionHeading
            en="Use Cases"
            ko="이렇게 쓰세요"
            className="mb-10"
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tool.useCases.map((u, i) => (
            <Reveal key={u} delay={i * STAGGER}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
                <span className="font-body text-sm text-accent [font-variant-numeric:tabular-nums]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-base text-text">{u}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. 실무 팁 */}
      {tool.tips && tool.tips.length > 0 && (
        <section className="mt-24">
          <Reveal>
            <SectionHeading
              en="Pro Tips"
              ko="실무 팁"
              className="mb-10"
            />
          </Reveal>
          <Reveal>
            <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface">
              {tool.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-4 p-6 font-body text-base text-text"
                >
                  <span className="font-mono text-sm text-accent">TIP</span>
                  {tip}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      )}

      {/* 6. 갤러리 */}
      {tool.gallery && tool.gallery.length > 0 && (
        <section className="mt-24">
          <Reveal>
            <SectionHeading
              en="Gallery"
              ko="결과물 미리보기"
              className="mb-10"
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tool.gallery.map((src, i) => (
              <Reveal key={src} delay={i * STAGGER}>
                <div className="aspect-[3/2] overflow-hidden rounded-2xl border border-border bg-surface">
                  <GalleryMedia src={src} alt={`${tool.name} 예시 ${i + 1}`} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 7. 비슷한 툴 */}
      {related.length > 0 && (
        <section className="mt-24">
          <Reveal>
            <SectionHeading
              en="Related"
              ko="비슷한 툴"
              className="mb-10"
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t, i) => (
              <ToolCard key={t.slug} tool={t} index={i} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
        {label}
      </span>
      {children}
    </div>
  );
}

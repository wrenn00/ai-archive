import Link from "next/link";
import type { Tool } from "@/data/tools";
import CategoryTag from "@/components/CategoryTag";
import PriceBadge from "@/components/PriceBadge";
import Reveal from "@/components/Reveal";
import { STAGGER } from "@/lib/motion";

export default function EditorsPicks({ tools }: { tools: Tool[] }) {
  return (
    <div className="flex flex-col gap-8">
      {tools.map((tool, i) => (
        <Reveal key={tool.slug} delay={i * STAGGER}>
          <Link
            href={`/tool/${tool.slug}`}
            data-cursor="hover"
            className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-accent/60 md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tool.thumbnail}
                alt={tool.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-bg">
                Editor&apos;s Pick
              </span>
            </div>

            <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
              <div className="flex flex-col gap-3">
                <h3
                  className="font-display font-bold leading-tight tracking-tight text-text"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
                >
                  {tool.name}
                </h3>
                <p className="font-body text-lg text-text-dim">{tool.tagline}</p>
                <p className="font-body text-sm leading-relaxed text-text-dim">
                  {tool.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {tool.categories.map((c) => (
                  <CategoryTag key={c} category={c} />
                ))}
                <PriceBadge pricing={tool.pricing} className="ml-auto" />
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

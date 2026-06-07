import Link from "next/link";
import type { Tool } from "@/data/tools";
import CategoryTag from "@/components/CategoryTag";
import PriceBadge from "@/components/PriceBadge";
import Reveal from "@/components/Reveal";
import { STAGGER } from "@/lib/motion";

export default function EditorsPicks({ tools }: { tools: Tool[] }) {
  return (
    <div className="flex flex-col">
      {tools.map((tool, i) => (
        <Reveal key={tool.slug} delay={i * STAGGER}>
          <Link
            href={`/tool/${tool.slug}`}
            data-cursor="hover"
            className="group grid grid-cols-1 items-center gap-8 border-t border-border py-12 md:grid-cols-2 md:gap-16 lg:py-16"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tool.thumbnail}
                alt={tool.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute left-4 top-4 bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#0d0d0c]">
                Featured
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-text-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-4">
                <h3
                  className="font-display font-medium leading-tight tracking-tight text-text"
                  style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
                >
                  {tool.name}
                </h3>
                <p className="font-body text-base text-text-dim">
                  {tool.tagline}
                </p>
                <p className="max-w-md font-body text-sm leading-relaxed text-text-dim">
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

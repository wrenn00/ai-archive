"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { Tool } from "@/data/tools";
import { categoryLabels, pricingLabels } from "@/lib/labels";
import CategoryTag from "@/components/CategoryTag";
import PriceBadge from "@/components/PriceBadge";

const SLOTS = 3;

export default function CompareClient({ tools }: { tools: Tool[] }) {
  const [picked, setPicked] = useState<(string | null)[]>([
    tools[0]?.slug ?? null,
    tools[1]?.slug ?? null,
    null,
  ]);

  const setSlot = (i: number, slug: string | null) =>
    setPicked((prev) => prev.map((p, idx) => (idx === i ? slug : p)));

  const bySlug = (slug: string | null) =>
    slug ? tools.find((t) => t.slug === slug) ?? null : null;

  const selected = picked.map(bySlug).filter((t): t is Tool => !!t);

  return (
    <div className="flex flex-col gap-10">
      {/* 선택 UI */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {Array.from({ length: SLOTS }).map((_, i) => {
          const current = picked[i];
          // 다른 슬롯에서 이미 고른 툴은 제외
          const taken = picked.filter((_, idx) => idx !== i);
          return (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-text-dim">
                슬롯 {i + 1}
              </span>
              <select
                value={current ?? ""}
                onChange={(e) => setSlot(i, e.target.value || null)}
                data-cursor="hover"
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 font-body text-sm text-text focus:border-accent focus:outline-none"
              >
                <option value="">선택 안 함</option>
                {tools.map((t) => (
                  <option
                    key={t.slug}
                    value={t.slug}
                    disabled={taken.includes(t.slug)}
                  >
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      {selected.length < 2 ? (
        <div className="rounded-3xl border border-dashed border-border py-24 text-center font-body text-text-dim">
          비교하려면 최소 2개의 툴을 선택하세요.
        </div>
      ) : (
        <>
          {/* 데스크탑: 표 */}
          <div className="hidden overflow-hidden rounded-3xl border border-border md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="w-40 p-5 align-bottom font-mono text-xs uppercase tracking-widest text-text-dim">
                    항목
                  </th>
                  {selected.map((t) => (
                    <th key={t.slug} className="p-5 align-bottom">
                      <Link
                        href={`/tool/${t.slug}`}
                        data-cursor="hover"
                        className="font-display text-2xl font-bold tracking-tight text-text transition-colors hover:text-accent"
                      >
                        {t.name}
                      </Link>
                      <p className="mt-1 font-body text-sm text-text-dim">
                        {t.tagline}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <Row label="분야">
                  {selected.map((t) => (
                    <Cell key={t.slug}>
                      <div className="flex flex-wrap gap-1.5">
                        {t.categories.map((c) => (
                          <CategoryTag key={c} category={c} />
                        ))}
                      </div>
                    </Cell>
                  ))}
                </Row>
                <Row label="가격">
                  {selected.map((t) => (
                    <Cell key={t.slug}>
                      <div className="flex flex-col gap-1.5">
                        <PriceBadge pricing={t.pricing} className="self-start" />
                        {t.priceNote && (
                          <span className="font-body text-sm text-text-dim">
                            {t.priceNote}
                          </span>
                        )}
                      </div>
                    </Cell>
                  ))}
                </Row>
                <Row label="강점">
                  {selected.map((t) => (
                    <Cell key={t.slug}>
                      <ul className="flex flex-col gap-1.5">
                        {t.strengths.map((s) => (
                          <li
                            key={s}
                            className="flex gap-2 font-body text-sm text-text"
                          >
                            <span className="text-accent">—</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </Cell>
                  ))}
                </Row>
                <Row label="추천 용도">
                  {selected.map((t) => (
                    <Cell key={t.slug}>
                      <ul className="flex flex-col gap-1.5">
                        {t.useCases.map((u) => (
                          <li
                            key={u}
                            className="font-body text-sm text-text-dim"
                          >
                            {u}
                          </li>
                        ))}
                      </ul>
                    </Cell>
                  ))}
                </Row>
              </tbody>
            </table>
          </div>

          {/* 모바일: 카드 세로 스택 */}
          <div className="flex flex-col gap-6 md:hidden">
            {selected.map((t) => (
              <div
                key={t.slug}
                className="flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6"
              >
                <Link
                  href={`/tool/${t.slug}`}
                  className="font-display text-2xl font-bold tracking-tight text-text"
                >
                  {t.name}
                </Link>
                <MobileField label="분야">
                  <div className="flex flex-wrap gap-1.5">
                    {t.categories.map((c) => (
                      <CategoryTag key={c} category={c} />
                    ))}
                  </div>
                </MobileField>
                <MobileField label="가격">
                  <div className="flex flex-col gap-1.5">
                    <PriceBadge pricing={t.pricing} className="self-start" />
                    {t.priceNote && (
                      <span className="font-body text-sm text-text-dim">
                        {t.priceNote}
                      </span>
                    )}
                  </div>
                </MobileField>
                <MobileField label="강점">
                  <ul className="flex flex-col gap-1.5">
                    {t.strengths.map((s) => (
                      <li
                        key={s}
                        className="flex gap-2 font-body text-sm text-text"
                      >
                        <span className="text-accent">—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </MobileField>
                <MobileField label="추천 용도">
                  <ul className="flex flex-col gap-1.5">
                    {t.useCases.map((u) => (
                      <li key={u} className="font-body text-sm text-text-dim">
                        {u}
                      </li>
                    ))}
                  </ul>
                </MobileField>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <tr className="border-b border-border last:border-0">
      <th className="bg-surface p-5 align-top font-mono text-xs uppercase tracking-widest text-text-dim">
        {label}
      </th>
      {children}
    </tr>
  );
}

function Cell({ children }: { children: React.ReactNode }) {
  return <td className="border-l border-border p-5 align-top">{children}</td>;
}

function MobileField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 border-t border-border pt-4">
      <span className="font-mono text-xs uppercase tracking-widest text-text-dim">
        {label}
      </span>
      {children}
    </div>
  );
}

import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { STAGGER } from "@/lib/motion";

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export default function ArchiveStats({
  total,
  categories,
}: {
  total: number;
  categories: number;
}) {
  const stats: StatItem[] = [
    { value: total, suffix: "+", label: "등록된 툴" },
    { value: categories, suffix: "", label: "카테고리" },
    { value: 7, suffix: "일", label: "업데이트 주기" },
  ];

  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * STAGGER} className="bg-surface">
          <div className="flex flex-col gap-2 p-8 lg:p-12">
            <span
              className="font-display font-bold leading-none tracking-tight text-text"
              style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
            >
              <CountUp to={s.value} suffix={s.suffix} />
            </span>
            <span className="font-body text-sm text-text-dim">{s.label}</span>
          </div>
        </Reveal>
      ))}
      <div className="bg-surface sm:hidden" />
    </div>
  );
}

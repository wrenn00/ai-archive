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
    <div className="grid grid-cols-1 border-t border-border sm:grid-cols-3">
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * STAGGER}
          className="border-b border-border sm:border-b-0 sm:border-l sm:border-border sm:first:border-l-0"
        >
          <div className="flex flex-col gap-3 py-10 sm:px-8 lg:px-10">
            <span
              className="font-display font-medium leading-none tracking-tight text-text"
              style={{ fontSize: "clamp(48px, 7vw, 92px)" }}
            >
              <CountUp to={s.value} suffix={s.suffix} />
            </span>
            <span className="font-body text-sm text-text-dim">{s.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

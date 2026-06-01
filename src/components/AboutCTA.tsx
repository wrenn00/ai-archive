import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutCTA() {
  return (
    <Reveal>
      <div className="flex flex-col gap-10 rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
        <div className="flex flex-col gap-5">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            About
          </span>
          <p
            className="max-w-3xl font-display font-bold leading-tight tracking-tight text-text"
            style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
          >
            좋은 도구를 아는 것도 실력이 되는 시대. 그 격차를 줄이기 위해 흩어진
            AI 디자인 툴 정보를 한곳에 모아 누구에게나 공개합니다.
          </p>
          <p className="max-w-2xl font-body text-base leading-relaxed text-text-dim">
            각 툴의 강점과 활용 사례, 실전 팁까지 정리해 비교할 수 있도록
            돕습니다. 정보는 모두의 것이어야 하니까요.
          </p>
        </div>

        <div>
          <Link
            href="/archive"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-body text-base font-semibold text-bg transition-opacity hover:opacity-90"
          >
            전체 아카이브 보기
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

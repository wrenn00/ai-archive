import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";

export default function AboutCTA() {
  return (
    <Reveal>
      <div className="flex flex-col gap-12 border-t border-border pt-14">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-text-dim">
          About
        </span>

        <p
          className="max-w-3xl font-display font-medium leading-[1.15] tracking-tight text-text"
          style={{ fontSize: "clamp(26px, 3.6vw, 48px)" }}
        >
          좋은 도구를 아는 것도 실력이 되는 시대.
          그 격차를 줄이기 위해 흩어진 AI 디자인 툴 정보를
          한곳에 모아 누구에게나 공개합니다.
        </p>

        <p className="max-w-xl font-body text-sm leading-relaxed text-text-dim">
          각 툴의 강점과 활용 사례, 실전 팁까지 정리해 비교할 수 있도록 돕습니다.
          정보는 모두의 것이어야 하니까요.
        </p>

        <TextLink href="/archive">전체 아카이브 보기</TextLink>
      </div>
    </Reveal>
  );
}

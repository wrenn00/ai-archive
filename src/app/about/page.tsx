import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "소개 — ARCHIVE/AI",
  description:
    "정보격차를 줄이기 위해 AI 디자인 툴 정보를 모두에게 공개하는 오픈 아카이브.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-12">
      {/* Hero */}
      <Reveal className="flex flex-col gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          About
        </span>
        <h1
          className="font-display font-bold leading-[0.95] tracking-tight text-text"
          style={{ fontSize: "clamp(44px, 9vw, 128px)" }}
        >
          정보는
          <br />
          모두의 것
        </h1>
        <p className="max-w-2xl font-body text-xl leading-relaxed text-text-dim">
          좋은 도구를 아는 것만으로도 출발선이 달라집니다.
          <br />
          우리는 그 격차를 줄이려고 이 아카이브를 만듭니다.
        </p>
      </Reveal>

      {/* 정보격차란? */}
      <Reveal className="mt-32 flex flex-col gap-8">
        <h2
          className="font-display font-bold leading-tight tracking-tight text-text"
          style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
        >
          정보격차란?
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <p className="font-body text-2xl leading-relaxed text-text">
            같은 시험을 보는데, 한 친구는 <span className="text-accent">
            어떤 문제가 나올지</span> 미리 알고 있어요. 다른 친구는 그걸
            몰라요. 둘의 실력이 비슷해도 결과는 갈립니다.
          </p>
          <p className="font-body text-lg leading-relaxed text-text-dim">
            문제를 미리 안 친구가 특별히 똑똑한 게 아니에요. 그냥{" "}
            <span className="text-text">정보를 먼저 받았을</span> 뿐이죠. AI
            도구의 세계도 똑같습니다. 어떤 툴이 있는지, 무엇을 잘하는지, 어떻게
            쓰는지 아는 사람과 모르는 사람의 결과물은 크게 벌어집니다. 이렇게
            ‘아는 것의 차이’가 만드는 불평등을 <span className="text-text">정보격차
            </span>라고 불러요.
          </p>
        </div>
      </Reveal>

      {/* 만든 이유 */}
      <Reveal className="mt-32 border-t border-border pt-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.5fr_1fr]">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-text-dim">
            Why
          </span>
          <div className="flex flex-col gap-6">
            <p
              className="font-display font-bold leading-tight tracking-tight text-text break-keep"
              style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
            >
              그래서 우리는
              <br />
              흩어진 정보를 한곳에 모읍니다.
            </p>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-text-dim">
              새로운 AI 디자인 툴은 매주 쏟아지지만, 정작 필요한 정보는 여러
              커뮤니티와 영상, 영어 문서에 흩어져 있습니다. 누군가는 쉽게
              따라잡고 누군가는 영영 뒤처지죠. 이 아카이브는 그 정보를 정리해
              한국어로, 누구에게나 무료로 공개합니다.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 운영 방식 / 수집 방법 */}
      <Reveal className="mt-32 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
        <div className="flex flex-col gap-4 bg-surface p-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            운영 방식
          </span>
          <p
            className="font-display font-bold tracking-tight text-text"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            매주 1회 업데이트
          </p>
          <p className="font-body text-base leading-relaxed text-text-dim">
            일주일에 한 번, 새로 등장했거나 크게 바뀐 툴을 점검해 추가하고
            기존 정보를 최신 상태로 다듬습니다. 늘 같은 리듬으로 쌓입니다.
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-surface p-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            수집 방법
          </span>
          <p
            className="font-display font-bold tracking-tight text-text"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            직접 써보고 정리
          </p>
          <p className="font-body text-base leading-relaxed text-text-dim">
            공식 문서와 실제 사용 경험, 수강생·창작자의 작업물을 바탕으로
            각 툴의 강점·가격·활용법·실무 팁을 정리합니다. 광고가 아니라
            ‘써보니 어땠는지’를 기록합니다.
          </p>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="mt-32 flex flex-col items-start gap-8 border-t border-border pt-16">
        <p
          className="max-w-3xl font-display font-bold leading-tight tracking-tight text-text"
          style={{ fontSize: "clamp(28px, 4.5vw, 64px)" }}
        >
          이제, 같은<br />
          출발선에서 시작하세요.
        </p>
        <Link
          href="/archive"
          data-cursor="hover"
          className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-body text-base font-semibold text-[#0e0e0e] transition-opacity hover:opacity-90"
        >
          전체 아카이브 보기
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Reveal>
    </main>
  );
}

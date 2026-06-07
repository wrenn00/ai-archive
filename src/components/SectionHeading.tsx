import clsx from "clsx";

export interface SectionHeadingProps {
  /** 큰 영문 제목 (디스플레이 폰트) */
  en: string;
  /** 작은 한국어 설명 (회색, 본문 폰트) */
  ko: string;
  /** 우측 보조 슬롯 (예: View More 링크, 카운트) */
  action?: React.ReactNode;
  className?: string;
}

/**
 * 일본 미니멀 스튜디오식 섹션 헤더: "큰 영문 + 작은 회색 한국어 설명" 한 쌍.
 * 아래에 얇은 헤어라인으로 격자감을 준다.
 */
export default function SectionHeading({
  en,
  ko,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="flex flex-col gap-3">
        <h2
          className="font-display font-semibold leading-[0.95] tracking-tight text-text"
          style={{ fontSize: "clamp(34px, 5vw, 72px)" }}
        >
          {en}
        </h2>
        <p className="font-body text-sm text-text-dim">{ko}</p>
      </div>

      {action && <div className="shrink-0 sm:pb-1">{action}</div>}
    </div>
  );
}

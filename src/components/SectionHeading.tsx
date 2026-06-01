import clsx from "clsx";

export interface SectionHeadingProps {
  /** 작은 라임 라벨 (mono 느낌) */
  label: string;
  /** 큰 제목 */
  title: string;
  /** 우측 보조 텍스트 */
  aside?: string;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  aside,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
        <h2
          className="font-display font-bold leading-tight tracking-tight text-text"
          style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
        >
          {title}
        </h2>
      </div>

      {aside && (
        <p className="max-w-xs font-body text-sm text-text-dim sm:text-right">
          {aside}
        </p>
      )}
    </div>
  );
}

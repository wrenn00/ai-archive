import Link from "next/link";
import clsx from "clsx";

export interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * 절제된 텍스트 링크: 얇은 밑줄 + 화살표, 호버 시 은은한 강조.
 * "View More" 류 링크를 사이트 전체에서 통일하는 데 사용.
 */
export default function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      data-cursor="hover"
      className={clsx(
        "group inline-flex items-center gap-2 border-b border-text/25 pb-1 font-body text-sm text-text transition-colors hover:border-text",
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className="text-text-dim transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-text"
      >
        →
      </span>
    </Link>
  );
}

import Link from "next/link";

const LINKS = [
  { label: "Archive", href: "/archive" },
  { label: "Compare", href: "/compare" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 sm:px-12 lg:px-20 lg:py-24">
        <p
          className="max-w-3xl font-display font-medium leading-[1.1] tracking-tight text-text"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          정보는 모두의 것이어야 한다.
        </p>

        <div className="flex flex-col justify-between gap-8 border-t border-border pt-10 sm:flex-row sm:items-end">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                data-cursor="hover"
                className="font-body text-sm text-text-dim transition-colors hover:text-text"
              >
                {c.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-1 font-body text-sm text-text-dim sm:items-end">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
              매주 업데이트
            </span>
            <span>© {new Date().getFullYear()} ARCHIVE/AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

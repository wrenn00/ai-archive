const CATEGORIES = [
  { label: "Archive", href: "#archive" },
  { label: "Compare", href: "#compare" },
  { label: "Showcase", href: "#showcase" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:px-12">
        <p
          className="max-w-3xl font-display font-bold leading-tight tracking-tight text-text"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          정보는 모두의 것이어야 한다.
        </p>

        <div className="flex flex-col justify-between gap-8 border-t border-border pt-8 sm:flex-row sm:items-end">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {CATEGORIES.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="font-body text-sm text-text-dim transition-colors hover:text-text"
              >
                {c.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-1 font-body text-sm text-text-dim sm:items-end">
            <span className="text-accent">매주 업데이트</span>
            <span>© {new Date().getFullYear()} ARCHIVE/AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

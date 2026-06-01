"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  { label: "Archive", href: "/archive" },
  { label: "Compare", href: "/compare" },
  { label: "Showcase", href: "/showcase" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 sm:px-12",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <Link
          href="/"
          data-cursor="hover"
          className={clsx(
            "font-display font-bold tracking-tight text-text transition-all duration-300",
            scrolled ? "text-xl" : "text-2xl",
          )}
        >
          ARCHIVE/AI
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              data-cursor="hover"
              className="font-body text-sm text-text-dim transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-text" />
          <span className="h-0.5 w-6 bg-text" />
          <span className="h-0.5 w-6 bg-text" />
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-50 flex flex-col bg-bg transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-2xl font-bold text-text">
            ARCHIVE/AI
          </span>
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={() => setOpen(false)}
            className="text-3xl leading-none text-text"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-6 px-6">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-bold text-text"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

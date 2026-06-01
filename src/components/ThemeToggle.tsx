"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Sync initial state with whatever the pre-paint script applied.
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-border px-4 py-2 text-sm text-text-dim transition-colors hover:text-text"
    >
      {isDark ? "라이트 모드로" : "다크 모드로"}
    </button>
  );
}

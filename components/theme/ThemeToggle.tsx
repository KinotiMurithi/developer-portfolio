"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-10 w-[118px] rounded-full border border-[var(--border)] bg-[var(--surface)]"
      />
    );
  }

  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="group flex h-10 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-medium text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {dark ? (
        <Sun
          size={15}
          className="shrink-0 transition-transform duration-300 group-hover:rotate-45"
        />
      ) : (
        <Moon
          size={15}
          className="shrink-0 transition-transform duration-300 group-hover:-rotate-12"
        />
      )}

      <span>
        {dark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}
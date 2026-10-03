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
        className="h-9 w-[68px] rounded-full border border-[var(--border)] bg-[var(--surface)]"
      />
    );
  }

  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-[68px] items-center rounded-full border border-[var(--border)] bg-[var(--surface-muted)] p-1 transition-colors duration-300"
    >
      <span
        className={`absolute flex h-7 w-7 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] shadow-sm transition-transform duration-300 ease-out ${
          dark ? "translate-x-[30px]" : "translate-x-0"
        }`}
      >
        {dark ? <Moon size={14} /> : <Sun size={14} />}
      </span>

      <span className="flex w-full items-center justify-between px-1.5">
        <Sun
          size={13}
          className={dark ? "text-[var(--muted)]" : "opacity-0"}
        />

        <Moon
          size={13}
          className={dark ? "opacity-0" : "text-[var(--muted)]"}
        />
      </span>
    </button>
  );
}
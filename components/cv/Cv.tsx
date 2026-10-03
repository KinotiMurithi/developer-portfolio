"use client";

import { ArrowDownToLine } from "lucide-react";

export default function Cv() {
  return (
    <a
      href="/Collins_kinoti_murithi_CV.pdf"
      download
      aria-label="Download CV"
      title="Download CV"
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
    >
      <ArrowDownToLine
        size={17}
        className="transition-transform duration-300 group-hover:translate-y-0.5"
      />
    </a>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import Cv from "@/components/cv/Cv";
import BrandLogo from "@/components/brand/BrandLogo";
import ThemeToggle from "@/components/theme/ThemeToggle";

const links = [
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">

        <Link
          href="/"
          aria-label="Ratzon Digital Products home"
          className="relative z-50"
        >
          <BrandLogo size="md" />
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Cv />

          <ThemeToggle />

          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            Start a project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 rounded-full border border-[var(--border)] bg-[var(--surface)] p-3 text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {open && (
          <div className="absolute inset-x-0 top-0 flex min-h-screen w-full flex-col items-center justify-center border-b border-[var(--border)] bg-[var(--background)]">

            <div className="absolute left-6 top-5">
              <BrandLogo size="md" />
            </div>

            <div className="flex flex-col items-center gap-7">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold tracking-tight text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/Collins_kinoti_murithi_CV.pdf"
                download
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center gap-3 text-lg text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <ArrowDownToLine size={20} />
                Download CV
              </Link>

              <ThemeToggle />

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="group mt-2 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
              >
                Start a project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
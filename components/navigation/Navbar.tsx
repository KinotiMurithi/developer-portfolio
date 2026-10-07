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
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">

        {/* BRAND */}
        <Link
          href="/"
          aria-label="Ratzon Digital Products home"
          className="relative z-[60]"
          onClick={() => setOpen(false)}
        >
          <BrandLogo size="md" />
        </Link>

        {/* DESKTOP NAVIGATION */}
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
            <span>Start a project</span>

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-[var(--background)]">

            {/* MOBILE HEADER */}
            <div className="flex h-20 items-center justify-between border-b border-[var(--border)] px-6">
              <Link
                href="/"
                aria-label="Ratzon Digital Products home"
                onClick={() => setOpen(false)}
              >
                <BrandLogo size="md" />
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="Close menu"
              >
                <X size={19} />
              </button>
            </div>

            {/* MOBILE CONTENT */}
            <div className="flex min-h-[calc(100vh-5rem)] flex-col px-6 pb-10">

              {/* NAVIGATION LINKS */}
              <div className="flex flex-1 flex-col justify-center">
                <div className="border-t border-[var(--border)]">

                  {links.map((link, index) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-[var(--border)] py-5"
                    >
                      <span className="text-2xl font-semibold tracking-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                        {link.name}
                      </span>

                      <span className="text-xs font-medium text-[var(--muted)]">
                        0{index + 1}
                      </span>
                    </Link>
                  ))}

                </div>
              </div>

              {/* MOBILE CONTROLS */}
              <div className="border-t border-[var(--border)] pt-6">

                <div className="flex items-center justify-between gap-4">

                  {/* CV */}
                  <Link
                    href="/Collins_kinoti_murithi_CV.pdf"
                    download
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    <ArrowDownToLine
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    />

                    Download CV
                  </Link>

                  {/* THEME */}
                  <ThemeToggle />

                </div>

                {/* MOBILE START PROJECT */}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  Start a project

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Link>

                <p className="mt-6 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  Digital products, software, data, and technology
                  solutions for businesses.
                </p>

              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
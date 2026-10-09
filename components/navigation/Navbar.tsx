"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

import Cv from "@/components/cv/Cv";
import BrandLogo from "@/components/brand/BrandLogo";
import ThemeToggle from "@/components/theme/ThemeToggle";

const WHATSAPP_URL =
  "https://wa.me/254769655170?text=Hello%21%20I%20am%20interested%20in%20your%20services";

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
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-5 md:px-10 lg:px-14 xl:px-16">
          {/* BRAND */}
          <Link
            href="/"
            aria-label="Ratzon Digital Products home"
            className="relative z-[60] shrink-0"
            onClick={() => setOpen(false)}
          >
            <BrandLogo size="md" />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 lg:gap-5 md:flex">
            <div className="flex items-center gap-4 xl:gap-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative whitespace-nowrap text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-3 xl:gap-4">
              <Cv />
              <ThemeToggle />

              {/* DESKTOP WHATSAPP */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Ratzon Digital Products on WhatsApp"
                className="group flex shrink-0 items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white xl:px-4"
              >
                <MessageCircle
                  size={17}
                  aria-hidden="true"
                  className="text-[#25D366] transition-colors group-hover:text-white"
                />
                WhatsApp
              </a>

              {/* START A PROJECT */}
              <Link
                href="/contact"
                className="group flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white xl:px-4"
              >
                <span className="whitespace-nowrap">Start a project</span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="relative z-[60] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>

          {/* MOBILE MENU */}
          {open && (
            <div
              id="mobile-navigation"
              className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-[var(--background)]"
            >
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
                    <Link
                      href="/Collins_kinoti_murithi_CV.pdf"
                      download
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                    >
                      <ArrowDownToLine
                        size={17}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-y-0.5"
                      />
                      Download CV
                    </Link>

                    <ThemeToggle />
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="mt-7 flex w-full items-center justify-center gap-3 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-4 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                  >
                    <MessageCircle
                      size={19}
                      aria-hidden="true"
                      className="text-[#25D366]"
                    />
                    Chat with us on WhatsApp
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>

                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="group mt-4 flex w-full items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                  >
                    Start a project
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
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

      {/* ALWAYS-VISIBLE MOBILE WHATSAPP BUTTON */}
      {!open && (
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Ratzon Digital Products on WhatsApp"
          className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-black/15 transition-transform duration-200 hover:scale-105 active:scale-95 md:hidden"
        >
          <MessageCircle size={22} aria-hidden="true" />
          <span>Chat with us</span>
        </a>
      )}
    </>
  );
}
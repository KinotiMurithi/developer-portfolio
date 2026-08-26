"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 lg:px-20">

        <a
          href="/"
          className="relative z-50 text-lg font-semibold tracking-tight"
        >
          KINOTI DIGITAL PRODUCTS<span className="text-purple-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 rounded-full border border-white/10 p-3 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center bg-[#050505]">
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-4xl font-medium tracking-tight"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
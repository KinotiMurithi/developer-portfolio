"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const capabilities = [
  "Website Development",
  "Web Applications",
  "Custom Software",
  "UI/UX Design",
  "Backend & APIs",
  "Dashboards",
  "Google Business",
  "Data & Analytics",
  "AI & Machine Learning",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[62%] top-[35%] z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[180px] top-[8%] z-0 h-[650px] w-[650px] rounded-full border border-[var(--accent)]/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[60px] top-[20%] z-0 h-[430px] w-[430px] rounded-full border border-[var(--foreground)]/[0.04]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_78%)]"
      />

      {/* CONTENT */}

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pb-20 pt-32 md:px-12 lg:px-20">

        {/* LABEL */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
            Digital products & technology
          </span>
        </motion.div>

        {/* HEADING */}

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl text-[clamp(3rem,6.5vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
        >
          DIGITAL PRODUCTS
          <br />

          <span className="text-[var(--muted)]">
            BUILT TO
          </span>{" "}

          <span className="text-[var(--accent)]">
            GROW.
          </span>
        </motion.h1>

        {/* DESCRIPTION */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-30 mt-10 max-w-2xl"
        >
          <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
            Ratzon Digital Products builds websites, web applications,
            custom software, business systems, and data-driven
            solutions that help businesses operate better and grow.
          </p>

          {/* ONLY HERO CTA */}
          <div className="mt-8 flex">
            <Link
              href="/services"
              className="group flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Explore services

              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* CAPABILITIES */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 mt-20 border-t border-[var(--border)] pt-6"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {capabilities.map((item, index) => (
              <span
                key={item}
                className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]"
              >
                {item}

                {index !== capabilities.length - 1 && (
                  <span className="text-[var(--accent)]/60">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
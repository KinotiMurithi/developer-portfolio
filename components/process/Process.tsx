"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals, and the problem the digital solution needs to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn the requirements into a clear user experience, visual direction, and technical architecture.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the product using modern technologies with performance, security, and maintainability in mind.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy the product and establish the technical foundations required for it to operate reliably.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "We use analytics, SEO, marketing, and continuous improvements to help the product create more value.",
  },
];

export default function Process() {
  return (
    <section className="bg-[var(--background)] px-6 py-28 text-[var(--foreground)] md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            How we work
          </p>

          <h1 className="max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            FROM <span className="text-[var(--muted)]">IDEA</span>{" "}
            TO IMPACT.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            A straightforward process designed to move from a business
            problem to a useful, scalable digital solution.
          </p>
        </motion.div>

        <div className="mt-20 border-t border-[var(--border)]">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
              }}
              className="group border-b border-[var(--border)] py-10 md:py-12"
            >
              <div className="grid gap-7 md:grid-cols-[80px_1fr_1.3fr_auto] md:items-center">

                <span className="text-sm font-semibold text-[var(--accent)]">
                  {step.number}
                </span>

                <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  {step.title}
                </h2>

                <p className="max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                  {step.description}
                </p>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--foreground)]/20 bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[var(--border)] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
            Have a project in mind? Let's start by understanding what
            you're trying to achieve.
          </p>

          <Link
            href="/work"
            className="group flex w-fit items-center gap-3 rounded-full border border-[var(--foreground)]/15 bg-[var(--surface)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            See our work
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
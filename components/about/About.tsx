"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const principles = [
  {
    title: "Build useful things",
    text: "Technology should solve a real problem rather than exist simply because it can be built.",
  },
  {
    title: "Think commercially",
    text: "A good digital product should support the business behind it, whether that means acquiring customers, improving operations, or making better decisions.",
  },
  {
    title: "Keep learning",
    text: "Technology changes quickly. We continuously experiment, learn, and improve how we build.",
  },
];

export default function About() {
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
            About Ratzon
          </p>

          <h1 className="max-w-5xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            TECHNOLOGY WITH{" "}
            <span className="text-[var(--muted)]">
              PURPOSE.
            </span>
          </h1>
        </motion.div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.2fr]">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              The company
            </p>

            <p className="mt-6 text-lg leading-8 text-[var(--foreground)]/75">
              Ratzon Digital Products is a technology business focused
              on building digital products and helping businesses
              make better use of technology.
            </p>

            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              Our work spans web development, digital systems,
              search visibility, digital marketing, data, and
              artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border-t border-[var(--border)]"
          >
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="border-b border-[var(--border)] py-7"
              >
                <div className="flex gap-6">
                  <span className="text-xs font-semibold text-[var(--accent)]">
                    0{index + 1}
                  </span>

                  <div>
                    <h2 className="text-xl font-semibold">
                      {principle.title}
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[var(--border)] pt-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_2fr_auto] md:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Founder
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Collins Kinoti
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Founder and developer building Ratzon Digital Products
              around software, digital products, data, and business
              growth.
            </p>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-3 rounded-full border border-[var(--foreground)]/15 bg-[var(--surface)] px-6 py-3.5 text-sm font-medium shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
            >
              Work with us

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
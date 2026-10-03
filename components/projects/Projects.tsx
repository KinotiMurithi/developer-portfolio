"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    category: "Product / Full-Stack",
    title: "The Oracle",
    description:
      "A forecasting platform built around predictions, outcomes, forecaster profiles, ratings, and structured prediction data.",
    technologies: ["Next.js", "Django", "PostgreSQL", "REST API"],
  },
  {
    number: "02",
    category: "Software / Monitoring",
    title: "Device Monitor",
    description:
      "A real-time device monitoring system with telemetry, dashboards, APIs, and live communication between devices and the platform.",
    technologies: ["Next.js", "Django", "DRF", "WebSockets"],
  },
  {
    number: "03",
    category: "Web / Business",
    title: "Ratzon Digital Products",
    description:
      "The digital platform for Ratzon's technology and growth services, built around a scalable business and client acquisition model.",
    technologies: ["Next.js", "TypeScript", "SEO", "Motion"],
  },
];

export default function Projects() {
  return (
    <section className="bg-[var(--background)] px-6 py-28 text-[var(--foreground)] md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Selected work
          </p>

          <h1 className="max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            SELECTED{" "}
            <span className="text-[var(--muted)]">
              WORK.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Digital products and software systems built around real
            problems, experimentation, and practical technology.
          </p>
        </motion.div>

        <div className="border-t border-[var(--border)]">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="group border-b border-[var(--border)] py-10 md:py-14"
            >
              <div className="grid gap-8 md:grid-cols-[80px_1fr_1.2fr_auto] md:items-start">

                <span className="text-sm font-semibold text-[var(--accent)]">
                  {project.number}
                </span>

                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                    {project.category}
                  </p>

                  <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                    {project.title}
                  </h2>
                </div>

                <div>
                  <p className="max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

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
            We build technology to solve problems, improve operations,
            and create better digital experiences.
          </p>

          <Link
            href="/about"
            className="group flex w-fit items-center gap-3 rounded-full border border-[var(--foreground)]/15 bg-[var(--surface)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            About Ratzon

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
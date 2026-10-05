"use client";

import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

type ProjectStatus =
  | "development"
  | "completed"
  | "completed-pending-deployment";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  liveUrl?: string;
};

const statusConfig: Record<
  ProjectStatus,
  {
    label: string;
    className: string;
  }
> = {
  development: {
    label: "STILL IN DEVELOPMENT",
    className:
      "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },

  completed: {
    label: "COMPLETED",
    className:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },

  "completed-pending-deployment": {
    label: "COMPLETED — AWAITING DEPLOYMENT",
    className:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
};

const projects: Project[] = [
  {
    number: "01",
    category: "Product / Full-Stack",
    title: "The Oracle",
    description:
      "A full-stack forecasting platform MVP built around structured events, outcomes, user accounts, prediction data, forecaster profiles, ratings, and a scalable backend architecture.",
    technologies: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "REST API",
    ],
    status: "development",
    liveUrl:
      "https://the-oracle-gamma.vercel.app/",
  },

  {
    number: "02",
    category: "Software / Monitoring",
    title: "Device Monitor",
    description:
      "A real-time device monitoring system with telemetry, dashboards, APIs, device agents, and live communication between connected devices and the platform.",
    technologies: [
      "Next.js",
      "Django",
      "Django REST Framework",
      "WebSockets",
    ],
    status: "completed-pending-deployment",
  },

  {
    number: "03",
    category: "Web / Business",
    title: "Ratzon Digital Products",
    description:
      "The digital platform for Ratzon's technology business, bringing together software development, digital products, analytics, and technology services.",
    technologies: [
      "Next.js",
      "TypeScript",
      "SEO",
      "Motion",
    ],
    status: "completed",
    liveUrl:
      "https://developer-portfolio-mauve-xi.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="bg-[var(--background)] px-6 py-28 text-[var(--foreground)] transition-colors duration-300 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* PAGE HEADER */}
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

        {/* PROJECT LIST */}
        <div className="border-t border-[var(--border)]">

          {projects.map((project, index) => {
            const status = statusConfig[project.status];

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="border-b border-[var(--border)] py-10 md:py-14"
              >

                {/* STATUS BANNER */}
                <div
                  className={`mb-8 flex w-full items-center justify-between rounded-2xl border px-5 py-4 md:px-6 md:py-5 ${status.className}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full bg-current ${
                        project.status === "development"
                          ? "animate-pulse"
                          : ""
                      }`}
                    />

                    <span className="text-xs font-bold uppercase tracking-[0.2em] md:text-sm">
                      {status.label}
                    </span>
                  </div>

                  <span className="hidden text-xs font-medium uppercase tracking-[0.15em] opacity-70 sm:block">
                    Project status
                  </span>
                </div>

                {/* PROJECT CONTENT */}
                <div className="grid gap-8 md:grid-cols-[80px_1fr_1.2fr] md:items-start">

                  {/* NUMBER */}
                  <span className="text-sm font-semibold text-[var(--accent)]">
                    {project.number}
                  </span>

                  {/* PROJECT TITLE */}
                  <div>
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                      {project.category}
                    </p>

                    <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                      {project.title}
                    </h2>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div>
                    <p className="max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}
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

                    {/* LIVE PROJECT */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                      >
                        View live project

                        <ExternalLink
                          size={15}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col gap-5 border-t border-[var(--border)] pt-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
            We build technology to solve problems, improve operations,
            and create better digital experiences.
          </p>

          <Link
            href="/contact"
            className="group flex w-fit items-center gap-3 rounded-full border border-[var(--foreground)]/15 bg-[var(--surface)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            Start a project

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
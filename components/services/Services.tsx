"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Professional, responsive websites designed around your brand, customers, business goals, and online presence. Built with performance, usability, and search visibility in mind.",
    tags: ["Business Websites", "Responsive", "SEO"],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Interactive web applications built to solve specific business problems, automate processes, and deliver useful digital experiences across desktop and mobile.",
    tags: ["Next.js", "React", "Web Apps"],
  },
  {
    number: "03",
    title: "Custom Software",
    description:
      "Tailored software systems built around the unique workflows, processes, data, and operational requirements of your business.",
    tags: ["Custom Systems", "Automation", "Business Software"],
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Clear, modern, user-focused interfaces designed to make websites and digital products intuitive, accessible, and easier to use.",
    tags: ["UI Design", "UX Design", "Prototyping"],
  },
  {
    number: "05",
    title: "Backend & API Development",
    description:
      "Reliable backend systems and APIs that power applications, connect services, manage data, and provide the foundation for scalable digital products.",
    tags: ["Django", "REST APIs", "Databases"],
  },
  {
    number: "06",
    title: "Dashboards & Admin Systems",
    description:
      "Internal dashboards and administration systems that help businesses manage operations, users, data, reporting, and workflows from a centralized interface.",
    tags: ["Dashboards", "Admin Panels", "Business Intelligence"],
  },
  {
    number: "07",
    title: "Website Redesign & Maintenance",
    description:
      "Modernize an existing website with improved design, performance, usability, content, technical fixes, SEO foundations, and ongoing maintenance.",
    tags: ["Redesign", "Performance", "Maintenance"],
  },
  {
    number: "08",
    title: "Google Business Profile Optimization",
    description:
      "Set up and optimize your Google Business Profile to strengthen your local online presence and make it easier for customers to discover your business.",
    tags: ["Local SEO", "Google Business", "Optimization"],
  },
  {
    number: "09",
    title: "Data & Analytics",
    description:
      "Turn business data into useful dashboards, reports, insights, and analytical systems that help teams understand performance and make better decisions.",
    tags: ["Analytics", "Dashboards", "Data"],
  },
  {
    number: "10",
    title: "AI & Machine Learning",
    description:
      "Practical intelligent applications, predictive systems, and machine learning solutions designed around real business use cases and measurable outcomes.",
    tags: ["Python", "Machine Learning", "AI"],
  },
];

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[var(--background)] px-6 py-28 text-[var(--foreground)] transition-colors duration-300 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Web development & digital solutions
          </p>

          <h1
            id="services-heading"
            className="max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
          >
            WEB DEVELOPMENT{" "}
            <span className="text-[var(--muted)]">& SOFTWARE.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Ratzon Digital Products provides web development, custom
            software, UI/UX design, business systems, data solutions,
            and AI services for businesses in Kenya and beyond. We build
            practical technology around real business needs.
          </p>
        </motion.div>

        {/* SERVICES */}

        <div className="border-t border-[var(--border)]">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
              }}
              className="group border-b border-[var(--border)] py-9 transition-colors duration-300 hover:bg-[var(--surface-muted)]/50 md:py-12"
            >
              <div className="grid gap-7 md:grid-cols-[80px_1fr_1fr_auto] md:items-start">
                {/* NUMBER */}

                <span
                  aria-hidden="true"
                  className="text-sm font-medium text-[var(--accent)]"
                >
                  {service.number}
                </span>

                {/* TITLE */}

                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    {service.title}
                  </h2>
                </div>

                {/* DESCRIPTION */}

                <div>
                  <p className="max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--accent)]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTION */}

                <div className="flex items-center">
                  <Link
                    href="/contact"
                    aria-label={`Discuss ${service.title} with Ratzon Digital Products`}
                    className="group/action flex h-11 w-11 items-center justify-center rounded-full border border-[var(--foreground)]/20 bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-md"
                  >
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/action:rotate-45"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col gap-5 border-t border-[var(--border)] pt-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-sm leading-6 text-[var(--muted)]">
              Not sure which service your business needs? Tell us about
              the problem you're trying to solve and we'll help identify
              the right digital solution.
            </p>

            <Link
              href="/portfolio"
              className="mt-3 inline-flex text-sm font-medium text-[var(--accent)] transition-opacity hover:opacity-70"
            >
              Explore our portfolio
              <ArrowUpRight size={15} className="ml-1" aria-hidden="true" />
            </Link>
          </div>

          <Link
            href="/contact"
            className="group flex w-fit items-center gap-3 rounded-full border border-[var(--foreground)]/20 bg-[var(--surface)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            Discuss your project

            <ArrowUpRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
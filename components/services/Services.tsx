"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Custom business websites, landing pages, and professional portfolio websites designed to establish your online presence. We build responsive, mobile-friendly websites with modern interfaces, fast loading times, and SEO-friendly foundations.",
    tags: ["Business Websites", "Responsive Design", "Technical SEO"],
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Custom web applications that help businesses deliver digital services, manage information, automate tasks, and improve customer experiences. Built with modern technologies such as React, Next.js, and TypeScript.",
    tags: ["Next.js", "React", "Web Applications"],
  },
  {
    number: "03",
    title: "Custom Business Software",
    description:
      "Software systems developed around your organization's specific operations and workflows. From management platforms to business process automation, we build solutions that reduce manual work and improve operational efficiency.",
    tags: ["Business Systems", "Automation", "Custom Software"],
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "User interface and user experience design for websites, web applications, and digital products. We create intuitive layouts, interactive prototypes, and consistent design systems that make digital products easier to understand and use.",
    tags: ["UI Design", "UX Design", "Prototyping"],
  },
  {
    number: "05",
    title: "Backend & API Development",
    description:
      "Backend development and REST API integration for websites and web applications. We develop server-side functionality, database systems, authentication, and integrations that allow different digital services to communicate reliably.",
    tags: ["Django", "REST APIs", "Database Design"],
  },
  {
    number: "06",
    title: "Dashboards & Admin Systems",
    description:
      "Custom business dashboards and administration platforms for managing users, operations, records, reports, and organizational data. We build centralized systems that make information easier to access and business processes easier to manage.",
    tags: ["Admin Panels", "Reporting", "Management Systems"],
  },
  {
    number: "07",
    title: "Website Redesign & Maintenance",
    description:
      "Website redesign, performance improvements, technical troubleshooting, and ongoing maintenance. We help businesses modernize outdated websites, improve mobile usability, resolve technical issues, and maintain a reliable online presence.",
    tags: ["Website Redesign", "Performance", "Maintenance"],
  },
  {
    number: "08",
    title: "Google Business Profile Optimization",
    description:
      "Google Business Profile setup and optimization for businesses looking to strengthen their local online presence. We help configure business information, service categories, contact details, and profile content to improve discoverability on Google Search and Maps.",
    tags: ["Google Business Profile", "Local SEO", "Google Maps"],
  },
  {
    number: "09",
    title: "Google Search Console & Technical SEO",
    description:
      "Google Search Console setup, sitemap submission, indexing monitoring, and technical SEO checks. We help businesses understand how Google discovers their websites, identify crawling and indexing issues, and monitor organic search performance.",
    tags: ["Google Search Console", "Indexing", "Technical SEO"],
  },
  {
    number: "10",
    title: "Data Analytics & Reporting",
    description:
      "Data analysis, reporting systems, and interactive dashboards that transform business information into useful insights. We help organizations organize data, monitor performance, identify trends, and make more informed operational decisions.",
    tags: ["Data Analytics", "Visualization", "Reporting"],
  },
  {
    number: "11",
    title: "AI & Machine Learning Solutions",
    description:
      "AI-powered applications, intelligent automation, and machine learning solutions designed around practical business problems. We explore suitable AI technologies to build tools that support workflows, process information, and improve how businesses operate.",
    tags: ["Artificial Intelligence", "Machine Learning", "Python"],
  },
  {
    number: "12",
    title: "Cybersecurity & Data Protection",
    description:
      "Practical security services that help businesses protect their systems, networks, devices, and sensitive information. Depending on project requirements, services may include security assessments, access control, multi-factor authentication, firewall configuration, and endpoint protection.",
    tags: ["Security Assessments", "Access Control", "Data Protection"],
  },
  {
    number: "13",
    title: "Data Backup & Disaster Recovery",
    description:
      "Backup planning and recovery solutions designed to help businesses protect critical information and restore operations after data loss, system failure, accidental deletion, or cyber incidents. We help assess backup requirements and implement appropriate local or cloud-based strategies.",
    tags: ["Cloud Backups", "Data Recovery", "Business Continuity"],
  },
  {
    number: "14",
    title: "Cloud Management & Migration",
    description:
      "Cloud setup, migration, and administration to help organizations manage digital resources and support modern working environments. Services can include Microsoft 365 and Google Workspace configuration, user management, permissions, and cloud infrastructure planning.",
    tags: ["Cloud Migration", "Microsoft 365", "Google Workspace"],
  },
  {
    number: "15",
    title: "IT Help Desk & Technical Support",
    description:
      "Technical assistance for everyday business technology challenges. Support can include hardware and software troubleshooting, device configuration, software installation, account access issues, password resets, and general IT guidance.",
    tags: ["Technical Support", "Troubleshooting", "Device Setup"],
  },
  {
    number: "16",
    title: "Network Setup & Monitoring",
    description:
      "Network installation and configuration services for business environments. This can include local area networks, Wi-Fi setup, router and connectivity configuration, network troubleshooting, and monitoring arrangements to support reliable communication.",
    tags: ["LAN Setup", "Wi-Fi Configuration", "Network Support"],
  },
  {
    number: "17",
    title: "Business Software & SaaS Management",
    description:
      "Assistance with selecting, sourcing, configuring, and deploying subscription-based business applications. We help organizations assess software requirements and manage solutions such as CRM, ERP, collaboration, and productivity platforms, including licensing and user access.",
    tags: ["CRM & ERP", "SaaS Deployment", "Software Licensing"],
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
            IT Services, Software & Digital Solutions in Kenya
          </p>

          <h1
            id="services-heading"
            className="max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
          >
            TECHNOLOGY{" "}
            <span className="text-[var(--muted)]">& IT SOLUTIONS.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Ratzon Digital Products provides software development, web
            solutions, cybersecurity, cloud services, IT support, network
            solutions, data analytics, and AI-powered technologies. We help
            businesses in Kenya and beyond adopt, manage, and get more value
            from technology through practical solutions tailored to their
            operational needs.
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

        {/* SERVICE DELIVERY NOTE */}
        <p className="mt-8 max-w-3xl text-xs leading-6 text-[var(--muted)]">
          Some specialist IT services are delivered in collaboration with
          qualified technical partners, depending on the scope and requirements
          of each engagement.
        </p>

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
              Looking for software development, IT support, infrastructure
              services, or another technology solution for your business? Tell
              us what you need to achieve and we will help identify an
              appropriate solution.
            </p>

            <Link
              href="/portfolio"
              className="mt-3 inline-flex text-sm font-medium text-[var(--accent)] transition-opacity hover:opacity-70"
            >
              Explore our portfolio
              <ArrowUpRight
                size={15}
                className="ml-1"
                aria-hidden="true"
              />
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


"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";

const services = [
  "Website Development",
  "Web Applications",
  "Custom Software",
  "UI/UX Design",
  "Backend & API Development",
  "Dashboards / Admin Systems",
  "Website Redesign & Maintenance",
  "Google Business Profile Setup / Optimization",
  "Data & Analytics",
  "AI & Machine Learning",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  function handleChange(
    field: keyof typeof form,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.service,
          description: form.description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send your enquiry."
        );
      }

      setStatus("success");
      setMessage(
        "Your project enquiry has been sent successfully. We'll get back to you soon."
      );

      setForm({
        name: "",
        email: "",
        service: "",
        description: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("error");
      setMessage(
        "Something went wrong while sending your enquiry. Please try again."
      );
    }
  }

  return (
    <section className="min-h-[calc(100vh-6rem)] bg-[var(--background)] px-6 py-20 text-[var(--foreground)] transition-colors duration-300 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Start a project
          </p>

          <h1 className="max-w-5xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
            LET'S BUILD{" "}
            <span className="text-[var(--muted)]">
              SOMETHING.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Tell us what you're trying to build, improve, or solve.
            Give us as much detail as you can and we'll take it from
            there.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.4fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="border-t border-[var(--border)]">
              <div className="border-b border-[var(--border)] py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Email
                </p>

                <a
                  href="mailto:collinskmurithi@gmail.com"
                  className="mt-2 block text-lg font-medium transition-colors hover:text-[var(--accent)]"
                >
                  collinskmurithi@gmail.com
                </a>
              </div>

              <div className="border-b border-[var(--border)] py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Based in
                </p>

                <p className="mt-2 text-lg font-medium">
                  Kenya
                </p>
              </div>

              <div className="border-b border-[var(--border)] py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Business
                </p>

                <p className="mt-2 text-lg font-medium">
                  Ratzon Digital Products
                </p>
              </div>
            </div>

            <Link
              href="/services"
              className="group mt-8 flex w-fit items-center gap-3 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              View all services

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
              >
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(event) =>
                  handleChange("name", event.target.value)
                }
                placeholder="John Doe"
                className="w-full border-b border-[var(--border)] bg-transparent px-0 py-4 text-base text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)]"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(event) =>
                  handleChange("email", event.target.value)
                }
                placeholder="john@example.com"
                className="w-full border-b border-[var(--border)] bg-transparent px-0 py-4 text-base text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)]"
              />
            </div>

            {/* SERVICE */}
            <div>
              <label
                htmlFor="service"
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
              >
                What do you need?
              </label>

              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={(event) =>
                  handleChange("service", event.target.value)
                }
                className="w-full border-b border-[var(--border)] bg-[var(--background)] px-0 py-4 text-base text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
              >
                <option value="" disabled>
                  Select a service
                </option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label
                htmlFor="description"
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
              >
                Tell us about the project
              </label>

              <textarea
                id="description"
                name="description"
                required
                rows={6}
                value={form.description}
                onChange={(event) =>
                  handleChange(
                    "description",
                    event.target.value
                  )
                }
                placeholder="Tell us what you want to build, redesign, automate, or improve..."
                className="w-full resize-none border-b border-[var(--border)] bg-transparent px-0 py-4 text-base leading-7 text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)]"
              />
            </div>

            {/* STATUS */}
            {message && (
              <div
                className={`flex items-start gap-3 rounded-2xl border p-4 text-sm leading-6 ${
                  status === "success"
                    ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400"
                    : "border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400"
                }`}
              >
                {status === "success" && (
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                  />
                )}

                <span>{message}</span>
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  Sending enquiry
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                </>
              ) : (
                <>
                  Send project enquiry

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </>
              )}
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}
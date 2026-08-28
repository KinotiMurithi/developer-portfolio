"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const form = event.currentTarget;

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    description: formData.get("description"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      form.reset();
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error(error);

    alert("Unable to send your project enquiry.");
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.06] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-purple-400">
            Start a project
          </p>

          <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
            HAVE AN
            <br />
            <span className="text-white/30">IDEA?</span>
            <br />
            LET'S BUILD IT.
          </h2>
        </motion.div>

        {/* Form */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-24 max-w-4xl"
        >
          <div className="grid gap-10 md:grid-cols-2">

            {/* Name */}

            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/30">
                Your name
              </label>

              <input
                required
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-lg outline-none transition-colors placeholder:text-white/20 focus:border-purple-400"
              />
            </div>

            {/* Email */}

            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/30">
                Email
              </label>

              <input
                required
                name="email"
                type="email"
                placeholder="john@example.com"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-lg outline-none transition-colors placeholder:text-white/20 focus:border-purple-400"
              />
            </div>

          </div>

          {/* Project type */}

          <div className="mt-12">
            <label className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/30">
              What are you looking for?
            </label>

            <div className="flex flex-wrap gap-3">

              {[
                "Website",
                "Web Application",
                "Backend / API",
                "Data / ML",
                "Something else",
              ].map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    name="projectType"
                    value={option}
                    className="peer sr-only"
                  />

                  <span className="block rounded-full border border-white/10 px-5 py-3 text-sm text-white/40 transition-all duration-300 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-black hover:border-white/30">
                    {option}
                  </span>
                </label>
              ))}

            </div>
          </div>

          {/* Description */}

          <div className="mt-12">
            <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/30">
              Tell me about your project
            </label>

            <textarea
              required
              name="description"
              rows={6}
              placeholder="Tell me what you want to build, what problem it should solve, features you need, or anything else that would help me understand your idea..."
              className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-lg leading-relaxed outline-none transition-colors placeholder:text-white/20 focus:border-purple-400"
            />
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="group mt-12 flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-105"
          >
            {submitted ? "Message Ready" : "Send Project Brief"}

            {submitted ? (
              <Check size={18} />
            ) : (
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            )}
          </button>

          {submitted && (
            <p className="mt-5 text-sm text-purple-400">
              The form is working. We'll connect it to a real submission
              service next.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
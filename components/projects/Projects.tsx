"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Business Website",
    category: "WEB DEVELOPMENT",
    description:
      "A modern responsive website designed to establish a strong digital presence and convert visitors into customers.",
    technologies: ["Next.js", "TypeScript", "React"],
  },
  {
    number: "02",
    title: "Customer Analytics",
    category: "DATA & MACHINE LEARNING",
    description:
      "A customer churn analysis project exploring patterns in customer behaviour and using machine learning to predict churn.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    number: "03",
    title: "Full-Stack Application",
    category: "WEB APPLICATION",
    description:
      "A database-driven application combining a modern frontend with a Python backend and API architecture.",
    technologies: ["Next.js", "Django", "Python"],
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-purple-400">
            Selected work
          </p>

          <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
            THINGS
            <br />
            <span className="text-white/30">I'VE BUILT.</span>
          </h2>
        </motion.div>

        {/* Projects */}

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
              }}
              className="group"
            >
              {/* Project visual */}

              <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">

                {/* Decorative grid */}

                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                  }}
                />

                {/* Animated glow */}

                <motion.div
                  className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Fake browser window */}

                <div className="absolute left-[8%] top-[12%] h-[76%] w-[84%] overflow-hidden rounded-xl border border-white/10 bg-[#090909] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">

                  {/* Browser bar */}

                  <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />

                    <div className="ml-4 h-5 flex-1 rounded bg-white/[0.03]" />
                  </div>

                  {/* Interface */}

                  <div className="grid h-full grid-cols-[25%_75%]">
                    <div className="border-r border-white/10 p-5">
                      <div className="mb-8 h-3 w-16 rounded bg-purple-400/50" />

                      <div className="space-y-4">
                        <div className="h-2 w-full rounded bg-white/10" />
                        <div className="h-2 w-4/5 rounded bg-white/10" />
                        <div className="h-2 w-5/6 rounded bg-white/10" />
                        <div className="h-2 w-3/5 rounded bg-white/10" />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-8 h-5 w-40 rounded bg-white/10" />

                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-24 rounded-lg bg-white/[0.04]" />
                        <div className="h-24 rounded-lg bg-white/[0.04]" />
                        <div className="h-24 rounded-lg bg-white/[0.04]" />
                      </div>

                      <div className="mt-6 h-32 rounded-lg bg-white/[0.04]" />
                    </div>
                  </div>
                </div>

                {/* Project number */}

                <span className="absolute bottom-6 left-6 font-mono text-xs text-white/30">
                  {project.number}
                </span>

                {/* View button */}

                <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md transition-all duration-500 group-hover:border-purple-400 group-hover:bg-purple-400 group-hover:text-black">
                  <ArrowUpRight
                    size={22}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>
              </div>

              {/* Project information */}

              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-purple-400">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                    {project.title}
                  </h3>
                </div>

                <div className="max-w-lg">
                  <p className="leading-relaxed text-white/40">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
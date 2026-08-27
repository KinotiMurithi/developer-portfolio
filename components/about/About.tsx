"use client";

import { motion } from "motion/react";
import {
  ArrowDownToLine,
  Braces,
  BrainCircuit,
  Database,
  Layers3,
  Server,
} from "lucide-react";

const skills = [
  {
    name: "JavaScript",
    icon: Braces,
  },
  {
    name: "TypeScript",
    icon: Braces,
  },
  {
    name: "React",
    icon: Layers3,
  },
  {
    name: "Next.js",
    icon: Layers3,
  },
  {
    name: "Python",
    icon: Server,
  },
  {
    name: "Django",
    icon: Database,
  },
  {
    name: "Machine Learning",
    icon: BrainCircuit,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-purple-400">
            About me
          </p>

          <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            DEVELOPER.
            <br />
            <span className="text-white/30">PROBLEM SOLVER.</span>
            <br />
            BUILDER.
          </h2>
        </motion.div>

        {/* About content */}

        <div className="mt-24 grid gap-16 md:grid-cols-2">

          {/* Story */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl leading-relaxed text-white/70 md:text-2xl">
              I build digital products with modern web technologies and
              Python. My focus is on creating software that is not only
              visually compelling, but useful, responsive, and engineered
              properly.
            </p>

            <p className="mt-8 max-w-xl leading-relaxed text-white/40">
              I work across frontend development, full-stack applications,
              backend systems, data, and machine learning. I'm continuously
              expanding my capabilities and turning what I learn into things
              I can actually build.
            </p>

            {/* CV button */}

            <a
              href="/Collins-Kinoti-Murithi-CV.pdf"
              download
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:scale-105"
            >
              Download CV

              <ArrowDownToLine
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </motion.div>

          {/* Skills */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/25">
              Technologies
            </p>

            <div className="grid grid-cols-2 border-l border-t border-white/10">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="group flex items-center gap-4 border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.03]"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-white/30 transition-colors duration-300 group-hover:text-purple-400"
                    />

                    <span className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <span className="text-xs uppercase tracking-[0.25em] text-white/20">
              Currently learning
            </span>

            <span className="text-sm text-white/50">
              Machine Learning · Data Analysis · Advanced Full-Stack Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import FloatingDonut from "./FloatingDonut";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden text-white">
        <FloatingDonut /> 
      {/* Ambient lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[140px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-12 lg:px-20">
        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-50" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-400" />
          </span>

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Available for projects
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.07em]"
          >
            I BUILD
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.07em] text-white/35"
          >
            DIGITAL
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.07em]"
          >
            EXPERIENCES
            <span className="text-purple-400">.</span>
          </motion.h1>
        </div>

        {/* Bottom content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-lg text-base leading-relaxed text-white/45 md:text-lg">
            I create professional websites and web applications that combine
            thoughtful design, modern technology, and reliable engineering.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-105"
            >
              Start a Project
              <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#work"
              className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              View My Work
            </a>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/25"
        >
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Python</span>
          <span>Django</span>
          <span>Machine Learning</span>
        </motion.div>
      </div>
    </section>
  );
}
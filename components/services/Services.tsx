"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Database,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Professional, responsive websites built to give businesses and individuals a strong digital presence.",
    icon: Code2,
    technologies: "React · Next.js · TypeScript",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom web applications designed around your workflow, users, data, and business requirements.",
    icon: Database,
    technologies: "Next.js · React · Django · Python",
  },
  {
    number: "03",
    title: "Data & Machine Learning",
    description:
      "Data-driven solutions, analysis, and machine-learning models that turn data into useful insights.",
    icon: BrainCircuit,
    technologies: "Python · Machine Learning · Data",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-purple-400">
            What I do
          </p>

          <h2 className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            TURNING
            <br />
            <span className="text-white/30">IDEAS INTO</span>
            <br />
            DIGITAL PRODUCTS.
          </h2>
        </motion.div>

        {/* Service cards */}

        <div className="border-t border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative border-b border-white/10"
              >
                <div className="relative flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-14">
                  {/* Number */}

                  <div className="flex items-start gap-8 md:w-[30%]">
                    <span className="font-mono text-sm text-white/25">
                      {service.number}
                    </span>

                    <Icon
                      size={28}
                      strokeWidth={1.3}
                      className="text-white/40 transition-all duration-500 group-hover:rotate-12 group-hover:text-purple-400"
                    />
                  </div>

                  {/* Main content */}

                  <div className="md:w-[45%]">
                    <h3 className="text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg leading-relaxed text-white/40">
                      {service.description}
                    </p>

                    <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/20">
                      {service.technologies}
                    </p>
                  </div>

                  {/* Arrow */}

                  <div className="flex justify-end md:w-[15%]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-purple-400/50 group-hover:bg-purple-400 group-hover:text-black">
                      <ArrowUpRight
                        size={22}
                        className="transition-transform duration-500 group-hover:rotate-45"
                      />
                    </div>
                  </div>
                </div>

                {/* Hover background */}

                <div className="pointer-events-none absolute inset-0 -z-0 origin-left scale-x-0 bg-white/[0.02] transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
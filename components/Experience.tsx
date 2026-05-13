"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    year: "2006 — PRESENT",
    company: "ASHOK LEYLAND",
    role: "Assistant General Manager — PPC",
    description:
      "Led production planning, conveyor operations, material synchronization, inventory optimization, SAP implementation, and lean manufacturing initiatives across automotive manufacturing systems.",
  },
  {
    year: "2001 — 2006",
    company: "SUNDARAM FASTENERS",
    role: "Deputy Manager — PPC",
    description:
      "Developed machining plans, improved production efficiency, introduced backward scheduling systems, and contributed to SAP PPC implementation initiatives.",
  },
  {
    year: "1993 — 2001",
    company: "LMW-GKDITR",
    role: "Superintendent — Tool Room",
    description:
      "Managed tool room operations, process execution, production coordination, and manufacturing control systems.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="Industrial Journey"
          title="EXPERIENCE"
          subtitle="Three decades of production systems, manufacturing operations, process optimization, and industrial planning leadership."
        />

        <div className="mt-24 space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[220px_1fr]"
            >
              {/* YEAR */}
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
                  {exp.year}
                </p>
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="industrial-title text-4xl leading-none text-white md:text-6xl">
                  {exp.company}
                </h3>

                <p className="mt-4 text-lg uppercase tracking-[0.18em] text-white/60">
                  {exp.role}
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
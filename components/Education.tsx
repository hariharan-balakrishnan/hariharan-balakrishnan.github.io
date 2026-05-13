"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="Foundation"
          title="EDUCATION"
          subtitle="Mechanical engineering roots that shaped decades of industrial systems thinking and operational leadership."
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mt-20 border-l border-orange-500/30 pl-8"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
            1989 — 1993
          </p>

          <h3 className="mt-4 industrial-title text-4xl text-white">
            MECHANICAL
            <br />
            ENGINEERING
          </h3>

          <p className="mt-6 text-xl text-white/75">
            Tamil Nadu Engineering College
          </p>

          <p className="mt-2 text-white/45">
            Bharathiar University
          </p>
        </motion.div>
      </div>
    </section>
  );
}
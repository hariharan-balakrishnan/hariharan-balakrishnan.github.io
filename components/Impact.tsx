"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const impactItems = [
  {
    value: "ZERO",
    title: "LINE DISRUPTIONS",
    description:
      "Maintained uninterrupted conveyor and production flow across manufacturing operations.",
  },
  {
    value: "8 HOURS",
    title: "TURNAROUND",
    description:
      "Optimized non-cabin turnaround efficiency through synchronized production planning.",
  },
  {
    value: "SAP",
    title: "POWER USER",
    description:
      "Led ERP implementation initiatives and production planning system integration.",
  },
  {
    value: "DEMING",
    title: "CONTRIBUTOR",
    description:
      "Contributed toward award-winning operational and quality excellence systems.",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="Operational Excellence"
          title="IMPACT"
          subtitle="Measured through efficiency, precision, synchronization, and manufacturing reliability."
        />

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/[0.02]
                p-8
                transition
                duration-500
                hover:border-orange-500/30
              "
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-orange-500 transition-all duration-700 group-hover:w-full" />

              <p className="industrial-title text-5xl leading-none text-white md:text-7xl">
                {item.value}
              </p>

              <p className="mt-5 text-sm uppercase tracking-[0.35em] text-orange-400">
                {item.title}
              </p>

              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
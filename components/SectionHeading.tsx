"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative"
    >
      {label && (
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-orange-400">
          {label}
        </p>
      )}

      <h2 className="industrial-title text-5xl leading-none text-white md:text-7xl">
        {title}
      </h2>

      <div className="mt-6 h-px w-24 bg-orange-500" />

      {subtitle && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
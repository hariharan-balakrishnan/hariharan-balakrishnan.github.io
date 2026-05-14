"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute right-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="Connect"
          title="CONTACT"
          subtitle="Open to conversations around manufacturing systems, operational excellence, automotive engineering, and industrial leadership."
        />

        <div className="mt-24 grid gap-8 md:grid-cols-3">


          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/hariharan-balakrishnan-10528432a/"
            target="_blank"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
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
            <div className="absolute left-0 top-0 h-px w-0 bg-orange-500 transition-all duration-700 group-hover:w-full" />

            <FaLinkedinIn className="h-7 w-7 text-orange-400" />

            <p className="mt-8 text-xs uppercase tracking-[0.35em] text-white/40">
              LinkedIn
            </p>

            <p className="mt-4 text-lg text-white/80">
              Professional Profile
            </p>
          </motion.a>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              border
              border-white/10
              bg-white/[0.02]
              p-8
            "
          >
            <div className="absolute left-0 top-0 h-px w-full bg-orange-500/40" />

            <FiMapPin className="h-7 w-7 text-orange-400" />

            <p className="mt-8 text-xs uppercase tracking-[0.35em] text-white/40">
              Location
            </p>

            <p className="mt-4 text-lg text-white/80">
              Bengaluru, Karnataka, India
            </p>
          </motion.div>
        </div>

        {/* Footer Line */}
        <div className="mt-24 border-t border-white/10 pt-8">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-white/35">
            Manufacturing Systems • Operational Excellence • Automotive Engineering
          </p>
        </div>
      </div>
    </section>
  );
}
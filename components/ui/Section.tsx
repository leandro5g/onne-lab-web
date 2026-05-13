"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface SectionProps {
  id: string;
  chip?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, chip, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 relative ${className}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {(chip || title || subtitle) && (
          <div className="mb-12 max-w-3xl">
            {chip && (
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="inline-flex items-center gap-2 border border-purple-500/35 bg-purple-500/10 text-purple-200 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4"
              >
                {chip}
              </motion.span>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.05 }}
                viewport={{ once: true, margin: "-80px" }}
                className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { technologies } from "@/data/site";

export default function Technologies() {
  return (
    <Section
      id="tecnologias"
      chip="Tecnologias"
      title="Stack e práticas aplicadas em produtos reais"
    >
      <motion.div
        className="flex flex-wrap gap-2.5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
        }}
        aria-label="Lista de tecnologias"
      >
        {technologies.map((tech) => (
          <motion.span
            key={tech}
            variants={{
              hidden: { opacity: 0, scale: 0.88, y: 10 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{
              y: -3,
              borderColor: "rgba(143,75,255,0.55)",
              backgroundColor: "rgba(143,75,255,0.18)",
              transition: { duration: 0.2 },
            }}
            className="px-4 py-2 rounded-full border border-white/14 bg-white/3 text-slate-200 text-sm font-semibold cursor-default transition-shadow duration-200 hover:shadow-[0_4px_14px_rgba(143,75,255,0.18)]"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <Section
      id="projetos"
      chip="Projetos"
      title="Tipos de projetos que a ONNE LAB pode construir"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, borderColor: "rgba(143,75,255,0.5)" }}
            className="glass glow-border rounded-2xl p-5 group transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <h3 className="text-sm font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

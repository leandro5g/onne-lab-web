"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { experiences } from "@/data/site";

export default function Experience() {
  return (
    <Section
      id="experiencia"
      chip="Experiência"
      title="Mais de 8 anos atuando em produtos digitais reais"
      subtitle="A ONNE LAB carrega a experiência prática do seu fundador em projetos de grande impacto, aplicando essa bagagem para criar soluções mais maduras, escaláveis e eficientes."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, borderColor: "rgba(143,75,255,0.45)" }}
            className="glass glow-border rounded-2xl p-5 md:p-6 relative pl-7 transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(0,0,0,0.32)]"
          >
            {/* Dot */}
            <span className="absolute left-4 top-[1.45rem] w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 shadow-[0_0_0_5px_rgba(143,75,255,0.12)]" />
            <h3 className="text-sm font-bold text-white">{exp.company}</h3>
            <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{exp.desc}</p>
          </motion.article>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-6 px-4 py-3.5 rounded-xl border-l-[3px] border-purple-500/60 bg-purple-500/10 text-purple-200 text-sm leading-relaxed"
      >
        Essas experiências representam a trajetória profissional do fundador da ONNE LAB e servem como base técnica
        para os projetos desenvolvidos pela empresa.
      </motion.p>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { services } from "@/data/site";

const icons: Record<string, string> = {
  "Desenvolvimento Mobile": "📱",
  "Sistemas Web": "🌐",
  "APIs e Backend": "⚙️",
  "MVPs e Produtos Digitais": "🚀",
  "Automação e Integrações": "🔗",
  "Consultoria Técnica": "🧩",
};

export default function Services() {
  return (
    <Section
      id="servicos"
      chip="Serviços"
      title="Soluções de desenvolvimento para diferentes estágios do produto"
    >
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, borderColor: "rgba(143,75,255,0.5)" }}
            className="glass glow-border rounded-2xl p-6 group transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <span className="text-2xl mb-3 block">{icons[s.title]}</span>
            <h3 className="text-base font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

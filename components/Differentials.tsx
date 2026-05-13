"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { differentials } from "@/data/site";

const icons = ["🏆", "🔬", "🎯", "📐", "📈"];

export default function Differentials() {
  return (
    <Section id="diferenciais" chip="Diferenciais" title="Por que escolher a ONNE LAB?">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {differentials.map((d, i) => (
          <motion.article
            key={d.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, borderColor: "rgba(143,75,255,0.5)" }}
            className="glass glow-border rounded-2xl p-6 group transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <span className="text-xl mb-3 block">{icons[i]}</span>
            <h3 className="text-sm font-semibold text-white">{d.title}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{d.desc}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

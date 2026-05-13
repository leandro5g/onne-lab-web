"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { processSteps } from "@/data/site";

export default function Process() {
  return (
    <Section id="como-trabalhamos" chip="Processo" title="Do problema ao produto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[1.1rem] top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500/65 to-blue-500/25 rounded-full hidden md:block" />

        <div className="space-y-4">
          {processSteps.map((s, i) => (
            <motion.article
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="md:ml-10 relative"
            >
              {/* Step dot */}
              <span className="hidden md:flex absolute -left-[2.35rem] top-3.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 shadow-[0_0_0_5px_rgba(143,75,255,0.12)]" />

              <div className="glass glow-border rounded-xl px-5 py-4 flex gap-4 items-start group hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                <span className="shrink-0 text-xs font-black text-purple-400 bg-purple-500/15 border border-purple-500/25 rounded-lg w-10 h-10 flex items-center justify-center">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

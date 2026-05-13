"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import { heroStats, siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
      aria-label="Seção principal"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 border border-purple-500/35 bg-purple-500/10 text-purple-200 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              ONNE LAB • Empresa de Tecnologia
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ delay: 0.07 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Transformamos ideias em{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                produtos digitais escaláveis
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.14 }}
              className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              A ONNE LAB desenvolve aplicativos, sistemas web, APIs e soluções digitais sob medida, unindo
              engenharia de software, visão de produto e mais de 8 anos de experiência prática no mercado.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.21 }}
              className="mt-3 text-sm md:text-base text-slate-500 leading-relaxed max-w-xl"
            >
              Do MVP à evolução de produtos digitais, ajudamos empresas a construir tecnologia com qualidade,
              estratégia e base para crescer.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.28 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href={siteConfig.whatsapp} external>
                Solicitar projeto →
              </Button>
              <Button href="#sobre" variant="ghost">
                Conhecer a ONNE LAB
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            aria-label="Destaques da ONNE LAB"
          >
            {heroStats.map((stat, i) => (
              <motion.article
                key={stat.title}
                variants={fadeUp}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4, borderColor: "rgba(143,75,255,0.45)" }}
                className={`glass glow-border rounded-2xl p-4 md:p-5 ${
                  i === heroStats.length - 1 && heroStats.length % 2 !== 0 ? "col-span-2" : ""
                }`}
              >
                <h3 className="text-sm font-semibold text-white">{stat.title}</h3>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{stat.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#07070d] to-transparent pointer-events-none" />
    </section>
  );
}

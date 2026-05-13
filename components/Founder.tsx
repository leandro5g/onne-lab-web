"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { founderBadges, siteConfig } from "@/data/site";
import { fadeUp } from "@/lib/motion";

export default function Founder() {
  return (
    <Section id="fundador" chip="Conheça nosso Fundador">
      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14 items-center">
        {/* Photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 blur-2xl" />
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="/profile.png"
                alt="Paulo Leandro, fundador da ONNE LAB"
                width={320}
                height={400}
                className="rounded-2xl object-cover w-[260px] md:w-[300px] lg:w-[320px] aspect-[4/5] border border-white/13 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-purple-600 to-indigo-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-[0_8px_24px_rgba(133,88,255,0.4)]">
                +8 anos de exp.
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="inline-flex items-center gap-2 border border-purple-500/35 bg-purple-500/10 text-purple-200 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Paulo Leandro
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Jovem, especialista e apaixonado por criar soluções digitais{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              de verdade
            </span>
          </h2>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Paulo Leandro é o fundador da ONNE LAB e carrega mais de 8 anos de experiência prática no desenvolvimento
            de produtos digitais. Com domínio completo do ciclo de criação — da concepção à entrega em produção —
            atua com profundidade técnica em mobile, web, APIs e arquitetura de software.
          </p>

          <p className="mt-3 text-slate-400 leading-relaxed">
            Especialista em React Native, React, Node.js e ecossistemas modernos, acumula projetos em empresas como
            Creditas, Lojas Renner, ExitLag, Droga Raia e Drogasil. Sua energia jovem e visão prática de produto
            se traduzem em soluções que funcionam, escalam e fazem sentido para o negócio.
          </p>

          <p className="mt-3 text-slate-400 leading-relaxed">
            Mais do que escrever código, ele pensa no problema, entende o usuário e entrega com clareza — o que
            reflete diretamente na cultura e nos projetos da ONNE LAB.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {founderBadges.map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1.5 rounded-full border border-blue-400/35 bg-blue-400/9 text-blue-200 text-xs font-semibold"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            <Button href={siteConfig.portfolio} external>
              Ver portfólio →
            </Button>
            <Button href={siteConfig.whatsapp} variant="ghost" external>
              Falar com Paulo
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

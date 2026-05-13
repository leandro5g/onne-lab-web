"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function CTA() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="glass glow-border rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 border border-purple-500/35 bg-purple-500/10 text-purple-200 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Vamos conversar
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-2xl">
              Vamos transformar sua ideia em um{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                produto digital?
              </span>
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed max-w-xl">
              Se você precisa criar um aplicativo, sistema web, MVP, API ou solução digital sob medida,
              a ONNE LAB pode ajudar a estruturar, desenvolver e evoluir seu projeto com qualidade técnica
              e visão de produto.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={siteConfig.whatsapp} external>
                Chamar no WhatsApp
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="ghost">
                Enviar e-mail
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

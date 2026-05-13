"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Section from "@/components/ui/Section";

const pillars = [
  { title: "Engenharia de software", desc: "Boas práticas, padrões consistentes e qualidade para manter o produto sustentável." },
  { title: "Produto digital", desc: "Entrega conectada ao objetivo de negócio e ao impacto esperado para o usuário." },
  { title: "Arquitetura escalável", desc: "Estrutura pensada para crescimento contínuo e evolução sem retrabalho desnecessário." },
  { title: "Experiência do usuário", desc: "Fluxos claros, consistência de interface e usabilidade aplicada desde o planejamento." },
];

export default function About() {
  return (
    <Section
      id="sobre"
      chip="Sobre a ONNE LAB"
      title="Uma empresa de software criada por quem vive produto na prática"
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -4, borderColor: "rgba(143,75,255,0.45)" }}
          className="glass glow-border rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-white leading-snug">Fundação com autoridade técnica</h3>
          <p className="mt-3 text-slate-400 leading-relaxed">
            A ONNE LAB nasceu da experiência de mais de 8 anos atuando no desenvolvimento de produtos digitais,
            aplicativos mobile, plataformas web e soluções backend para empresas de diferentes segmentos — mercado
            financeiro, varejo, saúde, tecnologia e serviços digitais.
          </p>
          <p className="mt-3 text-slate-400 leading-relaxed">
            É uma empresa nova e independente, criada com base na trajetória de Paulo Leandro Sousa,
            Desenvolvedor Full Stack Mobile Sênior, aplicando repertório real em produtos digitais complexos e em produção.
          </p>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Nosso diferencial está em combinar visão técnica sênior, entendimento de negócio e foco em experiência do
            usuário para construir soluções que não apenas funcionam, mas evoluem junto com o produto.
          </p>
        </motion.article>

        <motion.div
          className="grid grid-cols-2 gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4, borderColor: "rgba(143,75,255,0.45)" }}
              className="glass glow-border rounded-xl p-4"
            >
              <h3 className="text-sm font-semibold text-white leading-snug">{p.title}</h3>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

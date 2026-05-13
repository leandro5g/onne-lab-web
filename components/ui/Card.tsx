"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface CardProps {
  title: string;
  desc: string;
  delay?: number;
  accent?: boolean;
}

export default function Card({ title, desc, delay = 0, accent = false }: CardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ delay }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -5, borderColor: "rgba(143,75,255,0.5)" }}
      className={`glass glow-border rounded-2xl p-5 md:p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] ${
        accent ? "border-purple-500/25" : ""
      }`}
    >
      <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{desc}</p>
    </motion.article>
  );
}

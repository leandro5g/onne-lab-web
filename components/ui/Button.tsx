"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function Button({ href, variant = "primary", children, external = false, className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white shadow-[0_12px_30px_rgba(133,88,255,0.34)] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(133,88,255,0.45)]",
    ghost:
      "border border-white/25 bg-white/5 text-white hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-purple-500/12",
  };

  const props = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <motion.div whileTap={{ scale: 0.97 }} className={`${className}`}>
      <Link href={href} className={`${base} ${variants[variant]}`} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}

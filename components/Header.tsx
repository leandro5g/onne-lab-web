"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-[rgba(8,8,14,0.85)] backdrop-blur-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between gap-4"
        aria-label="Navegação principal"
      >
        {/* Brand */}
        <Link href="#inicio" aria-label="ONNE LAB, ir para início" onClick={close} className="text-white font-bold text-xl tracking-widest">
          ONNE LAB
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-purple-500/14 transition-all duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button href={siteConfig.whatsapp} external>
            Solicitar projeto
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white hover:bg-purple-500/20 transition-all duration-300"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-lg leading-none"
          >
            {open ? "✕" : "☰"}
          </motion.span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden mx-4 mb-4 rounded-2xl border border-white/14 bg-[rgba(9,9,17,0.96)] backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <ul className="p-3 space-y-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-purple-500/16 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-3 pt-0">
              <Link
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold text-sm shadow-[0_8px_20px_rgba(133,88,255,0.3)]"
              >
                Solicitar projeto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

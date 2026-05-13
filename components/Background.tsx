"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_6%,rgba(143,75,255,0.22),transparent_34%),radial-gradient(circle_at_86%_11%,rgba(93,168,255,0.18),transparent_32%),linear-gradient(180deg,#07070d_0%,#0b0d16_48%,#080910_100%)]" />

      {/* Animated blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-600/25 blur-[90px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-500/18 blur-[90px]"
        animate={{ x: [0, -25, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-700/10 blur-[80px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-[19%] -left-12 w-32 h-32 rounded-2xl border border-white/8 bg-gradient-to-br from-purple-500/10 to-blue-500/5 backdrop-blur-sm"
        animate={{ y: [0, -14, 9, 0], rotate: [22, 24, 20, 22] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[11%] -right-16 w-44 h-44 rounded-2xl border border-white/8 bg-gradient-to-br from-purple-500/8 to-blue-500/5 backdrop-blur-sm"
        animate={{ y: [0, 12, -10, 0], rotate: [-14, -12, -16, -14] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
      />
    </div>
  );
}

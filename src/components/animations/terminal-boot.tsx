"use client";

import { BOOT_LINES } from "@/lib/constants";
import { motion } from "framer-motion";

export function TerminalBoot({ onComplete }: { onComplete?: () => void }) {
  return (
    <div className="font-mono text-[14px] font-medium leading-[1.60] tracking-[0.3px] text-text-muted mb-8">
      {BOOT_LINES.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: line.delay / 1000, duration: 0.3 }}
        >
          {line.text}
        </motion.div>
      ))}
      <motion.span
        className="inline-block w-2 h-[1.2em] bg-brand-red ml-1 align-middle"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0] }}
        transition={{
          delay: BOOT_LINES[BOOT_LINES.length - 1].delay / 1000 + 0.3,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onAnimationComplete={() => onComplete?.()}
      />
    </div>
  );
}

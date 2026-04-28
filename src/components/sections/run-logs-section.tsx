"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RUN_LOGS } from "@/lib/constants";

export function RunLogsSection() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const goTo = useCallback((index: number) => {
    setActive((prev) => {
      const next = Math.max(0, Math.min(RUN_LOGS.length - 1, index));
      return next === prev ? prev : next;
    });
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const current = activeRef.current;
      const last = RUN_LOGS.length - 1;
      if (e.deltaY > 0 && current >= last) return;
      if (e.deltaY < 0 && current <= 0) return;

      e.preventDefault();
      if (wheelTimer.current) return;
      wheelTimer.current = setTimeout(() => {
        wheelTimer.current = null;
      }, 600);
      if (e.deltaY > 0) goTo(current + 1);
      else goTo(current - 1);
    },
    [goTo]
  );

  useEffect(() => {
    const el = sectionRef.current;
    el?.addEventListener("wheel", handleWheel, { passive: false });
    return () => el?.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const log = RUN_LOGS[active];

  return (
    <section
      ref={sectionRef}
      id="run-logs"
      className="scroll-mt-14 py-section-sm md:py-section bg-background"
    >
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
        <p className="text-[12px] font-medium tracking-[0.2px] text-text-muted mb-16">
          Run Logs
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
          {/* Left: Vertical Nav */}
          <nav className="flex flex-col gap-3 lg:border-r lg:border-white/[0.04] lg:pr-8">
            {RUN_LOGS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 text-left text-[14px] font-medium tracking-[0.3px] transition-all duration-300 py-2 ${
                  i === active
                    ? "text-text-primary"
                    : "text-text-disabled hover:text-text-muted"
                }`}
              >
                <span
                  className={`w-4 h-[1px] transition-all duration-300 ${
                    i === active ? "bg-brand-red" : "bg-transparent"
                  }`}
                />
                <span className="text-text-muted font-mono text-[13px]">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Right: Content + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Terminal output */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`runlog-content-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-mono text-[14px] leading-[1.80] tracking-[0.3px]">
                  <div className="mb-6">
                    <span className="text-brand-green">$ </span>
                    <span className="text-text-primary">{log.command}</span>
                  </div>

                  <div className="mb-4 pl-6 border-l border-white/[0.08]">
                    <span className="text-text-muted">Input:</span>
                    <span className="text-text-secondary ml-2">{log.input}</span>
                  </div>

                  <div className="mb-4 pl-6 border-l border-white/[0.08]">
                    <span className="text-text-muted">Process:</span>
                    <span className="text-text-secondary ml-2">{log.process}</span>
                  </div>

                  <div className="mb-6 pl-6 border-l border-white/[0.08]">
                    <span className="text-text-muted">Output:</span>
                    <span className="text-text-secondary ml-2">{log.output}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-brand-green">{log.status}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`runlog-img-${active}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={log.image}
                  alt={log.command}
                  className="w-full aspect-square object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

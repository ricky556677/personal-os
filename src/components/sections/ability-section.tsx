"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ABILITY_MODULES } from "@/lib/constants";

export function AbilitySection() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const goTo = useCallback((index: number) => {
    setActive((prev) => {
      const next = Math.max(0, Math.min(ABILITY_MODULES.length - 1, index));
      return next === prev ? prev : next;
    });
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const current = activeRef.current;
      const last = ABILITY_MODULES.length - 1;
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

  const mod = ABILITY_MODULES[active];

  return (
    <section
      ref={sectionRef}
      id="abilities"
      className="scroll-mt-14 py-section-sm md:py-section bg-background"
    >
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
        <p className="text-[12px] font-medium tracking-[0.2px] text-text-muted mb-16">
          Ability Modules
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
          {/* Left: Vertical Nav */}
          <nav className="flex flex-col gap-3 lg:border-r lg:border-white/[0.04] lg:pr-8">
            {ABILITY_MODULES.map((item, i) => (
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
                <span className="text-white/20 font-mono">{item.number}</span>
                {item.title}
              </button>
            ))}
          </nav>

          {/* Right: Content + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Terminal + Text */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`ability-content-${active}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="font-mono text-[13px] leading-[1.60] tracking-[0.3px] text-brand-green mb-8 bg-surface-100 border border-white/[0.04] rounded-input p-5">
                    {mod.terminal.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                    <span className="inline-block w-2 h-[1.1em] bg-brand-green ml-1 animate-pulse" />
                  </div>

                  <div className="flex items-end gap-6 mb-6">
                    <span className="text-[96px] md:text-[120px] font-semibold leading-[0.85] text-text-primary/10 select-none">
                      {mod.number}
                    </span>
                    <div>
                      <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.10] tracking-tight text-text-primary">
                        {mod.title}
                      </h2>
                      <p className="text-[16px] font-medium tracking-[0.2px] text-text-muted">
                        {mod.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-[16px] font-medium leading-[1.60] tracking-[0.2px] text-text-secondary">
                    {mod.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`ability-img-${active}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={mod.image}
                  alt={mod.title}
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

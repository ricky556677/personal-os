"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PillButton } from "@/components/ui/pill-button";
import { HERO_SLIDES } from "@/lib/constants";

export function HeroSection() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep ref in sync so wheel handler always reads latest value
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const goTo = useCallback((index: number) => {
    setActive((prev) => {
      const next = Math.max(0, Math.min(HERO_SLIDES.length - 1, index));
      return next === prev ? prev : next;
    });
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const current = activeRef.current;
      const last = HERO_SLIDES.length - 1;

      // At boundary: let native scroll pass through
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
    const section = document.getElementById("hero");
    section?.addEventListener("wheel", handleWheel, { passive: false });
    return () => section?.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const slide = HERO_SLIDES[active];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col scroll-mt-14 bg-background"
    >
      {/* Corner markers */}
      <span className="absolute top-[calc(50%-4rem)] left-[calc(50%-6rem)] text-[10px] text-white/20 font-mono select-none">
        +
      </span>
      <span className="absolute top-[calc(50%-4rem)] right-[calc(50%-6rem)] text-[10px] text-white/20 font-mono select-none">
        +
      </span>
      <span className="absolute bottom-[calc(50%-4rem)] left-[calc(50%-6rem)] text-[10px] text-white/20 font-mono select-none">
        +
      </span>
      <span className="absolute bottom-[calc(50%-4rem)] right-[calc(50%-6rem)] text-[10px] text-white/20 font-mono select-none">
        +
      </span>

      {/* Main content area */}
      <div className="flex-1 flex items-center max-w-container mx-auto w-full px-6 md:px-8 lg:px-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            {/* Side timeline */}
            <div className="hidden lg:flex flex-col gap-3 mb-12">
              {HERO_SLIDES.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => goTo(i)}
                  className={`flex items-center gap-4 text-[13px] font-medium transition-all duration-300 text-left ${
                    i === active
                      ? "text-text-primary"
                      : "text-text-disabled hover:text-text-muted"
                  }`}
                >
                  <span className="text-white/20 w-8">{item.year}</span>
                  <span className={i === active ? "text-text-primary" : "text-text-muted"}>
                    {item.label}
                  </span>
                  <span className="text-white/20">·</span>
                  <span>{item.sub}</span>
                  {i === active && (
                    <span className="ml-auto w-4 h-[1px] bg-brand-red" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile timeline indicator */}
            <div className="flex lg:hidden gap-2 mb-8">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-text-primary"
                      : "w-3 bg-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Brand name */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${active}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-[1.05] tracking-tight text-text-primary mb-6 display-text">
                  {slide.title}
                  <br />
                  {slide.titleLine2}
                  <span className="inline-block ml-2 text-[32px] md:text-[40px] align-super text-text-muted">
                    ↗
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`desc-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[15px] font-medium leading-[1.60] tracking-[0.2px] text-text-muted mb-3 max-w-[420px]">
                  {slide.description}
                </p>
                <p className="text-[13px] font-medium leading-[1.50] tracking-[0.4px] text-text-disabled mb-8">
                  {slide.tags}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <PillButton href="#identity">了解我的能力</PillButton>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${active}`}
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full aspect-square object-cover"
                />

                {/* Text overlay on image - left side */}
                <div className="absolute top-0 left-0 bottom-0 w-[45%] bg-background/80 backdrop-blur-sm flex flex-col justify-center px-6 md:px-8">
                  <p className="text-[20px] md:text-[24px] font-semibold leading-[1.15] text-text-primary tracking-tight">
                    {slide.title}
                    <br />
                    {slide.titleLine2}
                  </p>
                  <div className="mt-6 flex flex-col gap-1">
                    {slide.imageLabel.split("\n").map((line, i) => (
                      <p
                        key={i}
                        className="text-[13px] font-medium leading-[1.40] text-text-muted"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-6 md:px-8 lg:px-12 py-6 border-t border-white/[0.04]">
        <div className="flex items-center gap-6">
          <span className="text-[12px] font-medium text-text-disabled">
            taste and perception
          </span>
          <span className="text-[12px] font-medium text-text-disabled">
            ·
          </span>
          <span className="text-[12px] font-medium text-text-disabled">
            Websites for creators and brands
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[12px] font-medium text-text-muted hover:text-text-primary cursor-pointer transition-colors">
            INSTAGRAM
          </span>
          <span className="text-[12px] font-medium text-text-muted hover:text-text-primary cursor-pointer transition-colors">
            EMAIL
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KNOWLEDGE_ITEMS } from "@/lib/constants";
import Link from "next/link";

export function KnowledgeSection() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const goTo = useCallback((index: number) => {
    setActive((prev) => {
      const next = Math.max(0, Math.min(KNOWLEDGE_ITEMS.length - 1, index));
      return next === prev ? prev : next;
    });
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // If wheel originates inside the terminal scroll area, check boundaries
      const terminal = terminalRef.current;
      if (terminal && terminal.contains(e.target as Node)) {
        const isAtTop = terminal.scrollTop <= 1;
        const isAtBottom =
          terminal.scrollTop + terminal.clientHeight >= terminal.scrollHeight - 1;
        // Allow native scroll if not at boundary
        if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
          return; // let browser handle native scroll
        }
        // At boundary: prevent native scroll and let tab switching happen
        e.preventDefault();
      }

      const current = activeRef.current;
      const last = KNOWLEDGE_ITEMS.length - 1;
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

  const item = KNOWLEDGE_ITEMS[active];
  const firstChild = item.children[0];

  return (
    <section
      ref={sectionRef}
      id="knowledge"
      className="scroll-mt-14 py-section-sm md:py-section bg-background"
    >
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
        <p className="text-[12px] font-medium tracking-[0.2px] text-text-muted mb-16">
          Knowledge Base
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: File tree */}
          <div>
            <div className="font-mono text-[14px] leading-[2.0] tracking-[0.3px] text-text-muted mb-8">
              <span className="text-text-disabled">~/</span>knowledge/
            </div>

            <div className="flex flex-col">
              {KNOWLEDGE_ITEMS.map((k, i) => (
                <button
                  key={k.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 text-left py-2 transition-colors duration-300 ${
                    i === active ? "" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {i === active ? (
                    <span className="text-brand-green">▸</span>
                  ) : (
                    <span className="text-text-disabled w-[1ch]" />
                  )}
                  <span
                    className={`font-mono text-[16px] ${
                      i === active ? "text-text-primary" : "text-text-muted"
                    }`}
                  >
                    {k.label}/
                  </span>
                  <span className="text-[13px] text-text-disabled font-mono">
                    {k.count}
                  </span>
                  <span
                    className={`ml-auto text-[12px] transition-transform duration-300 ${
                      i === active ? "rotate-90 text-text-muted" : "text-text-disabled"
                    }`}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>

            {/* 全部 button */}
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 mt-8 px-4 py-2 border border-white/[0.08] rounded-input text-[13px] font-mono text-text-muted hover:text-text-primary hover:border-white/[0.16] transition-colors w-fit"
            >
              <span className="text-brand-green">+</span>
              全部文章
              <span className="text-text-disabled ml-1">→</span>
            </Link>

            {/* Active detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`knowledge-detail-${active}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 font-mono text-[13px]"
              >
                <div className="flex flex-col gap-1 mb-6">
                  {item.children.map((child) => (
                    <div key={child.name} className="flex items-center gap-4 pl-6">
                      <span className="text-text-disabled">├──</span>
                      <span className="text-text-secondary">{child.name}</span>
                      <span className="text-text-disabled ml-auto">{child.size}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[14px] text-text-muted leading-[1.60]">
                  {item.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Article content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`knowledge-content-${active}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-surface-100 border border-white/[0.04] rounded-input overflow-hidden">
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 px-6 py-4 border-b border-white/[0.04] shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <span className="ml-4 text-[12px] text-text-disabled font-mono">
                      ~/knowledge/{item.label}
                    </span>
                  </div>

                  {/* Scrollable article content */}
                  <div
                    ref={terminalRef}
                    className="p-6 md:p-8 font-mono text-[13px] leading-[1.80] tracking-[0.2px] overflow-y-auto"
                    style={{ maxHeight: "480px" }}
                  >
                    {firstChild.content.split("\n").map((line, i) => {
                      if (line.startsWith("## ")) {
                        return (
                          <div key={i} className="text-text-primary font-semibold mt-8 mb-3 text-[14px]">
                            {line.replace("## ", "")}
                          </div>
                        );
                      }
                      if (line.startsWith("# ")) {
                        return (
                          <div key={i} className="text-brand-green font-semibold mb-4 text-[15px]">
                            {line.replace("# ", "")}
                          </div>
                        );
                      }
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return (
                          <div key={i} className="text-text-primary font-semibold mt-4 mb-2">
                            {line.replace(/\*\*/g, "")}
                          </div>
                        );
                      }
                      if (line.startsWith("- [")) {
                        const checked = line.includes("[x]");
                        const text = line.replace(/- \[[ x]\] /, "");
                        return (
                          <div key={i} className="flex items-center gap-2 pl-2 text-text-muted">
                            <span className={checked ? "text-brand-green" : "text-text-disabled"}>
                              {checked ? "✓" : "○"}
                            </span>
                            {text}
                          </div>
                        );
                      }
                      if (line.startsWith("- ")) {
                        return (
                          <div key={i} className="flex items-start gap-2 pl-2 text-text-muted">
                            <span className="text-brand-green mt-0.5 shrink-0">→</span>
                            {line.replace("- ", "")}
                          </div>
                        );
                      }
                      if (line.startsWith("---")) {
                        return <hr key={i} className="border-white/[0.06] my-4" />;
                      }
                      if (line.trim() === "") {
                        return <div key={i} className="h-2" />;
                      }
                      return (
                        <div key={i} className="text-text-muted">
                          {line}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

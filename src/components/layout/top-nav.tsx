"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#identity" },
  { label: "Work Together ", href: "#action" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-background/80 backdrop-blur-md flex items-center px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-container mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="text-[13px] font-medium tracking-[0.2px] text-text-muted hover:text-text-primary transition-colors duration-300"
        >
          aigc·肖学长
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-[0.2px] text-text-muted hover:text-text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-text-muted p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            ) : (
              <>
                <path d="M2 5H16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M2 9H16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M2 13H16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background border-t border-white/[0.04]"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[14px] font-medium text-text-muted hover:text-text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

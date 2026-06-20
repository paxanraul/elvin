"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Главная", href: "home" },
  { label: "О DJ EL", href: "artist" },
  { label: "Контакты", href: "contacts" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        scrolled || open ? "bg-paper-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-12 md:py-5">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-3"
          aria-label="DJ ELVIN — наверх"
        >
          <Image
            src="/img/logo-mark.png"
            alt="DJ ELVIN"
            width={573}
            height={436}
            className="h-7 w-auto md:h-8"
            priority
          />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.32em] text-bone-muted sm:block">
            DJ&nbsp;ELVIN
          </span>
        </button>

        {/* desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="group relative font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-bone-muted transition-colors duration-500 hover:text-bone"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-500 ease-smooth group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => go("reserve")}
            className="group flex items-center gap-2 border border-signal/50 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-signal transition-colors duration-500 hover:bg-signal hover:text-paper-900"
          >
            Забронировать
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </button>
        </nav>

        {/* mobile burger */}
        <button
          className="flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* scroll progress hairline */}
      <div className="h-px w-full bg-bone/8">
        <div
          className="h-px bg-signal/80"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-paper-900/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="border-b border-bone/10 py-4 text-left font-sans text-[14px] font-medium uppercase tracking-[0.18em] text-bone-muted"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => go("reserve")}
                className="mt-5 border border-signal/50 py-3 text-center font-mono text-[12px] uppercase tracking-[0.22em] text-signal"
              >
                Забронировать
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

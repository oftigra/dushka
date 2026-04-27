"use client";

import { motion } from "framer-motion";
import { heroLines } from "@/data/site";

type HeroProps = {
  onContactClick: (label: string, href: string) => void;
};

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="mx-auto grid min-h-[92vh] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <motion.p
          className="comic-border mb-6 inline-flex rounded-full bg-[var(--panel-strong)] px-4 py-2 text-xs font-black uppercase tracking-[0.26em]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          QA portfolio / meme lab / багодушилка
        </motion.p>

        <motion.h1
          className="font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          Душные
          <span className="block text-[var(--accent)]">идеи</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-xl leading-8 text-[var(--muted)] sm:text-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
        >
          {heroLines[0]} Здесь портфолио не притворяется корпоративным сайтом, а честно
          показывает: сценарии будут пройдены, регресс прогнан, мобилки проверены.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
        >
          <button
            type="button"
            onClick={() => onContactClick("Telegram", "https://t.me/")}
            className="button-hover comic-border rounded-full bg-[var(--accent-3)] px-7 py-4 font-black uppercase tracking-[0.16em] text-white focus:outline-none focus:ring-4 focus:ring-[var(--accent)]"
          >
            Позвать на интервью
          </button>
          <a
            href="#skills"
            className="button-hover rounded-full border-2 border-[var(--foreground)] px-7 py-4 text-center font-black uppercase tracking-[0.16em] hover:bg-[var(--accent)] hover:text-white focus:outline-none focus:ring-4 focus:ring-[var(--accent)]"
          >
            Что тестирую
          </a>
        </motion.div>
      </div>

      <motion.div
        className="glass-card comic-border relative min-h-[420px] overflow-hidden rounded-[2.4rem] p-6"
        initial={{ opacity: 0, rotate: 2, y: 30 }}
        animate={{ opacity: 1, rotate: -1, y: 0 }}
        transition={{ delay: 0.18 }}
      >
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--accent)]" />
        <div className="absolute -bottom-12 left-10 h-44 w-44 rounded-full bg-[var(--accent-2)]" />
        <div className="relative z-10 flex h-full min-h-[370px] flex-col justify-between rounded-[1.8rem] bg-[var(--panel-strong)] p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--muted)]">
                logo sketch
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-8xl leading-none">Д</span>
                <span className="mb-3 h-14 w-12 rounded-t-full border-4 border-[var(--foreground)] bg-[var(--accent)]" />
                <span className="mb-6 h-20 w-10 rounded-t-full border-4 border-[var(--foreground)] bg-[var(--accent)]" />
                <span className="mb-3 h-14 w-12 rounded-t-full border-4 border-[var(--foreground)] bg-[var(--accent)]" />
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-black text-[var(--background)]">
                QA ready
              </span>
              <span className="-rotate-3 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-3)] px-4 py-2 text-sm font-black text-white shadow-[4px_4px_0_rgba(0,0,0,0.18)]">
                4y+  QA
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {heroLines.map((line) => (
              <div
                key={line}
                className="rounded-2xl border-2 border-[var(--foreground)] bg-white/30 px-4 py-3 font-black"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

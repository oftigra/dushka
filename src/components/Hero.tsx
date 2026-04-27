"use client";

import { motion } from "framer-motion";
import { heroLines } from "@/data/site";

type HeroProps = {
  onContactClick: (label: string, href: string) => void;
};

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="mx-auto grid min-h-[92vh] w-full max-w-6xl items-center gap-8 px-4 pb-14 pt-24 sm:gap-10 sm:px-5 sm:pb-16 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <motion.p
        className="comic-border mb-6 inline-flex rounded-full bg-[var(--panel-strong)] px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.18em] sm:px-4 sm:text-xs sm:tracking-[0.26em]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          QA portfolio / meme lab / багодушилка
        </motion.p>

        <motion.h1
          className="font-display text-[3.25rem] leading-[0.92] sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          Душные
          <span className="block text-[var(--accent)]">идеи</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-7 text-[var(--muted)] sm:text-2xl sm:leading-8"
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
            className="button-hover comic-border rounded-full bg-[var(--accent-3)] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white focus:outline-none focus:ring-4 focus:ring-[var(--accent)] sm:px-7 sm:text-base sm:tracking-[0.16em]"
          >
            Позвать на интервью
          </button>
          <a
            href="#skills"
            className="button-hover rounded-full border-2 border-[var(--foreground)] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.14em] hover:bg-[var(--accent)] hover:text-white focus:outline-none focus:ring-4 focus:ring-[var(--accent)] sm:px-7 sm:text-base sm:tracking-[0.16em]"
          >
            Что тестирую
          </a>
        </motion.div>
      </div>

      <motion.div
        className="glass-card comic-border relative min-h-[390px] overflow-hidden rounded-[1.9rem] p-4 sm:min-h-[420px] sm:rounded-[2.4rem] sm:p-6"
        initial={{ opacity: 0, rotate: 2, y: 30 }}
        animate={{ opacity: 1, rotate: -1, y: 0 }}
        transition={{ delay: 0.18 }}
      >
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--accent)]" />
        <div className="absolute -bottom-12 left-10 h-44 w-44 rounded-full bg-[var(--accent-2)]" />
        <div className="relative z-10 flex h-full min-h-[350px] flex-col justify-between rounded-[1.45rem] bg-[var(--panel-strong)] p-4 sm:min-h-[370px] sm:rounded-[1.8rem] sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--muted)] sm:text-sm sm:tracking-[0.22em]">
                logo sketch
              </p>
              <div className="mt-4 flex items-end gap-1.5 sm:gap-2">
                <span className="font-display text-[5.5rem] leading-none sm:text-8xl">Д</span>
                <span className="mb-3 h-12 w-10 rounded-t-full border-[3px] border-[var(--foreground)] bg-[var(--accent)] sm:h-14 sm:w-12 sm:border-4" />
                <span className="mb-5 h-16 w-9 rounded-t-full border-[3px] border-[var(--foreground)] bg-[var(--accent)] sm:mb-6 sm:h-20 sm:w-10 sm:border-4" />
                <span className="mb-3 h-12 w-10 rounded-t-full border-[3px] border-[var(--foreground)] bg-[var(--accent)] sm:h-14 sm:w-12 sm:border-4" />
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start gap-2 sm:flex-col sm:items-end">
              <span className="rounded-full bg-[var(--foreground)] px-3 py-2 text-xs font-black text-[var(--background)] sm:px-4 sm:text-sm">
                QA ready
              </span>
              <span className="-rotate-3 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-3)] px-3 py-2 text-xs font-black text-white shadow-[4px_4px_0_rgba(0,0,0,0.18)] sm:px-4 sm:text-sm">
                4Y+ QA
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {heroLines.map((line) => (
              <div
                key={line}
                className="rounded-2xl border-2 border-[var(--foreground)] bg-white/30 px-4 py-3 text-sm font-black leading-5 sm:text-base sm:leading-normal"
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

"use client";

import { motion } from "framer-motion";
import { heroLines, qaInventory } from "@/data/site";

type HeroProps = {
  onContactClick: (label: string, href: string) => void;
};

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="mx-auto grid min-h-[92vh] w-full max-w-6xl items-center gap-8 overflow-hidden px-4 pb-14 pt-24 sm:gap-10 sm:px-5 sm:pb-16 sm:pt-28 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="min-w-0">
        <motion.p
          className="comic-border mb-6 inline-flex max-w-full rounded-full bg-[var(--panel-strong)] px-3 py-2 text-[0.58rem] font-black uppercase leading-4 tracking-[0.12em] sm:px-4 sm:text-xs sm:tracking-[0.26em]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          QA portfolio / meme lab / багодушилка
        </motion.p>

        <motion.h1
          className="font-display max-w-full text-[2.9rem] leading-[0.92] min-[380px]:text-[3.05rem] sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          Душные
          <span className="block text-[var(--accent)]">идеи</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] min-[380px]:text-lg sm:text-2xl sm:leading-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
        >
          {heroLines[0]} Здесь портфолио не притворяется корпоративным сайтом, а честно
          показывает: сценарии будут пройдены, регресс прогнан, мобилки проверены.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
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

        <motion.div
          className="mt-6 max-w-xl sm:mt-7"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--muted)]">
            QA inventory
          </p>
          <div className="grid grid-cols-2 gap-2 min-[380px]:grid-cols-3 sm:flex sm:flex-wrap">
            {qaInventory.map((item) => (
              <span
                key={item}
                className="truncate rounded-full border-2 border-[var(--foreground)] bg-[var(--panel-strong)] px-2.5 py-1.5 text-center text-[0.6rem] font-black uppercase tracking-[0.06em] shadow-[3px_3px_0_rgba(0,0,0,0.12)] sm:px-3 sm:text-[0.68rem] sm:tracking-[0.1em]"
                title={item}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="glass-card comic-border relative min-h-[360px] overflow-hidden rounded-[1.9rem] p-4 sm:min-h-[420px] sm:rounded-[2.4rem] sm:p-6"
        initial={{ opacity: 0, rotate: 2, y: 30 }}
        animate={{ opacity: 1, rotate: -1, y: 0 }}
        transition={{ delay: 0.18 }}
      >
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--accent)]" />
        <div className="absolute -bottom-12 left-10 h-44 w-44 rounded-full bg-[var(--accent-2)]" />
        <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between rounded-[1.45rem] bg-[var(--panel-strong)] p-4 sm:min-h-[370px] sm:rounded-[1.8rem] sm:p-6">
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

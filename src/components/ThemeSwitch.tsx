"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type ThemeSwitchProps = {
  isTransitioning: boolean;
  transitionMode: "to-night" | "to-day";
  onToggle: () => void;
};

const matrixChars = [
  "01",
  "QA",
  "BUG",
  "REG",
  "E2E",
  "404",
  "wake",
  "test",
  "prod",
  "{ }",
  "neo",
];

export function ThemeSwitch({ isTransitioning, transitionMode, onToggle }: ThemeSwitchProps) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="comic-border fixed right-4 top-4 z-50 rounded-full bg-[var(--panel-strong)] px-4 py-3 text-sm font-black uppercase tracking-[0.18em] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[var(--accent)]"
        aria-label="Переключить тему день или ночь"
      >
        <span className="theme-label-night">Night.exe</span>
        <span className="theme-label-day">Day.exe</span>
      </button>

      <AnimatePresence>
        {isTransitioning && transitionMode === "to-night" ? (
          <motion.div
            className="matrix-rain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 82 }).map((_, index) => (
              <span
                key={index}
                className="matrix-column"
                style={{
                  left: `${(index * 7.3) % 100}%`,
                  animationDelay: `${(index % 17) * 38}ms`,
                  animationDuration: `${1150 + (index % 9) * 95}ms`,
                  opacity: 0.42 + (index % 6) * 0.09,
                }}
              >
                {Array.from({ length: 9 }).map((_, rowIndex) => (
                  <b key={rowIndex}>{matrixChars[(index + rowIndex) % matrixChars.length]}</b>
                ))}
              </span>
            ))}
            <div className="matrix-message-wrap">
              <motion.div
                className="matrix-message"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.92, 1, 1, 1.04] }}
                transition={{ duration: 1.82, times: [0, 0.18, 0.76, 1] }}
              >
                <span>WAKE UP,</span>
                <span>HR</span>
                <small>follow the QA</small>
              </motion.div>
            </div>
            <div className="scanlines" />
          </motion.div>
        ) : null}

        {isTransitioning && transitionMode === "to-day" ? (
          <motion.div
            className="day-wake"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="day-rays" />
            {Array.from({ length: 22 }).map((_, index) => (
              <span
                key={index}
                className="day-sprinkle"
                style={{
                  left: `${(index * 19 + 7) % 100}%`,
                  top: `${(index * 29 + 11) % 100}%`,
                  animationDelay: `${(index % 7) * 70}ms`,
                }}
              />
            ))}
            <div className="day-message-wrap">
              <motion.div
                className="day-donut-sticker"
                initial={{ opacity: 0, rotate: 8, scale: 0.82, y: 30 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  rotate: [8, -4, -3, 3],
                  scale: [0.82, 1, 1, 0.98],
                  y: [30, 0, 0, -18],
                }}
                transition={{ duration: 1.85, times: [0, 0.18, 0.82, 1] }}
              >
                <Image
                  src="/eda_ponchik-removebg-preview.png"
                  alt=""
                  width={390}
                  height={445}
                  className="h-full w-full object-contain object-center"
                  aria-hidden="true"
                  priority={false}
                />
              </motion.div>
              <motion.div
                className="day-message"
                initial={{ opacity: 0, rotate: -4, scale: 0.86 }}
                animate={{ opacity: [0, 1, 1, 0], rotate: [-4, 2, 0, 3], scale: [0.86, 1.05, 1, 1.04] }}
                transition={{ duration: 1.85, times: [0, 0.18, 0.82, 1] }}
              >
                <span>D&apos;OH!</span>
                <span>DAY MODE</span>
                <small>Mmm... regression passed</small>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type BugEasterEggProps = {
  onBreakPage: () => void;
};

export function BugEasterEgg({ onBreakPage }: BugEasterEggProps) {
  const [isLoose, setIsLoose] = useState(false);
  const path = useMemo(
    () => ({
      x: [0, -48, -130, -88, -220, -170],
      y: [0, 70, 35, 150, 210, 330],
      rotate: [0, -16, 24, -32, 14, -8],
    }),
    [],
  );

  const handleClick = () => {
    setIsLoose(true);
    window.setTimeout(onBreakPage, 1300);
  };

  return (
    <motion.button
      type="button"
      className="fixed -right-2 bottom-20 z-40 flex h-14 w-14 items-center justify-center rounded-l-full border-[3px] border-[var(--foreground)] bg-[var(--panel-strong)] text-3xl shadow-[6px_6px_0_rgba(0,0,0,0.2)] transition hover:-translate-x-2 focus:outline-none focus:ring-4 focus:ring-[var(--accent-3)] sm:bottom-24 sm:h-20 sm:w-20 sm:border-4 sm:text-4xl sm:shadow-[8px_8px_0_rgba(0,0,0,0.2)]"
      onClick={handleClick}
      animate={isLoose ? path : { rotate: [0, 6, -6, 0] }}
      transition={
        isLoose
          ? { duration: 2.4, ease: "easeInOut" }
          : { duration: 2, repeat: Infinity, repeatType: "mirror" }
      }
      aria-label="Баг-жук. Нажмите, чтобы сломать страницу"
      title="Не трогай баг"
    >
      <span aria-hidden="true">🐞</span>
    </motion.button>
  );
}

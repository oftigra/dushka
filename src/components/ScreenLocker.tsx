"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ScreenLockerProps = {
  isOpen: boolean;
  targetLabel: string;
  targetHref: string;
  onClose: () => void;
};

export function ScreenLocker({ isOpen, targetLabel, targetHref, onClose }: ScreenLockerProps) {
  const [secondsLeft, setSecondsLeft] = useState(13);
  const isExpired = secondsLeft === 0;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => Math.max(current - 1, 0));
    }, 1000);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const openTarget = () => {
    if (targetHref.startsWith("http")) {
      window.open(targetHref, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = targetHref;
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="screen-locker-title"
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border-4 border-white bg-[#12070b] p-6 shadow-[0_0_90px_rgba(255,72,109,0.45)] sm:p-10"
            initial={{ scale: 0.92, rotate: -1 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.96, opacity: 0 }}
          >
            <div className="scanlines" />
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-black">
              {isExpired ? "qa verdict" : "screen locker joke"}
            </p>
            <h2 id="screen-locker-title" className="font-display text-3xl leading-tight sm:text-5xl">
              {isExpired ? "Bug #404: интервью не началось." : `У вас есть ${secondsLeft} сек. пригласить меня на интервью`}
            </h2>
            {isExpired ? (
              <div className="mt-5 max-w-xl space-y-2 text-lg text-white/78">
                <p>
                  <span className="font-black text-white">Steps to reproduce:</span> открыть сайт, не
                  нажать {targetLabel}, дождаться таймера.
                </p>
                <p>
                  <span className="font-black text-white">Expected:</span> оффер.
                </p>
                <p>
                  <span className="font-black text-white">Actual:</span> awkward silence.
                </p>
                <p className="rounded-2xl border border-white/20 bg-white/10 p-4 text-base font-black sm:hidden">
                  Время вышло. На Android 8 таймер бы еще работал, но мы тестируем честно.
                </p>
              </div>
            ) : (
              <p className="mt-5 max-w-xl text-lg text-white/78">
                Никакого вымогательства, только UX с повышенной душностью. Цель: {targetLabel}.
              </p>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openTarget}
                className="button-hover rounded-full bg-[#45ff94] px-6 py-4 font-black text-black focus:outline-none focus:ring-4 focus:ring-white"
              >
                {isExpired ? "Исправить bug через Telegram" : `Открыть ${targetLabel}`}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="button-hover rounded-full border-2 border-white/40 px-6 py-4 font-black text-white hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white"
              >
                Я просто посмотреть
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

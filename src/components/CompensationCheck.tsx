"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const salaryStates = [
  {
    label: "интересный опыт",
    percent: 18,
    reaction: "Енот подозрительно молчит.",
    image: "/1.gif",
    alt: "Енот стирает деньги",
  },
  {
    label: "конкурентная зарплата",
    percent: 58,
    reaction: "Енот достал калькулятор и начал верить.",
    image: "/2.gif",
    alt: "Енот с деньгами",
  },
  {
    label: "Shut up and take my money",
    percent: 100,
    reaction: "Енот принял оффер быстрее, чем Jira открыла тикет.",
    image: "/3.gif",
    alt: "Енот с деньгами",
  },
];

export function CompensationCheck() {
  const [level, setLevel] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(() => new Set());
  const current = salaryStates[level];
  const isCurrentImageLoaded = loadedImages.has(current.image);

  useEffect(() => {
    salaryStates.forEach(({ image }) => {
      const preloader = new window.Image();
      const markAsLoaded = () => {
        setLoadedImages((images) => {
          const nextImages = new Set(images);
          nextImages.add(image);
          return nextImages;
        });
      };

      preloader.onload = markAsLoaded;
      preloader.onerror = markAsLoaded;
      preloader.src = image;
    });
  }, []);

  const increaseMotivation = () => {
    setLevel((currentLevel) => (currentLevel + 1) % salaryStates.length);
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-5 sm:py-10" id="compensation">
      <motion.article
        className="comic-border relative overflow-hidden rounded-[1.8rem] bg-[var(--panel-strong)] p-4 sm:rounded-[2.4rem] sm:p-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--accent-2)] opacity-70" />
        <div className="absolute -bottom-14 left-10 h-44 w-44 rounded-full bg-[var(--accent)] opacity-50" />

        <div className="relative z-10 min-w-0">
          <div className="mb-7 flex min-w-0 flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--accent-3)] sm:text-sm sm:tracking-[0.24em]">
                QA Case: Salary Regression
              </p>
              <h2 className="font-display mt-3 max-w-3xl break-words text-[1.62rem] leading-[1.08] sm:text-4xl lg:text-5xl">
                Проверяем, как быстро мотивация воспроизводится при нормальной вилке.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["DUSH-404", "Bug", "Needs offer"].map((item) => (
                <span
                  key={item}
                  className="cursor-default select-none rounded-full bg-[var(--foreground)] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[var(--background)] sm:px-4 sm:text-xs sm:tracking-[0.16em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
            <div className="min-w-0 rounded-[1.35rem] border-2 border-[var(--foreground)] bg-white/35 p-4 sm:rounded-[1.8rem] sm:p-6">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="cursor-default select-none rounded-full bg-[var(--foreground)] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[var(--background)] sm:px-4 sm:text-xs sm:tracking-[0.16em]">
                  Bug report
                </span>
                <span className="cursor-default select-none rounded-full border border-[var(--foreground)]/25 bg-[var(--background)]/35 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[var(--muted)] sm:px-4 sm:text-xs sm:tracking-[0.16em]">
                  Assignee: HR
                </span>
              </div>

              <h3 className="break-words text-xl font-black leading-tight sm:text-3xl">
                Bug #salary: мотивация не воспроизводится
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-7">
                <p>
                  <span className="font-black text-[var(--foreground)]">Steps to reproduce:</span>{" "}
                  предложить «интересные задачи» вместо вилки.
                </p>
                <p>
                  <span className="font-black text-[var(--foreground)]">Expected:</span> прозрачная
                  компенсация, адекватные процессы и баги, которые можно воспроизвести.
                </p>
                <p>
                  <span className="font-black text-[var(--foreground)]">Actual:</span> «обсудим
                  после техсобеса».
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Severity: money", "Priority: asap", "Status: offer needed"].map((item) => (
                  <span
                    key={item}
                    className="cursor-default select-none rounded-2xl border border-[var(--foreground)]/20 bg-[var(--panel-strong)]/65 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.08em] text-[var(--muted)] sm:text-xs sm:tracking-[0.12em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex h-full min-w-0 flex-col rounded-[1.35rem] border-2 border-[var(--foreground)] bg-[var(--panel-strong)] p-4 sm:rounded-[1.8rem] sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--muted)]">
                    salary meter
                  </p>
                  <h3 className="mt-3 text-xl font-black sm:text-2xl">Мотивация енота</h3>
                </div>
                <span className="cursor-default select-none rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-black text-[var(--background)]">
                  {current.percent}%
                </span>
              </div>

            <div className="mt-7 shrink-0 rounded-full border-2 border-[var(--foreground)] bg-white/30 p-1">
              <motion.div
                className="h-5 rounded-full bg-[var(--accent-3)]"
                animate={{ width: `${current.percent}%` }}
                transition={{ type: "spring", stiffness: 130, damping: 18 }}
              />
            </div>

            <div className="mt-7 grid flex-1 gap-5">
              <button
                type="button"
                onClick={increaseMotivation}
                className="group relative mx-auto flex h-56 w-full max-w-72 shrink-0 items-center justify-center rounded-[2rem] border-4 border-[var(--foreground)] bg-white/20 shadow-[8px_8px_0_rgba(0,0,0,0.2)] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[var(--accent-3)] sm:h-64"
                aria-label="Повысить мотивацию енота"
              >
                {isCurrentImageLoaded ? (
                  <motion.div
                    key={current.image}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{
                      opacity: 1,
                      rotate: level === 2 ? [-2, 2, -2] : 0,
                      scale: 1 + level * 0.035,
                    }}
                    transition={{ duration: 0.28 }}
                  >
                    <Image
                      src={current.image}
                      alt={current.alt}
                      width={240}
                      height={240}
                      unoptimized={current.image.endsWith(".gif")}
                      className="h-44 w-44 object-contain drop-shadow-xl sm:h-52 sm:w-52"
                      priority={level === 0}
                    />
                  </motion.div>
                ) : (
                  <div className="flex h-44 w-44 items-center justify-center rounded-[1.5rem] border-2 border-dashed border-[var(--foreground)]/40 bg-[var(--panel-strong)]/70 text-center text-xs font-black uppercase tracking-[0.14em] text-[var(--muted)] sm:h-52 sm:w-52">
                    loading raccoon
                  </div>
                )}
              </button>

              <div className="flex h-56 min-w-0 flex-col rounded-[1.5rem] border-2 border-[var(--foreground)] bg-[var(--panel-strong)] p-4 sm:h-52">
                <p className="min-h-10 break-words text-sm font-black uppercase leading-5 tracking-[0.12em] text-[var(--accent-3)]">
                  {current.label}
                </p>
                <p className="mt-3 min-h-16 text-lg font-black leading-7">{current.reaction}</p>
                <div className="mt-auto pt-5">
                  <button
                    type="button"
                    onClick={increaseMotivation}
                    className="button-hover w-full rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[var(--background)] focus:outline-none focus:ring-4 focus:ring-[var(--accent)]"
                  >
                    Подкрутить вилку
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}

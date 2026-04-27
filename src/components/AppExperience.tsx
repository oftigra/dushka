"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BugEasterEgg } from "@/components/BugEasterEgg";
import { CompensationCheck } from "@/components/CompensationCheck";
import { FooterMeme } from "@/components/FooterMeme";
import { Hero } from "@/components/Hero";
import { ScreenLocker } from "@/components/ScreenLocker";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { consoleMessages, contactLinks, skillCards } from "@/data/site";

type LockerTarget = {
  label: string;
  href: string;
};

type ThemeTransitionMode = "to-night" | "to-day";

export function AppExperience() {
  const [isTransitioningTheme, setIsTransitioningTheme] = useState(false);
  const [transitionMode, setTransitionMode] = useState<ThemeTransitionMode>("to-night");
  const [lockerTarget, setLockerTarget] = useState<LockerTarget | null>(null);
  const [isBroken, setIsBroken] = useState(false);

  useEffect(() => {
    consoleMessages.forEach((message, index) => {
      window.setTimeout(() => {
        console.log(`%c${message}`, "font-weight:900;color:#45ff94;background:#06140d;padding:6px 10px;border-radius:8px;");
      }, index * 400);
    });
  }, []);

  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme === "night" ? "night" : "day";
    const next = current === "day" ? "night" : "day";

    setTransitionMode(next === "night" ? "to-night" : "to-day");
    setIsTransitioningTheme(true);
    window.setTimeout(() => {
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem("dush-theme", next);
    }, next === "day" ? 650 : 320);
    window.setTimeout(() => setIsTransitioningTheme(false), 2000);
  };

  const openLocker = useCallback((label: string, href: string) => {
    setLockerTarget({ label, href });
  }, []);

  return (
    <>
      <ThemeSwitch
        isTransitioning={isTransitioningTheme}
        transitionMode={transitionMode}
        onToggle={toggleTheme}
      />
      <BugEasterEgg onBreakPage={() => setIsBroken(true)} />

      <main className={isBroken ? "page-broken" : undefined}>
        <Hero onContactClick={openLocker} />

        <section className="mx-auto w-full max-w-6xl px-5 py-10" id="about">
          <div className="glass-card comic-border rounded-[2rem] p-6 sm:p-9">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-3)]">
              происхождение душноты
            </p>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Это сайт, который должен был быть обычным портфолио. Но баг спросил: «а можно веселее?»
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Идея простая: показать QA-навыки без стерильной корпоративщины. Тут есть
              ручное тестирование, автотесты, мобилки, быстрые контакты, пасхалки для тех,
              кто любит инспектить страницу, и достаточно мемов, чтобы HR понял: багам будет
              больно, но не скучно.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-10" id="skills">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-3)]">
                skill cards
              </p>
              <h2 className="font-display mt-3 text-4xl sm:text-6xl">Что тестирую</h2>
            </div>
            <p className="max-w-md text-[var(--muted)]">
              Карточки без лута, но с пользой: что можно доверить QA, пока жук не убежал в прод.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {skillCards.map((card, index) => (
              <motion.article
                key={card.title}
                className="skill-card rounded-[1.6rem] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
              >
                <span className="mb-5 inline-flex rounded-full border border-[var(--foreground)]/20 bg-[var(--background)]/70 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[var(--foreground)]">
                  {card.tag}
                </span>
                <h3 className="text-xl font-black sm:text-2xl">{card.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{card.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-10" id="contact">
          <div className="comic-border overflow-hidden rounded-[2.4rem] bg-[var(--foreground)] text-[var(--background)]">
            <div className="grid gap-6 p-6 sm:p-9 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] opacity-70">
                  contact cta
                </p>
                <h2 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
                  Нужен QA, который душит баги?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 opacity-80">
                  Жмите любую кнопку. Возможно, перед ссылкой появится драматичный таймер,
                  потому что обычные контакты уже не вывозят.
                </p>
              </div>

              <div className="grid gap-3">
                {contactLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => openLocker(link.label, link.href)}
                    className="button-hover rounded-2xl bg-[var(--background)] px-5 py-4 text-left font-black text-[var(--foreground)] focus:outline-none focus:ring-4 focus:ring-[var(--accent)]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CompensationCheck />
      </main>

      <FooterMeme />

      <ScreenLocker
        key={lockerTarget?.label ?? "closed"}
        isOpen={Boolean(lockerTarget)}
        targetLabel={lockerTarget?.label ?? ""}
        targetHref={lockerTarget?.href ?? "#"}
        onClose={() => setLockerTarget(null)}
      />

      {isBroken ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/90 p-5 text-white">
          <div className="comic-border max-w-2xl rounded-[2rem] bg-[#111] p-7 text-center">
            <p className="font-display text-7xl text-[#45ff94]">404</p>
            <h2 className="mt-4 text-3xl font-black">Жук дополз до прода</h2>
            <p className="mt-4 text-white/70">
              Страница держалась достойно, но баг оказался настойчивее. Refresh лечит, но не учит.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-7 rounded-full bg-[#45ff94] px-7 py-4 font-black text-black focus:outline-none focus:ring-4 focus:ring-white"
            >
              Обновить и сделать вид, что так и было
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

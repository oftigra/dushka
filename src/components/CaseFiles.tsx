"use client";

import { motion } from "framer-motion";
import { qaCases, qaPipeline } from "@/data/site";

export function CaseFiles() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10" id="cases">
      <div className="mb-7 grid gap-4 lg:grid-cols-[0.9fr_1fr] lg:items-end">
        <div className="min-w-0">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-3)]">
            case files
          </p>
          <h2 className="font-display mt-3 text-4xl leading-[0.98] sm:text-5xl lg:text-6xl">
            Кейсы из болота
          </h2>
        </div>
        <p className="max-w-xl rounded-[1.4rem] border-2 border-[var(--foreground)] bg-[var(--panel-strong)] p-4 text-sm font-black leading-6 text-[var(--muted)] shadow-[6px_6px_0_rgba(0,0,0,0.12)]">
          Не NDA-роман на 12 страниц, а выжимка: где было больно, чем душили и что стало лучше.
        </p>
      </div>

      <div className="grid items-stretch gap-5 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
        {qaCases.map((item, index) => (
          <motion.article
            key={item.id}
            className="comic-border flex h-full min-w-0 flex-col rounded-[1.8rem] bg-[var(--panel-strong)] p-4 sm:p-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--foreground)] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[var(--background)]">
                {item.id}
              </span>
              <span className="rounded-full border-2 border-[var(--foreground)] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.12em]">
                bug report
              </span>
            </div>

            <h3 className="min-h-14 text-xl font-black leading-tight sm:text-2xl">{item.title}</h3>

            <div className="mt-4 flex flex-1 flex-col text-sm leading-6 text-[var(--muted)]">
              <div className="space-y-2.5 lg:min-h-[17rem]">
              <p className="rounded-2xl bg-[var(--background)]/45 p-3">
                <span className="font-black text-[var(--foreground)]">Context:</span> {item.context}
              </p>
              <p className="rounded-2xl bg-[var(--background)]/45 p-3">
                <span className="font-black text-[var(--foreground)]">Bug:</span> {item.bug}
              </p>
              <p className="rounded-2xl bg-[var(--background)]/45 p-3">
                <span className="font-black text-[var(--foreground)]">Action:</span> {item.action}
              </p>
              </div>
              <div className="min-h-32 rounded-2xl border-2 border-[var(--foreground)] bg-[var(--accent-2)]/25 p-3 text-[var(--foreground)] lg:min-h-[8.5rem]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--accent-3)]">
                  result
                </p>
                <p className="mt-2 font-black leading-6">{item.result}</p>
              </div>
            </div>

            <div className="mt-auto pt-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--accent-3)]">
                tools
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-[var(--background)] px-3 py-1.5 text-xs font-black"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border-2 border-[var(--foreground)] bg-[var(--panel)] p-5">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--muted)]">
              qa pipeline
            </p>
            <h3 className="mt-2 text-2xl font-black">Как баг попадает в протокол допроса</h3>
          </div>
          <span className="w-fit rounded-full bg-[var(--foreground)] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[var(--background)]">
            release confidence
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-5">
          {qaPipeline.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border-2 border-[var(--foreground)] bg-[var(--panel-strong)] p-4"
            >
              <span className="font-display text-3xl text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-2 font-black">{step.title}</h4>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FooterMeme() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pb-10 pt-8 text-sm text-[var(--muted)] lg:flex-row lg:items-center lg:justify-between">
      <p>
        Сайт собран на коленке, под две бутылки терпения и один дедлайн.
      </p>
      <p className="font-black uppercase tracking-[0.18em] text-[var(--muted)]">
        Made by QA for people who ship bugs. (c) 2026
      </p>
      <p className="font-black uppercase tracking-[0.24em] text-[var(--foreground)]">
        Вакансии принимаются без очереди
      </p>
    </footer>
  );
}

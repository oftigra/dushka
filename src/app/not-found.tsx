import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-16">
      <section className="glass-card comic-border max-w-3xl rounded-[2.4rem] p-8 text-center sm:p-12">
        <p className="font-display text-8xl text-[var(--accent-3)]">404</p>
        <h1 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
          Эту страницу задушили до релиза
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
          Возможно, ссылка ушла на собеседование, а возможно, баг-жук уже сделал свое дело.
        </p>
        <Link
          href="/"
          className="comic-border mt-8 inline-flex rounded-full bg-[var(--accent)] px-7 py-4 font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[var(--accent-3)]"
        >
          Вернуться на главную
        </Link>
      </section>
    </main>
  );
}

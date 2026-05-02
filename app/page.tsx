const foundations = [
  "Tailwind CSS v4 is wired into the App Router build pipeline.",
  "The typography plugin is configured for long-form prose content.",
  "Global tokens and base styles now live in app/globals.css.",
  "The UI is ready for future CMS-driven pages without another styling reset.",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-10">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-950 text-slate-50 shadow-[0_30px_90px_rgba(15,23,42,0.22)]">
        <div className="bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.28),transparent_30%)] px-8 py-10 sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
            Issue #2
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end">
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
                Tailwind is now the styling foundation for Process Bar 2.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                The app now ships with Tailwind CSS, shared global primitives,
                and a typography baseline for CMS-rendered prose. That gives the
                next issues a consistent styling system instead of one-off CSS
                modules.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">
                Styling baseline
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                {foundations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
        <article className="prose prose-slate max-w-none rounded-[1.75rem] border border-slate-200/70 bg-white/85 px-6 py-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:px-8 sm:py-10 lg:prose-lg">
          <h2>Typography plugin ready for editorial content</h2>
          <p>
            This page now demonstrates the{" "}
            <code>@tailwindcss/typography</code> plugin with a production-style
            article shell. Future Markdown or CMS output can render inside a{" "}
            <code>prose</code> container and inherit sane spacing, headings,
            links, lists, and code styles immediately.
          </p>
          <p>
            Tailwind&apos;s utility classes now handle layout, spacing, color,
            and responsiveness directly in the component layer, while{" "}
            <code>app/globals.css</code> owns shared theme tokens and base
            browser resets.
          </p>
          <blockquote>
            The app is moving toward content-first pages, so getting prose
            styling in place early prevents a lot of repetitive CSS later.
          </blockquote>
          <h3>What changed</h3>
          <ul>
            <li>Tailwind CSS v4 is loaded through PostCSS for Next.js.</li>
            <li>
              The typography plugin is registered and customized for brand-fit
              defaults.
            </li>
            <li>
              The starter homepage now exercises utility classes and prose
              rendering together.
            </li>
          </ul>
        </article>

        <aside className="rounded-[1.75rem] border border-slate-200/70 bg-white/75 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Next up
          </p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
            <p>
              Editorial templates can now share one visual system instead of
              introducing more page-local CSS.
            </p>
            <p>
              Rich text content will render cleanly with headings, lists,
              quotes, and inline code out of the box.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

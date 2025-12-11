import Link from "next/link";

export default function IndustryPage({ data }) {
  return (
    <main className="min-h-screen">

      {/* DARK HERO SECTION ONLY */}
      <section className="relative isolate md:pt-34 pt-24 pb-20 px-6 lg:px-8 bg-slate-950 text-slate-50 overflow-hidden">

        {/* Gradient background accent */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div className="mx-auto max-w-3xl bg-linear-to-tr from-emerald-400/40 via-cyan-400/30 to-blue-500/30 opacity-60 h-72 w-6xl" />
        </div>

        <div className="mx-auto max-w-5xl">

          {/* HERO */}
          <section className="text-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-6 py-1 text-base font-medium text-blue-400 ring-1 ring-blue-500/30">
                Industry solution
              </span>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                {data.title}
              </h1>

              <p className="mt-5 max-w-xl mx-auto text-center text-base sm:text-lg text-slate-300">
                {data.summary}
              </p>

              <div className="mt-8 gap-8 flex flex-wrap justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
                  Talk to an expert
                </Link>
                <Link href="/solutions/claycloudhr" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-900/60">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* 🌤️ LIGHT MODE CONTENT BELOW HERO */}
      <div className="mx-auto max-w-6xl md:px-0 px-4 py-16">

        {/* Key benefits */}
        <section>
          <h2 className="md:text-2xl text-xl text-center font-semibold text-slate-900">
            Key benefits for your industry
          </h2>
          <p className="mt-2 text-center text-base text-slate-600">
            Clear, outcome-driven advantages that your team and customers will feel from day one.
          </p>

          <ul className="mt-8 grid gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
            {data.usps.map((u, i) => (
              <li
                key={i}
                className="relative w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-emerald-500/10 flex flex-col items-center"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 ring-1 ring-blue-300/40">
                  ✓
                </div>

                <p className="mt-4 text-base text-slate-700 leading-relaxed text-center">
                  {u}
                </p>
              </li>

            ))}
          </ul>
        </section>

        {/* Long content */}
        <section className="mt-16 text-center border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            How it transforms your operations
          </h2>
          <article className="text-base mt-4 max-w-none text-slate-700">
            <p>{data.longContent}</p>
          </article>
        </section>
      </div>
    </main>
  );
}

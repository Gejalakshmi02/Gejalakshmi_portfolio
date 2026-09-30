import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-base-line">
      <div className="container-x grid md:grid-cols-[0.4fr_0.6fr] gap-10">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
            Education
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="max-w-xl p-6 rounded-xl bg-base-panel border border-base-line">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-display text-lg text-ink font-medium">
                B.Tech in Artificial Intelligence &amp; Data Science
              </h3>

              <span className="font-mono text-xs text-ink-faint">
                2022 – 2026
              </span>
            </div>

            <p className="text-ink-muted text-sm mb-4">
              Mahendra Engineering College, Anna University
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-base-panel2 border border-base-line">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              <span className="font-mono text-xs text-ink-muted">
                CGPA 8.63 / 10
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
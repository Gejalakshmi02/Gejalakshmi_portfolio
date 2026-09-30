import Reveal from './Reveal'

export default function GithubSection() {
  return (
    <section id="github" className="py-24 border-t border-base-line">
      <div className="container-x">
        <Reveal>
          <div className="rounded-2xl bg-base-panel border border-base-line p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8">

            <div className="max-w-lg">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-3">
                Explore my GitHub
              </h2>

              <p className="text-ink-muted leading-relaxed">
                Explore my projects, source code, and ongoing work on GitHub.
                I use GitHub to build, document, and improve my technical projects.
              </p>
            </div>

            <a
              href="https://github.com/Gejalakshmi02"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-signal text-base font-medium text-sm hover:bg-signal-soft transition-colors"
              aria-label="View Gejalakshmi's GitHub profile"
            >
              View GitHub Profile

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 12L12 4M12 4H5M12 4V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
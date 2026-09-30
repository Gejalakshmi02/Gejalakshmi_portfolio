export default function Footer() {
  const goToTop = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <footer className="py-10 border-t border-base-line">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-5">

        <p className="text-ink-faint text-xs text-center sm:text-left">
          © {new Date().getFullYear()} Gejalakshmi M. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:gejam2022@gmail.com"
            className="text-ink-faint hover:text-signal text-xs transition-colors"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/gejalakshmi-murugan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint hover:text-signal text-xs transition-colors"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Gejalakshmi02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint hover:text-signal text-xs transition-colors"
            aria-label="GitHub profile"
          >
            GitHub
          </a>

          <button
            onClick={goToTop}
            className="text-ink-faint hover:text-signal text-xs transition-colors"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </footer>
  )
}
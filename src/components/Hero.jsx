export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-fade animate-drift" aria-hidden="true" />

      <div className="container-x relative grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">

        {/* Hero Content */}
        <div>
          <p className="font-mono text-sm text-signal mb-5">
            Data Analyst · AI/ML Enthusiast
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-ink max-w-xl">
            Turning data into insights, and ideas into intelligent solutions.
          </h1>

          <p className="mt-6 text-ink-muted text-lg max-w-lg leading-relaxed">
            I'm Gejalakshmi M., a B.Tech Artificial Intelligence &amp; Data
            Science graduate with hands-on experience in Python, SQL, Power BI,
            data analysis, and machine learning.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">

            {/* Projects */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-5 py-3 rounded-md bg-signal text-base font-medium text-sm hover:bg-signal-soft transition-colors"
            >
              View Projects
            </a>

            {/* Resume */}
            <a
              href="/resume/Gejalakshmi_M_Resume.pdf"
              download
              className="px-5 py-3 rounded-md border border-base-line text-ink text-sm hover:border-signal hover:text-signal transition-colors"
            >
              Download Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Gejalakshmi02"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-md border border-base-line text-ink text-sm hover:border-signal hover:text-signal transition-colors"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/gejalakshmi-murugan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-md border border-base-line text-ink text-sm hover:border-signal hover:text-signal transition-colors"
            >
              LinkedIn
            </a>

          </div>

          {/* Quick Stats */}
          <dl className="mt-14 grid grid-cols-3 max-w-sm gap-6 border-t border-base-line pt-6">

            <div>
              <dt className="text-ink-muted text-xs">CGPA</dt>
              <dd className="font-display text-xl text-ink mt-1">8.63</dd>
            </div>

            <div>
              <dt className="text-ink-muted text-xs">Projects</dt>
              <dd className="font-display text-xl text-ink mt-1">4+</dd>
            </div>

            <div>
              <dt className="text-ink-muted text-xs">Internships</dt>
              <dd className="font-display text-xl text-ink mt-1">2+</dd>
            </div>

          </dl>
        </div>

        {/* Profile Image */}
        <div className="relative mx-auto md:mx-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-base-line bg-base-panel">

            <img
              src="/images/profile.jpg"
              alt="Portrait of Gejalakshmi M"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />

            <div
              className="w-full h-full hidden items-center justify-center text-center px-6"
              style={{ display: 'none' }}
            >
              <p className="text-ink-faint text-sm font-mono">
                Add your photo at
                <br />
                <span className="text-signal">
                  /public/images/profile.jpg
                </span>
              </p>
            </div>

          </div>

          <div className="absolute -bottom-5 -left-5 w-full h-full rounded-2xl border border-violet/40 -z-10" />
        </div>

      </div>
    </section>
  )
}
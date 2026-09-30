import { useState } from 'react'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || 'a visitor'}`
    )

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )

    window.location.href =
      `mailto:gejam2022@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 border-t border-base-line">
      <div className="container-x grid md:grid-cols-[0.4fr_0.6fr] gap-10">

        {/* Contact Information */}
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-3">
            Let's Connect
          </h2>

          <p className="text-ink-muted max-w-sm mb-8 leading-relaxed">
            I’m open to entry-level opportunities and internships in
            Data Analytics, Data Science, and AI/ML.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:gejam2022@gmail.com"
              className="flex items-center gap-2 text-sm text-ink hover:text-signal transition-colors"
              aria-label="Email Gejalakshmi"
            >
              gejam2022@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/gejalakshmi-murugan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink hover:text-signal transition-colors"
              aria-label="LinkedIn profile"
            >
              linkedin.com/in/gejalakshmi-murugan
            </a>

            <a
              href="https://github.com/Gejalakshmi02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink hover:text-signal transition-colors"
              aria-label="GitHub profile"
            >
              github.com/Gejalakshmi02
            </a>
          </div>
        </Reveal>

        {/* Contact Form */}
        <Reveal delay={80}>
          <form
            onSubmit={handleSubmit}
            className="max-w-xl space-y-4"
            aria-label="Contact form"
          >
            <div className="grid sm:grid-cols-2 gap-4">

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-ink-muted mb-1.5"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-md bg-base-panel border border-base-line text-ink text-sm placeholder:text-ink-faint focus:border-signal outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-ink-muted mb-1.5"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-3.5 py-2.5 rounded-md bg-base-panel border border-base-line text-ink text-sm placeholder:text-ink-faint focus:border-signal outline-none transition-colors"
                />
              </div>

            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs text-ink-muted mb-1.5"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-3.5 py-2.5 rounded-md bg-base-panel border border-base-line text-ink text-sm placeholder:text-ink-faint focus:border-signal outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-3 rounded-md bg-signal text-base font-medium text-sm hover:bg-signal-soft transition-colors"
            >
              Send Message
            </button>

            <p className="text-xs text-ink-faint pt-1">
              Your email app will open with the message already filled in.
            </p>
          </form>
        </Reveal>

      </div>
    </section>
  )
}
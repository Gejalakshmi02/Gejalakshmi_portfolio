import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications'},
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    setOpen(false)

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-base/90 backdrop-blur-md border-b border-base-line'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-x flex items-center justify-between h-16"
        aria-label="Primary"
      >
        {/* Logo / Name */}
        <button
          onClick={() => goTo('hero')}
          className="font-display font-semibold text-lg tracking-tight text-ink hover:text-signal transition-colors"
          aria-label="Go to top"
        >
          Gejalakshmi Murugan<span className="text-signal"></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goTo(link.id)}
                className={`px-3.5 py-2 rounded-md text-sm transition-colors ${
                  active === link.id
                    ? 'text-signal'
                    : 'text-ink-muted hover:text-ink'
                }`}
                aria-current={
                  active === link.id ? 'true' : undefined
                }
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me */}
        <button
          onClick={() => goTo('contact')}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-md border border-base-line text-sm text-ink hover:border-signal hover:text-signal transition-colors"
        >
          Let's Connect
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            {open ? (
              <path
                d="M5 5L17 17M17 5L5 17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M3 6H19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M3 11H19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M3 16H19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-base border-t border-base-line">
          <ul className="container-x py-3 flex flex-col">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => goTo(link.id)}
                  className={`block w-full text-left py-3 text-base border-b border-base-line/60 ${
                    active === link.id
                      ? 'text-signal'
                      : 'text-ink-muted'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => goTo('contact')}
                className="w-full text-left py-3 text-base text-signal font-medium"
              >
                Let's Connect
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
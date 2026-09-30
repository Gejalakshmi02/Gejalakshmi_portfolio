import { useState } from 'react'
import { categories, projects } from '../data/projects'
import Reveal from './Reveal'

function ProjectCard({ project }) {
  const accentClass =
    project.accent === 'violet'
      ? 'hover:border-violet/50'
      : 'hover:border-signal/50'

  const dotClass =
    project.accent === 'violet'
      ? 'bg-violet'
      : 'bg-signal'

  const isDirectRepo =
    project.github &&
    project.github !== 'https://github.com/Gejalakshmi02'

  return (
    <div
      className={`group h-full flex flex-col rounded-xl bg-base-panel border border-base-line ${accentClass} transition-colors p-6`}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />

        <span className="font-mono text-xs text-ink-faint">
          {project.category}
        </span>
      </div>

      <h3 className="font-display text-lg text-ink font-medium mb-2">
        {project.title}
      </h3>

      <p className="text-ink-muted text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <ul className="space-y-1.5 mb-5">
        {project.features.slice(0, 4).map((feature) => (
          <li
            key={feature}
            className="text-ink-muted text-xs leading-relaxed flex gap-2"
          >
            <span className="text-ink-faint mt-1.5 w-1 h-1 rounded-full bg-ink-faint shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
        {project.tech.map((technology) => (
          <span
            key={technology}
            className="font-mono text-[11px] px-2 py-0.5 rounded bg-base-panel2 text-ink-faint border border-base-line"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-base-line">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink hover:text-signal transition-colors"
          >
            {isDirectRepo ? 'GitHub Repository' : 'GitHub Profile'}
          </a>
        )}

        {project.demo && (
          <>
            <span className="text-ink-faint text-sm">·</span>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-signal transition-colors"
            >
              Live Demo
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(filter))

  return (
    <section id="projects" className="py-24 border-t border-base-line">
      <div className="container-x">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-2">
            Featured Projects
          </h2>

          <p className="text-ink-muted mb-10 max-w-lg">
            Practical projects covering data analytics, machine learning,
            web applications, and IoT.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3.5 py-1.5 rounded-md text-sm border transition-colors ${
                  filter === category
                    ? 'bg-signal text-base border-signal font-medium'
                    : 'border-base-line text-ink-muted hover:text-ink hover:border-ink-faint'
                }`}
                aria-pressed={filter === category}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 transition-all duration-300">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={index * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-ink-muted text-sm mt-6">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}
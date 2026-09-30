import Reveal from './Reveal'

const EXPERIENCE = [
  {
    org: 'QSpiders - Software Testing Training Institute',
    role: 'Data Science Intern',
    period: 'Feb 2026 – Sep 2026',
    points: [
      'Worked with Python for data analysis and practical Data Science tasks.',
      'Performed data preprocessing, cleaning, and exploratory data analysis on datasets.',
      'Used SQL and Python to solve data-related problems and extract insights.',
      'Created visualizations to understand patterns and trends in data.',
    ],
  },
  {
    org: 'Cybernaut Ed-Tech',
    role: 'Student Internship',
    period: 'Sep 2025 – Mar 2026',
    points: [
      'Worked on Python programming and practical data-related tasks.',
      'Practiced data preprocessing, analysis, and visualization using Python.',
      'Applied programming and data analysis concepts to practical exercises.',
    ],
  },
  {
    org: 'Yellowmatics.AI',
    role: 'Machine Learning Intern',
    period: 'Sep 2025 – Oct 2025',
    points: [
      'Wrote clean and reusable Python code for data preprocessing and feature engineering.',
      'Worked with real-world datasets for predictive model development.',
      'Debugged and optimized scripts for model development and data processing.',
      'Collaborated with a team using Git and followed structured coding practices.',
    ],
  },
  {
    org: 'Cybernaut Ed-Tech',
    role: 'Software Intern',
    period: 'Apr 2024 – Nov 2024',
    points: [
      'Developed Python applications using object-oriented programming concepts.',
      'Built Flask-based web applications with backend routing and dataset integration.',
      'Worked on web scraping to collect and structure data from external sources.',
      'Contributed to a full-stack Technical Job Portal with backend and frontend integration.',
      'Participated in troubleshooting and testing to improve application reliability.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-base-line">
      <div className="container-x">

        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-12">
            Experience
          </h2>
        </Reveal>

        <div className="max-w-2xl">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={`${exp.org}-${exp.role}`} delay={i * 100}>
              <div className="relative pl-8 pb-12 last:pb-0 border-l border-base-line last:border-transparent">

                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-signal" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-display text-lg text-ink font-medium">
                    {exp.org}
                  </h3>

                  <span className="font-mono text-xs text-ink-faint">
                    {exp.period}
                  </span>
                </div>

                <p className="text-signal text-sm mb-3">
                  {exp.role}
                </p>

                <ul className="space-y-1.5">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="text-ink-muted text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-ink-faint mt-2 w-1 h-1 rounded-full bg-ink-faint shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
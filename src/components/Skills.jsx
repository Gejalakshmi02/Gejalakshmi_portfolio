import Reveal from './Reveal'

const SKILL_GROUPS = [
  {
    title: 'Programming',
    items: ['Python', 'Java'],
  },
  {
    title: 'Data Analytics',
    items: ['SQL', 'SQL*Plus', 'Excel', 'Pandas', 'NumPy'],
  },
  {
    title: 'BI & Visualization',
    items: ['Power BI', 'Power Query', 'DAX', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Machine Learning',
    items: [
      'Scikit-learn',
      'Regression',
      'Classification',
      'Feature Engineering',
      'Preprocessing',
      'Pipelines',
    ],
  },
  {
    title: 'Web & APIs',
    items: ['Flask', 'REST APIs', 'HTML', 'CSS'],
  },
  {
    title: 'Data Platforms',
    items: ['Snowflake'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-base-line">
      <div className="container-x">

        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-2">
            Skills
          </h2>

          <p className="text-ink-muted mb-12 max-w-lg">
            Technologies and tools I use for data analysis, visualization,
            machine learning, and application development.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <div className="h-full p-5 rounded-xl bg-base-panel border border-base-line hover:border-signal/50 transition-colors">

                <h3 className="text-ink text-sm font-medium mb-3">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-base-panel2 text-ink-muted border border-base-line"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
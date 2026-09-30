import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-base-line">
      <div className="container-x grid md:grid-cols-[0.4fr_0.6fr] gap-10">
        
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
            About
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="text-ink-muted leading-relaxed space-y-4 max-w-2xl">
            
            <p>
              I'm a B.Tech Artificial Intelligence &amp; Data Science graduate
              from Mahendra Engineering College, Anna University, with a CGPA
              of 8.63. I’m interested in Data Analytics, Data Science, and
              AI/ML, with hands-on experience in Python, SQL, Power BI, and
              machine learning.
            </p>

            <p>
              I enjoy working with real-world data — cleaning and preprocessing
              datasets, exploring patterns, building machine learning models,
              and creating dashboards that turn data into useful insights.
              I have also built Flask-based applications that connect data
              and machine learning solutions with simple web interfaces.
            </p>

            <p>
              I’m currently looking for an entry-level opportunity where I can
              apply my technical skills, work on real-world problems, and
              continue improving through practical projects and collaboration.
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  )
}
import Reveal from './Reveal'

const CERTIFICATIONS = [
  {
    title: 'Data Analytics and Visualization Job Simulation',
    issuer: 'Accenture North America · Forage',
    issued: 'Nov 2024',
    credential: 'MdNq7ag3urT3JLdvE',
  },
  {
    title: 'Building Data Lakes on AWS',
    issuer: 'Coursera',
    issued: 'Nov 2024',
    credential: 'ATZ4RJW7B20W',
  },
  {
    title: 'AWS Cloud Solutions Architect Specialization',
    issuer: 'Coursera',
    issued: 'Nov 2024',
    credential: 'OWU2INUAEM68',
  },
  {
    title: 'Exam Prep: AWS Certified Solutions Architect – Associate',
    issuer: 'Coursera',
    issued: 'Nov 2024',
    credential: '2USSRY44E8F6',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-base-line">
      <div className="container-x">
        <Reveal>
          <div className="mb-10">


            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
              Certifications & Learning
            </h2>

            <p className="text-ink-muted mt-3 max-w-2xl">
              Certifications and professional learning completed in data
              analytics, cloud computing, and software development.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal key={cert.credential} delay={index * 80}>
              <div className="h-full p-6 rounded-xl bg-base-panel border border-base-line hover:border-violet/40 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-violet mt-2">
                      {cert.issuer}
                    </p>
                  </div>

                  <span className="text-xs text-ink-muted whitespace-nowrap">
                    {cert.issued}
                  </span>
                </div>

                <div className="mt-5 pt-4 border-t border-base-line">
                  <p className="text-xs text-ink-muted">
                    Credential ID
                  </p>

                  <p className="text-sm text-ink-muted mt-1 break-all">
                    {cert.credential}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
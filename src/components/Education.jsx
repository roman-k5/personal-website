import { education, honors } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="My formal education and the achievements earned along the way."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-2xl border border-white/10 bg-surface-card p-8 md:p-10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {edu.institution}
                    </h3>
                    <p className="mt-1 text-lg text-accent">{edu.degree}</p>
                    {edu.location && (
                      <p className="mt-1 text-sm text-muted">{edu.location}</p>
                    )}
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-light">
                    {edu.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-3">
                  {edu.achievements.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-0.5 text-warm">🏆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-surface-card p-8">
              <h3 className="font-display text-lg font-semibold text-white">
                Honors & Awards
              </h3>
              <ul className="mt-6 space-y-4">
                {honors.map((honor) => (
                  <li
                    key={honor}
                    className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-text"
                  >
                    {honor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

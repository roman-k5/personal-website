import { topSkills, programmingLanguages } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title="Technologies & Expertise"
          description="Core competencies I've developed through coursework, certifications, and hands-on projects."
        />

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {topSkills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-surface-card p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="text-4xl">{skill.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{skill.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-6 font-display text-xl font-semibold text-white">
            Programming Languages
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {programmingLanguages.map((lang) => (
              <div
                key={lang.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card p-6 transition-all hover:border-accent/25"
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-30"
                  style={{ backgroundColor: lang.color }}
                />
                <div className="relative flex items-start gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${lang.color}, ${lang.accent})`,
                    }}
                  >
                    {lang.name.slice(0, 2)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-lg font-semibold text-white">
                      {lang.name}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {lang.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {lang.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="rounded-lg border border-accent/15 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent-light"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

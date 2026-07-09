import { experience } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/5 bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="Work & Internships"
          description="Professional roles and hands-on industry experience."
        />

        {experience.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-white/15 bg-surface-card/50 p-12 text-center">
            <span className="text-4xl">💼</span>
            <p className="mt-4 font-display text-lg font-semibold text-white">
              Experience details coming soon
            </p>
            <p className="mt-2 text-sm text-muted">
              This section will be updated once work or internship details are added.
            </p>
          </div>
        ) : (
          <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-accent/30 md:before:left-8">
            {experience.map((job) => (
              <div key={`${job.company}-${job.period}`} className="relative pl-12 md:pl-20">
                <span className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-accent bg-surface-alt md:left-6.5" />
                <div className="rounded-2xl border border-white/10 bg-surface-card p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-accent">{job.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-muted">
                      {job.period}
                    </span>
                  </div>
                  {job.description && (
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {job.description}
                    </p>
                  )}
                  {job.highlights?.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-accent">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

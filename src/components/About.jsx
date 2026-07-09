import { aboutContent } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About Me"
          title="Who I Am & What Drives Me"
          description="Get to know the person behind the code — my story, passions, and what I'm working toward."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
              <p>{aboutContent.intro}</p>
              <p>{aboutContent.story}</p>
              <p>{aboutContent.focus}</p>
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={() =>
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-light"
              >
                Explore my skills
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-surface-card p-8">
              <h3 className="mb-6 font-display text-lg font-semibold text-white">
                Highlights
              </h3>
              <ul className="space-y-4">
                {aboutContent.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs text-accent">
                      ✓
                    </span>
                    <span className="text-sm text-text">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="mb-4 font-display text-lg font-semibold text-white">
                  Quick Facts
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">Status</dt>
                    <dd className="font-medium text-text">CS Student</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">University</dt>
                    <dd className="font-medium text-text">Taylor&apos;s University</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Focus Areas</dt>
                    <dd className="font-medium text-text">AI, ML, Mobile</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Languages</dt>
                    <dd className="font-medium text-text">Python, Dart</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

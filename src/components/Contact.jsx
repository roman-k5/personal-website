import { personalInfo } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Have a project in mind, an opportunity to discuss, or just want to say hello? I'd love to hear from you."
        />

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-surface-card p-8 md:p-12">
            <p className="text-center text-base leading-relaxed text-muted">
              I&apos;m currently open to internships, collaborations, and interesting
              project opportunities in mobile development, AI/ML, and cloud computing.
              The best way to reach me is via email or LinkedIn.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-dark px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-dark/30 transition-all hover:bg-accent"
              >
                <span>✉</span> Send Email
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-accent/50 hover:bg-accent/10"
              >
                <span>🔗</span> Connect on LinkedIn
              </a>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8 text-center">
              <p className="text-sm text-muted">{personalInfo.location}</p>
              <p className="mt-1 text-sm text-muted">{personalInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

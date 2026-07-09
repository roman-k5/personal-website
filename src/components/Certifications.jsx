import { certifications } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-white/5 bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Certifications"
          title="Professional Credentials"
          description="Certifications that validate my skills in mobile development, cloud, and NLP."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group rounded-2xl border border-white/10 bg-surface-card p-8 transition-all hover:border-warm/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-warm/15 text-2xl">
                📜
              </div>
              <h3 className="font-display text-base font-semibold leading-snug text-white">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

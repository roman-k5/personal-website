import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          description="A selection of projects showcasing mobile development, AI/ML, and algorithmic problem-solving."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card p-8 transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              <span className="absolute right-6 top-6 font-mono text-xs text-muted/50">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-4xl">{project.icon}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

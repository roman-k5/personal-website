import { personalInfo } from '../data/portfolio'

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent-dark/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-warm/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="animate-fade-up max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Welcome to my portfolio
          </p>

          <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl">
            Hi, I&apos;m{' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="mt-2 text-xl font-medium text-accent-light md:text-2xl">
            {personalInfo.title}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {personalInfo.tagline}. Based in {personalInfo.location.split(',')[0]},
            I&apos;m a Computer Science student passionate about{' '}
            <span className="text-text">Flutter mobile development</span>,{' '}
            <span className="text-text">machine learning</span>, and building
            software that solves real problems — from habit tracking apps to sign
            language recognition systems.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted/80">
            Scroll down to explore my skills, projects, and academic journey. Whether
            you&apos;re a recruiter, collaborator, or fellow developer — I&apos;d love
            for you to get to know me better.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo('about')}
              className="rounded-xl bg-accent-dark px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-dark/30 transition-all hover:bg-accent hover:shadow-accent/40"
            >
              Learn About Me
            </button>
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent/10"
            >
              View My Projects
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <span>✉</span> {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <span>🔗</span> linkedin.com/in/{personalInfo.linkedinHandle}
            </a>
            <span className="flex items-center gap-2">
              <span>📍</span> {personalInfo.location}
            </span>
          </div>
        </div>

      </div>

      <button
        type="button"
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}

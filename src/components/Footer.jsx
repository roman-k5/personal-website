import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
        <p>
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-muted/70">
          Built with React & Vite
        </p>
      </div>
    </footer>
  )
}

export default function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
        {label}
      </span>
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

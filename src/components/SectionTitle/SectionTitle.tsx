import React from 'react'

const SectionTitle: React.FC<{
  className?: string
  kicker?: string
  title: string
  subtitle?: string
}> = ({ className, kicker, title, subtitle }) => (
  <div className={`mx-auto max-w-3xl text-center ${className}`}>
    {kicker && (
      <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {kicker}
      </div>
    )}

    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>

    {subtitle && (
      <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>
    )}
  </div>
)

export default SectionTitle

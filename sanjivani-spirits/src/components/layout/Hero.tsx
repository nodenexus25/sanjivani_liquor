import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface HeroProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  ctaPrimary?: { label: string; to: string }
  ctaSecondary?: { label: string; to: string }
  kicker?: ReactNode
  variant?: 'dark' | 'light'
  imagePrompt?: string
}

function Hero({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  kicker,
  variant = 'light',
  imagePrompt,
}: HeroProps) {
  const prompt =
    imagePrompt ||
    'Premium editorial photo of a modern Indian distillery at golden hour, stainless steel distillation columns backlit by warm sunset, aged copper pot stills in foreground, shallow depth of field, cinematic warm amber grading, distillery plant in Maharashtra, 16:9 ultra wide composition'

  const textClass = variant === 'dark' ? 'text-stone-50' : 'text-[color:var(--ink)]'
  const subClass = variant === 'dark' ? 'text-stone-200/90' : 'text-stone-700'
  const scrimClass = variant === 'dark' ? 'scrim-dark' : 'scrim-light'
  const statLabel = variant === 'dark' ? 'text-stone-400' : 'text-stone-500'
  const statBorder = variant === 'dark' ? 'border-stone-100/10' : 'border-amber-900/15'

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden grain pt-32">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
              prompt
            )}&image_size=landscape_16_9")
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className={scrimClass} />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="container relative pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className={kicker ? 'lg:col-span-8' : 'lg:col-span-10 xl:col-span-8'}>
            <div className={`fade-in section-label ${variant === 'light' ? '' : ''}`}>
              {eyebrow}
            </div>
            <h1
              className={`display-title fade-in fade-in-delay-1 mt-2 !tracking-tight ${textClass}`}
              style={variant === 'light' ? { color: 'var(--ink)' } : {}}
            >
              {title}
            </h1>
            {subtitle && (
              <p className={`prose-body fade-in fade-in-delay-2 mt-8 !max-w-2xl ${subClass}`}>
                {subtitle}
              </p>
            )}
            {(ctaPrimary || ctaSecondary) && (
              <div className="flex flex-wrap gap-3 fade-in fade-in-delay-3 mt-10">
                {ctaPrimary && (
                  <Link to={ctaPrimary.to} className="btn btn-primary btn-arrow">
                    {ctaPrimary.label}
                  </Link>
                )}
                {ctaSecondary && (
                  <Link to={ctaSecondary.to} className="btn btn-ghost btn-arrow">
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {kicker && <div className="lg:col-span-4 fade-in fade-in-delay-4">{kicker}</div>}
        </div>

        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 fade-in fade-in-delay-5`}>
          {[
            { n: '64', l: 'Years Of Trust' },
            { n: '4', l: 'Core Pillars' },
            { n: '6', l: 'Popular Spirits' },
            { n: '∞', l: 'Community First' },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`relative pl-5 border-l ${statBorder} hover:border-[color:var(--brand-gold)]/60 transition-colors`}
              style={{ animationDelay: `${0.7 + i * 0.08}s` }}
            >
              <div className="font-serif text-4xl md:text-5xl font-light text-gradient-gold leading-none">
                {s.n}
              </div>
              <div className={`mt-2 text-[11px] uppercase tracking-[0.2em] font-semibold ${statLabel}`}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

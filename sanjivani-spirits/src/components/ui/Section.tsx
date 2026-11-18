import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: ReactNode
  subtitle?: ReactNode
  children: ReactNode
  className?: string
  align?: 'default' | 'center'
  containerClass?: string
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  align = 'default',
  containerClass = '',
}: SectionProps) {
  const hasHeader = eyebrow || title || subtitle
  return (
    <section id={id} className={`relative ${className}`} style={{ padding: 'var(--section-pad) 0' }}>
      <div className={`container ${containerClass}`}>
        {hasHeader && (
          <div
            className={`mb-14 lg:mb-20 max-w-4xl ${
              align === 'center' ? 'mx-auto text-center' : ''
            }`}
          >
            {eyebrow && (
              <div className={`section-label ${align === 'center' ? 'justify-center' : ''}`}>
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="section-title mt-2" style={align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}}>
                {title}
              </h2>
            )}
            {subtitle && (
              <div
                className={`prose-body mt-7 ${align === 'center' ? 'mx-auto' : ''}`}
                style={align === 'center' ? { maxWidth: '58ch' } : {}}
              >
                {subtitle}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section

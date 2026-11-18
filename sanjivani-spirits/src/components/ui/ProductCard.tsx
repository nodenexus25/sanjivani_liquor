interface ProductCardProps {
  name: string
  tagline: string
  category: string
  positioning: string
  flavour: string
  appeal: string
  formats: string[]
  description: string
  gradient: string
  isFlagship?: boolean
  isMostLoved?: boolean
  index?: number
  minimal?: boolean
}

function ProductCard({
  name,
  tagline,
  category,
  positioning,
  flavour,
  appeal,
  formats,
  description,
  gradient,
  isFlagship,
  isMostLoved,
  index = 0,
  minimal = false,
}: ProductCardProps) {
  const catLabel =
    category === 'orange' ? 'Orange · Santra' : category === 'spice' ? 'Spice · Saunf' : 'Citrus · Punch'
  const catColor =
    category === 'orange'
      ? 'bg-orange-500/12 text-orange-800 border-orange-500/30'
      : category === 'spice'
      ? 'bg-emerald-500/12 text-emerald-800 border-emerald-500/30'
      : 'bg-lime-500/12 text-lime-800 border-lime-500/30'

  const bottlePrompt = encodeURIComponent(
    `Premium product photography of a premium Indian country liquor bottle, ${name} ${tagline}, amber glass with elegant ${category === 'spice' ? 'emerald green' : category === 'citrus' ? 'lime yellow' : 'rich orange gold'} accents, clean white background with soft warm studio lighting, high end editorial commercial photography, 4:5 portrait composition, crisp focus on the bottle with soft bokeh background`
  )

  return (
    <article
      className="group relative rounded-[var(--radius)] border border-amber-900/10 bg-white overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:border-[color:var(--brand-gold)]/40 hover:shadow-[0_30px_80px_-20px_rgba(138,84,25,0.18)]"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {(isFlagship || isMostLoved) && (
        <div className="absolute top-5 left-5 z-20">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border backdrop-blur-md ${
              isFlagship
                ? 'bg-[color:var(--brand-gold)]/12 text-[color:var(--brand-copper)] border-[color:var(--brand-gold)]/35'
                : 'bg-rose-500/12 text-rose-800 border-rose-500/30'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {isFlagship ? 'Flagship' : 'Most Loved'}
          </span>
        </div>
      )}

      <div
        className={`relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/40 via-transparent to-transparent z-10 pointer-events-none" />
        <img
          src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${bottlePrompt}&image_size=portrait_4_3`}
          alt={`${name} bottle`}
          className="absolute inset-0 w-full h-full object-cover mix-blend-normal opacity-100 group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-5 z-20 px-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className={`inline-block rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] mb-2 text-white/90 backdrop-blur-sm bg-black/20 border-white/15 ${catColor}`}>
                {catLabel}
              </div>
              <div className="font-serif text-3xl font-medium text-white leading-none drop-shadow-lg">
                {name}
              </div>
            </div>
          </div>
        </div>
      </div>

      {!minimal && (
        <div className="p-7 lg:p-8 bg-white">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="eyebrow !text-[10px]">{tagline}</div>
              <p className="text-[13px] text-stone-500 italic mt-2">"{positioning}"</p>
            </div>
          </div>

          <p className="text-[14.5px] leading-relaxed text-stone-800 mb-6">{description}</p>

          <div className="space-y-4 pt-5 border-t border-amber-900/10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2">
              Flavour Profile
            </div>
            <p className="text-[13.5px] leading-relaxed text-stone-800">{flavour}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2">
                Consumer Appeal
              </div>
              <p className="text-[13.5px] leading-relaxed text-stone-800">{appeal}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2.5">
                Available Packs
              </div>
              <div className="flex flex-wrap gap-2">
                {formats.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center rounded-full border border-amber-900/15 bg-[color:var(--cream-50)] px-3 py-1.5 text-[11.5px] font-medium text-stone-800"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default ProductCard

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import ProductCard from '../components/ui/ProductCard'
import { products, flavourFamilies, portfolioStats } from '../data/products'

function Products() {
  const [activeFamily, setActiveFamily] = useState<string>('all')

  const filtered =
    activeFamily === 'all'
      ? products
      : activeFamily === 'orange'
      ? products.filter((p) => p.category === 'orange')
      : activeFamily === 'spice'
      ? products.filter((p) => p.category === 'spice')
      : products.filter((p) => p.category === 'citrus')

  return (
    <>
      <section className="relative min-h-[85svh] flex items-end overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(255,251,240,0.55) 0%, rgba(255,251,240,0.78) 45%, rgba(255,251,240,0.96) 100%),
              linear-gradient(90deg, rgba(255,251,240,0.92) 0%, rgba(255,251,240,0.6) 55%, rgba(255,251,240,0.2) 100%),
              url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                'Premium product lineup of six Indian country liquor bottles arranged artistically on a warm cream marble surface, amber glass bottles with orange green and gold accents, soft diffused side lighting, shallow depth of field, high end commercial product photography, bright elegant background, 16:9'
              )}&image_size=landscape_16_9")
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative pb-20">
          <div className="max-w-5xl">
            <div className="section-label fade-in">Products · Six Popular Spirits</div>
            <h1 className="display-title fade-in fade-in-delay-1 mt-2">
              One <em>Distinctly Local</em>
              <br />
              <em>Portfolio.</em>
            </h1>
            <p className="prose-body fade-in fade-in-delay-2 mt-8 !text-[color:var(--ink)] !max-w-3xl">
              From orange-led favourites to saunf-forward classics and punchy citrus blends, this range is
              shaped around familiar taste cues that consumers already love and repeatedly ask for. Each SKU is
              designed for recognisable flavour, dependable quality, and practical pack sizes that work across
              everyday retail demand.
            </p>
            <div className="flex flex-wrap gap-3 fade-in fade-in-delay-3 mt-10">
              <a href="#range" className="btn btn-primary btn-arrow">View Products</a>
              <a href="#packaging" className="btn btn-ghost btn-arrow">See Sizes</a>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Archive Line-up"
        title={
          <>
            Six signature spirits. <em>Three flavour families.</em> One clear retail story.
          </>
        }
        align="center"
      >
        <div className="relative rounded-[var(--radius)] overflow-hidden aspect-[21/9] border border-amber-900/10 mb-16 group">
          <img
            src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
              'Ultra wide premium product group photo of a curated lineup of Indian country liquor bottles — Bobby Santra, Zingat Santra, Bobby Saunf, Sanjivani Punch, Sanjivani Santra, Premium Santra — arranged on light cream travertine table, amber and emerald glass, soft bright studio lighting, editorial commercial photography, 21:9 cinematic panorama'
            )}&image_size=landscape_16_9`}
            alt="Archive bottle line-up"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1500ms] ease-out"
          />
          <div className="scrim-dark" />
          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 text-center">
            <div className="eyebrow mb-3 text-stone-100/80">Archive Bottle Line-up</div>
            <h3 className="font-serif text-3xl lg:text-5xl text-stone-50">
              Signature Expressions
            </h3>
          </div>
        </div>
      </Section>

      <Section
        id="range"
        eyebrow="Filter · Flavour Family"
        title={
          <>
            Signature <em>Expressions.</em>
          </>
        }
        subtitle="The range balances strong flavour recognition with differentiated brand personalities, giving retailers and consumers clear choices without making the portfolio feel crowded."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {portfolioStats.map((s, i) => (
            <div
              key={i}
              className="relative pl-4 border-l border-amber-900/10"
            >
              <div className="font-serif text-4xl font-light text-gradient-gold leading-none">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-stone-600 font-semibold leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {[
            { k: 'all', label: 'All Spirits (6)' },
            { k: 'orange', label: 'Orange Family (4)' },
            { k: 'spice', label: 'Spice Family (1)' },
            { k: 'citrus', label: 'Citrus Twist (1)' },
          ].map((f) => (
            <button
              key={f.k}
              onClick={() => setActiveFamily(f.k)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] border transition-all duration-300 ${
                activeFamily === f.k
                  ? 'bg-gradient-to-r from-[color:var(--brand-gold)] to-[color:var(--brand-copper)] text-stone-950 border-transparent'
                  : 'bg-transparent text-stone-700 border-amber-900/10 hover:border-[color:var(--brand-gold)]/40 hover:text-[color:var(--brand-copper)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} {...p} index={i} />
          ))}
        </div>
      </Section>

      <div className="relative overflow-hidden border-y border-amber-900/10">
        <Section
          eyebrow="Range Story"
          title={
            <>
              Built Around <em>Familiar Taste Cues.</em>
            </>
          }
          subtitle="The portfolio is easy to understand because each label sits clearly within a flavour family consumers already know: orange-led Santra, spice-forward Saunf, and tangy Punch. This creates a simple path for trial, repeat purchase, and shelf navigation."
        >
          <div className="grid md:grid-cols-3 gap-6">
            {flavourFamilies.map((f) => (
              <div
                key={f.name}
                className="group relative rounded-[var(--radius)] border border-amber-900/10 bg-gradient-to-br from-white to-[color:var(--cream-100)] p-8 overflow-hidden hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${f.accent}`} />
                <h3 className="font-serif text-3xl text-[color:var(--ink)] mb-4 mt-1">{f.name}</h3>
                <div className="divider-gold mb-5" />
                <p className="text-[14.5px] leading-relaxed text-stone-700 mb-5">{f.description}</p>
                <div className="flex flex-wrap gap-2">
                  {f.members.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-amber-900/10 bg-[color:var(--cream-50)] px-3 py-1.5 text-[12px] text-[color:var(--ink)] font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--radius)] border border-amber-900/10 bg-gradient-to-r from-white via-[color:var(--cream-50)] to-white p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-10">
                <div className="eyebrow mb-2">Format Convenience</div>
                <h3 className="font-serif text-2xl lg:text-3xl text-[color:var(--ink)] leading-snug">
                  Compact pack sizes keep the range <span className="text-gradient-gold italic">retail-friendly</span>,
                  while Bobby Santra extends reach further through both PET and 750ml options.
                </h3>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Section
        id="packaging"
        eyebrow="Packaging Matrix"
        title={
          <>
            Sizes And <em>Availability.</em>
          </>
        }
        subtitle="Format planning is straightforward, with most SKUs available in fast-moving glass packs and Bobby Santra offering the broadest spread for different retail situations."
      >
        <div className="overflow-x-auto rounded-[var(--radius)] border border-amber-900/10 bg-white">
          <table className="w-full min-w-[780px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-amber-900/10 bg-[color:var(--cream-50)]">
                <th className="text-left p-5 font-semibold text-stone-700 uppercase tracking-wider text-[11px]">
                  Product
                </th>
                <th className="p-5 font-semibold text-stone-700 uppercase tracking-wider text-[11px] text-center">
                  750ml
                </th>
                <th className="p-5 font-semibold text-stone-700 uppercase tracking-wider text-[11px] text-center">
                  180ml Glass
                </th>
                <th className="p-5 font-semibold text-stone-700 uppercase tracking-wider text-[11px] text-center">
                  180ml PET
                </th>
                <th className="p-5 font-semibold text-stone-700 uppercase tracking-wider text-[11px] text-center">
                  90ml Glass
                </th>
                <th className="p-5 font-semibold text-stone-700 uppercase tracking-wider text-[11px] text-center">
                  90ml PET
                </th>
                <th className="p-5 font-semibold text-stone-700 uppercase tracking-wider text-[11px] text-right">
                  Spread
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => {
                const formats = new Set(p.formats)
                const has = (f: string) => formats.has(f)
                const icons = {
                  '750ml': '750ml',
                  '180ml glass': '180ml Glass',
                  '180ml pet': '180ml PET',
                  '90ml glass': '90ml Glass',
                  '90ml pet': '90ml PET',
                }
                const spread = p.formats.length
                return (
                  <tr
                    key={p.id}
                    className={`${i % 2 ? 'bg-[color:var(--cream-50)]/50' : ''} border-b border-amber-900/10 last:border-0 hover:bg-[color:var(--brand-gold)]/5 transition-colors`}
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.gradient} opacity-80 shadow-lg`}
                        />
                        <div>
                          <div className="font-serif text-lg text-[color:var(--ink)] leading-tight">{p.name}</div>
                          <div className="text-[11px] uppercase tracking-[0.18em] text-stone-600 font-semibold mt-0.5">
                            {p.tagline}
                          </div>
                        </div>
                      </div>
                    </td>
                    {Object.keys(icons).map((k) => (
                      <td key={k} className="p-5 text-center">
                        {has(k) ? (
                          <span className="inline-flex w-8 h-8 rounded-full items-center justify-center bg-gradient-to-br from-[color:var(--brand-gold)] to-[color:var(--brand-copper)] text-stone-950 text-[14px] shadow-lg shadow-amber-700/20">
                            ✓
                          </span>
                        ) : (
                          <span className="inline-flex w-8 h-8 rounded-full items-center justify-center border border-amber-900/10 text-stone-500 text-[14px]">
                            —
                          </span>
                        )}
                      </td>
                    ))}
                    <td className="p-5 text-right">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-gold)]/30 bg-[color:var(--brand-gold)]/10 px-3 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[color:var(--brand-gold-soft)]">
                        {spread} / 5
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-amber-900/10">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                'Wide bottle archive shot featuring Bobby Santra Zingat Santra and Bobby Saunf arranged on a premium light cream travertine surface, amber glass bottles, soft bright diffused lighting, luxury editorial commercial photography, 16:9 composition'
              )}&image_size=landscape_16_9")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--paper)]/96 via-[color:var(--paper)]/90 to-[color:var(--paper)]" />
        </div>
        <div className="container relative" style={{ padding: 'var(--section-pad) 0' }}>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="section-label">Next</div>
              <h2 className="section-title mt-2">
                See The <em className="italic">Infrastructure</em> Behind The Portfolio.
              </h2>
              <p className="prose-body mt-6 !text-stone-700">
                Explore the systems, production capability, and operating backbone supporting these brands —
                from multi-pressure distillation to dispatch readiness.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end flex-wrap gap-3">
              <Link to="/infrastructure" className="btn btn-primary btn-arrow">Explore Infrastructure</Link>
              <Link to="/contact" className="btn btn-ghost btn-arrow">Dealer Enquiries</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products

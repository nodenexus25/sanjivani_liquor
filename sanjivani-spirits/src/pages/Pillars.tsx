import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import { pillars } from '../data/pillars'

function Pillars() {
  const iconPath = (k: string) => {
    switch (k) {
      case 'crown':
        return 'M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z'
      case 'leaf':
        return 'M20 4c-8 0-14 5-14 12a6 6 0 006 6c7 0 12-6 12-14 0-2-2-4-4-4zM12 22c0-5 3-9 8-10'
      case 'heart':
        return 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z'
      case 'community':
        return 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'
      default:
        return ''
    }
  }

  return (
    <>
      <section className="relative min-h-[80svh] flex items-end overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
              'Editorial cinematic photo of four hands joining together in a dark industrial boardroom table, golden rim lighting, symbolising four pillars of an Indian industrial group, warm tones, shallow depth of field, trust teamwork community concepts, 16:9'
            )}&image_size=landscape_16_9")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="scrim-light" />
        <div className="container relative pb-20">
          <div className="max-w-5xl">
            <div className="section-label fade-in">Core Pillars · 04 Pillars</div>
            <h1 className="display-title fade-in fade-in-delay-1 mt-2">
              What <em>Guides Us,</em>
              <br />
              Every <em>Single Day.</em>
            </h1>
            <p className="prose-body fade-in fade-in-delay-2 mt-8 !text-stone-700/90 !max-w-3xl">
              Four pillars balance market leadership, environmental care, people-first culture, and
              measurable social upliftment across every operation. They are not poster values — they are the
              filters every decision passes through.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="The Four Pillars"
        title={
          <>
            Balanced <em>market leadership,</em> environmental care, people-first culture, and measurable
            social upliftment.
          </>
        }
      >
        <div className="space-y-10 lg:space-y-16">
          {pillars.map((p, i) => {
            const reversed = i % 2
            return (
              <div
                key={p.id}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  reversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="lg:col-span-5">
                  <div
                    className={`relative rounded-[var(--radius)] overflow-hidden aspect-[4/5] lg:aspect-[5/6] border border-amber-900/10 group`}
                  >
                    <img
                      src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                        p.id === 'market-leadership'
                          ? 'Cinematic editorial photo of premium liquor bottles displayed on a wooden shelf in an Indian retail shop, warm ambient lighting, customers in soft focus background, commercial market leadership photography, 4:5'
                          : p.id === 'environmental-care'
                          ? 'Editorial photo of lush green sugarcane farm with modern sustainable distillery in the background, Maharashtra, golden sunset light, water recycling pipes, eco friendly industrial environment, cinematic photography, 4:5'
                          : p.id === 'people-first'
                          ? 'Editorial portrait of a diverse happy group of Indian factory workers standing in front of a modern distillery plant, smiling, golden hour, people first culture, warm honest photography, 4:5'
                          : 'Editorial photo of Indian village children being provided school supplies with factory workers and CSR volunteers, rural Maharashtra, hopeful expressions, social upliftment documentary photography, 4:5'
                      )}&image_size=portrait_4_3`}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                    />
                    <div className="scrim-dark" />
                    <div className="absolute top-6 left-6 font-serif text-7xl font-light text-gradient-gold opacity-80 leading-none">
                      {p.number}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <div className="w-12 h-12 rounded-2xl border border-[color:var(--brand-gold)]/25 bg-gradient-to-br from-[color:var(--brand-gold)]/15 to-transparent flex items-center justify-center mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--brand-gold-soft)]">
                          <path d={iconPath(p.icon)} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="section-label mb-4">Pillar {p.number} / 04</div>
                  <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] tracking-tight text-stone-800 mb-6">
                    {p.title}
                  </h2>
                  <div className="divider-gold mb-8" />
                  <p className="text-[17px] leading-relaxed text-stone-800 mb-7 !max-w-[55ch]">
                    {p.summary}
                  </p>
                  <div className="space-y-4">
                    {p.body.map((para, bi) => (
                      <div
                        key={bi}
                        className="flex gap-4 rounded-2xl border border-amber-900/10 bg-[color:var(--cream-50)] p-5 hover:border-[color:var(--brand-gold)]/20 transition-colors"
                      >
                        <div className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[color:var(--brand-gold)] to-[color:var(--brand-copper)] flex items-center justify-center text-stone-950 text-[12px] font-bold mt-0.5">
                          {bi + 1}
                        </div>
                        <p className="text-[14.5px] leading-relaxed text-stone-700">{para}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-amber-900/10">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                'Cinematic shot of a long curved modern Indian corporate office corridor with warm golden lighting and four pillars with subtle engraved text LEADERSHIP SUSTAINABILITY COMMUNITY GROWTH, editorial architectural photography, 16:9'
              )}&image_size=landscape_16_9")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--paper)]/96 via-[color:var(--paper)]/90 to-[color:var(--paper)]" />
        </div>
        <div className="container relative" style={{ padding: 'var(--section-pad) 0' }}>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="section-label">Explore Further</div>
              <h2 className="section-title mt-2">
                Pillars come alive in <em className="italic">our products, infrastructure, and community work.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end flex-wrap gap-3">
              <Link to="/products" className="btn btn-primary btn-arrow">Our Products</Link>
              <Link to="/social-responsibility" className="btn btn-ghost btn-arrow">Social Responsibility</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pillars

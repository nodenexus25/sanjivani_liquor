import { Link } from 'react-router-dom'
import Hero from '../components/layout/Hero'
import Section from '../components/ui/Section'
import ProductCard from '../components/ui/ProductCard'
import { products } from '../data/products'
import { pillars } from '../data/pillars'

const FEATURED_IDS = ['bobby-santra', 'sanjivani-premium-santra', 'bobby-saunf']

function Home() {
  const pillarIcon = (k: string) => {
    switch (k) {
      case 'crown': return 'M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z'
      case 'leaf': return 'M20 4c-8 0-14 5-14 12a6 6 0 006 6c7 0 12-6 12-14 0-2-2-4-4-4zM12 22c0-5 3-9 8-10'
      case 'heart': return 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z'
      case 'community': return 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'
      default: return ''
    }
  }

  const featuredProducts = products.filter((p) => FEATURED_IDS.includes(p.id))

  return (
    <>
      <Hero
        variant="light"
        eyebrow="Legacy · 64 Years In Kopargaon"
        title={
          <>
            Built In <em>Kopargaon.</em>
            <br />
            Trusted Across <em>Generations.</em>
          </>
        }
        subtitle="Six decades of disciplined manufacturing, rooted in Maharashtra. A flavour-led spirits portfolio trusted across generations — built on process discipline, community upliftment, and a consistent drinking experience."
        ctaPrimary={{ label: 'View Products', to: '/products' }}
        ctaSecondary={{ label: 'Our Story', to: '/about' }}
      />

      <Section
        eyebrow="Pillars — What Guides Us"
        title={
          <>
            Four pillars balance <em>market leadership,</em> environmental care,
            people-first culture, and measurable social upliftment.
          </>
        }
        subtitle="These aren't poster values — they're the filters every decision passes through, from distillation run to dealer relationship."
      >
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((p) => (
            <Link to="/pillars" key={p.id} className="card-premium p-8 lg:p-10 group">
              <div className="flex items-start justify-between gap-6 mb-7">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl border border-[color:var(--brand-gold)]/25 bg-gradient-to-br from-[color:var(--brand-gold-soft)]/15 to-transparent flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--brand-copper)]">
                      <path d={pillarIcon(p.icon)} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-stone-500 font-bold">
                      Pillar {p.number}
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-[color:var(--ink)] mt-1">{p.title}</h3>
                  </div>
                </div>
                <div className="font-serif text-5xl font-light leading-none opacity-50 text-gradient-gold">
                  {p.number}
                </div>
              </div>
              <p className="text-[15px] leading-relaxed text-stone-700 max-w-[42ch]">{p.summary}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-copper)] group-hover:gap-4 transition-all duration-300">
                Learn More <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <div className="relative overflow-hidden border-y border-amber-900/10 bg-[color:var(--cream-50)]/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,134,42,0.06),transparent_60%)] pointer-events-none" />
        <Section
          eyebrow="Signature Portfolio"
          title={
            <>
              Three flagship expressions that define our <em>flavour-led identity.</em>
            </>
          }
          subtitle="Bobby Santra — our flagship. Sanjivani Premium Santra — our most-loved. Bobby Saunf — our signature spice. Three distinct taste worlds, one promise of consistent quality."
          align="center"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((p, i) => (
              <ProductCard key={p.id} {...p} index={i} minimal />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/products" className="btn btn-primary btn-arrow">
              Explore Full Range
            </Link>
          </div>
        </Section>
      </div>

      <section className="relative overflow-hidden border-t border-amber-900/10">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                'Cinematic golden hour aerial shot of a Maharashtra rural sugarcane field landscape leading to a modern Indian distillery campus on the horizon, warm amber sunset light, long shadows, few birds, cinematic editorial aerial drone photography, 16:9 composition'
              )}&image_size=landscape_16_9")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink)]/65 via-[color:var(--ink)]/70 to-[color:var(--ink)]/88" />
        </div>
        <div className="container relative" style={{ padding: 'var(--section-pad) 0' }}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="section-label !text-white/80">64 Years · Kopargaon, Maharashtra</div>
              <h2 className="section-title !text-white mt-2">
                A <em className="italic text-gradient-gold">Kopargaon vision</em> that grew into a national portfolio.
              </h2>
              <p className="prose-body text-white/90 mt-8">
                Sixty-four years ago, a visionary chose to return home instead of building in Europe. That decision
                created institutions that still lift the community today — and a spirits portfolio powered by the
                same disciplined execution.
              </p>
              <p className="prose-body text-white/85 mt-5">
                From multi-pressure distillation to flavour-led consumer research, every bottle of Bobby Santra,
                Premium Santra, and Bobby Saunf carries forward a promise the group was founded on: quality that a
                community can trust, generation after generation.
              </p>
              <div className="flex flex-wrap gap-3 mt-10">
                <Link to="/about" className="btn bg-white text-[color:var(--ink)] hover:bg-[color:var(--brand-gold-soft)] border-white btn-arrow">Read Our Story</Link>
                <Link to="/infrastructure" className="btn !text-white border-white/40 hover:bg-white/10 hover:border-white/80 btn-arrow">See The Plant</Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <figure className="relative rounded-[var(--radius)] overflow-hidden aspect-[4/5] border border-amber-900/10 group shadow-[0_30px_80px_-24px_rgba(138,84,25,0.2)]">
                <img
                  src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                    'Editorial portrait of a modern Indian distillery blending hall interior, stainless steel vat rows, warm copper pipework, soft industrial lighting, Kopargaon Maharashtra, clean modern industrial architecture, golden hour through high windows, cinematic photography, 4:5 portrait'
                  )}&image_size=portrait_4_3`}
                  alt="Sanjivani Spirits distillery blending hall"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                />
                <div className="scrim-dark" />
                <figcaption className="absolute inset-x-0 bottom-0 p-8">
                  <div className="eyebrow text-[color:var(--brand-gold-soft)] mb-2">Blending Hall</div>
                  <div className="font-serif text-3xl text-white leading-tight">
                    Disciplined distillation. Consistent character.
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import {
  operationalHighlights,
  infrastructureGallery,
  valueChain,
  operationalPriorities,
  infrastructurePromises,
} from '../data/infrastructure'

function Infrastructure() {
  const valueChainIcon = (k: string) => {
    switch (k) {
      case 'brew':
        return 'M9 2v4M15 2v4M3 10h18l-2 10a2 2 0 01-2 2H7a2 2 0 01-2-2L3 10zM6 14h12M7 18h10'
      case 'package':
        return 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12'
      case 'brand':
        return 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
      case 'truck':
        return 'M1 3h15v13H1zM16 8h4l3 3v5h-7M5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'
      default:
        return ''
    }
  }

  return (
    <>
      <section className="relative min-h-[85svh] flex items-end overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(255,253,247,0.92) 0%, rgba(255,253,247,0.95) 50%, rgba(255,253,247,0.98) 100%),
              linear-gradient(90deg, rgba(255,253,247,0.95) 0%, rgba(255,253,247,0.7) 55%, rgba(255,253,247,0.3) 100%),
              url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                infrastructureGallery[11].prompt
              )}&image_size=landscape_16_9")
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative pb-20">
          <div className="max-w-5xl">
            <div className="section-label fade-in">Infrastructure · Kopargaon Plant</div>
            <h1 className="display-title fade-in fade-in-delay-1 mt-2">
              Built For <em>Consistency</em>
              <br />
              At <em>Scale.</em>
            </h1>
            <p className="prose-body fade-in fade-in-delay-2 mt-8 !text-[color:var(--ink)]/90 !max-w-3xl">
              From alcohol manufacturing and process control to packaging and dispatch readiness, our
              infrastructure is designed to keep quality steady, output dependable, and operations connected
              across the value chain.
            </p>
            <div className="flex flex-wrap gap-3 fade-in fade-in-delay-3 mt-10">
              <a href="#gallery" className="btn btn-primary btn-arrow">View Facility Gallery</a>
              <a href="#value-chain" className="btn btn-ghost btn-arrow">Explore Value Chain</a>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Operational Highlights"
        title={
          <>
            Modern <em>infrastructure</em> that supports every bottle we bring to market.
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {operationalHighlights.map((h) => (
            <div
              key={h.id}
              className="group relative rounded-[var(--radius)] border border-amber-900/10 bg-gradient-to-br from-white to-[color:var(--cream-100)] p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-[color:var(--brand-gold)]/30 hover:-translate-y-1"
            >
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-gradient-to-br from-[color:var(--brand-gold)]/20 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="font-serif text-5xl font-light text-gradient-gold leading-none mb-5 opacity-80">
                {h.number}
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-[color:var(--ink)] mb-3">{h.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-stone-700 max-w-[32ch]">{h.summary}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-amber-900/10 group"
                >
                  <img
                    src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                      infrastructureGallery[idx + 1].prompt
                    )}&image_size=square_hd`}
                    alt={infrastructureGallery[idx + 1].caption}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="scrim-dark" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[var(--radius)] border border-amber-900/10 bg-white p-7">
              <div className="eyebrow mb-3">Production Lens</div>
              <h3 className="font-serif text-2xl text-[color:var(--ink)] mb-3">Efficiency With Control</h3>
              <p className="text-[14.5px] leading-relaxed text-stone-700">
                End-to-end integration from distillation through bottling creates tight control points
                that keep every bottle within specification — batch after batch, year after year.
              </p>
            </div>
            <div className="rounded-[var(--radius)] border border-amber-900/10 bg-white p-7">
              <div className="eyebrow mb-3">Business Value</div>
              <h3 className="font-serif text-2xl text-[color:var(--ink)] mb-3">Quality-Led Supply</h3>
              <p className="text-[14.5px] leading-relaxed text-stone-700">
                Dependable infrastructure translates directly into retailer confidence — the right packs,
                the right flavours, in the right quantities, at the right time.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div id="value-chain" className="relative overflow-hidden border-y border-amber-900/10">
        <Section
          eyebrow="Value Chain"
          title={
            <>
              Present across the <em>spirits value chain.</em> A balanced business model.
            </>
          }
          subtitle="We also have a balanced business model that includes all segments of the spirits value chain, right from the manufacturing of alcohol to a diverse consumer portfolio. This integrated presence helps Sanjivani Spirits stay closely connected to both production realities and consumer demand."
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[color:var(--brand-gold)]/40 to-transparent pointer-events-none" />
            {valueChain.map((v, i) => (
              <div
                key={v.id}
                className="group relative rounded-[var(--radius)] border border-amber-900/10 bg-gradient-to-br from-white to-[color:var(--cream-100)] p-8 overflow-hidden transition-all duration-500 hover:border-[color:var(--brand-gold)]/30 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl border border-[color:var(--brand-gold)]/25 bg-gradient-to-br from-[color:var(--brand-gold)]/15 to-transparent flex items-center justify-center mb-6">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--brand-gold-soft)]">
                    <path d={valueChainIcon(v.icon)} />
                  </svg>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-stone-600 mb-4">
                  Stage 0{i + 1}
                </div>
                <h3 className="font-serif text-2xl text-[color:var(--ink)] mb-3">{v.title}</h3>
                <p className="text-[14px] leading-relaxed text-stone-700">{v.summary}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section
        eyebrow="Operational Priorities"
        title={
          <>
            What makes the facility <em>work day after day.</em>
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {operationalPriorities.map((op) => (
            <div
              key={op.id}
              className="group relative rounded-[var(--radius)] border border-amber-900/10 bg-gradient-to-br from-white to-[color:var(--cream-100)] p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-[color:var(--brand-gold)]/30"
            >
              <div className="flex items-start gap-6">
                <div className="font-serif text-6xl font-light text-gradient-gold leading-none opacity-80 shrink-0">
                  {op.number}
                </div>
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-[color:var(--ink)] mb-3">{op.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-stone-700">{op.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div id="gallery" className="relative overflow-hidden border-y border-amber-900/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--cream-100)]/50 to-transparent" />
        <Section
          eyebrow="Facility Gallery"
          title={
            <>
              A broader view of the <em>Sanjivani Spirits infrastructure.</em>
            </>
          }
          subtitle="This gallery showcases the plant, process environments, logistics readiness, and the premium industrial character behind the brand."
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {infrastructureGallery.map((g, i) => (
              <figure
                key={g.id}
                className={`group relative overflow-hidden rounded-2xl border border-amber-900/10 bg-white ${
                  i === 0 || i === 4 || i === 6 || i === 7 || i === 11
                    ? 'col-span-2 md:col-span-2 aspect-[16/9]'
                    : 'aspect-[4/5]'
                }`}
              >
                <img
                  src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                    g.prompt
                  )}&image_size=${g.size}`}
                  alt={g.caption}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <div className="eyebrow mb-2 text-stone-100/80 !text-[9px]">
                    {String(i + 1).padStart(2, '0')} / {String(infrastructureGallery.length).padStart(2, '0')} · {g.category.toUpperCase()}
                  </div>
                  <p className="text-[13.5px] lg:text-[14.5px] leading-snug text-stone-50 font-medium">
                    {g.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </div>

      <Section
        eyebrow="Infrastructure Promise"
        title={
          <>
            Technology, Tradition, And <em>Execution</em> In One System.
          </>
        }
        align="center"
      >
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {infrastructurePromises.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-[var(--radius)] overflow-hidden p-8 lg:p-10 border border-amber-900/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-12`} />
              <div
                className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${p.accent} opacity-25 blur-3xl`}
              />
              <div className="relative">
                <h3 className="font-serif text-3xl lg:text-4xl text-[color:var(--ink)] mb-4">{p.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-stone-700">{p.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[var(--radius)] border border-amber-900/10 bg-gradient-to-r from-white via-[color:var(--cream-100)] to-white p-8 lg:p-12 relative overflow-hidden text-center">
          <div>
            <h3 className="font-serif text-3xl lg:text-5xl leading-tight max-w-4xl mx-auto">
              End-to-end capability, anchored in <span className="text-gradient-gold italic">practical execution</span> and <span className="text-gradient-gold italic">dependable supply.</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center mt-10">
              <Link to="/products" className="btn btn-primary btn-arrow">Explore The Portfolio</Link>
              <Link to="/contact" className="btn btn-ghost btn-arrow">Factory Visit</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Infrastructure

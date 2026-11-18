import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import StatCard from '../components/ui/StatCard'
import {
  leadership,
  timeline,
  legacyAtAGlance,
  visionMission,
  growthOutlook,
} from '../data/leadership'

function About() {
  return (
    <>
      <section className="relative min-h-[85svh] flex items-end overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(255,253,247,0.65) 0%, rgba(255,253,247,0.78) 50%, rgba(255,253,247,0.97) 100%),
              linear-gradient(90deg, rgba(255,253,247,0.9) 0%, rgba(255,253,247,0.55) 55%, rgba(255,253,247,0.2) 100%),
              url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                'Cinematic editorial photo of a historic old Indian sugar mill building at sunset with modern distillery behind it, Maharashtra rural landscape, warm nostalgic golden grading, steam gently rising, Kopargaon, legacy industry, ultra wide 16:9 composition'
              )}&image_size=landscape_16_9")
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative pb-20">
          <div className="max-w-5xl">
            <div className="section-label fade-in">Our Story · Kopargaon, Maharashtra</div>
            <h1 className="display-title fade-in fade-in-delay-1 mt-2">
              From <em>Rural Aspiration</em>
              <br />
              To Industry <em>Leadership.</em>
            </h1>
            <p className="prose-body fade-in fade-in-delay-2 mt-8 !text-[color:var(--ink)]/90 !max-w-3xl">
              Sanjivani Spirits is built on the dream of Late Honourable Shri Shankarraoji Kolhe Saheb, whose
              vision transformed a humble beginning in Kopargaon into a diversified group spanning education,
              sugar, liquor, ethanol, chemicals, pharma, power, and solvents.
            </p>
            <div className="flex flex-wrap gap-3 fade-in fade-in-delay-3 mt-10">
              <Link to="/products" className="btn btn-primary btn-arrow">Explore Our Portfolio</Link>
              <Link to="/about#leadership" className="btn btn-ghost btn-arrow">Meet The Leadership</Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="The Beginning"
        title={
          <>
            Sixty-four years ago, a <em>visionary dream</em> took shape in Kopargaon.
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="prose-body">
              A visionary dream took shape: to build a world-class organisation that would generate employment
              and improve the lives of fellow villagers in Kopargaon. Although Late Honourable Shri Shankarraoji
              Kolhe Saheb had the opportunity to open a factory in Switzerland while working in Europe, he chose
              instead to return home and build for his country and community.
            </p>
            <p className="prose-body">
              That decision led to the foundation of Sahakar Maharshi Shankarrao Kolhe Sahakari Sakhar Karkhana
              Ltd., backed by poor, illiterate small landholders of the Kopargaon Taluka. From that humble
              beginning, the group has grown into a diversified enterprise with a long-term commitment to
              progress, opportunity, and self-reliance.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-[var(--radius)] overflow-hidden aspect-[4/5] border border-amber-900/10">
              <img
                src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                  'Moody portrait of an elderly dignified Indian founder with a white mustache, old black and white sepia tones blended into a single color portrait, warm remastered look, wearing traditional Indian kurta, kind wise eyes, founder of a Maharashtra industrial group, cinematic fine art photography, 4:5'
                )}&image_size=portrait_4_3`}
                alt="Late Honourable Shri Shankarraoji Kolhe Saheb"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="scrim-dark" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="eyebrow mb-2 text-stone-100/80">Founder</div>
                <h3 className="font-serif text-2xl text-stone-50 leading-tight">
                  Late Honourable Shri Shankarraoji Kolhe Saheb
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="relative overflow-hidden border-y border-amber-900/10">
        <Section
          eyebrow="Timeline · Key Milestones"
          title={
            <>
              Six decades of <em>disciplined execution</em> in one long arc.
            </>
          }
        >
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--brand-gold)]/50 via-stone-200/60 to-transparent" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-16 items-start ${
                    i % 2 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className={i % 2 ? 'md:text-left md:pl-10 pl-14' : 'md:text-right md:pr-10 pl-14'}>
                    <div className="inline-block font-serif text-5xl font-light text-gradient-gold leading-none mb-4">
                      {t.year}
                    </div>
                  </div>
                  <div
                    className={`pl-14 md:pl-0 ${
                      i % 2 ? 'md:pr-10 md:text-right' : 'md:pl-10'
                    }`}
                  >
                    <h3 className="font-serif text-2xl lg:text-3xl text-[color:var(--ink)] mb-3">{t.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-stone-700">{t.description}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-[color:var(--brand-gold)] shadow-[0_0_0_6px_rgba(212,168,87,0.12)]" />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <Section
        eyebrow="Legacy At A Glance"
        title={
          <>
            Measured by <em>endurance, expansion, and consumer trust.</em>
          </>
        }
        align="center"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {legacyAtAGlance.map((s) => (
            <StatCard key={s.value} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      <div
        id="leadership"
        className="relative overflow-hidden border-y border-amber-900/10 bg-gradient-to-b from-transparent via-[color:var(--cream-100)]/50 to-transparent"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,87,0.05),transparent_60%)] pointer-events-none" />
        <Section
          eyebrow="Leadership Messages"
          title={
            <>
              People who continue to <em>shape the journey.</em>
            </>
          }
          subtitle="Each profile carries a dedicated image slot so final portraits can be added without restructuring the page."
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {leadership.map((l, i) => {
              const portraitPrompt = encodeURIComponent(
                `Editorial dignified portrait of ${l.name}, ${l.role} of a Maharashtra-based Indian spirits manufacturing group, warm studio lighting, dark textured wood background, subtle golden rim light, thoughtful trustworthy expression, fine art portrait photography, cinematic warm grading, 4:5 portrait composition`
              )
              return (
                <article
                  key={l.id}
                  className="group relative rounded-[var(--radius)] border border-amber-900/10 bg-[color:var(--cream-50)] overflow-hidden hover:border-[color:var(--brand-gold)]/30 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-5 h-full">
                    <div className="md:col-span-2 relative aspect-[4/5] md:aspect-auto overflow-hidden">
                      <img
                        src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${portraitPrompt}&image_size=portrait_4_3`}
                        alt={l.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                      />
                      <div className="scrim-dark" />
                      <div className="absolute top-5 left-5 z-10">
                        <span className="font-serif text-5xl font-light text-gradient-gold opacity-70 leading-none">
                          0{l.order}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-8 lg:p-10 flex flex-col">
                      <div className="eyebrow mb-3">{l.messageTitle}</div>
                      <h3 className="font-serif text-2xl lg:text-3xl text-[color:var(--ink)] leading-tight mb-1">
                        {l.name}
                      </h3>
                      <div className="text-[12px] uppercase tracking-[0.2em] text-[color:var(--brand-gold)] font-semibold mb-5">
                        {l.role}
                      </div>
                      <div className="divider-gold mb-5" />
                      <p className="text-[14.5px] leading-relaxed text-stone-700">{l.message}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Section>
      </div>

      <Section
        eyebrow="Vision & Mission"
        title={
          <>
            Clarity in purpose. <em>Discipline in execution.</em>
          </>
        }
        align="center"
      >
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {visionMission.map((v) => (
            <div
              key={v.type}
              className="group relative rounded-[var(--radius)] overflow-hidden p-10 lg:p-14 border border-amber-900/10 text-left"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${v.accent} opacity-10`} />
              <div className="relative">
                <div className="eyebrow mb-6">{v.type} Statement</div>
                <h3 className="font-serif text-3xl lg:text-5xl leading-[1.1] text-[color:var(--ink)]">
                  "{v.statement}"
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Growth Outlook"
        title={
          <>
            Poised To Shape The <em>Indian Liquor Landscape.</em>
          </>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthOutlook.map((g, i) => (
            <div
              key={g.title}
              className="group relative rounded-[var(--radius)] border border-amber-900/10 bg-gradient-to-br from-white to-[color:var(--cream-100)] p-8 overflow-hidden hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${g.accent}`} />
              <h3 className="font-serif text-2xl text-[color:var(--ink)] mb-4 mt-2">{g.title}</h3>
              <p className="text-[14px] leading-relaxed text-stone-700">{g.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-amber-900/10">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage: `url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                'Cinematic aerial drone shot of an Indian distillery complex surrounded by green sugarcane fields at golden hour, Maharashtra, warm light, editorial aerial photography, ultra wide 16:9'
              )}&image_size=landscape_16_9")`,
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--paper)]/96 via-[color:var(--paper)]/92 to-[color:var(--paper)]" />
        </div>
        <div className="container relative" style={{ padding: 'var(--section-pad) 0' }}>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="section-label">Next Step</div>
              <h2 className="section-title mt-2">
                Explore The Products Built On This <em className="italic">Legacy.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end flex-wrap gap-3">
              <Link to="/products" className="btn btn-primary btn-arrow">View Products</Link>
              <Link to="/pillars" className="btn btn-ghost btn-arrow">Core Pillars</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

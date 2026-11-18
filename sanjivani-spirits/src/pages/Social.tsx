import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import StatCard from '../components/ui/StatCard'
import { pillars } from '../data/pillars'

function Social() {
  const stats = [
    { value: '64+', label: 'Years of community-rooted institution building and employment generation.' },
    { value: '8+', label: 'Group sectors spanning sugar, liquor, ethanol, pharma, chemicals, power, education, solvents.' },
    { value: '100%', label: 'Committed to affordable quality, socially acceptable practices, and people-first culture.' },
  ]

  const initiatives = [
    {
      title: 'Quality At Affordable Prices',
      summary:
        'By producing high-quality country liquor responsibly and pricing it accessibly, we steer mass patrons away from unsafe, unregulated alternatives — protecting consumers every day.',
      icon: 'shield',
    },
    {
      title: 'Socially Acceptable Practices',
      summary:
        'Every manufacturing decision, retail relationship, and consumer communication is held to a standard that protects dignity, responsibility, and local trust.',
      icon: 'scale',
    },
    {
      title: 'People-First Culture',
      summary:
        'From factory floor employees to senior leadership, from small landholder farmers to local retailers — every stakeholder deserves growth, dignity, and a stake in the outcome.',
      icon: 'heart',
    },
    {
      title: 'Community Impact',
      summary:
        'The wider Sanjivani Group footprint in education, sugar, pharma, power, and solvents multiplies the social impact of every bottle produced in Kopargaon.',
      icon: 'community',
    },
    {
      title: 'Employment Generation',
      summary:
        'Built from the start to create dignified livelihoods for villagers in and around Kopargaon, the group still measures success partly by the families who grow with it.',
      icon: 'briefcase',
    },
    {
      title: 'Farmer Partnerships',
      summary:
        'The group was founded by poor, illiterate small landholders and sugarcane farmers. Their progress remains the baseline against which the business still measures itself.',
      icon: 'wheat',
    },
  ]

  const iconPath = (k: string) => {
    switch (k) {
      case 'shield':
        return 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
      case 'scale':
        return 'M12 3v18M5 8h14M5 8l-3 8a3 3 0 003 3h0a3 3 0 003-3L5 8zM19 8l-3 8a3 3 0 003 3h0a3 3 0 003-3L19 8zM3 21h18'
      case 'heart':
        return 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z'
      case 'community':
        return 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'
      case 'briefcase':
        return 'M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM10 7V5h4v2'
      case 'wheat':
        return 'M2 22h20M4 22c0-6 3-12 8-16M20 22c0-6-3-12-8-16M4 15c5 0 8-4 8-8M20 15c-5 0-8-4-8-8M6 19c3 0 5-2 5-5M18 19c-3 0-5-2-5-5'
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
              'Editorial documentary photo of rural Indian children walking to a village school in Maharashtra at golden sunrise, vibrant colourful uniforms, teacher greeting them, dusty village road with green sugarcane fields, warm honest hope-filled photography, 16:9'
            )}&image_size=landscape_16_9")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="scrim-light" />
        <div className="container relative pb-20">
          <div className="max-w-5xl">
            <div className="section-label fade-in">Social Responsibility</div>
            <h1 className="display-title fade-in fade-in-delay-1 mt-2">
              Responsibility & <em>Community-Led</em>
              <br />
              Growth Shape <em>Every Decision.</em>
            </h1>
            <p className="prose-body fade-in fade-in-delay-2 mt-8 !text-stone-700/90 !max-w-3xl">
              Quality at affordable prices, socially acceptable practices, and a people-first culture that
              delivers measurable impact for our consumers and communities. This is the fourth pillar — and
              the one that frames how we interpret the other three.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Impact At A Glance"
        title={
          <>
            Measured not in <em>bottles sold,</em> but in <em>lives touched.</em>
          </>
        }
        align="center"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <StatCard key={s.value} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      <div className="relative overflow-hidden border-y border-amber-900/10">
        <Section
          eyebrow="Responsibility Pillars"
          title={
            <>
              Six commitments that turn <em>intent</em> into <em>measurable impact.</em>
            </>
          }
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((it, i) => (
              <div
                key={it.title}
                className="group relative rounded-[var(--radius)] border border-amber-900/10 bg-gradient-to-br from-white to-[color:var(--cream-100)] p-8 overflow-hidden transition-all duration-500 hover:border-[color:var(--brand-gold)]/30 hover:-translate-y-1"
              >
                <div className="absolute -right-14 -top-14 w-48 h-48 rounded-full bg-gradient-to-br from-[color:var(--brand-gold)]/20 to-transparent blur-3xl opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl border border-[color:var(--brand-gold)]/25 bg-gradient-to-br from-[color:var(--brand-gold)]/15 to-transparent flex items-center justify-center mb-6">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--brand-gold-soft)]">
                      <path d={iconPath(it.icon)} />
                    </svg>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-stone-600 mb-4">
                    Initiative 0{i + 1}
                  </div>
                  <h3 className="font-serif text-2xl text-stone-800 mb-3">{it.title}</h3>
                  <p className="text-[14px] leading-relaxed text-stone-700">{it.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section
        eyebrow="The 4th Pillar — Social Upliftment"
        title={
          <>
            Pillar 04 in detail: <em>measurable social upliftment</em> across every operation.
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="relative rounded-[var(--radius)] overflow-hidden aspect-[4/5] border border-amber-900/10 group">
              <img
                src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                  'Documentary portrait of a senior Indian rural woman farmer standing proudly in her green sugarcane field at golden hour, Maharashtra, warm gentle light, dignified honest expression, editorial photography, 4:5 portrait'
                )}&image_size=portrait_4_3`}
                alt="Community farmer partner"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
              />
              <div className="scrim-dark" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[17px] leading-relaxed text-stone-800">
              {pillars[3].summary}
            </p>
            <div className="divider-gold" />
            <div className="space-y-4">
              {pillars[3].body.map((para, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-2xl border border-amber-900/10 bg-[color:var(--cream-50)] p-5 hover:border-[color:var(--brand-gold)]/20 transition-colors"
                >
                  <div className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[color:var(--brand-gold)] to-[color:var(--brand-copper)] flex items-center justify-center text-stone-950 text-[12px] font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-stone-700">{para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-amber-900/10">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                'Ultra wide cinematic shot of an Indian village haat (local market) at dusk, colourful stalls, families walking, warm lantern lights, a Sanjivani liquor retail stall visible in background, community commerce atmosphere, Maharashtra, golden blue hour photography, 16:9'
              )}&image_size=landscape_16_9")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--paper)]/96 via-[color:var(--paper)]/90 to-[color:var(--paper)]" />
        </div>
        <div className="container relative" style={{ padding: 'var(--section-pad) 0' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-label justify-center">64 Years Of Vision, Growth, And Trust.</div>
            <h2 className="section-title mt-2 mx-auto text-center" style={{ maxWidth: '18ch' }}>
              <em className="italic">Every bottle</em> comes with a <em className="italic">commitment to the community.</em>
            </h2>
            <p className="prose-body mx-auto mt-8 !text-stone-700/90">
              Talk to our team about dealer partnerships, factory visits, product questions, or business
              meetings — we're glad to walk you through how responsibility is built into the operating model.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-10">
              <Link to="/contact" className="btn btn-primary btn-arrow">Contact Our Team</Link>
              <Link to="/about" className="btn btn-ghost btn-arrow">Read The Full Story</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Social

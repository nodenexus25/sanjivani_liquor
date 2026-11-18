import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'

function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Dealer Enquiry',
    message: '',
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitted')
  }

  const subjects = [
    'Dealer Enquiry',
    'Product Questions',
    'Business Meeting',
    'Factory Visit Coordination',
    'General Query',
  ]

  return (
    <>
      <section className="relative min-h-[75svh] flex items-end overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
              'Editorial cinematic photo of a modern Indian corporate reception area with elegant sandstone and dark wood, warm ambient lighting, reception desk with branding, Maharashtra, welcoming atmosphere, architectural photography, 16:9'
            )}&image_size=landscape_16_9")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="scrim-light" />
        <div className="container relative pb-20">
          <div className="max-w-5xl">
            <div className="section-label fade-in">Contact · Sanjivani Spirits</div>
            <h1 className="display-title fade-in fade-in-delay-1 mt-2">
              Let's <em>Start A</em>
              <br />
              <em>Conversation.</em>
            </h1>
            <p className="prose-body fade-in fade-in-delay-2 mt-8 !max-w-3xl">
              Whether you're exploring a dealer partnership, asking about a product, scheduling a factory
              visit, or planning a business meeting — our team is ready during the support window below.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Get In Touch"
        title={
          <>
            <em>Dealer enquiries,</em> product questions, business meetings, and factory visit coordination.
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div className="rounded-[var(--radius)] border border-amber-900/10 bg-white overflow-hidden shadow-sm shadow-amber-900/5">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-amber-900/10">
                <img
                  src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                    'Aerial drone photograph of Sanjivani Sahakari Sakhar Karkhana campus Kopargaon Ahmednagar Maharashtra, sugar factory buildings, modern distillery, surrounding green fields, golden hour, detailed architectural drone shot, 16:9'
                  )}&image_size=landscape_16_9`}
                  alt="Kopargaon campus aerial view"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="scrim-dark" />
              </div>
              <div className="p-8 space-y-7 bg-white">
                <div>
                  <div className="eyebrow mb-3">Address</div>
                  <p className="text-[15px] leading-relaxed text-stone-800">
                    Sahajanandnagar, P.O. Shinganapur,<br />
                    Taluka Kopargaon, District Ahmednagar,<br />
                    Maharashtra, India — 423603
                  </p>
                  <a
                    href="https://maps.google.com/?q=Sahajanandnagar+Shinganapur+Kopargaon+Ahmednagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-copper)] hover:gap-4 transition-all"
                  >
                    Open Google Maps <span aria-hidden>↗</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-amber-900/10">
                  <div>
                    <div className="eyebrow mb-2">Phone</div>
                    <a href="tel:+912423224132" className="text-[16px] font-semibold text-[color:var(--ink)] hover:text-[color:var(--brand-copper)]">
                      +91 2423 224132
                    </a>
                  </div>
                  <div>
                    <div className="eyebrow mb-2">State</div>
                    <p className="text-[16px] font-semibold text-[color:var(--ink)]">Maharashtra · India</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-amber-900/10">
                  <div className="eyebrow mb-3">Support Window</div>
                  <p className="text-[15px] text-stone-800 font-medium">
                    Monday to Saturday · 8:30 AM to 5:30 PM
                  </p>
                  <p className="text-[12.5px] leading-relaxed text-stone-500 mt-2">
                    Best for dealer enquiries, product questions, business meetings, and factory visit coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius)] border border-amber-900/10 bg-white p-8 lg:p-10 shadow-sm shadow-amber-900/5">
              {status === 'idle' ? (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                        Full Name
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-amber-900/15 bg-[color:var(--paper)] px-5 py-4 text-[14.5px] text-[color:var(--ink)] placeholder:text-stone-400 outline-none transition-all focus:border-[color:var(--brand-gold)]/50 focus:ring-2 focus:ring-[color:var(--brand-gold)]/15"
                      />
                    </div>
                    <div>
                      <label className="block mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full rounded-2xl border border-amber-900/15 bg-[color:var(--paper)] px-5 py-4 text-[14.5px] text-[color:var(--ink)] placeholder:text-stone-400 outline-none transition-all focus:border-[color:var(--brand-gold)]/50 focus:ring-2 focus:ring-[color:var(--brand-gold)]/15"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 ..."
                        className="w-full rounded-2xl border border-amber-900/15 bg-[color:var(--paper)] px-5 py-4 text-[14.5px] text-[color:var(--ink)] placeholder:text-stone-400 outline-none transition-all focus:border-[color:var(--brand-gold)]/50 focus:ring-2 focus:ring-[color:var(--brand-gold)]/15"
                      />
                    </div>
                    <div>
                      <label className="block mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                        Subject
                      </label>
                      <div className="relative">
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full appearance-none rounded-2xl border border-amber-900/15 bg-[color:var(--paper)] px-5 py-4 text-[14.5px] text-[color:var(--ink)] outline-none transition-all focus:border-[color:var(--brand-gold)]/50 focus:ring-2 focus:ring-[color:var(--brand-gold)]/15 pr-12"
                        >
                          {subjects.map((s) => (
                            <option key={s} value={s} className="bg-white">
                              {s}
                            </option>
                          ))}
                        </select>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute right-5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you need — dealer partnership, product details, a factory visit slot, or something else."
                      className="w-full resize-none rounded-2xl border border-amber-900/15 bg-[color:var(--paper)] px-5 py-4 text-[14.5px] text-[color:var(--ink)] placeholder:text-stone-400 outline-none transition-all focus:border-[color:var(--brand-gold)]/50 focus:ring-2 focus:ring-[color:var(--brand-gold)]/15"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-[12px] leading-relaxed text-stone-500 max-w-md">
                      Submitting this form indicates you'd like a member of the Sanjivani Spirits team to
                      contact you during our support window.
                    </p>
                    <button type="submit" className="btn btn-primary btn-arrow">
                      Send Enquiry
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[color:var(--brand-gold-soft)] to-[color:var(--brand-copper)] flex items-center justify-center shadow-xl shadow-amber-700/15 mb-8">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="eyebrow mb-3">Enquiry Received</div>
                  <h3 className="font-serif text-3xl lg:text-4xl text-[color:var(--ink)] mb-4">
                    Thank you, <span className="text-gradient-gold italic">{form.name || 'friend'}</span>.
                  </h3>
                  <p className="prose-body mx-auto !max-w-xl">
                    A member of the Sanjivani Spirits team will reach out during the support window. For
                    urgent matters, please call us directly at +91 2423 224132.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center mt-10">
                    <Link to="/products" className="btn btn-primary btn-arrow">Explore Products</Link>
                    <Link to="/" className="btn btn-ghost btn-arrow">Back To Home</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-amber-900/10 bg-[color:var(--cream-50)]/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,134,42,0.08),transparent_60%)] pointer-events-none" />
        <Section
          eyebrow="Also On This Site"
          title={
            <>
              Explore the <em>portfolio, people, and plant</em> behind the brand.
            </>
          }
          align="center"
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { to: '/products', label: 'Products', tag: '6 Spirits · 3 Flavour Families' },
              { to: '/about', label: 'Our Story', tag: '64 Years · Kopargaon Roots' },
              { to: '/infrastructure', label: 'Infrastructure', tag: 'End-To-End Facility' },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group relative rounded-[var(--radius)] border border-amber-900/10 bg-white p-8 text-left overflow-hidden transition-all duration-500 hover:border-[color:var(--brand-gold)]/40 hover:-translate-y-1 shadow-sm shadow-amber-900/5"
              >
                <div className="absolute -right-14 -top-14 w-48 h-48 rounded-full bg-gradient-to-br from-[color:var(--brand-gold-soft)]/22 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="eyebrow mb-3">{c.tag}</div>
                <h3 className="font-serif text-3xl text-[color:var(--ink)] mb-4">{c.label}</h3>
                <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-copper)] group-hover:gap-4 transition-all">
                  Open Page <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </section>
    </>
  )
}

export default Contact

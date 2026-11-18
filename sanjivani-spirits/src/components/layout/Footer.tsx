import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/pillars', label: 'Core Pillars' },
  { to: '/products', label: 'Products' },
  { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/social-responsibility', label: 'Social Responsibility' },
  { to: '/contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="relative border-t border-amber-900/10 overflow-hidden bg-[color:var(--paper-warm)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,134,42,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      <div className="container relative" style={{ paddingTop: 'var(--section-pad)', paddingBottom: '40px' }}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 pb-16 border-b border-amber-900/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--brand-gold-soft)] to-[color:var(--brand-copper)] flex items-center justify-center shadow-xl shadow-amber-700/15">
                <span className="font-serif text-white font-bold text-2xl leading-none">S</span>
              </div>
              <div className="leading-tight">
                <div className="font-serif text-2xl text-[color:var(--ink)] tracking-wide">Sanjivani Spirits</div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-stone-500 mt-1 font-medium">
                  Built In Kopargaon · 64 Years
                </div>
              </div>
            </div>

            <p className="prose-body mb-8 !max-w-xl !text-stone-700">
              Sanjivani Spirits combines a 64-year legacy, a recognised country liquor portfolio, and modern
              infrastructure designed to support quality, consistency, and long-term growth.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary btn-arrow">Contact Us</Link>
              <Link to="/products" className="btn btn-ghost btn-arrow">Explore Products</Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-6">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[14px] text-stone-700 hover:text-[color:var(--brand-copper)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="eyebrow mb-6">Contact Info</h4>
            <div className="space-y-5 text-stone-800">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1.5">
                  Address
                </div>
                <p className="text-[14px] leading-relaxed text-stone-800">
                  Sahajanandnagar, P.O. Shinganapur,<br />
                  Taluka Kopargaon, District Ahmednagar,<br />
                  Maharashtra, India — 423603
                </p>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1.5">
                  Phone
                </div>
                <a href="tel:+912423224132" className="text-[15px] text-stone-900 hover:text-[color:var(--brand-copper)] font-semibold">
                  +91 2423 224132
                </a>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1.5">
                  Directions
                </div>
                <a
                  href="https://maps.google.com/?q=Kopargaon+Ahmednagar+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] inline-flex items-center gap-2 text-stone-900 hover:text-[color:var(--brand-copper)] font-medium"
                >
                  Open Google Maps <span aria-hidden>↗</span>
                </a>
              </div>

              <div className="pt-2 border-t border-amber-900/10">
                <div className="text-[11px] uppercase tracking-[0.18em] text-stone-500 font-semibold mb-1.5">
                  Support Window
                </div>
                <p className="text-[14px] text-stone-800">
                  Monday to Saturday, 8:30 AM to 5:30 PM
                </p>
                <p className="text-[12px] text-stone-500 mt-1">
                  Best for dealer enquiries, product questions, business meetings, and factory visit coordination.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-7 pb-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-stone-600 leading-relaxed">
            © {new Date().getFullYear()} Sanjivani Spirits — Built In Kopargaon. Trusted Across Generations.<br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            <span className="text-[color:var(--brand-copper)] font-semibold">"64 Years Of Vision, Growth, And Trust."</span>
          </p>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] text-stone-600 font-semibold">
            <a href="#" className="hover:text-[color:var(--brand-copper)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[color:var(--brand-copper)] transition-colors">Terms</a>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px] shadow-emerald-500/50" />
              Production Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/pillars', label: 'Core Pillars' },
  { to: '/products', label: 'Products' },
  { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/social-responsibility', label: 'Social Responsibility' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'pt-3' : 'pt-6'
      }`}
      style={{ pointerEvents: 'none' }}
    >
      <div className="container" style={{ pointerEvents: 'auto' }}>
        <nav
          className={`relative mx-auto flex items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled
              ? 'border-amber-900/10 bg-white/85 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(138,84,25,0.18)]'
              : 'border-stone-900/8 bg-[color:var(--paper)]/70 backdrop-blur-md'
          }`}
          style={{
            height: '68px',
            padding: '0 10px 0 26px',
          }}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[color:var(--brand-gold-soft)] to-[color:var(--brand-copper)] flex items-center justify-center shadow-lg shadow-amber-700/15">
              <span className="font-serif text-white font-bold text-lg leading-none">S</span>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-[15px] font-medium text-[color:var(--ink)] tracking-wide group-hover:text-[color:var(--brand-copper)] transition-colors">
                Sanjivani Spirits
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-medium">
                Kopargaon · Est. 1960s
              </div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-[color:var(--brand-gold-soft)] to-[color:var(--brand-copper)] shadow-md shadow-amber-700/20'
                        : 'text-stone-700 hover:text-[color:var(--ink)]'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/products"
              className="btn btn-primary btn-arrow !py-2.5 !px-5 !text-[11px]"
            >
              View Products
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-stone-800 hover:text-[color:var(--brand-copper)] transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            menuOpen ? 'max-h-[640px] mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0'
          }`}
        >
          <div className="rounded-3xl border border-amber-900/10 bg-white/95 backdrop-blur-2xl p-3 shadow-2xl">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `block px-5 py-3.5 rounded-2xl text-[13px] font-medium transition-all ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-[color:var(--brand-gold-soft)] to-[color:var(--brand-copper)]'
                          : 'text-stone-800 hover:bg-amber-50'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="p-3 pt-4">
              <Link to="/products" className="btn btn-primary w-full btn-arrow">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

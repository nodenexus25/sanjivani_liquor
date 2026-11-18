import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { NAV_LINKS } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className={`navbar-wrap ${scrolled ? "scrolled" : "always-visible"}`}>
      <nav className="navbar" aria-label="Primary">
        <Link to="/" className="brand" aria-label="Sanjivani Spirits home">
          <div className="brand-badge" aria-hidden="true">
            SS
          </div>
          <div className="brand-text">
            <span className="brand-name">Sanjivani Spirits</span>
            <span className="brand-tag">Since · 1962</span>
          </div>
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="nav-cta">
          Dealer Enquiry
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </div>
  );
}

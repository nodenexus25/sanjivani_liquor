import { Link } from "react-router";
import { NAV_LINKS, CONTACT } from "../data/content";

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <div className="brand-badge" aria-hidden="true">SS</div>
              <div className="brand-text">
                <span className="brand-name">Sanjivani Spirits</span>
                <span className="brand-tag">Since · 1962</span>
              </div>
            </div>
            <p>
              Built In Kopargaon. Trusted Across Generations. Sanjivani Spirits
              combines a 64-year legacy, a recognised country liquor portfolio,
              and modern infrastructure designed to support quality,
              consistency, and long-term growth.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Portfolio</h4>
            <ul>
              <li><Link to="/products#bobby-santra">Bobby Santra</Link></li>
              <li><Link to="/products#zingat-santra">Zingat Santra</Link></li>
              <li><Link to="/products#sanjivani-santra">Sanjivani Santra</Link></li>
              <li><Link to="/products#bobby-saunf">Bobby Saunf</Link></li>
              <li><Link to="/products#sanjivani-punch">Sanjivani Punch</Link></li>
              <li><Link to="/products#sanjivani-premium-santra">Premium Santra</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
              </li>
              <li>
                <a href={CONTACT.directionsUrl} target="_blank" rel="noreferrer">
                  Open Google Maps →
                </a>
              </li>
              <li>{CONTACT.hours}</li>
              <li>
                <Link to="/contact" className="nav-cta" style={{ display: "inline-flex", marginTop: 6 }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Sanjivani Spirits. All rights reserved.</div>
          <div>Drink responsibly. · Built on the banks of the Godavari.</div>
        </div>
      </div>
    </footer>
  );
}

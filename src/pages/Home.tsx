import { Link } from "react-router";
import { IMG, PRODUCTS } from "../data/content";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Sanjivani Spirits introduction">
        <img
          src={IMG.heroHome}
          alt="Sanjivani Spirits distillery at golden hour"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-gradient" aria-hidden="true" />
        <div className="hero-inner">
          <span className="eyebrow">Since · 1962 · Kopargaon</span>
          <h1>Built on familiar taste. Trusted across generations.</h1>
          <p className="lead">
            Six popular spirits. One distinctly local portfolio. From orange-led
            favourites to saunf-forward classics and punchy citrus blends, the
            range is shaped around taste cues consumers already love — and
            repeatedly ask for.
          </p>
          <div className="btn-row">
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>
            <Link to="/about" className="btn btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
        <div className="hero-scrollhint" aria-hidden="true">Scroll ↓</div>
      </section>

      <section className="section stat-strip">
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 60 }}>
            <div>
              <span className="eyebrow" style={{ color: "#a6844b" }}>
                Legacy At A Glance
              </span>
              <h2 style={{ color: "#f8f7f2" }}>
                Endurance, expansion, and consumer trust — measured in decades.
              </h2>
            </div>
            <p className="lead" style={{ color: "rgba(248,247,242,0.78)" }}>
              From a humble cooperative rooted in Kopargaon to one of India's
              most recognised country liquor portfolios, every metric reflects a
              deliberate choice — quality over shortcuts, people over quarterly
              targets.
            </p>
          </div>

          <div className="stat-grid">
            <div>
              <div className="stat-num">64</div>
              <div className="stat-label">
                Years of institution-building rooted in community upliftment.
              </div>
            </div>
            <div>
              <div className="stat-num">120 KLPD</div>
              <div className="stat-label">
                Manufacturing capacity supporting large-scale daily production.
              </div>
            </div>
            <div>
              <div className="stat-num">3M+</div>
              <div className="stat-label">
                Bobby cases sold annually — Maharashtra's most recognised name.
              </div>
            </div>
            <div>
              <div className="stat-num">6</div>
              <div className="stat-label">
                Signature spirits across orange, saunf, and punch profiles.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-media cinematic">
              <img src={IMG.valueSugar} alt="Sugarcane harvest in Maharashtra fields" />
            </div>
            <div className="split-text">
              <span className="eyebrow">Integrated Value Chain</span>
              <h2>From sugar to spirits — every link adds strength.</h2>
              <p className="lead">
                Sanjivani is one of the largest sugar manufacturers in
                Maharashtra. The by-product of sugar production, molasses, is
                never treated as waste. It becomes a valuable input, processed
                into alcohol for trusted liquor brands and ethanol.
              </p>
              <p>
                This integrated model improves resource utilisation, strengthens
                production continuity, and lets the organisation create value
                across multiple businesses with discipline and efficiency.
              </p>
              <div className="btn-row">
                <Link to="/pillars" className="btn btn-primary">
                  Read The Four Pillars
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 54 }}>
            <div>
              <span className="eyebrow">The Portfolio</span>
              <h2>Six signature expressions, three clear flavour families.</h2>
            </div>
            <p className="lead">
              Each SKU is designed for recognisable flavour, dependable quality,
              and practical pack sizes that work across everyday retail demand —
              without making the portfolio feel crowded.
            </p>
          </div>

          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <article className="product-card" key={p.slug}>
                <span className="product-tag">{p.badge}</span>
                <div className="product-bottle">
                  <img src={p.image} alt={`${p.name} bottle`} loading="lazy" />
                </div>
                <div className="product-family">{p.family}</div>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.description.slice(0, 120)}…</p>
                <div className="product-meta">
                  <div>
                    <strong>Flavour</strong>
                    {p.flavour}
                  </div>
                  <div>
                    <strong>Sizes</strong>
                    {p.sizes.length} formats
                  </div>
                </div>
                <div className="pill-row">
                  {p.sizes.slice(0, 3).map((s) => (
                    <span className="pill" key={s}>
                      {s}
                    </span>
                  ))}
                  {p.sizes.length > 3 && (
                    <span className="pill">+{p.sizes.length - 3}</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 48, justifyContent: "center" }}>
            <Link to="/products" className="btn btn-primary">
              View Full Portfolio
            </Link>
            <Link to="/products#packaging" className="btn btn-outline">
              See Sizes & Availability
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="eyebrow" style={{ color: "#f4c9a7" }}>
                Next · See The Backbone
              </span>
              <h2>Explore the infrastructure behind the brands.</h2>
              <p>
                Systems, production capability, and the operating backbone that
                supports six labels, five formats, and a 3M+ case annual
                footprint — all from Kopargaon.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: ["flex-end", "flex-start"] as unknown as string }}>
              <Link to="/infrastructure" className="btn btn-primary">
                View Infrastructure
              </Link>
              <Link to="/csr" className="btn btn-outline">
                Social Responsibility
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router";
import { IMG, PRODUCTS, FAMILIES, type PackSize } from "../data/content";

const SIZES: PackSize[] = [
  "750ml",
  "180ml glass",
  "180ml pet",
  "90ml glass",
  "90ml pet",
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Products</span>
          <h1>Six popular spirits. One distinctly local portfolio.</h1>
          <div className="two-copy" style={{ marginTop: 24 }}>
            <p className="lead">
              From orange-led favourites to saunf-forward classics and punchy
              citrus blends, this range is shaped around familiar taste cues
              that consumers already love and repeatedly ask for.
            </p>
            <p className="lead">
              Each SKU is designed for recognisable flavour, dependable quality,
              and practical pack sizes that work across everyday retail demand.
            </p>
          </div>
          <div className="btn-row">
            <a href="#archive" className="btn btn-primary">
              View Products
            </a>
            <a href="#packaging" className="btn btn-outline">
              See Sizes
            </a>
          </div>
        </div>
      </section>

      <section id="archive" className="section-tight">
        <div className="archive-hero" aria-label="Archive bottle line-up">
          <img src={IMG.archiveLineup} alt="Archive bottle line-up, Sanjivani Spirits portfolio" />
        </div>
        <div className="container" style={{ marginTop: 48, textAlign: "center" }}>
          <div style={{ fontSize: "0.8rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
            Archive Bottle Line-up
          </div>
          <h2 style={{ maxWidth: 28, margin: "0 auto" }}>
            Signature spirits, built around familiar taste cues.
          </h2>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="stat-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            <div>
              <div className="stat-num" style={{ color: "var(--terracotta)" }}>6</div>
              <div className="stat-label" style={{ color: "var(--muted)" }}>
                Signature spirits across orange, saunf, and punch-led profiles.
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ color: "var(--terracotta)" }}>5</div>
              <div className="stat-label" style={{ color: "var(--muted)" }}>
                Retail pack formats spanning 750ml, glass bottles, and PET packs.
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ color: "var(--terracotta)" }}>3</div>
              <div className="stat-label" style={{ color: "var(--muted)" }}>
                Core flavour families that keep the range easy to understand and easy to sell.
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ color: "var(--terracotta)" }}>2</div>
              <div className="stat-label" style={{ color: "var(--muted)" }}>
                Convenient mini formats that support steady everyday offtake.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="portfolio">
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 60 }}>
            <div>
              <span className="eyebrow">Portfolio</span>
              <h2>Signature expressions.</h2>
            </div>
            <p className="lead">
              The range balances strong flavour recognition with differentiated
              brand personalities, giving retailers and consumers clear choices
              without making the portfolio feel crowded.
            </p>
          </div>

          {PRODUCTS.map((p, i) => (
            <article
              id={p.slug}
              className="split"
              style={{
                marginBottom: i === PRODUCTS.length - 1 ? 0 : 120,
                direction: i % 2 ? "ltr" : "ltr",
              }}
              key={p.slug}
            >
              <div
                className={`split-media ${i % 2 ? "" : ""}`}
                style={{
                  order: i % 2 ? 2 : 1,
                  background: "var(--cream)",
                  padding: 32,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  src={p.image}
                  alt={`${p.name} bottle packshot`}
                  style={{ maxHeight: 480, width: "auto", objectFit: "contain" }}
                  loading="lazy"
                />
              </div>
              <div className="split-text" style={{ order: i % 2 ? 1 : 2 }}>
                <span className="eyebrow">{p.tagline}</span>
                <div className="product-family" style={{ marginBottom: 4 }}>
                  {p.family}
                </div>
                <h2 style={{ marginTop: 0, marginBottom: 20 }}>{p.name}</h2>
                <p className="lead" style={{ marginTop: 0 }}>{p.description}</p>

                <div className="product-meta" style={{ gridTemplateColumns: "1fr", gap: 14, padding: "24px 0 0", borderTop: "1px dashed var(--line)", marginTop: 20 }}>
                  <div><strong>Flavour</strong>{p.flavour}</div>
                  <div><strong>Appeal</strong>{p.appeal}</div>
                  <div><strong>Positioning</strong>{p.positioning}</div>
                </div>

                <div style={{ marginTop: 22 }}>
                  <div style={{ fontSize: "0.76rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
                    Available Pack Sizes
                  </div>
                  <div className="pill-row">
                    {p.sizes.map((s) => (
                      <span
                        key={s}
                        className={`pill ${s === "750ml" || s === "180ml glass" ? "primary" : ""}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 20 }}>
            <div>
              <span className="eyebrow">Range Story</span>
              <h2>Built around familiar taste cues.</h2>
            </div>
            <p className="lead">
              The portfolio is easy to understand because each label sits
              clearly within a flavour family consumers already know: orange-led
              Santra, spice-forward Saunf, and tangy Punch. This creates a
              simple path for trial, repeat purchase, and shelf navigation.
            </p>
          </div>

          <div className="family-grid">
            {FAMILIES.map((f) => (
              <div className="family" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
              </div>
            ))}
            <div className="family">
              <h3>Format Convenience</h3>
              <p>
                Compact pack sizes keep the range retail-friendly, while Bobby
                Santra extends reach further through both PET and 750ml options
                for every occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="packaging">
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 20 }}>
            <div>
              <span className="eyebrow">Packaging Matrix</span>
              <h2>Sizes and availability.</h2>
            </div>
            <p className="lead">
              Format planning is straightforward, with most SKUs available in
              fast-moving glass packs and Bobby Santra offering the broadest
              spread for different retail situations.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table className="pack-table" role="table">
              <thead>
                <tr>
                  <th scope="col">SKU</th>
                  {SIZES.map((s) => (
                    <th key={s} scope="col">{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p) => (
                  <tr key={p.slug}>
                    <td>
                      <div className="sku">{p.name}</div>
                      <div className="sku-sub">{p.family} · {p.tagline}</div>
                    </td>
                    {SIZES.map((s) => (
                      <td key={s}>
                        {p.sizes.includes(s) ? (
                          <span
                            className="pill primary"
                            style={{ display: "inline-flex" }}
                          >
                            ✓ Available
                          </span>
                        ) : (
                          <span
                            style={{
                              fontSize: "0.8rem",
                              color: "var(--muted)",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                            }}
                          >
                            —
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="eyebrow" style={{ color: "#f4c9a7" }}>
                Next · Behind The Brands
              </span>
              <h2>See the infrastructure behind the portfolio.</h2>
              <p>
                Explore the systems, production capability, and operating
                backbone that support these six brands across five pack formats.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link to="/infrastructure" className="btn btn-primary">
                View Infrastructure
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Dealer Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

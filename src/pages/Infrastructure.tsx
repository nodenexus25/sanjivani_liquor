import { Link } from "react-router";
import { IMG } from "../data/content";

export default function InfrastructurePage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Infrastructure</span>
          <h1>The systems, scale, and discipline behind every bottle.</h1>
          <p className="lead">
            120 KLPD of capacity, 11 bottling lines, 20,000 cases per day — and
            an integrated sugar-to-spirits value chain that lets Sanjivani
            Spirits deliver consistency at scale, day after day, season after
            season.
          </p>
        </div>
      </section>

      <section className="hero" style={{ height: "70vh", minHeight: 480 }}>
        <img src={IMG.heroInfra} alt="Interior of modern bottling plant" className="hero-image" />
        <div className="hero-gradient" aria-hidden="true" />
      </section>

      <section className="section-tight" style={{ background: "var(--charcoal)" }}>
        <div className="container" style={{ padding: "72px 0" }}>
          <div className="stat-grid">
            <div>
              <div className="stat-num">120 KLPD</div>
              <div className="stat-label">Kilolitres per day of distillation capacity — large-scale, dependable.</div>
            </div>
            <div>
              <div className="stat-num">11</div>
              <div className="stat-label">Dedicated bottling lines engineered for reliable day-to-day execution.</div>
            </div>
            <div>
              <div className="stat-num">20K</div>
              <div className="stat-label">Cases per day of manufacturing and bottling capacity at full rhythm.</div>
            </div>
            <div>
              <div className="stat-num">1+</div>
              <div className="stat-label">Integrated sugar → molasses → alcohol → liquor chain for continuity of supply.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 120 }}>
            <div className="split-media cinematic">
              <img src={IMG.infraFactory} alt="Wide aerial of distillery and sugar mill complex" />
            </div>
            <div className="split-text">
              <span className="eyebrow">01 · Production Footprint</span>
              <h2>Built around integrated, uninterrupted scale.</h2>
              <p className="lead">
                The manufacturing base is designed around the principle that
                quality and continuity cannot depend on external supply. Every
                critical input — from cane to alcohol — is produced within the
                group ecosystem.
              </p>
              <p>
                That vertical integration translates to predictable output,
                traceable raw material, and the ability to dial capacity up
                across peak demand seasons without compromising taste or
                finish.
              </p>
            </div>
          </div>

          <div className="split reverse" style={{ marginBottom: 120 }}>
            <div className="split-media cinematic">
              <img src={IMG.infraBottling} alt="High-angle shot of bottling line" />
            </div>
            <div className="split-text">
              <span className="eyebrow">02 · Bottling Lines</span>
              <h2>11 lines, five formats, zero compromise on consistency.</h2>
              <p className="lead">
                From 90ml mini glass formats to 750ml flagships and PET options
                for everyday offtake, the line-up is engineered to handle
                retail's practical reality — fast, accurate, dependable.
              </p>
              <p>
                Lines are calibrated and audited for fill accuracy, cap torque,
                and label alignment to protect brand presentation on shelf.
              </p>
            </div>
          </div>

          <div className="split" style={{ marginBottom: 120 }}>
            <div className="split-media cinematic">
              <img src={IMG.infraLab} alt="Quality control lab, golden spirit samples" />
            </div>
            <div className="split-text">
              <span className="eyebrow">03 · R&D & Quality</span>
              <h2>R&D-driven quality that sets category benchmarks.</h2>
              <p className="lead">
                Sanjivani Group's liquor division is equipped with strong R&D
                support, helping it create products that set new quality
                benchmarks in the Indian liquor industry.
              </p>
              <p>
                Product development is guided by consumer taste, with constant
                work on new flavours that deliver unmatched experiences and
                wider market appeal. Sanjivani Santra is produced in a finely
                filtered vacuum distillation plant for a cleaner, polished
                finish.
              </p>
            </div>
          </div>

          <div className="split reverse">
            <div className="split-media cinematic">
              <img src={IMG.infraStorage} alt="Rackhouse warehouse with barrels and tanks" />
            </div>
            <div className="split-text">
              <span className="eyebrow">04 · Storage & Distribution</span>
              <h2>Inventory depth that keeps shelves stocked reliably.</h2>
              <p className="lead">
                On-site warehousing, finished-goods storage, and a dealer-first
                dispatch rhythm ensure the portfolio keeps moving from
                Kopargaon to retail counters without interruption.
              </p>
              <p>
                The next phase of growth is designed to be technology-driven,
                ensuring sustainable value creation for stakeholders well into
                the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 40 }}>
            <div>
              <span className="eyebrow">Growth Outlook</span>
              <h2>Poised to shape the Indian liquor landscape.</h2>
            </div>
            <p className="lead">
              The company has brought in experienced minds and prudent growth
              plans to expand its footprint across the country with a broad
              array of products and services — underpinned by the same
              discipline that built the last 64 years.
            </p>
          </div>

          <div className="pillar-grid">
            {[
              {
                id: "01",
                title: "R&D Driven",
                body: "Sanjivani Group's liquor division is equipped with strong R&D support, helping it create products that set new quality benchmarks in the Indian liquor industry.",
              },
              {
                id: "02",
                title: "Consumer Centric",
                body: "Product development is guided by consumer taste, with constant work on new flavours that deliver unmatched experiences and wider market appeal.",
              },
              {
                id: "03",
                title: "Nationwide Ambition",
                body: "The company has prudent growth plans and has brought in experienced minds to expand its footprint across the country.",
              },
              {
                id: "04",
                title: "Technology Led",
                body: "The next phase of growth is designed to be technology-driven, ensuring sustainable value creation for stakeholders well into the future.",
              },
            ].map((c) => (
              <article className="pillar" key={c.id}>
                <div className="pillar-index">{c.id}</div>
                <h3 style={{ maxWidth: 12 }}>{c.title}</h3>
                <p style={{ fontSize: "0.94rem", color: "var(--ink)", marginTop: 6 }}>
                  {c.body}
                </p>
              </article>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 54 }}>
            <Link to="/contact" className="btn btn-primary">
              Partner With The Team
            </Link>
            <Link to="/csr" className="btn btn-outline">
              Social Responsibility
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

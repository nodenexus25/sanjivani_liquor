import { Link } from "react-router";
import { IMG, PILLARS, CHAIN_STEPS } from "../data/content";

export default function PillarsPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Our Core Pillars</span>
          <h1>Built on scale, responsibility, and community-led growth.</h1>
          <p className="lead">
            Sanjivani Group is a multi-dimensional organisation with a strong
            presence in education, sugar, liquor, ethanol, dairy, chemicals,
            power generation, and pharma. Based in Kopargaon, just 20 km from
            Shirdi, Sanjivani Spirits carries forward that legacy by
            transforming strength in manufacturing into trusted, quality-conscious
            liquor brands for Maharashtra and beyond.
          </p>
        </div>
      </section>

      <section className="hero" style={{ height: "68vh", minHeight: 460 }}>
        <img src={IMG.heroPillars} alt="Aerial of sugarcane plantation and distillery complex" className="hero-image" />
        <div className="hero-gradient" aria-hidden="true" />
      </section>

      <section className="section-tight" style={{ background: "var(--charcoal)" }}>
        <div className="container" style={{ padding: "72px 0" }}>
          <div className="stat-grid">
            <div>
              <div className="stat-num">120 KLPD</div>
              <div className="stat-label">Manufacturing capacity supporting large-scale production.</div>
            </div>
            <div>
              <div className="stat-num">11 Lines</div>
              <div className="stat-label">Bottling lines built for dependable day-to-day execution.</div>
            </div>
            <div>
              <div className="stat-num">20,000</div>
              <div className="stat-label">Cases/day manufacturing and bottling capacity at full rhythm.</div>
            </div>
            <div>
              <div className="stat-num">3M+</div>
              <div className="stat-label">Annual Bobby cases — one of Maharashtra's most recognised names.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split reverse">
            <div className="split-media cinematic">
              <img src={IMG.valueMolasses} alt="Industrial fermentation tanks processing molasses" />
            </div>
            <div className="split-text">
              <span className="eyebrow">Integrated Value Chain</span>
              <h2>From sugar to spirits, every link adds strength.</h2>
              <p className="lead">
                Sanjivani is one of the largest sugar manufacturers in
                Maharashtra, and that strength creates a clear operational
                advantage. The by-product of sugar production, molasses, is not
                treated as waste. It becomes a valuable input.
              </p>
              <p>
                This integrated model improves resource utilisation,
                strengthens production continuity, and allows the organisation
                to create value across multiple businesses with discipline and
                efficiency.
              </p>
            </div>
          </div>

          <div className="chain-grid">
            {CHAIN_STEPS.map((s) => (
              <div className="chain-step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <p>{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 40 }}>
            <div>
              <span className="eyebrow">The Four Pillars</span>
              <h2>What guides every decision at Sanjivani Spirits.</h2>
            </div>
            <p className="lead">
              These pillars reflect how we think about market leadership,
              environmental care, human dignity, and social responsibility.
              Together, they define not just what we make, but how we grow.
            </p>
          </div>

          <div className="pillar-grid">
            {PILLARS.map((p) => (
              <article className="pillar" key={p.id}>
                <div className="pillar-index">{p.id}</div>
                <h3 style={{ maxWidth: 10 }}>{p.title}</h3>
                <p style={{ fontSize: "0.94rem", color: "var(--ink)", marginTop: 6 }}>{p.copy}</p>
                <ul>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 50 }}>
            <div>
              <span className="eyebrow">How The Pillars Work</span>
              <h2>Visible in operations, products, and relationships.</h2>
            </div>
            <p className="lead">
              The core pillars are not decorative statements. They shape how
              production capacity is utilised, how brands are built, how teams
              work, and how Sanjivani contributes to the communities around it.
            </p>
          </div>

          <div className="split" style={{ marginBottom: 64 }}>
            <div className="split-media cinematic">
              <img src={IMG.infraBottling} alt="Bottling line, glass bottles on conveyor" />
            </div>
            <div className="split-text">
              <span className="eyebrow">In Manufacturing</span>
              <h3>Capacity · Process discipline · Integrated sourcing.</h3>
              <p>
                120 KLPD of capacity, 11 bottling lines, and an integrated
                sugar-to-spirits value chain help maintain consistent output at
                scale while preserving product quality batch after batch.
              </p>
            </div>
          </div>

          <div className="split reverse" style={{ marginBottom: 64 }}>
            <div className="split-media cinematic">
              <img src={IMG.pillarBrand} alt="Pouring santra liqueur, citrus garnish" />
            </div>
            <div className="split-text">
              <span className="eyebrow">In Brand Building</span>
              <h3>Popular flavours · Market understanding · Thoughtful expansion.</h3>
              <p>
                Three clear flavour families — orange, spice, citrus — keep the
                portfolio simple for shelf navigation, while each label develops
                its own loyal following through consistent taste and
                recognisable personality.
              </p>
            </div>
          </div>

          <div className="split" style={{ marginBottom: 64 }}>
            <div className="split-media cinematic">
              <img src={IMG.csrYouth} alt="Rural women in textile workshop" />
            </div>
            <div className="split-text">
              <span className="eyebrow">In Community Impact</span>
              <h3>Employment · Participation · Shared progress.</h3>
              <p>
                Employment generation, water stewardship, rural healthcare, and
                women-led livelihood clusters remain central to how the
                organisation measures meaningful, long-term growth.
              </p>
            </div>
          </div>

          <div className="split reverse">
            <div className="split-media cinematic">
              <img src={IMG.infraFactory} alt="Wide shot of distillery complex at golden hour" />
            </div>
            <div className="split-text">
              <span className="eyebrow">In The Future</span>
              <h3>Responsible scale · Resource efficiency · Commitment to people and place.</h3>
              <p>
                Growth will continue to be guided by responsibility, technology,
                automation, and a strong commitment to investing in the people,
                geographies, and ecosystems that made the group possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--cream)" }}>
        <div className="container" style={{ padding: "72px 0" }}>
          <div className="stat-grid">
            <div>
              <div className="stat-num" style={{ color: "var(--terracotta)" }}>4</div>
              <div className="stat-label" style={{ color: "var(--muted)" }}>
                Core pillars that anchor strategy, operations, and long-term decision-making.
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ color: "var(--terracotta)" }}>1+</div>
              <div className="stat-label" style={{ color: "var(--muted)" }}>
                Integrated ecosystem connecting sugar, molasses, alcohol, liquor, and ethanol into one value chain.
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ color: "var(--terracotta)" }}>360°</div>
              <div className="stat-label" style={{ color: "var(--muted)" }}>
                View of growth that balances consumer needs, manufacturing capacity, environmental care, and social impact.
              </div>
            </div>
            <div>
              <div className="btn-row" style={{ marginTop: 0 }}>
                <Link to="/products" className="btn btn-primary">
                  Explore Our Brands
                </Link>
                <Link to="/infrastructure" className="btn btn-outline">
                  Read The Pillars
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

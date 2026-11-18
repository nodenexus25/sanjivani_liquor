import { Link } from "react-router";
import { IMG, STORY_TIMELINE, LEADERS } from "../data/content";

export default function AboutPage() {
  return (
    <>
      <section className="page-banner" style={{ paddingTop: 160 }}>
        <div className="container">
          <span className="eyebrow">About Sanjivani Spirits</span>
          <h1>64 years of vision, growth, and trust.</h1>
        </div>
      </section>

      <section className="hero" style={{ height: "70vh", minHeight: 480 }}>
        <img src={IMG.heroAbout} alt="Vintage sugar mill, Kopargaon countryside" className="hero-image" />
        <div className="hero-gradient" aria-hidden="true" />
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-text">
            <span className="eyebrow">Our Story</span>
            <h2>From rural aspiration to industry leadership.</h2>
            <p className="lead">
              Sixty-four years ago, a visionary dream took shape: to build a
              world-class organisation that would generate employment and
              improve the lives of fellow villagers in Kopargaon.
            </p>
            <p>
              Although Late Honourable Shri Shankarraoji Kolhe Saheb had the
              opportunity to open a factory in Switzerland while working in
              Europe, he chose instead to return home and build for his country
              and community. That decision led to the foundation of Sahakar
              Maharshi Shankarrao Kolhe Sahakari Sakhar Karkhana Ltd., backed by
              poor, illiterate small landholders of the Kopargaon Taluka.
            </p>
            <p>
              From that humble beginning, the group has grown into a diversified
              enterprise with a long-term commitment to progress, opportunity,
              and self-reliance — spanning education, sugar, liquor, ethanol,
              chemicals, pharma, power, and solvents.
            </p>
          </div>
          <div className="split-media">
            <img src={IMG.storyFounder} alt="Vintage portrait of the founder in sugarcane fields" />
          </div>
        </div>
      </section>

      <section className="section quote-band">
        <div className="container" style={{ padding: "72px 0" }}>
          <blockquote>
            "Growth is only meaningful when it lifts the land, the farmer, the
            worker, and the next generation — together."
          </blockquote>
          <div
            style={{
              marginTop: 22,
              fontSize: "0.82rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--terracotta)",
            }}
          >
            — Founding philosophy, 1962
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 40 }}>
            <div>
              <span className="eyebrow">The Journey</span>
              <h2>Milestones that built an institution.</h2>
            </div>
            <p className="lead">
              From cooperative origins to a diversified group of national scale
              — each decade defined by a deliberate choice to invest locally and
              grow responsibly.
            </p>
          </div>

          <div className="timeline">
            {STORY_TIMELINE.map((ev, i) => (
              <div className="t-item" key={ev.year}>
                <div className="t-content">
                  <div className="t-year">{ev.year}</div>
                  <h3>{ev.title}</h3>
                  <p style={{ maxWidth: 48 }}>{ev.copy}</p>
                </div>
                <div className="t-media">
                  <img src={ev.image} alt={ev.title} loading={i === 0 ? "eager" : "lazy"} />
                </div>
                <div className="t-node" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 20 }}>
            <div>
              <span className="eyebrow">Leadership Messages</span>
              <h2>People who continue to shape the journey.</h2>
            </div>
            <p className="lead">
              Six decades of legacy are carried forward by leaders who balance
              ambition with accountability, and growth with gratitude to the
              communities that built the group.
            </p>
          </div>

          <div className="leader-grid">
            {LEADERS.map((l) => (
              <article className="leader-card" key={l.name}>
                <div
                  className={`leader-portrait ${l.placeholder ? "placeholder" : ""}`}
                >
                  <img src={l.image} alt={l.name} loading="lazy" />
                </div>
                <div>
                  <h4>{l.role}</h4>
                  <h3>{l.name}</h3>
                  <p>{l.message}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-media">
            <img src={IMG.infraFactory} alt="Modern distillery complex at golden hour" />
          </div>
          <div className="split-text">
            <span className="eyebrow">Vision & Mission</span>
            <h2>Clarity in purpose. Discipline in execution.</h2>
            <div style={{ padding: "28px 32px", background: "var(--cream)", borderRadius: 22, marginTop: 20 }}>
              <div style={{ fontSize: "0.74rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--terracotta)", marginBottom: 10 }}>
                Vision
              </div>
              <p className="lead" style={{ margin: 0 }}>
                To be the best country liquor manufacturer in all aspects of our
                business as perceived by customers and dealers.
              </p>
            </div>
            <div style={{ padding: "28px 32px", background: "var(--cream)", borderRadius: 22, marginTop: 18 }}>
              <div style={{ fontSize: "0.74rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--terracotta)", marginBottom: 10 }}>
                Mission
              </div>
              <p className="lead" style={{ margin: 0 }}>
                To ensure socially acceptable practices and to provide
                high-quality liquor at affordable prices to our mass patrons.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--charcoal)" }}>
        <div className="container" style={{ padding: "72px 0", color: "#f8f7f2" }}>
          <div className="stat-grid">
            <div>
              <div className="stat-num">64</div>
              <div className="stat-label">Years of community upliftment, employment, and long-term institution building.</div>
            </div>
            <div>
              <div className="stat-num">1980s</div>
              <div className="stat-label">The decade the first liquor division was established and the foundation for brand leadership was built.</div>
            </div>
            <div>
              <div className="stat-num">1996</div>
              <div className="stat-label">Year SMSSK Ltd. stood among India's top country liquor entities, reflecting strong category leadership.</div>
            </div>
            <div>
              <div className="stat-num">2026</div>
              <div className="stat-label">Today, poised to shape the Indian liquor landscape with technology-led next phase growth.</div>
            </div>
          </div>
          <div className="btn-row" style={{ marginTop: 56 }}>
            <Link to="/products" className="btn btn-primary">
              Explore The Products Built On This Legacy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

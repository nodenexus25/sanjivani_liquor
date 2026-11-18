import { Link } from "react-router";
import { IMG, CSR_AREAS } from "../data/content";

export default function CSRPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Social Responsibility</span>
          <h1>Community progress backed by environmental, healthcare, and livelihood action.</h1>
          <p className="lead">
            Sanjivani Spirits extends its responsibility beyond manufacturing
            through environmental care, healthcare support, and rural
            livelihood creation. These initiatives are built to create long-term
            value for communities around the organisation.
          </p>
        </div>
      </section>

      <section className="hero" style={{ height: "68vh", minHeight: 460 }}>
        <img src={IMG.heroCSR} alt="Village women planting saplings at riverside" className="hero-image" />
        <div className="hero-gradient" aria-hidden="true" />
      </section>

      <section className="section-tight" style={{ background: "var(--charcoal)" }}>
        <div className="container" style={{ padding: "72px 0" }}>
          <div className="stat-grid">
            <div>
              <div className="stat-num">1,00,000+</div>
              <div className="stat-label">Trees planted annually to support reforestation and environmental stewardship.</div>
            </div>
            <div>
              <div className="stat-num">450</div>
              <div className="stat-label">Care center beds created to support communities during the COVID-19 health crisis.</div>
            </div>
            <div>
              <div className="stat-num">1,000+</div>
              <div className="stat-label">Rural youth employed through call centres, helping create dependable livelihoods.</div>
            </div>
            <div>
              <div className="stat-num">360°</div>
              <div className="stat-label">Community impact spanning greener surroundings, stronger healthcare, and women's livelihoods.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-text">
            <span className="eyebrow">Why It Matters</span>
            <h2>Responsible growth has to reach the ground.</h2>
            <p className="lead">
              The organisation's social responsibility efforts focus on
              practical community outcomes: greener surroundings, stronger
              access to healthcare, and better livelihood opportunities for
              women and rural youth.
            </p>
            <p>
              Each initiative is built around measurable action, from annual
              plantation drives and water conservation to healthcare delivery
              and employment-linked skill development.
            </p>
          </div>
          <div className="split-media cinematic">
            <img src={IMG.csrTrees} alt="Villagers planting saplings along riverbank" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="two-copy" style={{ marginBottom: 10 }}>
            <div>
              <span className="eyebrow">Core Initiatives</span>
              <h2>Three areas of community action.</h2>
            </div>
            <p className="lead">
              Content structured exactly around the organisation's stated
              pillars: environment, healthcare and welfare, and education-led
              employment.
            </p>
          </div>

          <div className="impact-grid">
            {CSR_AREAS.map((a) => (
              <article className="impact" key={a.title}>
                <div className="icon" aria-hidden="true">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.copy}</p>
                <ul>
                  {a.bullets.map((b) => (
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
          <div className="split" style={{ marginBottom: 100 }}>
            <div className="split-media cinematic">
              <img src={IMG.csrHealth} alt="Mobile medical van in rural village" />
            </div>
            <div className="split-text">
              <span className="eyebrow">Healthcare & Welfare</span>
              <h2>Care where infrastructure does not always reach.</h2>
              <p className="lead">
                A 450-bedded COVID Care Center was established during the
                pandemic to provide essential medical support when it was
                needed most.
              </p>
              <p>
                Mobile medical van services continue to help take healthcare
                support into rural areas where timely medical assistance is
                often needed most.
              </p>
            </div>
          </div>

          <div className="split reverse">
            <div className="split-media cinematic">
              <img src={IMG.csrYouth} alt="Young women in textile workshop" />
            </div>
            <div className="split-text">
              <span className="eyebrow">Education & Employment</span>
              <h2>Turning rural potential into dependable opportunity.</h2>
              <p className="lead">
                Over 1,000 rural youth have found employment through call
                centres, creating stable opportunities and strengthening local
                economic growth.
              </p>
              <p>
                Women's empowerment is advanced through textile clusters that
                help women build valuable skills and gain financial
                independence — turning capability into lasting prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="eyebrow" style={{ color: "#f4c9a7" }}>
                Next · Start A Conversation
              </span>
              <h2>Reach out to explore partnership or a factory visit.</h2>
              <p>
                Dealer enquiries, product questions, business meetings, and
                factory visit coordination — the team in Kopargaon is ready to
                host the conversation.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/" className="btn btn-outline">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import { IMG, CONTACT } from "../data/content";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>Built in Kopargaon. Trusted across generations.</h1>
          <p className="lead">
            Sanjivani Spirits combines a 64-year legacy, a recognised country
            liquor portfolio, and modern infrastructure designed to support
            quality, consistency, and long-term growth.
          </p>
        </div>
      </section>

      <section className="hero" style={{ height: "58vh", minHeight: 420 }}>
        <img src={IMG.heroContact} alt="Heritage brick industrial office entrance" className="hero-image" />
        <div className="hero-gradient" aria-hidden="true" />
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">Contact Info</span>
              <h2>Let's talk about the next chapter.</h2>
              <p className="lead">
                Dealer partnerships, product questions, corporate meetings, or
                a factory visit — the Kopargaon team is happy to host the
                conversation.
              </p>

              <div className="info-card" style={{ marginTop: 32 }}>
                <div className="row">
                  <div className="label">Address</div>
                  <div className="val">{CONTACT.address}</div>
                </div>
                <div className="row">
                  <div className="label">Phone</div>
                  <div className="val">
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} style={{ color: "var(--ink)" }}>
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="label">Directions</div>
                  <div className="val">
                    <a
                      href={CONTACT.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "var(--terracotta)", fontWeight: 500 }}
                    >
                      Open Google Maps →
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="label">Hours</div>
                  <div className="val">{CONTACT.hours}</div>
                </div>
                <div className="row">
                  <div className="label">Best For</div>
                  <div className="val">{CONTACT.bestFor}</div>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              aria-label="Contact form"
            >
              <span className="eyebrow">Send A Message</span>
              <div className="field">
                <label htmlFor="f-name">Full Name</label>
                <input id="f-name" type="text" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" type="email" required placeholder="name@company.com" />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Phone</label>
                <input id="f-phone" type="tel" placeholder="+91 …" />
              </div>
              <div className="field">
                <label htmlFor="f-type">Enquiry Type</label>
                <select id="f-type" defaultValue="Dealer">
                  <option>Dealer / Distributor</option>
                  <option>Product Question</option>
                  <option>Business Meeting</option>
                  <option>Factory Visit</option>
                  <option>Press / Media</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-msg">Message</label>
                <textarea
                  id="f-msg"
                  required
                  placeholder="Tell us a little about the enquiry, region, and timelines…"
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                {submitted ? "Message Received ✓" : "Send Enquiry"}
              </button>
              {submitted && (
                <p style={{ margin: 0, color: "var(--forest)", fontSize: "0.9rem" }}>
                  Thank you. The Sanjivani Spirits team will reach out during
                  working hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

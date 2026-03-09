import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

const sectors = [
  "Med Spa & Aesthetics",
  "Fitness & Recovery",
  "Wellness Clinics",
  "Longevity & Preventive Health",
  "IV Therapy & Functional Health",
  "Supplements & Consumer Wellness"
];

const criteria = [
  "Founder-led businesses with strong local or regional brand equity",
  "Recurring revenue or high repeat customer behavior",
  "Clear upside in operations, marketing, expansion, or shared services",
  "Businesses in med spa, wellness, fitness, recovery, or longevity categories"
];

const reasons = [
  {
    title: "Founder-friendly process",
    text: "We aim for a straightforward, confidential process that respects what owners have built."
  },
  {
    title: "Operator mindset",
    text: "We think beyond the transaction and focus on what strengthens the business after close."
  },
  {
    title: "Premium brand lens",
    text: "We believe positioning, experience, and retention are strategic assets in wellness."
  },
  {
    title: "Long-term value creation",
    text: "Our goal is to build an enduring platform, not simply trade assets."
  }
];

const processSteps = [
  "Introductory conversation and high-level fit review",
  "Confidential evaluation of business quality, growth profile, and ownership goals",
  "Letter of intent, diligence, and thoughtful transition planning",
  "Post-close support across brand, operations, growth, and integration"
];

const stats = [
  { label: "Brand Positioning", value: "Premium" },
  { label: "Acquisition Focus", value: "Health & Wellness" },
  { label: "Domain", value: "Longevity-Brands.com" }
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="pill">Acquisition platform for modern wellness</div>
              <h1>Building a leading portfolio of health, wellness, fitness, and longevity businesses.</h1>
              <p className="lead">
                Longevity Brands acquires and grows standout businesses in med spa, wellness, recovery,
                and preventive health. We combine a premium brand lens with disciplined M&amp;A execution
                and operator-led value creation.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">Discuss an Opportunity</a>
                <a className="btn btn-secondary" href="#criteria">View Investment Criteria</a>
              </div>

              <div className="stat-grid">
                {stats.map((item) => (
                  <div className="stat-card" key={item.label}>
                    <div className="stat-label">{item.label}</div>
                    <div className="stat-value">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card hero-side">
              <div className="hero-side-inner">
                <Image className="logo-large" src="/logo.png" alt="Longevity Brands mark" width={180} height={180} />
                <div className="card-grid">
                  <div className="mini-card">
                    <div className="section-kicker">Positioning</div>
                    <div>
                      A premium health and wellness holding company focused on owning and acquiring
                      attractive businesses in fragmented, high-growth categories.
                    </div>
                  </div>
                  <div className="mini-card">
                    <div className="section-kicker">Ideal Seller</div>
                    <div>
                      A founder seeking liquidity, succession planning, strategic support, or a partner
                      to help the business reach its next phase.
                    </div>
                  </div>
                  <div className="mini-card">
                    Before launch, replace the sample contact details with your actual email, phone, and preferred inquiry workflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <div className="section-kicker">About</div>
              <h2>Designed to acquire strong wellness brands and help them scale with discipline.</h2>
            </div>
            <div className="copy-grid">
              <p>
                Consumer demand for proactive health, aesthetics, recovery, and longevity services continues
                to expand. Yet many quality businesses in these categories remain founder-led and operationally
                underbuilt for their next stage.
              </p>
              <p>
                Longevity Brands exists to acquire those businesses thoughtfully, preserve what makes them
                special, and strengthen them through better systems, brand strategy, and long-term capital allocation.
              </p>
            </div>
          </div>
        </section>

        <section id="criteria" className="section section-border">
          <div className="container two-col">
            <div>
              <div className="section-kicker">Investment Criteria</div>
              <h2>The types of businesses we are seeking to own and grow.</h2>
              <p className="lead">
                This section is designed for sellers, brokers, and referral partners. It gives immediate clarity
                on fit and helps the website feel like a serious acquisition platform.
              </p>
            </div>
            <div className="criteria-grid">
              {criteria.map((item) => (
                <div key={item} className="criteria-item">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="sectors" className="section">
          <div className="container">
            <div className="section-kicker">Focus Sectors</div>
            <h2>Category focus across attractive areas of health and wellness.</h2>
            <div className="sector-grid">
              {sectors.map((sector) => (
                <div key={sector} className="sector-card">{sector}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-band">
          <div className="container two-col">
            <div>
              <div className="section-kicker" style={{color: "#e1cc90"}}>Why Sellers Work With Us</div>
              <h2>A story built to feel credible, premium, and founder-aware.</h2>
            </div>
            <div className="reason-grid">
              {reasons.map((reason) => (
                <div key={reason.title} className="reason-card">
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container two-col">
            <div>
              <div className="section-kicker">Process</div>
              <h2>A simple, clear process for founders exploring a sale or partnership.</h2>
              <div className="process-list">
                {processSteps.map((step, index) => (
                  <div key={step} className="process-card">
                    <div className="step-number">{index + 1}</div>
                    <div>{step}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="section-kicker">Suggested Launch Additions</div>
              <p className="helper">Add a real inquiry form connected to your email.</p>
              <p className="helper">Add your actual city or headquarters if you want geographic context.</p>
              <p className="helper">Add a privacy policy and terms page in the footer.</p>
              <p className="helper">Add a founder note or short investment philosophy from you personally.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-band">
          <div className="container contact-grid">
            <div>
              <div className="section-kicker" style={{color: "#f3e7bd"}}>Contact</div>
              <h2>Interested in selling a business, partnering, or sharing a relevant opportunity?</h2>
              <p className="lead" style={{color: "#fbf6e7"}}>
                This section is ready to become your main conversion point. Replace the sample details
                below with your preferred contact workflow before launch.
              </p>
            </div>

            <div className="contact-card">
              <div className="section-kicker">Sample Contact Block</div>
              <h3 style={{fontSize: "1.8rem", marginTop: 0}}>Longevity Brands</h3>
              <p>Website: Longevity-Brands.com</p>
              <p>Email: hello@longevity-brands.com</p>
              <p>Phone: add your preferred number</p>
              <p>Use this area for seller inquiries, broker introductions, and strategic partnerships.</p>

              <form className="form-grid">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" />
                </label>
                <label>
                  Message
                  <textarea name="message" placeholder="Tell us about the opportunity" />
                </label>
                <button type="button" className="btn btn-primary">Sample Form Button</button>
              </form>

              <p className="helper">
                This form is intentionally a visual placeholder. It can be connected later to Formspree,
                Web3Forms, Resend, or your CRM after deployment.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <Image src="/logo.png" alt="Longevity Brands logo" width={32} height={32} />
            <div>Longevity Brands</div>
          </div>
          <div className="footer-links">
            <span>Longevity-Brands.com</span>
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </>
  );
}

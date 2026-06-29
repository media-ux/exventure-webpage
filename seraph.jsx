// Seraph Group — biomanufacturing sub-page (reuses ex-ip.css vocabulary)
function SeraphNav({ onBookCall }) {
  const links = [
    { l: "What We Produce", h: "#produce" },
    { l: "How It Works", h: "#how" },
    { l: "Advantages", h: "#advantage" },
    { l: "R&D", h: "#rnd" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="EX Venture Site.html" className="nav-logo">
          <span className="wordmark"><span className="wm-accent">EX</span> VENTURE</span>
          <span className="ip-navmark">SERAPH&nbsp;GROUP</span>
        </a>
        <div className="nav-links">
          {window.VenturesMenu ? <window.VenturesMenu /> : null}
          {links.map((l, i) => <a key={i} href={l.h}>{l.l}</a>)}
        </div>
        <button className="nav-cta" onClick={onBookCall}>
          Get in Touch <span style={{ fontSize: 11 }}>↗</span>
        </button>
      </div>
    </nav>
  );
}

function SeraphHero() {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/seraph-hero.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">SERAPH GROUP</div>
        <h1 className="ip-title">Decentralized <span className="gold">Biomanufacturing</span></h1>
        <p className="ip-verb">
          Precision biology.<br/><span className="gold">Infinite scale.</span>
        </p>
        <p className="ip-lead">
          Seraph is an investment group within EX Venture building autonomous biomanufacturing systems. We combine AI-powered vision with automated cultivation to produce high-value proteins, pharmaceuticals, bioactive compounds, and sustainable materials from the world's fastest-growing plant.
        </p>
        <p className="ip-lead" style={{ marginTop: 18 }}>
          The systems are modular and containerized, designed for deployment anywhere — a cultivation architecture that keeps the growing crop undisturbed while machine vision and robotics handle precision monitoring and selective harvest.
        </p>
      </div>
    </section>
  );
}

function SeraphProduce() {
  const items = [
    { k: "Pharmaceuticals", h: "Therapeutic proteins & antibodies", p: "A host system engineered to produce therapeutic proteins and antibodies at high value density." },
    { k: "Nutrition", h: "Complete protein at scale", p: "Complete protein for global food applications — produced locally, anywhere a container can ship." },
    { k: "Skincare", h: "Bioactive compounds", p: "Bioactive compounds cultivated to specification for premium skincare formulations." },
    { k: "Sustainable Materials", h: "Carbon-negative oils & materials", p: "Oil-production pathways and carbon-negative materials derived from the same living platform." },
    { k: "Space Biotech", h: "Closed-loop life support", p: "The German Aerospace Center (DLR) uses our production organism as a model for closed-loop bioregenerative life support — biomass, water recycling, and oxygen generation on long-duration missions." },
  ];
  return (
    <section className="section" id="produce" data-screen-label="02 What We Produce">
      <div className="container">
        <div className="x150-intro-grid">
          <div className="ip-intro" style={{ marginBottom: 0 }}>
            <div className="label">What We Produce</div>
            <h2>One platform. <span className="gold">Five outputs.</span></h2>
            <p>The same cultivation system produces proteins, oils, and therapeutic compounds — the output is determined by the crop, not the hardware.</p>
          </div>
          <figure className="x150-figure">
            <img src="assets/photos/seraph-produce.jpg" alt="Seraph operator monitoring the cultivation platform" />
            <figcaption><span className="dot"></span>Live process monitoring</figcaption>
          </figure>
        </div>
        <div className="ip-grid cols-3">
          {items.map((it, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{it.k}</div>
              <h3 className="ip-h">{it.h}</h3>
              <p className="ip-p">{it.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeraphHow() {
  const steps = [
    { n: "/ 01", name: "Stacked Cultivation", p: "Stacked cultivation tiers let the production organism mature as it migrates through the stack. Only mature biomass is removed; the remaining crop is never disturbed, which improves yield." },
    { n: "/ 02", name: "Machine Vision", p: "Vision systems monitor crop health at the frond level, detecting issues before they are visible to the human eye. Spectral sensors measure composition in real time, so every harvest decision is data-driven." },
    { n: "/ 03", name: "Carbon Integration", p: "Industrial CO₂ streams are integrated as the primary carbon source, making the system carbon-negative at scale. Nutrient inputs are calculated from exactly what the harvest removes." },
    { n: "/ 04", name: "Field-Validated", p: "Field operations in Bali, Indonesia validate every system under real tropical conditions before global deployment — a closed-loop production cycle with near-zero waste." },
  ];
  return (
    <section className="section" id="how" data-screen-label="03 How It Works" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">How It Works</div>
          <h2>A closed loop, <span className="gold">end to end.</span></h2>
        </div>
        <div className="ip-grid cols-2">
          {steps.map((s, i) => (
            <div className="ip-cell ip-phase" key={i}>
              <div className="ip-k">{s.n}</div>
              <h3 className="name">{s.name}</h3>
              <div className="barb"></div>
              <p className="ip-p">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeraphBand() {
  return (
    <section className="ip-band" data-screen-label="04 Statement">
      <div className="ip-band-img"><img src="assets/photos/seraph-band.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          Only mature biomass is removed. <span className="gold">The living crop is never disturbed.</span>
        </p>
      </div>
    </section>
  );
}

function SeraphAdvantage() {
  const pillars = [
    { name: "Autonomous", tag: "AI-Driven", type: "gold", p: "AI-driven operation reduces the need for on-site staff. Systems run with minimal human intervention." },
    { name: "Modular", tag: "Containerized", type: "ghost", p: "Containerized deployment scales from a single unit to multi-site fleets. Each unit operates independently." },
    { name: "Carbon-Negative", tag: "CO₂ Source", type: "gold", p: "Industrial CO₂ is the primary carbon source. The system captures more carbon than it emits." },
    { name: "Closed-Loop", tag: "Near-Zero Waste", type: "ghost", p: "Nutrients are recovered and recycled. Waste is reduced to near zero." },
    { name: "Multi-Product", tag: "One Platform", type: "gold", p: "The same platform produces proteins, oils, and therapeutic compounds depending on the crop." },
  ];
  return (
    <section className="section" id="advantage" data-screen-label="05 The Advantage">
      <div className="container">
        <div className="ip-intro">
          <div className="label">The Advantage</div>
          <h2>Why the model <span className="gold">compounds.</span></h2>
        </div>
        <div className="ip-pillars">
          {pillars.map((p, i) => (
            <div className="ip-pillar" key={i}>
              <span className={"ip-tag " + p.type}>{p.tag}</span>
              <h3 className="pname">{p.name}</h3>
              <p className="pdesc">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeraphRnD() {
  const cards = [
    { name: "Patent Portfolio", tag: "Filed · Multi-Jurisdiction", p: "Coverage across cultivation system architecture, machine vision for plant-health classification, natural light distribution for stacked tiers, CO₂ integration, closed-loop nutrient management, and environmental composition steering. Patent applications filed across multiple jurisdictions." },
    { name: "Digital Twin", tag: "Physics-Validated", p: "Our digital twin and physics engine are validated against independent microgravity datasets from the German Aerospace Center and parallel research at the University of Adelaide for space-based life-support applications." },
  ];
  return (
    <section className="section" id="rnd" data-screen-label="06 Research & Development" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Research & Development</div>
          <h2>Defensible by <span className="gold">design.</span></h2>
        </div>
        <div className="ip-port">
          {cards.map((c, i) => (
            <div className="ip-port-card" key={i}>
              <div className="ip-port-head">
                <h3 className="ip-port-name">{c.name}</h3>
                <span className="ip-port-tag">{c.tag}</span>
              </div>
              <p className="ip-port-desc">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeraphTalent() {
  const stats = [
    { k: "Trained", h: "250+" },
    { k: "Locations", h: "5" },
    { k: "Current Cohort", h: "04" },
  ];
  return (
    <section className="section" id="talent" data-screen-label="07 Talent Pipeline">
      <div className="container">
        <div className="x150-intro-grid">
          <div className="ip-intro" style={{ marginBottom: 0 }}>
            <div className="label">Talent Pipeline</div>
            <h2>Operators, <span className="gold">trained to deploy.</span></h2>
            <p>Operators are trained through EX Academy — a six-month traineeship that produces deployable talent for every Seraph system in the field.</p>
          </div>
          <figure className="x150-figure">
            <img src="assets/photos/seraph-operators.jpg" alt="A trained operator monitoring a Seraph cultivation system" />
            <figcaption><span className="dot"></span>EX Academy operator</figcaption>
          </figure>
        </div>
        <div className="ip-grid cols-3">
          {stats.map((s, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{s.k}</div>
              <h3 className="ip-h" style={{ fontSize: "44px", color: "var(--bsm-gold)" }}>{s.h}</h3>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <a className="ip-mail" href="https://baliinternship.com/" target="_blank" rel="noopener noreferrer">Explore EX Academy ↗</a>
        </div>
      </div>
    </section>
  );
}

function SeraphContact({ onBookCall }) {
  return (
    <section className="ip-cta" id="contact" data-screen-label="08 Contact">
      <div className="ip-cta-bg"><img src="assets/photos/seraph-cta.jpg" alt="" /></div>
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Build With Seraph</div>
        <h2>Biomanufacturing,<br/><span className="gold">anywhere.</span></h2>
        <p>
          If you are working in pharmaceuticals, nutrition, advanced materials, or space life support — and want autonomous, carbon-negative production deployed where you need it — let us talk.
        </p>
        <div className="ip-cta-actions">
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
          <a className="ip-mail" href="mailto:media@exventure.co">media@exventure.co</a>
        </div>
      </div>
    </section>
  );
}

function SeraphDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Disclaimer</span>
          Seraph is an investment group within EX Venture Inc. (SEC registered). Nothing on this page constitutes investment advice, a solicitation to invest, or a financial promotion. Patent status, partnerships, and system capabilities are subject to change.
        </p>
      </div>
    </div>
  );
}

function SeraphApp() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = React.useCallback(() => setModalOpen(true), []);
  const closeModal = React.useCallback(() => setModalOpen(false), []);

  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.section, .ip-band, .ip-cta').forEach(s => {
      s.classList.add('reveal'); io.observe(s);
    });
    return () => io.disconnect();
  }, []);

  const Footer = window.Footer;
  const BookCallModal = window.BookCallModal;

  return (
    <div className="ip-page">
      <GlobalNav navmark="SERAPH GROUP" onBookCall={openModal} />
      <main>
        <SeraphHero />
        <SeraphProduce />
        <SeraphHow />
        <SeraphBand />
        <SeraphAdvantage />
        <SeraphRnD />
        <SeraphTalent />
        {window.VerbSequence ? <window.VerbSequence /> : null}
        <SeraphContact onBookCall={openModal} />
        <SeraphDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Seraph · Biotech" /> : null}
    </div>
  );
}

(function mountSeraph() {
  if (window.Footer && window.BookCallModal && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<SeraphApp />);
  } else {
    setTimeout(mountSeraph, 50);
  }
})();

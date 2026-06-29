// EX IP Ventures — sub-page
function IPNav({ onBookCall }) {
  const links = [
    { l: "Thesis", h: "#ip-thesis" },
    { l: "The Machine", h: "#ip-machine" },
    { l: "Pillars", h: "#ip-pillars" },
    { l: "Portfolio", h: "#ip-portfolio" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="EX Venture Site.html" className="nav-logo">
          <span className="wordmark"><span className="wm-accent">EX</span> VENTURE</span>
          <span className="ip-navmark">IP&nbsp;VENTURES</span>
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

function IPHero({ onBookCall }) {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/field-01.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">EX IP VENTURES</div>
        <h1 className="ip-title">Intellectual <span className="gold">Property</span> Infrastructure</h1>
        <p className="ip-verb">
          We create intellectual property.<br/>
          We spin out companies. <span className="gold">We exit.</span>
        </p>
        <p className="ip-lead">
          AI scans millions of data points to find white-space opportunities before anyone else sees them. We render prototypes from drawings and simulate them as digital twins before building hardware. <strong>Faster filing, stronger claims, lower risk.</strong>
        </p>
        <p className="ip-lead" style={{ marginTop: 18 }}>
          The patent creation and commercialisation arm of EX Venture — backed by hardware engineering, AI systems, grant capital, and a talent pipeline.
        </p>
      </div>
    </section>
  );
}

function IPThesis() {
  const items = [
    { k: "The AI Paradox", h: "AI makes defensible IP more valuable — not less", p: "AI can generate ten thousand invention disclosures an hour. That makes granted, examined, defensible IP scarcer and more valuable. The scarcity shifts from ideation to validation, legal certainty, and commercialisation." },
    { k: "The Enduring Asset", h: "A granted patent is a sovereign-backed monopoly", p: "AI cannot grant patents. AI cannot defend them in court. AI cannot negotiate an exit. The value of defensible IP rises exactly as fast as the noise-to-signal ratio of generated content." },
    { k: "Market Liquidity", h: "IP is a liquid asset class", p: "Patent acquisition markets are mature and growing. The AI startup wave creates a new generation of acquirers who need portfolios to defend themselves and command premium exits." },
    { k: "The White-Space Imperative", h: "Priority dates that dominate the lifecycle", p: "Space, energy, wellness, AI, quantum — the domains where the next wave of value is created are all early-stage white spaces. Filing now means priority dates that dominate the entire commercial lifecycle." },
  ];
  return (
    <section className="section" id="ip-thesis" data-screen-label="02 Thesis">
      <div className="container">
        <div className="ip-intro">
          <div className="label">The Thesis</div>
          <h2>Why IP value <span className="gold">endures</span> in the age of AI</h2>
        </div>
        <div className="ip-grid cols-2">
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

function IPMachine() {
  const phases = [
    { n: "/ 01", name: "Find", p: "AI-driven white-space analysis across technology pillars. Patent gap analysis against commercial and scientific databases — domains with high commercial density and low patent density." },
    { n: "/ 02", name: "Write", p: "Deep-dive invention disclosure with the engineers who built the system. Full specification to premium standards: prior art, non-obviousness, complete mass and energy balances. Every claim grounded in a machine that runs." },
    { n: "/ 03", name: "File", p: "Priority dates locked within weeks of disclosure. Filing strategy optimised for speed, cost, and territorial breadth. Full international patent extension." },
    { n: "/ 04", name: "Manage", p: "Prosecution monitoring, office action responses, annuity management. Competitive monitoring and freedom-to-operate analysis across jurisdictions." },
    { n: "/ 05", name: "Spin Out", p: "When a patent family reaches granted or near-granted status, we spin it out as a standalone company. AI-run operations, talent in the founding team, grant capital for runway." },
    { n: "/ 06", name: "Exit", p: "Build to exit-ready. Exit via strategic acquisition, patent licensing, or management buyout." },
  ];
  return (
    <section className="section" id="ip-machine" data-screen-label="03 The Machine" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">The Machine</div>
          <h2>Six phases, <span className="gold">end to end</span></h2>
          <p>From white-space scan to exit. One pipeline that turns invention into a granted, defensible, commercialised asset.</p>
        </div>
        <div className="ip-grid cols-3">
          {phases.map((p, i) => (
            <div className="ip-cell ip-phase" key={i}>
              <div className="ip-k">{p.n}</div>
              <h3 className="name">{p.name}</h3>
              <div className="barb"></div>
              <p className="ip-p">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IPBand() {
  return (
    <section className="ip-band" data-screen-label="04 Statement">
      <div className="ip-band-img"><img src="assets/photos/collab-03.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          AI cannot grant patents. AI cannot defend them in court. <span className="gold">AI cannot negotiate an exit.</span>
        </p>
      </div>
    </section>
  );
}

function IPPillars() {
  const pillars = [
    { name: "Space", tag: "White-Space", type: "gold", p: "Satellite-based sensing and in-space resource utilisation. Sensor telemetry for closed-loop energy systems in space habitats." },
    { name: "Wellness", tag: "Zero Overlap", type: "gold", p: "Sensory wellness, biofeedback, female technology. A thermal closed-loop platform with bayesian inference and an edge-AI privacy architecture." },
    { name: "Energy", tag: "TRL 7", type: "ghost", p: "Advanced gasification, waste-to-energy, carbon capture, hydrogen from waste. Multiple patent families derived from real operating data." },
    { name: "AI", tag: "In Production", type: "ghost", p: "Industrial vision-language models, federated learning, on-device agent orchestration. Few-shot anomaly detection deployed in production." },
    { name: "Quantum", tag: "White-Space", type: "gold", p: "Quantum sensors and quantum-classical hybrid computing. Early-stage white-space scanning underway." },
    { name: "Advanced Materials", tag: "In-House", type: "ghost", p: "Biochar composites, catalytic materials, CO₂ sorbents, thermal management. Proprietary catalyst and sorbent formulations." },
  ];
  return (
    <section className="section" id="ip-pillars" data-screen-label="05 Pillars">
      <div className="container">
        <div className="ip-intro">
          <div className="label">Technology Pillars</div>
          <h2>Where we <span className="gold">file early</span></h2>
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

function IPPipeline() {
  const trio = [
    { k: "01", h: "Opportunity Detection", p: "AI scans scientific literature, patent databases, grant calls, and market data to find high-value white spaces before they become obvious — the domains where filing early means dominating the lifecycle." },
    { k: "02", h: "Digital Prototyping", p: "Concepts move from drawing to digital twin in days, not months. We simulate performance, surface failure modes, and strengthen claims with simulation data before building physical hardware." },
    { k: "03", h: "Drafting Augmentation", p: "AI accelerates prior art searching, claim drafting, and specification writing — cutting drafting time while holding prosecution-grade quality." },
  ];
  return (
    <section className="section" id="ip-pipeline" data-screen-label="06 AI Pipeline" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">How AI Powers the Pipeline</div>
          <h2>Machines that <span className="gold">find and build</span></h2>
        </div>
        <div className="ip-grid cols-3">
          {trio.map((t, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{t.k}</div>
              <h3 className="ip-h">{t.h}</h3>
              <p className="ip-p">{t.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IPAdvantage() {
  const adv = [
    { h: "Hardware & Engineering", p: "Every patent grounded in a physical machine that runs. Gasification platform at TRL 7 with thousands of validated hours." },
    { h: "Sensor & Edge AI Stack", p: "Full sensor-to-decision stack from years of industrial deployment. Edge inference for real-time analytics." },
    { h: "AI Vision Systems", p: "Vision-language models for few-shot anomaly detection in production. Partnerships with Fraunhofer IPA and DFKI Berlin." },
    { h: "Full-Stack Robotics", p: "Edge AI at the joint level. Depth and LiDAR fusion. Simulation environments for rapid iteration — IP-backed hardware without capital-intensive tooling." },
    { h: "Grant Capital", p: "Non-repayable grant capital awarded, with an active pipeline across European programmes. Filing subsidised by non-dilutive funding." },
    { h: "Talent Pipeline", p: "Hundreds of alumni from an elite programme — placed at Goldman Sachs, KPMG, EY. We train our own patent drafters and spin-out CTOs." },
    { h: "Multi-Jurisdictional Entities", p: "Entities across Germany, Spain, Ireland, the US, UK, Australia, and the UAE. SEC-registered parent. FCA-authorised financial services." },
    { h: "Research Network", p: "DLR, Fraunhofer, Helmholtz, KIT, RWTH Aachen, TU Munich, Lawrence Berkeley National Laboratory, TU Delft." },
  ];
  return (
    <section className="section" id="ip-advantage" data-screen-label="07 Advantage">
      <div className="container">
        <div className="ip-intro">
          <div className="label">Why EX</div>
          <h2>The full-stack <span className="gold">advantage</span></h2>
          <p>Most IP shops draft and file. We build the machine the patent describes — then spin it out and exit it.</p>
        </div>
        <div className="ip-grid cols-4">
          {adv.map((a, i) => (
            <div className="ip-cell compact" key={i}>
              <h3 className="ip-h">{a.h}</h3>
              <p className="ip-p">{a.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IPPortfolio() {
  const port = [
    { name: "Zero-X", tag: "Energy · Carbon", p: "Multiple patent families in energy, gasification, and carbon management. Inventions span reactor design, catalyst systems, and filtration. Granted patents in multiple jurisdictions." },
    { name: "Equation Labs", tag: "Catalysis · Capture", p: "Active filings in catalytic tar reforming, catalyst formulations, gas filtration, and CO₂ capture." },
    { name: "LILIA", tag: "Wellness · Edge AI", p: "Patent ideas across thermal closed-loop platforms, articulated stimulation with edge-AI control, and biofeedback — a sensory wellness platform." },
    { name: "MindWaves / Gemino AI", tag: "Industrial AI", p: "Active pipeline in vision-language models for industrial anomaly detection, on-device agent orchestration, and federated learning." },
  ];
  return (
    <section className="section" id="ip-portfolio" data-screen-label="08 Portfolio" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Current Portfolio</div>
          <h2>What we have <span className="gold">already built</span></h2>
        </div>
        <div className="ip-port">
          {port.map((p, i) => (
            <div className="ip-port-card" key={i}>
              <div className="ip-port-head">
                <h3 className="ip-port-name">{p.name}</h3>
                <span className="ip-port-tag">{p.tag}</span>
              </div>
              <p className="ip-port-desc">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IPFounder() {
  return (
    <section className="section" id="ip-founder" data-screen-label="09 Founder">
      <div className="container">
        <div className="ip-founder-grid">
          <div className="ip-founder-figure">
            <img src="assets/team/julien-uhlig.jpg" alt="Julien Uhlig" />
          </div>
          <div>
            <div className="ip-k">The Founder</div>
            <h2 className="ip-founder-name">Julien Uhlig<br/><span className="gold">Builder, not a bystander.</span></h2>
            <p className="ip-founder-body">
              Thirty years at the intersection of industrial technology, capital markets, and applied research. Led a major energy technology restructuring backed by <strong>Kleiner Perkins</strong> and <strong>Wellington Partners</strong>. Deployed distributed energy systems across twelve countries. Fast Company's Number One Energy Company of 2018. Author of <strong>Bali State of Mind</strong>. Founder of EX Venture Group.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IPContact({ onBookCall }) {
  return (
    <section className="ip-cta" id="ip-contact" data-screen-label="10 Contact">
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Interested?</div>
        <h2>Captured. Protected.<br/><span className="gold">Commercialised.</span></h2>
        <p>
          If you are building in deep tech, cleantech, or frontier technology — and want your inventions captured, protected, and commercialised, or want into the spin-out pipeline — let us talk.
        </p>
        <div className="ip-cta-actions">
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
          <a className="ip-mail" href="mailto:media@exventure.co">media@exventure.co</a>
        </div>
      </div>
    </section>
  );
}

function IPDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Disclaimer</span>
          EX IP Ventures is a division of EX Venture Inc. (SEC registered). Nothing on this page constitutes investment advice, a solicitation to invest, or a financial promotion. Patent status and portfolio composition are subject to change.
        </p>
      </div>
    </div>
  );
}

function IPApp() {
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
      <GlobalNav navmark="IP VENTURES" onBookCall={openModal} />
      <main>
        <IPHero onBookCall={openModal} />
        <IPThesis />
        <IPMachine />
        <IPBand />
        <IPPillars />
        <IPPipeline />
        <IPAdvantage />
        <IPPortfolio />
        <IPFounder />
        {window.VerbSequence ? <window.VerbSequence /> : null}
        <IPContact onBookCall={openModal} />
        <IPDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="EX IP · Patents" /> : null}
    </div>
  );
}

(function mountIP() {
  if (window.Footer && window.BookCallModal && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<IPApp />);
  } else {
    setTimeout(mountIP, 50);
  }
})();

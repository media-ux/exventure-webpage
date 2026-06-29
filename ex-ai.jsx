// EX AI — internal AI operating page (reuses ex-ip.css vocabulary)
function AINav({ onBookCall }) {
  const links = [
    { l: "Robotic Lab", h: "#lab" },
    { l: "The Fleet", h: "#fleet" },
    { l: "AI-First Ops", h: "#ops" },
    { l: "The Loop", h: "#loop" },
    { l: "Partners", h: "#partners" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="EX Venture Site.html" className="nav-logo">
          <span className="wordmark"><span className="wm-accent">EX</span> VENTURE</span>
          <span className="ip-navmark">EX&nbsp;AI</span>
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

function AIHero() {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/collab-04.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">EX AI</div>
        <h1 className="ip-title">The best opportunity of <span className="gold">our lifetime</span></h1>
        <p className="ip-verb">
          This is not a belief.<br/><span className="gold">It is a daily operating reality.</span>
        </p>
        <p className="ip-lead">
          Every machine we build, every grant we write, every patent we draft, every plant we run — AI is in it. Not coming. Here. We treat AI as the default answer and then ask whether a different answer is better, not the other way around.
        </p>
      </div>
    </section>
  );
}

function AILab() {
  const cells = [
    { k: "The System", h: "EPIC Vision", p: "A robotically controlled, AI-based precision camera system. It combines mechanical positioning, optical hardware, and an inference pipeline trained on biological imagery." },
    { k: "The Environment", h: "Built for what destroys hardware", p: "The target environment is harsh greenhouse conditions — high humidity, variable lighting, thermal stress — exactly what real-world bioproduction demands." },
    { k: "The Loop", h: "Images into decisions", p: "The camera is the data-acquisition layer. The AI is what turns images into decisions. Together they close a loop no human can sustain at scale for eight hours a day." },
    { k: "The Status", h: "A live R&D project", p: "Not a research prototype. A live R&D project with Reichmann Biotechnik, rooted in the WATERGY project, targeting commercial deployment." },
  ];
  return (
    <section className="section" id="lab" data-screen-label="02 The AI Robotic Lab">
      <div className="container">
        <div className="ip-intro">
          <div className="label">The AI Robotic Lab</div>
          <h2>Where hardware <span className="gold">meets intelligence.</span></h2>
          <p>We build the vision systems. We train the models. We deploy into environments that destroy consumer hardware.</p>
        </div>
        <div className="ip-grid cols-2">
          {cells.map((c, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{c.k}</div>
              <h3 className="ip-h">{c.h}</h3>
              <p className="ip-p">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIFleet() {
  const units = [
    {
      name: "Seraph",
      tag: "Spectral AI · Edge",
      head: "AI that sees what humans cannot.",
      body: "Multi-spectral imaging systems stare at algae tanks 24/7. Seraph catches infections 48 hours before any human could see them, tracks biomass density without taking samples, and builds digital twins of biological processes that predict outcomes before they happen — edge-deployed, inside a DLR-validated life-support loop.",
      foot: "Not a pitch deck. A system running code today.",
    },
    {
      name: "Zero-X",
      tag: "Sensor Fusion · Fleet",
      head: "Intelligence that travels.",
      body: "Every gasification plant feeds 50+ sensor parameters into Zero-X's remote monitoring infrastructure — OPC UA, MQTT, predictive analytics, sensor fusion. A temperature anomaly seen in one plant becomes an early-warning model deployed to all of them the same day, because the system is built to share intelligence across distance.",
      foot: "Not a dashboard company. The nervous system of our operating assets.",
    },
    {
      name: "EX · IP",
      tag: "Patent Intelligence · Agents",
      head: "Fully AI-powered.",
      body: "EX IP runs on the patent agent and drafting agents. It reads the technology landscape weekly, scores white space before competitors file, and drafts full specifications. Prior-art search, claim development, and portfolio risk all run through the model, not around it.",
      foot: "Every filing recommendation begins as code.",
    },
    {
      name: "EX · FI",
      tag: "Financial AI · Capital",
      head: "Fully AI-powered.",
      body: "EX FI runs on financial AI — capital allocation, risk assessment, and compliance monitoring driven by agents. The compliance monitor checks invoice-deliverable alignment before any auditor does; allocation and risk are scored continuously, not quarterly.",
      foot: "Regulated infrastructure, AI at every decision.",
    },
  ];
  return (
    <section className="section" id="fleet" data-screen-label="03 The Fleet" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Intelligence in Production</div>
          <h2>Every entity <span className="gold">runs on it.</span></h2>
          <p>From operating plants to patent filings to capital allocation — the fleet learns from itself, and every company in the group is fully AI-powered.</p>
        </div>
        <div className="ip-port">
          {units.map((u, i) => (
            <div className="ip-port-card" key={i}>
              <div className="ip-port-head">
                <h3 className="ip-port-name">{u.name}</h3>
                <span className="ip-port-tag">{u.tag}</span>
              </div>
              <h4 className="ai-card-head">{u.head}</h4>
              <p className="ip-port-desc">{u.body}</p>
              <p className="ai-card-foot">{u.foot}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIBand() {
  return (
    <section className="ip-band" data-screen-label="04 Statement">
      <div className="ip-band-img"><img src="assets/photos/field-02.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          We did not wait for "AI adoption." <span className="gold">We adopted it by writing code and shipping it.</span>
        </p>
      </div>
    </section>
  );
}

function AIOps() {
  const ops = [
    { k: "Grant Pipeline", h: "Scans every programme daily", p: "It scans every German and European programme daily, scores fit against our entities, and drafts full application narratives. It replaced what used to take three people full-time." },
    { k: "Patent Agent", h: "Flags white space weekly", p: "It reads our technology landscape weekly and flags white space before competitors file. It generated filing recommendations that led to live patents." },
    { k: "Compliance Monitor", h: "Catches drift before auditors", p: "It checks invoice-deliverable alignment before any auditor does — catching drift in time to correct it." },
    { k: "Drafting Agents", h: "Inside every specification", p: "We built AI agents into the drafting of every patent specification, every grant proposal, every technical report." },
  ];
  return (
    <section className="section" id="ops" data-screen-label="05 AI-First Business Processes">
      <div className="container">
        <div className="ip-intro">
          <div className="label">AI-First Business Processes</div>
          <h2>We adopted it by <span className="gold">shipping it.</span></h2>
        </div>
        <div className="ip-grid cols-2">
          {ops.map((o, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{o.k}</div>
              <h3 className="ip-h">{o.h}</h3>
              <p className="ip-p">{o.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AITransition() {
  const cos = [
    { name: "MindWaves AI", tag: "Deployed · 4+ plants", p: "Industrial vision that adapts to new products without retraining." },
    { name: "Gemino AI", tag: "Running · 5 locations", p: "Federated learning that trains models across sites without any data leaving the facility." },
  ];
  return (
    <section className="section" id="transition" data-screen-label="06 Transition" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Transitioning Companies, Transitioning Workflows</div>
          <h2>The transition is <span className="gold">not theoretical.</span></h2>
          <p>Every week a human workflow is replaced by an agent. Every month a new sensor feed starts training a model. Every quarter a new AI capability goes into production.</p>
        </div>
        <div className="ip-pillars" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {cos.map((c, i) => (
            <div className="ip-pillar" key={i}>
              <span className="ip-tag gold">{c.tag}</span>
              <h3 className="pname">{c.name}</h3>
              <p className="pdesc">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AILoop() {
  const nodes = ["Grants", "R&D", "Patents", "IP", "SPVs", "Revenue"];
  const ai = [
    "scanning grants", "drafting patents", "auditing compliance",
    "predicting plant performance", "monitoring bioprocesses",
    "controlling cameras", "sharing intelligence across the fleet",
  ];
  return (
    <section className="section" id="loop" data-screen-label="07 The Innovation Loop">
      <div className="container">
        <div className="ip-intro">
          <div className="label">The Innovation Loop</div>
          <h2>The entire group <span className="gold">is the lab.</span></h2>
          <p>Grants feed R&D. R&D produces patents. Patents produce IP. IP produces SPVs. SPVs produce revenue. Revenue feeds the next grant cycle.</p>
        </div>
        <div className="ai-loop">
          {nodes.map((n, i) => (
            <React.Fragment key={i}>
              <div className="ai-loop-node">
                <span className="ai-loop-idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="ai-loop-name">{n}</span>
              </div>
              <span className="ai-loop-arrow" aria-hidden="true">→</span>
            </React.Fragment>
          ))}
          <div className="ai-loop-node ai-loop-cycle">
            <span className="ai-loop-idx">∞</span>
            <span className="ai-loop-name">Next Cycle</span>
          </div>
        </div>
        <div className="ai-loop-foot">
          <p className="ip-k" style={{ color: "var(--bsm-gold)" }}>AI sits at every node</p>
          <div className="ai-loop-tags">
            {ai.map((a, i) => <span key={i}>{a}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function AIPartners() {
  const partners = [
    { name: "DLR", role: "Validates Seraph" },
    { name: "ULPGC Las Palmas", role: "Co-runs our Lemna research" },
    { name: "HS Zittau/Görlitz", role: "Co-developed VERKOSO" },
    { name: "Robert Boyle Institut", role: "Shares our biorefinery roadmaps" },
    { name: "Reichmann Biotechnik", role: "Develops EPIC Vision hardware" },
  ];
  return (
    <section className="section" id="partners" data-screen-label="08 Research Partners" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Research Partners We Actually Work With</div>
          <h2>We do not <span className="gold">collect logos.</span></h2>
          <p>We work with people who have signed, who have people assigned, who have shared deliverables.</p>
        </div>
        <div className="ip-grid cols-3">
          {partners.map((p, i) => (
            <div className="ip-cell compact" key={i}>
              <h3 className="ip-h" style={{ color: "var(--bsm-gold)" }}>{p.name}</h3>
              <p className="ip-p">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIContact({ onBookCall }) {
  return (
    <section className="ip-cta" id="contact" data-screen-label="09 Contact">
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>The Best Opportunity of Our Lifetime</div>
        <h2>We are not spectators<br/><span className="gold">to this transition.</span></h2>
        <p>
          It is happening right now — in our plants, in our patent pipeline, in our grant-winning agents, in the cameras we are building, in the spectral eyes watching our algae, in the models training across the fleet. We are the ones writing the code that makes it real.
        </p>
        <div className="ip-cta-actions">
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
          <a className="ip-mail" href="mailto:ai@exventure.co">ai@exventure.co</a>
        </div>
      </div>
    </section>
  );
}

function AIDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Disclaimer</span>
          EX AI is the applied-intelligence function across EX Venture Inc. (SEC registered) and its operating entities. Nothing on this page constitutes investment advice, a solicitation to invest, or a financial promotion. Project status, deployments, and research partnerships are subject to change.
        </p>
      </div>
    </div>
  );
}

function AIApp() {
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
      <GlobalNav navmark="EX AI" onBookCall={openModal} />
      <main>
        <AIHero />
        <AILab />
        <AIFleet />
        <AIBand />
        <AIOps />
        <AITransition />
        <AILoop />
        <AIPartners />
        {window.VerbSequence ? <window.VerbSequence /> : null}
        <AIContact onBookCall={openModal} />
        <AIDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="EX AI" /> : null}
    </div>
  );
}

(function mountAI() {
  if (window.Footer && window.BookCallModal && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<AIApp />);
  } else {
    setTimeout(mountAI, 50);
  }
})();

// EX FI · Financial Infrastructure — internal teaser (reuses ex-ip.css vocabulary)
function FiHero({ onAccount }) {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/collab-04.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">EX FI · FINANCIAL INFRASTRUCTURE</div>
        <h1 className="ip-title" style={{ maxWidth: "16ch" }}>Money should move <span className="gold">like messages.</span></h1>
        <p className="ip-lead" style={{ marginTop: 38 }}>
          Payment rails and financial tooling built for the way money actually moves — checkout, settlement, and treasury, without the friction legacy systems demand. EX FI builds the infrastructure; <strong style={{ color: "var(--warm)" }}>regulated payment services are provided by our FCA-authorised partner.</strong>
        </p>
        <div className="ip-cta-actions" style={{ marginTop: 38 }}>
          <button className="btn btn-primary" onClick={onAccount}>Open an Account <span className="arr">→</span></button>
          <a className="ip-mail" href="#stack">Explore the Stack ↓</a>
        </div>
        <p className="fi-hero-meta">Regulated payment services via our FCA-authorised partner, for UK customers — built for same-day settlement and end-to-end encryption.</p>
      </div>
    </section>
  );
}

function FiLayer({ n, name, desc, tags }) {
  return (
    <div className="ip-cell">
      <div className="ip-k">{n}</div>
      <h3 className="ip-h">{name}</h3>
      <p className="ip-p">{desc}</p>
      <div className="fi-tags">{tags.map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}

function FiStack() {
  const layers = [
    { n: "01 · Checkout", name: "Where money enters", desc: "One integration accepting cards, open banking, and alternative payment methods. Built for conversion, with adaptive fraud scoring, smart routing, and real-time decisioning in every transaction.", tags: ["Cards", "Open Banking", "Smart Routing", "Fraud Scoring"] },
    { n: "02 · Settlement", name: "Where money clears", desc: "Same-day settlement that reconciles automatically. No batch delays, no mystery hold periods — funds move when the transaction is confirmed.", tags: ["Same-day clearing", "Auto-reconciliation", "Multi-currency", "Real-time ledger"] },
    { n: "03 · Treasury", name: "Where money works", desc: "Unified cash management across accounts, currencies, and entities. Sweep rules, automated allocations, and full visibility into every pound in motion.", tags: ["Cash pooling", "FX management", "Sweep rules", "Multi-entity"] },
    { n: "04 · Payment Rails", name: "Where money travels", desc: "The connective tissue underneath: access to Faster Payments, SEPA, and SWIFT through our regulated partner, without intermediaries marking up every hop.", tags: ["Faster Payments", "SEPA", "SWIFT"] },
  ];
  return (
    <section className="section" id="stack" data-screen-label="02 The Stack" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">The Stack</div>
          <h2>Four layers. <span className="gold">Zero friction.</span></h2>
          <p>Every product solves one layer of the payment lifecycle. Together they replace the patchwork of legacy systems that slow businesses down.</p>
        </div>
        <div className="ip-grid cols-2">
          {layers.map((l, i) => <FiLayer key={i} {...l} />)}
        </div>
      </div>
    </section>
  );
}

function FiAgentic() {
  const layers = [
    { n: "05 · Custom Interfaces", name: "Banking you design", desc: "White-label dashboards, tenant isolation, role-based permissions, and product surfaces that match your brand, not ours.", tags: ["White-label", "Multi-tenant", "Role-based access", "Custom UX"] },
    { n: "06 · API Integration", name: "Banking you call", desc: "A clean, production-grade API for every primitive in the stack: authentication, idempotency, webhooks, sandbox environments, and SDKs in the languages your team already writes.", tags: ["REST + Webhooks", "Idempotency", "Sandbox", "SDKs"] },
    { n: "07 · Agent Operation", name: "Banking agents use", desc: "MCP-native banking primitives for autonomous agents: agent wallets with cryptographic authorisation envelopes, signed spending limits, real-time ledger streaming, and programmable compliance in the transaction flow.", tags: ["MCP-native", "Agent wallets", "Auth envelopes", "Audit rail"] },
    { n: "08 · Stablecoin", name: "Coming soon", desc: "USD and EUR stablecoin rails for agent-native settlement and cross-border flows, integrated with the regulated fiat stack. Launching to selected partners later in 2026.", tags: ["USD", "EUR", "Fiat bridge", "Programmable"] },
    { n: "09 · Custom Insurance", name: "Coming soon", desc: "Transaction-level cover engineered alongside major international insurers — against cyber incidents, fraud, and bank insolvency.", tags: ["Cyber cover", "Fraud protection", "Insolvency cover"] },
  ];
  return (
    <section className="section" id="agentic" data-screen-label="03 Agentic Economy">
      <div className="container">
        <div className="ip-intro">
          <div className="label">Built for the Agentic Economy</div>
          <h2>The next trillion dollars <span className="gold">won't click checkout.</span></h2>
          <p>It will be moved by agents — transacting at machine speed, inside cryptographic envelopes of authority, across MCP-native rails. EX FI is building the regulated banking substrate, with its authorised partner, that those agents can natively consume.</p>
        </div>
        <div className="ip-grid cols-2">
          {layers.map((l, i) => <FiLayer key={i} {...l} />)}
        </div>
      </div>
    </section>
  );
}

function FiBand() {
  return (
    <section className="ip-band" data-screen-label="04 Statement">
      <div className="ip-band-img"><img src="assets/photos/collab-01.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          Regulated, <span className="gold">not aspirational.</span>
        </p>
      </div>
    </section>
  );
}

function FiIntegrate() {
  const steps = [
    { n: "/ 01", name: "Connect", p: "Single API, RESTful endpoints, webhooks for every event. Point your checkout at our sandbox in under an hour." },
    { n: "/ 02", name: "Configure", p: "Set routing rules, fraud thresholds, settlement schedules, and treasury sweep logic — per-merchant, per-currency, per-entity." },
    { n: "/ 03", name: "Go Live", p: "Flip from sandbox to production. Real money, real rails, full regulatory compliance through our authorised partner from day one." },
    { n: "/ 04", name: "Scale", p: "Add currencies, entities, and payment methods without re-architecting." },
  ];
  return (
    <section className="section" id="integrate" data-screen-label="05 Integration" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Live in Days, Not Quarters</div>
          <h2>Built from scratch <span className="gold">to deploy fast.</span></h2>
          <p>Legacy financial infrastructure takes months to integrate and years to escape. EX FI was built to move at the speed your team already works.</p>
        </div>
        <div className="ip-grid cols-2">
          {steps.map((s, i) => (
            <div className="ip-cell ip-phase" key={i}>
              <div className="ip-k">{s.n}</div>
              <h3 className="name" style={{ fontSize: "24px", letterSpacing: "-0.01em", textTransform: "none" }}>{s.name}</h3>
              <div className="barb"></div>
              <p className="ip-p">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FiEngineers({ onDocs }) {
  const points = [
    "RESTful API with comprehensive documentation",
    "Webhooks for every state change",
    "Idempotent endpoints for safe retries",
    "SDKs for Python, Node, Go, and Ruby",
    "Sandbox environment with realistic test data",
    "Fast, low-latency API responses",
  ];
  return (
    <section className="section" id="engineers" data-screen-label="06 For Engineers">
      <div className="container">
        <div className="ip-intro">
          <div className="label">Built for Engineers</div>
          <h2>The infrastructure <span className="gold">we wished existed.</span></h2>
          <p>We're engineers who got tired of building workarounds for financial systems designed before the internet.</p>
        </div>
        <div className="fi-checklist">
          {points.map((p, i) => (
            <div className="fi-check" key={i}>
              <span className="fi-tick" aria-hidden="true">→</span>
              <span>{p}</span>
            </div>
          ))}
        </div>
        <div className="ip-cta-actions" style={{ marginTop: 40 }}>
          <button className="btn btn-primary" onClick={onDocs}>Read the Docs <span className="arr">→</span></button>
        </div>
      </div>
    </section>
  );
}

function FiCompliance() {
  const items = [
    { h: "FCA-authorised partner", p: "Regulated payment and e-money services provided by our FCA-authorised partner, under proper supervision." },
    { h: "PCI DSS", p: "Card data handled under PCI DSS standards by our regulated partner." },
    { h: "SOC 2", p: "Security and processing-integrity controls audited at our regulated partner." },
    { h: "Anti-Money Laundering", p: "Automated KYC, transaction monitoring, and suspicious-activity reporting through the regulated stack." },
    { h: "GDPR by design", p: "Data minimisation, right to erasure, transparent processing." },
    { h: "Strong Customer Authentication", p: "PSD2-compliant SCA built into every flow, with 3DS2 orchestration." },
  ];
  return (
    <section className="section" id="compliance" data-screen-label="07 Compliance" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Regulated, Not Aspirational</div>
          <h2>Compliance held <span className="gold">at the regulated partner.</span></h2>
          <p>Financial infrastructure without proper regulation is a liability, not a product. EX FI operates as an introducer to an FCA-authorised payment institution; the certifications below are held and operated by that partner.</p>
        </div>
        <div className="ip-grid cols-3">
          {items.map((it, i) => (
            <div className="ip-cell compact" key={i}>
              <h3 className="ip-h" style={{ fontSize: "18px" }}>{it.h}</h3>
              <p className="ip-p" style={{ fontSize: "13px" }}>{it.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FiContact({ onAccount }) {
  return (
    <section className="ip-cta" id="contact" data-screen-label="08 Open Now">
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Open Now · No Waitlist</div>
        <h2>Apply and start<br/><span className="gold">moving money in days.</span></h2>
        <p>
          No waitlist, no queue. EX FI accounts are open. Regulated payment services are provided by our FCA-authorised partner, for UK customers.
        </p>
        <div className="ip-cta-actions">
          <button className="btn btn-primary" onClick={onAccount}>Open an Account <span className="arr">→</span></button>
          <a className="ip-mail" href="https://exfi.app/" target="_blank" rel="noopener noreferrer">exfi.app ↗</a>
        </div>
      </div>
    </section>
  );
}

function FiDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Regulatory</span>
          Regulated payment services are provided by Gemba Finance Limited, authorised and regulated by the Financial Conduct Authority under the Payment Services Regulations 2017 (FRN 804853). EX Financial Solutions Ltd acts as an introducer to Gemba Finance Limited and does not itself provide regulated payment services. Payment and financial services are available to UK customers only. Nothing on this website constitutes financial advice. EX Financial Solutions Ltd is part of the EX Venture Inc. group of companies. © 2026 EX FI.
        </p>
      </div>
    </div>
  );
}

function FiApp() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = React.useCallback(() => setModalOpen(true), []);
  const closeModal = React.useCallback(() => setModalOpen(false), []);
  const openAccount = React.useCallback(() => { window.open("https://exfi.app/", "_blank", "noopener"); }, []);

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
  const GlobalNav = window.GlobalNav;

  return (
    <div className="ip-page">
      {GlobalNav ? <GlobalNav navmark="EX FI" onBookCall={openModal} /> : null}
      <main>
        <FiHero onAccount={openAccount} />
        <FiStack />
        <FiAgentic />
        <FiBand />
        <FiIntegrate />
        <FiEngineers onDocs={openAccount} />
        <FiCompliance />
        <FiContact onAccount={openAccount} />
        <FiDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Something else" /> : null}
    </div>
  );
}

(function mountFi() {
  if (window.Footer && window.BookCallModal && window.GlobalNav && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<FiApp />);
  } else {
    setTimeout(mountFi, 50);
  }
})();

// How We Execute — funding & operating doctrine (reuses ex-ip.css vocabulary)
function ExecuteHero() {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/collab-06.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">HOW WE EXECUTE</div>
        <h1 className="ip-title">We try a lot. We kill fast. <span className="gold">Then we go full force.</span></h1>
        <p className="ip-verb">
          Prove it first, raise second.<br/><span className="gold">We start before we pitch.</span>
        </p>
        <p className="ip-lead">
          EX Venture builds deep-tech ventures and runs them like startups — lean, fast, and focused. We don't raise to burn. We plan first, raise against proof, and patch the gaps with private capital. The same architecture we built for our own companies is what lets every new one move at AI speed.
        </p>
      </div>
    </section>
  );
}

function ExecutePrinciples() {
  const items = [
    { k: "We say no a lot", h: "Few bets, full force", p: "Most venture builders collect board seats. We start companies and operate them — creating value in one window, pre-seed to Series A, and going all the way through it. Saying no to almost everything is what lets us say yes completely." },
    { k: "We validate before we build", h: "Patent before build", p: "Every invention passes first-principles validation — mass, energy, and thermodynamic balance — before a single claim is written. In-house patent operation, filings across multiple jurisdictions, every application through a seven-stage review. No outsourcing, no gap between invention and filing." },
    { k: "We never develop alone", h: "Consortium-anchored", p: "Every project is anchored to a consortium of research institutions that validate the science, provide the facilities, and co-author the publications that establish prior art. The science is de-risked before anyone's capital is exposed." },
    { k: "We build teams, not overhead", h: "Grown, not hired", p: "We don't staff up with expensive hires and agency retainers. We build teams through EX Academy — operators trained on live ventures and deployed straight onto real projects. Talent isn't a cost spike; it's something we grow." },
    { k: "We bet on our own ecosystem", h: "Compounding capability", p: "A seed round rarely pays for the product — it pays for the back office. We built that once: one accounting, one compliance, one marketing, one AI team, shared and already running. A new venture inherits the entire operating layer on day one. We're not renting capability; we're compounding it." },
    { k: "Why we're faster", h: "No months lost raising", p: "In a market moving at AI speed, the constraint isn't ideas — it's the months everyone else loses raising money just to begin. The ecosystem funds the first phase internally: no pitch, no raise, no waiting on a cycle. Capital comes in phase two, when risk is retired and the money buys scale, not discovery." },
  ];
  return (
    <section className="section" id="doctrine" data-screen-label="02 The Doctrine">
      <div className="container">
        <div className="ip-intro">
          <div className="label">The Doctrine</div>
          <h2>How we actually <span className="gold">operate.</span></h2>
          <p>The operating philosophy behind every venture we build — and every one we fund.</p>
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

function ExecuteCapital() {
  const sources = [
    { name: "Government R&D", tag: "Non-Dilutive", type: "gold", p: "Horizon Europe, EIC, ZIM, BMBF, BMWK, and regional programs across Germany, Spain, and the EU. Non-dilutive capital covering technical risk from prototype to first deployment." },
    { name: "Regional Co-Funding", tag: "First-of-a-Kind", type: "ghost", p: "Andalusia, the Canary Islands, Saxony. Structurally weak regions with co-funding rates that make first-of-a-kind deployment viable." },
    { name: "Private Co-Investment", tag: "Asset Finance", type: "gold", p: "SPV-structured asset finance for deployed systems. Fleet operators, project finance, and strategic partners who take operating assets onto their books." },
    { name: "Tax-Backed Incentives", tag: "R&D Credits", type: "ghost", p: "R&D tax credits in applicable jurisdictions that reduce effective development cost." },
  ];
  return (
    <section className="section" id="capital" data-screen-label="03 Public Capital" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">We Make Public Capital Carry the Risk</div>
          <h2>Don't spend first. <span className="gold">Plan, raise, patch.</span></h2>
          <p>No single source of capital covers deep-tech development, so we combine four — and let the public funder carry the technical risk before private capital ever enters.</p>
        </div>
        <div className="ip-pillars" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {sources.map((s, i) => (
            <div className="ip-pillar" key={i}>
              <span className={"ip-tag " + s.type}>{s.tag}</span>
              <h3 className="pname">{s.name}</h3>
              <p className="pdesc">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="ip-cell" style={{ marginTop: 16, borderLeft: "2px solid var(--bsm-gold)" }}>
          <p className="ip-p" style={{ fontSize: "15px" }}>
            The grant pays for the prototype, the pilot, the first deployment. If the technology works, the consortium validates it. If it doesn't, the public funder shares the loss. By the time private capital enters, technical risk has been reduced to operating risk — which means we can back genuine breakthroughs no single company or VC would fund alone, with less equity dilution at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExecuteBand() {
  return (
    <section className="ip-band" data-screen-label="04 Statement">
      <div className="ip-band-img"><img src="assets/photos/field-02.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          We're not renting capability. <span className="gold">We're compounding it.</span>
        </p>
      </div>
    </section>
  );
}

function ExecutePartners() {
  const partners = [
    "DLR (German Aerospace Center)", "Fraunhofer", "Helmholtz", "KIT Karlsruhe",
    "RWTH Aachen", "TU Munich", "Lawrence Berkeley National Laboratory", "NTU Singapore",
    "Universiti Teknologi PETRONAS", "Udayana University", "University of Fukushima",
    "HS Zittau-Görlitz", "RBI", "LIFE AI Science", "BioEnergie Verbund",
  ];
  return (
    <section className="section" id="partners" data-screen-label="05 Research Partners">
      <div className="container">
        <div className="ip-intro">
          <div className="label">We Never Develop Alone</div>
          <h2>Research partners validate the science. <span className="gold">We build the commercial pathway.</span></h2>
          <p>Government-backed research partners and collaborators across multiple nations.</p>
        </div>
        <div className="partner-grid">
          {partners.map((p, i) => (
            <div className="partner-cell" key={i}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecuteMachine() {
  const stages = [
    { n: "1", name: "Call Intelligence", p: "The program is verified against the project before a word is written — purpose, TRL window, budget ceiling, deadline mode, eligibility, consortium requirements. Wrong program means wrong project." },
    { n: "2", name: "Fit Scoring", p: "Every candidate program scored on five dimensions: deadline urgency, TRL match, thematic fit, budget coverage, jurisdiction alignment. Only the top-ranked advance." },
    { n: "3", name: "Consortium Assembly", p: "Every partner justified in one sentence — the capability no one else brings. KMU status verified, subcontractor-vs-partner structure optimized, letters of intent confirmed. No filler partners." },
    { n: "4", name: "Narrative Construction", p: "The proposal answers one question: what changes in three years that wouldn't change without this funding? Built on the cascade principle, closed so a reviewer can paste it straight into their recommendation memo." },
    { n: "5", name: "Budget Engineering", p: "Every euro justified against a work package, every line traceable to a deliverable. Optimized to the program ceiling without exceeding it. The budget tells the same story as the narrative." },
    { n: "6", name: "Internal Review", p: "A 12-axis rubric: impact cascade, policy alignment, innovation, scientific quality, consortium, budget integrity, exploitation, risk, work-package structure, SME/regional fit, infrastructure, formal compliance. Any low axis sends it back." },
    { n: "7", name: "Submission & Post-Award", p: "Submission isn't the end. Every awarded project is managed through to final reporting — deliverables, milestones, cost documentation, audit readiness. A machine, not an event." },
  ];
  return (
    <section className="section" id="machine" data-screen-label="06 The Machine" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">We Run It Like a Machine</div>
          <h2>Seven stages. <span className="gold">No exceptions.</span></h2>
          <p>Discipline is what makes the rest of it true. Every grant application follows a seven-stage process built to produce proposals reviewers remember.</p>
        </div>
        <div className="ip-grid cols-3">
          {stages.map((s, i) => (
            <div className="ip-cell ip-phase" key={i}>
              <div className="ip-k">/ {s.n.padStart(2, "0")}</div>
              <h3 className="name" style={{ fontSize: "24px", letterSpacing: "-0.01em", textTransform: "none" }}>{s.name}</h3>
              <div className="barb"></div>
              <p className="ip-p">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="ip-cell" style={{ marginTop: 16, borderLeft: "2px solid var(--bsm-gold)" }}>
          <p className="ip-p" style={{ fontSize: "15px" }}>
            We've run this across multiple programs and multiple jurisdictions — and we built our own AI to run it at speed: autonomous agents managing call identification, scoring, narrative drafting, budget engineering, and compliance checking, end to end.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExecuteExternal({ onBookCall }) {
  return (
    <section className="ip-cta" id="contact" data-screen-label="07 For External Ventures">
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>For External Ventures</div>
        <h2>You bring the technology.<br/><span className="gold">We bring the funding structure.</span></h2>
        <p>
          We don't fix companies. But if you're building real deep tech, we'll put the same funding architecture to work behind yours — call intelligence, consortium formation, application drafting and submission, SPV structuring for deployed assets, and AI-augmented pipeline management. It works for thermal conversion, bioprocessing, pharmaceuticals, protein, space-adjacent biotech, materials science, and industrial AI.
        </p>
        <div className="ip-cta-actions">
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
          <a className="ip-mail" href="The Ecosystem.html">See how the ecosystem works →</a>
        </div>
        <p style={{ marginTop: 44, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "20px", color: "var(--silver)", textAlign: "center" }}>
          We invest in impact and value that lasts. Innovation at scale, without the overhead.
        </p>
      </div>
    </section>
  );
}

function ExecuteDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Note</span>
          EX Venture Inc. is registered with the U.S. Securities and Exchange Commission (SEC). Nothing on this page constitutes investment advice, a solicitation to invest, or a financial promotion. Funding programs, partners, and structures are subject to change and to eligibility.
        </p>
      </div>
    </div>
  );
}

function ExecuteApp() {
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
  const GlobalNav = window.GlobalNav;

  return (
    <div className="ip-page">
      {GlobalNav ? <GlobalNav navmark="FUNDING" onBookCall={openModal} /> : null}
      <main>
        <ExecuteHero />
        <ExecutePrinciples />
        <ExecuteCapital />
        <ExecuteBand />
        <ExecutePartners />
        <ExecuteMachine />
        {window.VerbSequence ? <window.VerbSequence /> : null}
        <ExecuteExternal onBookCall={openModal} />
        <ExecuteDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Consulting / Advisory" /> : null}
    </div>
  );
}

(function mountExecute() {
  if (window.Footer && window.BookCallModal && window.GlobalNav && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<ExecuteApp />);
  } else {
    setTimeout(mountExecute, 50);
  }
})();

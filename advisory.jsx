// Advisory — Julien Uhlig's personal consulting offer
function AdvisoryHero({ onBookCall }) {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/team/julien-uhlig.jpg" alt="Julien Uhlig" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">ADVISORY · JULIEN UHLIG</div>
        <h1 className="ip-title" style={{ maxWidth: "20ch" }}>I rebuild faster <span className="gold">than most people decide.</span></h1>
        <p className="ip-lead" style={{ marginTop: 38 }}>
          Thirty years building deep-tech and clean-energy ventures across four continents — real exits, real deployments, real restructurings. I don't advise from the sidelines. I work in the room, on the hard part, at the speed the moment demands.
        </p>
        <p className="ip-lead" style={{ marginTop: 18 }}>
          A small number of founders and companies work with me directly each year — and I'll take a paid board or advisory seat where I can genuinely move the needle, selectively, and only where I can contribute rather than observe. If the problem is real, let's talk.
        </p>
        <div className="ip-cta-actions" style={{ marginTop: 40 }}>
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
        </div>
      </div>
    </section>
  );
}

function AdvisoryHard() {
  return (
    <section className="section" id="hard" data-screen-label="02 Where It's Hard" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Temperament</div>
          <h2>I'm at my best <span className="gold">where it's hard.</span></h2>
        </div>
        <div className="advisory-prose">
          <p>I've built power systems in Fukushima, run projects in post-conflict regions, restructured a company most people would have walked away from, and raised money in fields most banks wouldn't touch. None of it was clean. That's the point.</p>
          <p>Comfortable problems get solved by anyone. I'm useful exactly where the path isn't obvious — where the technical risk is real, the capital is complicated, and the people in the room disagree about what to do next. Pressure is where I think clearly. I don't freeze when it gets hard; that's when I get sharper.</p>
        </div>
      </div>
    </section>
  );
}

function AdvisoryRebuild() {
  return (
    <section className="section" id="rebuild" data-screen-label="03 Fearless Reinvention">
      <div className="container">
        <div className="ip-intro">
          <div className="label">Adaptability</div>
          <h2>The seasoned operator who <span className="gold">moves like a founder.</span></h2>
        </div>
        <div className="advisory-prose">
          <p>Here's my real edge: I'm not attached to how it worked yesterday.</p>
          <p>I can look at a business from angles most people don't see — find the opening everyone walked past, spot the model hiding inside the problem. And when something needs to change, I change it. Fast. No ego about the system I built last month, no attachment to the plan that's no longer the best plan. Most experienced operators are quick <em>because</em> their systems are fixed. Mine is the opposite: thirty years of pattern recognition, and zero hesitation to throw out what isn't working anymore.</p>
          <p>In the age of AI, that's not a nice-to-have — it's the whole game. The edge now goes to whoever can innovate daily, learn faster, try more, optimize harder, and rebuild without flinching. That's the discipline I've run my entire career on, and it's never mattered more than it does right now.</p>
          <p className="advisory-kicker">If your business needs someone who can see it fresh and move on it immediately — that's me.</p>
        </div>
      </div>
    </section>
  );
}

function AdvisoryUseful() {
  const areas = [
    { k: "Capital", h: "Funding strategy & structure", p: "Non-dilutive and grant capital, project finance, SPVs, sale-leasebacks, investor narrative. A specific edge: the Canary Islands R&D and tax-credit regime (ZEC, RIC) — insider knowledge of how to structure deep-tech projects there for the lowest effective cost. Getting money into the business in the way that costs the least and fits the stage." },
    { k: "Deep Tech", h: "Technical-risk ventures", p: "Energy, cleantech, biotech, advanced materials, industrial AI. Turning hard science into something that ships — and that funders, partners, and regulators can actually back." },
    { k: "Restructuring", h: "Turnarounds & rebuilds", p: "Companies that need to be seen fresh and moved on immediately. Buyouts, restructurings, and the unsentimental decisions that get a business off the wrong path." },
    { k: "Government", h: "Research & public funding", p: "Consortium formation, EU and national programmes, the research-to-deployment bridge. The API between the lab, the balance sheet, and the grant office." },
    { k: "AI Operating Model", h: "Building at machine speed", p: "How to run a company that reinvents itself weekly — agents in every function, a talent engine instead of a hiring list, capability that compounds instead of calcifying." },
    { k: "Founders", h: "The operator beside you", p: "Not a board seat and quarterly check-ins. Time in the room on the hard part — fundraising, the pivot, the deal, the decision you can't quite call." },
  ];
  return (
    <section className="section" id="useful" data-screen-label="04 Where I'm Useful" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Where I'm Useful</div>
          <h2>Brought in for the <span className="gold">hard part.</span></h2>
        </div>
        <div className="ip-grid cols-3">
          {areas.map((a, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{a.k}</div>
              <h3 className="ip-h">{a.h}</h3>
              <p className="ip-p">{a.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvisoryBand() {
  return (
    <section className="ip-band" data-screen-label="05 Statement">
      <div className="ip-band-img"><img src="assets/photos/collab-06.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          Experience that doesn't calcify. <span className="gold">Pattern recognition without the attachment.</span>
        </p>
      </div>
    </section>
  );
}

function AdvisoryHow() {
  const steps = [
    { n: "/ 01", name: "We talk", p: "A direct conversation about the real problem — not the polished version. I'll tell you quickly whether I'm the right person and whether I can help." },
    { n: "/ 02", name: "I go in", p: "Where it's useful, I work in the room — not a slide deck from a distance. Fundraise, restructure, pivot, build. Hands on the hard part." },
    { n: "/ 03", name: "It moves", p: "The goal is momentum, not a report. You leave with the opening found, the decision made, and the next move already underway." },
  ];
  return (
    <section className="section" id="how" data-screen-label="06 How I Work">
      <div className="container">
        <div className="ip-intro">
          <div className="label">How I Work</div>
          <h2>Direct. In the room. <span className="gold">Fast.</span></h2>
        </div>
        <div className="ip-grid cols-3">
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

function AdvisoryContact({ onBookCall }) {
  return (
    <section className="ip-cta" id="contact" data-screen-label="07 Work With Me" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Work With Me</div>
        <h2>See it fresh.<br/><span className="gold">Move on it immediately.</span></h2>
        <p>
          I take on a small number of founders and companies directly each year. If you're building something real and the problem is hard, that's exactly where I'm useful.
        </p>
        <div className="ip-cta-actions">
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
          <a className="ip-mail" href="https://julien-uhlig.com" target="_blank" rel="noopener noreferrer">julien-uhlig.com ↗</a>
        </div>
      </div>
    </section>
  );
}

function AdvisoryApp() {
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
      {GlobalNav ? <GlobalNav navmark="ADVISORY" onBookCall={openModal} /> : null}
      <main>
        <AdvisoryHero onBookCall={openModal} />
        <AdvisoryHard />
        <AdvisoryRebuild />
        <AdvisoryUseful />
        <AdvisoryBand />
        <AdvisoryHow />
        <AdvisoryContact onBookCall={openModal} />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Consulting / Advisory" /> : null}
    </div>
  );
}

(function mountAdvisory() {
  if (window.Footer && window.BookCallModal && window.GlobalNav && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<AdvisoryApp />);
  } else {
    setTimeout(mountAdvisory, 50);
  }
})();

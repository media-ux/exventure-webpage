// EX Carbon · CCM — biochar materials platform (reuses ex-ip.css vocabulary)
function CarbonHero({ onBuild }) {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/field-02.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">EX CARBON · CCM</div>
        <h1 className="ip-title" style={{ maxWidth: "16ch" }}>The waste that <span className="gold">cleans the waste.</span></h1>
        <p className="ip-lead" style={{ marginTop: 38 }}>
          EX Carbon turns the by-products of gasification into materials that clean waste, recover critical nutrients, and store carbon permanently. At the centre is one material: <strong style={{ color: "var(--warm)" }}>biochar</strong> — the porous, carbon-rich skeleton left when biomass and residual streams are thermally converted. We don't discard it. We engineer it.
        </p>
        <p className="ip-verb" style={{ marginTop: 28, fontSize: "clamp(20px, 2.4vw, 30px)" }}>
          Clean the gas. Recover the nutrient. <span className="gold">Store the carbon.</span>
        </p>
      </div>
    </section>
  );
}

function CarbonMaterial() {
  const cells = [
    { k: "The Material", h: "Biochar, not synthetic catalyst", p: "Conventional gas cleaning relies on expensive synthetic catalysts. We use biochar and industrial residue streams as the active material instead — turning a waste stream into a working material, and a cost into a capability." },
    { k: "Three Jobs", h: "One carbon, before it's stored", p: "The same carbon does three jobs before it is stored: clean the gas, recover the nutrient, store the carbon. Nothing is wasted along the way — the material earns its keep at every step." },
  ];
  return (
    <section className="section" id="material" data-screen-label="02 Biochar" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Biochar as a Material</div>
          <h2>A waste stream, <span className="gold">turned into a working material.</span></h2>
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

function CarbonChain() {
  const steps = [
    { n: "/ 01", name: "Sewage Sludge", p: "Across Europe, sewage sludge is a growing disposal burden — contaminated, heavily regulated, and rich in one wasted resource: phosphorus. Run through thermal conversion, it becomes a clean, stabilised carbon material instead of a waste to bury. Contaminants are eliminated; the mineral value is concentrated and made recoverable." },
    { n: "/ 02", name: "Phosphorus Recovery", p: "Phosphorus is finite, mostly imported, and essential to the world's food supply — and Europe now requires its recovery from sewage sludge. We turn that obligation into an output, concentrating phosphorus in the treated carbon material and opening a recovery route — with the carbon kept, not burned off." },
    { n: "/ 03", name: "Carbon Storage", p: "Biochar is one of the few carbon-removal pathways that is permanent, measurable, and available today. The carbon doesn't return to the atmosphere — it's locked into a stable matrix and placed in soil, where it stays for centuries while improving the ground it sits in." },
  ];
  return (
    <section className="section" id="chain" data-screen-label="03 The Chain">
      <div className="container">
        <div className="ip-intro">
          <div className="label">From Burden to Output</div>
          <h2>One stream. <span className="gold">Three recovered values.</span></h2>
        </div>
        <div className="ip-grid cols-3">
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

function CarbonBand() {
  return (
    <section className="ip-band" data-screen-label="04 Statement">
      <div className="ip-band-img"><img src="assets/photos/bali-03.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          The carbon doesn't return to the atmosphere. <span className="gold">It's locked in — for centuries.</span>
        </p>
      </div>
    </section>
  );
}

function CarbonValidation() {
  return (
    <section className="section" id="validation" data-screen-label="05 Validation" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Validated With Research Partners</div>
          <h2>Tested against real gasifier output, <span className="gold">real waste streams.</span></h2>
        </div>
        <div className="ip-grid cols-2">
          <div className="ip-cell">
            <div className="ip-k">Research Partners</div>
            <h3 className="ip-h">Experimental validation</h3>
            <p className="ip-p">Experimental validation has been carried out with <strong style={{ color: "var(--warm)" }}>Universiti Teknologi PETRONAS</strong> and the <strong style={{ color: "var(--warm)" }}>Robert Boyle Institut Jena</strong>.</p>
          </div>
          <div className="ip-cell">
            <div className="ip-k">The Team</div>
            <h3 className="ip-h">CCM, based in Berlin</h3>
            <p className="ip-p">CCM, now based in <strong style={{ color: "var(--warm)" }}>Berlin</strong>, leads the platform's development.</p>
          </div>
        </div>
        <p className="ip-p" style={{ marginTop: 28, fontStyle: "italic", color: "var(--smoke)" }}>
          Technology platform in active development. Detail shared privately with partners.
        </p>
      </div>
    </section>
  );
}

function CarbonHiring({ onBuild }) {
  const skills = [
    "Process & chemical engineering — syngas cleaning, sorption, gas–solid systems",
    "Materials science — biochar activation, sorbent design",
    "Thermal conversion — gasification, pyrolysis, reactor integration",
    "Wastewater & resource recovery — sludge treatment, phosphorus recovery",
    "Process simulation & scale-up — lab to deployable unit",
  ];
  return (
    <section className="section" id="hiring" data-screen-label="06 We're Hiring">
      <div className="container">
        <div className="ip-intro">
          <div className="label">We're Hiring Engineers — Now</div>
          <h2>A live platform that needs <span className="gold">builders.</span></h2>
          <p>This is a live platform that needs builders, not a roadmap looking for funding. We are <strong>urgently looking for engineers</strong> to take these materials from validated concept to deployed system.</p>
        </div>
        <div className="ip-grid cols-2">
          {skills.map((s, i) => (
            <div className="ip-cell compact" key={i}>
              <div className="ip-k">/ {String(i + 1).padStart(2, "0")}</div>
              <p className="ip-p" style={{ fontSize: "15px", color: "var(--warm)" }}>{s}</p>
            </div>
          ))}
          <div className="ip-cell compact" style={{ borderLeft: "2px solid var(--bsm-gold)", background: "rgba(196,162,90,0.04)" }}>
            <div className="ip-k">What you get</div>
            <p className="ip-p" style={{ fontSize: "15px" }}>You build the technology — we already have the funding, IP, research partners, and shared operating stack behind you.</p>
          </div>
        </div>
        <div className="ip-cta-actions" style={{ marginTop: 44 }}>
          <button className="btn btn-primary" onClick={onBuild}>Build This With Us <span className="arr">→</span></button>
          <a className="ip-mail" href="mailto:media@exventure.co">media@exventure.co</a>
        </div>
      </div>
    </section>
  );
}

function CarbonDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Note</span>
          EX Carbon / CCM is part of EX Venture Inc. Nothing on this page constitutes investment advice, a solicitation to invest, or a financial promotion. Technology status and partnerships are subject to change.
        </p>
      </div>
    </div>
  );
}

function CarbonApp() {
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
      {GlobalNav ? <GlobalNav navmark="EX CARBON" onBookCall={openModal} /> : null}
      <main>
        <CarbonHero onBuild={openModal} />
        <CarbonMaterial />
        <CarbonChain />
        <CarbonBand />
        <CarbonValidation />
        <CarbonHiring onBuild={openModal} />
        <CarbonDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="EX Carbon · Materials" /> : null}
    </div>
  );
}

(function mountCarbon() {
  if (window.Footer && window.BookCallModal && window.GlobalNav && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<CarbonApp />);
  } else {
    setTimeout(mountCarbon, 50);
  }
})();

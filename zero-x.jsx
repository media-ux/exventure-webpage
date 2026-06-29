// Zero-X — thermal conversion sub-page (reuses ex-ip.css vocabulary)
function ZeroXNav({ onBookCall }) {
  const links = [
    { l: "The Chain", h: "#chain" },
    { l: "The X-150", h: "#engine" },
    { l: "Markets", h: "#markets" },
    { l: "Funding", h: "#funding" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="EX Venture Site.html" className="nav-logo">
          <span className="wordmark"><span className="wm-accent">EX</span> VENTURE</span>
          <span className="ip-navmark">ZERO-X</span>
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

function ZeroXHero() {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/zerox-gasifier.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">ZERO-X</div>
        <h1 className="ip-title">From engineering lineage to <span className="gold">global markets</span></h1>
        <p className="ip-verb">
          We are persistent. <span className="gold">We execute.</span>
        </p>
        <p className="ip-lead">
          Zero-X did not begin as a pitch deck. It began as engineering — seventeen years of iterative thermal conversion development through three industrial generations of technical talent in Germany. When EX Venture took control of the platform, the machine existed but the company around it did not.
        </p>
        <p className="ip-lead" style={{ marginTop: 18 }}>
          The supply chain was missing. The manufacturing line was undefined. The markets were unmapped. So we built every link in the chain — strategy, funding, engineering, testing, optimisation, manufacturing, staffing, IP, and global markets.
        </p>
      </div>
    </section>
  );
}

function ZeroXChain() {
  const links = [
    { k: "/ 01 Strategy", h: "Acquire the machine, build the company", p: "We acquired the IP, restructured ownership under EX Zero Carbon Inc., and spun out Zero-X Labs as the commercial and project-development entity. The EX Venture model applied to a single asset class." },
    { k: "/ 02 Funding", h: "Government capital, no dilution", p: "Every engineering milestone was paid for by German federal and European Union R&D programs aligned with the technology's energy and environmental objectives. At no point was equity sold to fund core development." },
    { k: "/ 03 Engineering", h: "Process what others cannot", p: "Not just a gasifier — one that handles mixed waste streams with plastics, metals, and high ash content without clogging the engine with tars, via an integrated catalytic tar reformer." },
    { k: "/ 04 Testing", h: "2,500 hours in Paris", p: "More than two thousand five hundred continuous operating hours at the COMETHA site on real urban waste, validated with independent research partners — a data set most competitors at this power class cannot produce." },
    { k: "/ 05 Optimisation", h: "Six configurations, one platform", p: "The same core thermal conversion system, re-packaged for six distinct addressable markets — keeping manufacturing costs predictable while broadening reach." },
    { k: "/ 06 Manufacturing", h: "Containerised and fleet-ready", p: "A 20-foot ISO container form factor means standard logistics, no custom foundations, and deployment in days — built to fleet, not to order." },
    { k: "/ 07 Staffing", h: "Built by the Academy", p: "Grant writers, patent engineers, thermal-conversion operators, and project-finance analysts — all trained in-house through the EX Academy pipeline, carrying no legacy cost structure." },
    { k: "/ 08 IP", h: "Protected and controlled", p: "Granted patents in multiple jurisdictions, controlled by EX Zero Carbon Inc. Every filing passes a seven-stage review including prior art search, first-principles physics validation, and independent second review." },
    { k: "/ 09 Markets", h: "Six verticals, active deployments", p: "First commercial fleet under way in Andalusia; the Paris installation continues as a demonstration site; the Verkoso project advances the next generation. Research partnerships span 16 institutions across 7 nations." },
  ];
  return (
    <section className="section x150-section" id="chain" data-screen-label="02 The Chain">
      <div className="x150-bg"><img src="assets/photos/chain-bg.jpg" alt="" /></div>
      <div className="container x150-inner">
        <div className="ip-intro">
          <div className="label">The Chain</div>
          <h2>We built <span className="gold">every link.</span></h2>
          <p>This is not a portfolio company EX Venture invested in. It is a portfolio company EX Venture built — from the machine to the market.</p>
        </div>
        <div className="ip-grid cols-3">
          {links.map((it, i) => (
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

function ZeroXBand() {
  return (
    <section className="ip-band" data-screen-label="03 Statement">
      <div className="ip-band-img"><img src="assets/photos/zerox-built.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          Not a company we invested in. <span className="gold">A company we built.</span>
        </p>
      </div>
    </section>
  );
}

function ZeroXEngine() {
  const cells = [
    { k: "The Core", h: "Catalytic tar reformer", p: "Operating at high temperature, the reformer cracks tars and heavy hydrocarbons into usable syngas before they reach the engine. It is the difference between a machine that runs on clean wood chips and one that processes municipal waste, sewage sludge, and agricultural residue." },
    { k: "The Package", h: "The X-150, containerised", p: "Packaged in a standard 20-foot ISO container — standard logistics, no custom foundations, no site-specific engineering for each unit. Deployable within days, not months." },
    { k: "The Output", h: "Electricity, heat, cooling", p: "Three output configurations cover the demand patterns. Combined thermal efficiency reaches the high eighties." },
    { k: "The Proof", h: "2,500 hours, validated", p: "More than 2,500 continuous hours at the COMETHA project site in Paris, processing real urban waste streams with independent research partners. The data informed every subsequent engineering decision." },
  ];
  return (
    <section className="section x150-section" id="engine" data-screen-label="04 The X-150">
      <div className="x150-bg"><img src="assets/photos/x150-bg.jpg" alt="" /></div>
      <div className="container x150-inner">
        <div className="x150-intro-grid">
          <div className="ip-intro">
            <div className="label">The X-150</div>
            <h2>The machine that processes <span className="gold">what others cannot.</span></h2>
            <p>More than 2,500 continuous hours validated on real urban waste at the COMETHA site in Paris, with independent research partners. That data — not a spec sheet — is what every engineering decision below is built on.</p>
          </div>
          <figure className="x150-figure">
            <img src="assets/photos/x150-bg.jpg" alt="The X-150 gasifier operating at a waste site" />
            <figcaption><span className="dot"></span>X-150 · field deployment</figcaption>
          </figure>
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

function ZeroXMarkets() {
  const markets = [
    { name: "Data Centers", tag: "Cooling + Power", type: "gold", p: "On-site power and cooling from waste heat — addressing the fastest-growing energy demand on the grid." },
    { name: "Mining", tag: "Diesel Replacement", type: "ghost", p: "Replacing diesel generation at remote sites with local thermal conversion of available residue streams." },
    { name: "Biogas", tag: "Plant Optimisation", type: "gold", p: "Boosting the output and economics of existing biogas plants through integrated thermal conversion." },
    { name: "Remote Villages", tag: "Combined Heat & Power", type: "ghost", p: "Reliable off-grid CHP for communities the central grid never reached." },
    { name: "Breweries", tag: "Waste Valorisation", type: "gold", p: "Turning brewery waste streams into on-site energy — closing the loop on production residue." },
    { name: "Cold Chain", tag: "Off-Grid", type: "ghost", p: "Off-grid cooling for cold-chain logistics in regions without reliable power." },
  ];
  return (
    <section className="section" id="markets" data-screen-label="05 Markets">
      <div className="container">
        <div className="ip-intro">
          <div className="label">Global Markets</div>
          <h2>One platform. <span className="gold">Six verticals.</span></h2>
          <p>Each configuration uses the same core thermal conversion system with different balance-of-plant packaging — predictable manufacturing, six distinct addressable markets.</p>
        </div>
        <div className="ip-pillars">
          {markets.map((m, i) => (
            <div className="ip-pillar" key={i}>
              <span className={"ip-tag " + m.type}>{m.tag}</span>
              <h3 className="pname">{m.name}</h3>
              <p className="pdesc">{m.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZeroXFunding() {
  const cards = [
    { name: "Project COMETHA", tag: "Paris · EU Co-Funded", p: "Validated the core thermal conversion process over thousands of operating hours on mixed waste — municipal solid waste, sewage sludge, and agricultural residue. Independent verification by Fraunhofer IKTS, TU Zittau/Görlitz, Syctom, and SIAAP." },
    { name: "Project Verkoso", tag: "FKZ 03EI5466 · BMWK", p: "Integrates the MFC gasifier with a high-efficiency solid oxide fuel cell for power from calamity wood — twice the electrical efficiency of combustion engines. Running through January 2027 with Fraunhofer IKTS, Hochschule Zittau/Görlitz, and Sorption Technologies." },
    { name: "BMWK & BMBF Programs", tag: "Catalyst & Reformer", p: "German federal programs funded the catalyst development, reformer integration, and system optimisation — non-repayable capital aligned with energy-policy objectives." },
    { name: "Andalusia Deployment", tag: "Cádiz Zone · Regional", p: "The first commercial fleet deployment, funded through regional incentives. Biochar produced as a by-product is certified under European and international carbon standards, generating credit revenue that can offset unit operating cost." },
  ];
  return (
    <section className="section" id="funding" data-screen-label="06 Funding" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Funding</div>
          <h2>Government capital as the <span className="gold">development engine.</span></h2>
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

function ZeroXContact({ onBookCall }) {
  return (
    <section className="ip-cta" id="contact" data-screen-label="07 Contact">
      <div className="ip-cta-bg"><img src="assets/photos/chain-bg.jpg" alt="" /></div>
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Build With Zero-X</div>
        <h2>From the machine<br/><span className="gold">to the market.</span></h2>
        <p>
          If you operate waste streams, remote energy demand, or industrial heat and cooling loads — and want validated, containerised thermal conversion deployed as a managed fleet — let us talk.
        </p>
        <div className="ip-cta-actions">
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
          <a className="ip-mail" href="mailto:media@exventure.co">media@exventure.co</a>
        </div>
      </div>
    </section>
  );
}

function ZeroXDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Disclaimer</span>
          Zero-X technology is controlled by EX Zero Carbon Inc., part of EX Venture Inc. (SEC registered). Nothing on this page constitutes investment advice, a solicitation to invest, or a financial promotion. Patent status, project timelines, partnerships, and deployment plans are subject to change.
        </p>
      </div>
    </div>
  );
}

function ZeroXApp() {
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
      <GlobalNav navmark="ZERO-X" onBookCall={openModal} />
      <main>
        <ZeroXHero />
        <ZeroXChain />
        <ZeroXBand />
        <ZeroXEngine />
        <ZeroXMarkets />
        <ZeroXFunding />
        {window.VerbSequence ? <window.VerbSequence /> : null}
        <ZeroXContact onBookCall={openModal} />
        <ZeroXDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Zero-X · Energy" /> : null}
    </div>
  );
}

(function mountZeroX() {
  if (window.Footer && window.BookCallModal && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<ZeroXApp />);
  } else {
    setTimeout(mountZeroX, 50);
  }
})();

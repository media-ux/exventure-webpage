// Family of 4 entities, How-we-work quote, Thesis, Track Record, Research

function Family() {
  const entities = [
    {
      wm: "ZERO·X",
      status: "ENERGY · CIRCULAR INFRA",
      title: "Thermal Conversion & Energy",
      desc: "Biomass and residual-stream conversion, syngas production, catalytic reforming, heat recovery, and modular power generation. Turning difficult materials into useful energy and cleaner industrial processes — moving advanced energy systems from research toward deployment.",
      link: "Learn more",
      meta: "zero-x",
      href: "Zero-X.html",
    },
    {
      wm: "SERAPH",
      status: "BIOTECH · SPACE-ADJACENT",
      title: "Biological Manufacturing",
      desc: "Algae-based protein production, closed-loop bioprocessing, active-compound pathways, and research relevant to space, extreme-environment, and resilient production systems. Producing more efficiently, more locally, and more resiliently — on Earth and beyond.",
      link: "Learn more",
      meta: "seraph",
      href: "Seraph Group.html",
    },
    {
      wm: "EX·CARBON",
      status: "CARBON · MATERIALS · CCM",
      title: "Carbon Capture & Materials",
      desc: "Biochar as a material platform — turning the by-products of gasification into syngas-cleaning media, phosphorus recovery from sewage sludge, and permanent carbon storage. Led by CCM in Berlin, validated with research partners.",
      link: "Explore EX Carbon",
      meta: "ex carbon",
      href: "EX Carbon.html",
    },
    {
      wm: "EX·IP VENTURES",
      status: "PATENT CREATION · IP",
      title: "The IP Engine",
      desc: "We find white-space inventions, validate them at the physics level, and file them to grant — then build companies around the protected IP. A patent creation engine, not an analytics tool.",
      link: "Explore EX IP Ventures",
      meta: "ex ip ventures",
      href: "EX IP Ventures.html",
    },
    {
      wm: "EX·FI",
      status: "REGULATED PARTNER · UK",
      title: "The Financial Layer",
      desc: "Regulated payment rails and financial tooling built for the way money actually moves. Checkout, settlement, and treasury — the financial infrastructure beneath the ventures, without the friction legacy systems demand.",
      link: "Visit exfi.app",
      meta: "exfi.app",
      href: "https://exfi.app/",
    },
    {
      wm: "EX·ACADEMY",
      status: "BALI · TALENT PLATFORM",
      title: "The Talent Engine",
      desc: "Our internal platform for young operators who work on real ventures — grant research, patent analysis, consortium development, project finance, and venture execution. They learn by doing the work, not observing it.",
      link: "Explore EX Academy",
      meta: "ex academy",
      href: "EX Academy.html",
    },
  ];

  return (
    <section className="section" id="family" data-screen-label="02 Family">
      <div className="container">
        <div className="section-head">
          <div className="left">
            <div className="label">Our Venture Areas</div>
          </div>
          <div className="right">
            <h2>Ventures, a financial layer, <span className="accent">and a talent engine.</span></h2>
            <p className="body-text" style={{ marginTop: 28, maxWidth: 620 }}>
              EX Venture builds across energy, carbon, biotechnology, intellectual property, and financial infrastructure — supported by regulated payment infrastructure and a talent platform at the center, not on the side.
            </p>
          </div>
        </div>

        <div className="entities">
          {entities.map((e, i) => (
            <div className={"entity" + (e.span ? " entity-wide" : "")} key={i}>
              <div>
                <div className="entity-head">
                  <span className="entity-wordmark">{e.wm}</span>
                  <span className="entity-status">{e.status}</span>
                </div>
                <h3 className="entity-title">{e.title}</h3>
                <p className="entity-desc">{e.desc}</p>
              </div>
              <div className="entity-footer">
                <a href={e.href} className="entity-link" target={e.href.startsWith("http") ? "_blank" : undefined} rel={e.href.startsWith("http") ? "noopener noreferrer" : undefined}>{e.link} <span className="arr">{e.href.startsWith("http") ? "↗" : "→"}</span></a>
                <span className="entity-meta">{e.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIFirst() {
  return (
    <section className="ai-first" id="ai-first" data-screen-label="02 AI-First">
      <div className="container ai-first-inner">
        <div className="ai-first-eyebrow">Our Approach</div>
        <h2 className="ai-first-head">
          AI-first.<br/><span className="accent">But the moat is physical.</span>
        </h2>
        <p className="ai-first-body">
          AI is revolutionising the world, and we build on it from day one — every venture, every system, every operator. But software alone is copied in a quarter. Lasting value is created in things that endure: defensible <strong>patents</strong>, a hardware <strong>moat</strong>, and timeless solutions like <strong>energy</strong>. We use AI to move faster — and we point it at problems whose answers stay valuable for decades, not quarters.
        </p>

        <div className="ai-first-video">
          <div className="ai-first-video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/9K2ykTL_1zk?rel=0&modestbranding=1"
              title="EX Venture"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote-section" data-screen-label="03 How We Work">
      <div className="quote-img">
        <img src={(window.__resources && window.__resources.quoteImg) || "assets/photos/meeting-03.jpg"} alt="" />
      </div>
      <div className="container quote-inner">
        <div className="quote-eyebrow">A Different Model</div>
        <h2 className="quote-text">
          Good ideas get trapped <span className="accent">between disciplines.</span>
          <span style={{ display: "block", fontSize: "0.45em", color: "rgba(240,235,225,0.55)", marginTop: 36, fontFamily: "Instrument Sans", letterSpacing: "-0.005em", fontWeight: 400, lineHeight: 1.55, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            Scientists understand the technology but not the funding. Founders understand the market but not the technical risk. EX Venture was built to close the gaps between research, capital, patents, and execution.
          </span>
        </h2>
      </div>
    </section>
  );
}

function Thesis() {
  const pillars = [
    {
      n: "/ 01",
      t: "Research → Insight",
      d: "Applied research across energy, biotechnology, and frontier systems creates the technical insight everything else is built on.",
    },
    {
      n: "/ 02",
      t: "Insight → Intellectual Property",
      d: "Technical insight is captured as protected, defensible IP — prior art, validation, and claims development treated as part of the build, not an afterthought.",
    },
    {
      n: "/ 03",
      t: "IP → Venture Formation",
      d: "Protected ideas support the formation of structured ventures, with the partners, funding pathways, and operators to carry them forward.",
    },
    {
      n: "/ 04",
      t: "Venture → Deployment",
      d: "Venture formation enables real-world deployment — moving validated work out of the lab and into operating environments.",
    },
    {
      n: "/ 05",
      t: "Deployment → Evidence",
      d: "Deployment generates evidence: performance data, operating proof, and market signal that de-risk the next decision.",
    },
    {
      n: "/ 06",
      t: "Evidence → The Next Cycle",
      d: "Evidence strengthens the next research cycle. Each loop builds capability — and the system compounds over time.",
    },
  ];

  return (
    <section className="section" id="thesis" data-screen-label="04 Thesis" style={{ background: "#050505" }}>
      <div className="container">
        <div className="section-head">
          <div className="left">
            <div className="label">The EX Venture Loop</div>
          </div>
          <div className="right">
            <h2>Research to deployment.<br/><span className="accent">And back again.</span></h2>
            <p className="body-text" style={{ marginTop: 28, maxWidth: 620 }}>
              Our operating model is a repeatable loop. Each cycle compounds — more knowledge, more partnerships, more protected ideas, more trained operators, more practical routes to market. This is how deep tech becomes durable: not through hype, but through compounding execution.
            </p>
          </div>
        </div>

        <div className="thesis-grid">
          {pillars.map((p, i) => (
            <div className="thesis-cell" key={i}>
              <div>
                <div className="thesis-counter">{p.n}</div>
                <h3 className="thesis-title">{p.t}</h3>
                <p className="thesis-desc">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Execute() {
  const points = [
    { k: "01", t: "Move first", d: "We build and validate on our own dime — no pitch, no raise to begin." },
    { k: "02", t: "Public capital carries the risk", d: "Four funding sources retire technical risk before private capital enters." },
    { k: "03", t: "Compound the ecosystem", d: "Every venture inherits a shared operating layer — accounting, compliance, AI — on day one." },
  ];
  return (
    <section className="section" id="execute" data-screen-label="08 How We Execute" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="section-head">
          <div className="left">
            <div className="label">How We Execute</div>
          </div>
          <div className="right">
            <h2>Move first on our own dime. <span className="accent">Raise against proof.</span></h2>
            <p className="body-text" style={{ marginTop: 28, maxWidth: 640 }}>
              We don't raise to burn. We build and validate before we spend, make public capital carry the technical risk, and compound a shared operating layer across every company. It's the architecture that lets each new venture move at AI speed — and back breakthroughs no single VC would fund alone.
            </p>
          </div>
        </div>
        <div className="execute-points">
          {points.map((p, i) => (
            <div className="execute-point" key={i}>
              <div className="ep-k">/ {p.k}</div>
              <div className="ep-t">{p.t}</div>
              <div className="ep-d">{p.d}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <a className="btn-link" href="How We Execute.html">Read the full doctrine <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const stats = [
    { v: "€160M+", l: "Capital track record across funded ventures" },
    { v: "200+", l: "Distributed-energy systems financed and installed across 11 countries" },
    { v: "16", l: "Research institutions partnered across 8 nations" },
    { v: "250+", l: "Operators trained and deployed via EX Academy" },
  ];
  const rows = [
    { k: "Backed (team track record)", v: "Kleiner Perkins · Wellington Partners · Waste Management · TriplePoint Capital" },
    { k: "Research with", v: "DLR · Fraunhofer · Lawrence Berkeley National Laboratory · KIT · RWTH Aachen · PETRONAS" },
    { k: "Recognition", v: "Fast Company #1 Energy Company 2018 · EY Entrepreneur of the Year finalist · 4× Inc. 5000" },
    { k: "Regulated", v: "EX Venture Inc. is SEC-registered · financial services via an FCA-authorised partner" },
  ];
  return (
    <section className="section proof" id="proof" data-screen-label="02 Proof" style={{ background: "var(--navy-deep, #050E17)" }}>
      <div className="container">
        <div className="proof-head proof-head-split">
          <div className="proof-head-text">
            <div className="label">The Track Record</div>
            <h2 className="proof-title">A team that has done this before — <span className="accent">and is doing it now.</span></h2>
            <p className="proof-sub">EX Venture is built by operators with a thirty-year track record in deep tech and clean energy. Not a thesis — a group that has already built, funded, and deployed, and is doing it again now.</p>
          </div>
          <figure className="proof-photo">
            <img src="assets/photos/team-photo.jpg" alt="The EX Venture team in Bali" />
            <figcaption className="proof-photo-cap">
              <span className="dot"></span>
              The team — Bali
            </figcaption>
          </figure>
        </div>
        <div className="proof-stats">
          {stats.map((s, i) => (
            <div className="proof-stat" key={i}>
              <div className="ps-v">{s.v}</div>
              <div className="ps-l">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="proof-rows">
          {rows.map((r, i) => (
            <div className="proof-row" key={i}>
              <span className="pr-k">{r.k}</span>
              <span className="pr-v">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackRecord() {
  const investors = [
    { name: "Kleiner Perkins", role: "Tier-1 Silicon Valley VC" },
    { name: "Wellington Partners", role: "European Venture Capital" },
    { name: "Waste Management Inc.", role: "Strategic Corporate" },
    { name: "TriplePoint Capital", role: "Venture Debt" },
  ];
  return (
    <section className="section" id="track" data-screen-label="05 Track Record">
      <div className="container">
        <div className="section-head">
          <div className="left">
            <div className="label">Track Record</div>
          </div>
          <div className="right">
            <h2>Institutional investors.<br/><span className="accent">Agnion restructured. Entrade built.</span></h2>
            <p className="body-text" style={{ marginTop: 28, maxWidth: 620 }}>
              The capital partners who have backed the work — from tier-1 Silicon Valley funds to European institutional capital and strategic corporates.
            </p>
          </div>
        </div>

        <div className="logo-wall">
          {investors.map((inv, i) => (
            <div className="logo-cell" key={i}>
              <div className="name">{inv.name}</div>
              <div className="role">{inv.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  const labs = [
    { name: "DLR", role: "German Aerospace Center" },
    { name: "Fraunhofer Institute", role: "Applied Research · Germany" },
    { name: "Helmholtz Institut", role: "Energy Research · Germany" },
    { name: "Robert Boyle Institut", role: "Research · Germany" },
    { name: "KIT Karlsruhe", role: "Technology · Germany" },
    { name: "RWTH Aachen", role: "Engineering · Germany" },
    { name: "TU Munich", role: "Technical University" },
    { name: "FAU Nuremberg", role: "University · Germany" },
    { name: "Lawrence Berkeley National Laboratory", role: "National Lab · USA" },
    { name: "Monash University", role: "Energy & Environment · Australia" },
    { name: "Universiti Teknologi PETRONAS", role: "Energy · Malaysia" },
    { name: "Udayana University", role: "Research · Indonesia" },
    { name: "NTU Singapore", role: "Technology · Singapore" },
    { name: "Univ. Fukushima", role: "Energy · Japan" },
    { name: "Uni. Kraljevo", role: "Engineering · Serbia" },
    { name: "HS Zittau-Goerlitz", role: "Applied Science · Germany" },
  ];
  const countries = ["Germany", "USA", "Australia", "Malaysia", "Indonesia", "Singapore", "Japan", "Serbia"];

  return (
    <section className="section" id="research" data-screen-label="06 Research" style={{ background: "#050505" }}>
      <div className="container">
        <div className="section-head">
          <div className="left">
            <div className="label">Government-Backed Research</div>
          </div>
          <div className="right">
            <h2>30 years. 8 nations.<br/><span className="accent">16 research institutions.</span></h2>
            <p className="body-text" style={{ marginTop: 28, maxWidth: 620 }}>
              Government-funded green technology programs across three continents — coordinating joint research with some of the world's most rigorous scientific institutions on clean energy, distributed power systems, and sustainable infrastructure.
            </p>
          </div>
        </div>

        <div className="country-chips">
          {countries.map((c, i) => <span key={i} className="country-chip">{c}</span>)}
        </div>

        <div className="logo-wall">
          {labs.map((lab, i) => (
            <div className="logo-cell" key={i}>
              <div className="name">{lab.name}</div>
              <div className="role">{lab.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Family, AIFirst, Proof, Quote, Thesis, Execute, TrackRecord, Research });

// EX Academy — talent platform sub-page (reuses ex-ip.css vocabulary)
function AcademyNav({ onBookCall }) {
  const links = [
    { l: "The Pathway", h: "#pathway" },
    { l: "Locations", h: "#locations" },
    { l: "The Work", h: "#work" },
    { l: "Who We Want", h: "#who" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="EX Venture Site.html" className="nav-logo">
          <span className="wordmark"><span className="wm-accent">EX</span> VENTURE</span>
          <span className="ip-navmark">EX&nbsp;ACADEMY</span>
        </a>
        <div className="nav-links">
          {window.VenturesMenu ? <window.VenturesMenu /> : null}
          {links.map((l, i) => <a key={i} href={l.h}>{l.l}</a>)}
        </div>
        <a className="nav-cta" href="https://baliinternship.com/" target="_blank" rel="noopener noreferrer">
          Apply <span style={{ fontSize: 11 }}>↗</span>
        </a>
      </div>
    </nav>
  );
}

function AcademyHero() {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/collab-05.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">EX ACADEMY</div>
        <h1 className="ip-title">Learn by <span className="gold">building.</span></h1>
        <p className="ip-verb">
          You won't study tomorrow's company.<br/><span className="gold">You'll build it.</span>
        </p>
        <p className="ip-lead">
          EX Academy is the talent engine of EX Venture. The pathway is always the same: intern with us, we train you, then you work alongside our portfolio companies on real ventures — with real capital, real clients, and real stakes. We prepare people on a new AI level, three feet from operators who have done it on four continents.
        </p>
      </div>
    </section>
  );
}

function AcademyPathway() {
  const steps = [
    { n: "/ 01", name: "Intern", p: "You start by interning with us — embedded in the real work from day one. Grant research, patent analysis, consortium development, project finance, venture execution. No lectures, no theory of building." },
    { n: "/ 02", name: "Train", p: "We train you on a new AI level — the agents, the tooling, and the operating playbook that runs across every entity in the group. You learn by doing the work, not observing it." },
    { n: "/ 03", name: "Build", p: "You work alongside our portfolio companies on live ventures. Real capital, real clients, real stakes. Most of our core team started exactly here — and stayed." },
  ];
  return (
    <section className="section" id="pathway" data-screen-label="02 The Pathway">
      <div className="container">
        <div className="x150-intro-grid">
          <div className="ip-intro" style={{ marginBottom: 0 }}>
            <div className="label">The Pathway</div>
            <h2>One path. <span className="gold">Always the same.</span></h2>
            <p>Intern with us. We train you. You build with our portfolio companies. It is the same path the founders walked, and the same one our core team did.</p>
          </div>
          <figure className="x150-figure">
            <img src="assets/photos/academy-1.jpg" alt="Academy interns in discussion in Bali" />
            <figcaption><span className="dot"></span>Bali · cohort discussion</figcaption>
          </figure>
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

function AcademyBand() {
  return (
    <section className="ip-band" data-screen-label="03 Statement">
      <div className="ip-band-img"><img src="assets/photos/field-01.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          Most of our core team were once interns. <span className="gold">The pathway works.</span>
        </p>
      </div>
    </section>
  );
}

function AcademyLocations() {
  const places = [
    { k: "Flagship", h: "Bali", p: "The flagship Academy, hosted by EPIC Solutions Global. Where interns ship real code into production from a rice terrace — the original learning curve." },
    { k: "Spain", h: "Las Palmas", p: "Our Canary Islands team — home to the Lemna and bioprocessing research alongside ULPGC Las Palmas." },
    { k: "Spain", h: "Málaga", p: "The Andalusian hub, close to the first Zero-X commercial fleet deployment." },
    { k: "Germany · New", h: "Berlin", p: "A new Academy opening with offices in Berlin — at the centre of European deep tech, research, and grant infrastructure." },
    { k: "Germany · New", h: "Munich", p: "A new Academy opening with offices in Munich — close to the engineering, aerospace, and research networks the group works with." },
  ];
  return (
    <section className="section" id="locations" data-screen-label="04 Locations" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="x150-intro-grid">
          <div className="ip-intro" style={{ marginBottom: 0 }}>
            <div className="label">Where We Are</div>
            <h2>Teams across <span className="gold">two continents.</span></h2>
            <p>From the flagship in Bali to new Academies opening in Berlin and Munich — across Asia and Europe, the talent engine runs where the work is.</p>
          </div>
          <figure className="x150-figure">
            <img src="assets/photos/academy-2.jpg" alt="Founders and interns in a session" />
            <figcaption><span className="dot"></span>Session in progress</figcaption>
          </figure>
        </div>
        <div className="ip-grid cols-3">
          {places.map((p, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{p.k}</div>
              <h3 className="ip-h" style={{ color: "var(--bsm-gold)" }}>{p.h}</h3>
              <p className="ip-p">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademyWork() {
  const work = [
    { name: "Grant Research", tag: "Public Funding", type: "gold", p: "Scan European and German programmes, score fit, and help draft full application narratives with the AI grant pipeline." },
    { name: "Patent Analysis", tag: "IP Intelligence", type: "ghost", p: "Read the technology landscape, flag white space, and support filings with the patent agent before competitors move." },
    { name: "Consortium Development", tag: "Partnerships", type: "gold", p: "Build the research and industry consortia that turn funded projects into real deployments." },
    { name: "Project Finance", tag: "Capital", type: "ghost", p: "Structure the capital behind ventures — modelling, SPVs, and the financial plumbing that makes deep tech ship." },
    { name: "Venture Execution", tag: "Operations", type: "gold", p: "Work inside portfolio companies on live operations — the same playbook the core team runs every day." },
    { name: "AI Tooling", tag: "New AI Level", type: "ghost", p: "Learn the agents and systems that power every entity — and build new ones into real workflows." },
  ];
  return (
    <section className="section" id="work" data-screen-label="05 The Work">
      <div className="container">
        <div className="x150-intro-grid">
          <div className="ip-intro" style={{ marginBottom: 0 }}>
            <div className="label">The Work</div>
            <h2>Real ventures. <span className="gold">Real stakes.</span></h2>
            <p>You won't study yesterday's case studies. You'll do the work that builds tomorrow's company — prepared on a new AI level.</p>
          </div>
          <figure className="x150-figure">
            <img src="assets/photos/academy-3.jpg" alt="Interns working through a venture problem over coffee" />
            <figcaption><span className="dot"></span>Working the problem</figcaption>
          </figure>
        </div>
        <div className="ip-pillars">
          {work.map((w, i) => (
            <div className="ip-pillar" key={i}>
              <span className={"ip-tag " + w.type}>{w.tag}</span>
              <h3 className="pname">{w.name}</h3>
              <p className="pdesc">{w.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademyWho() {
  const traits = [
    { k: "Curious", h: "You ask the next question", p: "You go past the brief. You want to know how the machine works, why the funding flows the way it does, where the white space hides." },
    { k: "Self-Motivated", h: "You move without being pushed", p: "Nobody hands you a syllabus. You find the mission worth the risk and you run at it." },
    { k: "Game-Changers", h: "You build what isn't there yet", p: "You ignore the people who say it can't be done. You ship — and you leave having actually built something real." },
  ];
  return (
    <section className="section" id="who" data-screen-label="06 Who We Want" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="x150-intro-grid">
          <div className="ip-intro" style={{ marginBottom: 0 }}>
            <div className="label">Who We Want</div>
            <h2>Curious, self-motivated <span className="gold">game-changers.</span></h2>
            <p>We don't need spectators. We need people who want to build — and are ready to be prepared on a new AI level.</p>
          </div>
          <figure className="x150-figure">
            <img src="assets/photos/academy-4.jpg" alt="Academy participants listening during a session" />
            <figcaption><span className="dot"></span>The cohort</figcaption>
          </figure>
        </div>
        <div className="ip-grid cols-3">
          {traits.map((t, i) => (
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

function AcademyProof() {
  return (
    <section className="section" id="proof" data-screen-label="07 Proof">
      <div className="container">
        <div className="ip-grid cols-3">
          <div className="ip-cell">
            <div className="ip-k">Interns Trained</div>
            <h3 className="ip-h" style={{ fontSize: "52px", color: "var(--bsm-gold)" }}>250+</h3>
          </div>
          <div className="ip-cell">
            <div className="ip-k">Core Team</div>
            <h3 className="ip-h" style={{ fontSize: "52px", color: "var(--bsm-gold)" }}>Ex-interns</h3>
            <p className="ip-p">Most of the people running the group today started as interns.</p>
          </div>
          <div className="ip-cell">
            <div className="ip-k">Academies</div>
            <h3 className="ip-h" style={{ fontSize: "52px", color: "var(--bsm-gold)" }}>5</h3>
            <p className="ip-p">Bali, Las Palmas, Málaga — and new in Berlin and Munich.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AcademyContact() {
  return (
    <section className="ip-cta" id="contact" data-screen-label="08 Apply">
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Ready to build?</div>
        <h2>Intern with us.<br/><span className="gold">Then build with us.</span></h2>
        <p>
          If you are curious, self-motivated, and want to be prepared on a new AI level working on real ventures — start where our whole core team started.
        </p>
        <div className="ip-cta-actions">
          <a className="btn btn-primary" href="https://baliinternship.com/" target="_blank" rel="noopener noreferrer">Apply Now <span className="arr">→</span></a>
          <a className="ip-mail" href="Open Roles.html">View Open Roles →</a>
        </div>
      </div>
    </section>
  );
}

function AcademyDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Note</span>
          EX Academy is the talent platform of EX Venture Inc. (SEC registered). The Bali Academy is hosted by EPIC Solutions Global. Programme structure, locations, and intake are subject to change.
        </p>
      </div>
    </div>
  );
}

function AcademyApp() {
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
      <GlobalNav navmark="EX ACADEMY" onBookCall={openModal} />
      <main>
        <AcademyHero />
        <AcademyPathway />
        <AcademyBand />
        <AcademyLocations />
        <AcademyWork />
        <AcademyWho />
        <AcademyProof />
        {window.VerbSequence ? <window.VerbSequence /> : null}
        <AcademyContact />
        <AcademyDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Academy / Internships" /> : null}
    </div>
  );
}

(function mountAcademy() {
  if (window.Footer && window.BookCallModal && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<AcademyApp />);
  } else {
    setTimeout(mountAcademy, 50);
  }
})();

// EX Venture — Open Roles (reuses ex-ip.css vocabulary)
// --- Edit cohort dates here (single source of truth) ---
const MALAGA_START = "September 1";

function RolesNav() {
  const links = [
    { l: "Bali", h: "#bali" },
    { l: "Málaga", h: "#malaga" },
    { l: "How to Apply", h: "#apply" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="EX Venture Site.html" className="nav-logo">
          <span className="wordmark"><span className="wm-accent">EX</span> VENTURE</span>
          <span className="ip-navmark">OPEN&nbsp;ROLES</span>
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

function RolesHero() {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/collab-02.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">OPEN ROLES</div>
        <h1 className="ip-title">Come build <span className="gold">the real thing.</span></h1>
        <p className="ip-verb">
          Curious. Self-motivated.<br/><span className="gold">Game-changers only.</span>
        </p>
        <p className="ip-lead">
          We are opening a new cohort across energy, biotech, AI, finance, and IP. Intern with us, get trained on a new AI level, then build alongside our portfolio companies on live ventures. Every role below is hands-on from day one — real ventures, real capital, real stakes.
        </p>
      </div>
    </section>
  );
}

function RoleCard({ r }) {
  return (
    <a className="role-card" href="https://baliinternship.com/" target="_blank" rel="noopener noreferrer">
      <div className="role-head">
        <h3 className="role-title">{r.title}</h3>
        <span className={"role-tag " + (r.type || "ghost")}>{r.tag}</span>
      </div>
      <p className="role-desc">{r.desc}</p>
      <div className="role-foot">
        <span>{r.meta}</span>
        <span className="role-apply">Apply <span aria-hidden="true">→</span></span>
      </div>
    </a>
  );
}

function RolesBali() {
  const meta = "Bali · 4–6 mo · Rolling";
  const roles = [
    { title: "AI Engineering", tag: "EX AI", type: "gold", desc: "Build and ship production AI across every entity in the group — from data pipelines to deployed inference.", meta },
    { title: "AI Agent System Developers", tag: "EX AI", type: "gold", desc: "Design the agents that run grants, patents, compliance, and operations. Architect the systems that replace the busywork.", meta },
    { title: "Biologist", tag: "Seraph", type: "gold", desc: "Cultivation, closed-loop bioprocessing, and active-compound pathways inside the Seraph biomanufacturing platform.", meta },
    { title: "Sensor Integration AI", tag: "Seraph", type: "gold", desc: "Fuse multi-spectral sensors with edge inference — the eyes that watch the tanks 24/7 and catch problems early.", meta },
    { title: "CAD Engineering", tag: "Zero-X", type: "ghost", desc: "Model and iterate thermal-conversion hardware — the containerised systems that turn waste into energy.", meta },
    { title: "Finance", tag: "EX FI", type: "ghost", desc: "Capital modelling, SPVs, and the financial plumbing behind regulated payment infrastructure at EX FI.", meta },
    { title: "Grant Writers & Auditors", tag: "EX IP", type: "ghost", desc: "Scan European and German programmes, draft full application narratives, and audit deliverable compliance.", meta },
    { title: "Cyber Security", tag: "Group", type: "ghost", desc: "Protect the systems, sensor networks, and data behind every operating entity across the group.", meta },
    { title: "HR", tag: "Group", type: "ghost", desc: "Build the team that builds everything else — recruiting, onboarding, and growing the next cohort of operators.", meta },
    { title: "Marketing", tag: "Group", type: "ghost", desc: "Tell the story of what we actually ship — across web, social, and the EX Academy brand.", meta },
    { title: "Sales & Communication", tag: "Group", type: "ghost", desc: "Open doors and close them. Carry the message to partners, customers, and research institutions.", meta },
    { title: "General Internship", tag: "Academy", type: "gold", desc: "Not sure which track? Start in the work, prove yourself, and find your lane across the group.", meta },
  ];
  return (
    <section className="section" id="bali" data-screen-label="02 Bali">
      <div className="container">
        <div className="ip-intro">
          <div className="label">Bali, Indonesia</div>
          <h2>The flagship <span className="gold">cohort.</span></h2>
          <p>Hosted by EPIC Solutions Global. Every Bali role is 4–6 months, on the ground, with rolling intake — we onboard new builders as they're ready.</p>
        </div>
        <div className="cohort-banner">
          <div className="cb-left">Bali Cohort <span className="gold">— Rolling Intake</span></div>
          <div className="cb-right">
            <span>4–6 Months</span>
            <span>On-Site</span>
            <span>EPIC Solutions Global</span>
          </div>
        </div>
        <div className="roles-grid">
          {roles.map((r, i) => <RoleCard r={r} key={i} />)}
        </div>
      </div>
    </section>
  );
}

function RolesMalaga() {
  const meta = "Málaga · 4–6 mo · " + MALAGA_START;
  const roles = [
    { title: "Thermo-Chemistry Engineers", tag: "Zero-X", type: "gold", desc: "Reactor chemistry, catalysis, and gas reforming for the Zero-X thermal-conversion platform — close to the first commercial fleet.", meta },
    { title: "Plant Genetics", tag: "Seraph", type: "gold", desc: "Strain development and trait optimisation for Seraph's production organisms — the science behind the yield.", meta },
  ];
  return (
    <section className="section" id="malaga" data-screen-label="03 Málaga" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Málaga, Spain</div>
          <h2>Deep science <span className="gold">on the ground.</span></h2>
          <p>Specialist roles based in Andalusia, close to live Zero-X and Seraph research and deployment. The Málaga cohort starts {MALAGA_START}.</p>
        </div>
        <div className="cohort-banner">
          <div className="cb-left">Málaga Cohort <span className="gold">— Starts {MALAGA_START}</span></div>
          <div className="cb-right">
            <span>4–6 Months</span>
            <span>On-Site</span>
            <span>Andalusia, Spain</span>
          </div>
        </div>
        <div className="roles-grid">
          {roles.map((r, i) => <RoleCard r={r} key={i} />)}
        </div>
      </div>
    </section>
  );
}

function RolesApply() {
  const steps = [
    { n: "/ 01", name: "Apply", p: "Send your application through baliinternship.com. Tell us what you want to build and why." },
    { n: "/ 02", name: "Intern", p: "Join the cohort on the ground. You're in the real work from day one — no theory of building." },
    { n: "/ 03", name: "Build", p: "Get trained on a new AI level, then work alongside our portfolio companies on live ventures." },
  ];
  return (
    <section className="section" id="apply" data-screen-label="04 How to Apply">
      <div className="container">
        <div className="ip-intro">
          <div className="label">How to Apply</div>
          <h2>Three steps <span className="gold">in.</span></h2>
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

function RolesContact() {
  return (
    <section className="ip-cta" id="contact" data-screen-label="05 Contact">
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Bali rolling · Málaga starts {MALAGA_START}</div>
        <h2>Bring the work.<br/><span className="gold">We'll show you where it is.</span></h2>
        <p>
          If you are curious, self-motivated, and ready to be prepared on a new AI level building real ventures — apply now. Most of our core team started exactly here.
        </p>
        <div className="ip-cta-actions">
          <a className="btn btn-primary" href="https://baliinternship.com/" target="_blank" rel="noopener noreferrer">Apply Now <span className="arr">→</span></a>
          <a className="ip-mail" href="https://instagram.com/exventureacademy" target="_blank" rel="noopener noreferrer">@exventureacademy ↗</a>
        </div>
      </div>
    </section>
  );
}

function RolesDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Note</span>
          EX Academy is the talent platform of EX Venture Inc. (SEC registered). The Bali Academy is hosted by EPIC Solutions Global. Roles, locations, durations, and start dates are subject to change.
        </p>
      </div>
    </div>
  );
}

function RolesApp() {
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
      <GlobalNav navmark="OPEN ROLES" onBookCall={openModal} />
      <main>
        <RolesHero />
        <RolesBali />
        <RolesMalaga />
        <RolesApply />
        {window.VerbSequence ? <window.VerbSequence /> : null}
        <RolesContact />
        <RolesDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Academy / Internships" /> : null}
    </div>
  );
}

(function mountRoles() {
  if (window.Footer && window.BookCallModal && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<RolesApp />);
  } else {
    setTimeout(mountRoles, 50);
  }
})();

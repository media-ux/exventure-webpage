// Participate — EX IP teaser + screened qualified-investor gate
function ParticipateHero({ onRequest }) {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/field-02.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">EX IP · EX VENTURE GROUP</div>
        <h1 className="ip-title" style={{ maxWidth: "20ch" }}>For the first time in eight years, <span className="gold">we're opening the door.</span></h1>
        <p className="ip-lead" style={{ marginTop: 38 }}>
          EX Venture builds and funds its own ventures — we haven't raised externally in eight years, and even then only in small project-level rounds. We don't go to the market often. Right now, for a specific and time-sensitive reason, we're sharing a rare opportunity with a small number of qualified parties.
        </p>
        <p className="ip-lead" style={{ marginTop: 18 }}>
          It concerns the next white space in our patent portfolio — an open field where the priority dates are still unclaimed, and where AI has, for the first time, made it possible to move at the speed required to hold it.
        </p>
        <p className="ip-lead" style={{ marginTop: 18 }}>
          We're not publishing the details here. If you're a qualified investor and you'd like to understand what we're building and why now, we'll share more privately.
        </p>
        <div className="ip-cta-actions" style={{ marginTop: 40 }}>
          <button className="btn btn-primary" onClick={onRequest}>Request Information <span className="arr">→</span></button>
        </div>
      </div>
    </section>
  );
}

function ParticipateLogic() {
  const blocks = [
    { lead: "Ideas are about to become noise.", p: "The flood is starting now. In that environment, a granted, defensible patent stops being paperwork and becomes one of the few durable assets left standing — a sovereign-backed monopoly in a sea of un-examined claims." },
    { lead: "White space is first-come.", p: "Energy, space, wellness, advanced materials, quantum — these fields are still early, still open. Priority dates go to whoever files first, and they shape the entire commercial lifecycle of a field. The map is being drawn right now. Once a space is claimed, the window doesn't reopen." },
    { lead: "AI changes the economics.", p: "What used to take a research team months — scanning the literature, finding the gap, validating the physics, drafting to prosecution grade — our systems now do in a fraction of the time. The cost of securing a position has collapsed. The value of holding one hasn't." },
  ];
  return (
    <section className="section" id="logic" data-screen-label="02 The Logic" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">The Logic</div>
          <h2>The asymmetry, <span className="gold">in three moves.</span></h2>
          <p>Something is about to happen to intellectual property, and most people are looking at it backwards. AI now generates inventions faster than any patent office can examine them. The instinct is that this makes patents <em>less</em> valuable. It's the opposite — the scarce asset becomes the one AI cannot produce: a patent that's examined, granted, and defensible in court. That's the asymmetry EX IP is built on.</p>
        </div>
        <div className="ip-grid cols-3">
          {blocks.map((b, i) => (
            <div className="ip-cell" key={i}>
              <h3 className="ip-h" style={{ fontSize: "22px" }}>{b.lead}</h3>
              <p className="ip-p">{b.p}</p>
            </div>
          ))}
        </div>
        <p className="ip-band-text" style={{ fontSize: "clamp(24px, 3vw, 38px)", textAlign: "center", margin: "60px auto 0", maxWidth: 880 }}>
          Cheap to secure. Hard to replicate. <span className="gold">Durable once granted.</span> That's the shape of the asset.
        </p>
      </div>
    </section>
  );
}

function ParticipateMachine() {
  const verbs = ["Research", "Compare", "Write", "Visualize", "Simulate"];
  return (
    <section className="section participate-machine" id="machine" data-screen-label="03 The Machine">
      <div className="container">
        <div className="ip-intro">
          <div className="label">The Engine</div>
          <h2>We built the machine <span className="gold">that does it.</span></h2>
        </div>
        <div className="machine-grid">
          <div className="machine-copy">
            <p className="ip-lead" style={{ marginTop: 0 }}>
              This isn't AI helping a lawyer draft faster. We built a system that runs the whole inventive pipeline: it researches the field, compares hundreds of existing inventions, writes the specification, visualizes the design, and simulates whether it actually works — before a single claim is finalized.
            </p>
            <p className="ip-lead">
              It came out of <strong>SERAPH</strong>, where we trained it against hundreds of real filed inventions and simulated them, learning what makes a claim hold and what makes it fall. It works. That's not a projection — it's how we prepared <strong>24 prosecution-ready patents in a two-week sprint</strong>, each one validated at the physics level, work that would have taken legal teams years.
            </p>
          </div>
          <div className="machine-proof">
            <div className="mp-num">24</div>
            <div className="mp-label">prosecution-ready patents</div>
            <div className="mp-sub">in a two-week sprint</div>
            <div className="mp-rule"></div>
            <div className="mp-foot">Each validated at the physics level — work that would have taken legal teams years.</div>
          </div>
        </div>
        <div className="machine-verbs">
          {verbs.map((v, i) => (
            <React.Fragment key={i}>
              <span className="mv">{v}</span>
              {i < verbs.length - 1 ? <span className="mv-dot" aria-hidden="true">·</span> : null}
            </React.Fragment>
          ))}
        </div>
        <p className="machine-tag">The whole arc, at machine speed — <span className="gold">grounded in physics, not just language.</span></p>
      </div>
    </section>
  );
}

function ParticipatePipeline() {
  const steps = [
    { n: "01", name: "Find", p: "AI white-space analysis against scientific and commercial databases. We see the gap before it's obvious." },
    { n: "02", name: "Validate", p: "Physics first. Mass balance, energy balance, thermodynamic consistency. If it doesn't hold, it doesn't proceed." },
    { n: "03", name: "Write", p: "Prosecution-grade specifications: prior art, non-obviousness, supporting data. Every claim grounded in something that works." },
    { n: "04", name: "File", p: "Priority secured. Filing strategy built for speed and breadth." },
    { n: "05", name: "Manage", p: "Prosecution, office actions, freedom-to-operate across jurisdictions." },
    { n: "06", name: "Build", p: "Granted families become standalone, AI-run companies, seeded from our own talent pipeline." },
  ];
  return (
    <section className="section" id="pipeline" data-screen-label="03 How We Work">
      <div className="container">
        <div className="ip-intro">
          <div className="label">How We Work</div>
          <h2>One disciplined <span className="gold">pipeline.</span></h2>
          <p>We've identified the next niche worth holding — an open white space where the priority dates are still unclaimed. Every invention moves through the same path.</p>
        </div>
        <div className="ip-grid cols-3">
          {steps.map((s, i) => (
            <div className="ip-cell ip-phase" key={i}>
              <div className="ip-k">/ {s.n}</div>
              <h3 className="name">{s.name}</h3>
              <div className="barb"></div>
              <p className="ip-p">{s.p}</p>
            </div>
          ))}
        </div>
        <p className="ip-band-text" style={{ fontSize: "clamp(22px, 2.6vw, 34px)", textAlign: "center", margin: "60px auto 0", maxWidth: 880 }}>
          Find the gap. Lock the date. Build the company. <span className="gold">Repeat</span> — at a speed the old model couldn't reach.
        </p>
      </div>
    </section>
  );
}

function ParticipateGate({ onRequest }) {
  return (
    <section className="ip-cta" id="request" data-screen-label="04 Request" style={{ borderTop: "1px solid var(--rule-20)" }}>
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Shared With a Select Few</div>
        <h2>Privately, <span className="gold">and by request.</span></h2>
        <p>
          We're expanding the portfolio in a specific direction, and we share the detail of that work with a small number of qualified parties — privately, and by request. If you operate in this world and want to understand what we're building and where, we'd welcome the conversation.
        </p>
        <div className="ip-cta-actions" style={{ justifyContent: "center" }}>
          <button className="btn btn-primary" onClick={onRequest}>Request Information <span className="arr">→</span></button>
        </div>
        <p className="participate-gatehint">Access is limited to qualified, professional, or institutional parties. You'll be asked to confirm your status.</p>
      </div>
    </section>
  );
}

function ParticipateDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Important Information</span>
          This page is provided for general informational purposes only. It does not constitute an offer or solicitation to buy or sell securities, an invitation to invest, financial promotion, or investment, legal, or tax advice. EX Venture is not offering securities through this page and is not acting as a broker, dealer, or intermediary. Nothing here is directed at any person in any jurisdiction where such communication would be unlawful. Any opportunity discussed following a request for information would be made available only to qualified, professional, or institutional investors, on a private basis, through appropriate documentation, and in compliance with applicable law.
        </p>
        <p style={{ marginTop: 18, color: "var(--iron)", fontSize: "11px" }}>
          Draft pending counsel review. The wording above is subject to sign-off by EX Venture's Spanish / EU legal adviser before publication.
        </p>
      </div>
    </div>
  );
}

/* ---- Screened request gate ---- */
const GATE_ENDPOINT = "https://formsubmit.co/ajax/media@exventure.co";

function RequestGate({ open, onClose }) {
  const [step, setStep] = React.useState(0); // 0 attest, 1 form, 2 done, -1 declined
  const [checks, setChecks] = React.useState({ qualified: false, notRetail: false, jurisdiction: false });
  const [form, setForm] = React.useState({ name: "", email: "", org: "", category: "", note: "" });
  const [sending, setSending] = React.useState(false);

  const submitRequest = async () => {
    if (sending) return;
    setSending(true);
    const ref = "EXV-IP-" + Math.floor(Math.random() * 9000 + 1000);
    const payload = {
      _subject: `Participate · Information request · ${form.name} (${form.org})`,
      _replyto: form.email,
      _template: "table",
      _captcha: "false",
      Reference: ref,
      "Enquiry about": "Invest / Participate (EX IP)",
      Name: form.name,
      Email: form.email,
      Organisation: form.org,
      "Investor category": form.category,
      Message: form.note || "(no message provided)",
      "Eligibility confirmed": "Qualified/professional/institutional · not-an-offer · lawful jurisdiction",
      Submitted: new Date().toISOString(),
    };
    try {
      await fetch(GATE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Participate request submit failed:", err);
    } finally {
      setSending(false);
      setStep(2);
    }
  };

  React.useEffect(() => {
    if (open) { setStep(0); setChecks({ qualified: false, notRetail: false, jurisdiction: false }); }
  }, [open]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const allChecked = checks.qualified && checks.notRetail && checks.jurisdiction;
  const canSubmit = form.name && form.email && form.org && form.category;

  return (
    <div className="gate-overlay" onClick={onClose}>
      <div className="gate-modal" onClick={(e) => e.stopPropagation()}>
        <button className="gate-close" onClick={onClose} aria-label="Close">×</button>

        {step === 0 && (
          <div className="gate-body">
            <div className="ip-k">Eligibility</div>
            <h3 className="gate-h">Before we share detail</h3>
            <p className="gate-p">
              The information that follows a request is made available only to qualified, professional, or institutional parties, on a private basis. Please confirm the following before continuing.
            </p>
            <label className="gate-check">
              <input type="checkbox" checked={checks.qualified} onChange={(e) => setChecks({ ...checks, qualified: e.target.checked })} />
              <span>I am a qualified, professional, or institutional investor (or an authorised representative of one).</span>
            </label>
            <label className="gate-check">
              <input type="checkbox" checked={checks.notRetail} onChange={(e) => setChecks({ ...checks, notRetail: e.target.checked })} />
              <span>I understand this is not an offer or solicitation, and that any opportunity would proceed privately, through appropriate documentation and applicable law.</span>
            </label>
            <label className="gate-check">
              <input type="checkbox" checked={checks.jurisdiction} onChange={(e) => setChecks({ ...checks, jurisdiction: e.target.checked })} />
              <span>Receiving this information is lawful in my jurisdiction.</span>
            </label>
            <div className="gate-actions">
              <button className="btn btn-primary" disabled={!allChecked} onClick={() => setStep(1)} style={{ opacity: allChecked ? 1 : 0.4, cursor: allChecked ? "pointer" : "not-allowed" }}>
                Continue <span className="arr">→</span>
              </button>
              <button className="gate-decline" onClick={() => setStep(-1)}>I don't qualify</button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="gate-body">
            <div className="ip-k">Request Information</div>
            <h3 className="gate-h">Tell us who you are</h3>
            <div className="gate-fields">
              <input className="gate-input" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input className="gate-input" placeholder="Work email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input className="gate-input" placeholder="Organisation" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
              <select className="gate-input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                <option value="">Investor category…</option>
                <option>Professional / qualified investor</option>
                <option>Institutional investor</option>
                <option>Family office</option>
                <option>Strategic / corporate</option>
                <option>Advisor representing one of the above</option>
              </select>
              <textarea className="gate-input" rows="3" placeholder="What would you like to understand? (optional)" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })}></textarea>
            </div>
            <div className="gate-actions">
              <button className="btn btn-primary" disabled={!canSubmit || sending} onClick={submitRequest} style={{ opacity: (canSubmit && !sending) ? 1 : 0.4, cursor: (canSubmit && !sending) ? "pointer" : "not-allowed" }}>
                {sending ? "Sending…" : <React.Fragment>Submit request <span className="arr">→</span></React.Fragment>}
              </button>
            </div>
            <p className="gate-fine">Submitted in confidence. We respond privately to requests that fit the portfolio direction.</p>
          </div>
        )}

        {step === 2 && (
          <div className="gate-body gate-center">
            <div className="gate-tick" aria-hidden="true">✓</div>
            <h3 className="gate-h">Request received</h3>
            <p className="gate-p">Thank you. If your request fits the direction we're expanding in, we'll be in touch privately. Nothing further is required from you now.</p>
            <button className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        )}

        {step === -1 && (
          <div className="gate-body gate-center">
            <h3 className="gate-h">No problem</h3>
            <p className="gate-p">This material is limited to qualified, professional, and institutional parties. You're welcome to explore the rest of EX Venture in the meantime.</p>
            <a className="btn btn-primary" href="EX Venture Site.html">Back to EX Venture</a>
          </div>
        )}
      </div>
    </div>
  );
}

function ParticipateApp() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [gateOpen, setGateOpen] = React.useState(false);
  const openModal = React.useCallback(() => setModalOpen(true), []);
  const closeModal = React.useCallback(() => setModalOpen(false), []);
  const openGate = React.useCallback(() => setGateOpen(true), []);
  const closeGate = React.useCallback(() => setGateOpen(false), []);

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
      {GlobalNav ? <GlobalNav navmark="PARTICIPATE" onBookCall={openModal} /> : null}
      <main>
        <ParticipateHero onRequest={openGate} />
        <ParticipateLogic />
        <ParticipateMachine />
        <ParticipatePipeline />
        <ParticipateGate onRequest={openGate} />
        <ParticipateDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} /> : null}
      <RequestGate open={gateOpen} onClose={closeGate} />
    </div>
  );
}

(function mountParticipate() {
  if (window.Footer && window.BookCallModal && window.GlobalNav && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<ParticipateApp />);
  } else {
    setTimeout(mountParticipate, 50);
  }
})();

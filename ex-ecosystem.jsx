// The Ecosystem — how it all works together (reuses ex-ip.css vocabulary)
function EcoHero() {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/photos/collab-03.jpg" alt="" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">THE ECOSYSTEM</div>
        <h1 className="ip-title">Others take a year to start. <span className="gold">We try it the same day.</span></h1>
        <p className="ip-verb">
          One operating layer.<br/><span className="gold">Sixteen companies. Always running.</span>
        </p>
        <p className="ip-lead">
          A new venture usually begins the same way: raise a round, then spend it hiring. Six months to a year disappears before anyone touches the product — and most of the money pays for the back office, not the breakthrough. We don't run that race. Everything a startup spends its first year and first raise building, we already have, already running.
        </p>
      </div>
    </section>
  );
}

function EcoStack() {
  const layers = [
    { k: "Finance", h: "One accounting backbone", p: "One accounting function across every company and every country. One compliance function. The financial spine every venture inherits instead of rebuilding." },
    { k: "People", h: "One HR & talent pipeline", p: "One HR and talent pipeline, fed continuously by EX Academy. Operators trained on live ventures, ready to deploy onto the next priority." },
    { k: "Growth", h: "One marketing team", p: "One marketing capability across the group — brand, story, and go-to-market that every company draws on from day one." },
    { k: "Technology", h: "One engineering & security layer", p: "One engineering, IT, and cybersecurity capability serving all of it. No rebuilt stack, no lost months standing it up." },
    { k: "Intelligence", h: "One AI team", p: "One AI team — shared, centralized, already running, and getting smarter with every venture it touches." },
    { k: "Day One", h: "The next venture inherits it all", p: "Nothing gets rebuilt from scratch. When we start the next one, it begins where most startups arrive only after their seed round." },
  ];
  return (
    <section className="section" id="stack" data-screen-label="02 The Stack">
      <div className="container">
        <div className="ip-intro">
          <div className="label">One Stack. Sixteen Companies.</div>
          <h2>Sixteen ventures, <span className="gold">one shared backbone.</span></h2>
          <p>This is what "lean" actually means here. Not doing without — sharing one strong spine across everything we build, so every venture launches with leverage instead of a hiring list.</p>
        </div>
        <div className="ip-grid cols-3">
          {layers.map((l, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{l.k}</div>
              <h3 className="ip-h">{l.h}</h3>
              <p className="ip-p">{l.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoEngine() {
  return (
    <section className="section" id="engine" data-screen-label="03 The Engine" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Why the Academy Is the Engine</div>
          <h2>You can't start same-day <span className="gold">if you have to recruit first.</span></h2>
        </div>
        <div className="ip-grid cols-2">
          <div className="ip-cell">
            <div className="ip-k">The Pipeline</div>
            <h3 className="ip-h">Always full, always ready</h3>
            <p className="ip-p">EX Academy isn't a side project — it's the talent engine the whole ecosystem runs on. We don't wait to hire the right people at the right moment and hope they're available. We train operators on live ventures and deploy them straight onto real projects. When most companies would be writing a job description, we're already executing.</p>
          </div>
          <div className="ip-cell">
            <div className="ip-k">The Difference</div>
            <h3 className="ip-h">Talent grown, not absorbed</h3>
            <p className="ip-p">Talent isn't a cost spike we absorb every time we start something. It's something we grow continuously — which is exactly what makes immediate execution possible. The pipeline is always building, always ready to point at the next priority.</p>
            <a className="ip-mail" href="EX Academy.html" style={{ marginTop: 6 }}>Explore EX Academy →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoBand() {
  return (
    <section className="ip-band" data-screen-label="04 Statement">
      <div className="ip-band-img"><img src="assets/photos/collab-04.jpg" alt="" /></div>
      <div className="container ip-band-inner">
        <p className="ip-band-text">
          Sixteen companies don't just share infrastructure. <span className="gold">They feed it.</span>
        </p>
      </div>
    </section>
  );
}

function EcoLiving() {
  const points = [
    { k: "Alive", h: "Rebuilt every week", p: "Multi-layer AI agents are deployed across every function — grants, accounting, compliance, research, operations. Systems are rebuilt and optimized every week. The stack doesn't sit still between projects; it gets measurably better while we sleep." },
    { k: "Compounding", h: "Every venture leaves it sharper", p: "Every venture that touches the stack leaves it sharper than it found it — and the AI layer compounds fastest of all. Every company it works with becomes training for the next." },
    { k: "Symbiosis", h: "The more we build, the stronger the start", p: "That's the symbiosis. The more we build, the stronger the thing every future venture starts from. Shared teams aren't the differentiator — plenty of groups have central functions. What makes ours different is that it's alive." },
  ];
  return (
    <section className="section" id="living" data-screen-label="05 A Living System">
      <div className="container">
        <div className="ip-intro">
          <div className="label">A Living System, Not an Org Chart</div>
          <h2>It doesn't sit still. <span className="gold">It compounds.</span></h2>
        </div>
        <div className="ip-grid cols-3">
          {points.map((p, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{p.k}</div>
              <h3 className="ip-h">{p.h}</h3>
              <p className="ip-p">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoScale() {
  return (
    <section className="section" id="scale" data-screen-label="06 The Bottleneck" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-intro">
          <div className="label">Point the Priority. The Machine Moves.</div>
          <h2>The only bottleneck left <span className="gold">is the good kind.</span></h2>
        </div>
        <div className="ip-cell" style={{ borderLeft: "2px solid var(--bsm-gold)" }}>
          <p className="ip-p" style={{ fontSize: "17px", lineHeight: 1.8 }}>
            Because the talent, the stack, and the agents are already in place, capability isn't our constraint. If we decide something matters, we can plan and execute almost anything immediately — no raise to wait on, no team to assemble, no months lost to setup.
          </p>
          <p className="ip-p" style={{ fontSize: "17px", lineHeight: 1.8, marginTop: 4 }}>
            Our honest frontier isn't <em>can we build it</em> — it's <em>how many things we can aim the machine at once.</em> The engine is proven across sixteen companies. We're scaling so we can point it at more — more ventures, more breakthroughs, more deployment. Not a question of whether the machine works, but of how many directions to run it.
          </p>
        </div>
        <div className="ip-cell" style={{ borderLeft: "2px solid var(--bsm-gold)", marginTop: 16 }}>
          <div className="ip-k">A recent example</div>
          <p className="ip-p" style={{ fontSize: "16px", lineHeight: 1.75 }}>
            When we decided to claim a new white space in the patent portfolio, we didn't hire a legal team or commission a study. We pointed the patent engine — the AI layer trained inside <strong style={{ color: "var(--warm)" }}>Seraph</strong> against hundreds of real filed inventions — at the field, and it produced <strong style={{ color: "var(--bsm-gold)" }}>24 prosecution-ready patents in a two-week sprint</strong>, each validated at the physics level. The capability was already running. We just aimed it.
          </p>
        </div>
      </div>
    </section>
  );
}

function EcoMeaning({ onBookCall }) {
  const audiences = [
    { who: "If you're an investor", p: "Our ventures don't burn a raise on back-office overhead. Capital goes to the breakthrough and the deployment, not to rebuilding what we already have. Less dilution, faster proof, more of every dollar reaching the work that matters." },
    { who: "If you're a partner", p: "You're not waiting on us to staff up. The capability is already running. We move when you need us to move." },
    { who: "If you're a builder", p: "You don't plug into a classroom. You plug into a live machine — sixteen companies, a running stack, AI agents in every function — and you build something real from day one." },
  ];
  return (
    <section className="section" id="meaning" data-screen-label="07 What It Means">
      <div className="container">
        <div className="ip-intro">
          <div className="label">What It Means</div>
          <h2>What the machine <span className="gold">does for you.</span></h2>
        </div>
        <div className="ip-grid cols-3">
          {audiences.map((a, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{a.who}</div>
              <p className="ip-p" style={{ marginTop: 6 }}>{a.p}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
          <a className="ip-mail" href="How We Execute.html">How we fund it →</a>
          <a className="ip-mail" href="EX Venture Site.html#family">Explore Ventures ↓</a>
        </div>
      </div>
    </section>
  );
}

function EcoContact({ onBookCall }) {
  return (
    <section className="ip-cta" id="contact" data-screen-label="08 Contact">
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Plug Into the Machine</div>
        <h2>We don't raise to start.<br/><span className="gold">We start, then raise against proof.</span></h2>
        <p>
          Sixteen companies, one shared stack, AI agents in every function — already running. If you want to build, fund, or partner with a machine that moves the same day you point it, let's talk.
        </p>
        <div className="ip-cta-actions">
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
          <a className="ip-mail" href="How We Execute.html">See how we fund it →</a>
        </div>
      </div>
    </section>
  );
}

function EcoDisclaimer() {
  return (
    <div className="ip-disclaimer">
      <div className="container">
        <p>
          <span className="lbl">Note</span>
          EX Venture Inc. is registered with the U.S. Securities and Exchange Commission (SEC). Nothing on this page constitutes investment advice, a solicitation to invest, or a financial promotion. Ecosystem structure and capabilities are subject to change.
        </p>
      </div>
    </div>
  );
}

function EcoApp() {
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
      {GlobalNav ? <GlobalNav navmark="ECOSYSTEM" onBookCall={openModal} /> : null}
      <main>
        <EcoHero />
        <EcoStack />
        <EcoEngine />
        <EcoBand />
        <EcoLiving />
        <EcoScale />
        <EcoMeaning onBookCall={openModal} />
        {window.VerbSequence ? <window.VerbSequence /> : null}
        <EcoContact onBookCall={openModal} />
        <EcoDisclaimer />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Invest / Participate" /> : null}
    </div>
  );
}

(function mountEco() {
  if (window.Footer && window.BookCallModal && window.GlobalNav && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<EcoApp />);
  } else {
    setTimeout(mountEco, 50);
  }
})();

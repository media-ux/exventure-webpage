// Founder & Team — full Julien Uhlig biography + team
function FounderTeamHero() {
  return (
    <section className="ip-hero" id="top" data-screen-label="01 Hero">
      <div className="ip-hero-photo"><img src="assets/team/julien-uhlig.jpg" alt="Julien Uhlig" /></div>
      <div className="container ip-hero-inner">
        <div className="ip-rule"></div>
        <div className="eyebrow">FOUNDER & TEAM</div>
        <h1 className="ip-title">Julien Uhlig.<br/><span className="gold">Builder, not a bystander.</span></h1>
        <p className="ip-lead" style={{ marginTop: 34 }}>
          Thirty years getting finance, government, and research to pull behind one mission — and a team built to do the same, at scale.
        </p>
      </div>
    </section>
  );
}

function FounderBio() {
  return (
    <section className="section" id="bio" data-screen-label="02 Biography" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="founder-grid">
          <div>
            <div className="founder-photo">
              <img src="assets/team/julien-uhlig-new.jpg" alt="Julien Uhlig" />
            </div>
            <div className="founder-meta">
              <span>Opera-trained</span>
              <span className="sep">·</span>
              <span>Bali-based</span>
              <span className="sep">·</span>
              <span>30 years</span>
            </div>
          </div>

          <div className="founder-body">
            <p>
              An opera singer trained in Siena, a founder at <strong>21</strong>, today building clean-energy systems from a rice terrace in <strong>Bali</strong> — with thirty years in between spent getting finance, government, and research to pull behind one mission.
            </p>
            <p>
              The path ran through <strong>Lehman Brothers</strong>, where he advised on specialty banking, and a decade in New York — then somewhere harder: AGIT at <strong>RWTH Aachen</strong>, working for the German government and running engineering clusters with Germany's top universities. The mission was already set — clean energy from waste, for the communities sub-Saharan Africa's grid never reached. Twenty years on, with <strong>Zero-X</strong>, he's still building it.
            </p>
            <p>
              He doesn't just pitch the vision; he ships it. He led the restructuring buyout of <strong>Agnion Technologies</strong> — backed by Kleiner Perkins, Wellington Partners, and Waste Management — and folded its gasification technology into <strong>Entrade</strong>, built from scratch. He raised from <strong>1,000+ investors</strong>, installed <strong>200+ distributed-energy systems across 11 countries</strong>, co-developed smart microgrids with <strong>Schneider Electric</strong>, and structured a <strong>£25M sale-and-leaseback with Royal Bank of Scotland</strong> in a field most banks wouldn't touch. He ran power systems in <strong>Fukushima</strong> alongside a university research collaborative; in India, he co-developed the X-5 straw-gasification system with <strong>Tata Power</strong>. A LACI and German Accelerator company, Entrade was named one of <strong>Fast Company</strong>'s 10 Most Innovative Energy Companies of 2018.
            </p>
            <p>
              This is the rare builder the establishment learned to trust. Sixteen years with <strong>GIZ</strong>, from Nigeria and Ethiopia to the post-conflict Balkans. He presented at the <strong>Russian Duma</strong> and ran <strong>ZIM International</strong> innovation clusters spanning dozens of companies — from Universiti Teknologi PETRONAS to <strong>Lawrence Berkeley National Laboratory</strong>, alongside <strong>Lilium</strong>, <strong>SMA</strong>, and <strong>Sono Motors</strong>. He became the <strong>API between research, capital, and government</strong>: translating between the lab, the balance sheet, and the grant office so deep tech ships — and the risk lands on the system, not the founder.
            </p>
            <p>
              Today he runs EX Venture's operating brands from Bali and Europe — an <strong>EY Entrepreneur of the Year finalist</strong>, <strong>four-time Inc. 5000</strong> founder, and <strong>2024 Unicorn CUP World Champion</strong>. He's a speaker, educator, and author of <span className="accent" style={{ color: "var(--bsm-gold)" }}>Bali State of Mind</span>.
            </p>
            <div style={{ marginTop: 36 }}>
              <a className="btn-link" href="https://julien-uhlig.com" target="_blank" rel="noopener noreferrer">
                Full Biography <span className="arr">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheTeam() {
  const cells = [
    { k: "Grown, not hired", h: "Most of the core team were once interns", p: "The people running the group today started inside the work — trained on live ventures through EX Academy, then deployed onto real projects. We grow our operators; we don't rent them." },
    { k: "Operators, not advisors", h: "In the room, on the hard part", p: "Grant writers, patent engineers, thermal-conversion operators, project-finance analysts, and AI builders — a bench that spans energy, biotech, IP, finance, and software across the group." },
    { k: "One shared stack", h: "Across every company", p: "Finance, compliance, marketing, engineering, security, and AI run once, shared across all the ventures — so the team compounds capability instead of rebuilding it each time." },
  ];
  return (
    <section className="section" id="team" data-screen-label="03 The Team">
      <div className="container">
        <div className="ip-intro">
          <div className="label">The Team</div>
          <h2>Built by operators, <span className="gold">not a founder.</span></h2>
          <p>EX Venture runs on <strong>250+</strong> trained operators, deployed across every venture in the group. The people who built the work are the people running it.</p>
        </div>
        <div className="ip-grid cols-3">
          {cells.map((c, i) => (
            <div className="ip-cell" key={i}>
              <div className="ip-k">{c.k}</div>
              <h3 className="ip-h">{c.h}</h3>
              <p className="ip-p">{c.p}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, display: "flex", gap: 26, flexWrap: "wrap" }}>
          <a className="ip-mail" href="EX Academy.html">How we build the team →</a>
          <a className="ip-mail" href="Open Roles.html">Join the team ↓</a>
        </div>
      </div>
    </section>
  );
}

function FounderTeamContact({ onBookCall }) {
  return (
    <section className="ip-cta" id="contact" data-screen-label="04 Contact" style={{ background: "var(--navy-deep)" }}>
      <div className="container">
        <div className="ip-k" style={{ textAlign: "center" }}>Work With Us</div>
        <h2>Build with the team<br/><span className="gold">that's done it before.</span></h2>
        <p>
          Founders, partners, and investors who want operators in the room — not a board seat and quarterly updates — start here.
        </p>
        <div className="ip-cta-actions">
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
          <a className="ip-mail" href="Advisory.html">Julien's advisory →</a>
        </div>
      </div>
    </section>
  );
}

function FounderTeamApp() {
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
      {GlobalNav ? <GlobalNav navmark="FOUNDER & TEAM" onBookCall={openModal} /> : null}
      <main>
        <FounderTeamHero />
        <FounderBio />
        <TheTeam />
        <FounderTeamContact onBookCall={openModal} />
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Consulting / Advisory" /> : null}
    </div>
  );
}

(function mountFounderTeam() {
  if (window.Footer && window.BookCallModal && window.GlobalNav && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<FounderTeamApp />);
  } else {
    setTimeout(mountFounderTeam, 50);
  }
})();

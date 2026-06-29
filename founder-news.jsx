// Founder, News, CTA, Footer

function Founder() {
  return (
    <section className="founder-section founder-teaser" id="founder" data-screen-label="07 Founder">
      <div className="container">
        <div className="founder-teaser-grid">
          <div className="founder-teaser-photo">
            <img src={(window.__resources && window.__resources.founderPhoto) || "assets/team/julien-uhlig-new.jpg"} alt="Julien Uhlig" />
          </div>
          <div className="founder-teaser-body">
            <div className="label">Founder & Team</div>
            <h2>Julien Uhlig.<br/><span className="accent">Builder, not a bystander.</span></h2>
            <p className="body-text" style={{ marginTop: 26, maxWidth: 560 }}>
              An opera singer turned founder-at-21, now building clean-energy systems from Bali — with thirty years getting finance, government, and research to pull behind one mission. <strong>EY Entrepreneur of the Year</strong> finalist, four-time <strong>Inc. 5000</strong> founder, and the operating team he built behind every venture.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
              <a className="btn-link" href="Founder & Team.html">Meet the founder & team <span className="arr">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function News() {
  const articles = (window.ARTICLES || []).slice(0, 3);

  return (
    <section className="section" id="news" data-screen-label="08 News">
      <div className="container">
        <div className="section-head">
          <div className="left">
            <div className="label">Insights</div>
          </div>
          <div className="right">
            <h2>Insights.</h2>
            <p className="body-text" style={{ marginTop: 28, maxWidth: 620 }}>
              What we're building, funding, and learning across deep tech — written by the people doing the work.
            </p>
          </div>
        </div>

        <div className="news-grid">
          {articles.map((a, i) => (
            <a key={a.id} href={"article.html?id=" + a.id} className="news-card">
              <div className="media">
                <span className="cat">{a.category}</span>
                <img src={a.image} alt="" />
              </div>
              <div className="body">
                <div>
                  <div className="date">{a.date} · {a.readTime}</div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </div>
                <div style={{ marginTop: 8 }}>
                  <span className="btn-link">Read article <span className="arr">→</span></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademyMedia() {
  return (
    <section className="section academy" id="academy" data-screen-label="09 EX Academy">
      <div className="container">
        <div className="academy-grid">
          <div className="academy-copy">
            <div className="label">EX Academy</div>
            <h2 className="academy-head">Learn by <span className="accent">building.</span></h2>
            <p className="academy-body">
              The education system was not built for the speed of AI — so we built our own. A project-based programme where you ship real code into production from day one: no grades, no exams, no lectures. Just real ventures, real clients, and the fastest learning curve you will ever experience.
            </p>
            <div className="academy-actions">
              <a href="EX Academy.html" className="btn btn-primary">Explore EX Academy <span className="arr">→</span></a>
              <a href="https://instagram.com/exventureacademy" target="_blank" rel="noopener noreferrer" className="academy-social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"></circle></svg>
                Follow the journey
              </a>
            </div>
          </div>
          <div className="academy-media">
            <a className="academy-video" href="https://youtube.com/@exventure_" target="_blank" rel="noopener noreferrer">
              <img src={(window.__resources && window.__resources.academyPoster) || "assets/photos/collab-05.jpg"} alt="EX Academy cohort in Bali" />
              <span className="academy-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5v14l11-7z" fill="currentColor"></path></svg>
              </span>
              <span className="academy-video-label">Watch the founder explain why the old model is broken — and what we built instead.</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials" data-screen-label="10 Testimonials">
      <div className="container">
        <div className="section-head">
          <div className="left">
            <div className="label">Voices</div>
            <figure className="voices-photo">
              <img src="assets/photos/voices-team.jpg" alt="The EX Venture team in Bali" />
              <figcaption><span className="dot"></span>The team — Bali</figcaption>
            </figure>
          </div>
          <div className="right">
            <h2>Built by people <span className="accent">who built it.</span></h2>
            <p className="body-text" style={{ marginTop: 28, maxWidth: 620 }}>
              Proof from two directions — the person who rose fastest through the organisation, and the outsider who arrived with no guarantee it would work.
            </p>
          </div>
        </div>

        <div className="testi-grid">
          <figure className="testi-card">
            <blockquote className="testi-quote">“The programme took me from a first internship at Goldman Sachs to running EX Venture's Spanish operations in under a year. There is no traditional career path that compresses growth like this.”</blockquote>
            <figcaption className="testi-attr">
              <span className="t-name">Adrian</span>
              <span className="t-role">Office Director · Spain</span>
            </figcaption>
            <div className="testi-video-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/eoGm7TqGes8?rel=0&modestbranding=1"
                title="Adrian's story"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </figure>

          <figure className="testi-card">
            <blockquote className="testi-quote">“I found the programme on LinkedIn. A 20-year-old French business school student in Bali building industrial AI. It was the scariest and best decision I ever made.”</blockquote>
            <figcaption className="testi-attr">
              <span className="t-name">Sarah</span>
              <span className="t-role">Participant · France</span>
            </figcaption>
            <div className="testi-video-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/K9pZLghm0zA?rel=0&modestbranding=1"
                title="Sarah's story"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

function CTA({ onBookCall }) {
  return (
    <section className="cta" id="cta" data-screen-label="11 CTA">
      <div className="cta-bg">
        <img src={(window.__resources && window.__resources.ctaImg) || "assets/photos/bali-03.jpg"} alt="" />
      </div>
      <div className="cta-glow"></div>
      <div className="container cta-inner">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <span className="status-pill"><span className="dot"></span>Ready?</span>
        </div>
        <h2>Let's build<br/><span className="accent">what matters.</span></h2>
        <p>
          If you are building something that matters and need a partner who has been inside the machine — not watching from the sidelines — let's talk.
        </p>
        <button className="btn btn-primary" onClick={onBookCall}>
          Get in Touch <span className="arr">→</span>
        </button>
      </div>
    </section>
  );
}

function NavDropdown({ label, items }) {
  return (
    <div className="nav-dropdown">
      <button type="button" className="nav-dropdown-trigger">{label} <span className="caret" aria-hidden="true">▾</span></button>
      <div className="nav-dropdown-menu" role="menu">
        {items.map((it, i) => (
          <a key={i} href={it.h} role="menuitem" target={it.ext ? "_blank" : undefined} rel={it.ext ? "noopener noreferrer" : undefined}>
            <span>{it.l}</span>{it.ext ? <span className="ext-arr">↗</span> : null}
          </a>
        ))}
      </div>
    </div>
  );
}

function VenturesMenu() {
  return (
    <NavDropdown label="Ventures" items={[
      { l: "EX · IP", h: "EX IP Ventures.html" },
      { l: "Seraph Group", h: "Seraph Group.html" },
      { l: "Zero-X", h: "Zero-X.html" },
      { l: "EX Carbon", h: "EX Carbon.html" },
      { l: "EX · AI", h: "EX AI.html" },
      { l: "EX · FI", h: "EX FI.html" },
    ]} />
  );
}

function VerbSequence(props) {
  const verbs = props && props.verbs ? props.verbs : ["Research", "Compare", "Write", "Visualize", "Simulate"];
  const tagline = props && props.tagline ? props.tagline : (
    <React.Fragment>The whole arc, at machine speed — <span className="gold">grounded in physics, not just language.</span></React.Fragment>
  );
  return (
    <section className="verb-sequence" data-screen-label="Verb Sequence">
      <div className="container">
        <div className="vs-row">
          {verbs.map((v, i) => (
            <React.Fragment key={i}>
              <span className="vs-verb">{v}</span>
              {i < verbs.length - 1 ? <span className="vs-dot" aria-hidden="true">·</span> : null}
            </React.Fragment>
          ))}
        </div>
        <p className="vs-tag">{tagline}</p>
      </div>
    </section>
  );
}

function GlobalNav({ navmark, onBookCall }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="EX Venture Site.html" className="nav-logo">
          <span className="wordmark"><span className="wm-accent">EX</span> VENTURE</span>
          {navmark ? <span className="ip-navmark">{navmark}</span> : null}
        </a>
        <div className="nav-links">
          <NavDropdown label="Ventures" items={[
            { l: "EX · IP", h: "EX IP Ventures.html" },
            { l: "Seraph Group", h: "Seraph Group.html" },
            { l: "Zero-X", h: "Zero-X.html" },
            { l: "EX Carbon", h: "EX Carbon.html" },
            { l: "EX · AI", h: "EX AI.html" },
            { l: "EX · FI", h: "EX FI.html" },
          ]} />
          <NavDropdown label="Company" items={[
            { l: "The Ecosystem", h: "The Ecosystem.html" },
            { l: "How We Execute", h: "How We Execute.html" },
            { l: "Founder & Team", h: "Founder & Team.html" },
          ]} />
          <NavDropdown label="Academy" items={[
            { l: "EX Academy", h: "EX Academy.html" },
            { l: "Open Roles", h: "Open Roles.html" },
          ]} />
          <a href="Advisory.html">Consulting</a>
          <a className="nav-featured" href="Participate.html">Participate</a>
        </div>
        <button className="nav-cta" onClick={onBookCall}>Get in Touch <span style={{ fontSize: 11 }}>↗</span></button>
      </div>
    </nav>
  );
}

function CookieConsent() {
  const KEY = "exv-cookie-consent-v1";
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    let stored = null;
    try { stored = window.localStorage.getItem(KEY); } catch (e) {}
    if (!stored) setShow(true);
    window.exvOpenCookiePrefs = () => setShow(true);
  }, []);

  const accept = () => {
    try { window.localStorage.setItem(KEY, JSON.stringify({ accepted: true, ts: Date.now() })); } catch (e) {}
    setShow(false);
  };

  if (!show) return null;
  return (
    <div className="cookie-bar" role="dialog" aria-label="Cookie notice">
      <div className="cookie-inner">
        <div className="cookie-text">
          <span className="cookie-eyebrow">Cookies & Privacy</span>
          This site uses essential cookies and local storage to function and remember your preferences (such as this notice). We don't use advertising or cross-site tracking. See our <a href="Privacy.html">Privacy Policy</a> for detail.
        </div>
        <div className="cookie-actions">
          <a className="cookie-link" href="Privacy.html">Privacy Policy</a>
          <button className="cookie-accept" onClick={accept}>Got it</button>
        </div>
      </div>
    </div>
  );
}

function Footer({ onBookCall }) {
  return (
    <footer className="footer" data-screen-label="12 Footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="wordmark"><span className="wm-accent">EX</span> VENTURE</span>
            </div>
            <p className="footer-tagline">Deep tech venture building — from applied research to real-world deployment, across 4 continents.</p>
          </div>
          <div className="footer-col">
            <h4>Ventures</h4>
            <a href="Zero-X.html">Zero-X</a>
            <a href="EX Carbon.html">EX Carbon</a>
            <a href="Seraph Group.html">Seraph Group</a>
            <a href="EX IP Ventures.html">EX IP Ventures</a>
            <a href="EX AI.html">EX · AI</a>
            <a href="EX FI.html">EX · FI</a>
            <a href="EX Academy.html">EX · Academy</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href="EX Venture Site.html#thesis">The Loop</a>
            <a href="The Ecosystem.html">The Ecosystem</a>
            <a href="How We Execute.html">How We Execute</a>
            <a href="Open Roles.html">Open Roles</a>
            <a href="EX Venture Site.html#news">News</a>
            <a href="Participate.html">Participate</a>
            <a href="https://julien-uhlig.com" target="_blank" rel="noopener noreferrer">Julien Uhlig ↗</a>
            <a href="https://balistateofmind.co" target="_blank" rel="noopener noreferrer">Bali State of Mind ↗</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="mailto:media@exventure.co">media@exventure.co</a>
            <a onClick={onBookCall} style={{ cursor: "pointer" }}>Get in Touch ↗</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-legal">
            EX Venture Inc. is registered with the U.S. Securities and Exchange Commission (SEC). EX Financial (exfi.app) is authorised and regulated in the United Kingdom; payment and financial services are available to UK customers only. Nothing on this website constitutes investment advice, a solicitation to invest, or a financial promotion directed at persons outside the United Kingdom where such promotion would be unlawful.
          </p>
          <div className="footer-legal-links">
            <a href="Privacy.html">Privacy Policy</a>
            <span className="sep">·</span>
            <a href="Privacy.html#terms">Terms</a>
            <span className="sep">·</span>
            <a onClick={() => window.exvOpenCookiePrefs && window.exvOpenCookiePrefs()} style={{ cursor: "pointer" }}>Cookie Preferences</a>
          </div>
          <span className="footer-copy">© 2026 EX VENTURE INC.</span>
        </div>
      </div>
      <CookieConsent />
    </footer>
  );
}

Object.assign(window, { Founder, News, AcademyMedia, Testimonials, CTA, Footer, CookieConsent, VenturesMenu, NavDropdown, GlobalNav, VerbSequence });

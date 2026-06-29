// Navbar + Hero — institutional, refined, minimal
function Nav({ onBookCall }) {
  const links = [
    { l: "The Loop", h: "#thesis" },
    { l: "Track Record", h: "#track" },
    { l: "Research", h: "#research" },
    { l: "Founder", h: "#founder" },
    { l: "News", h: "#news" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="wordmark"><span className="wm-accent">EX</span> VENTURE</span>
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

function Hero({ onBookCall }) {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero-bg">
        <img src={(window.__resources && window.__resources.cover) || "assets/photos/cover.jpg"} alt="" />
      </div>
      <div className="hero-grid"></div>

      <div className="container hero-inner">
        <h1 className="hero-title" style={{ fontSize: "clamp(38px, 5vw, 80px)", lineHeight: 1.04, maxWidth: 1040 }}>
          Most breakthrough science never leaves the lab. <span className="accent">We get it built.</span>
        </h1>

        <p className="hero-sub">
          We finance it, patent it, and deploy it at scale — wiring together applied research, public funding, and protected IP to carry deep tech from the lab to the world.
        </p>

        <p className="hero-proofline">The technologies that will define the next century are stuck between the people who invent them and the capital that could build them. <strong>EX Venture closes that gap.</strong></p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onBookCall}>Get in Touch <span className="arr">→</span></button>
          <a href="#family" className="btn btn-ghost">Explore Ventures <span className="arr">↓</span></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero });

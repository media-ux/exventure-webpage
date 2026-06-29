// Article reader — single-article page
function ArticleView({ article, onBookCall }) {
  if (!article) {
    return (
      <main style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 32px" }}>
        <div style={{ maxWidth: 540, textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 32 }}>404</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: 24 }}>Article not found.</h1>
          <p className="body-text" style={{ marginBottom: 32 }}>
            That article doesn't exist, or the link is stale. Head back to the news page to see what is available.
          </p>
          <a href="EX Venture Site.html#news" className="btn btn-primary">Back to news <span className="arr">→</span></a>
        </div>
      </main>
    );
  }

  const others = (window.ARTICLES || []).filter(a => a.id !== article.id).slice(0, 2);

  return (
    <main className="article-page">
      <article>
        <header className="article-hero">
          <div className="article-hero-bg">
            <img src={article.image} alt="" />
          </div>
          <div className="container article-hero-inner">
            <div className="article-breadcrumb">
              <a href="EX Venture Site.html">EX Venture</a>
              <span className="sep">/</span>
              <a href="EX Venture Site.html#news">News</a>
              <span className="sep">/</span>
              <span className="current">{article.category}</span>
            </div>

            <h1 className="article-title">{article.title}</h1>

            <div className="article-meta">
              <div className="article-meta-item">
                <span className="lbl">Author</span>
                <span className="val">{article.author}</span>
              </div>
              <div className="article-meta-item">
                <span className="lbl">Published</span>
                <span className="val">{article.date}</span>
              </div>
              <div className="article-meta-item">
                <span className="lbl">Length</span>
                <span className="val">{article.readTime}</span>
              </div>
              <div className="article-meta-item">
                <span className="lbl">Category</span>
                <span className="val">{article.category}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container article-body-wrap">
          <div className="article-body">
            <p className="article-lead">{article.lead}</p>

            {article.body.map((block, i) => {
              if (block.type === "h2") return <h2 key={i} className="article-h2">{block.text}</h2>;
              if (block.type === "p") return <p key={i} className="article-p">{block.text}</p>;
              if (block.type === "quote") return <blockquote key={i} className="article-quote">{block.text}</blockquote>;
              return null;
            })}

            <div className="article-divider"></div>

            <div className="article-author-card">
              <div className="article-author-name">{article.author}</div>
              <div className="article-author-role">{article.authorRole}</div>
              <p className="article-author-bio">
                Operator-led investor with €160M+ deployed across cleantech, deep tech, and government-funded ventures. Founder of EX Venture's family of operating companies.
              </p>
              <a href="https://julien-uhlig.com" target="_blank" rel="noopener noreferrer" className="btn-link">Full biography <span className="arr">↗</span></a>
            </div>
          </div>

          <aside className="article-aside">
            <div className="aside-card">
              <div className="aside-eyebrow">Work with us</div>
              <div className="aside-title">Building in deep tech, cleantech, or AI infrastructure?</div>
              <p className="aside-text">
                We back operators who are already doing the work. If that's you, the conversation starts with a call.
              </p>
              <button className="btn btn-primary aside-btn" onClick={onBookCall}>
                Get in Touch <span className="arr">→</span>
              </button>
            </div>
          </aside>
        </div>
      </article>

      {others.length > 0 && (
        <section className="article-more">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 48 }}>
              <div className="left">
                <div className="label">More insights</div>
              </div>
              <div className="right">
                <h2>Keep reading.</h2>
              </div>
            </div>
            <div className="news-grid">
              {others.map(a => (
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
      )}
    </main>
  );
}

Object.assign(window, { ArticleView });

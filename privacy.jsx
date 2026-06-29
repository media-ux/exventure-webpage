// Privacy Policy & Terms — EX Venture
function PrivacyApp() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = React.useCallback(() => setModalOpen(true), []);
  const closeModal = React.useCallback(() => setModalOpen(false), []);

  const Footer = window.Footer;
  const BookCallModal = window.BookCallModal;
  const GlobalNav = window.GlobalNav;

  return (
    <div className="ip-page">
      {GlobalNav ? <GlobalNav navmark="PRIVACY" onBookCall={openModal} /> : null}
      <main>
        <article className="legal-doc">
          <div className="legal-eyebrow">Privacy & Legal</div>
          <h1>Privacy Policy</h1>
          <div className="legal-meta">Last updated: June 2026 · EX Venture Inc.</div>

          <p>
            This Privacy Policy explains what information EX Venture Inc. and its operating entities ("EX Venture", "we", "us") collect when you use this website, how we use it, and the choices you have. It applies to this site and the contact forms on it.
          </p>

          <h2><span className="num">01</span>Who we are</h2>
          <p>
            EX Venture Inc. is registered with the U.S. Securities and Exchange Commission (SEC) and operates a group of entities across Germany, Spain, Ireland, the U.S., the UK, and other jurisdictions. For questions about this policy or your data, the controller contact is <a href="mailto:media@exventure.co">media@exventure.co</a>.
          </p>

          <h2><span className="num">02</span>What we collect</h2>
          <p>We only collect what you choose to give us, plus minimal technical data needed to run the site.</p>
          <ul>
            <li><strong>Contact &amp; enquiry forms.</strong> When you use the "Get in Touch" form or the EX IP information request, we collect the details you enter — typically your name, work email, organisation, role, the category of your enquiry, and your message. Investor information requests also record the eligibility confirmation you provide.</li>
            <li><strong>Essential local storage.</strong> We store a small flag in your browser to remember that you've seen the cookie notice, and to keep your place in interactive content. This stays on your device.</li>
            <li><strong>Server logs.</strong> Our hosting and form providers may record standard technical data (e.g. IP address, browser type, timestamp) for security and delivery.</li>
          </ul>
          <p>We do <strong>not</strong> use advertising cookies or cross-site tracking, and we do not sell your personal data.</p>

          <h2><span className="num">03</span>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and route it to the right person in the group.</li>
            <li>To assess and follow up on investor information requests, where lawful and appropriate.</li>
            <li>To operate, secure, and improve the website.</li>
            <li>To meet legal, regulatory, and record-keeping obligations.</li>
          </ul>
          <p>Our legal bases (where GDPR applies) are your consent, our legitimate interest in responding to and operating our business, and compliance with legal obligations.</p>

          <h2><span className="num">04</span>Cookies &amp; local storage</h2>
          <p>
            This site uses only <strong>essential</strong> browser storage. We do not run third-party advertising or analytics trackers by default. The items we store are:
          </p>
          <ul>
            <li><strong>Cookie-notice flag</strong> — remembers that you acknowledged this notice, so it isn't shown on every visit.</li>
            <li><strong>Preference / state</strong> — keeps your position in interactive pages during your visit.</li>
          </ul>
          <p>
            You can clear these at any time through your browser settings, and you can re-open this notice via the "Cookie Preferences" link in the footer. Because the storage we use is strictly necessary for the site to function, the site will still work, but your acknowledgement will reset.
          </p>

          <h2><span className="num">05</span>Who we share it with</h2>
          <p>We share personal data only with service providers that help us operate, under appropriate safeguards:</p>
          <ul>
            <li><strong>Form delivery</strong> — form submissions are relayed by FormSubmit and delivered to <a href="mailto:media@exventure.co">media@exventure.co</a>.</li>
            <li><strong>Hosting &amp; fonts</strong> — our hosting provider and web-font provider (Google Fonts) may process technical request data.</li>
          </ul>
          <p>Some providers may process data outside your country. Where required, transfers are made under recognised safeguards such as standard contractual clauses.</p>

          <h2><span className="num">06</span>How long we keep it</h2>
          <p>We keep enquiry and contact data for as long as needed to handle your request and for a reasonable period afterwards for record-keeping, then delete or anonymise it. Essential browser storage persists until you clear it.</p>

          <h2><span className="num">07</span>Your rights</h2>
          <p>Depending on where you live, you may have the right to access, correct, delete, or restrict the use of your personal data, to object to certain processing, to data portability, and to withdraw consent. To exercise any of these, email <a href="mailto:media@exventure.co">media@exventure.co</a>. You may also have the right to complain to your local data-protection authority.</p>

          <h2><span className="num">08</span>Children</h2>
          <p>This site and our services are intended for professionals and are not directed at children. We do not knowingly collect data from anyone under 16.</p>

          <h2><span className="num">09</span>Changes</h2>
          <p>We may update this policy from time to time. Material changes will be reflected by the "last updated" date above.</p>

          <h2 id="terms"><span className="num">10</span>Terms &amp; important notices</h2>
          <h3>No offer or advice</h3>
          <p>
            Nothing on this website constitutes investment advice, a solicitation to invest, an offer of securities, or a financial promotion directed at any person in a jurisdiction where it would be unlawful. Any opportunity discussed following an information request would be made available only to qualified, professional, or institutional parties, on a private basis, through appropriate documentation and in compliance with applicable law.
          </p>
          <h3>Regulatory</h3>
          <p>
            EX Venture Inc. is registered with the U.S. Securities and Exchange Commission (SEC). EX Financial (exfi.app) is authorised and regulated in the United Kingdom; payment and financial services are available to UK customers only.
          </p>
          <h3>Forward-looking statements</h3>
          <p>
            Statements about technology readiness, patents, funding, partnerships, deployments, and plans reflect current intentions and are subject to change. Patent status descriptions ("filed", "granted") reflect status at the time of writing and may change.
          </p>
          <h3>Intellectual property</h3>
          <p>
            The content, brand names, and design of this site are the property of EX Venture and its entities and may not be reproduced without permission.
          </p>

          <p style={{ marginTop: 48 }}>
            Questions about privacy, this site, or your data? Contact <a href="mailto:media@exventure.co">media@exventure.co</a>.
          </p>
        </article>
      </main>
      {Footer ? <Footer onBookCall={openModal} /> : null}
      {BookCallModal ? <BookCallModal open={modalOpen} onClose={closeModal} topic="Something else" /> : null}
    </div>
  );
}

(function mountPrivacy() {
  if (window.Footer && window.BookCallModal && window.GlobalNav && window.ReactDOM) {
    ReactDOM.createRoot(document.getElementById('root')).render(<PrivacyApp />);
  } else {
    setTimeout(mountPrivacy, 50);
  }
})();

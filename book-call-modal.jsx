// Book a Call modal — multi-step form
// Submissions are POSTed to FormSubmit.co which relays them to media@exventure.co.
// First submission triggers a one-time confirmation email to the recipient;
// after that, subsequent submissions deliver as normal emails.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/media@exventure.co";

function BookCallModal({ open, onClose, topic }) {
  const [step, setStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [referenceId, setReferenceId] = React.useState(null);
  const [form, setForm] = React.useState({
    interest: "",
    name: "",
    email: "",
    company: "",
    role: "",
    capacity: "",
    stage: "",
    sector: "",
    capital: "",
    timeline: "",
    message: "",
    consent: false,
  });

  React.useEffect(() => {
    if (open) {
      setStep(1);
      setSubmitted(false);
      setSending(false);
      setError(null);
      setReferenceId(null);
      if (topic) setForm(prev => ({ ...prev, interest: topic }));
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, topic]);

  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const canNext1 = form.interest && form.name.trim() && form.email.trim() && form.company.trim() && form.role.trim();
  const canNext2 = form.capacity && form.stage && form.sector;
  const canSubmit = form.consent && !sending;

  // Build a clean payload for the email body
  const buildPayload = () => {
    const ref = "EXV-" + Math.floor(Math.random() * 9000 + 1000);
    return {
      _subject: `New enquiry · ${form.interest || "General"} · ${form.name} (${form.company})`,
      _replyto: form.email,
      _template: "table",
      _captcha: "false",
      Reference: ref,
      "Enquiry about": form.interest || "—",
      Name: form.name,
      Email: form.email,
      Company: form.company,
      Role: form.role,
      "Reaching out as": form.capacity || "—",
      Stage: form.stage || "—",
      Sector: form.sector || "—",
      "Capital sought": form.capital || "—",
      Timeline: form.timeline || "—",
      Message: form.message || "(no message provided)",
      Submitted: new Date().toISOString(),
    };
  };

  // Fallback: open user's email client with a pre-filled message
  const openMailto = (payload) => {
    const lines = Object.entries(payload)
      .filter(([k]) => !k.startsWith("_") && k !== "Submitted")
      .map(([k, v]) => `${k}: ${v}`);
    const body = encodeURIComponent("Book a Call request\n\n" + lines.join("\n"));
    const subject = encodeURIComponent(payload._subject);
    window.location.href = `mailto:media@exventure.co?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSending(true);
    setError(null);
    const payload = buildPayload();

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network response was not ok (" + res.status + ")");
      const data = await res.json().catch(() => ({}));
      // FormSubmit returns { success: "true" } on success, or text on activation step
      setReferenceId(payload.Reference);
      setSubmitted(true);
      setSending(false);
    } catch (err) {
      console.warn("Form submit failed, offering mailto fallback:", err);
      setError({ payload, message: "We couldn't reach the form service. You can send the message directly from your email client instead." });
      setSending(false);
    }
  };

  const interestOpts = [
    "Consulting / Advisory",
    "Zero-X · Energy",
    "Seraph · Biotech",
    "EX IP · Patents",
    "EX Carbon · Materials",
    "EX AI",
    "Academy / Internships",
    "Invest / Participate",
    "Media / Press",
    "Something else",
  ];
  const capacityOpts = [
    "Founder · raising",
    "Founder · operating",
    "LP · institutional",
    "Government / Grant",
    "Strategic / Corporate",
    "Media / Press",
  ];
  const stageOpts = ["Pre-seed", "Seed", "Series A", "Series B+", "Growth / Restructuring", "Not applicable"];
  const sectorOpts = ["Cleantech / Energy", "AI Infrastructure", "Deep Tech", "PropTech", "FinTech", "Other"];
  const capitalOpts = ["< €500K", "€500K – €2M", "€2M – €10M", "€10M – €50M", "€50M+", "Not seeking capital"];
  const timelineOpts = ["This quarter", "Next 6 months", "12+ months", "Just exploring"];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="bcm-title" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round"/></svg>
        </button>

        <div className="modal-left">
          <div className="modal-logo"><span className="wm-accent">EX</span> VENTURE</div>
          <div className="modal-eyebrow">— Get in touch</div>
          <h2 className="modal-title">Tell us what you need.</h2>
          <p className="modal-sub">
            One form for everything — consulting, a venture, press, or investment. We answer every message that comes through, and route it to the right person so nothing gets lost. Every reply starts with one question: <span style={{ color: "rgba(255,255,255,0.8)" }}>what do you actually need that you don't already have.</span>
          </p>

          <div className="modal-meta">
            <div className="modal-meta-row">
              <span className="lbl">Sent to</span>
              <span className="val">media@exventure.co</span>
            </div>
            <div className="modal-meta-row">
              <span className="lbl">Response</span>
              <span className="val">Within 48 hours</span>
            </div>
            <div className="modal-meta-row">
              <span className="lbl">Office hours</span>
              <span className="val">CET · ICT · PT</span>
            </div>
          </div>
        </div>

        <div className="modal-right">
          {submitted ? (
            <SuccessPanel form={form} reference={referenceId} onClose={onClose} />
          ) : (
            <React.Fragment>
              <div className="modal-stepper">
                <Step n="01" label="You" active={step === 1} done={step > 1} onClick={() => setStep(1)} />
                <span className="step-line"></span>
                <Step n="02" label="Context" active={step === 2} done={step > 2} onClick={() => canNext1 && setStep(2)} />
                <span className="step-line"></span>
                <Step n="03" label="Confirm" active={step === 3} done={false} onClick={() => canNext1 && canNext2 && setStep(3)} />
              </div>

              <form className="modal-form" onSubmit={handleSubmit}>
                {step === 1 && (
                  <React.Fragment>
                    <Field label="What can we help you with?" required>
                      <ChipGroup
                        value={form.interest}
                        options={interestOpts}
                        onChange={(v) => update("interest", v)}
                      />
                    </Field>

                    <FormGrid>
                      <Field label="Full name" required>
                        <input type="text" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Jane Doe" autoFocus required />
                      </Field>
                      <Field label="Work email" required>
                        <input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="jane@founder.co" required />
                      </Field>
                      <Field label="Company / Org" required>
                        <input type="text" value={form.company} onChange={e => update("company", e.target.value)} placeholder="Acme Labs" required />
                      </Field>
                      <Field label="Your role" required>
                        <input type="text" value={form.role} onChange={e => update("role", e.target.value)} placeholder="Founder / CEO" required />
                      </Field>
                    </FormGrid>

                    <Field label="You are reaching out as">
                      <ChipGroup
                        value={form.capacity}
                        options={capacityOpts}
                        onChange={(v) => update("capacity", v)}
                      />
                    </Field>

                    <div className="modal-actions">
                      <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
                      <button type="button" className="btn-modal-primary" disabled={!canNext1} onClick={() => setStep(2)}>
                        Continue <span className="arr">→</span>
                      </button>
                    </div>
                  </React.Fragment>
                )}

                {step === 2 && (
                  <React.Fragment>
                    <Field label="Stage">
                      <ChipGroup
                        value={form.stage}
                        options={stageOpts}
                        onChange={(v) => update("stage", v)}
                      />
                    </Field>

                    <Field label="Sector / Focus">
                      <ChipGroup
                        value={form.sector}
                        options={sectorOpts}
                        onChange={(v) => update("sector", v)}
                      />
                    </Field>

                    <Field label="Capital sought (next 12 months)">
                      <ChipGroup
                        value={form.capital}
                        options={capitalOpts}
                        onChange={(v) => update("capital", v)}
                      />
                    </Field>

                    <Field label="Timeline">
                      <ChipGroup
                        value={form.timeline}
                        options={timelineOpts}
                        onChange={(v) => update("timeline", v)}
                      />
                    </Field>

                    <div className="modal-actions">
                      <button type="button" className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                      <button type="button" className="btn-modal-primary" disabled={!canNext2} onClick={() => setStep(3)}>
                        Continue <span className="arr">→</span>
                      </button>
                    </div>
                  </React.Fragment>
                )}

                {step === 3 && (
                  <React.Fragment>
                    <Field label="What are you building? (1–3 sentences)">
                      <textarea rows="5" value={form.message} onChange={e => update("message", e.target.value)} placeholder="Tell us what you're working on, what's the friction, and what you need from a partner like EX Venture." />
                    </Field>

                    <div className="modal-summary">
                      <div className="summary-title">Summary</div>
                      <div className="summary-grid">
                        <div><span className="sl">Enquiry</span><span className="sv">{form.interest || "—"}</span></div>
                        <div><span className="sl">Name</span><span className="sv">{form.name}</span></div>
                        <div><span className="sl">Email</span><span className="sv">{form.email}</span></div>
                        <div><span className="sl">Company</span><span className="sv">{form.company}</span></div>
                        <div><span className="sl">Role</span><span className="sv">{form.role}</span></div>
                        <div><span className="sl">Reaching out as</span><span className="sv">{form.capacity || "—"}</span></div>
                        <div><span className="sl">Stage</span><span className="sv">{form.stage}</span></div>
                        <div><span className="sl">Sector</span><span className="sv">{form.sector}</span></div>
                        <div><span className="sl">Capital</span><span className="sv">{form.capital || "—"}</span></div>
                        <div><span className="sl">Timeline</span><span className="sv">{form.timeline || "—"}</span></div>
                      </div>
                    </div>

                    <label className="consent">
                      <input type="checkbox" checked={form.consent} onChange={e => update("consent", e.target.checked)} />
                      <span>I understand EX Venture will use this information solely to schedule a conversation. Nothing on this form constitutes a financial commitment.</span>
                    </label>

                    {error && (
                      <div className="form-error">
                        <div className="form-error-title">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v6 M12 16v.5" strokeLinecap="round"/></svg>
                          Couldn't send right now
                        </div>
                        <div className="form-error-body">{error.message}</div>
                        <button type="button" className="btn-secondary" onClick={() => openMailto(error.payload)}>
                          Open in email client <span style={{ fontSize: 11 }}>↗</span>
                        </button>
                      </div>
                    )}

                    <div className="modal-actions">
                      <button type="button" className="btn-secondary" onClick={() => setStep(2)} disabled={sending}>Back</button>
                      <button type="submit" className="btn-modal-primary" disabled={!canSubmit}>
                        {sending ? (
                          <React.Fragment>Sending<span className="sending-dots"><span></span><span></span><span></span></span></React.Fragment>
                        ) : (
                          <React.Fragment>Send to media@exventure.co <span className="arr">→</span></React.Fragment>
                        )}
                      </button>
                    </div>
                  </React.Fragment>
                )}
              </form>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

function Step({ n, label, active, done, onClick }) {
  return (
    <div className={"step" + (active ? " active" : "") + (done ? " done" : "")} onClick={onClick}>
      <span className="step-n">{done ? "✓" : n}</span>
      <span className="step-label">{label}</span>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div className="field">
      <label>{label}{required && <span className="req">*</span>}</label>
      {children}
    </div>
  );
}

function FormGrid({ children }) {
  return <div className="form-grid">{children}</div>;
}

function ChipGroup({ value, options, onChange }) {
  return (
    <div className="chip-group">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          className={"chip" + (value === opt ? " active" : "")}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function SuccessPanel({ form, reference, onClose }) {
  const ref = reference || ("EXV-" + Math.floor(Math.random() * 9000 + 1000));
  return (
    <div className="success">
      <div className="success-icon">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M4 12 L10 18 L20 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="success-title">Message sent.</h3>
      <p className="success-text">
        Thanks, {form.name.split(" ")[0] || "there"}. Your request has been delivered to <strong>media@exventure.co</strong>. We'll review and reply to <strong>{form.email}</strong> within 48 hours to lock a time.
      </p>
      <div className="success-meta">
        <div><span className="lbl">Reference</span><span className="val">{ref}</span></div>
        <div><span className="lbl">Submitted</span><span className="val">{new Date().toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}</span></div>
      </div>
      <button className="btn-modal-primary" onClick={onClose}>Close</button>
    </div>
  );
}

Object.assign(window, { BookCallModal });

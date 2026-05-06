// Floating window content for each "object"

const ContentBlock = ({ title, kicker, children }) => (
  <div className="window-content">
    {kicker && <div className="window-kicker">{kicker}</div>}
    <h2 className="window-title">{title}</h2>
    <div className="window-body">{children}</div>
  </div>
);

// --- About ---
const AboutContent = () => (
  <ContentBlock kicker="02 — about" title="Hi, I'm Francys.">
    <p className="lede">
      I'm a Data Scientist & ML Engineer based in Mexico, with{" "}
      <em>six years</em> of building production machine learning in fintech.
    </p>
    <ul className="scan-list">
      <li><strong>Production ML:</strong> deployable, monitored, governed systems.</li>
      <li><strong>Fintech focus:</strong> credit risk, fraud, and real-time decisioning.</li>
      <li><strong>Tooling:</strong> Databricks, ML platforms, feature stores, model lifecycle.</li>
    </ul>
    <p className="aside">
      Off the clock — I mentor, I speak about practical AI adoption,
      and I'm finishing my MSc in AI at Woolf University.
    </p>
  </ContentBlock>
);

// --- Services ---
const ServicesContent = () => (
  <ContentBlock kicker="01 — SERVICES" title="What I help with.">
    <p className="lede">
      Fractional ML & MLOps consulting — hourly or project-based.
    </p>
    <ul className="service-list service-list-detailed">
      <li className="service-group">
        <span className="num">i.</span>
        <div>
          <strong>Data Science & Machine Learning Consulting</strong>
          <ol className="service-sublist">
            <li>
              <span className="sub-num">a.</span>
              <div>
                <strong>Design, build & deploy production ML systems</strong>
                <p>Platform setup, lifecycle standards, weeks-not-months delivery.</p>
              </div>
            </li>
            <li>
              <span className="sub-num">b.</span>
              <div>
                <strong>Feature store design</strong>
                <p>Offline + online stores, governed reuse across products.</p>
              </div>
            </li>
            <li>
              <span className="sub-num">c.</span>
              <div>
                <strong>Credit risk & fraud modeling</strong>
                <p>Underwriting, real-time decisions, graph-based fraud detection.</p>
              </div>
            </li>
            <li>
              <span className="sub-num">d.</span>
              <div>
                <strong>Monitoring & drift detection</strong>
                <p>Drift signals, retraining triggers, governance routines.</p>
              </div>
            </li>
          </ol>
        </div>
      </li>
      <li>
        <span className="num">ii.</span>
        <div>
          <strong>Technical Mentorship for Data Scientists</strong>
          <p>Structured 1:1 guidance for role transitions and senior growth.</p>
        </div>
      </li>
      <li>
        <span className="num">iii.</span>
        <div>
          <strong>Productivity & Automation with AI Tools</strong>
          <p>Claude, Gemini, and practical AI workflows for busy teams.</p>
        </div>
      </li>
    </ul>
    <p className="aside">
      Best fit: teams that need senior execution, architecture, and production hardening.
    </p>
  </ContentBlock>
);

// --- Case Studies ---
const CasesContent = () => (
  <ContentBlock kicker="03 — selected work" title="Things I've shipped.">
    <div className="case">
      <div className="case-meta">
        <span className="case-co">Bankaya</span>
        <span className="case-role">Lead Data Scientist · 2024 — now</span>
      </div>
      <ul className="case-points">
        <li>Cut model delivery from <em>4–6 months</em> to <em>2–4 weeks</em>.</li>
        <li>Built feature store + sub-second credit/fraud inference.</li>
        <li>Shipped agentic diagnostics for stakeholder reporting.</li>
      </ul>
    </div>
    <div className="case">
      <div className="case-meta">
        <span className="case-co">Clara</span>
        <span className="case-role">Data Scientist · 2022 — 2024</span>
      </div>
      <ul className="case-points">
        <li>Replaced rules with an ML credit engine; <em>doubled approvals</em>.</li>
        <li>Added graph-based fraud detection to automated decisions.</li>
      </ul>
    </div>
    <div className="case">
      <div className="case-meta">
        <span className="case-co">Nubank</span>
        <span className="case-role">Senior Data Scientist · 2021 — 2022</span>
      </div>
      <ul className="case-points">
        <li>Real-time fraud models for high-volume transactions.</li>
        <li>Sub-second approval pipelines across millions of events.</li>
      </ul>
    </div>
    <div className="case">
      <div className="case-meta">
        <span className="case-co">True Home, HITSS, BBVA, Bancaribe</span>
        <span className="case-role">2016 — 2021</span>
      </div>
      <ul className="case-points">
        <li>Underwriting and pricing models.</li>
        <li>AWS microservices and early risk/data roles across LATAM.</li>
      </ul>
    </div>
  </ContentBlock>
);

// --- Now ---
const NowContent = () => (
  <ContentBlock kicker="04 — now" title="What I'm up to.">
    <p className="now-date">As of November 2026 — Mexico City, GMT-6</p>
    <ul className="now-list">
      <li>
        <span className="now-tag">building</span>
        agentic ML diagnostics at Bankaya
      </li>
      <li>
        <span className="now-tag">studying</span>
        MSc in AI: scalable systems + real-time inference
      </li>
      <li>
        <span className="now-tag">writing</span>
        notes on what production ML actually costs
      </li>
      <li>
        <span className="now-tag">open to</span>
        2 fractional engagements starting Q1 2027
      </li>
      <li>
        <span className="now-tag">reading</span>
        <em>Designing Machine Learning Systems</em> — Chip Huyen
      </li>
      <li>
        <span className="now-tag">tinkering</span>
        a small LightGBM monitoring dashboard
      </li>
    </ul>
    <p className="aside">
      This page updates roughly every month. Last touched today.
    </p>
  </ContentBlock>
);

// --- Writing ---
const WritingContent = () => (
  <ContentBlock kicker="05 — notes" title="Writing.">
    <p className="lede">
      Short notes on production ML, AI workflows, and the work between prototype and launch.
    </p>
    <ul className="writing-list">
      <li>
        <div className="w-meta">draft · est. dec 2026</div>
        <div className="w-title">Notebooks are not the problem.</div>
        <div className="w-blurb">On why "we'll productionize it later" is the most expensive sentence in ML.</div>
      </li>
      <li>
        <div className="w-meta">draft · est. jan 2027</div>
        <div className="w-title">Feature stores, plainly.</div>
        <div className="w-blurb">A short, honest tour of when you actually need one (and when you don't).</div>
      </li>
      <li>
        <div className="w-meta">notes</div>
        <div className="w-title">Drift is a UX problem.</div>
        <div className="w-blurb">A scattered set of thoughts on monitoring as conversation, not alarm.</div>
      </li>
      <li>
        <div className="w-meta">talks</div>
        <div className="w-title">Practical AI adoption — for teams that already have too many tools.</div>
        <div className="w-blurb">A talk I keep refining. Available on request.</div>
      </li>
    </ul>
    <p className="aside">
      ✱ this corner of the desk is intentionally a little empty.
    </p>
  </ContentBlock>
);

// --- Contact ---
const ContactContent = () => (
  <ContentBlock kicker="06 — say hello" title="Let's talk.">
    <p className="lede">
      I read everything. The fastest way to me is email or a 30-minute intro call.
    </p>
    <div className="contact-grid">
      <a className="contact-card" href="mailto:mariafrancysucv@gmail.com">
        <div className="cc-label">email</div>
        <div className="cc-value">mariafrancysucv@gmail.com</div>
        <div className="cc-aside">usually within a day</div>
      </a>
      <a className="contact-card" href="mailto:mariafrancysucv@gmail.com?subject=30-minute%20intro%20call&body=Hi%20Francys%2C%0A%0AI%27d%20like%20to%20schedule%20a%2030-minute%20intro%20call.%0A%0AHere%20are%20a%20few%20times%20that%20work%20for%20me%3A%0A-">
        <div className="cc-label">book a call</div>
        <div className="cc-value">30-min intro →</div>
        <div className="cc-aside">no pitch, just a chat</div>
      </a>
      <a className="contact-card" href="https://www.linkedin.com/in/francys-lanza-garc%C3%ADa-784865128/" target="_blank" rel="noopener noreferrer">
        <div className="cc-label">linkedin</div>
        <div className="cc-value">/in/francys-lanza-garcía</div>
        <div className="cc-aside">DMs open</div>
      </a>
      <a className="contact-card" href="uploads/Francys_Lanza_Garcia_CV_2026.docx" download>
        <div className="cc-label">cv</div>
        <div className="cc-value">download cv →</div>
        <div className="cc-aside">2026 edition · docx</div>
      </a>
    </div>
    <p className="aside">
      Based in Mexico, working remotely. Comfortable across LATAM, US, and EU hours.
    </p>
  </ContentBlock>
);

window.WindowContent = {
  about: AboutContent,
  services: ServicesContent,
  cases: CasesContent,
  now: NowContent,
  writing: WritingContent,
  contact: ContactContent,
};

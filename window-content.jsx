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
    <p>
      I help teams move from notebooks and fragmented pipelines to
      deployable, monitored, governed ML systems — the kind that survive
      a Tuesday morning incident and a Friday afternoon audit.
    </p>
    <p>
      Mostly I work in Databricks. Mostly the problems are credit risk,
      fraud, and the quiet infrastructure that lets models actually ship.
    </p>
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
                <p>
                  ML platform setup, model lifecycle, deployment standards.
                  Delivery cycles cut from months to weeks.
                </p>
              </div>
            </li>
            <li>
              <span className="sub-num">b.</span>
              <div>
                <strong>Feature store design</strong>
                <p>
                  Offline + online stores, governed feature reuse across
                  financial products.
                </p>
              </div>
            </li>
            <li>
              <span className="sub-num">c.</span>
              <div>
                <strong>Credit risk & fraud modeling</strong>
                <p>
                  Underwriting engines, real-time decisioning, graph-based
                  fraud detection.
                </p>
              </div>
            </li>
            <li>
              <span className="sub-num">d.</span>
              <div>
                <strong>Monitoring & drift detection</strong>
                <p>
                  Detection frameworks, automated retraining, model governance.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </li>
      <li>
        <span className="num">ii.</span>
        <div>
          <strong>Technical Mentorship for Data Scientists</strong>
          <p>Structured 1:1 program to land your first role or reach the next level.</p>
        </div>
      </li>
      <li>
        <span className="num">iii.</span>
        <div>
          <strong>Productivity & Automation with AI Tools</strong>
          <p>
            For professionals and teams ready to work smarter with Claude,
            Gemini, and modern AI workflows.
          </p>
        </div>
      </li>
    </ul>
    <p className="aside">
      Best fit: project-based engagements where a team needs senior
      execution, architecture, and production hardening.
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
      <p className="case-line">
        Cut model delivery cycles from <em>4–6 months</em> to <em>2–4 weeks</em> by
        standardizing the ML platform across financial products.
      </p>
      <p className="case-line">
        Designed an offline/online feature store + sub-second inference
        infra for credit & fraud decisioning.
      </p>
      <p className="case-line">
        Shipped agentic AI diagnostic workflows for stakeholder reporting.
      </p>
    </div>
    <div className="case">
      <div className="case-meta">
        <span className="case-co">Clara</span>
        <span className="case-role">Data Scientist · 2022 — 2024</span>
      </div>
      <p className="case-line">
        Replaced rule-based underwriting with an ML credit engine —
        <em> doubled approval rates</em> while preserving portfolio risk.
      </p>
      <p className="case-line">
        Integrated graph-based fraud detection into automated decisioning.
      </p>
    </div>
    <div className="case">
      <div className="case-meta">
        <span className="case-co">Nubank</span>
        <span className="case-role">Senior Data Scientist · 2021 — 2022</span>
      </div>
      <p className="case-line">
        Real-time fraud models for high-volume transactions; sub-second
        approval pipelines across millions of events.
      </p>
    </div>
    <div className="case">
      <div className="case-meta">
        <span className="case-co">True Home, HITSS, BBVA, Bancaribe</span>
        <span className="case-role">2016 — 2021</span>
      </div>
      <p className="case-line">
        Underwriting & pricing models · AWS microservices · early risk &
        data roles across LATAM fintech and banking.
      </p>
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
        agentic ML diagnostic workflows at Bankaya
      </li>
      <li>
        <span className="now-tag">studying</span>
        MSc in AI at Woolf — currently in scalable systems & real-time inference
      </li>
      <li>
        <span className="now-tag">writing</span>
        a slow series of notes on what production ML actually costs
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
        a small LightGBM monitoring dashboard in spare hours
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
      Short, mostly unfinished. I publish when the idea is more useful
      than it is polished.
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

// Floating window content for each "object"

const h = React.createElement;

const ContentBlock = ({ title, kicker, children }) => h("div", { className: "window-content" },
  kicker && h("div", { className: "window-kicker" }, kicker),
  h("h2", { className: "window-title" }, title),
  h("div", { className: "window-body" }, children)
);

// --- About ---
const AboutContent = () => h(ContentBlock, { kicker: "02 — about", title: "Hi, I'm Francys." },
  h("p", { className: "lede" }, "I'm a Data Scientist & ML Engineer based in Mexico, with ", h("em", null, "six years"), " of building production machine learning in fintech."),
  h("ul", { className: "scan-list" },
    h("li", null, h("strong", null, "Production ML:"), " deployable, monitored, governed systems."),
    h("li", null, h("strong", null, "Fintech focus:"), " credit risk, fraud, and real-time decisioning."),
    h("li", null, h("strong", null, "Tooling:"), " Databricks, ML platforms, feature stores, model lifecycle.")
  ),
  h("p", { className: "aside" }, "Off the clock — I mentor, I speak about practical AI adoption, and I'm finishing my MSc in AI at Woolf University.")
);

// --- Services ---
const ServicesContent = () => h(ContentBlock, { kicker: "01 — SERVICES", title: "What I help with." },
  h("p", { className: "lede" }, "Fractional ML & MLOps consulting — hourly or project-based."),
  h("ul", { className: "service-list service-list-detailed" },
    h("li", { className: "service-group" },
      h("span", { className: "num" }, "i."),
      h("div", null,
        h("strong", null, "Data Science & Machine Learning Consulting"),
        h("ol", { className: "service-sublist" },
          h("li", null, h("span", { className: "sub-num" }, "a."), h("div", null, h("strong", null, "Design, build & deploy production ML systems"), h("p", null, "Platform setup, lifecycle standards, weeks-not-months delivery."))),
          h("li", null, h("span", { className: "sub-num" }, "b."), h("div", null, h("strong", null, "Feature store design"), h("p", null, "Offline + online stores, governed reuse across products."))),
          h("li", null, h("span", { className: "sub-num" }, "c."), h("div", null, h("strong", null, "Credit risk & fraud modeling"), h("p", null, "Underwriting, real-time decisions, graph-based fraud detection."))),
          h("li", null, h("span", { className: "sub-num" }, "d."), h("div", null, h("strong", null, "Monitoring & drift detection"), h("p", null, "Drift signals, retraining triggers, governance routines.")))
        )
      )
    ),
    h("li", null, h("span", { className: "num" }, "ii."), h("div", null, h("strong", null, "Technical Mentorship for Data Scientists"), h("p", null, "Structured 1:1 guidance for role transitions and senior growth."))),
    h("li", null, h("span", { className: "num" }, "iii."), h("div", null, h("strong", null, "Productivity & Automation with AI Tools"), h("p", null, "Claude, Gemini, and practical AI workflows for busy teams.")))
  ),
  h("p", { className: "aside" }, "Best fit: teams that need senior execution, architecture, and production hardening.")
);

// --- Case Studies ---
const CasesContent = () => h(ContentBlock, { kicker: "03 — selected work", title: "Things I've shipped." },
  h("div", { className: "case" },
    h("div", { className: "case-meta" }, h("span", { className: "case-co" }, "Bankaya"), h("span", { className: "case-role" }, "Lead Data Scientist · 2024 — now")),
    h("ul", { className: "case-points" },
      h("li", null, "Cut model delivery from ", h("em", null, "4–6 months"), " to ", h("em", null, "2–4 weeks"), "."),
      h("li", null, "Built feature store + sub-second credit/fraud inference."),
      h("li", null, "Shipped agentic diagnostics for stakeholder reporting.")
    )
  ),
  h("div", { className: "case" },
    h("div", { className: "case-meta" }, h("span", { className: "case-co" }, "Clara"), h("span", { className: "case-role" }, "Data Scientist · 2022 — 2024")),
    h("ul", { className: "case-points" },
      h("li", null, "Replaced rules with an ML credit engine; ", h("em", null, "doubled approvals"), "."),
      h("li", null, "Added graph-based fraud detection to automated decisions.")
    )
  ),
  h("div", { className: "case" },
    h("div", { className: "case-meta" }, h("span", { className: "case-co" }, "Nubank"), h("span", { className: "case-role" }, "Senior Data Scientist · 2021 — 2022")),
    h("ul", { className: "case-points" },
      h("li", null, "Real-time fraud models for high-volume transactions."),
      h("li", null, "Sub-second approval pipelines across millions of events.")
    )
  ),
  h("div", { className: "case" },
    h("div", { className: "case-meta" }, h("span", { className: "case-co" }, "True Home, HITSS, BBVA, Bancaribe"), h("span", { className: "case-role" }, "2016 — 2021")),
    h("ul", { className: "case-points" },
      h("li", null, "Underwriting and pricing models."),
      h("li", null, "AWS microservices and early risk/data roles across LATAM.")
    )
  )
);

// --- Now ---
const NowContent = () => h(ContentBlock, { kicker: "04 — now", title: "What I'm up to." },
  h("p", { className: "now-date" }, "As of November 2026 — Mexico City, GMT-6"),
  h("ul", { className: "now-list" },
    h("li", null, h("span", { className: "now-tag" }, "building"), "agentic ML diagnostics at Bankaya"),
    h("li", null, h("span", { className: "now-tag" }, "studying"), "MSc in AI: scalable systems + real-time inference"),
    h("li", null, h("span", { className: "now-tag" }, "writing"), "notes on what production ML actually costs"),
    h("li", null, h("span", { className: "now-tag" }, "open to"), "2 fractional engagements starting Q1 2027"),
    h("li", null, h("span", { className: "now-tag" }, "reading"), h("em", null, "Designing Machine Learning Systems"), " — Chip Huyen"),
    h("li", null, h("span", { className: "now-tag" }, "tinkering"), "a small LightGBM monitoring dashboard")
  ),
  h("p", { className: "aside" }, "This page updates roughly every month. Last touched today.")
);

// --- Writing ---
const WritingContent = () => h(ContentBlock, { kicker: "05 — notes", title: "Writing." },
  h("p", { className: "lede" }, "Short notes on production ML, AI workflows, and the work between prototype and launch."),
  h("ul", { className: "writing-list" },
    h("li", null, h("div", { className: "w-meta" }, "draft · est. dec 2026"), h("div", { className: "w-title" }, "Notebooks are not the problem."), h("div", { className: "w-blurb" }, "On why \"we'll productionize it later\" is the most expensive sentence in ML.")),
    h("li", null, h("div", { className: "w-meta" }, "draft · est. jan 2027"), h("div", { className: "w-title" }, "Feature stores, plainly."), h("div", { className: "w-blurb" }, "A short, honest tour of when you actually need one (and when you don't).")),
    h("li", null, h("div", { className: "w-meta" }, "notes"), h("div", { className: "w-title" }, "Drift is a UX problem."), h("div", { className: "w-blurb" }, "A scattered set of thoughts on monitoring as conversation, not alarm.")),
    h("li", null, h("div", { className: "w-meta" }, "talks"), h("div", { className: "w-title" }, "Practical AI adoption — for teams that already have too many tools."), h("div", { className: "w-blurb" }, "A talk I keep refining. Available on request."))
  ),
  h("p", { className: "aside" }, "✱ this corner of the desk is intentionally a little empty.")
);

// --- Contact ---
const ContactContent = () => h(ContentBlock, { kicker: "06 — say hello", title: "Let's talk." },
  h("p", { className: "lede" }, "I read everything. The fastest way to me is email or a 30-minute intro call."),
  h("div", { className: "contact-grid" },
    h("a", { className: "contact-card", href: "mailto:mariafrancysucv@gmail.com" }, h("div", { className: "cc-label" }, "email"), h("div", { className: "cc-value" }, "mariafrancysucv@gmail.com"), h("div", { className: "cc-aside" }, "usually within a day")),
    h("a", { className: "contact-card", href: "mailto:mariafrancysucv@gmail.com?subject=30-minute%20intro%20call&body=Hi%20Francys%2C%0A%0AI%27d%20like%20to%20schedule%20a%2030-minute%20intro%20call.%0A%0AHere%20are%20a%20few%20times%20that%20work%20for%20me%3A%0A-" }, h("div", { className: "cc-label" }, "book a call"), h("div", { className: "cc-value" }, "30-min intro →"), h("div", { className: "cc-aside" }, "no pitch, just a chat")),
    h("a", { className: "contact-card", href: "https://www.linkedin.com/in/francys-lanza-garc%C3%ADa-784865128/", target: "_blank", rel: "noopener noreferrer" }, h("div", { className: "cc-label" }, "linkedin"), h("div", { className: "cc-value" }, "/in/francys-lanza-garcía"), h("div", { className: "cc-aside" }, "DMs open")),
    h("a", { className: "contact-card", href: "uploads/Francys_Lanza_Garcia_CV_2026.docx", download: true }, h("div", { className: "cc-label" }, "cv"), h("div", { className: "cc-value" }, "download cv →"), h("div", { className: "cc-aside" }, "2026 edition · docx"))
  ),
  h("p", { className: "aside" }, "Based in Mexico, working remotely. Comfortable across LATAM, US, and EU hours.")
);

window.WindowContent = {
  about: AboutContent,
  services: ServicesContent,
  cases: CasesContent,
  now: NowContent,
  writing: WritingContent,
  contact: ContactContent,
};

// Floating window content for each "object"

const ContentBlock = ({
  title,
  kicker,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "window-content"
}, kicker && /*#__PURE__*/React.createElement("div", {
  className: "window-kicker"
}, kicker), /*#__PURE__*/React.createElement("h2", {
  className: "window-title"
}, title), /*#__PURE__*/React.createElement("div", {
  className: "window-body"
}, children));

// --- About ---
const AboutContent = () => /*#__PURE__*/React.createElement(ContentBlock, {
  kicker: "02 \u2014 about",
  title: "Hi, I'm Francys."
}, /*#__PURE__*/React.createElement("p", {
  className: "lede"
}, "I'm a Data Scientist & ML Engineer based in Mexico, with", " ", /*#__PURE__*/React.createElement("em", null, "six years"), " of building production machine learning in fintech."), /*#__PURE__*/React.createElement("p", null, "I help teams move from notebooks and fragmented pipelines to deployable, monitored, governed ML systems \u2014 the kind that survive a Tuesday morning incident and a Friday afternoon audit."), /*#__PURE__*/React.createElement("p", null, "Mostly I work in Databricks. Mostly the problems are credit risk, fraud, and the quiet infrastructure that lets models actually ship."), /*#__PURE__*/React.createElement("p", {
  className: "aside"
}, "Off the clock \u2014 I mentor, I speak about practical AI adoption, and I'm finishing my MSc in AI at Woolf University."));

// --- Services ---
const ServicesContent = () => /*#__PURE__*/React.createElement(ContentBlock, {
  kicker: "01 — SERVICES",
  title: "What I help with."
}, /*#__PURE__*/React.createElement("p", {
  className: "lede"
}, "Fractional ML & MLOps consulting — hourly or project-based."), /*#__PURE__*/React.createElement("ul", {
  className: "service-list service-list-detailed"
}, /*#__PURE__*/React.createElement("li", {
  className: "service-group"
}, /*#__PURE__*/React.createElement("span", {
  className: "num"
}, "i."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Data Science & Machine Learning Consulting"), /*#__PURE__*/React.createElement("ol", {
  className: "service-sublist"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "sub-num"
}, "a."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Design, build & deploy production ML systems"), /*#__PURE__*/React.createElement("p", null, "ML platform setup, model lifecycle, deployment standards. Delivery cycles cut from months to weeks."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "sub-num"
}, "b."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Feature store design"), /*#__PURE__*/React.createElement("p", null, "Offline + online stores, governed feature reuse across financial products."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "sub-num"
}, "c."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Credit risk & fraud modeling"), /*#__PURE__*/React.createElement("p", null, "Underwriting engines, real-time decisioning, graph-based fraud detection."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "sub-num"
}, "d."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Monitoring & drift detection"), /*#__PURE__*/React.createElement("p", null, "Detection frameworks, automated retraining, model governance.")))))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "num"
}, "ii."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Technical Mentorship for Data Scientists"), /*#__PURE__*/React.createElement("p", null, "Structured 1:1 program to land your first role or reach the next level."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "num"
}, "iii."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Productivity & Automation with AI Tools"), /*#__PURE__*/React.createElement("p", null, "For professionals and teams ready to work smarter with Claude, Gemini, and modern AI workflows.")))), /*#__PURE__*/React.createElement("p", {
  className: "aside"
}, "Best fit: project-based engagements where a team needs senior execution, architecture, and production hardening."));

// --- Case Studies ---
const CasesContent = () => /*#__PURE__*/React.createElement(ContentBlock, {
  kicker: "03 \u2014 selected work",
  title: "Things I've shipped."
}, /*#__PURE__*/React.createElement("div", {
  className: "case"
}, /*#__PURE__*/React.createElement("div", {
  className: "case-meta"
}, /*#__PURE__*/React.createElement("span", {
  className: "case-co"
}, "Bankaya"), /*#__PURE__*/React.createElement("span", {
  className: "case-role"
}, "Lead Data Scientist \xB7 2024 \u2014 now")), /*#__PURE__*/React.createElement("p", {
  className: "case-line"
}, "Cut model delivery cycles from ", /*#__PURE__*/React.createElement("em", null, "4\u20136 months"), " to ", /*#__PURE__*/React.createElement("em", null, "2\u20134 weeks"), " by standardizing the ML platform across financial products."), /*#__PURE__*/React.createElement("p", {
  className: "case-line"
}, "Designed an offline/online feature store + sub-second inference infra for credit & fraud decisioning."), /*#__PURE__*/React.createElement("p", {
  className: "case-line"
}, "Shipped agentic AI diagnostic workflows for stakeholder reporting.")), /*#__PURE__*/React.createElement("div", {
  className: "case"
}, /*#__PURE__*/React.createElement("div", {
  className: "case-meta"
}, /*#__PURE__*/React.createElement("span", {
  className: "case-co"
}, "Clara"), /*#__PURE__*/React.createElement("span", {
  className: "case-role"
}, "Data Scientist \xB7 2022 \u2014 2024")), /*#__PURE__*/React.createElement("p", {
  className: "case-line"
}, "Replaced rule-based underwriting with an ML credit engine \u2014", /*#__PURE__*/React.createElement("em", null, " doubled approval rates"), " while preserving portfolio risk."), /*#__PURE__*/React.createElement("p", {
  className: "case-line"
}, "Integrated graph-based fraud detection into automated decisioning.")), /*#__PURE__*/React.createElement("div", {
  className: "case"
}, /*#__PURE__*/React.createElement("div", {
  className: "case-meta"
}, /*#__PURE__*/React.createElement("span", {
  className: "case-co"
}, "Nubank"), /*#__PURE__*/React.createElement("span", {
  className: "case-role"
}, "Senior Data Scientist \xB7 2021 \u2014 2022")), /*#__PURE__*/React.createElement("p", {
  className: "case-line"
}, "Real-time fraud models for high-volume transactions; sub-second approval pipelines across millions of events.")), /*#__PURE__*/React.createElement("div", {
  className: "case"
}, /*#__PURE__*/React.createElement("div", {
  className: "case-meta"
}, /*#__PURE__*/React.createElement("span", {
  className: "case-co"
}, "True Home, HITSS, BBVA, Bancaribe"), /*#__PURE__*/React.createElement("span", {
  className: "case-role"
}, "2016 \u2014 2021")), /*#__PURE__*/React.createElement("p", {
  className: "case-line"
}, "Underwriting & pricing models \xB7 AWS microservices \xB7 early risk & data roles across LATAM fintech and banking.")));

// --- Now ---
const NowContent = () => /*#__PURE__*/React.createElement(ContentBlock, {
  kicker: "04 \u2014 now",
  title: "What I'm up to."
}, /*#__PURE__*/React.createElement("p", {
  className: "now-date"
}, "As of November 2026 \u2014 Mexico City, GMT-6"), /*#__PURE__*/React.createElement("ul", {
  className: "now-list"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "now-tag"
}, "building"), "agentic ML diagnostic workflows at Bankaya"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "now-tag"
}, "studying"), "MSc in AI at Woolf \u2014 currently in scalable systems & real-time inference"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "now-tag"
}, "writing"), "a slow series of notes on what production ML actually costs"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "now-tag"
}, "open to"), "2 fractional engagements starting Q1 2027"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "now-tag"
}, "reading"), /*#__PURE__*/React.createElement("em", null, "Designing Machine Learning Systems"), " \u2014 Chip Huyen"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "now-tag"
}, "tinkering"), "a small LightGBM monitoring dashboard in spare hours")), /*#__PURE__*/React.createElement("p", {
  className: "aside"
}, "This page updates roughly every month. Last touched today."));

// --- Writing ---
const WritingContent = () => /*#__PURE__*/React.createElement(ContentBlock, {
  kicker: "05 \u2014 notes",
  title: "Writing."
}, /*#__PURE__*/React.createElement("p", {
  className: "lede"
}, "Short, mostly unfinished. I publish when the idea is more useful than it is polished."), /*#__PURE__*/React.createElement("ul", {
  className: "writing-list"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
  className: "w-meta"
}, "draft \xB7 est. dec 2026"), /*#__PURE__*/React.createElement("div", {
  className: "w-title"
}, "Notebooks are not the problem."), /*#__PURE__*/React.createElement("div", {
  className: "w-blurb"
}, "On why \"we'll productionize it later\" is the most expensive sentence in ML.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
  className: "w-meta"
}, "draft \xB7 est. jan 2027"), /*#__PURE__*/React.createElement("div", {
  className: "w-title"
}, "Feature stores, plainly."), /*#__PURE__*/React.createElement("div", {
  className: "w-blurb"
}, "A short, honest tour of when you actually need one (and when you don't).")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
  className: "w-meta"
}, "notes"), /*#__PURE__*/React.createElement("div", {
  className: "w-title"
}, "Drift is a UX problem."), /*#__PURE__*/React.createElement("div", {
  className: "w-blurb"
}, "A scattered set of thoughts on monitoring as conversation, not alarm.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
  className: "w-meta"
}, "talks"), /*#__PURE__*/React.createElement("div", {
  className: "w-title"
}, "Practical AI adoption \u2014 for teams that already have too many tools."), /*#__PURE__*/React.createElement("div", {
  className: "w-blurb"
}, "A talk I keep refining. Available on request."))), /*#__PURE__*/React.createElement("p", {
  className: "aside"
}, "\u2731 this corner of the desk is intentionally a little empty."));

// --- Contact ---
const ContactContent = () => /*#__PURE__*/React.createElement(ContentBlock, {
  kicker: "06 \u2014 say hello",
  title: "Let's talk."
}, /*#__PURE__*/React.createElement("p", {
  className: "lede"
}, "I read everything. The fastest way to me is email or a 30-minute intro call."), /*#__PURE__*/React.createElement("div", {
  className: "contact-grid"
}, /*#__PURE__*/React.createElement("a", {
  className: "contact-card",
  href: "mailto:mariafrancysucv@gmail.com"
}, /*#__PURE__*/React.createElement("div", {
  className: "cc-label"
}, "email"), /*#__PURE__*/React.createElement("div", {
  className: "cc-value"
}, "mariafrancysucv@gmail.com"), /*#__PURE__*/React.createElement("div", {
  className: "cc-aside"
}, "usually within a day")), /*#__PURE__*/React.createElement("a", {
  className: "contact-card",
  href: "mailto:mariafrancysucv@gmail.com?subject=30-minute%20intro%20call&body=Hi%20Francys%2C%0A%0AI%27d%20like%20to%20schedule%20a%2030-minute%20intro%20call.%0A%0AHere%20are%20a%20few%20times%20that%20work%20for%20me%3A%0A-"
}, /*#__PURE__*/React.createElement("div", {
  className: "cc-label"
}, "book a call"), /*#__PURE__*/React.createElement("div", {
  className: "cc-value"
}, "30-min intro \u2192"), /*#__PURE__*/React.createElement("div", {
  className: "cc-aside"
}, "no pitch, just a chat")), /*#__PURE__*/React.createElement("a", {
  className: "contact-card",
  href: "https://www.linkedin.com/in/francys-lanza-garc%C3%ADa-784865128/",
  target: "_blank",
  rel: "noopener noreferrer"
}, /*#__PURE__*/React.createElement("div", {
  className: "cc-label"
}, "linkedin"), /*#__PURE__*/React.createElement("div", {
  className: "cc-value"
}, "/in/francys-lanza-garcía"), /*#__PURE__*/React.createElement("div", {
  className: "cc-aside"
}, "DMs open")), /*#__PURE__*/React.createElement("a", {
  className: "contact-card",
  href: "uploads/Francys_Lanza_Garcia_CV_2026.docx",
  download: true
}, /*#__PURE__*/React.createElement("div", {
  className: "cc-label"
}, "cv"), /*#__PURE__*/React.createElement("div", {
  className: "cc-value"
}, "download cv \u2192"), /*#__PURE__*/React.createElement("div", {
  className: "cc-aside"
}, "2026 edition · docx"))), /*#__PURE__*/React.createElement("p", {
  className: "aside"
}, "Based in Mexico, working remotely. Comfortable across LATAM, US, and EU hours."));
window.WindowContent = {
  about: AboutContent,
  services: ServicesContent,
  cases: CasesContent,
  now: NowContent,
  writing: WritingContent,
  contact: ContactContent
};
// Main app — cozy desk, floating windows, ambient interactions.

const DeskIcons = window.Objects;

// --- Object positions on the "desk" — % of viewport ---
// Centered intro paragraph, objects scattered around it.
const DESK_OBJECTS = [
  {
    id: "about", label: "about", Icon: DeskIcons.SelfPortraitDoodle,
    pos: { left: "81%", top: "28%" }, sway: 4.2, w: 128,
  },
  {
    id: "cases", label: "selected work", Icon: DeskIcons.NotebookDoodle,
    pos: { left: "20%", top: "61%" }, sway: 5.1, w: 134,
  },
  {
    id: "services", label: "services", Icon: DeskIcons.LaptopDoodle,
    pos: { left: "50%", top: "14%" }, sway: 3.6, w: 140,
  },
  {
    id: "now", label: "now", Icon: DeskIcons.CalendarDoodle,
    pos: { left: "18%", top: "25%" }, sway: 4.7, w: 120,
  },
  {
    id: "writing", label: "notes", Icon: DeskIcons.PapersDoodle,
    pos: { left: "76%", top: "61%" }, sway: 4.0, w: 128,
  },
  {
    id: "contact", label: "say hello", Icon: DeskIcons.MailboxDoodle,
    pos: { left: "50%", top: "82%" }, sway: 5.3, w: 118,
  },
];

// --- Decorative scatter (clouds, stars, etc) — purely atmospheric ---
const SCATTER = [
  { C: DeskIcons.TinyCloud, top: "9%", left: "24%", w: 38, rot: -6, op: 0.75 },
  { C: DeskIcons.TinyCloud, top: "18%", right: "29%", w: 30, rot: 8, op: 0.65 },
  { C: DeskIcons.TinyCloud, top: "76%", right: "39%", w: 30, rot: -4, op: 0.6 },
  { C: DeskIcons.TinyStar, top: "13%", left: "35%", w: 18, rot: 12, op: 0.85 },
  { C: DeskIcons.TinyStar, top: "69%", left: "32%", w: 18, rot: -8, op: 0.75 },
  { C: DeskIcons.TinyStar, top: "78%", right: "20%", w: 14, rot: 14, op: 0.75 },
  { C: DeskIcons.TinySparkle, top: "5%", left: "54%", w: 15, rot: 0, op: 0.75 },
  { C: DeskIcons.TinySparkle, top: "31%", right: "15%", w: 12, rot: 0, op: 0.65 },
  { C: DeskIcons.TinyHeart, top: "46%", left: "6%", w: 14, rot: -10, op: 0.75 },
  { C: DeskIcons.TinyHeart, top: "69%", left: "50%", w: 16, rot: 8, op: 0.8 },
  { C: DeskIcons.TinyHeart, top: "41%", right: "7%", w: 15, rot: 10, op: 0.75 },
  { C: DeskIcons.TinySquiggle, top: "38%", left: "31%", w: 32, rot: -4, op: 0.55 },
  { C: DeskIcons.TinySquiggle, top: "49%", right: "10%", w: 32, rot: 6, op: 0.55 },
  { C: DeskIcons.TinyDot, top: "27%", left: "29%", w: 6, op: 0.7 },
  { C: DeskIcons.TinyDot, top: "16%", right: "9%", w: 6, op: 0.65 },
  { C: DeskIcons.TinyDot, top: "67%", right: "31%", w: 6, op: 0.65 },
  { C: DeskIcons.TinyDot, top: "79%", left: "36%", w: 6, op: 0.65 },
  { C: DeskIcons.TinyPlant, bottom: "7%", left: "5%", w: 88, op: 0.85 },
];

// ===== Idle sway hook =====
function useIdleSway(period = 4) {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    let raf, start = performance.now();
    const tick = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return Math.sin((t / period) * Math.PI * 2);
}

// ===== Object on desk =====
function DeskObject({ obj, onOpen, isOpen }) {
  const sway = useIdleSway(obj.sway);
  const rot = sway * 1.6;
  const ty = sway * 1.8;
  const [hover, setHover] = React.useState(false);

  return (
    <button
      className={`desk-object desk-object-${obj.id} ${isOpen ? "is-open" : ""} ${hover ? "is-hover" : ""}`}
      style={{
        ...obj.pos,
        width: obj.w,
        transform: `translate(-50%, -50%) rotate(${rot}deg) translateY(${ty}px)`,
      }}
      onClick={() => onOpen(obj.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={obj.label}
    >
      <div className="desk-object-art">
        <obj.Icon />
      </div>
      <div className="desk-object-label">
        <span>{obj.label}</span>
        {hover && <span className="desk-object-arrow">↗</span>}
      </div>
    </button>
  );
}

// ===== Floating window =====
function FloatingWindow({ id, onClose, index }) {
  const Comp = window.WindowContent[id];
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState(null);
  const [drag, setDrag] = React.useState(null);

  React.useEffect(() => {
    // Place window in a thoughtful spot — center-ish, slightly offset per window
    const offset = index * 18;
    setPos({
      x: window.innerWidth / 2 - 320 + offset,
      y: 80 + offset,
    });
  }, []);

  const onPointerDown = (e) => {
    if (!pos) return;
    if (e.target.closest(".w-close, a, button, .window-body")) return;
    setDrag({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag) return;
    setPos({ x: e.clientX - drag.x, y: e.clientY - drag.y });
  };
  const onPointerUp = (e) => {
    setDrag(null);
    if (e.currentTarget.releasePointerCapture) {
      try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
    }
  };

  if (!Comp || !pos) return null;

  return (
    <div
      ref={ref}
      className="floating-window"
      style={{ left: pos.x, top: pos.y, zIndex: 50 + index }}
    >
      <div
        className="window-chrome"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="w-tape w-tape-l" />
        <div className="w-tape w-tape-r" />
        <button className="w-close" onClick={onClose} aria-label="close">
          <svg viewBox="0 0 20 20" width="14" height="14">
            <path d="M 5 5 L 15 15 M 15 5 L 5 15" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="window-inner">
        <Comp />
      </div>
    </div>
  );
}

// ===== Cursor trail =====
function CursorTrail() {
  const [dots, setDots] = React.useState([]);
  React.useEffect(() => {
    let lastX = 0, lastY = 0, idCounter = 0;
    const onMove = (e) => {
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      if (Math.hypot(dx, dy) < 22) return;
      lastX = e.clientX; lastY = e.clientY;
      const id = idCounter++;
      const variant = Math.floor(Math.random() * 3);
      setDots(d => [...d.slice(-12), { id, x: e.clientX, y: e.clientY, variant }]);
      setTimeout(() => {
        setDots(d => d.filter(p => p.id !== id));
      }, 900);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div className="cursor-trail">
      {dots.map(d => (
        <div key={d.id} className={`trail-dot trail-v${d.variant}`} style={{ left: d.x, top: d.y }}>
          {d.variant === 0 && <DeskIcons.TinyDot />}
          {d.variant === 1 && <DeskIcons.TinySparkle />}
          {d.variant === 2 && <DeskIcons.TinyStar />}
        </div>
      ))}
    </div>
  );
}

// ===== Status bar =====
function StatusBar({ soundOn, onToggleSound }) {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(i);
  }, []);
  const fmt = time.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "America/Mexico_City" });
  return (
    <div className="status-bar">
      <span className="status-dot" />
      <span>currently available · accepting Q1 2027 engagements</span>
      <span className="sep">·</span>
      <span>mexico city, {fmt}</span>
      <span className="sep">·</span>
      <button className="status-btn" onClick={onToggleSound}>
        {soundOn ? "♪ sound on" : "♪ sound off"}
      </button>
    </div>
  );
}

function NowReplacement() {
  return (
    <div className="now-image-replacement" aria-hidden="true">
      <div className="now-replacement-art"><DeskIcons.CalendarDoodle /></div>
      <div className="now-replacement-label">now</div>
    </div>
  );
}

function AboutPolaroid() {
  return (
    <div className="about-image-replacement" aria-hidden="true">
      <img
        className="about-generated-image"
        src="uploads/about-girl-reading-bold.png"
        alt="Girl reading an open book"
      />
      <svg className="about-cloud-doodle" viewBox="0 0 72 42" aria-hidden="true">
        <path d="M 14 28 C 8 28 6 21 12 18 C 14 10 25 9 29 15 C 34 5 50 8 52 19 C 61 18 66 25 61 31 C 58 34 51 34 45 34 L 18 34" />
      </svg>
    </div>
  );
}

function DeskFooterNote() {
  return (
    <div className="desk-footer-note" aria-hidden="true">
      <span>made with</span>
      <span className="footer-heart">♡</span>
      <span>and coffee</span>
      <span className="footer-tape" />
    </div>
  );
}

function PetCorner() {
  return (
    <div className="pet-corner" aria-hidden="true">
      <div className="pet-line" />
      <div className="pet pet-fluffy"><span /></div>
      <div className="pet pet-golden"><span /></div>
      <div className="pet pet-panda"><span /></div>
    </div>
  );
}

// ===== Ambient sound (subtle pink-noise loop via WebAudio) =====
function useAmbientSound(on) {
  const ctxRef = React.useRef(null);
  const nodeRef = React.useRef(null);
  React.useEffect(() => {
    if (!on) {
      if (nodeRef.current) {
        try { nodeRef.current.gain.gain.linearRampToValueAtTime(0, ctxRef.current.currentTime + 0.4); } catch {}
      }
      return;
    }
    if (!ctxRef.current) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      ctxRef.current = new Ctx();
    }
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    // pink-ish noise via biquad-filtered white noise
    const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const ch = buf.getChannelData(0);
    let b0=0,b1=0,b2=0;
    for (let i = 0; i < ch.length; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + w * 0.0990460;
      b1 = 0.96300 * b1 + w * 0.2965164;
      b2 = 0.57000 * b2 + w * 1.0526913;
      ch[i] = (b0 + b1 + b2 + w * 0.1848) * 0.08;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf; src.loop = true;

    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 700;
    const gain = ctx.createGain();
    gain.gain.value = 0; gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.6);

    src.connect(lp); lp.connect(gain); gain.connect(ctx.destination);
    src.start();

    nodeRef.current = { src, gain, lp };
    return () => {
      try { gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3); src.stop(ctx.currentTime + 0.4); } catch {}
    };
  }, [on]);
}

// ===== Tweaks (globals from tweaks-panel.jsx) =====
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "doodleStyle": "ink",
  "paperTone": "cream",
  "deskDensity": "balanced",
  "showScatter": true,
  "cursorTrail": true,
  "idleSway": true
}/*EDITMODE-END*/;

function App() {
  const [openOrder, setOpenOrder] = React.useState([]);
  const [soundOn, setSoundOn] = React.useState(false);
  useAmbientSound(soundOn);

  const [T, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const open = (id) => {
    setOpenOrder([id]);
  };
  const close = (id) => {
    setOpenOrder(o => o.filter(x => x !== id));
  };

  const filteredObjects = T.deskDensity === "sparse"
    ? DESK_OBJECTS.filter(o => ["about", "cases", "services", "contact"].includes(o.id))
    : DESK_OBJECTS;

  return (
    <div className={`app theme-${T.paperTone} doodle-${T.doodleStyle} ${T.idleSway ? "" : "no-sway"}`}>
      <div className="paper-grain" />

      {/* Decorative scatter */}
      {T.showScatter && (
        <div className="scatter-layer">
          {SCATTER.map((s, i) => {
            const { C, w, op = 0.7, rot = 0, ...pos } = s;
            return (
              <div
                key={i}
                className="scatter-item"
                style={{
                  ...pos,
                  width: w,
                  opacity: op,
                  transform: `rotate(${rot}deg)`,
                }}
              >
                <C />
              </div>
            );
          })}
        </div>
      )}

      {/* Centered intro */}
      <div className="hero-intro">
        <img
          className="hero-illustration"
          src="francys-illustration.png"
          alt="Francys, sitting cross-legged with a laptop and a mug"
        />
        <div className="hero-kicker">
          ✱ welcome to my corner of the internet
        </div>
        <h1 className="hero-headline">
          Hi, I'm <em>Francys</em>. I'm a <span className="hl">Lead Data Scientist</span> &amp; ML engineer who helps fintechs ship <em>production</em> machine learning — calmly, on Databricks, without the drama.
        </h1>
        <div className="hero-sub">
          click anything · drag the windows · stay a while
        </div>
      </div>

      <PetCorner />

      {/* Desk objects */}
      <div className="desk-layer">
        <NowReplacement />
        <AboutPolaroid />
        {filteredObjects.map(obj => (
          <DeskObject
            key={obj.id}
            obj={obj}
            onOpen={open}
            isOpen={openOrder.includes(obj.id)}
          />
        ))}
      </div>

      {/* Floating windows */}
      <div className="windows-layer">
        {openOrder.map((id, idx) => (
          <FloatingWindow key={id} id={id} index={idx} onClose={() => close(id)} />
        ))}
      </div>

      {/* Cursor trail */}
      {T.cursorTrail && <CursorTrail />}

      <DeskFooterNote />

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="aesthetic">
          <TweakSelect
            label="doodle style"
            value={T.doodleStyle}
            onChange={(v) => setTweak("doodleStyle", v)}
            options={[
              { value: "ink", label: "ink (default)" },
              { value: "pencil", label: "pencil" },
              { value: "marker", label: "marker" },
            ]}
          />
          <TweakSelect
            label="paper tone"
            value={T.paperTone}
            onChange={(v) => setTweak("paperTone", v)}
            options={[
              { value: "cream", label: "cream" },
              { value: "warm", label: "warm beige" },
              { value: "cool", label: "cool stone" },
            ]}
          />
          <TweakRadio
            label="desk density"
            value={T.deskDensity}
            onChange={(v) => setTweak("deskDensity", v)}
            options={["sparse", "balanced"]}
          />
        </TweakSection>
        <TweakSection label="motion">
          <TweakToggle label="cursor doodle trail" value={T.cursorTrail} onChange={(v) => setTweak("cursorTrail", v)} />
          <TweakToggle label="idle sway" value={T.idleSway} onChange={(v) => setTweak("idleSway", v)} />
          <TweakToggle label="decorative scatter" value={T.showScatter} onChange={(v) => setTweak("showScatter", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

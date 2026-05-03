function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Hand-drawn SVG objects. Single-stroke ink aesthetic.
// All drawn with rough, slightly imperfect lines — not vector-perfect.

const ink = "#1a1a1a";
const stroke = {
  stroke: ink,
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none"
};
const strokeFat = {
  ...stroke,
  strokeWidth: 2.2
};

// --- Notebook (Case Studies) ---
const NotebookDoodle = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 120 110",
  width: "100%",
  height: "100%"
}, /*#__PURE__*/React.createElement("path", {
  d: "M 18 92 Q 60 100 102 92",
  stroke: ink,
  strokeWidth: "0.8",
  fill: "none",
  opacity: "0.3",
  strokeDasharray: "2 3"
}), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 22 25 Q 24 22 28 22 L 92 22 Q 96 22 98 25 L 98 88 Q 96 91 92 91 L 28 91 Q 24 91 22 88 Z"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 22 25 Q 26 27 30 25 L 30 88 Q 26 90 22 88"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 40 38 L 88 39"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 40 48 L 86 49"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 40 58 L 88 58"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 40 68 L 80 69"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 40 78 L 84 78"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 92 22 Q 88 28 94 32"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 16 L 33 18 L 35 18 L 33.5 19.5 L 34 22 L 32 20.5 L 30 22 L 30.5 19.5 L 29 18 L 31 18 Z"
}, stroke)));

// --- Laptop / Terminal (Services) ---
const LaptopDoodle = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 130 110",
  width: "100%",
  height: "100%"
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 14 86 Q 14 82 18 82 L 112 82 Q 116 82 116 86 L 118 92 Q 118 95 114 95 L 16 95 Q 12 95 12 92 Z"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 56 88 L 74 88"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 22 24 Q 22 20 26 20 L 104 20 Q 108 20 108 24 L 108 80 Q 108 82 104 82 L 26 82 Q 22 82 22 80 Z"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 34 L 36 38 L 32 42"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 41 42 L 52 42"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 52 L 70 52"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 38 60 L 90 60"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 38 68 L 64 68"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 76 L 50 76"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 100 14 L 101 11 M 100 14 L 100 17 M 100 14 L 97 14 M 100 14 L 103 14"
}, stroke)));

// --- Self portrait (About) ---
const SelfPortraitDoodle = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 110 120",
  width: "100%",
  height: "100%"
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 28 38 Q 22 56 26 78 Q 30 84 36 86"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 82 38 Q 88 58 84 80 Q 80 86 74 88"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 44 Q 30 64 38 78 Q 48 88 60 86 Q 74 82 78 68 Q 80 50 76 40 Q 68 30 54 30 Q 40 30 32 44 Z"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 30 40 Q 36 22 56 22 Q 76 24 82 42"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 38 30 Q 42 24 50 24"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 64 24 Q 72 26 78 34"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 44 58 Q 46 56 48 58"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 64 58 Q 66 56 68 58"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 56 62 Q 55 68 58 70"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 50 75 Q 56 78 62 75"
}, stroke)), /*#__PURE__*/React.createElement("circle", {
  cx: "32",
  cy: "64",
  r: "1.4",
  fill: ink
}), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 36 88 Q 22 94 18 108"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 74 88 Q 88 94 92 108"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 92 32 L 93 28 M 92 32 L 92 36 M 92 32 L 88 32 M 92 32 L 96 32"
}, stroke)));

// --- Calendar (Now) ---
const CalendarDoodle = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 110 110",
  width: "100%",
  height: "100%"
}, /*#__PURE__*/React.createElement("circle", _extends({
  cx: "32",
  cy: "14",
  r: "3"
}, stroke)), /*#__PURE__*/React.createElement("circle", _extends({
  cx: "78",
  cy: "14",
  r: "3"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 17 L 32 24"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 78 17 L 78 24"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 18 22 Q 18 18 22 18 L 88 18 Q 92 18 92 22 L 92 96 Q 92 100 88 100 L 22 100 Q 18 100 18 96 Z"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 28 32 L 82 32"
}, stroke)), /*#__PURE__*/React.createElement("g", null, [0, 1, 2, 3, 4, 5, 6].map(c => [0, 1, 2, 3].map(r => /*#__PURE__*/React.createElement("circle", {
  key: `${c}-${r}`,
  cx: 28 + c * 9,
  cy: 44 + r * 12,
  r: "1",
  fill: ink
})))), /*#__PURE__*/React.createElement("ellipse", _extends({
  cx: "55",
  cy: "68",
  rx: "6",
  ry: "5"
}, stroke, {
  transform: "rotate(-8 55 68)"
})), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 30 90 Q 50 92 78 88"
}, stroke)));

// --- Papers stack (Writing) ---
const PapersDoodle = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 130 110",
  width: "100%",
  height: "100%"
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 28 28 L 90 22 L 96 80 L 32 86 Z"
}, stroke, {
  transform: "rotate(-6 60 55)"
})), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 26 32 L 92 28 L 94 86 L 28 88 Z"
}, stroke, {
  transform: "rotate(3 60 60)"
})), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 24 30 L 94 30 L 94 88 L 24 88 Z"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 42 L 84 42"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 50 L 86 50"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 58 L 78 58"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 66 L 84 66"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 32 74 L 70 74"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 100 16 L 116 22 L 112 32 L 96 26 Z"
}, strokeFat, {
  transform: "rotate(15 106 24)"
})), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 95 26 L 91 32"
}, strokeFat, {
  transform: "rotate(15 106 24)"
})), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 88 35 L 86 39"
}, stroke)));

// --- Mailbox (Contact) ---
const MailboxDoodle = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 110 120",
  width: "100%",
  height: "100%"
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 52 78 L 52 110"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 58 78 L 58 110"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 36 110 Q 55 113 76 110"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 18 38 Q 18 28 28 28 L 84 28 Q 92 28 92 38 L 92 76 Q 92 80 88 80 L 22 80 Q 18 80 18 76 Z"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 18 42 Q 18 32 28 32 L 84 32 Q 92 32 92 42"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 28 46 L 60 46 L 60 74 L 28 74 Z"
}, stroke)), /*#__PURE__*/React.createElement("circle", {
  cx: "55",
  cy: "60",
  r: "1.6",
  fill: ink
}), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 92 36 L 92 50"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 92 36 L 102 36 L 100 44 L 92 44"
}, strokeFat)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 64 42 L 86 42 L 86 56 L 64 56 Z"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 64 42 L 75 50 L 86 42"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 16 22 Q 14 18 18 16 Q 22 14 22 20 Q 22 14 26 16 Q 30 18 28 22 Q 24 28 22 30 Q 20 28 16 22 Z"
}, stroke)));

// --- Decorative scattered marks ---
const TinyStar = ({
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 20 20",
  width: "100%",
  height: "100%",
  style: style
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 10 2 L 11 8 L 17 9 L 12 12 L 14 18 L 10 14 L 6 18 L 8 12 L 3 9 L 9 8 Z"
}, stroke)));
const TinySparkle = ({
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 20 20",
  width: "100%",
  height: "100%",
  style: style
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 10 2 L 10 18 M 2 10 L 18 10 M 4 4 L 16 16 M 16 4 L 4 16"
}, stroke)));
const TinyHeart = ({
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 20 20",
  width: "100%",
  height: "100%",
  style: style
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 10 16 Q 4 12 4 7 Q 4 3 7 3 Q 9 3 10 6 Q 11 3 13 3 Q 16 3 16 7 Q 16 12 10 16 Z"
}, stroke)));
const TinyCloud = ({
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 30 18",
  width: "100%",
  height: "100%",
  style: style
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 6 14 Q 2 14 2 10 Q 2 7 5 7 Q 6 3 10 3 Q 14 2 16 6 Q 20 5 22 8 Q 26 8 26 12 Q 26 14 22 14 Z"
}, stroke)));
const TinySquiggle = ({
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 30 12",
  width: "100%",
  height: "100%",
  style: style
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 2 6 Q 6 2 10 6 Q 14 10 18 6 Q 22 2 28 6"
}, stroke)));
const TinyArrow = ({
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 40 30",
  width: "100%",
  height: "100%",
  style: style
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 4 20 Q 12 4 28 8 Q 32 9 34 14"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 30 10 L 34 14 L 30 18"
}, stroke)));
const TinyDot = ({
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 8 8",
  width: "100%",
  height: "100%",
  style: style
}, /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "1.4",
  fill: ink
}));
const TinyPlant = ({
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 30 40",
  width: "100%",
  height: "100%",
  style: style
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 15 38 Q 15 26 15 16"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 15 26 Q 6 22 4 14 Q 10 14 15 22"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 15 22 Q 24 18 26 10 Q 20 10 15 18"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 8 38 L 22 38"
}, strokeFat)));
const TinyMug = ({
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 30 30",
  width: "100%",
  height: "100%",
  style: style
}, /*#__PURE__*/React.createElement("path", _extends({
  d: "M 6 10 L 22 10 L 21 24 Q 20 26 14 26 Q 8 26 7 24 Z"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 22 13 Q 26 13 26 17 Q 26 21 22 21"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 11 5 Q 12 7 11 9"
}, stroke)), /*#__PURE__*/React.createElement("path", _extends({
  d: "M 15 4 Q 16 6 15 8"
}, stroke)));
window.Objects = {
  NotebookDoodle,
  LaptopDoodle,
  SelfPortraitDoodle,
  CalendarDoodle,
  PapersDoodle,
  MailboxDoodle,
  TinyStar,
  TinySparkle,
  TinyHeart,
  TinyCloud,
  TinySquiggle,
  TinyArrow,
  TinyDot,
  TinyPlant,
  TinyMug
};
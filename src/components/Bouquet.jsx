import { useMemo } from "react";
import { motion } from "framer-motion";
import { config } from "../config/birthdayConfig";
const REDS = ["#c8102e", "#e0354b", "#a30d28", "#d62839"];
const TYPES = ["rose", "rose", "tulip", "poppy", "rose", "daisy", "rose", "poppy"];
function Bloom({ type, c }) {
  const P = (n, rx, ry, dy, fill) => Array.from({ length: n }, (_, i) => <ellipse key={i} cx="0" cy={dy} rx={rx} ry={ry} fill={fill} transform={`rotate(${(360 / n) * i})`} />);
  if (type === "daisy") return <g>{P(8, 3.5, 8, -9, "#fbf5ea")}<circle r="5" fill="#e6c98f" /></g>;
  if (type === "tulip") return <g><ellipse rx="6" ry="13" fill={c} transform="rotate(-25)" /><ellipse rx="6" ry="13" fill={c} transform="rotate(25)" /><ellipse rx="6.5" ry="14" fill="#00000022" /><ellipse rx="5.5" ry="13" fill={c} /></g>;
  if (type === "poppy") return <g>{P(5, 8, 9, -6, c)}<circle r="4" fill="#2a1020" /></g>;
  return <g><circle r="15" fill={c} /><circle r="11" fill="#00000022" /><circle r="10" fill={c} /><path d="M-6 0a6 6 0 0 1 12 0a3 3 0 0 1-6 3" stroke="#00000044" fill="none" strokeWidth="1.5" /><circle r="3" fill="#ffffff33" /></g>;
}
export default function Bouquet() {
  const { reds, whites } = useMemo(() => {
    const ring = (sc, n, make, list) => { for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2 + (sc > 1 ? .1 : 0);
      const hx = 16 * Math.sin(t) ** 3, hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      list.push({ x: 200 + hx * 8 * sc, y: 150 - hy * 8 * sc, ...make(list.length) }); } };
    const r = [], w = [];
    [[.88, 22], [.66, 16], [.44, 10], [.22, 5], [.05, 1]].forEach(([s, n]) => ring(s, n, (j) => ({ type: ["rose", "rose", "tulip", "poppy"][j % 4], c: REDS[j % 4] }), r));
    [[1.12, 30], [1.34, 38]].forEach(([s, n]) => ring(s, n, (j) => ({ type: j % 3 === 0 ? "rose" : "daisy", c: "#fbf5ea" }), w));
    r.sort((a, b) => a.y - b.y); w.sort((a, b) => a.y - b.y);
    r.forEach((f, i) => (f.i = i)); w.forEach((f, i) => (f.i = r.length + i));
    return { reds: r, whites: w };
  }, []);
  return (
    <section id="bouquet" className="bg-night framed">
      <h2 className="font-serif text-3xl sm:text-5xl glow">{config.bouquet.title}</h2>
      <svg viewBox="0 0 400 400" className="w-full max-w-md mt-6" role="img" aria-label="A bouquet with a red heart of roses, tulips and poppies surrounded by white flowers">
        <defs><radialGradient id="hg"><stop offset="0" stopColor="#ff4d6d55" /><stop offset="1" stopColor="transparent" /></radialGradient></defs>
        <circle cx="200" cy="150" r="190" fill="url(#hg)" />
        <path d="M200 300 L200 350" stroke="#3f8f5a" strokeWidth="6" />
        {[[-60, 0], [60, 0]].map(([r], i) => <ellipse key={i} cx={200 + r * .6} cy="318" rx="8" ry="22" fill="#3f8f5a" transform={`rotate(${r * .5} ${200 + r * .6} 318)`} />)}
        <path d="M170 330 L230 330 L215 372 L185 372Z" fill="#e8b4c4" /><path d="M165 342q35 14 70 0" stroke="#e6c98f" strokeWidth="5" fill="none" />
        {[...whites, ...reds].map((f) => <g key={f.i} transform={`translate(${f.x} ${f.y})`}><motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 160, damping: 12, delay: f.i * .035 }}><Bloom type={f.type} c={f.c} /></motion.g></g>)}
      </svg>
      <motion.p className="font-serif text-xl sm:text-2xl max-w-md" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.5, duration: 1 }}>{config.bouquet.text}</motion.p>
      <a href="#music" className="mt-8 text-white/60 underline min-h-[44px] inline-flex items-center">One more thing ↓</a>
    </section>
  );
}

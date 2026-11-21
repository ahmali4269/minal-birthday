import { useMemo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
export default function StarBackground({ hearts = false, count }) {
  const small = typeof window !== "undefined" && window.innerWidth < 768;
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 6000], [0, -150]);
  const n = count ?? (small ? 35 : 70);
  const stars = useMemo(() => Array.from({ length: n }, () => ({
    l: Math.random() * 100, t: Math.random() * 100, s: Math.random() * 2.5 + 1, d: (Math.random() * 3 + 1.5) + "s" })), [n]);
  const floats = useMemo(() => Array.from({ length: small ? 5 : 10 }, () => ({
    l: Math.random() * 100, t: (Math.random() * 10 + 10) + "s", dl: (Math.random() * 10) + "s", c: Math.random() > .5 ? "💗" : "✦", z: Math.random() * 10 + 10 })), [small]);
  // Parallax only on larger screens and when motion is allowed; wrapper is oversized so drift never reveals edges.
  return (
    <motion.div className="absolute pointer-events-none" style={{ top: -160, bottom: -160, left: 0, right: 0, y: small || reduce ? 0 : y }} aria-hidden="true">
      {stars.map((s, i) => <span key={i} className="star" style={{ left: s.l + "%", top: s.t + "%", width: s.s, height: s.s, "--d": s.d }} />)}
      {hearts && floats.map((f, i) => <span key={i} className="floaty" style={{ left: f.l + "%", "--t": f.t, animationDelay: f.dl, fontSize: f.z, color: "#e8b4c4" }}>{f.c}</span>)}
    </motion.div>
  );
}

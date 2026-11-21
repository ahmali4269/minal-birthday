import { useMemo } from "react";
import { config } from "../config/birthdayConfig";
export default function Confetti({ count = 70 }) {
  const cols = Object.values(config.colors).slice(1);
  const bits = useMemo(() => Array.from({ length: count }, (_, i) => ({
    l: Math.random() * 100, t: (Math.random() * 3 + 3) + "s", dl: Math.random() * 1.2 + "s", c: cols[i % cols.length] })), [count]);
  return <div aria-hidden="true">{bits.map((b, i) => <span key={i} className="confetti" style={{ left: b.l + "%", background: b.c, "--t": b.t, animationDelay: b.dl }} />)}</div>;
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Smile, Zap, Heart, Sparkles, Star, Sun } from "lucide-react";
import { config } from "../config/birthdayConfig";
const ICONS = { Smile, Zap, Heart, Sparkles, Star, Sun };
// No layout-changing hover and no backdrop-blur: those caused the stray white hairline on neighbouring cards.
function Card({ c, i }) {
  const [hov, setHov] = useState(false);
  const [pin, setPin] = useState(false);
  const on = hov || pin;
  const Icon = ICONS[c.icon];
  return (
    <motion.button className="card text-left rounded-2xl p-6 min-h-[11rem] flex flex-col" aria-pressed={pin} onClick={() => setPin(!pin)} onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)}
      style={{ background: on ? "linear-gradient(145deg,#2a2160,#3b2a6b)" : "linear-gradient(145deg,#1a1850,#241d5c)", border: `1px solid ${on ? "#e6c98f99" : "#ffffff22"}`, boxShadow: on ? "0 0 36px #e8b4c455" : "none", transition: "border-color .3s, box-shadow .3s, background .3s", isolation: "isolate" }}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
      <motion.div animate={{ scale: on ? 1.15 : 1, rotate: on ? [0, -8, 8, 0] : 0 }} className="text-[#e6c98f] w-fit"><Icon size={34} /></motion.div>
      <h3 className="font-serif text-2xl mt-3">{c.title}</h3>
      <p className="mt-2 text-white/85 font-light transition-opacity duration-300" style={{ opacity: on ? 1 : 0 }}>{c.text}</p>
      {!on && <span className="mt-auto text-xs text-white/40">tap to reveal</span>}
    </motion.button>
  );
}
export default function SpecialCards() {
  return (
    <section id="cards" className="bg-night framed">
      <h2 className="font-serif text-3xl sm:text-5xl mb-10 glow">Little Things That Make You Special</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">{config.cards.map((c, i) => <Card key={c.title} c={c} i={i} />)}</div>
      <a href="#bouquet" className="mt-10 text-white/60 underline min-h-[44px] inline-flex items-center">One more thing ↓</a>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "./Confetti";
import { config } from "../config/birthdayConfig";
const CANDLES = [80, 110, 140];
function CakeBody() {
  return (
    <g>
      <rect x="45" y="72" width="130" height="40" rx="8" fill="#e8b4c4" /><path d="M45 82q10 14 20 0t20 0 20 0 20 0 20 0 20 0 10 0v-4H45z" fill="#fbf5ea" />
      <rect x="25" y="112" width="170" height="52" rx="10" fill="#b9a7e8" /><path d="M25 124q14 14 28 0t28 0 28 0 28 0 28 0 28 0v-6H25z" fill="#fbf5ea" />
      {[60, 110, 160].map((x) => <circle key={x} cx={x} cy="70" r="5" fill="#d62839" />)}
    </g>
  );
}
export default function WishSection() {
  const [st, setSt] = useState(0); // 0 candles lit, 1 wish made, 2 cake cut
  return (
    <section id="wish" className="bg-night framed">
      <h2 className="font-serif text-3xl sm:text-5xl glow">Before you go... make a wish.</h2>
      <p className="mt-3 text-white/70 max-w-sm">{st === 0 ? "Close your eyes, make a little wish, and blow out the candles." : st === 1 ? "Wish made. Now for the best part." : `The first slice is yours, ${config.name}. 🍰`}</p>
      <svg viewBox="0 0 340 210" className="w-full max-w-lg mt-6" role="img" aria-label="Birthday cake">
        <defs><clipPath id="cl"><rect x="0" y="0" width="110" height="210" /></clipPath><clipPath id="cr"><rect x="110" y="0" width="230" height="210" /></clipPath></defs>
        <ellipse cx="110" cy="170" rx="105" ry="12" fill="#e6c98f" /><ellipse cx="275" cy="172" rx="55" ry="9" fill="#fbf5ea" />
        <motion.g clipPath="url(#cl)" animate={{ x: st === 2 ? -7 : 0, rotate: st === 2 ? -1.5 : 0 }} transition={{ delay: 1, duration: .6 }}><CakeBody /></motion.g>
        <motion.g clipPath="url(#cr)" animate={{ x: st === 2 ? 7 : 0, rotate: st === 2 ? 1.5 : 0 }} transition={{ delay: 1, duration: .6 }}><CakeBody /></motion.g>
        {st < 2 && CANDLES.map((x, i) => (
          <g key={x}><rect x={x - 3} y="42" width="6" height="30" rx="2" fill="#fbf5ea" />
            <motion.ellipse cx={x} cy="33" rx="5" ry="9" fill="#ffd27a" style={{ transformOrigin: `${x}px 42px`, filter: "drop-shadow(0 0 8px #ffb947)" }} animate={st === 0 ? { scaleY: [1, 1.15, .95, 1], opacity: 1 } : { opacity: 0, scale: 0 }} transition={st === 0 ? { repeat: Infinity, duration: 1 + i * .2 } : { duration: .4 }} />
            {st === 1 && <motion.circle cx={x} cy="30" r="3" fill="#ffffff55" initial={{ y: 0, opacity: .8 }} animate={{ y: -40, opacity: 0 }} transition={{ duration: 1.6, delay: .2 }} />}</g>
        ))}
        {st === 2 && <>
          <motion.g initial={{ y: -90, opacity: 1 }} animate={{ y: [-90, 80, 80], opacity: [1, 1, 0] }} transition={{ duration: 1.3, times: [0, .6, 1] }}>
            <rect x="107" y="0" width="6" height="64" rx="2" fill="#dfe5ee" /><rect x="102" y="-22" width="16" height="24" rx="4" fill="#e6c98f" />
          </motion.g>
          <motion.g initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.3, duration: .9, type: "spring", damping: 14 }}>
            <rect x="248" y="150" width="54" height="16" fill="#b9a7e8" /><rect x="248" y="138" width="54" height="12" fill="#fbf5ea" /><rect x="248" y="122" width="54" height="16" fill="#e8b4c4" />
            <circle cx="262" cy="119" r="5" fill="#d62839" /><text x="286" y="136" fontSize="12" fill="#d62839">❤</text>
          </motion.g>
        </>}
      </svg>
      <div className="mt-6 min-h-[120px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          {st === 0 && <motion.button key="a" className="btn" exit={{ opacity: 0 }} onClick={() => setSt(1)}>Make My Wish ✨</motion.button>}
          {st === 1 && <motion.div key="b" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center"><p className="font-serif text-2xl sm:text-3xl max-w-lg glow mb-5">{config.wish[0]}</p><button className="btn" onClick={() => setSt(2)}>Cut the Cake 🔪</button></motion.div>}
          {st === 2 && <motion.div key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex flex-col items-center"><p className="text-white/85 max-w-lg">{config.wish[1]}</p><a href="#final" className="mt-6 text-white/60 underline min-h-[44px] inline-flex items-center">One last thing ↓</a></motion.div>}
        </AnimatePresence>
      </div>
      {st >= 1 && <Confetti key={st} count={st === 2 ? 110 : 80} />}
    </section>
  );
}

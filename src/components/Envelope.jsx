import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import { config } from "../config/birthdayConfig";
export default function Envelope({ onOpen }) {
  const [open, setOpen] = useState(false);
  const t = useRef();
  useEffect(() => () => clearTimeout(t.current), []);
  const go = () => { if (open) return; setOpen(true); t.current = setTimeout(onOpen, 2400); };
  const sparks = Array.from({ length: 16 }, (_, i) => ({ x: Math.cos(i * 0.4) * (60 + (i % 4) * 35), y: -50 - (i % 5) * 28 }));
  return (
    <motion.div className="fixed inset-0 z-40 bg-night flex flex-col items-center justify-center px-5 text-center" exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <StarBackground />
      <motion.div className="absolute top-8 right-8 w-12 h-12 rounded-full" style={{ background: "radial-gradient(circle at 35% 35%,#fbf5ea,#e6c98f)", boxShadow: "0 0 50px #e6c98f88" }} animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
      <h1 className="relative font-serif text-3xl sm:text-5xl glow">Someone has a little surprise for you...</h1>
      <p className="relative mt-3 text-white/70 font-light">Made with a little extra thought, just for you.</p>
      <motion.div className="relative mt-24 mb-14 w-72 h-48" animate={open ? { opacity: [1, 1, 0], scale: [1, 1, 1.15] } : {}} transition={{ duration: 2.4, times: [0, .75, 1] }}>
        <div className="absolute inset-0 rounded-md" style={{ background: "#c98fa6", zIndex: 1 }} />
        <motion.div className="absolute left-5 right-5 top-4 bottom-4 rounded flex flex-col items-center justify-center text-[#2a2540]" style={{ zIndex: 2, background: "#fbf5ea", border: "1px solid #e6c98f" }} animate={open ? { y: -110 } : { y: 0 }} transition={{ delay: .7, duration: .9, ease: "easeOut" }}>
          <span className="font-script text-3xl">For {config.name}</span><span className="text-[#d9566f]">❤</span>
        </motion.div>
        <div className="absolute inset-0 rounded-md" style={{ zIndex: 3, background: "linear-gradient(160deg,#f3c9d6,#d9b8e8)", clipPath: "polygon(0 0,50% 55%,100% 0,100% 100%,0 100%)" }} />
        <motion.div className="absolute left-0 right-0 top-0 h-[55%]" style={{ zIndex: 4, transformOrigin: "top", background: "linear-gradient(180deg,#e0a3ba,#e8b4c4)", clipPath: "polygon(0 0,100% 0,50% 100%)" }} animate={{ rotateX: open ? 180 : 0, opacity: open ? 0.6 : 1 }} transition={{ duration: .7 }} />
        {open && sparks.map((s, i) => <motion.span key={i} className="absolute left-1/2 top-1/3 w-2 h-2 rounded-full bg-[#e6c98f]" style={{ zIndex: 5, boxShadow: "0 0 12px #e6c98f" }} initial={{ x: 0, y: 0, opacity: 1 }} animate={{ x: s.x, y: s.y, opacity: 0 }} transition={{ duration: 1.4, delay: .6 }} />)}
      </motion.div>
      <button className="btn relative" onClick={go} disabled={open}>Open Your Surprise ✨</button>
      <button className="relative mt-4 text-sm text-white/50 underline min-h-[44px]" onClick={() => { clearTimeout(t.current); onOpen(); }}>Skip</button>
    </motion.div>
  );
}

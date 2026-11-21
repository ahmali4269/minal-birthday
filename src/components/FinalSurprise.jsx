import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import { config } from "../config/birthdayConfig";
export default function FinalSurprise({ onReplay }) {
  return (
    <section id="final" className="framed" style={{ background: "linear-gradient(180deg,#141a45,#4a2f6b 60%,#8d4a6b)" }}>
      <StarBackground hearts />
      <div className="relative max-w-xl">
        <motion.h2 className="font-script text-6xl sm:text-7xl glow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>One Last Thing...</motion.h2>
        {config.final.map((t, i) => <motion.p key={i} className="font-serif text-xl sm:text-2xl mt-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .5 + i * .6 }}>{t}</motion.p>)}
        <motion.p className="mt-8 text-white/80" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.6 }}>With warm wishes,<br /><span className="font-script text-4xl text-[#e6c98f]">{config.sender}</span></motion.p>
        <button className="btn mt-10" onClick={onReplay}>Replay Your Surprise ↺</button>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "../config/birthdayConfig";
export default function BirthdayLetter() {
  const [open, setOpen] = useState(false);
  return (
    <section id="letter" className="bg-night framed">
      <motion.h2 className="font-serif text-3xl sm:text-5xl mb-8 glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>A Little Note For You</motion.h2>
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.div key="closed" exit={{ opacity: 0, scale: .9 }} className="flex flex-col items-center">
            <div className="paper relative w-64 h-44 rounded-md bg-[#fbf5ea] flex items-center justify-center" style={{ boxShadow: "0 20px 60px #0008" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl" style={{ background: "radial-gradient(circle at 35% 30%,#d9566f,#8d2338)", boxShadow: "0 4px 14px #0007" }}>❤</div>
            </div>
            <button className="btn mt-8" onClick={() => setOpen(true)}>Read Your Little Letter</button>
          </motion.div>
        ) : (
          <motion.article key="open" initial={{ opacity: 0, scaleY: .1, y: 40 }} animate={{ opacity: 1, scaleY: 1, y: 0 }} transition={{ duration: .9 }} style={{ originY: 0, background: "repeating-linear-gradient(0deg,#fbf5ea,#fbf5ea 31px,#efe3cf 32px)", boxShadow: "0 20px 80px #0009" }} className="paper max-w-xl w-full rounded-md p-6 sm:p-10 text-left text-[#2a2540] border border-[#e6c98f]">
            {config.letter.map((p, i) => <motion.p key={i} className={`font-serif text-lg sm:text-xl leading-8 mb-4 ${i === 0 ? "italic" : ""}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 + i * .5 }}>{p}</motion.p>)}
            <motion.p className="font-script text-4xl text-[#8d3a5a] text-right" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.6 }}>— {config.sender} ❤️</motion.p>
          </motion.article>
        )}
      </AnimatePresence>
      <a href="#cards" className="mt-10 text-white/60 underline min-h-[44px] inline-flex items-center">Keep going ↓</a>
    </section>
  );
}

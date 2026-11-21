import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import Confetti from "./Confetti";
import { config } from "../config/birthdayConfig";
const FLAGS = ["#e8b4c4", "#b9a7e8", "#e6c98f", "#fbf5ea", "#e8b4c4", "#b9a7e8", "#e6c98f", "#fbf5ea", "#e8b4c4", "#b9a7e8", "#e6c98f", "#fbf5ea"];
const BALLOONS = [["4%", "30%", "#e0354b", "0s", false], ["14%", "42%", "#e8b4c4", "1s", true], ["86%", "34%", "#b9a7e8", ".5s", false], ["94%", "46%", "#e6c98f", "1.5s", true]];
const Taper = () => <div className="flex flex-col items-center mb-0"><span className="flame" /><div className="w-3 h-24 rounded-t bg-[#fbf5ea]" /></div>;
export default function BirthdayHero() {
  const words = `Happy Birthday, ${config.fullName}!`.split(" ");
  return (
    <section id="hero" className="bg-night framed warm">
      <StarBackground hearts />
      <Confetti count={40} />
      <div className="absolute top-0 inset-x-0 flex justify-around z-10" aria-hidden="true">{FLAGS.map((c, i) => <i key={i} className="flag" style={{ borderTopColor: c }} />)}</div>
      {BALLOONS.map(([l, t, c, d, h], i) => <span key={i} className={"balloon " + (h ? "hide-sm" : "")} style={{ left: l, top: t, background: `radial-gradient(circle at 35% 30%,#fff8,${c})`, animationDelay: d }} aria-hidden="true" />)}
      <div className="relative mt-6">
        <h1 className="font-serif text-4xl sm:text-7xl glow">
          {words.map((w, i) => <motion.span key={i} className="inline-block mr-3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 + i * .25 }}>{w}</motion.span>)}
        </h1>
        <motion.p className="mt-4 max-w-md mx-auto text-white/75 font-light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>Today, the world gets a little more beautiful because it's your day.</motion.p>
        <div className="mt-8 flex items-end justify-center gap-2 sm:gap-8">
          <Taper />
          <motion.div className="relative w-52 sm:w-64" animate={{ scale: [1, 1.04, 1] }} transition={{ repeat: Infinity, duration: 2.4 }}>
            <svg viewBox="0 0 200 190" className="w-full" aria-label="A glowing heart" style={{ filter: "drop-shadow(0 0 18px #ff4d6dcc)" }}>
              <motion.path d="M100 175 C20 120 5 60 50 38 C78 24 100 45 100 62 C100 45 122 24 150 38 C195 60 180 120 100 175Z" fill="#e0354b" stroke="#e6c98f" strokeWidth="2.5" initial={{ pathLength: 0, fillOpacity: 0 }} animate={{ pathLength: 1, fillOpacity: .35 }} transition={{ duration: 2.5, delay: .4 }} />
            </svg>
            <span className="absolute inset-0 flex flex-col items-center justify-center pt-2"><span className="font-script text-3xl sm:text-4xl text-[#fbf5ea]">{config.birthday}</span><span className="text-[10px] tracking-[.3em] text-[#e6c98f] mt-1">YOUR DAY</span></span>
          </motion.div>
          <Taper />
        </div>
        <div className="mx-auto h-5 w-full max-w-lg rounded-md" style={{ background: "linear-gradient(#fbf5ea,#e8b4c4)", boxShadow: "0 20px 50px #ffb94733" }} />
        <div className="mt-6"><a href="#letter" className="btn">There's more for you...</a></div>
      </div>
    </section>
  );
}

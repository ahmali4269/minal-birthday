import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Envelope from "./components/Envelope";
import BirthdayHero from "./components/BirthdayHero";
import BirthdayLetter from "./components/BirthdayLetter";
import SpecialCards from "./components/SpecialCards";
import MusicSection from "./components/MusicSection";
import WishSection from "./components/WishSection";
import FinalSurprise from "./components/FinalSurprise";
import Bouquet from "./components/Bouquet";

function Scene({ children }) {
  return <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.9, ease: "easeOut" }}>{children}</motion.div>;
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [run, setRun] = useState(0);
  // Replay: unmounting <main> resets every scene's state (letter, cards, candle, audio) and the envelope remounts fresh.
  const replay = () => { setOpened(false); setRun((r) => r + 1); window.scrollTo({ top: 0, behavior: "instant" }); };
  useEffect(() => {
    const v = opened ? "" : "hidden";
    document.body.style.overflow = v; document.documentElement.style.overflow = v;
  }, [opened]);
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!opened && <Envelope key={"e" + run} onOpen={() => setOpened(true)} />}</AnimatePresence>
      {opened && (
        <motion.main key={run} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Scene><BirthdayHero /></Scene><Scene><BirthdayLetter /></Scene><Scene><SpecialCards /></Scene>
          <Scene><Bouquet /></Scene>
          <Scene><MusicSection /></Scene><Scene><WishSection /></Scene><Scene><FinalSurprise onReplay={replay} /></Scene>
        </motion.main>
      )}
    </MotionConfig>
  );
}

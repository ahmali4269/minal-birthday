import { useRef, useState, useEffect } from "react";
import { Play, Pause, ExternalLink } from "lucide-react";
import { config } from "../config/birthdayConfig";
export default function MusicSection() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [broken, setBroken] = useState(!config.localAudioFile);
  useEffect(() => { const a = ref.current; return () => a?.pause(); }, []);
  const toggle = async () => {
    const a = ref.current; if (!a) return;
    try { if (a.paused) { await a.play(); } else a.pause(); } catch { setBroken(true); }
  };
  return (
    <section id="music" className="bg-night framed">
      <h2 className="font-serif text-2xl sm:text-4xl glow max-w-xl">Some feelings are better expressed through music...</h2>
      <p className="mt-3 text-white/70">A little song for your birthday.</p>
      <div className="mt-10 w-60 h-60 sm:w-72 sm:h-72 rounded-full flex items-center justify-center" style={{ background: "repeating-radial-gradient(circle,#111 0 3px,#1c1c2e 4px 6px)", boxShadow: "0 0 60px #b9a7e866", animation: playing ? "spin 4s linear infinite" : "none" }}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-[#0b1030] text-[10px] font-medium px-2" style={{ background: "linear-gradient(135deg,#e6c98f,#e8b4c4)" }}>{config.song.title}</div>
      </div>
      <h3 className="font-serif text-2xl mt-6">{config.song.title}</h3>
      <p className="text-white/60">{config.song.artist}</p>
      {!broken ? (
        <>
          <audio ref={ref} src={config.localAudioFile} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={() => { setPlaying(false); setBroken(true); }} />
          <button className="btn mt-6 inline-flex items-center gap-2" onClick={toggle} aria-label={playing ? "Pause song" : "Play song"}>{playing ? <Pause size={20} /> : <Play size={20} />}{playing ? "Pause" : "Play"}</button>
        </>
      ) : (
        <a className="btn mt-6 inline-flex items-center gap-2" href={config.musicUrl} target="_blank" rel="noopener noreferrer"><Play size={20} /> Play the song <ExternalLink size={16} /></a>
      )}
      {broken && config.localAudioFile && <p className="mt-3 text-xs text-white/50">The audio file couldn't be loaded, so here's a link instead.</p>}
      <a href="#wish" className="mt-10 text-white/60 underline min-h-[44px] inline-flex items-center">Almost there ↓</a>
    </section>
  );
}

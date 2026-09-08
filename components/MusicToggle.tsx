"use client";
import { useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        alert("Add your song as public/music.mp3 to enable music.");
      }
    }
  };
  return (
    <div className="music-wrap">
      <button onClick={toggle} className="music-btn" title="Play soft music">
        {playing ? "⏸ Pause our song" : "▶ Play our song"}
      </button>
      <audio ref={audioRef} loop src="/music.mp3" />
    </div>
  );
}

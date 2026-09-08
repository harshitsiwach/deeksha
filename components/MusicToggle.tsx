"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.7;
    let cancelled = false;

    const tryPlay = async () => {
      try {
        await a.play();
        if (!cancelled) {
          setPlaying(true);
          setBlocked(false);
        }
        return true;
      } catch {
        if (!cancelled) setBlocked(true);
        return false;
      }
    };

    // 1. Try immediately on open
    tryPlay();

    // 2. Browsers block sound before first tap — start on first interaction
    const onFirstGesture = () => {
      if (audioRef.current?.paused) tryPlay();
    };
    window.addEventListener("pointerdown", onFirstGesture, { once: false });
    window.addEventListener("touchend", onFirstGesture);
    window.addEventListener("keydown", onFirstGesture);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && audioRef.current?.paused && playing) tryPlay();
    });
    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("touchend", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
    };
  }, []);

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
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    }
  };

  return (
    <div className="music-wrap">
      <button
        onClick={toggle}
        className={`music-btn ${blocked && !playing ? "pulse" : ""}`}
        title="Our song"
      >
        {playing ? "⏸ Pause our song" : blocked ? "♥ Tap for our song" : "▶ Play our song"}
      </button>
      <audio ref={audioRef} loop autoPlay preload="auto" src="/music.mp3" />
    </div>
  );
}

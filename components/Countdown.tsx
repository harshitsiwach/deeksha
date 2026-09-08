"use client";
import { useEffect, useState } from "react";

function diffParts(targetISO: string) {
  const t = new Date(targetISO).getTime();
  const now = Date.now();
  let ms = t - now;
  const past = ms <= 0;
  ms = Math.abs(ms);
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return { d, h, m, s, past };
}

export default function Countdown({
  targetISO,
  variant,
  landedText,
}: {
  targetISO: string;
  variant: "romantic" | "sad";
  landedText: string;
}) {
  const [p, setP] = useState(() => diffParts(targetISO));
  useEffect(() => {
    const i = setInterval(() => setP(diffParts(targetISO)), 1000);
    return () => clearInterval(i);
  }, [targetISO]);

  if (p.past) {
    return (
      <div className={`countdown landed ${variant}`}>
        <div className="landed-big">{landedText}</div>
        <div className="landed-sub">
          {variant === "romantic" ? "She's home. Hold her close. 🤍" : "She's on her way. Miss her softly. 🌙"}
        </div>
      </div>
    );
  }

  const cells = [
    { v: p.d, l: "days" },
    { v: p.h, l: "hours" },
    { v: p.m, l: "mins" },
    { v: p.s, l: "secs" },
  ];
  return (
    <div className={`countdown ${variant}`}>
      {cells.map((c) => (
        <div key={c.l} className="cell">
          <div className="num">{String(c.v).padStart(2, "0")}</div>
          <div className="lbl">{c.l}</div>
        </div>
      ))}
    </div>
  );
}

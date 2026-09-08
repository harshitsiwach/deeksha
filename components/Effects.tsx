"use client";
import { useEffect, useRef } from "react";

export function HeartsCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = c.offsetWidth);
    let h = (c.height = c.offsetHeight);
    const onR = () => {
      w = c.width = c.offsetWidth;
      h = c.height = c.offsetHeight;
    };
    window.addEventListener("resize", onR);
    const parts = Array.from({ length: 45 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      s: 8 + Math.random() * 16,
      v: 0.4 + Math.random() * 1.1,
      o: 0.25 + Math.random() * 0.55,
      ph: Math.random() * Math.PI * 2,
    }));
    let raf = 0;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y -= p.v;
        p.x += Math.sin(t / 900 + p.ph) * 0.4;
        if (p.y < -30) {
          p.y = h + 20;
          p.x = Math.random() * w;
        }
        ctx.globalAlpha = p.o;
        ctx.font = `${p.s}px serif`;
        ctx.fillText(Math.random() > 0.5 ? "♥" : "✿", p.x, p.y);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onR);
    };
  }, []);
  return <canvas ref={ref} className="fx-canvas" aria-hidden />;
}

export function RainCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = c.offsetWidth);
    let h = (c.height = c.offsetHeight);
    const onR = () => {
      w = c.width = c.offsetWidth;
      h = c.height = c.offsetHeight;
    };
    window.addEventListener("resize", onR);
    const drops = Array.from({ length: 110 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      l: 10 + Math.random() * 18,
      v: 4 + Math.random() * 6,
      o: 0.15 + Math.random() * 0.3,
    }));
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.2;
      for (const d of drops) {
        d.y += d.v;
        if (d.y > h) {
          d.y = -20;
          d.x = Math.random() * w;
        }
        ctx.globalAlpha = d.o;
        ctx.strokeStyle = "#9fb6d8";
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 2, d.y + d.l);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onR);
    };
  }, []);
  return <canvas ref={ref} className="fx-canvas" aria-hidden />;
}

"use client";
import { useEffect, useRef, type RefObject } from "react";

function useCanvasSize(ref: RefObject<HTMLCanvasElement>) {
  const size = () => {
    const c = ref.current;
    if (!c || !c.parentElement) return { w: 0, h: 0 };
    const r = c.parentElement.getBoundingClientRect();
    const w = Math.max(1, Math.floor(r.width));
    const h = Math.max(1, Math.floor(r.height));
    // Cap DPR at 2 for perf, 1 on small screens
    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 560 ? 1 : 2);
    c.width = Math.floor(w * dpr);
    c.height = Math.floor(h * dpr);
    const ctx = c.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w, h };
  };
  return size;
}

export function HeartsCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const getSize = useCanvasSize(ref);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let { w, h } = getSize();
    const isMobile = window.innerWidth < 560;
    const onR = () => {
      const s = getSize();
      w = s.w;
      h = s.h;
    };
    window.addEventListener("resize", onR);
    window.addEventListener("orientationchange", onR);
    const COUNT = isMobile ? 22 : 45;
    const parts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * Math.max(w, 320),
      y: Math.random() * Math.max(h, 600),
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
      window.removeEventListener("orientationchange", onR);
    };
  }, []);
  return <canvas ref={ref} className="fx-canvas" aria-hidden />;
}

export function RainCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const getSize = useCanvasSize(ref);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let { w, h } = getSize();
    const isMobile = window.innerWidth < 560;
    const onR = () => {
      const s = getSize();
      w = s.w;
      h = s.h;
    };
    window.addEventListener("resize", onR);
    window.addEventListener("orientationchange", onR);
    const COUNT = isMobile ? 55 : 110;
    const drops = Array.from({ length: COUNT }, () => ({
      x: Math.random() * Math.max(w, 320),
      y: Math.random() * Math.max(h, 600),
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
      window.removeEventListener("orientationchange", onR);
    };
  }, []);
  return <canvas ref={ref} className="fx-canvas" aria-hidden />;
}

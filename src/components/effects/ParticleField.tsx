"use client";

import { useEffect, useRef } from "react";

const COLORS = ["16,185,129", "245,158,11", "251,113,133", "20,184,166", "52,211,153"];
const LINK_DIST = 130;
const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
const MOUSE_PULL = 240;
const MOUSE_PULL_SQ = MOUSE_PULL * MOUSE_PULL;

type P = {
  x: number; y: number;
  vx: number; vy: number;
  s: number; o: number;
  c: string; ps: number; po: number;
};

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1, y: -1 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf: number | null = null;
    let pts: P[] = [];
    let cols = 0, rows = 0;
    let running = false;
    let frame = 0;
    const grid: P[][] = [];

    // Only draw connecting lines on larger viewports
    const drawLines = window.innerWidth >= 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / LINK_DIST) + 1;
      rows = Math.ceil(canvas.height / LINK_DIST) + 1;
      grid.length = cols * rows;
      for (let i = 0; i < grid.length; i++) grid[i] = [];
    };

    const init = () => {
      // ~1 particle per 18px of width, cap at 70
      const n = Math.min(70, Math.floor(window.innerWidth / 18));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        s: Math.random() * 2.2 + 0.4,
        o: Math.random() * 0.55 + 0.2,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
        ps: Math.random() * 2 + 1,
        po: Math.random() * Math.PI * 2,
      }));
    };

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    let t = 0;

    const draw = () => {
      if (!running) { raf = null; return; }
      raf = requestAnimationFrame(draw);

      // Run physics every frame but only redraw every other (effective ~30fps)
      frame++;
      const skipRender = frame % 2 === 0;

      t += 0.016;
      const { x: mx, y: my } = mouseRef.current;

      // Clear grid cells
      for (let i = 0; i < grid.length; i++) grid[i].length = 0;

      // Update particles
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (mx >= 0) {
          const dx = mx - p.x, dy = my - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_PULL_SQ && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = (MOUSE_PULL - d) / MOUSE_PULL;
            p.vx += (dx / d) * f * 0.03;
            p.vy += (dy / d) * f * 0.03;
          }
        }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (drawLines) {
          const cx = p.x < 0 ? 0 : p.x >= canvas.width ? cols - 1 : (p.x / LINK_DIST) | 0;
          const cy = p.y < 0 ? 0 : p.y >= canvas.height ? rows - 1 : (p.y / LINK_DIST) | 0;
          grid[cy * cols + cx].push(p);
        }
      }

      if (skipRender) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particle dots
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const pulse = Math.sin(t * p.ps + p.po) * 0.35 + 0.65;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${p.o * pulse})`;
        ctx.fill();
      }

      // Draw connecting lines via spatial grid (only check same + forward neighbors to avoid dup pairs)
      if (drawLines) {
        ctx.lineWidth = 0.6;
        ctx.strokeStyle = "rgba(16,185,129,0.1)";
        for (let cy = 0; cy < rows; cy++) {
          for (let cx = 0; cx < cols; cx++) {
            const cell = grid[cy * cols + cx];
            if (cell.length === 0) continue;
            for (let dy = 0; dy <= 1; dy++) {
              const ny = cy + dy;
              if (ny >= rows) continue;
              const xStart = dy === 0 ? 0 : -1;
              for (let dx = xStart; dx <= 1; dx++) {
                const nx = cx + dx;
                if (nx < 0 || nx >= cols) continue;
                const nb = grid[ny * cols + nx];
                if (nb.length === 0) continue;
                const sameCell = dx === 0 && dy === 0;
                for (let i = 0; i < cell.length; i++) {
                  const p = cell[i];
                  const jStart = sameCell ? i + 1 : 0;
                  for (let j = jStart; j < nb.length; j++) {
                    const q = nb[j];
                    const ddx = p.x - q.x, ddy = p.y - q.y;
                    const d2 = ddx * ddx + ddy * ddy;
                    if (d2 < LINK_DIST_SQ) {
                      const op = (1 - Math.sqrt(d2) / LINK_DIST) * 0.1;
                      ctx.globalAlpha = op;
                      ctx.beginPath();
                      ctx.moveTo(p.x, p.y);
                      ctx.lineTo(q.x, q.y);
                      ctx.stroke();
                    }
                  }
                }
              }
            }
          }
        }
        ctx.globalAlpha = 1;
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      if (raf !== null) { cancelAnimationFrame(raf); raf = null; }
    };

    resize();
    init();
    start();

    // Pause when off-screen
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) start(); else stop(); },
      { threshold: 0 }
    );
    if (canvas.parentElement) io.observe(canvas.parentElement);

    // Pause when tab hidden
    const onVisibility = () => { if (document.hidden) stop(); else start(); };
    const onResize = () => { resize(); init(); };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.85 }} />;
}

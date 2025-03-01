"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only desktop with a fine pointer — skip touch devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)").matches) return;
    setEnabled(true);

    const dot = dotRef.current;
    if (!dot) return;

    let tx = 0, ty = 0, x = 0, y = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };

    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      dot.style.transform = `translate3d(${x - 8}px, ${y - 8}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary/60 pointer-events-none z-[9999]"
      style={{ filter: "blur(2px)" }}
    />
  );
}

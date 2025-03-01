"use client";

import { useEffect, useState } from "react";

const SECTION_COLORS: Record<string, string> = {
  home: "16,185,129",
  about: "20,184,166",
  insights: "52,211,153",
  skills: "245,158,11",
  code: "16,185,129",
  projects: "251,113,133",
  experience: "245,158,11",
  contact: "20,184,166",
};

const IDS = Object.keys(SECTION_COLORS);

export default function AmbientTheme() {
  const [color, setColor] = useState("16,185,129");

  useEffect(() => {
    let raf: number | null = null;

    const detect = () => {
      raf = null;
      const threshold = window.innerHeight * 0.35;
      let active = IDS[0];
      for (const id of IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) active = id;
      }
      const next = SECTION_COLORS[active];
      setColor(prev => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (raf !== null) return;
      raf = requestAnimationFrame(detect);
    };

    detect();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none transition-[background] duration-[1500ms] ease-out"
        style={{
          background: `radial-gradient(ellipse at 50% 25%, rgba(${color}, 0.07) 0%, transparent 60%)`,
          zIndex: 1,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none transition-[background] duration-[1500ms] ease-out"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, rgba(${color}, 0.04) 0%, transparent 50%)`,
          zIndex: 1,
        }}
      />
    </>
  );
}

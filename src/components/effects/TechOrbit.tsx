"use client";

import { SiOpenjdk, SiSpring, SiDocker, SiPostgresql } from "react-icons/si";
import { FiZap, FiCloud, FiMapPin } from "react-icons/fi";
import type { IconType } from "react-icons";

type Logo = { Icon: IconType; color: string; tooltip: string };

const RINGS: Array<{ radius: number; duration: number; reverse?: boolean; logos: Logo[] }> = [
  {
    radius: 78,
    duration: 18,
    logos: [
      { Icon: SiOpenjdk, color: "text-amber-300 border-amber-500/30 bg-amber-500/5", tooltip: "Java 17" },
      { Icon: SiSpring, color: "text-primary border-primary/30 bg-primary/5", tooltip: "Spring" },
    ],
  },
  {
    radius: 118,
    duration: 26,
    reverse: true,
    logos: [
      { Icon: FiZap, color: "text-accent-coral border-accent-coral/30 bg-accent-coral/5", tooltip: "Kafka" },
      { Icon: SiDocker, color: "text-sky-400 border-sky-500/30 bg-sky-500/5", tooltip: "Docker" },
      { Icon: FiCloud, color: "text-accent-amber border-accent-amber/30 bg-accent-amber/5", tooltip: "AWS" },
      { Icon: SiPostgresql, color: "text-accent-teal border-accent-teal/30 bg-accent-teal/5", tooltip: "PostgreSQL" },
    ],
  },
];

export default function TechOrbit() {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Orbit guide rings */}
      <div className="absolute w-[156px] h-[156px] rounded-full border border-dashed border-primary/[0.08]" />
      <div className="absolute w-[236px] h-[236px] rounded-full border border-dashed border-accent-amber/[0.06]" />

      {/* Center pulse (CSS) */}
      <div className="hero-center-pulse absolute w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

      {/* Center: SK + location */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-7xl sm:text-8xl font-black gradient-text select-none tracking-tighter">SK</span>
        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono mt-2">
          <FiMapPin size={11} className="text-accent-coral/60" />
          Frisco, TX
        </div>
      </div>

      {/* Orbiting tech logos — rotation is CSS, counter-rotation is CSS */}
      {RINGS.map((ring, ri) => (
        <div
          key={ri}
          className={`${ring.reverse ? "spin-ccw" : "spin-cw"} absolute inset-0`}
          style={{ ["--dur" as string]: `${ring.duration}s` }}
        >
          {ring.logos.map((logo, i) => {
            const angle = (i / ring.logos.length) * 360 + ri * 25;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{ transform: `rotate(${angle}deg) translateY(-${ring.radius}px)` }}
              >
                <div
                  className={`${ring.reverse ? "spin-cw" : "spin-ccw"}`}
                  style={{ ["--dur" as string]: `${ring.duration}s` }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2">
                    <div
                      title={logo.tooltip}
                      className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl border backdrop-blur-md flex items-center justify-center cursor-default transition-transform duration-300 hover:scale-125 hover:shadow-glow ${logo.color}`}
                    >
                      <logo.Icon size={18} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

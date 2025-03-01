"use client";

import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { viewport } from "@/lib/motion";

const places = [
  { name: "Hyderabad", role: "Origin · India", x: 75, y: 36, color: "primary" },
  { name: "Houston", role: "MD Anderson · TX", x: 48, y: 36, color: "amber" },
  { name: "Irving", role: "Current · TX", x: 20, y: 36, color: "coral" },
];

const colorMap: Record<string, { dot: string; ring: string; text: string; rgb: string }> = {
  primary: { dot: "fill-emerald-400", ring: "stroke-emerald-400", text: "text-primary-light", rgb: "16,185,129" },
  amber: { dot: "fill-amber-400", ring: "stroke-amber-400", text: "text-accent-amber", rgb: "245,158,11" },
  coral: { dot: "fill-rose-400", ring: "stroke-rose-400", text: "text-accent-coral", rgb: "251,113,133" },
};

export default function LocationsMap() {
  return (
    <div className="relative h-full rounded-2xl glass p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent-coral/[0.03] pointer-events-none" />

      <div className="relative flex items-center gap-2 mb-4">
        <FiMapPin size={14} className="text-primary/60" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">Journey</span>
        <div className="flex-1 h-px bg-gradient-to-r from-dark-border to-transparent" />
      </div>

      <div className="relative">
        <svg viewBox="0 0 100 60" className="w-full h-auto">
          <defs>
            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(16,185,129,0.05)" strokeWidth="0.1" />
            </pattern>
            <linearGradient id="path-gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fb7185" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <rect width="100" height="60" fill="url(#grid)" />

          {/* Stylized continents */}
          <ellipse cx="20" cy="34" rx="14" ry="11" fill="rgba(16,185,129,0.045)" />
          <ellipse cx="50" cy="36" rx="8" ry="13" fill="rgba(16,185,129,0.045)" />
          <ellipse cx="75" cy="38" rx="14" ry="10" fill="rgba(16,185,129,0.045)" />

          {/* Connecting path */}
          <motion.path
            d={`M ${places[0].x} ${places[0].y} Q 62 24 ${places[1].x} ${places[1].y} Q 34 24 ${places[2].x} ${places[2].y}`}
            fill="none"
            stroke="url(#path-gradient)"
            strokeWidth="0.45"
            strokeDasharray="1.5 1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewport}
            transition={{ duration: 2.8, ease: "easeInOut" }}
          />

          {/* Markers */}
          {places.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <g key={p.name}>
                <motion.circle
                  cx={p.x} cy={p.y} r="1.8"
                  className={`${c.ring} fill-transparent`}
                  strokeWidth="0.3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0.8, 0, 0.8], scale: [1, 2.2, 1] }}
                  viewport={viewport}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                  style={{ transformOrigin: 'center' }}
                />
                <motion.circle
                  cx={p.x} cy={p.y} r="0.9"
                  className={c.dot}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewport}
                  transition={{ delay: 0.5 + i * 0.3, type: "spring" }}
                  style={{ transformOrigin: 'center', filter: `drop-shadow(0 0 4px rgba(${c.rgb},0.7))` }}
                />
              </g>
            );
          })}
        </svg>

        <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
          {places.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.9 + i * 0.15 }}
                className="text-center"
              >
                <div className={`font-semibold ${c.text}`}>{p.name}</div>
                <div className="text-[10px] text-slate-600 font-mono mt-0.5">{p.role}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

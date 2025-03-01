"use client";

import { FiGithub } from "react-icons/fi";

const WEEKS = 53;
const DAYS = 7;

function level(i: number): number {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  const r = x - Math.floor(x);
  if (r < 0.4) return 0;
  if (r < 0.62) return 1;
  if (r < 0.82) return 2;
  if (r < 0.94) return 3;
  return 4;
}

const intensity = [
  "bg-dark-200/60 border-dark-border/30",
  "bg-primary/15 border-primary/20",
  "bg-primary/35 border-primary/30",
  "bg-primary/60 border-primary/50",
  "bg-primary/90 border-primary/70 shadow-[0_0_6px_rgba(16,185,129,0.4)]",
];

const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];

export default function GitHubHeatmap() {
  const cells = Array.from({ length: WEEKS * DAYS }, (_, i) => level(i));
  const totalActive = cells.filter(l => l > 0).length;

  return (
    <div className="relative h-full rounded-2xl glass p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.025] via-transparent to-accent-amber/[0.02] pointer-events-none" />

      <div className="relative flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-2">
          <FiGithub size={14} className="text-primary/70" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">Contributions</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-600">
          <span>Less</span>
          {intensity.map((cls, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-sm border ${cls}`} />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-between text-[9px] font-mono text-slate-700 mb-1.5 px-1">
          {months.map(m => <span key={m}>{m}</span>)}
        </div>

        <div className="overflow-x-auto">
          <div
            className="inline-grid gap-[3px]"
            style={{
              gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))`,
              gridAutoFlow: "column",
              gridAutoColumns: "11px",
            }}
          >
            {cells.map((l, i) => {
              const week = Math.floor(i / DAYS);
              const day = i % DAYS;
              return (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-sm border opacity-0 ${intensity[l]}`}
                  style={{
                    animation: `fadeIn 0.5s ease-out forwards`,
                    animationDelay: `${week * 8 + day * 3}ms`,
                  }}
                  title={`Level ${l}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-5 flex justify-between items-center text-[10px] font-mono text-slate-500 border-t border-dark-border/30 pt-3">
        <span><span className="text-primary-light font-semibold">{totalActive}</span> active days · last year</span>
        <span className="text-slate-600">commit cadence</span>
      </div>
    </div>
  );
}

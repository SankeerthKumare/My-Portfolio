"use client";

const variants = {
  1: (
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
      <path d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z" fill="url(#wave1)" fillOpacity="0.06" />
      <path d="M0 80C200 40 400 100 600 70C800 40 1000 100 1200 70C1300 55 1400 80 1440 80V120H0V80Z" fill="url(#wave1)" fillOpacity="0.03" />
      <defs>
        <linearGradient id="wave1" x1="0" y1="0" x2="1440" y2="0">
          <stop stopColor="#10b981" />
          <stop offset="0.5" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#fb7185" />
        </linearGradient>
      </defs>
    </svg>
  ),
  2: (
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
      <path d="M0 50C360 90 720 10 1080 50C1260 70 1380 30 1440 50V100H0V50Z" fill="url(#wave2)" fillOpacity="0.05" />
      <path d="M0 70C300 30 600 90 900 50C1100 30 1300 70 1440 60V100H0V70Z" fill="url(#wave2)" fillOpacity="0.03" />
      <defs>
        <linearGradient id="wave2" x1="0" y1="0" x2="1440" y2="0">
          <stop stopColor="#f59e0b" />
          <stop offset="0.5" stopColor="#fb7185" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
      </defs>
    </svg>
  ),
  3: (
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
      <path d="M0 40C180 70 360 10 540 40C720 70 900 10 1080 40C1260 70 1380 20 1440 40V80H0V40Z" fill="url(#wave3)" fillOpacity="0.06" />
      <defs>
        <linearGradient id="wave3" x1="0" y1="0" x2="1440" y2="0">
          <stop stopColor="#14b8a6" />
          <stop offset="0.5" stopColor="#10b981" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

export default function WaveDivider({ variant = 1 }: { variant?: 1 | 2 | 3 }) {
  return (
    <div className="relative w-full h-16 sm:h-20 -my-1 select-none pointer-events-none overflow-hidden">
      {variants[variant]}
    </div>
  );
}

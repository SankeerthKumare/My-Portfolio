"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  to,
  suffix = "",
  duration = 1600,
  format = "plain",
}: {
  to: number;
  suffix?: string;
  duration?: number;
  format?: "plain" | "locale";
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = () => {
          const p = Math.min((performance.now() - start) / duration, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.8 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {format === "locale" ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
}

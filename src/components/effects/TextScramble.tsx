"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

export default function TextScramble({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    let frame = 0;
    const totalFrames = 20;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i / text.length < progress) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (frame >= totalFrames) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [inView, text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

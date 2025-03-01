"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  texts,
  typeSpeed = 65,
  deleteSpeed = 25,
  holdMs = 2500,
}: {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
}) {
  const [display, setDisplay] = useState("");
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = texts[ti];
    const timeout = setTimeout(() => {
      if (!del) {
        setDisplay(cur.slice(0, ci + 1));
        setCi(c => c + 1);
        if (ci + 1 >= cur.length) setTimeout(() => setDel(true), holdMs);
      } else {
        setDisplay(cur.slice(0, ci - 1));
        setCi(c => c - 1);
        if (ci <= 1) {
          setDel(false);
          setTi(t => (t + 1) % texts.length);
        }
      }
    }, del ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [ci, del, ti, texts, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span>
      {display}
      <span className="text-primary animate-pulse">|</span>
    </span>
  );
}

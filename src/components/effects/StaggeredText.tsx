"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export default function StaggeredText({
  text,
  className,
  delay = 0,
  gap = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  gap?: number;
}) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 80, rotateX: 90, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: delay + i * gap, ease: ease.out }}
          className={`inline-block ${className ?? ""}`}
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

"use client";

import { MotionConfig } from "framer-motion";
import { ease } from "@/lib/motion";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig transition={{ ease: ease.out, duration: 0.6 }} reducedMotion="user">
      {children}
    </MotionConfig>
  );
}

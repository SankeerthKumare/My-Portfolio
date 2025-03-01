"use client";

import { motion } from "framer-motion";
import LocationsMap from "@/components/effects/LocationsMap";
import GitHubHeatmap from "@/components/effects/GitHubHeatmap";
import { viewport } from "@/lib/motion";

export default function InsightsBand() {
  return (
    <section id="insights" className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-accent-teal/3 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <LocationsMap />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <GitHubHeatmap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

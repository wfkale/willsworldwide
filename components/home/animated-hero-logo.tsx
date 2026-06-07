"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/ui/brand-logo";
import { usePauseWhenHidden } from "@/hooks/use-pause-when-hidden";

function RouteArcs({ reduced }: { reduced: boolean }) {
  if (reduced) return null;

  const arcs = [
    "M 30 100 Q 55 40 100 30",
    "M 30 100 Q 70 100 110 85",
    "M 30 100 Q 45 145 95 155",
  ];

  return (
    <svg
      viewBox="0 0 140 180"
      className="pointer-events-none absolute left-[2%] top-1/2 h-[clamp(6rem,55%,14rem)] w-[clamp(4rem,38%,10rem)] -translate-y-1/2 opacity-70"
      aria-hidden
    >
      <defs>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {arcs.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6 5"
          className="hero-route-arc"
          style={{ animationDelay: `${0.8 + i * 0.4}s` }}
        />
      ))}
    </svg>
  );
}

export function AnimatedHeroLogo() {
  const reduced = useReducedMotion();
  const { ref, paused } = usePauseWhenHidden<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative inline-flex w-full max-w-[min(92vw,38rem)] items-center justify-center px-2 py-2 ${
        paused ? "motion-paused" : ""
      }`}
    >
      <div className="hero-logo-glow pointer-events-none absolute inset-0 rounded-full" />

      {!reduced && <RouteArcs reduced={!!reduced} />}

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={reduced ? "" : "hero-logo-float"}>
          <BrandLogo variant="hero" priority />
        </div>
      </motion.div>

      {!reduced && (
        <div className="hero-orbit pointer-events-none absolute left-[14%] top-1/2 h-[clamp(3.5rem,28vw,8rem)] w-[clamp(3.5rem,28vw,8rem)] -translate-x-1/2 -translate-y-1/2">
          <span className="hero-orbit-dot absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-orange shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
        </div>
      )}
    </div>
  );
}

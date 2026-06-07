"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/ui/brand-logo";

function RouteArcs({ reduced }: { reduced: boolean }) {
  if (reduced) return null;

  const arcs = [
    { d: "M 30 100 Q 55 40 100 30", delay: 0 },
    { d: "M 30 100 Q 70 100 110 85", delay: 0.4 },
    { d: "M 30 100 Q 45 145 95 155", delay: 0.8 },
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
      {arcs.map((arc, i) => (
        <motion.path
          key={i}
          d={arc.d}
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.35, 0.85, 0.35], strokeDashoffset: [0, -22] }}
          transition={{
            pathLength: { duration: 1.4, delay: 0.3 + arc.delay, ease: "easeOut" },
            opacity: { duration: 2.5, delay: 1 + arc.delay, repeat: Infinity, ease: "easeInOut" },
            strokeDashoffset: { duration: 2.2, delay: 1.2 + arc.delay, repeat: Infinity, ease: "linear" },
          }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`node-${i}`}
          r="2.5"
          fill="#00C2FF"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 2,
            delay: 1.5 + i * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          cx={[100, 110, 95][i]}
          cy={[30, 85, 155][i]}
        />
      ))}
    </svg>
  );
}

function PulseRings({ reduced }: { reduced: boolean }) {
  if (reduced) return null;

  return (
    <>
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute left-[14%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/30"
          style={{ width: "clamp(3rem, 22vw, 7rem)", height: "clamp(3rem, 22vw, 7rem)" }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.45, 0],
            scale: [0.65, 1.35, 1.55],
          }}
          transition={{
            duration: 3.5,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
}

export function AnimatedHeroLogo() {
  const reduced = useReducedMotion();

  return (
    <div className="relative inline-flex w-full max-w-[min(92vw,38rem)] items-center justify-center px-2 py-2">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan/15 via-orange/10 to-cyan/15 blur-3xl"
        animate={
          reduced
            ? { opacity: 0.35 }
            : { opacity: [0.25, 0.5, 0.25], scale: [0.95, 1.05, 0.95] }
        }
        transition={{ duration: 4.5, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
      />

      <PulseRings reduced={!!reduced} />
      <RouteArcs reduced={!!reduced} />

      {/* Logo entrance + idle motion */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={
            reduced
              ? {}
              : {
                  y: [0, -10, 0],
                  scale: [1, 1.025, 1],
                }
          }
          transition={{
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <BrandLogo variant="hero" priority />
        </motion.div>
      </motion.div>

      {/* Orbiting connectivity dot around globe area */}
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute left-[14%] top-1/2 h-[clamp(3.5rem,28vw,8rem)] w-[clamp(3.5rem,28vw,8rem)] -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <motion.span
            className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-orange shadow-[0_0_10px_rgba(255,107,0,0.8)]"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </div>
  );
}

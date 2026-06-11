"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { industries } from "@/lib/content";

const ORBIT_RADIUS = { base: 100, md: 130, lg: 150 };
/** How close pills sit to the nucleus on hover — along their spoke, on the same side */
const HOVER_INSET = 62;

function getOrbitPosition(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

/** Slide inward toward nucleus, stopping beside it on the item's side */
function getHoverPosition(angle: number, inset = HOVER_INSET) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * inset,
    y: Math.sin(rad) * inset,
  };
}

export function HomeIndustriesSection() {
  const ref = useScrollReveal<HTMLElement>();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selected, setSelected] = useState(industries[0]);

  const active = hoveredId
    ? industries.find((i) => i.id === hoveredId) ?? selected
    : selected;

  const handleEnter = (id: string) => {
    const item = industries.find((i) => i.id === id);
    if (item) {
      setHoveredId(id);
      setSelected(item);
    }
  };

  const handleLeave = () => {
    setHoveredId(null);
  };

  return (
    <section ref={ref} className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="accent-line" />
        <h2 className="section-heading">Industries We Serve</h2>
        <p className="section-subheading">
          Delivering across diverse sectors of the Tanzanian and East African economy.
        </p>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          <div className="relative mx-auto h-[340px] w-[340px] shrink-0 sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px]">
            {/* Orbit ring */}
            <div className="absolute inset-8 rounded-full border border-dashed border-slate-300/80" />
            <div className="absolute inset-16 rounded-full border border-slate-200/60" />

            {/* Company hub */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ scale: hoveredId ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-full bg-navy px-7 py-5 text-center shadow-xl ring-4 ring-orange/20"
              >
                <p className="font-heading text-sm font-bold text-white">Wills</p>
                <p className="text-xs text-cyan">Worldwide</p>
              </motion.div>
            </div>

            {industries.map((ind) => {
              const isHovered = hoveredId === ind.id;
              const radius = ORBIT_RADIUS.lg;
              const orbit = getOrbitPosition(ind.angle, radius);
              const beside = getHoverPosition(ind.angle);
              const pos = isHovered ? beside : orbit;

              return (
                <motion.button
                  key={ind.id}
                  type="button"
                  onMouseEnter={() => handleEnter(ind.id)}
                  onMouseLeave={handleLeave}
                  onFocus={() => handleEnter(ind.id)}
                  onBlur={handleLeave}
                  onClick={() => setSelected(ind)}
                  className={`absolute left-1/2 top-1/2 whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold shadow-md sm:text-sm ${
                    isHovered ? "z-30" : "z-20"
                  } ${
                    isHovered
                      ? "bg-orange text-white shadow-lg shadow-orange/30"
                      : "bg-white text-navy hover:bg-orange/10"
                  }`}
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${pos.x}px)`,
                    y: `calc(-50% + ${pos.y}px)`,
                    scale: isHovered ? 1.06 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 340,
                    damping: 26,
                    mass: 0.8,
                  }}
                >
                  {ind.title.split(" & ")[0]}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="glass-card-light w-full max-w-lg flex-1 p-8 md:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-orange">
                Industry Focus
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-navy md:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{active.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap-loader";
import { processSteps } from "@/lib/content";

export function HomeProcessSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let trigger: { kill: () => void } | null = null;
    let cancelled = false;

    const init = async () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const items = section.querySelectorAll("[data-step]");
      const { gsap } = await loadGsap();
      if (cancelled) return;

      if (prefersReduced) {
        gsap.set(items, { opacity: 1, x: 0 });
        return;
      }

      const tween = gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.6,
          scrollTrigger: { trigger: section, start: "top 75%" },
        }
      );
      trigger = tween.scrollTrigger ?? null;
    };

    init();

    return () => {
      cancelled = true;
      trigger?.kill();
    };
  }, []);

  return (
    <section ref={ref} className="bg-surface-dark py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="accent-line" />
        <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
          Logistics Process
        </h2>
        <p className="mt-4 max-w-2xl text-white/60">
          From request to delivery — a streamlined process built for speed and reliability.
        </p>

        <div className="mt-16 flex flex-col gap-0 md:flex-row md:items-start md:justify-between">
          {processSteps.map((step, i) => (
            <div key={step.step} data-step className="relative flex flex-1 flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange font-heading text-lg font-bold text-white shadow-lg shadow-orange/30">
                {i + 1}
              </div>
              <h3 className="mt-4 font-heading font-bold text-white">{step.step}</h3>
              <p className="mt-2 max-w-[140px] text-xs text-white/60">{step.description}</p>
              {i < processSteps.length - 1 && (
                <div className="my-4 hidden h-0.5 flex-1 bg-gradient-to-r from-orange to-cyan md:absolute md:left-[60%] md:top-7 md:block md:w-[80%]" />
              )}
              {i < processSteps.length - 1 && (
                <div className="my-2 h-8 w-0.5 bg-gradient-to-b from-orange to-cyan md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

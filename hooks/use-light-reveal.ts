"use client";

import { useEffect, useRef } from "react";
import { shouldReduceMotion } from "@/lib/lite-mode";

/** Lightweight scroll reveal — no GSAP */
export function useLightReveal<T extends HTMLElement>(selector?: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = selector
      ? Array.from(root.querySelectorAll<HTMLElement>(selector))
      : [root];

    if (shouldReduceMotion()) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);

  return ref;
}

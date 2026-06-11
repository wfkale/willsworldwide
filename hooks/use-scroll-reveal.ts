"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap-loader";
import { shouldReduceMotion } from "@/lib/lite-mode";

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let trigger: { kill: () => void } | null = null;
    let cancelled = false;

    const init = async () => {
      if (shouldReduceMotion()) {
        if (!cancelled && el) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
        return;
      }

      const { gsap } = await loadGsap();
      if (cancelled || !el) return;

      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
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

  return ref;
}

export function useStaggerReveal<T extends HTMLElement>(selector: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const triggers: { kill: () => void }[] = [];
    let cancelled = false;

    const init = async () => {
      const items = container.querySelectorAll(selector);

      if (shouldReduceMotion()) {
        items.forEach((item) => {
          (item as HTMLElement).style.opacity = "1";
          (item as HTMLElement).style.transform = "none";
        });
        return;
      }

      const { gsap } = await loadGsap();
      if (cancelled) return;

      const tween = gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    };

    init();

    return () => {
      cancelled = true;
      triggers.forEach((t) => t.kill());
    };
  }, [selector]);

  return ref;
}

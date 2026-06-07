"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GSAP_ROUTES, loadGsap } from "@/lib/gsap-loader";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (prefersReduced || isMobile) return;

    let lenis: import("lenis").default | null = null;
    let rafId = 0;
    let gsapTicker: ((time: number) => void) | null = null;
    let cancelled = false;

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      if (GSAP_ROUTES.has(pathname)) {
        const { gsap, ScrollTrigger } = await loadGsap();
        if (cancelled || !lenis) return;

        lenis.on("scroll", ScrollTrigger.update);

        gsapTicker = (time: number) => {
          lenis?.raf(time * 1000);
        };
        gsap.ticker.add(gsapTicker);
        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();
      } else {
        const loop = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);
      }
    };

    init();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      if (gsapTicker) {
        loadGsap().then(({ gsap }) => gsap.ticker.remove(gsapTicker!));
      }
      lenis?.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}

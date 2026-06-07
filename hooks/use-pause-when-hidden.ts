"use client";

import { useEffect, useRef, useState } from "react";

export function usePauseWhenHidden<T extends HTMLElement>(rootMargin = "80px") {
  const ref = useRef<T>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, paused };
}

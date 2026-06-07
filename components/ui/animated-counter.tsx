"use client";

import { useEffect, useRef, useState } from "react";
import { loadGsap } from "@/lib/gsap-loader";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  display?: string;
  label: string;
  dark?: boolean;
  immediate?: boolean;
};

export function AnimatedCounter({
  value,
  suffix = "",
  display,
  label,
  dark,
  immediate = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (display) return;

    const el = ref.current;
    if (!el) return;

    let tween: { kill: () => void; scrollTrigger?: { kill: () => void } } | null = null;
    let cancelled = false;

    const init = async () => {
      const { gsap } = await loadGsap();
      if (cancelled || !el) return;

      const obj = { val: 0 };
      tween = gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: immediate ? undefined : { trigger: el, start: "top 85%" },
        onUpdate: () => setCount(Math.round(obj.val)),
      });
    };

    init();

    return () => {
      cancelled = true;
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [value, display, immediate]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-bold md:text-5xl text-orange">
        {display ?? `${count}${suffix}`}
      </p>
      <p
        className={`mt-2 text-xs font-semibold uppercase tracking-wider ${
          dark ? "text-white/70" : "text-slate-500"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

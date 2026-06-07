"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  display?: string;
  label: string;
  dark?: boolean;
};

export function AnimatedCounter({ value, suffix = "", display, label, dark }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (display) return;

    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
      onUpdate: () => setCount(Math.round(obj.val)),
    });

    return () => {
      tween.kill();
    };
  }, [value, display]);

  return (
    <div ref={ref} className="text-center">
      <p className={`font-heading text-4xl font-bold md:text-5xl ${dark ? "text-orange" : "text-orange"}`}>
        {display ?? `${count}${suffix}`}
      </p>
      <p className={`mt-2 text-xs font-semibold uppercase tracking-wider ${dark ? "text-white/70" : "text-slate-500"}`}>
        {label}
      </p>
    </div>
  );
}

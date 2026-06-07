"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { RouteMap } from "@/components/ui/route-map";

export function HomeMapSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="accent-line" />
        <h2 className="section-heading">Regional Connectivity</h2>
        <p className="section-subheading">
          SADC and East Africa trade corridors — animated road routes from Tanzania across the region. Hover a corridor to explore services.
        </p>

        <div className="mt-12 flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-navy px-4 py-8 shadow-2xl sm:min-h-[420px] md:px-8 md:py-10 lg:min-h-[520px]">
          <RouteMap className="w-full" interactive showLabels />
        </div>
      </div>
    </section>
  );
}

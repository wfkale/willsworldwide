"use client";

import { Shield, Clock, Route, DollarSign, Globe, Users, type LucideIcon } from "lucide-react";
import { useStaggerReveal } from "@/hooks/use-scroll-reveal";
import { whyChooseUs } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  clock: Clock,
  route: Route,
  dollar: DollarSign,
  globe: Globe,
  users: Users,
};

const cardAccents = [
  { gradient: "from-orange to-amber-500", glow: "group-hover:shadow-orange/20", ring: "ring-orange/30" },
  { gradient: "from-cyan to-blue-500", glow: "group-hover:shadow-cyan/20", ring: "ring-cyan/30" },
  { gradient: "from-violet-500 to-purple-600", glow: "group-hover:shadow-violet-500/20", ring: "ring-violet-400/30" },
  { gradient: "from-emerald-500 to-teal-500", glow: "group-hover:shadow-emerald-500/20", ring: "ring-emerald-400/30" },
  { gradient: "from-sky-500 to-cyan", glow: "group-hover:shadow-sky-500/20", ring: "ring-sky-400/30" },
  { gradient: "from-orange via-amber-400 to-cyan", glow: "group-hover:shadow-orange/25", ring: "ring-orange/25" },
];

/** Bento spans — asymmetric grid on large screens */
const cardLayouts = [
  "sm:col-span-2 lg:col-span-7 lg:row-span-1",
  "sm:col-span-1 lg:col-span-5 lg:mt-8",
  "sm:col-span-1 lg:col-span-4",
  "sm:col-span-1 lg:col-span-4 lg:mt-6",
  "sm:col-span-1 lg:col-span-4 lg:-mt-6",
  "sm:col-span-2 lg:col-span-12",
];

export function HomeWhySection() {
  const ref = useStaggerReveal<HTMLDivElement>("[data-card]");

  return (
    <section className="relative overflow-hidden bg-surface-dark py-24 text-white md:py-32">
      <div className="why-section-ambient pointer-events-none absolute inset-0" aria-hidden />
      <div className="why-section-mesh pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="accent-line" />
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Why Businesses Choose Wills
            </h2>
            <p className="mt-4 max-w-2xl text-white/60">
              Trust, scale and speed — the competitive advantages that set us apart across East Africa.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan lg:flex">
            <span className="h-2 w-2 rounded-full bg-orange shadow-[0_0_8px_rgba(255,107,0,0.8)]" />
            6 core advantages
          </div>
        </div>

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            const accent = cardAccents[index];
            const layout = cardLayouts[index];
            const isBanner = index === 5;

            return (
              <article
                key={item.title}
                data-card
                className={`why-card group ${layout} ${accent.glow}`}
              >
                <div
                  className={`why-card-accent bg-gradient-to-r ${accent.gradient}`}
                  aria-hidden
                />

                <span className="why-card-index font-heading" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative z-10 flex h-full flex-col ${
                    isBanner ? "lg:flex-row lg:items-center lg:gap-10" : ""
                  }`}
                >
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.gradient} p-[1px] shadow-lg ${accent.ring} ring-2 ring-inset ring-white/10`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[0.9rem] bg-navy-dark/90 sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={1.75} />
                    </div>
                  </div>

                  <div className={isBanner ? "mt-5 lg:mt-0 lg:flex-1" : "mt-5 flex flex-1 flex-col"}>
                    <h3
                      className={`font-heading font-bold text-white ${
                        index === 0 ? "text-xl md:text-2xl" : isBanner ? "text-lg md:text-xl" : "text-lg"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed text-white/65 ${
                        isBanner ? "max-w-3xl text-sm md:text-base" : "text-sm"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>

                  {isBanner && (
                    <div className="mt-6 hidden items-center gap-2 lg:mt-0 lg:flex">
                      <div className="h-px w-12 bg-gradient-to-r from-orange to-cyan" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                        Built for East Africa
                      </span>
                    </div>
                  )}
                </div>

                <div
                  className="why-card-shine pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

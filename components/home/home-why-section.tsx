"use client";

import { Shield, Clock, Route, DollarSign, Globe, Users } from "lucide-react";
import { useStaggerReveal } from "@/hooks/use-scroll-reveal";
import { whyChooseUs } from "@/lib/content";

const iconMap = {
  shield: Shield,
  clock: Clock,
  route: Route,
  dollar: DollarSign,
  globe: Globe,
  users: Users,
};

export function HomeWhySection() {
  const ref = useStaggerReveal<HTMLDivElement>("[data-card]");

  return (
    <section className="bg-surface-dark py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="accent-line" />
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Why Businesses Choose Wills
        </h2>
        <p className="mt-4 max-w-2xl text-white/60">
          Trust, scale and speed — the competitive advantages that set us apart across East Africa.
        </p>

        <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.title}
                data-card
                className="glass-card group cursor-default p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan/10 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/20 transition-colors group-hover:bg-orange/30">
                  <Icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

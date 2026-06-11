"use client";

import Image from "next/image";
import {
  Shield,
  Clock,
  Route,
  DollarSign,
  Globe,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useLightReveal } from "@/hooks/use-light-reveal";
import { whyChooseUs } from "@/lib/content";
import { logisticsImage } from "@/lib/images";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  clock: Clock,
  route: Route,
  dollar: DollarSign,
  globe: Globe,
  users: Users,
};

const cardAccents = [
  "from-orange/80 to-transparent",
  "from-cyan/70 to-transparent",
  "from-violet-500/60 to-transparent",
  "from-emerald-500/60 to-transparent",
  "from-sky-500/60 to-transparent",
  "from-orange/70 to-transparent",
];

export function HomeWhySection() {
  const ref = useLightReveal<HTMLDivElement>("[data-card]");

  return (
    <section className="why-section relative overflow-hidden bg-surface-dark py-24 text-white md:py-32">
      <div className="why-section-ambient pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="why-reveal-item is-visible">
          <div className="accent-line" />
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Why Businesses Choose Wills
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            Trust, scale and speed — the competitive advantages that set us apart across East Africa.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            const accent = cardAccents[index];

            return (
              <article
                key={item.title}
                data-card
                data-reveal-index={index}
                className="why-card why-reveal-item group overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden sm:h-44">
                  <Image
                    src={logisticsImage(item.image, "sm")}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/50 ${accent}`}
                  />
                  <div className="why-card-icon-badge absolute bottom-3 left-3">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                  </div>
                </div>

                <div className="relative p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan/90">
                    Advantage {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

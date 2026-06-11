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
import { useStaggerReveal } from "@/hooks/use-scroll-reveal";
import { whyChooseUs } from "@/lib/content";
import { logisticsImage } from "@/lib/images";
import {
  WhyCardRoutes,
  WhyCompassArc,
  WhyHeaderRoutes,
  WhyNetworkGrid,
} from "@/components/home/why-section-graphics";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  clock: Clock,
  route: Route,
  dollar: DollarSign,
  globe: Globe,
  users: Users,
};

const cardGraphics = [WhyCardRoutes, WhyNetworkGrid, WhyCompassArc, WhyNetworkGrid, WhyCardRoutes, WhyHeaderRoutes];

const cardAccents = [
  "from-orange/90 via-orange/40 to-transparent",
  "from-cyan/90 via-cyan/30 to-transparent",
  "from-violet-500/80 via-violet-500/25 to-transparent",
  "from-emerald-500/80 via-emerald-500/25 to-transparent",
  "from-sky-500/80 via-sky-500/25 to-transparent",
  "from-orange/80 via-cyan/30 to-transparent",
];

export function HomeWhySection() {
  const ref = useStaggerReveal<HTMLDivElement>("[data-card]");

  return (
    <section className="relative overflow-hidden bg-surface-dark py-24 text-white md:py-32">
      <div className="why-section-ambient pointer-events-none absolute inset-0" aria-hidden />
      <div className="why-section-mesh pointer-events-none absolute inset-0 opacity-35" aria-hidden />
      <WhyNetworkGrid className="why-section-bg-graphic pointer-events-none absolute -right-8 top-24 h-64 w-64 opacity-30 md:h-80 md:w-80" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="accent-line" />
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Why Businesses Choose Wills
            </h2>
            <p className="mt-4 max-w-2xl text-white/60">
              Trust, scale and speed — the competitive advantages that set us apart across East Africa.
            </p>
          </div>
          <WhyHeaderRoutes className="hidden h-20 w-72 opacity-70 lg:block xl:w-96" />
        </div>

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            const Graphic = cardGraphics[index];
            const accent = cardAccents[index];
            const isFeature = index === 0;
            const isWide = index === 5;

            return (
              <article
                key={item.title}
                data-card
                className={`why-card group overflow-hidden ${
                  isFeature
                    ? "sm:col-span-2 lg:col-span-6 lg:row-span-2 lg:min-h-[520px]"
                    : isWide
                      ? "sm:col-span-2 lg:col-span-12 lg:min-h-[240px]"
                      : "lg:col-span-6"
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    isFeature
                      ? "absolute inset-0"
                      : isWide
                        ? "h-44 sm:h-52 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[42%]"
                        : "h-44 sm:h-48"
                  }`}
                >
                  <Image
                    src={logisticsImage(item.image, isFeature || isWide ? "full" : "sm")}
                    alt={item.imageAlt}
                    fill
                    sizes={
                      isFeature
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : isWide
                          ? "(max-width: 1024px) 100vw, 40vw"
                          : "(max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${accent} ${
                      isFeature ? "from-navy-dark via-navy/75 to-navy/25" : "from-navy-dark via-navy/55 to-navy/10"
                    }`}
                  />
                  <Graphic
                    className={`pointer-events-none absolute opacity-40 transition-opacity duration-500 group-hover:opacity-70 ${
                      isFeature
                        ? "right-4 top-4 h-28 w-28 sm:h-36 sm:w-36"
                        : "right-3 top-3 h-20 w-20"
                    }`}
                  />
                </div>

                <div
                  className={`relative z-10 flex flex-col ${
                    isFeature
                      ? "h-full justify-end p-6 sm:p-8 lg:p-10"
                      : isWide
                        ? "p-6 sm:p-8 lg:ml-[42%] lg:min-h-[220px] lg:justify-center lg:p-10"
                        : "p-5 sm:p-6"
                  }`}
                >
                  <div
                    className={`flex items-start gap-4 ${
                      isWide ? "lg:items-center" : ""
                    }`}
                  >
                    <div className="why-card-icon-badge shrink-0">
                      <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={1.75} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan/90">
                        Advantage {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3
                        className={`mt-2 font-heading font-bold text-white ${
                          isFeature ? "text-2xl md:text-3xl" : isWide ? "text-xl md:text-2xl" : "text-lg"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mt-3 leading-relaxed text-white/70 ${
                          isFeature || isWide ? "text-sm md:text-base" : "text-sm"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {isFeature && (
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      {["Dar es Salaam hub", "SADC corridors", "24/7 coordination"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {isWide && (
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-orange to-cyan" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                        Built for East Africa
                      </span>
                    </div>
                  )}
                </div>

                <span className="why-card-index font-heading" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

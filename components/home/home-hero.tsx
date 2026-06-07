"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { company, stats } from "@/lib/content";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { usePauseWhenHidden } from "@/hooks/use-pause-when-hidden";

const AnimatedHeroLogo = dynamic(
  () => import("@/components/home/animated-hero-logo").then((m) => m.AnimatedHeroLogo),
  { ssr: false, loading: () => <div className="h-28 w-full max-w-md animate-pulse rounded-2xl bg-white/5 md:h-36" /> }
);

export function HomeHero() {
  const { ref, paused } = usePauseWhenHidden<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative min-h-screen overflow-hidden bg-hero-gradient pt-24 ${
        paused ? "motion-paused" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 hero-decor-layer" aria-hidden />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-16 text-center md:px-8 md:pt-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-full border border-cyan/30 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan"
        >
          {company.badge}
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex w-full justify-center"
        >
          <AnimatedHeroLogo />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 max-w-5xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Connecting Africa
          <span className="block bg-gradient-to-r from-orange via-orange-light to-cyan bg-clip-text text-transparent">
            To The World
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg lg:text-xl"
        >
          {company.heroSubheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/quote" className="btn-primary group">
            Request Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/services" className="btn-secondary">
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card px-4 py-6">
              <AnimatedCounter {...stat} dark immediate />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Shield, FileText, Stamp, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useScrollReveal, useStaggerReveal } from "@/hooks/use-scroll-reveal";
import { RouteMap } from "@/components/ui/route-map";
import { corridors, borderExpertise, mapCountries } from "@/lib/content";

const borderIcons = [Shield, FileText, Stamp, Lock];

export default function CoverageClient() {
  const heroRef = useScrollReveal<HTMLElement>();
  const corridorRef = useStaggerReveal<HTMLDivElement>("[data-corridor]");
  const borderRef = useStaggerReveal<HTMLDivElement>("[data-border]");

  return (
    <main>
      <section ref={heroRef} className="relative bg-hero-gradient pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Coverage & Network</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-white md:text-5xl">
            East Africa Trade Corridors
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Our regional network connects Tanzania to key markets across East and Central Africa with reliable transit routes.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="accent-line" />
          <h2 className="section-heading">Interactive Route Map</h2>
          <div className="mt-12 flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-navy px-4 py-8 shadow-2xl sm:min-h-[420px] md:px-8 md:py-10 lg:min-h-[520px]">
            <RouteMap className="w-full" interactive showLabels />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {mapCountries.map((c) => (
              <span
                key={c.id}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  c.hub ? "bg-orange text-white" : "bg-slate-100 text-navy"
                }`}
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="accent-line" />
          <h2 className="section-heading">Corridor Showcase</h2>
          <div ref={corridorRef} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {corridors.map((corridor) => (
              <motion.div
                key={corridor.route}
                data-corridor
                whileHover={{ y: -6 }}
                className="glass-card-light overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-orange to-cyan" />
                <div className="p-6">
                  <h3 className="font-heading font-bold text-navy">{corridor.route}</h3>
                  <div className="mt-3 flex gap-4 text-sm text-slate-500">
                    <span>{corridor.distance}</span>
                    <span>{corridor.duration}</span>
                  </div>
                  <ul className="mt-4 space-y-1">
                    {corridor.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="h-1 w-1 rounded-full bg-cyan" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="accent-line" />
          <h2 className="section-heading">Border Expertise</h2>
          <p className="section-subheading">
            Professional customs, documentation and transit support at every border crossing.
          </p>
          <div ref={borderRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {borderExpertise.map((item, i) => {
              const Icon = borderIcons[i];
              return (
                <div key={item.title} data-border className="glass-card-light p-6">
                  <Icon className="h-8 w-8 text-orange" />
                  <h3 className="mt-4 font-heading font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-heading text-3xl font-bold text-white">Plan Your Next Shipment</h2>
          <Link href="/quote" className="btn-primary mt-8 inline-flex">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}

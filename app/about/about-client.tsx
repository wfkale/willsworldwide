"use client";

import { Telescope, Compass, Gem } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal, useStaggerReveal } from "@/hooks/use-scroll-reveal";
import { about, vision, leadership } from "@/lib/content";

export default function AboutClient() {
  const heroRef = useScrollReveal<HTMLElement>();
  const storyRef = useScrollReveal<HTMLElement>();
  const timelineRef = useStaggerReveal<HTMLDivElement>("[data-timeline]");
  const valuesRef = useStaggerReveal<HTMLDivElement>("[data-value]");
  const leadersRef = useStaggerReveal<HTMLDivElement>("[data-leader]");

  return (
    <main>
      <section ref={heroRef} className="relative flex min-h-[60vh] items-center bg-hero-gradient pt-24">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">About Us</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-white md:text-6xl">
            About Wills Worldwide
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">{about.whoWeAre}</p>
        </div>
      </section>

      <section ref={storyRef} className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="accent-line" />
              <h2 className="section-heading">Company Story</h2>
              <div className="mt-8 space-y-6">
                {about.story.map((p) => (
                  <p key={p.slice(0, 40)} className="leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div ref={timelineRef}>
              <h3 className="font-heading text-xl font-bold text-navy">Our Journey</h3>
              <div className="mt-8 space-y-0 border-l-2 border-orange/30 pl-8">
                {about.timeline.map((item) => (
                  <div key={item.year} data-timeline className="relative pb-10 last:pb-0">
                    <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-orange ring-4 ring-orange/20" />
                    <p className="font-heading text-lg font-bold text-orange">{item.year}</p>
                    <p className="mt-1 font-semibold text-navy">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="accent-line" />
          <h2 className="section-heading">Vision, Mission & Values</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              { icon: Telescope, title: "Vision", text: vision.statement },
              { icon: Compass, title: "Mission", text: vision.mission[0] },
              {
                icon: Gem,
                title: "Values",
                text: vision.values.map((v) => v.title).join(" • "),
              },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div key={title} whileHover={{ y: -6 }} className="glass-card-light p-8">
                <Icon className="h-8 w-8 text-orange" />
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>

          <div ref={valuesRef} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {vision.values.map((v) => (
              <div
                key={v.title}
                data-value
                className="rounded-xl border border-slate-200 bg-white p-5 text-center"
              >
                <p className="font-heading text-sm font-bold text-navy">{v.title}</p>
                <p className="mt-2 text-xs text-slate-500">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="accent-line" />
          <h2 className="section-heading">Leadership</h2>
          <p className="section-subheading">The team driving Wills Worldwide forward.</p>

          <div ref={leadersRef} className="mt-12 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
            {leadership.map((person) => (
              <motion.div
                key={person.name}
                data-leader
                whileHover={{ y: -4 }}
                className="glass-card-light flex items-center gap-6 p-8"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-light font-heading text-xl font-bold text-white">
                  {person.initials}
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-navy">{person.name}</p>
                  <p className="text-sm font-medium text-orange">{person.role}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-1 block text-sm text-slate-500 hover:text-cyan"
                  >
                    {person.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="accent-line" />
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Company Culture</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {about.culture.map((item) => (
              <div key={item.title} className="glass-card p-8">
                <h3 className="font-heading text-xl font-bold text-orange">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

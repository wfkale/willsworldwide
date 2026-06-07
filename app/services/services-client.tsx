"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Truck,
  Package,
  Globe,
  FileCheck,
  MapPin,
  Link2,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/use-scroll-reveal";
import { serviceDetails } from "@/lib/content";

const icons = [Truck, Truck, Package, FileCheck, MapPin, Link2];

export default function ServicesClient() {
  const [activeSlug, setActiveSlug] = useState(serviceDetails[0].slug);
  const heroRef = useScrollReveal<HTMLElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>("[data-service-card]");

  useEffect(() => {
    const sections = serviceDetails.map((s) => document.getElementById(s.slug));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSlug(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden bg-hero-gradient pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Services</p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-white md:text-6xl">
              Comprehensive Logistics Solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
              End-to-end freight, transit, clearing and distribution — engineered for speed,
              security and scale across Tanzania and East Africa.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Core Services", value: "6" },
              { label: "Trade Corridors", value: "9+" },
              { label: "Industries", value: "6+" },
              { label: "Coverage", value: "EAC+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="font-heading text-3xl font-bold text-orange">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky jump nav */}
      <div className="sticky top-[72px] z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 md:px-8">
          {serviceDetails.map((service, i) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all md:text-sm ${
                activeSlug === service.slug
                  ? "bg-navy text-white shadow-md"
                  : "bg-slate-100 text-navy/70 hover:bg-slate-200"
              }`}
            >
              <span className="text-orange/90">{String(i + 1).padStart(2, "0")}</span>
              {service.title.split(" ")[0]}
            </a>
          ))}
        </div>
      </div>

      {/* Bento service cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12">
            <div className="accent-line" />
            <h2 className="section-heading">Service Catalogue</h2>
            <p className="section-subheading">
              Select a capability below or scroll to explore each service in depth.
            </p>
          </div>

          <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, i) => {
              const Icon = icons[i];
              return (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  data-service-card
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                    i === 0 ? "sm:col-span-2 lg:row-span-1" : ""
                  }`}
                >
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.accent} opacity-60 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-orange">
                      0{i + 1}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-bold text-navy group-hover:text-orange">
                      {service.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-600">{service.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan">
                      Explore <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed service sections */}
      {serviceDetails.map((service, index) => {
        const Icon = icons[index];
        const reversed = index % 2 === 1;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-36 py-20 md:py-28 ${index % 2 === 0 ? "bg-surface" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <div className="relative aspect-[4/3] min-h-[280px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-30 mix-blend-multiply`} />
                    </div>
                    <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl bg-navy/85 px-4 py-3 backdrop-blur-md">
                      <Icon className="h-5 w-5 text-orange" />
                      <span className="text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <div className="accent-line" />
                  <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.whatWeDo}</p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-2 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                        <span className="text-sm font-medium text-navy">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Service Flow
                    </p>
                    <div className="mt-4 flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:items-center">
                      {service.flow.map((step, i) => (
                        <div key={step} className="flex items-center">
                          <div className="flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5">
                            <span className="text-xs font-bold text-orange">{i + 1}</span>
                            <span className="text-sm font-semibold text-white">{step}</span>
                          </div>
                          {i < service.flow.length - 1 && (
                            <ArrowRight className="mx-1 hidden h-4 w-4 text-slate-300 sm:block" />
                          )}
                          {i < service.flow.length - 1 && (
                            <div className="my-1 h-6 w-0.5 bg-slate-200 sm:hidden" />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.industries.map((ind) => (
                        <span
                          key={ind}
                          className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-navy"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="relative overflow-hidden bg-surface-dark py-24 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-orange blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to Move Your Cargo?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/65">
            Tell us your route, cargo type and timeline — we&apos;ll build a competitive logistics proposal.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote" className="btn-primary group inline-flex">
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/coverage" className="btn-secondary inline-flex">
              View Coverage Map
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

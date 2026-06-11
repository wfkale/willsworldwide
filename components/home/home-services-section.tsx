"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { homeServices } from "@/lib/content";
import { logisticsImage } from "@/lib/images";

export function HomeServicesSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="accent-line" />
            <h2 className="section-heading">Services Snapshot</h2>
            <p className="section-subheading">
              Comprehensive logistics solutions tailored for Africa and global markets.
            </p>
          </div>
          <Link href="/services" className="btn-outline shrink-0">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {homeServices.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={service.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  reversed ? "" : ""
                }`}
              >
                <div
                  className={`relative min-h-[260px] overflow-hidden rounded-2xl shadow-xl sm:min-h-[320px] lg:min-h-[360px] ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={logisticsImage(service.image, index < 2 ? "full" : "sm")}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="rounded-full bg-orange/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {service.title}
                    </span>
                  </div>
                </div>

                <div className={`flex flex-col justify-center ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                  <p className="text-sm font-semibold uppercase tracking-widest text-orange">
                    Service {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-navy md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

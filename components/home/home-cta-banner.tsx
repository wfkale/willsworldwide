import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCtaBanner() {
  return (
    <section className="relative overflow-hidden bg-dark-gradient py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-cyan blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">
          Ready to Move Your Cargo?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/70">
          Get a competitive quotation for transit, freight and distribution across Tanzania and East Africa.
        </p>
        <Link href="/quote" className="btn-primary mt-10 group inline-flex">
          Request a Quote
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

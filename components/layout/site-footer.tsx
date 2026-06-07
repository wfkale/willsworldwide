import Link from "next/link";
import { company } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-bold">{company.shortName}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Technology-enabled logistics partner connecting Tanzania and East Africa to global trade corridors.
            </p>
            <p className="mt-4 text-sm italic text-orange">&ldquo;{company.tagline}&rdquo;</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-white/70 hover:text-cyan">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-cyan">Services</Link></li>
              <li><Link href="/coverage" className="text-white/70 hover:text-cyan">Coverage</Link></li>
              <li><Link href="/quote" className="text-white/70 hover:text-cyan">Request Quote</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-cyan">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li>{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>&copy; {company.year} {company.name}. All rights reserved.</p>
          <p className="italic text-orange/80">Shipment Tracking Portal — Coming Soon</p>
        </div>
      </div>
    </footer>
  );
}

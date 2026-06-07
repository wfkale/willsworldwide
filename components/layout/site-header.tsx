"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/content";
import { BrandLogo } from "@/components/ui/brand-logo";

const LIGHT_HEADER_ROUTES = ["/quote"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isLightTop = LIGHT_HEADER_ROUTES.includes(pathname);
  const solidHeader = scrolled || isLightTop;
  const darkNavText = isLightTop && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (active: boolean) => {
    if (darkNavText) {
      return active
        ? "text-orange font-semibold"
        : "text-navy/75 hover:text-navy";
    }
    return active ? "text-cyan font-semibold" : "text-white/85 hover:text-white";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solidHeader
          ? darkNavText
            ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
            : "border-b border-white/10 bg-navy/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <BrandLogo variant="header" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${linkClass(active)}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/quote" className="btn-primary ml-3 !py-2.5 !text-xs">
            Request Quote
          </Link>
        </nav>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${darkNavText ? "text-navy" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden border-t lg:hidden ${
              darkNavText
                ? "border-slate-200 bg-white"
                : "border-white/10 bg-navy"
            }`}
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-3 ${
                    darkNavText
                      ? "text-navy/80 hover:bg-slate-50"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/quote" className="btn-primary mt-2 text-center">
                Request Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

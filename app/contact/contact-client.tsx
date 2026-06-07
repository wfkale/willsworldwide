"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Check } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/lib/content";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactOptions = [
    {
      icon: Phone,
      title: "Phone",
      value: company.phone,
      href: `tel:${company.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: company.phone,
      href: `https://wa.me/${company.whatsapp}`,
    },
    {
      icon: Mail,
      title: "Email",
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      title: "Office",
      value: company.address,
      href: "https://maps.google.com/?q=Sinza+Double+Tree+Hotel+Dar+es+Salaam",
    },
  ];

  return (
    <main>
      <section className="bg-hero-gradient pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Contact</p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-white md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-xl text-white/70">{company.closingStatement}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map(({ icon: Icon, title, value, href }) => (
              <motion.a
                key={title}
                href={href}
                target={title === "Office" || title === "WhatsApp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="glass-card-light block p-6 transition-shadow hover:shadow-xl"
              >
                <Icon className="h-8 w-8 text-orange" />
                <p className="mt-4 font-heading font-bold text-navy">{title}</p>
                <p className="mt-2 text-sm text-slate-600">{value}</p>
              </motion.a>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <iframe
                title="Wills Worldwide Office Location"
                src="https://maps.google.com/maps?q=Sinza+Dar+es+Salaam+Tanzania&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-[400px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-3xl bg-white p-10 text-center shadow-lg"
                >
                  <Check className="mx-auto h-12 w-12 text-green-500" />
                  <h2 className="mt-4 font-heading text-xl font-bold text-navy">Message Sent</h2>
                  <p className="mt-3 text-slate-600">
                    Thank you for reaching out. We&apos;ll respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
                  <h2 className="font-heading text-xl font-bold text-navy">Send a Message</h2>
                  <div className="mt-6 space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-orange"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-orange"
                    />
                    <textarea
                      placeholder="Your Message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-orange"
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-6 w-full">
                    Send Message
                  </button>
                  <p className="mt-4 text-center text-xs text-slate-400">
                    Form backend integration coming soon
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

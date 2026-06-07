"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Truck, MapPin, Package, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { quoteSteps, company } from "@/lib/content";

type FormData = {
  cargoType: string;
  origin: string;
  destination: string;
  weight: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const initialForm: FormData = {
  cargoType: "",
  origin: "",
  destination: "",
  weight: "",
  timeline: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
};

export default function QuoteClient() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = quoteSteps.length + 1;
  const isContactStep = step === quoteSteps.length;

  const update = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const canProceed = () => {
    if (step === 0) return !!form.cargoType;
    if (step === 1) return !!form.origin.trim();
    if (step === 2) return !!form.destination.trim();
    if (step === 3) return !!form.weight.trim();
    if (step === 4) return !!form.timeline;
    if (isContactStep) return form.name && form.email && form.phone;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-surface pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-4 max-w-lg rounded-3xl bg-white p-12 text-center shadow-xl"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-6 font-heading text-2xl font-bold text-navy">Quote Request Received</h1>
          <p className="mt-4 text-slate-600">
            Thank you for your enquiry. Our team will review your requirements and respond within 24 hours.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Email integration coming soon — for urgent requests, contact us at{" "}
            <a href={`mailto:${company.email}`} className="text-cyan hover:underline">
              {company.email}
            </a>
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-surface pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">Request Quote</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-navy md:text-5xl">
            Get a Competitive Quotation
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Tell us about your cargo and route — we&apos;ll prepare a tailored logistics proposal.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <form onSubmit={handleSubmit} className="lg:col-span-3">
            <div className="mb-8 flex gap-2">
              {[...quoteSteps, { label: "Contact" }].map((s, i) => (
                <div
                  key={s.label}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= step ? "bg-orange" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {!isContactStep ? (
                    <>
                      <h2 className="font-heading text-xl font-bold text-navy">
                        Step {step + 1}: {quoteSteps[step].label}
                      </h2>
                      {"fields" in quoteSteps[step] && quoteSteps[step].fields ? (
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {quoteSteps[step].fields!.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() =>
                                update(step === 0 ? "cargoType" : "timeline", option)
                              }
                              className={`rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all ${
                                (step === 0 ? form.cargoType : form.timeline) === option
                                  ? "border-orange bg-orange/5 text-navy"
                                  : "border-slate-200 hover:border-orange/50"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <input
                          type="text"
                          placeholder={
                            "placeholder" in quoteSteps[step]
                              ? quoteSteps[step].placeholder
                              : ""
                          }
                          value={
                            step === 1
                              ? form.origin
                              : step === 2
                                ? form.destination
                                : form.weight
                          }
                          onChange={(e) => {
                            const key =
                              step === 1 ? "origin" : step === 2 ? "destination" : "weight";
                            update(key, e.target.value);
                          }}
                          className="mt-6 w-full rounded-xl border border-slate-200 px-5 py-4 text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                        />
                      )}
                    </>
                  ) : (
                    <>
                      <h2 className="font-heading text-xl font-bold text-navy">Your Contact Details</h2>
                      <div className="mt-6 space-y-4">
                        {[
                          { key: "name" as const, label: "Full Name", type: "text" },
                          { key: "email" as const, label: "Email", type: "email" },
                          { key: "phone" as const, label: "Phone", type: "tel" },
                        ].map(({ key, label, type }) => (
                          <div key={key}>
                            <label className="text-sm font-medium text-slate-600">{label}</label>
                            <input
                              type={type}
                              value={form[key]}
                              onChange={(e) => update(key, e.target.value)}
                              className="mt-1 w-full rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-orange"
                            />
                          </div>
                        ))}
                        <div>
                          <label className="text-sm font-medium text-slate-600">Additional Notes</label>
                          <textarea
                            value={form.notes}
                            onChange={(e) => update("notes", e.target.value)}
                            rows={3}
                            className="mt-1 w-full rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-orange"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-slate-500 disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                {isContactStep ? (
                  <button
                    type="submit"
                    disabled={!canProceed()}
                    className="btn-primary disabled:opacity-50"
                  >
                    Submit Quote Request
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canProceed()}
                    className="btn-primary disabled:opacity-50"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </form>

          <div className="lg:col-span-2">
            <div className="sticky top-28 rounded-3xl bg-navy p-8 text-white">
              <Truck className="h-12 w-12 text-orange" />
              <h3 className="mt-6 font-heading text-xl font-bold">Shipment Preview</h3>
              <dl className="mt-6 space-y-4 text-sm">
                {[
                  { label: "Cargo", value: form.cargoType || "—" },
                  { label: "Origin", value: form.origin || "—" },
                  { label: "Destination", value: form.destination || "—" },
                  { label: "Weight", value: form.weight || "—" },
                  { label: "Timeline", value: form.timeline || "—" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between border-b border-white/10 pb-3">
                    <dt className="text-white/50">{label}</dt>
                    <dd className="font-medium text-cyan">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-xs text-white/40">
                Step {step + 1} of {totalSteps}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Wills Worldwide — phone, WhatsApp, email and office in Sinza, Dar es Salaam.",
};

export default function ContactPage() {
  return <ContactClient />;
}

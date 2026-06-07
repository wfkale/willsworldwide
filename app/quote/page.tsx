import type { Metadata } from "next";
import QuoteClient from "./quote-client";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Request Quote",
  description: "Request a competitive logistics quotation for cargo transport across Tanzania and East Africa.",
};

export default function QuotePage() {
  return <QuoteClient />;
}

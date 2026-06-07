import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive logistics solutions — transit cargo, road freight, clearing, distribution and supply chain support.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}

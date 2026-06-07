import type { Metadata } from "next";
import CoverageClient from "./coverage-client";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Coverage & Network",
  description:
    "East Africa trade corridors and regional logistics network — Dar to Nairobi, Kampala, Kigali, Lusaka and Lubumbashi.",
};

export default function CoveragePage() {
  return <CoverageClient />;
}

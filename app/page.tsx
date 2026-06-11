import nextDynamic from "next/dynamic";
import { HomeHero } from "@/components/home/home-hero";
import { HomeMapSection } from "@/components/home/home-map-section";
import { HomeServicesSection } from "@/components/home/home-services-section";

const HomeWhySection = nextDynamic(
  () => import("@/components/home/home-why-section").then((m) => m.HomeWhySection),
  {
    loading: () => <div className="min-h-[720px] bg-surface-dark" aria-hidden />,
  }
);
import { HomeIndustriesSection } from "@/components/home/home-industries-section";
import { HomeProcessSection } from "@/components/home/home-process-section";
import { HomeCtaBanner } from "@/components/home/home-cta-banner";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeMapSection />
      <HomeWhySection />
      <HomeServicesSection />
      <HomeIndustriesSection />
      <HomeProcessSection />
      <HomeCtaBanner />
    </main>
  );
}

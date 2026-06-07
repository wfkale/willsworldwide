import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Wills Worldwide — Tanzania logistics company connecting Africa to the world since 2021.",
};

export default function AboutPage() {
  return <AboutClient />;
}

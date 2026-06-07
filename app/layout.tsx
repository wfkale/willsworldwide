import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wills Worldwide | Logistics & Freight Tanzania",
    template: "%s | Wills Worldwide",
  },
  description:
    "Technology-enabled logistics partner connecting Tanzania and East Africa to global trade corridors. Transit cargo, freight forwarding, clearing and distribution.",
  keywords: [
    "logistics Tanzania",
    "freight Dar es Salaam",
    "East Africa cargo",
    "transit cargo",
    "Wills Worldwide",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">
        <SmoothScrollProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

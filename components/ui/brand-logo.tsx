import Image from "next/image";
import { company } from "@/lib/content";

const LOGO_WIDTH = 652;
const LOGO_HEIGHT = 533;

type BrandLogoProps = {
  variant?: "header" | "hero";
  /** Lightened logo for dark / transparent headers */
  tone?: "default" | "onDark";
  priority?: boolean;
  className?: string;
};

const logoSrc = {
  default: "/logo.png",
  onDark: "/logo-header-light.png",
} as const;

const variantStyles = {
  header:
    "h-[clamp(2.75rem,5.5vw,3.75rem)] w-auto max-w-[min(52vw,13.5rem)]",
  hero: "h-[clamp(5.5rem,22vw,12rem)] w-auto max-w-[min(92vw,38rem)]",
};

const variantSizes = {
  header: "(max-width: 768px) 45vw, 180px",
  hero: "(max-width: 768px) 90vw, 560px",
};

export function BrandLogo({
  variant = "header",
  tone = "default",
  priority = false,
  className = "",
}: BrandLogoProps) {
  const onDark = tone === "onDark";

  return (
    <Image
      src={logoSrc[tone]}
      alt={company.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes={variantSizes[variant]}
      className={`object-contain ${variantStyles[variant]} ${
        onDark ? "drop-shadow-[0_2px_10px_rgba(0,194,255,0.22)]" : ""
      } ${className}`.trim()}
    />
  );
}

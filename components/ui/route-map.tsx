"use client";

import { useMemo, useState } from "react";
import { mapCountries, mapRoutes } from "@/lib/content";
import { usePauseWhenHidden } from "@/hooks/use-pause-when-hidden";

type RouteMapProps = {
  className?: string;
  interactive?: boolean;
  showLabels?: boolean;
};

type Point = { x: number; y: number };

function roadPath(from: Point, to: Point): string {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy) || 1;
  const bend = Math.min(dist * 0.18, 6);
  const cx = mx - (dy / dist) * bend;
  const cy = my + (dx / dist) * bend;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

function computeViewBox(padding = 6) {
  const xs = mapCountries.map((c) => c.x);
  const ys = mapCountries.map((c) => c.y);
  const minX = Math.min(...xs) - padding;
  const minY = Math.min(...ys) - padding;
  const maxX = Math.max(...xs) + padding;
  const maxY = Math.max(...ys) + padding;
  return `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;
}

export function RouteMap({ className = "", interactive = true, showLabels = false }: RouteMapProps) {
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);
  const { ref, paused } = usePauseWhenHidden<HTMLDivElement>();
  const viewBox = useMemo(() => computeViewBox(7), []);

  const getCountry = (id: string) => mapCountries.find((c) => c.id === id)!;

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center ${paused ? "motion-paused" : ""} ${className}`}
    >
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full max-h-[min(70vh,620px)]"
        aria-label="SADC and East Africa logistics route map"
      >
        <defs>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="#00C2FF" />
          </linearGradient>
          <linearGradient id="roadSurface" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>

        <ellipse cx="48" cy="46" rx="38" ry="34" fill="#00C2FF" opacity="0.04" />

        {mapRoutes.map((route, index) => {
          const from = getCountry(route.from);
          const to = getCountry(route.to);
          const path = roadPath(from, to);
          const isHovered = hoveredRoute === route.label;
          const speed = 3.5 + index * 0.3;

          return (
            <g key={route.label}>
              <path
                d={path}
                fill="none"
                stroke="url(#roadSurface)"
                strokeWidth={isHovered ? 2.4 : 1.8}
                strokeLinecap="round"
                opacity={isHovered ? 0.85 : 0.55}
              />
              <path
                d={path}
                fill="none"
                stroke="white"
                strokeWidth={isHovered ? 0.35 : 0.25}
                strokeLinecap="round"
                strokeDasharray="0.8 1.6"
                opacity={isHovered ? 0.5 : 0.28}
                className="route-lane-markings"
                style={{ animationDuration: `${speed + 1}s` }}
              />
              <path
                d={path}
                fill="none"
                stroke="url(#routeGrad)"
                strokeWidth={isHovered ? 1.1 : 0.65}
                strokeLinecap="round"
                strokeDasharray="2.2 1.4"
                opacity={isHovered ? 1 : 0.65}
                className={`route-freight-lane ${isHovered ? "route-freight-lane-active" : ""}`}
                style={{ animationDuration: `${speed}s` }}
                onMouseEnter={() => interactive && setHoveredRoute(route.label)}
                onMouseLeave={() => setHoveredRoute(null)}
              />
              {interactive && (
                <path
                  d={path}
                  fill="none"
                  stroke="transparent"
                  strokeWidth="4"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredRoute(route.label)}
                  onMouseLeave={() => setHoveredRoute(null)}
                />
              )}
            </g>
          );
        })}

        {mapCountries.map((country) => (
          <g key={country.id}>
            <circle
              cx={country.x}
              cy={country.y}
              r={country.hub ? 2.8 : 1.8}
              fill={country.hub ? "#FF6B00" : "#00C2FF"}
              opacity={country.hub ? 1 : 0.85}
            />
            {country.hub && (
              <>
                <circle
                  cx={country.x}
                  cy={country.y}
                  r="4.2"
                  fill="none"
                  stroke="#FF6B00"
                  strokeWidth="0.35"
                  opacity="0.45"
                  className="hub-pulse"
                />
                <circle
                  cx={country.x}
                  cy={country.y}
                  r="6"
                  fill="none"
                  stroke="#FF6B00"
                  strokeWidth="0.2"
                  opacity="0.2"
                />
              </>
            )}
            {(showLabels || country.hub) && (
              <text
                x={country.x}
                y={country.y - (country.hub ? 3.8 : 3.2)}
                textAnchor="middle"
                fill="white"
                fontSize={country.hub ? "3" : "2.4"}
                opacity={country.hub ? 1 : 0.82}
                fontWeight={country.hub ? "700" : "500"}
              >
                {country.name}
              </text>
            )}
          </g>
        ))}
      </svg>

      {interactive && hoveredRoute && (
        <div className="absolute bottom-4 left-4 right-4 animate-fade-in rounded-xl border border-cyan/30 bg-navy/90 p-4 backdrop-blur-md md:left-auto md:right-6 md:max-w-sm">
          {mapRoutes
            .filter((r) => r.label === hoveredRoute)
            .map((r) => (
              <div key={r.label}>
                <p className="font-semibold text-cyan">{r.label}</p>
                <p className="mt-1 text-sm text-white/70">{r.services}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

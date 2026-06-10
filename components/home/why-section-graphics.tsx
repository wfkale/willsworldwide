type GraphicProps = {
  className?: string;
};

export function WhyHeaderRoutes({ className = "" }: GraphicProps) {
  return (
    <svg
      viewBox="0 0 420 120"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="whyRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00C2FF" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M 8 88 Q 90 20 180 62 T 360 38"
        stroke="url(#whyRouteGrad)"
        strokeWidth="1.5"
        strokeDasharray="7 6"
        className="why-route-dash"
      />
      <path
        d="M 24 104 Q 120 48 210 78 T 400 58"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
        strokeDasharray="4 8"
      />
      <circle cx="180" cy="62" r="4" fill="#FF6B00" className="why-route-node" />
      <circle cx="360" cy="38" r="3" fill="#00C2FF" className="why-route-node" style={{ animationDelay: "0.6s" }} />
    </svg>
  );
}

export function WhyCardRoutes({ className = "" }: GraphicProps) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" aria-hidden>
      <circle cx="80" cy="80" r="58" stroke="rgba(0,194,255,0.15)" strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="80" cy="80" r="38" stroke="rgba(255,107,0,0.12)" strokeWidth="1" />
      <path
        d="M 80 22 Q 118 48 132 80 T 80 138"
        stroke="rgba(0,194,255,0.35)"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        className="why-route-dash"
      />
      <circle cx="80" cy="22" r="3" fill="#FF6B00" opacity="0.8" />
      <circle cx="132" cy="80" r="2.5" fill="#00C2FF" opacity="0.8" />
    </svg>
  );
}

export function WhyNetworkGrid({ className = "" }: GraphicProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={30 + col * 50}
            cy={30 + row * 50}
            r="2"
            fill="rgba(255,255,255,0.12)"
          />
        ))
      )}
      <path
        d="M 30 30 L 130 30 L 130 130 M 80 30 L 80 130 M 30 80 L 180 80"
        stroke="rgba(0,194,255,0.12)"
        strokeWidth="1"
      />
      <path
        d="M 30 30 L 180 180"
        stroke="rgba(255,107,0,0.18)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        className="why-route-dash"
      />
    </svg>
  );
}

export function WhyCompassArc({ className = "" }: GraphicProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <path
        d="M 60 12 A 48 48 0 0 1 108 60"
        stroke="#00C2FF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 12 60 A 48 48 0 0 1 60 108"
        stroke="#FF6B00"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="60" cy="60" r="4" fill="white" fillOpacity="0.35" />
    </svg>
  );
}

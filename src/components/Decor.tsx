import { useId } from "react";

type Tone = "butter" | "coral" | "lavender" | "navy" | "ink" | "cream";

export function Sparkle({ tone = "butter", size = 48, className = "" }: { tone?: Tone; size?: number; className?: string }) {
  return (
    <svg className={`sparkle ${className}`} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 2c1.6 9.6 4.8 13.6 9 16.4 3.1 2 7.6 3.2 13 5.6-5.4 2.4-9.9 3.6-13 5.6-4.2 2.8-7.4 6.8-9 16.4-1.6-9.6-4.8-13.6-9-16.4C11.9 27.6 7.4 26.4 2 24c5.4-2.4 9.9-3.6 13-5.6C19.2 15.6 22.4 11.6 24 2Z"
        fill={`var(--${tone})`}
      />
    </svg>
  );
}

// Circular rotating text badge.
export function RotatingBadge({
  text,
  tone = "lavender",
  dark = true,
  size = 120,
  href,
}: {
  text: string;
  tone?: Tone;
  dark?: boolean;
  size?: number;
  href?: string;
}) {
  const id = useId().replace(/:/g, "");
  const inner = (
    <span className={`badge ${dark ? "badge--dark" : ""}`} style={{ width: size, height: size }}>
      <svg className="badge__ring" viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path id={`ring-${id}`} d="M60 60m-50 0a50 50 0 1 1 100 0a50 50 0 1 1-100 0" />
        </defs>
        <text>
          <textPath href={`#ring-${id}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="badge__core">
        <Sparkle tone={tone} size={size * 0.3} />
      </span>
    </span>
  );
  return href ? (
    <a href={href} className="badge-link" aria-label={text.replace(/[•·|]/g, " ").trim()}>
      {inner}
    </a>
  ) : (
    inner
  );
}

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Dr. Maya Reynolds, PsyD, home">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <circle cx="17" cy="17" r="15" fill="none" stroke="var(--ink)" strokeWidth="3" />
        <path d="M2 17a15 15 0 0 0 30 0Z" fill="var(--ink)" />
        <circle cx="17" cy="12" r="5" fill="var(--butter)" />
      </svg>
      <span>
        Maya Reynolds<small>PsyD</small>
      </span>
    </a>
  );
}

export function Waveform() {
  const bars = [14, 26, 18, 34, 22, 30, 12, 24, 32, 16, 28, 20, 34, 14];
  return (
    <div className="waveform" aria-hidden="true">
      {bars.map((h, i) => (
        <span key={i} style={{ height: h, animationDelay: `${i * 0.09}s` }} className={i > 6 ? "is-soft" : ""} />
      ))}
    </div>
  );
}

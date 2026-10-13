// Spot illustrations for the service cards, in the same flat, outlined style as the hero.
import type { Service } from "@/content/site";

const stroke = { stroke: "var(--char)", strokeWidth: 2.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

function Star({ x, y, s = 1, fill }: { x: number; y: number; s?: number; fill: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0-9C1-3 3-1 9 0 3 1 1 3 0 9-1 3-3 1-9 0-3-1-1-3 0-9Z"
      fill={fill}
      className="twinkle"
    />
  );
}

// Anxiety: a storm cloud that has settled into calm
function CalmCloud() {
  return (
    <>
      <circle className="float-b" cx="160" cy="62" r="38" fill="var(--coral)" />
      <g className="float-a">
        <path
          d="M58 120c-18 0-24-22-8-30-2-22 24-32 38-18 8-22 44-22 50 4 20-2 30 20 16 34-2 6-6 10-14 10Z"
          fill="#fff"
          {...stroke}
        />
        <path d="M84 98q5 5 10 0M112 98q5 5 10 0" fill="none" {...stroke} />
        <path d="M96 108q7 6 14 0" fill="none" stroke="var(--coral-deep)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <path d="M24 146q15-10 30 0t30 0 30 0 30 0 30 0 30 0 30 0" fill="none" stroke="var(--navy)" strokeWidth="4" strokeLinecap="round" />
      <path d="M44 162q15-10 30 0t30 0 30 0 30 0 30 0" fill="none" stroke="var(--lavender)" strokeWidth="4" strokeLinecap="round" />
      <Star x={36} y={44} fill="var(--butter)" />
      <Star x={212} y={118} s={0.7} fill="var(--navy)" />
    </>
  );
}

// Trauma: something new growing, carefully held
function Sprout() {
  return (
    <>
      <circle cx="120" cy="92" r="66" fill="#fff" opacity=".55" />
      <g className="sway">
        <path d="M120 122V70" fill="none" {...stroke} />
        <path d="M120 92c-4-22-22-34-46-30 2 22 20 34 46 30Z" fill="var(--lavender)" {...stroke} />
        <path d="M120 76c2-24 20-38 46-36 0 24-18 38-46 36Z" fill="var(--navy-soft)" {...stroke} />
      </g>
      <path d="M86 120h68l-9 42h-50Z" fill="var(--coral)" {...stroke} />
      <path d="M80 112h80v12H80Z" fill="var(--coral)" {...stroke} />
      <path
        className="float-a"
        d="M184 46s-14-8-14-19a7.5 7.5 0 0 1 14-3.6 7.5 7.5 0 0 1 14 3.6c0 11-14 19-14 19Z"
        fill="var(--coral)"
        {...stroke}
      />
      <Star x={50} y={50} fill="var(--butter)" />
      <Star x={206} y={136} s={0.7} fill="var(--lavender)" />
    </>
  );
}

// Burnout: a battery slowly recharging
function Recharge() {
  return (
    <>
      <g className="float-b">
        <rect x="56" y="62" width="118" height="68" rx="16" fill="#fff" {...stroke} />
        <rect x="174" y="84" width="12" height="24" rx="4" fill="var(--char)" />
        <rect className="charge" x="66" y="72" width="98" height="48" rx="9" fill="var(--butter)" />
        <path d="M120 78 104 100h14l-6 18 18-24h-14l6-16Z" fill="var(--navy)" {...stroke} strokeWidth={2} />
      </g>
      <path d="M40 40v12M34 46h12" stroke="var(--coral)" strokeWidth="3" strokeLinecap="round" />
      <path d="M200 40v12M194 46h12" stroke="var(--navy)" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 156c20-10 40-10 60 0s40 10 60 0" fill="none" stroke="var(--coral)" strokeWidth="4" strokeLinecap="round" />
      <Star x={214} y={136} fill="var(--lavender)" />
      <Star x={30} y={124} s={0.7} fill="var(--coral)" />
    </>
  );
}

const scenes = { coral: CalmCloud, lavender: Sprout, butter: Recharge } satisfies Record<Service["tone"], () => React.ReactNode>;

export default function ServiceArt({ tone }: { tone: Service["tone"] }) {
  const Scene = scenes[tone];
  return (
    <svg className="service-art" viewBox="0 0 240 180" aria-hidden="true">
      <Scene />
    </svg>
  );
}

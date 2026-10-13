// Hand-built SVG: a calm figure inside a starry head silhouette.
const HEAD =
  "M150 520L150 450C105 420 80 360 80 290C80 160 175 70 290 70C380 70 445 135 450 225C452 250 448 262 455 278L480 330C485 340 478 346 468 347L458 348L462 372C464 380 456 384 452 386C458 394 458 404 450 408C448 432 440 450 410 452L360 452L360 520Z";

const stars: [number, number, number][] = [
  [150, 220, 2.5], [205, 150, 2], [370, 140, 2.5], [410, 200, 1.8], [130, 300, 2],
  [240, 390, 2], [340, 420, 2.4], [400, 330, 1.6], [180, 260, 1.5], [330, 110, 1.6],
  [120, 380, 1.8], [250, 120, 1.4], [420, 410, 1.6], [215, 470, 2],
];

function Star({ x, y, s = 1, fill }: { x: number; y: number; s?: number; fill: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0-9C1-3 3-1 9 0 3 1 1 3 0 9-1 3-3 1-9 0-3-1-1-3 0-9Z"
      fill={fill}
    />
  );
}

export default function HeadIllustration() {
  return (
    <svg className="head-illustration" viewBox="0 0 540 520" role="img" aria-labelledby="head-title">
      <title id="head-title">Illustration of a calm person balancing peacefully inside a starry mind</title>
      <defs>
        <clipPath id="head-clip">
          <path d={HEAD} />
        </clipPath>
      </defs>

      {/* soft sun rays behind the head */}
      <g fill="var(--sand)">
        <path d="M60 330c-30-8-48-2-60 10 18 4 36 2 60-10Z" />
        <path d="M70 400c-34 0-52 12-60 28 20-2 38-10 60-28Z" />
        <path d="M78 470c-28 6-42 22-46 40 18-6 32-18 46-40Z" />
        <path d="M455 120c10-30 30-44 50-48-6 20-22 36-50 48Z" />
        <path d="M470 175c24-20 46-24 64-18-14 14-34 20-64 18Z" />
        <path d="M430 80c-2-30 8-50 26-62 2 22-8 42-26 62Z" />
      </g>

      <path d={HEAD} fill="var(--navy)" />

      <g clipPath="url(#head-clip)">
        <path d="M60 210C140 180 220 240 300 205S440 160 500 190V40H60Z" fill="var(--navy-deep)" opacity=".7" />
        <path d="M60 360C150 330 210 390 300 350S430 320 500 345V520H60Z" fill="var(--navy-soft)" />
        <path d="M60 440C140 420 230 470 320 440S440 420 500 435V520H60Z" fill="var(--navy-deep)" opacity=".8" />

        {stars.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="var(--cream)" className="twinkle" style={{ animationDelay: `${i * 0.35}s` }} />
        ))}
        <Star x={160} y={180} s={0.9} fill="var(--butter)" />
        <Star x={405} y={285} s={0.8} fill="var(--coral)" />
        <Star x={260} y={430} s={0.7} fill="var(--cream)" />

        {/* planets */}
        <g className="float-a">
          <circle cx="385" cy="235" r="36" fill="var(--coral)" />
          <path d="M352 225c20 6 46-8 66 0M354 245c18 8 40-6 62 2" stroke="var(--coral-deep)" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
        <circle className="float-b" cx="170" cy="335" r="25" fill="var(--indigo)" />
        <circle className="float-a" cx="205" cy="455" r="28" fill="var(--coral)" />
        <path d="M380 395c18-10 40 0 36 16s-30 14-44 4" stroke="var(--indigo)" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>

      {/* figure in a balanced tree pose */}
      <g className="figure">
        <path d="M262 168c-10-38 30-62 54-40 18 16 10 34 18 52 8 20-6 36-22 30-10-20-30-14-50-42Z" fill="var(--coral)" />
        <path d="M268 150c-22 4-30 30-20 56 6 16-2 28 8 34 4-22 16-30 12-90Z" fill="var(--coral)" />
        <rect x="282" y="186" width="16" height="16" rx="6" fill="var(--skin)" />
        <circle cx="290" cy="168" r="24" fill="var(--skin)" />
        <path d="M279 168q4 4 8 0M295 168q4 4 8 0" stroke="var(--char)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M285 180q5 4 10 0" stroke="var(--coral-deep)" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* arms meeting in front of the chest */}
        <path d="M262 206c-12 18-6 34 26 30" stroke="var(--skin)" strokeWidth="11" fill="none" strokeLinecap="round" />
        <path d="M318 206c12 18 6 34-26 30" stroke="var(--skin)" strokeWidth="11" fill="none" strokeLinecap="round" />
        <rect x="258" y="198" width="64" height="56" rx="18" fill="var(--cream)" />
        <path d="M290 212l-7 26h14Z" fill="var(--skin)" />

        {/* skirt and legs */}
        <path d="M264 250h52l26 82c-26 12-78 12-104 0Z" fill="var(--coral)" />
        <path d="M262 290c26 8 52 8 78 0" stroke="var(--coral-deep)" strokeWidth="3" fill="none" opacity=".5" />
        <rect x="282" y="330" width="14" height="98" rx="7" fill="var(--skin)" />
        <path d="M296 340L334 366L297 390" stroke="var(--skin)" strokeWidth="13" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M276 426h26c8 0 12 10 4 12h-32c-4-4-2-12 2-12Z" fill="var(--indigo)" />

        {/* orbit ring around the waist */}
        <ellipse cx="290" cy="268" rx="88" ry="13" fill="none" stroke="var(--lavender)" strokeWidth="4" />
      </g>
    </svg>
  );
}

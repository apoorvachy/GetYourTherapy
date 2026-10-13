// Small line-icon set, drawn on a 24px grid with round 2px strokes so they match the site's outlines.
const paths = {
  pin: (
    <>
      <path d="M12 21s-7-6-7-11.5a7 7 0 0 1 14 0C19 15 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  video: (
    <>
      <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
      <path d="m15.5 10.5 6-3.5v10l-6-3.5" />
    </>
  ),
  wave: (
    <>
      <path d="M2 9.5c2.5-3 4.5-3 7 0s4.5 3 7 0 4.5-3 6 0" />
      <path d="M2 15.5c2.5-3 4.5-3 7 0s4.5 3 7 0 4.5-3 6 0" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.4A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" />,
  battery: (
    <>
      <rect x="2.5" y="7.5" width="16" height="9" rx="2" />
      <path d="M21.5 10.5v3" />
      <path d="m11 9.5-2 3h3.5l-2 3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  brain: (
    <>
      <path d="M11 5.5a3 3 0 0 0-5.5 1.7A3 3 0 0 0 4 12a3 3 0 0 0 1.5 4.8A3 3 0 0 0 11 18.5Z" />
      <path d="M13 5.5a3 3 0 0 1 5.5 1.7A3 3 0 0 1 20 12a3 3 0 0 1-1.5 4.8A3 3 0 0 1 13 18.5Z" />
    </>
  ),
  moon: <path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z" />,
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M15.8 14.3a4.5 4.5 0 0 1 5 5.2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 19.5 6v5.5c0 4.7-3.2 7.8-7.5 9.5-4.3-1.7-7.5-4.8-7.5-9.5V6Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4.2 2.8-7.2 7.5-7.2 0 4.2-2.8 7.2-7.5 7.2Z" />
      <path d="M12 15.5c0-3.3-2.3-5.8-6.5-5.8 0 3.3 2.3 5.8 6.5 5.8Z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5h16v10.5H10l-5 4v-4H4Z" />
      <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
    </>
  ),
  lotus: (
    <>
      <path d="M12 19.5c-2.6-2-3.8-4.8-3.8-7.7S9.6 6.3 12 4.5c2.4 1.8 3.8 4.4 3.8 7.3s-1.2 5.7-3.8 7.7Z" />
      <path d="M12 19.5c-4.2 0-7.8-2-9-5.6 3.2-.3 6.6 1.2 9 5.6Z" />
      <path d="M12 19.5c4.2 0 7.8-2 9-5.6-3.2-.3-6.6 1.2-9 5.6Z" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  body: (
    <>
      <circle cx="12" cy="4.8" r="2" />
      <path d="m4.5 9 7.5 2 7.5-2" />
      <path d="M12 11v4l-3.5 6M12 15l3.5 6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8.5 3v4M15.5 3v4" />
      <path d="m9.5 15 1.8 1.8 3.5-3.5" />
    </>
  ),
  map: (
    <>
      <circle cx="5.5" cy="18.5" r="2" />
      <circle cx="18.5" cy="5.5" r="2" />
      <path d="M7.5 18.5h6a3 3 0 0 0 0-6h-3a3 3 0 0 1 0-6h6" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, size = 24, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

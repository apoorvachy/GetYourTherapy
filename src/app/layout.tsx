import type { Metadata, Viewport } from "next";
import { Fraunces, Poppins } from "next/font/google";
import { faqs, hero, practice, services } from "@/content/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const title = "Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD";
const description =
  "Warm, collaborative therapy for adults in Santa Monica, CA. Anxiety, trauma & EMDR, and burnout support, in person or via telehealth across California. Book a free 15-min consult.";

export const metadata: Metadata = {
  metadataBase: new URL(practice.siteUrl),
  title,
  description,
  keywords: [
    "therapist Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR Santa Monica",
    "burnout counseling",
    "telehealth therapy California",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/office-santa-monica-1.jpg", width: 1400, height: 1050, alt: "Calm, sunlit therapy office in Santa Monica" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1d3557",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Psychologist", "MedicalBusiness"],
      "@id": `${practice.siteUrl}/#practice`,
      name: practice.name,
      description: hero.subhead,
      url: practice.siteUrl,
      image: `${practice.siteUrl}/images/dr-maya-reynolds.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: practice.street,
        addressLocality: practice.city,
        addressRegion: practice.region,
        postalCode: practice.postalCode,
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Santa Monica" },
        { "@type": "State", name: "California" },
      ],
      knowsAbout: ["Anxiety", "Panic", "Trauma", "EMDR", "Burnout", "Perfectionism", "CBT", "Mindfulness"],
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// Runs before first paint: hide animated elements only when JS is on and motion is allowed,
// and un-hide everything if the app never boots.
const motionBoot = `(function(){var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion-ready');setTimeout(function(){if(!window.__motion)d.classList.remove('motion-ready')},3000)})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      </head>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

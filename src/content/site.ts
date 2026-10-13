// All homepage copy lives here so it can be reviewed against the assignment in one place.
// Kept short on purpose: one idea per line, easy to scan.

import type { IconName } from "@/components/Icon";

export type Tone = "coral" | "lavender" | "butter";

export const practice = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Maya Reynolds",
  credential: "Licensed Clinical Psychologist",
  street: "123th Street 45 W",
  city: "Santa Monica",
  region: "CA",
  postalCode: "90401",
  // Placeholder domain; set NEXT_PUBLIC_SITE_URL to the deployed URL.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
};

export const hero = {
  h1: "Anxiety & Trauma Therapist in Santa Monica",
  subhead:
    "You don’t have to hold it all together alone. Get calm, practical support for your anxiety, trauma, or burnout, in person in Santa Monica or online across California.",
  cta: "Book a Free 15-Min Consult",
};

export const formats: { icon: IconName; label: string; detail: string }[] = [
  { icon: "pin", label: "In person", detail: "Santa Monica" },
  { icon: "video", label: "Online", detail: "All of California" },
];

export const focusAreas: { icon: IconName; label: string; tone: Tone }[] = [
  { icon: "wave", label: "Anxiety & panic", tone: "coral" },
  { icon: "heart", label: "Trauma", tone: "lavender" },
  { icon: "battery", label: "Burnout", tone: "butter" },
  { icon: "target", label: "Perfectionism", tone: "coral" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  points: { icon: IconName; label: string }[];
  tone: Tone;
  icon: IconName;
};

export const services: Service[] = [
  {
    id: "anxiety-therapy",
    title: "Anxiety Therapy in Santa Monica",
    description:
      "Anxiety therapy for adults caught in constant worry and overthinking, so your mind and body can finally feel calmer.",
    points: [
      { icon: "brain", label: "Racing thoughts" },
      { icon: "wave", label: "Panic & tension" },
      { icon: "moon", label: "Trouble sleeping" },
    ],
    tone: "coral",
    icon: "wave",
  },
  {
    id: "trauma-therapy",
    title: "Trauma Therapy & EMDR in Santa Monica",
    description:
      "Gently paced trauma therapy and EMDR for adults carrying past hurt, so you can feel safer in everyday life.",
    points: [
      { icon: "heart", label: "Single & complex trauma" },
      { icon: "users", label: "Childhood & relationships" },
      { icon: "shield", label: "Safety first, always" },
    ],
    tone: "lavender",
    icon: "heart",
  },
  {
    id: "burnout-counseling",
    title: "Burnout Counseling for Professionals, Santa Monica CA",
    description:
      "Burnout counseling for driven professionals and creatives ready to ease perfectionism and find a pace that lasts.",
    points: [
      { icon: "battery", label: "Work burnout" },
      { icon: "target", label: "Perfectionism" },
      { icon: "sprout", label: "Reconnecting with you" },
    ],
    tone: "butter",
    icon: "sun",
  },
];

export const qualities: { icon: IconName; title: string; line: string }[] = [
  { icon: "chat", title: "Warm & collaborative", line: "You’re part of every decision." },
  { icon: "shield", title: "Paced with safety", line: "We go at a speed that feels okay." },
  { icon: "lotus", title: "Mind + body", line: "Tools for thoughts and nerves alike." },
  { icon: "sprout", title: "Practical + deep", line: "Real tools, change that lasts." },
];

export const methods: { icon: IconName; abbr: string; name: string; line: string }[] = [
  { icon: "brain", abbr: "CBT", name: "Cognitive-Behavioral Therapy", line: "Untangle anxious thought loops." },
  { icon: "eye", abbr: "EMDR", name: "EMDR", line: "Ease the charge of painful memories." },
  { icon: "lotus", abbr: "Mindful", name: "Mindfulness", line: "Come back to the present moment." },
  { icon: "body", abbr: "Somatic", name: "Body-Based Work", line: "Calm a stressed nervous system." },
];

export const steps: { icon: IconName; title: string; line: string }[] = [
  { icon: "calendar", title: "Book a free call", line: "15 minutes, no pressure." },
  { icon: "chat", title: "First session", line: "In the office or online." },
  { icon: "map", title: "Make a plan", line: "Goals that fit your pace." },
  { icon: "sprout", title: "Grow", line: "Tools that last beyond therapy." },
];

export const faqs = [
  {
    q: "Who do you work with?",
    a: "Adults, often high achievers who seem fine on the outside but feel anxious or exhausted inside.",
  },
  {
    q: "Do you offer online therapy?",
    a: "Yes. Secure telehealth anywhere in California, plus in-person sessions in Santa Monica.",
  },
  {
    q: "What happens in the free consult?",
    a: "A relaxed 15-minute call to share what’s going on and see if we’re a good fit. No obligation.",
  },
  {
    q: "What is EMDR?",
    a: "A proven method that helps the brain process painful memories. You stay in control, and we build safety first.",
  },
  {
    q: "Where is your office?",
    a: "123th Street 45 W, Santa Monica, CA 90401. Quiet, private, and full of natural light.",
  },
];

# Dr. Maya Reynolds, PsyD — Homepage

Homepage for a (fictional) Santa Monica therapist, built for an internship copywriting task.
Color theme: navy · coral · butter yellow · lavender on white, with expressive serif headlines and rotating badges.

## Submission copy

| Field | Copy |
|---|---|
| **Hero H1** | Anxiety & Trauma Therapist in Santa Monica |
| **Hero sub-headline** | You don’t have to hold it all together alone. Get calm, practical support for your anxiety, trauma, or burnout, in person in Santa Monica or online across California. |
| **Hero primary CTA** | Book a Free 15-Min Consult |
| **Service 1 title** | Anxiety Therapy in Santa Monica |
| **Service 1 description** | Anxiety therapy for adults caught in constant worry and overthinking, so your mind and body can finally feel calmer. |
| **Service 2 title** | Trauma Therapy & EMDR in Santa Monica |
| **Service 2 description** | Gently paced trauma therapy and EMDR for adults carrying past hurt, so you can feel safer in everyday life. |
| **Service 3 title** | Burnout Counseling for Professionals, Santa Monica CA |
| **Service 3 description** | Burnout counseling for driven professionals and creatives ready to ease perfectionism and find a pace that lasts. |

All copy is kept in [`src/content/site.ts`](src/content/site.ts).

## SEO notes

- City + main service appear once in the H1, the `<title>`, and each service title.
- Each service description uses its keyword exactly once.
- `Psychologist` LocalBusiness + `FAQPage` JSON-LD with the Santa Monica address and California service area.
- Semantic headings (one H1, H2 per section, H3 per service), descriptive image alt text, canonical + Open Graph tags.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed URL (used for canonical and schema URLs). Deploys as-is to Vercel.

The consult form is front-end only and doesn't send data anywhere. For real client use, connect it to a HIPAA-compliant scheduler.

# Wills Worldwide Company Limited

Premium corporate website for **Wills Worldwide** — technology-enabled logistics across Tanzania and East Africa.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis smooth scroll

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

## Deploy on Railway

1. Connect this repository to Railway
2. Railway auto-detects Next.js via Nixpacks
3. Start command: `npm run start`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, map, services, industries, process |
| `/about` | Company story, timeline, leadership, culture |
| `/services` | Full service catalogue with detail sections |
| `/coverage` | East Africa corridors and border expertise |
| `/quote` | Multi-step quotation form |
| `/contact` | Contact options, map, message form |

## Content

All copy lives in `lib/content.ts`. Update contact details, leadership and services there.

## Forms

Quote and contact forms show success UI locally. Email/backend integration to be added later.

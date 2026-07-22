# jeremyvoegeli.com

Personal portfolio and resume site for Jeremy Voegeli — software engineer and percussion instructor, based in Newtown, CT.

**Live site:** [https://personal-website-temp-name.vercel.app/](https://personal-website-temp-name.vercel.app/)

## Overview

A five-page personal site with a fixed left sidebar for navigation:

- **Home** — landing page
- **About** — background, music/marching history, CS focus, and what I'm currently looking for
- **Projects** — featured project work, including [JobTracker](https://github.com/JeremyVoegeli/JobTracker) and a mock AWS-based auction site
- **Resume** — education and certifications
- **Contact** — contact info

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vercel](https://vercel.com/) for hosting and deployment
- Fonts via `next/font/google`: Space Grotesk (display), Inter (sans), JetBrains Mono (mono)

## Design System

Shared UI components live in `app/components/ui/DesignSystem.js` and are reused across pages rather than styled individually:

- `SectionCard` — bordered content block with a label
- `BadgeCard` — compact label/detail card
- `PhotoBadgeCard` — image paired with a label/detail, used for photo-driven sections
- `ProjectCard` / `ProjectLink` — project listing components
- `Ticks` — decorative accent element

Color palette is a light gray/blue base with a green accent, kept consistent across the sidebar, cards, and active nav states.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Deployment

Deployed on Vercel via GitHub integration — pushes to `main` trigger a production deploy automatically, and other branches/PRs get their own preview URLs.

## Links

- [GitHub](https://github.com/JeremyVoegeli)
- [LinkedIn](https://www.linkedin.com/in/jeremyvoegeli/)
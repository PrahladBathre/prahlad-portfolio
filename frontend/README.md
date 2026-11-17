# Prahlad Bathre — Portfolio

A Next.js App Router portfolio preserving the Violet Noir visual identity and existing React components.

## Requirements
- Node.js 20.9 or later
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run lint
npm run build
npm start
```

## SEO and discoverability
- Server-rendered App Router entry point.
- Central metadata with canonical URL, title, description, Open Graph, Twitter, and crawler directives.
- Generated social preview at `/opengraph-image`.
- Generated `/robots.txt` and `/sitemap.xml`.
- Person and WebSite JSON-LD structured data.
- Existing semantic page sections, descriptive headings, and image alternative text are preserved.

## Analytics
Vercel Web Analytics is included in the root layout through `@vercel/analytics/next`. Enable Web Analytics in the Vercel project dashboard to collect production data.

## Deployment
The Vercel project root directory should remain set to `frontend`. Use the standard Next.js build command, `npm run build`.

## Existing portfolio content
The existing Violet Noir components, styles, assets, project descriptions, resume link, and social links remain in `src/` and `public/`. No portfolio redesign is part of this migration.

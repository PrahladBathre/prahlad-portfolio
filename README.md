# Prahlad Bathre — Violet Noir Developer Portfolio

A Next.js App Router portfolio showcasing my full-stack development work, technical approach, and projects. The migration preserves the existing Violet Noir design and React component system while adding server-rendered delivery and stronger search/social metadata.

**Live portfolio:** https://prahlad-portfolio-beta.vercel.app/

## Stack
- Next.js App Router
- React 19
- JavaScript and CSS
- Three.js
- Lucide React and React Icons
- Vercel Web Analytics

## Run locally
```bash
git clone https://github.com/PrahladBathre/prahlad-portfolio.git
cd prahlad-portfolio/frontend
npm install
npm run dev
```
Open http://localhost:3000.

## Production checks
```bash
npm run lint
npm run build
npm start
```

## SEO implementation
- Server-rendered App Router page.
- Canonical URL, title, description, Open Graph, and Twitter metadata.
- Generated Open Graph image.
- Generated `robots.txt` and `sitemap.xml`.
- Person and WebSite JSON-LD structured data.
- Existing semantic headings, section labels, and image alternative text retained.

## Vercel deployment
Set the Vercel project's **Root Directory** to `frontend`. The framework preset should be **Next.js** and the build command should be `npm run build`. Enable Web Analytics in the Vercel dashboard to collect production traffic data.

## Project status
- **CampSync:** personal MERN project with a partial live demo; some functionality remains in progress.
- **Lead Management System:** UI prototype; backend workflows are planned, not implemented.
- **Professional experience:** described at a high level; private client and internal system details are intentionally omitted.

See [frontend/README.md](frontend/README.md) for frontend-specific instructions.

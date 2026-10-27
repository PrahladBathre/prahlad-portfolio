# Prahlad Bathre — Portfolio

A React + Vite portfolio for showcasing full-stack development work, professional experience, and technical approach.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Current project status

- **Portfolio:** visual refresh in progress; contact form backend is not connected.
- **CampSync:** personal MERN project with a partial live demo. Some functionality is still in progress; Socket.IO collaboration is not complete.
- **Lead Management System:** UI prototype only. Backend services and working workflows have not been implemented yet.
- **Professional experience:** described at a high level. Client website and internal CRM details are intentionally omitted because they are private.

## Before publishing

- Add the final resume PDF in the Contact section.
- Add a preferred public email address if you want a direct email action.
- Verify the current live behavior of CampSync and all outbound links.
- Connect a real contact-form backend before presenting a form as operational.


## Recent reliability and identity updates

- Restored the PB logo as the browser favicon and in the navigation/contact footer.
- Added an intentional branded opening screen before the portfolio appears.
- Removed intersection-triggered section mounting to prevent scroll-position jumps while content appears.
- Replaced the hero portrait with a lightweight animated logo/stack visual. The real portrait is retained only in the About section.
- Fixed GitHub/LinkedIn brand icon imports by using `react-icons`; Lucide remains in use for interface icons.

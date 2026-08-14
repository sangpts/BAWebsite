# Phung Tan Sang — Business Analyst Portfolio

A focused two-page portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Pages

- `/` — Profile, capabilities, selected work, experience, and direct links
- `/projects` — Detailed project case studies

## Local development

Run `npm install`, then `npm run dev`. Create a production build with `npm run build`.

Before publishing, add LinkedIn and project URLs in the typed data files and replace the labeled project placeholders with real screenshots. The authoritative CV is already available at `public/documents/phung-tan-sang-cv.pdf`.

## Local content database

Run `npm run db:start` to start MongoDB on `127.0.0.1:27018`, then run `npm run db:seed` to idempotently load the current site, profile, CV, experience, and project content. Content is stored in `phung_tan_sang_portfolio.portfolio_content` with `draft`/`published` status, ordering, unique slugs, and timestamps.

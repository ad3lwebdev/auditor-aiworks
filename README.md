# Alex Chen — AI Automation Architect Portfolio

A professional portfolio website for an AI Automation Specialist with n8n as the primary automation platform. Built with TanStack Start, Tailwind CSS v4, and content-collections for markdown-driven content.

## Tech Stack

- **Framework**: TanStack Start (React, file-based routing)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Content**: `content-collections` (markdown files → typed collections)
- **Forms**: Netlify Forms
- **Fonts**: Syne (display), IBM Plex Mono (code), Outfit (body)
- **Deployment**: Netlify

## Design

Dark theme with n8n's signature orange accent (`#ea580c`). Industrial-precision aesthetic with animated workflow diagram on the hero page, dot/grid background patterns, and smooth CSS animations.

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on port 3000. For full Netlify feature emulation (forms, edge functions):

```bash
netlify dev --port 8889
```

## Content

All content is stored as markdown files in `content/`:

| Directory | Description |
|-----------|-------------|
| `content/jobs/` | Work experience entries |
| `content/education/` | Education entries |
| `content/projects/` | Portfolio projects |
| `content/blog/` | Blog posts |

Edit the markdown files to update the displayed content. No code changes needed.

## Routes

| Path | Page |
|------|------|
| `/` | Hero / Home |
| `/projects` | Automation project showcase |
| `/resume` | Experience, skills, certifications |
| `/blog` | Blog post listing |
| `/blog/:slug` | Individual blog post |
| `/contact` | Contact form (Netlify Forms) |

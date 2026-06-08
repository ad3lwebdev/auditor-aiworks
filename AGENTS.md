# AGENTS.md — Project Architecture Guide

This is a professional portfolio website for an AI Automation Architect (Alex Chen) specialising in n8n. Built with TanStack Start, Tailwind CSS v4, and content-collections for markdown-driven content.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19, SSR) |
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4, custom CSS animations |
| Fonts | Syne (display), IBM Plex Mono (mono), Outfit (body) — via Google Fonts |
| Content | content-collections (type-safe markdown) |
| Forms | Netlify Forms |
| Language | TypeScript 5 (strict) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/             # File-based routing
    __root.tsx        # Root layout: Nav + Footer, site <head>, shellComponent pattern
    index.tsx         # Hero / home page (NOT the blog index)
    projects.tsx      # Automation project showcase
    resume.tsx        # Resume: experience timeline, skills bars, certifications
    contact.tsx       # Netlify Forms contact with service selector
    blog/
      index.tsx       # Blog post listing (/blog)
      $slug.tsx       # Individual blog post (/blog/:slug)
  components/ui/      # Radix UI-based primitives (Badge, Card, etc.)
  styles.css          # All styles: CSS vars, keyframes, utility classes
  lib/utils.ts        # cn() helper

content/              # Markdown content — edit these to update site data
  jobs/               # Work experience entries
  education/          # Education entries
  projects/           # Portfolio project entries
  blog/               # Blog posts

public/
  contact.html        # Static form required by Netlify Forms — keep field names in sync with contact.tsx
  favicon.ico
  headshot-on-white.jpg
```

## Key Decisions

- **`shellComponent`** in `__root.tsx` — TanStack Start SSR pattern for the root HTML shell; no `<Outlet />` needed at the top level
- **Home page is the hero**, not the blog — blog lives at `/blog/index.tsx`
- **Inline SVG workflow diagram** on the hero page — no icon library needed for animated workflow nodes
- **Netlify Forms**: `public/contact.html` must mirror all field names from `contact.tsx`; add `service` field was added to both
- **Dark theme always on** — `<html className="dark">` is set in `__root.tsx`; no theme toggle

## Design System

**Colors** (CSS variables in `styles.css`):
- Background: `oklch(0.09 0.01 264)` — near-black with slight blue tint
- Primary (n8n orange): `oklch(0.62 0.19 38)` ≈ `#ea580c`
- Border: `oklch(0.18 0.012 264)`
- Muted text: `oklch(0.55 0.015 264)`

**CSS utility classes** (defined in `styles.css`):
- `.bg-grid` / `.bg-dots` — decorative background patterns
- `.card-hover` — hover lift + orange border glow transition
- `.nav-glass` — frosted glass navigation
- `.text-gradient-orange` — orange gradient text via clip-path
- `.skill-bar` — orange gradient progress bar (3px height)
- `.workflow-path` / `.workflow-path-slow` — animated SVG stroke-dashoffset for workflow diagram
- `.animate-fade-up` / `.animate-fade-in` — entry animations (use with `style={{ animation: 'fade-up ...' }}`)
- `.glow-orb` — radial gradient blob for ambient glow effects
- `.noise-overlay` — subtle noise texture via pseudo-element

**Animation keyframes**: `fade-up`, `fade-in`, `dash-flow`, `node-appear`, `glow-pulse`, `counter-up`, `node-pulse`

## Content Collections Schema

Defined in `content-collections.ts`:

| Collection | Required Fields |
|-----------|----------------|
| `jobs` | `jobTitle`, `company`, `location`, `startDate`, `summary`, `tags` |
| `education` | `school`, `summary`, `startDate`, `tags` |
| `blog` | `title`, `date`, `summary`, `tags`, `author` |
| `projects` | `title`, `description`, `tags` |

Optional fields: `endDate` (jobs/education), `github`/`liveUrl`/`image` (projects), `content` (all, markdown body)

## Conventions

- Components: PascalCase
- Route files: TanStack Router convention (lowercase, `$param` for dynamic segments)
- Styles: Tailwind utilities + semantic class names for reusable patterns
- Import alias `@/` maps to `src/`

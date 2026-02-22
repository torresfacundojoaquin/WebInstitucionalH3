# CLAUDE.md - Project Guide

## Project Overview

Institutional website for **H3 Logistica de Campo**, an Argentine agricultural company specializing in crop adjuvants and agrochemical solutions. Built as a modern Angular SPA with static prerendering (SSG).

**Live URL:** Deployed on Cloudflare Workers (static assets)
**Repository:** `torresfacundojoaquin/WebInstitucionalH3`

## Tech Stack

- **Framework:** Angular 21 (standalone components, no NgModules)
- **Language:** TypeScript 5.9 (strict mode enabled)
- **Styling:** Tailwind CSS only (no custom CSS files or inline styles)
- **Prerender:** @angular/ssr (build-time static prerendering)
- **Forms:** Web3Forms API for contact form submissions
- **Testing:** Vitest 4.0.8 + JSDOM
- **Package Manager:** npm 10.9.4

## Project Structure

```
src/
  app/
    pages/          # Route-level page components (home, about, products, contact)
    layout/         # Main layout wrapper (navbar + router-outlet + footer + whatsapp)
    navbar/         # Navigation component
    footer/         # Footer component
    shared/         # Shared/reusable components (whatsapp-button)
    seo.service.ts  # SEO meta tag management service
    app.routes.ts   # Client-side routing
  main.server.ts    # Build-time prerender entry point
public/             # Static assets (images, icons, robots.txt, sitemap.xml, _headers)
```

## Common Commands

```bash
npm start           # Dev server at localhost:4200
npm run build       # Production build (static prerender)
npm test            # Run tests with Vitest
npm run watch       # Dev build with file watching
```

## Development Guidelines

### Architecture

- **Always use standalone components.** Never create NgModules.
- **Styling must use Tailwind CSS exclusively.** Do not add custom CSS classes or create `.css`/`.scss` files. Use Tailwind utility classes directly in templates.
- All new pages go under `src/app/pages/`.
- Shared/reusable components go under `src/app/shared/`.
- Route definitions live in `src/app/app.routes.ts` and must include SEO metadata (title + description).

### SEO

- Every new route must include `title` and `data.description` in its route definition.
- The `SeoService` handles dynamic meta tag updates — use it for any page that needs custom OG tags or structured data.
- Update `public/sitemap.xml` when adding new routes.

### Styling

- Use only Tailwind utility classes in HTML templates.
- Responsive design is required: use Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`).
- Tailwind config is at `tailwind.config.js` — extend here if custom values are needed.

### Testing

- Write unit tests for all new features and bug fixes.
- Test files use the `*.spec.ts` naming convention.
- Place test files alongside their source files.
- Use Vitest + JSDOM for component and service testing.

### Code Style

- 2-space indentation.
- Single quotes for strings (enforced by EditorConfig + Prettier).
- 100-character line width (Prettier).
- Strict TypeScript: no `any` types, use proper interfaces/types.

## Git Workflow

### Branching

- Main branch: `main`
- Feature branches: `feature/<description>` (e.g., `feature/contact-form`)
- Bug fixes: `fix/<description>` (e.g., `fix/navbar-scroll`)
- All changes go through Pull Requests to `main`.

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add product detail page
fix: correct WhatsApp link on mobile
style: adjust banner spacing on tablet
refactor: extract product card into shared component
test: add unit tests for SeoService
chore: update Angular to v21.1
docs: update sitemap with new routes
```

**IMPORTANT:** Never add `Co-Authored-By` trailers to commits.

### PR Guidelines

- One feature or fix per PR.
- PR title follows conventional commit format.
- Include a description of what changed and why.

## External Integrations

- **Web3Forms:** Contact form submissions (250 emails/month limit). Access key is in `contact.ts`.
- **WhatsApp:** Direct messaging link with phone `+54 9342 4064362`.

## Deployment

- **Platform:** Cloudflare Workers (static assets via Git integration)
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Output directory:** `dist/WebInstitucionalH3/browser` (configured in `wrangler.json`)
- All routes are prerendered at build time — no server required
- Set `NODE_VERSION=22` environment variable in Cloudflare dashboard
- Security and cache headers configured via `public/_headers`
- Auto-deploys on push to `main`
- **Production URL:** `web-institucional-h3.facundojoaquintorres8.workers.dev`
- **Custom domains:** `h3logisticadecampo.com` / `www.h3logisticadecampo.com`
- **Preview URLs:** Pushes to non-`main` branches auto-deploy to `<branch>-web-institucional-h3.facundojoaquintorres8.workers.dev` for testing before merging

## Important Notes

- Content is in **Spanish** (target audience: Argentina).
- Code, commits, and documentation are in **English**.
- The project uses Angular's modern control flow syntax (`@if`, `@for`, `@switch`) — do not use legacy `*ngIf`, `*ngFor` directives.
- Images are SVG for products (`public/products/`) and optimized JPG/PNG for banners (`public/institutional/`).

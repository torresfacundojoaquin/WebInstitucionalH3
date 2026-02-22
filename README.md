# H3 Logistica de Campo

Institutional website for **H3 Logistica de Campo**, an Argentine agricultural company specializing in crop adjuvants and agrochemical solutions.

## Tech Stack

- **Angular 21** (standalone components, static prerendering)
- **TypeScript 5.9** (strict mode)
- **Tailwind CSS**
- **Vitest + JSDOM** for testing
- **Cloudflare Workers** for hosting (static assets)

## Getting Started

```bash
npm install
npm start         # Dev server at http://localhost:4200
```

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm start`       | Start dev server                   |
| `npm run build`   | Production build (static prerender)|
| `npm test`        | Run unit tests                     |
| `npm run watch`   | Dev build with file watching       |

## Build

```bash
npm run build
```

Output is generated in `dist/WebInstitucionalH3/browser` with prerendered HTML for all routes.

## Deployment

Hosted on **Cloudflare Workers** with static assets. Deployment is automatic on push to `main` via Git integration.

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Output directory:** `dist/WebInstitucionalH3/browser`

Configuration is in `wrangler.json`.

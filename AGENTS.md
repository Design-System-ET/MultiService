# AGENTS.md — PlantillaWeb

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Verification order

Run these before assuming the repo is healthy:

```bash
npm run lint       # ESLint (only checks src/)
npm run lint:css   # Stylelint (checks src/**/*.css)
npm run typecheck  # tsc --noEmit
npm run build      # Vite build
```

## Key commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | ESLint on `src/` only |
| `npm run lint:css` | Stylelint on `src/**/*.css` |
| `npm run clean` | Delete `dist/` |
| `npm run deploy` | Publish `dist/` to GitHub Pages |

## Architecture

- **Multi-page SPA**: Entry points are `index.html` (main) and `pages/contacto.html` (contacto). Both are registered in `vite.config.js` under `build.rollupOptions.input`. Adding a page requires registering it there.
- **TypeScript**: Strict mode (`"strict": true`). Compiled by Vite at build time; `tsc` is only used for type checking.
- **CSS hub**: `src/styles/style.css` is the single entry — it `@import`s all partials (`var.css`, `tags.css`, `footer.css`, per-page CSS). New page styles must be added there.
- **Env vars**: `.env` defines `VITE_SITE_URL`. Used in HTML as `%VITE_SITE_URL%` (replaced by Vite's `transformIndexHtml`) and in TS as `import.meta.env.VITE_SITE_URL`.

## Conventions & quirks

- **ESLint ignores `*.js`** — only `src/` is linted. Config files (`vite.config.js`, `eslint.config.js`) are excluded.
- **No test framework** is configured.
- **ESM only**: `"type": "module"` in package.json.
- **Prefer npm imports over CDN scripts** — Bootstrap, Bootstrap Icons, and Font Awesome now load via npm.
- **`main.ts` imports `./scripts/contacto`** — contacto logic runs on both pages. Decouple if contact page is removed or refactored.

## Known issues (not yet fixed)

- Footer HTML duplicated in both `index.html` and `pages/contacto.html`
- Empty `<nav>` placeholder in `pages/contacto.html`

# RR Bamboo Blinds — Mats & Curtains

Marketing website for RR Bamboo Blinds, built with **React 18 + Vite** (JavaScript / JSX, CSS Modules).

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script                 | What it does                                   |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR             |
| `npm run build`        | Production build to `dist/`                    |
| `npm run preview`      | Serve the production build locally             |
| `npm run lint`         | ESLint (react, react-hooks, jsx-a11y, prettier) |
| `npm run lint:fix`     | ESLint with auto-fix                           |
| `npm run format`       | Format `src/` with Prettier                    |
| `npm run format:check` | Verify formatting (useful in CI)               |

Requires Node.js ≥ 18.18.

## Project structure

```
rr-bamboo-blinds/
├── index.html                  # Vite entry (fonts, meta, #root)
├── public/
│   └── favicon.png
├── src/
│   ├── main.jsx                # ReactDOM bootstrap (StrictMode)
│   ├── App.jsx                 # Page composition + lightbox state
│   ├── assets/
│   │   └── images/             # Real image files (brand / features / products / work)
│   │       └── index.js        # Single image registry — import from here
│   ├── components/
│   │   ├── common/             # Reusable, presentational building blocks
│   │   │   ├── Button/         # <Button variant="primary|ghost" href?>
│   │   │   ├── Container/      # Max-width content wrapper
│   │   │   ├── Icon/           # Inline SVG icon set (iconPaths.jsx)
│   │   │   ├── Lightbox/       # Full-screen image viewer (Esc / backdrop close)
│   │   │   ├── SectionHeader/  # Tag + title + description
│   │   │   ├── Slider/         # Cross-fade slider (autoplay, nav, dots, zoom)
│   │   │   └── StarRating/
│   │   └── layout/             # Header (scroll-spy nav + mobile menu), Footer, WhatsAppFloat
│   ├── sections/               # One folder per page section
│   │   ├── Hero/
│   │   ├── Products/           # + ProductCard
│   │   ├── Work/               # + WorkCard, ReviewCard
│   │   └── Contact/            # + ContactLink, BambooGrove
│   ├── data/                   # Content only (no UI): products, work, reviews, features, nav, contact links
│   ├── constants/site.js       # Business details, section ids, tunables
│   ├── hooks/                  # useActiveSection, useKeyDown, useLockBodyScroll
│   ├── utils/scroll.js
│   └── styles/
│       ├── variables.css       # Design tokens (colours, fonts, radii, z-index)
│       └── global.css          # Resets + base element styles
├── eslint.config.js
├── .prettierrc
├── jsconfig.json               # `@/` → `src/` alias for editors
└── vite.config.js              # `@/` alias, CSS Modules (camelCase), vendor chunk
```

## Conventions

- **Components**: one folder per component — `Component.jsx`, `Component.module.css`, `index.js` barrel. PascalCase names, default export, `propTypes` on every component that takes props.
- **Styling**: CSS Modules, scoped per component. Shared values live in `src/styles/variables.css` as CSS custom properties (`var(--color-gold)`, `var(--font-display)` …). Class names are camelCase in CSS and accessed as `styles.className`.
- **Content vs. UI**: all copy, product lists, reviews and installation photos live in `src/data/`. Business details (phone, email, hours, service area) live in `src/constants/site.js` — change them once, they update everywhere.
- **Images**: add the file under `src/assets/images/...`, register it in `src/assets/images/index.js`, then reference it from `src/data/`. Vite hashes and optimises them at build time.
- **Imports**: use the `@/` alias (`import { Button } from '@/components/common'`).
- **Accessibility**: semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), `aria-*` on interactive controls, keyboard-dismissable lightbox, reduced-motion support.

## Adding content

- **New product** → append an object to `PRODUCTS` in `src/data/products.js`.
- **New installation** → add images to `src/assets/images/work/`, register them in `workImages`, then append to `WORK_ITEMS` in `src/data/work.js`.
- **New review** → append to `REVIEWS` in `src/data/reviews.js`.
- **New icon** → add an entry to `ICON_PATHS` in `src/components/common/Icon/iconPaths.jsx`.

## Deployment

`npm run build` produces a static site in `dist/`. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, S3/CloudFront, cPanel …). If the site is served from a sub-path, set `base` in `vite.config.js`.

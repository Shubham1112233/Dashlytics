# Dashlytics

Analytics-style dashboard for revenue, users, and orders. Built as a portfolio-ready [Next.js](https://nextjs.org) app with typed data validation, cached server state, and a polished light/dark UI.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)

## Features

- **Metrics overview** — Revenue (currency), users, and orders with period-over-period deltas.
- **Time ranges** — Switch between 7, 30, and 90 days; selection is persisted in the browser.
- **Revenue chart** — Responsive bar chart with gradients and formatted tooltips ([Recharts](https://recharts.org)).
- **Theming** — Light, dark, or system preference; persisted alongside other UI state.
- **Data safety** — API-shaped responses validated at runtime with [Zod](https://zod.dev); TypeScript types inferred from schemas.
- **Server state** — [TanStack Query](https://tanstack.com/query) for caching, loading/error states, and background updates.

## Tech stack

| Area | Libraries |
|------|-----------|
| Framework | Next.js (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Server state | TanStack React Query v5 |
| Client state | Zustand (with `persist` for preferences) |
| Validation | Zod |
| Charts | Recharts |
| Icons | Lucide React |

## Prerequisites

- **Node.js** 20+ (recommended)
- **npm** (ships with Node)

## Getting started

Clone the repository, install dependencies, and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production server (after `build`) |
| `npm run lint` | Run ESLint |

## Project layout

```
app/              # App Router — layout, page, providers, global styles
components/       # UI — chart, stat cards, header, skeletons, errors
hooks/            # React Query hooks (e.g. useStats)
lib/schemas/      # Zod schemas and inferred types
services/         # Data fetching (mock API; swap for real endpoints)
stores/           # Zustand stores (date range, theme)
```

## Data layer

`services/api.ts` currently returns **mock** metrics and simulates network latency. The same module is the right place to call a real HTTP API: keep returning data that satisfies `statsSchema` (see `lib/schemas/stats.ts`) so the UI and React Query layer stay unchanged.

## Deployment

The app is a standard Next.js static-friendly client page; deploy on [Vercel](https://vercel.com)

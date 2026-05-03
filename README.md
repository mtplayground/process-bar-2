# process-bar-2

Baseline Next.js application for the Process Bar 2 roadmap.

## Stack

- Next.js App Router
- TypeScript
- ESLint
- Prettier

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run format`

## Environment

Copy `.env.example` to `.env.local` for local development.

The env contract is grouped around:
- database connection and local Postgres container settings
- auth base URL and secret material
- seeded admin credentials for the initial sign-in flow

## Self-hosted deployment

The repository ships with a multi-stage `Dockerfile` that builds the Next.js standalone server and a `docker-compose.yml` stack for the app plus Postgres.

For Docker Compose:
- copy `.env.example` to `.env`
- set a real `AUTH_SECRET`
- set `DATABASE_URL` for the container network, for example `postgresql://processbar:change-me@postgres:5432/processbar2?schema=public`
- run `docker compose up --build`

The app is exposed on `http://localhost:3000` and the container listens on port `8080` internally.

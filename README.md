# Anumnu

Next.js 16 app with Prisma + PostgreSQL.

## Tech Stack

- Next.js 16 (Turbopack)
- Prisma ORM
- PostgreSQL (via Docker)

## Getting Started

Copy-paste these commands in order:

```bash
npm install            # install dependencies
docker compose up -d   # start the PostgreSQL database
npm run dev            # run the app
```

App runs at **http://localhost:3000**.

The default `.env` uses the local Docker database:

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/anumnu?schema=public
```

Docker Postgres credentials — DB: `anumnu`, user: `postgres`, password: `postgres`, port: `5432`.

## Useful Scripts

```bash
npm run dev          # start dev server
npm run build        # production build
npm run start        # run production build
npm run db:studio    # open Prisma Studio
npm run db:dev       # create a new migration after schema changes
npm run lint         # lint
npm run typecheck    # type-check
npm run test         # run tests
```

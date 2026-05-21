# Portfolio — Matthew Raga

Freelance-focused portfolio built with Next.js 14, React, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize your content

Edit these files as you review the site:

| File | What to update |
|------|----------------|
| [`lib/constants.ts`](lib/constants.ts) | Name, email, links, availability, timezone |
| [`lib/data.tsx`](lib/data.tsx) | `currentWorkStack` (WelcomeWare tech), services, projects, freelance skills |
| [`public/avatar.jpg`](public/avatar.jpg) | Your profile photo (shows initials if missing) |

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for production Open Graph URLs (e.g. `https://yoursite.vercel.app`).

## Deploy

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) or any Next.js host.

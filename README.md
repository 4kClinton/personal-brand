# Clinton Kibet — Codex of a Polymath

A personal site built as a Renaissance codex. Dark theme, ember accent, all DaVinci-style sketches drawn live with SVG stroke animations.

Built with **Next.js 15 + React 19**.

---

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- `next/font/google` — Cormorant Garamond, EB Garamond, Caveat, Cinzel, JetBrains Mono
- `next/image` for optimized portrait + ghost layers
- Plain CSS (no Tailwind) — all in `app/globals.css`

No external CSS frameworks, no animation libraries. CSS keyframes + IntersectionObserver only.

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

---

## Deploy to Vercel — three options, pick one

### Option A — `git push` (recommended)

1. Create a new GitHub repo (e.g. `clinton-kibet-site`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial codex"
   git branch -M main
   git remote add origin https://github.com/4kClinton/clinton-kibet-site.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new — import the repo. Vercel auto-detects Next.js. Just click **Deploy**.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. First run links the project; subsequent `vercel --prod` deploys to production.

### Option C — Drag-and-drop

Run `npm run build` first, then drag the entire project folder onto https://vercel.com/new.

---

## After it's live

Add a custom domain in Vercel → Project Settings → Domains. If you don't own one yet, [GoDaddy](https://www.godaddy.com), [Namecheap](https://www.namecheap.com), or [Porkbun](https://porkbun.com) all work. `clintonkibet.com` and `clintkibet.com` are the obvious candidates.

Once a domain is attached, update `metadataBase` in `app/layout.tsx` to that URL (currently set to `https://clintonkibet.com`) so Open Graph share-card links work correctly.

---

## Project structure

```
.
├── app/
│   ├── globals.css       # all styling, ~900 lines
│   ├── layout.tsx        # fonts + metadata
│   └── page.tsx          # composes the sections
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx          # the portrait + Vitruvian frame
│   ├── Codex.tsx         # 5 skill folios with SVG diagrams
│   ├── Workshop.tsx      # projects with bespoke SVG diagrams
│   ├── Manifesto.tsx
│   ├── Correspondence.tsx
│   └── ScrollReveal.tsx  # IntersectionObserver client component
├── lib/
│   └── projects.ts       # project data (edit this to add new work)
├── public/assets/
│   ├── portrait.png
│   ├── vitruvian.png
│   ├── john.png
│   └── mona.png
└── package.json
```

---

## How to add a new project

Open `lib/projects.ts`, push a new object onto the `projects` array:

```ts
{
  folio: 'III.iv',
  name: 'Tamiron',
  tagline: '— an agent marketplace, for Africa.',
  description: '...',
  role: 'Founder',
  year: '2025 — present',
  sector: 'AI · Marketplace',
  stack: ['Convex', 'Next.js', 'Claude'],
  url: 'https://tamiron.com',
  diagram: 'nima', // pick any of: nima | swyft | monty
}
```

To give a new project its own diagram, add another component in `components/Workshop.tsx` and extend the `diagramMap`. The `.draw` class on any SVG element will get the stroke-draw-on animation for free.

---

## How to update the manifesto / hero copy

- Hero name, role, lede, marginalia: `components/Hero.tsx`
- Manifesto: `components/Manifesto.tsx`
- Channels (LinkedIn, GitHub, IG): `components/Correspondence.tsx`

---

## Tone of the brand system

Renaissance codex × dark chiaroscuro. The portrait is the icon. Everything around it is the polymath's notebook — sketches in faded sepia, marginalia in handwritten Italian, geometric proportion lines.

If you ever extend this — a `/works` route, an essay system, a gallery — keep the codex frame: folio numbers, Latin/Italian small text, hand-drawn SVG diagrams, the same five fonts. Don't import a CSS framework. Don't introduce a second accent color. The system holds together because it stays narrow.

# DX Solutions — English Company Profile

A production-ready, mobile-first company profile rebuilt from the supplied English PPT. The site uses Next.js App Router without a `src/` directory and is prepared for direct Vercel deployment.

## Stack

- Next.js 16.2.9 / React 19.2.4 / TypeScript
- App Router (`app/` at the project root)
- Pretendard only: 400, 500, 600, 700
- Next Image, static metadata, sitemap, robots
- No UI or animation runtime dependency

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

All four commands were run successfully before delivery.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel.
3. Keep the detected framework preset as **Next.js**.
4. Optionally add `NEXT_PUBLIC_SITE_URL=https://your-domain.com` to Production environment variables.
5. Deploy. No custom build command or output directory is required.

For CLI deployment:

```bash
npx vercel
npx vercel --prod
```

## Design and performance decisions

- Mobile-first layout with dedicated navigation, horizontal snap rails, compact tabs, and card-based data presentation.
- PPT tables and architecture diagrams were rebuilt as semantic responsive components rather than embedded as slide screenshots.
- Videos are transcoded to web-compatible H.264/AAC MP4 with fast-start metadata and are not mounted until a demo modal is opened.
- Images were resized and converted to WebP; the logo remains a transparent optimized PNG.
- Scroll reveal uses the native Intersection Observer API and respects `prefers-reduced-motion`.
- Below-the-fold sections use `content-visibility` where supported.
- Modals support Escape-to-close; document viewers also support left/right keyboard navigation.
- First/last slide date labels were intentionally omitted.

## Content maintenance

- Primary copy and structured datasets: `lib/data.ts`
- Page composition: `app/page.tsx`
- Interactive components: `components/client.tsx`
- Global responsive styling: `app/globals.css`
- Optimized media: `public/media/`
- PPT-to-web mapping: `docs/PPT_MAPPING.md`

## Environment

Copy `.env.example` to `.env.local` only when a custom canonical domain is required. The fallback canonical URL is the current DX Solutions corporate domain.
"# dx-solutions-site-en" 

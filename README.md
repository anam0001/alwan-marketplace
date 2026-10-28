# Alwan Marketplace

A women-focused talent marketplace platform built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS**
- **Framer Motion**
- **TypeScript**

## Easy content changes

- Change the logo in `public/` and update `logo` in `src/lib/siteConfig.ts`.
- Change email, website, WhatsApp, Instagram, Facebook, and LinkedIn links in `src/lib/siteConfig.ts`.
- Replace category photos in `public/category-images/` using the existing filenames.
- Creator portfolio images are uploaded through Supabase Storage when a verified creator submits a profile.
- Approve creator applications at `/admin/creators` using an email listed in `ADMIN_EMAILS`.

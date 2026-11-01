# Baddireddy Hari Charan — Premium Personal Developer Portfolio (V2)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **"I BUILD SOFTWARE • I EXPLORE AI • I CREATE INTELLIGENT AUTOMATIONS"**

Production-grade personal developer portfolio for **Baddireddy Hari Charan**, Computer Science undergraduate at S.R.K.R. Engineering College (8.78 CGPA). Specializing in AI systems, full-stack web applications, and enterprise workflow automations.

---

## 🌟 Portfolio V2 Enhancements

- **Dual Theme Switcher (Dark / Light)**: Defaulting to the signature deep charcoal luxury aesthetic, with a crisp high-contrast light mode, smooth transitions, and persistent `localStorage` preference.
- **Natural Profile Photography**: Integrates the newly supplied checkered-shirt portrait alongside the black-shirt portrait with natural facial preservation and responsive framing.
- **Consolidated Executive Leadership**: Single unified entry representing both **ACE** (Association of Computer Engineers) and **ACM** (Association for Computing Machinery) student chapters.
- **Verified Project Links & Deployments**: Direct live deployments and GitHub repositories extracted directly from the verified source:
  - *Smart Grievance*: `https://github.com/haricharanbaddireddy-del/Smart-Grievance-CSI-2k26.git`
  - *AI Hackathon Team Matcher*: `https://github.com/haricharanbaddireddy-del/AI-Hackathon-Team-Matcher`
  - *Decision Making Spinner*: `https://github.com/haricharanbaddireddy-del/decision-making-spinner.git` & [Live Vercel Demo](https://decision-making-s-git-442c24-haricharanbaddireddy-dels-projects.vercel.app/)
  - *Mood Based Quote Generator*: `https://github.com/haricharanbaddireddy-del/random-quote-generator.git` & [Live Vercel Demo](https://random-quote-generator-nu-swart.vercel.app/)
  - *Automatic Birthday Wish Sender*: n8n + Google Calendar + Twilio pipeline
- **Interactive Event Lightbox Galleries**: Dedicated interactive popup galleries for **IDE Bootcamp 2026**, **SAMAGRA 2K26**, **Prajwalan 2K26**, **HackOverflow 2K25**, and **TEDxSRKR** featuring keyboard navigation, fullscreen viewing, and image counters.
- **Dedicated Speeches & Presentations Section**: Embedded video player modals and direct Google Drive links for the **SRKR Orator Championship Prelims & Semifinals** ("Small Habits, Big Change").
- **Official Certificate Gallery**: Filterable grid of official digital credentials with high-resolution previews and original Google Drive verification links.

---

## 📂 Project Architecture

```
Hari's Portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Dark & light theme variables, glassmorphism
│   ├── icon.svg                 # Custom modern SVG monogram favicon
│   ├── layout.tsx               # Root layout with ThemeProvider & SEO metadata
│   └── page.tsx                 # Master page assembling all 10 portfolio sections
├── components/
│   ├── About.tsx                # Bio, dual portrait treatment, academic cards
│   ├── Achievements.tsx         # Honors summary cards & milestones
│   ├── CertificateGallery.tsx   # Official digital credentials with modal preview
│   ├── Contact.tsx              # Validated form, confetti, copy buttons, fallbacks
│   ├── CustomCursor.tsx         # Subtle desktop-only magnetic pointer ring
│   ├── Education.tsx            # B.Tech CSE, Intermediate, Schooling timeline
│   ├── EventGalleries.tsx       # Interactive lightbox for hackathons & bootcamps
│   ├── Experience.tsx           # Vertical timeline with consolidated ACE & ACM
│   ├── Footer.tsx               # Brand tagline, quick navigation, back-to-top
│   ├── Hero.tsx                 # Headline, live availability, portrait frame, CTAs
│   ├── Navbar.tsx               # Sticky blur header with theme toggle & nav
│   ├── Projects.tsx             # Filterable project grid & full architecture modal
│   ├── ScrollProgress.tsx       # Sleek top viewport scroll depth indicator
│   ├── Skills.tsx               # Grouped skill categories with verified tags
│   ├── Speeches.tsx             # Oratory video players with embed fallbacks
│   └── ThemeProvider.tsx        # Light/Dark context with localStorage persistence
├── data/
│   ├── achievements.ts          # Milestones and departmental awards
│   ├── certificates.ts          # 8 verified certificate records & Drive URLs
│   ├── education.ts             # SRKR (8.78 GPA), Aditya (96%), Montessori (88.3%)
│   ├── events.ts                # Event lightbox photographs & takeaways
│   ├── experience.ts            # Consolidated ACE & ACM Executive Body, TEDx
│   ├── profile.ts               # Core profile metadata, links, contact info
│   ├── projects.ts              # Verified GitHub repos, live demos, architectures
│   ├── skills.ts                # Programming, Web, AI & Automation, CS, Tools
│   └── videos.ts                # Orator Championship speeches & drive embed URLs
├── lib/
│   └── utils.ts                 # Class merging utility (clsx + twMerge)
├── public/
│   ├── images/
│   │   ├── certificates/        # Downloaded certificate preview thumbnails
│   │   ├── events/              # High-resolution event photographs
│   │   ├── videos/              # Speech presentation video thumbnails
│   │   ├── hari-charan-portrait.jpg    # Primary black-shirt portrait
│   │   └── hari-charan-portrait-2.jpg  # Newly supplied checkered portrait
│   └── resume/
│       └── Hari_Charan_Resume.pdf      # Direct downloadable PDF resume
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Running Locally

```bash
cd "/Users/haricharan/Downloads/Hari's Portfolio"
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Build and test production bundle:
```bash
npm run build
npm run start
```

---

## ☁️ Vercel Deployment

1. Push your changes to GitHub:
```bash
git push origin main
```
2. In [Vercel](https://vercel.com), import your repository and click **Deploy**. Vercel will automatically build the Next.js production bundle.

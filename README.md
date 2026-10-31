# Baddireddy Hari Charan — Premium Personal Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **"I BUILD SOFTWARE • I EXPLORE AI • I CREATE INTELLIGENT AUTOMATIONS"**

Production-ready, dark-themed personal developer portfolio for **Baddireddy Hari Charan**, Computer Science undergraduate at S.R.K.R. Engineering College (8.78 CGPA). Specializing in AI systems, full-stack web applications, and enterprise workflow automations.

---

## 🌟 Key Features

- **Architectural Separation of Concerns**: All content (profile, projects, skills, achievements, education, experience) resides in type-safe files inside `/data`. Adding a new project or updating a CGPA takes seconds without modifying any UI component.
- **Dark Luxury Aesthetic**: Deep charcoal surfaces (`#08090C`, `#0F1117`), electric indigo (`#6366f1`) and violet/cyan accents, crisp typography, and restrained ambient glows.
- **Dynamic Projects Showcase**: Filterable showcase (All, AI & Full Stack, AI & Automation, Web Development, Hackathons) with deep-dive modal detailing problem statements, architectures, and verified tech stacks.
- **Verified Capabilities Only**: Honest presentation of verified skills without misleading percentage bars.
- **Interactive Experience & Leadership Timeline**: Details Executive Body roles in **ACE** and **ACM**, **TEDxSRKR** hospitality, and **SRKR Orator Championship** semifinalist honors.
- **Honors & Milestones**: Highlights **SAMAGRA 2K26 2nd Prize** for Prompt Engineering research, **IDE Bootcamp 2026** selection, and national hackathons (**HackOverflow 2K25**, **Prajwalan 2K26**).
- **Interactive Contact Hub**: Client-side validated contact form with celebratory confetti feedback, quick-copy email and phone buttons, and direct mailto client fallbacks.
- **Accessible & Responsive**: Desktop-only custom cursor (disabled automatically on touch devices), top scroll progress bar, mobile drawer navigation, and accessible keyboard focus states.

---

## 📂 Project Architecture

```
Hari's Portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Dark theme styling, glassmorphism, grid patterns
│   ├── icon.svg            # Custom modern SVG favicon
│   ├── layout.tsx          # Root layout with SEO & OpenGraph metadata
│   └── page.tsx            # Main page assembling all portfolio sections
├── components/
│   ├── About.tsx           # Narrative bio, 4 academic stat cards, 3 pillars
│   ├── Achievements.tsx    # Awards, Bootcamps, Hackathons & Certifications
│   ├── Contact.tsx         # Validated form, confetti, copy buttons, fallbacks
│   ├── CustomCursor.tsx    # Subtle desktop-only magnetic pointer ring
│   ├── Education.tsx       # B.Tech CSE, Intermediate, Schooling timeline
│   ├── Experience.tsx      # Vertical timeline for ACE, ACM, TEDx, Oratory
│   ├── Footer.tsx          # Brand tagline, quick navigation, back-to-top
│   ├── Hero.tsx            # Headline, live availability, portrait frame, CTAs
│   ├── Navbar.tsx          # Sticky blur header with active section tracking
│   ├── Projects.tsx        # Filterable project grid & full architecture modal
│   ├── ScrollProgress.tsx  # Sleek top viewport scroll depth indicator
│   └── Skills.tsx          # Grouped skill categories with verified tags
├── data/
│   ├── achievements.ts     # SAMAGRA 2K26, IDE Bootcamp, Prajwalan, HackOverflow
│   ├── education.ts        # SRKR (8.78 GPA), Aditya (96%), Montessori (88.3%)
│   ├── experience.ts       # ACE & ACM Executive Body, TEDx, LanguageNest
│   ├── profile.ts          # Core profile metadata, links, contact info
│   ├── projects.ts         # Smart Grievance, AI Matcher, Decision Spinner, etc.
│   └── skills.ts           # Programming, Web, AI & Automation, CS, Tools
├── lib/
│   └── utils.ts            # Class merging utility (clsx + twMerge)
├── public/
│   ├── images/
│   │   └── hari-charan-portrait.jpg   # Authentic high-resolution portrait
│   └── resume/
│       └── Hari_Charan_Resume.pdf     # Direct downloadable PDF resume
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js 18+** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your live portfolio.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ Adding New Projects (e.g., CampusOS, OptiNest)

To add future projects without modifying any UI component:
1. Open [`data/projects.ts`](data/projects.ts).
2. Append your new project object to `projectsData`:
```typescript
{
  id: "campus-os",
  name: "CampusOS",
  category: "AI & Full Stack",
  tagline: "Intelligent University Operating System",
  description: "Unified campus infrastructure engine...",
  problemSolved: "Disjointed academic portals and event notifications.",
  keyFeatures: [
    "Single sign-on student profile sync",
    "Real-time attendance & timetable notifications",
  ],
  technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  githubUrl: "https://github.com/haricharanbaddireddy-del/CampusOS",
  featured: true,
  statusBadge: "In Development",
}
```
The website will automatically format the card, update the category filters, and configure the architecture deep-dive modal!

---

## 📦 GitHub Repository Setup

1. Initialize git in your local project folder:
```bash
git init
git add .
git commit -m "feat: initial release of Hari Charan personal portfolio"
```

2. Create a new repository on GitHub (e.g. `hari-charan-portfolio`).

3. Link your remote and push:
```bash
git remote add origin https://github.com/haricharanbaddireddy-del/hari-charan-portfolio.git
git branch -M main
git push -u origin main
```

---

## ☁️ Vercel Deployment Instructions

Deploying your Next.js portfolio on Vercel is completely free and takes under 2 minutes:

### Option A: Via Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Import your `hari-charan-portfolio` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Root Directory: `./`
6. Click **"Deploy"**.
7. Vercel will build and assign you a live production URL (e.g. `https://hari-charan-portfolio.vercel.app`).

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📬 Contact & Connect

- **Email**: [haricharanbaddireddy@gmail.com](mailto:haricharanbaddireddy@gmail.com)
- **Phone**: +91 7989012793
- **LinkedIn**: [linkedin.com/in/hari-charan-baddireddy-ba570133a](https://www.linkedin.com/in/hari-charan-baddireddy-ba570133a)
- **GitHub**: [github.com/haricharanbaddireddy-del](https://github.com/haricharanbaddireddy-del/)
- **College**: S.R.K.R. Engineering College (Autonomous), Bhimavaram

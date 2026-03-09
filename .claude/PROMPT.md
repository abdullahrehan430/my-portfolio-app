# Claude Code Prompt — Muhammad Abdullah Rehan Portfolio

## 🎯 Project Brief

Build a **production-ready personal portfolio website** using **Vite + React** for Muhammad Abdullah Rehan, a Senior React Native Developer with 5+ years of experience. The design must be **cyberpunk / futuristic** — dark, neon-lit, glowing, and visually stunning. This is NOT a generic portfolio — it should feel like a developer's personal brand from the future.

---

## 🛠 Tech Stack

- **Framework**: Vite + React (JSX)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Scroll Detection**: react-intersection-observer
- **Icons**: lucide-react
- **Fonts**: Google Fonts — "Orbitron" (headings) + "Space Mono" (body)
- **Data**: All project data read from `src/data/projects.json`

---

## 🎨 Design System

```
Colors:
  --bg-primary:    #050510   (deep space black)
  --bg-surface:    #0D0D2B   (dark navy)
  --neon-cyan:     #00FFFF
  --neon-magenta:  #FF00FF
  --neon-yellow:   #FAFF00
  --text-primary:  #E0E0FF
  --text-muted:    #6677AA

Typography:
  Headings → Orbitron (Google Fonts)
  Body     → Space Mono (Google Fonts)

Effects:
  - Neon glow: box-shadow: 0 0 10px #00FFFF, 0 0 30px #00FFFF40
  - Text glow: text-shadow: 0 0 10px currentColor
  - Glassmorphism: backdrop-filter: blur(12px), bg: rgba(13,13,43,0.6)
  - Scanline overlay texture on hero section
  - Subtle grid/circuit background pattern
```

---

## 📁 File Structure

```
portfolio/
├── public/
│   └── favicon.svg          (create a simple neon diamond SVG favicon)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.json    (already created — copy from root)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── CLAUDE.md
├── projects.json
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 👤 Owner Data

```json
{
  "name": "Muhammad Abdullah Rehan",
  "role": "Senior React Native Developer",
  "tagline": "Turning Ideas into MVPs in 4 Weeks",
  "bio": "I'm an experienced React Native developer with 5+ years in the industry. I specialize in building high-performance mobile and web applications — from concept to deployed product. Got an idea? I can ship your MVP in 4 weeks.",
  "email": "abdullahrehan243@gmail.com",
  "phone": "+923105599915",
  "skills": [
    { "name": "React Native", "level": 95 },
    { "name": "React JS", "level": 90 },
    { "name": "Node.js", "level": 80 },
    { "name": "MongoDB", "level": 75 },
    { "name": "Laravel / PHP", "level": 70 },
    { "name": "REST APIs", "level": 85 },
    { "name": "Git & CI/CD", "level": 80 },
    { "name": "UI/UX Collaboration", "level": 85 }
  ],
  "experience": [
    {
      "company": "Taiftec",
      "role": "Senior React Native Developer",
      "period": "2022 — Present",
      "type": "Full Time",
      "current": true,
      "description": "Leading mobile development initiatives, architecting scalable React Native applications, and mentoring junior developers."
    },
    {
      "company": "FlashLead",
      "role": "React Native / React JS Developer",
      "period": "2020 — 2024",
      "type": "Full Time",
      "current": false,
      "description": "Built and maintained the FlashLead CRM platform across web (React JS) and mobile (React Native). Contributed to Laravel backend integrations."
    }
  ],
  "testimonials": [
    {
      "name": "Client A",
      "role": "Product Manager",
      "company": "Tech Startup",
      "text": "Abdullah delivered our MVP in record time. His attention to detail and clean code architecture saved us months of technical debt.",
      "avatar": null
    },
    {
      "name": "Client B",
      "role": "CEO",
      "company": "E-Commerce Venture",
      "text": "Working with Abdullah was seamless. He understood our vision immediately and translated it into a beautiful, functional mobile app.",
      "avatar": null
    },
    {
      "name": "Client C",
      "role": "CTO",
      "company": "SaaS Platform",
      "text": "Exceptional React Native expertise. Our app performance improved dramatically after Abdullah joined the team.",
      "avatar": null
    }
  ]
}
```

---

## 🧩 Section-by-Section Instructions

### 1. Navbar
- Sticky top, glassmorphism background on scroll
- Logo: `<AR/>` in Orbitron font with cyan glow
- Nav links: Hero, About, Skills, Projects, Experience, Contact
- Active link highlighted with neon underline
- CTA button: "Hire Me" — neon cyan bordered, glowing on hover
- Mobile: hamburger menu with slide-in drawer

### 2. Hero
- Full viewport height
- **Glitch text animation** on the name "Muhammad Abdullah Rehan" — CSS glitch keyframes with color offset
- Subtitle types out: "Senior React Native Developer" — typewriter effect
- Tagline below: "Turning Ideas into MVPs in 4 Weeks"
- Two CTA buttons: "View Projects" (solid neon) + "Contact Me" (outlined neon)
- Background: animated circuit board grid pattern (CSS or SVG), subtle particle dots
- Scanline overlay texture (CSS pseudo-element)
- Floating neon geometric shapes in background (CSS animations)

### 3. About
- Two-column layout: left = profile photo placeholder (hexagonal clip-path with neon border), right = bio text
- 3 highlight stats with neon counters: "5+ Years Experience", "2 MVPs Shipped", "4 Weeks to MVP"
- Scroll-triggered fade-in animation via Framer Motion

### 4. Skills
- Section title with neon underline
- Animated skill bars — fill animation triggers on scroll into view
- Each bar: skill name left, percentage right, bar fills with cyan-to-magenta gradient
- Tech badges below bars: pill-shaped with neon borders (React Native, React JS, Node.js, MongoDB, Laravel, PHP)

### 5. Projects
- Data: read from `src/data/projects.json`
- Cards layout: 2-column grid on desktop, 1 on mobile
- Each card:
  - Top: project image placeholder with diagonal gradient overlay
  - Category tags (neon pill badges)
  - Title in Orbitron
  - Description
  - Tech stack chips
  - Highlights list
  - Bottom: "View Live" button with external link icon
- Hover effect: card lifts with neon glow border
- Featured projects get a "FEATURED" neon badge

### 6. Experience
- Vertical timeline with a glowing neon cyan center line
- Each entry: company name, role, period badge, description
- "CURRENT" entries get a pulsing neon dot indicator
- Scroll-triggered slide-in from alternating sides

### 7. Testimonials
- Horizontal scroll or 3-column grid
- Glassmorphism cards with neon top border accent
- Quote icon in neon, text in Space Mono
- Avatar placeholder: hexagonal with gradient background + initials
- Auto-scroll carousel on mobile

### 8. Contact
- Two-column: left = contact form, right = direct contact info
- Form fields: neon bottom-border style (no box, just bottom line), glow on focus
- Fields: Name, Email, Message + Send button
- Right side: email, phone displayed with icon + neon glow
- "Available for freelance projects" status badge with pulsing green dot
- On submit: show neon success message (no backend needed — just UI state)

### 9. Footer
- Dark background with subtle grid
- Logo + tagline
- Nav links row
- Social links row
- Copyright line: "© 2025 Muhammad Abdullah Rehan. Built with React."
- Subtle neon top border

---

## ✨ Global Animation Rules

- Use `framer-motion` `variants` for staggered children
- `useInView` from `react-intersection-observer` for scroll triggers
- Page load: hero elements animate in with stagger delay
- Section titles: slide up + fade in
- Cards: scale from 0.95 to 1 + fade in
- Hover states: smooth 200ms transitions
- Add a custom **neon cursor** (cyan dot + trailing ring) on desktop

---

## 📦 Dependencies to Install

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install framer-motion
npm install react-intersection-observer
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add to `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

## 🧠 Important Notes

1. **`src/data/projects.json`** is the single source of truth for all projects. The Projects component must import and map over this file.
2. To add a future project, the user only needs to add an entry to `projects.json` — no component code changes needed.
3. All colors should use CSS custom properties defined in `index.css` under `:root`
4. Tailwind config must extend theme with custom neon colors
5. The site must be fully **mobile responsive** — cyberpunk aesthetic on all screen sizes
6. Ensure **smooth scroll** is enabled globally
7. Add `<meta>` tags for SEO in `index.html`
8. No TypeScript — plain JSX only
9. Keep each component self-contained with its own styles/animations
10. The CLAUDE.md file at the project root is the memory file — refer to it for design decisions

# CLAUDE.md — Portfolio Project Memory

## Owner

- **Name**: Muhammad Abdullah Rehan
- **Role**: Senior React Native Developer
- **Tagline**: "Turning Ideas into MVPs in 4 Weeks"
- **Experience**: 5+ years in the industry

## Tech Stack (Personal)

- React JS, React Native, Node.js, MongoDB

## Contact

- **Phone**: +923105599915
- **Email**: abdullahrehan243@gmail.com
- **GitHub**: (add when available)
- **LinkedIn**: (add when available)

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── projects.json
│   ├── App.jsx
│   └── main.jsx
├── CLAUDE.md
├── projects.json
└── package.json
```

## Design System

- **Theme**: Cyberpunk / Futuristic
- **Primary Color**: #00FFFF (Cyan Neon)
- **Secondary Color**: #FF00FF (Magenta Neon)
- **Accent**: #FAFF00 (Electric Yellow)
- **Background**: #050510 (Deep Space Dark)
- **Surface**: #0D0D2B (Dark Navy)
- **Font Display**: "Orbitron" (Google Fonts) — headings
- **Font Body**: "Space Mono" (Google Fonts) — body text
- **Border Style**: 1px neon glowing borders with box-shadow neon glow

## Sections (in order)

1. **Navbar** — Sticky, glassmorphism, logo + nav links + CTA
2. **Hero** — Full screen, animated glitch name effect, tagline, CTA buttons
3. **About** — Brief bio, profile photo placeholder, highlights
4. **Skills** — Animated skill bars or glowing tech badges
5. **Projects** — Cards from projects.json, hover neon glow, links
6. **Experience** — Vertical timeline with neon line
7. **Testimonials** — Glassmorphism cards (placeholder testimonials included)
8. **Contact** — Form + direct contact info, neon styled

## Adding a New Project

To add a new project, edit `src/data/projects.json` and add an entry following the existing schema. The Projects component reads from this file automatically — no code changes needed.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview build
```

## Notes for Claude Code

- Use Vite + React
- Use Framer Motion for animations
- Use Tailwind CSS for utility classes
- All project data lives in `src/data/projects.json`
- Keep components modular — one file per section
- Neon glow effects via CSS box-shadow and text-shadow
- Use `react-intersection-observer` for scroll-triggered animations
- Add smooth scroll behavior globally
- Mobile responsive — cyberpunk aesthetic must work on all screen sizes

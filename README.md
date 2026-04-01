# Portfolio — Full-Stack Engineer

A professional dark-themed portfolio built with **React**, **Vite**, **Node.js**, and **Tailwind CSS**.

## ✨ Features

- Animated typewriter role switcher in hero
- Smooth fade-up scroll animations
- Filterable skill bars with animated fill
- Project cards with hover effects
- Experience timeline
- Working contact form
- Fully responsive

## 🚀 Quick Start

### Option A — Open directly (no setup)

Just open `index.html` in your browser. It works standalone via CDN.

### Option B — Vite dev server (recommended)

```bash
# 1. Install dependencies
npm install

# 2. Move content into src/
mkdir -p src
# Cut the <script type="text/babel"> content from index.html
# paste into src/App.jsx and src/main.jsx (see below)

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

## 📁 Recommended src/ structure

```
src/
  main.jsx       ← ReactDOM.createRoot(...)
  App.jsx        ← Main app with all sections
  index.css      ← Global styles (copy from <style> tag)
```

## 🎨 Customise

| What         | Where                                |
| ------------ | ------------------------------------ |
| Your name    | Search "Your Name" in App.jsx        |
| Projects     | `projects` array near top            |
| Skills       | `skills` array                       |
| Timeline     | `timeline` array                     |
| Accent color | `--accent` CSS variable              |
| Avatar       | Replace the 🧑‍💻 emoji with an `<img>` |

## 🛠 Tech Stack

- **React 18** — UI components
- **Vite 5** — Lightning-fast build tool
- **Tailwind CSS 3** — Utility-first styling
- **Space Mono + Syne** — Typography

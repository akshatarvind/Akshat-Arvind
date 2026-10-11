# Akshat Arvind - Personal Portfolio Website

A personal brand portfolio website designed and built for **Akshat Arvind** (B.Tech CSE Student at JECRC University, Jaipur | AI & Technology Enthusiast).

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

---

## ⚙️ How to Customize Your Portfolio

All personal information, links, social profiles, projects, skills, and achievements are centralized in a single file:

📂 `src/data/portfolioData.js`

### 1. Update Contact Information & Links
In `src/data/portfolioData.js`:
- Replace `[YOUR EMAIL]` with your real email (e.g., `akshat@example.com`).
- Replace `[YOUR LINKEDIN]` with your LinkedIn username or profile URL.
- Replace `[YOUR GITHUB]` with your GitHub username or profile URL.

### 2. Update Projects
In `src/data/portfolioData.js`, edit `projectsData` to add your actual GitHub repositories and deployed live links.

### 3. Add Verified Achievements
In `src/data/portfolioData.js`, edit `achievementsData` to replace the placeholder slots with your actual certifications, hackathon projects, courses, or awards.

---

## 📁 Project Architecture

```
portfolio/
├── index.html                  # SEO, OpenGraph tags, Google Fonts, Favicon
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite server & build configuration
├── tailwind.config.js          # Dark theme colors, gradients & keyframes
├── postcss.config.js           # PostCSS configuration
├── public/
│   └── favicon.svg             # Modern branded monogram SVG favicon
├── src/
│   ├── main.jsx                # Application root entry
│   ├── App.jsx                 # App layout, active section tracking, modals
│   ├── index.css               # Tailwind directives, glassmorphic utility classes
│   ├── data/
│   │   └── portfolioData.js    # 🎯 CENTRALIZED PORTFOLIO DATA & PLACEHOLDERS
│   └── components/
│       ├── Navbar.jsx          # Glassmorphic navbar, active spy, mobile drawer
│       ├── Hero.jsx            # Impactful hero with live badge & CTAs
│       ├── About.jsx           # Two-column introduction & student profile card
│       ├── Education.jsx       # JECRC University timeline & coursework chips
│       ├── Skills.jsx          # Filterable skill cards (Programming, AI, Web, Productivity)
│       ├── Projects.jsx        # 3 Featured projects with abstract UI previews
│       ├── Achievements.jsx    # Categorized milestones & update guidance
│       ├── Learning.jsx        # "What I'm Exploring" dynamic status cards
│       ├── Contact.jsx         # "Let's Build Something", email copy & form
│       ├── Footer.jsx          # Branded footer, 2026 copyright, back to top
│       ├── BackgroundGlow.jsx  # Ambient background glow mesh & cyber grid
│       └── NotificationModal.jsx # Feedback modal for placeholder guidance
```

---

## 🌐 Deploy to Vercel

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

---

## 📄 License
&copy; 2026 Akshat Arvind. All rights reserved.

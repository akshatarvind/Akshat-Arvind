# Akshat Arvind - Modern Personal Portfolio Website

A personal portfolio website for **Akshat Arvind**, B.Tech Student at JECRC University, Jaipur, India. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**.

Designed for seamless deployment to **Vercel** or any modern static hosting platform.

---

## 🌟 Key Features

- **Modern & Premium Design**: Dark mode by default with instant Dark / Light toggle and persistent state.
- **Glassmorphism & Micro-Interactions**: Translucent blurred headers, glowing gradient orbs, and hover transitions.
- **Interactive Project Showcase**: Detailed project cards with technology pills, direct GitHub links, and an in-depth **Project Modal** for deep dives.
- **Skills Categorization**: Filterable skill cards (Languages, AI & ML, Web Development, Productivity) with level indicators and icons.
- **Academic Timeline**: Structured B.Tech coursework and learning path at JECRC University.
- **Achievements & Certifications**: Categorized milestone tracker (Certifications, Hackathons, Courses, Awards).
- **Direct Contact Channel**: Direct email with 1-click **Copy to Clipboard**, integrated feedback message form, and active LinkedIn/GitHub links.
- **100% Mobile Responsive**: Hamburger drawer navigation with smooth slide-in and backdrop dismissal.
- **Vercel Ready**: Pre-configured `vercel.json` for zero-configuration SPA routing.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The compiled output is located in the `dist/` directory.

---

## 🌐 Deploy to Vercel

### Option A: Import via GitHub (Recommended)
1. Push this repository to your GitHub account (`https://github.com/akshatarvind/portfolio`).
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** -> **"Project"** and select your portfolio repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will be live on your custom `.vercel.app` domain in seconds!

### Option B: Deploy using Vercel CLI
```bash
npx vercel
```

---

## ✏️ Easy Customization

All personal details, skills, education, projects, and achievements are centrally maintained in a single file:
👉 **`src/data/portfolioData.js`**

To update your projects, add new certifications, or change contact links, simply edit this file!

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel

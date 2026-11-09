# 🌸 Yoga Sree S — Cinematic 3D Animated Developer Portfolio

A personal portfolio web application built for **Yoga Sree S**, a 3rd-year B.Tech Artificial Intelligence and Data Science student at **Kongu Engineering College**.

Designed with a pastel milk-pink visual identity, smooth 3D character running intro, Three.js floating ambient meshes, glassmorphism cards, and interactive project deep-dives.

---

## 🎨 Visual Identity & Color Palette

- **Milk Pink**: `#FFF1F5` (Soft base background)
- **Soft Pink**: `#FBCFE8`
- **Lavender**: `#E9D5FF`
- **Light Purple**: `#C4B5FD`
- **Pastel Blue**: `#BFDBFE`
- **Deep Purple**: `#7C3AED`
- **Dark Text**: `#29243A`
- **Glassmorphism**: Translucent white panels with 16px backdrop blur, soft rounded corners, and pastel drop shadows.

---

## 🎬 6-Second Cinematic Introduction (`IntroLoader.tsx`)

1. **0–1.2s — Welcome Phase**:
   - Soft milk-pink background with ambient floating orbs
   - Vertical animated loading progress bar
   - Badges: `WELCOME TO MY CREATIVE WORLD` and `YOGA SREE S`
2. **1.2–4.2s — 3D Character Running Phase**:
   - Cute 3D vector-rigged running girl with dynamic athletic running cadence
   - Alternating arm swings, knee articulation, bouncing ponytail ribbon, and pulsing ground shadow
   - Moving ground perspective grid giving real forward motion
   - Live numeric percentage counter smoothly filling from 0% to 100%
3. **4.2–6.0s — 3D Camera Warp & Portal Transition**:
   - Vertical experience morphs horizontally
   - Concentric hyperspace rings expanding forward with 3D camera zoom
   - Smoothly reveals the Hero section
4. **Features**:
   - Quick **Skip Intro** button at top-right
   - Stored in `sessionStorage` so it runs on initial entry and won't block reloads
   - **Replay Intro** button available in Navbar & Footer to experience it anytime
   - Respects `prefers-reduced-motion`

---

## 🌟 Sections & Highlights

### 1. Hero Section
- Dynamic role cycler: *AI & Data Science Student*, *Aspiring Software Developer*, *AI/ML Enthusiast*, *Full Stack Builder*.
- **3D Floating Portrait Frame**: Real portrait photo of Yoga Sree (`dp.jpg`) with mouse-tracking 3D perspective tilt.
- Floating tech badges & achievement badges (*3x Prize Winner*, *CopterCode Intern*, *YOLOv8 & WebRTC*).
- Action buttons: *Explore My Work*, *Download Resume*, *Contact Me*.

### 2. About Me
- Academic profile: Kongu Engineering College, Perundurai, Erode, Tamil Nadu.
- Verified statistic cards:
  - `3rd Year B.Tech` (AIDS @ Kongu Engg College)
  - `9+` Technical Projects (AI/ML, CV & Full Stack)
  - `3x Winner` (Symposiums & Hackathons)
  - `1 Term` Industrial Internship (CopterCode R&D)
- Interactive tabbed philosophy: Vision, Engineering Philosophy, Academic Highlights.

### 3. Technical Skills
- Transparent experience-level categorization (no fake percentages):
  - **Programming**: Python, Java, SQL
  - **AI & Machine Learning**: Machine Learning, Deep Learning, Computer Vision, NLP, PyTorch, YOLOv8, OpenCV
  - **Frontend**: React, TypeScript, Tailwind CSS, JavaScript (ES6+), HTML5 & CSS3
  - **Backend**: FastAPI, REST APIs, Spring Boot (Academic Interest)
  - **Databases**: Supabase, PostgreSQL, Database Management
  - **Tools**: Git, GitHub, VS Code, Jupyter Notebook, Google Colab, MobaXterm

### 4. Featured Projects (9 Complete Systems)
1. 🏆 **AI Zoom Meeting** (Flagship — Won 3 Awards!): Adaptive video conferencing for low/unstable bandwidths with WebRTC, React, TypeScript, Zustand, Supabase, real-time speech captions, and latency telemetry. Live Demo: [https://ai-zoom-meeting.vercel.app](https://ai-zoom-meeting.vercel.app)
2. 💼 **InternHub – Internship Management System**: Multi-role enterprise portal (Admin, HR, Company, Team Lead, Intern) built as a live production project at CopterCode with AI candidate resume summaries.
3. 🤖 **VisionBin AI – Smart Waste Management**: Real-time YOLOv8 bin fill-level classifier (Empty, Half-Full, Full, Overflowing) with ESP32 IoT telemetry architecture.
4. 📊 **ConstructML – AI Civil Prediction**: High-precision machine learning regression models for construction cost (R² = 0.9848) and duration (R² = 0.9896).
5. 👁️ **FaceScope**: Real-time OpenCV facial landmark tracking and attribute detection pipeline.
6. 🏥 **AI Medical Triage**: NLP clinical priority classifier categorizing symptom narratives into emergency/urgent/routine tiers.
7. 🫀 **PulseSense / HeartGuard ECG**: 1D-CNN deep learning waveform classifier detecting Normal, AFib, VTach, and PVC cardiac arrhythmias.
8. 📈 **FinSight**: Financial data analytics dashboard computing RSI, Moving Averages, and portfolio volatility with Plotly.
9. 📝 **Online Exam System**: Full-stack examination portal with synchronized countdown timer, randomized question banks, and auto-grading.

### 5. Industry Internship (`CopterCode`)
- **Organization**: CopterCode (www.coptercode.co.in)
- **Role**: Full Stack Developer Intern (Research & Development)
- **Duration**: June – July 2026 (Awarded August 15, 2026)
- **Live Project**: Internship Management System (`InternHub`)
- **Interactive Lightbox Gallery**:
  - `interncompleted.png` (Official Certificate)
  - `intern2.jpg` (Live laptop running portal + intern ID badge)
  - `intern1.jpg` (Stage presentation)
  - `intern.jpg` (Intern cohort team)

### 6. Achievements & Certifications (Honors & Accolades)
- **1st Prize – Project Orbit (ACME'26)**: Inter Department Technical Symposium, EEE Dept, Kongu Engineering College for AI Zoom Meeting (`prize6.jpg`, stage photo `prize_pic.jpg`).
- **1st Prize – Project Inventa (EAREYES 2K26 2.0)**: Inter Department Technical Symposium, EIE Dept, Kongu Engineering College for AI Zoom Meeting (`pricepic2.jpg`).
- **2nd Prize – Paper Mania (EAREYES 2K26 2.0)**: Technical paper presentation (`prize7.jpg`).
- **Hack Spark 2026**: Certificate of Merit in 24-Hour National Hackathon at Nehru Group of Institutions, Coimbatore (`prize5.jpg`, workspace geotag `outside.jpg`).
- **World Food Day 2K26 Hackathon**: Onion grading computer vision concept (`prize3.jpg`).
- **ACME'26 Paper Verse**: Participation certificate (`prize4.jpg`).

### 7. Education
- Kongu Engineering College, Perundurai, Erode: B.Tech Artificial Intelligence & Data Science (2023–2027, 3rd Year).

### 8. Contact & Socials
- **LinkedIn**: [https://www.linkedin.com/in/yoga-sree-senthil-devarajan-kec-ai](https://www.linkedin.com/in/yoga-sree-senthil-devarajan-kec-ai)
- **GitHub**: [https://github.com/Yogasree-21122006](https://github.com/Yogasree-21122006)
- **Email**: `yogasree.kec.ai@gmail.com` (with one-click copy button)
- Interactive contact form with validation and celebratory confetti trigger.

### 9. Resume Modal
- Recruiter-ready resume modal with instant **Print / Save as PDF** and **Copy Plaintext** functionality.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```


# IEEE Student Branch – Premium Member Portal

A highly stylized, ultra-premium production website for the IEEE Student Branch. Designed strictly to convey a feeling of advanced engineering, bold innovation, and structural elegance, distancing itself from generic templates through the use of typography-heavy brutalism and cinematic scrolling flows.

## 🚀 The Vision

Our platform is engineered not just to display information, but to **wow** visitors at first glance. We discarded the notion of conventional flat designs. Instead, the UI is built utilizing a heavily animated, layered approach featuring:
*   **Magazine-Style Typography:** Combining the tech-focused edge of `Outfit` with the clean legibility of `Inter`.
*   **Cinematic "Stacking" Effects:** Entire pages are constructed using `GSAP ScrollTrigger` and `Lenis`, where screens pin natively to the viewport and subsequent panels overlap smoothly, mimicking a slick presentation.
*   **Custom Dark-Mode Palette:** Relying strictly on the IEEE official identity: `#0A1F44` (Deep Blue), `#0A66C2` (Bright Blue), `#00C2FF` (Cyan), and an off-white `#F5F7FA`.

## 🛠 Tech Stack

-   **Framework:** React 19 + TypeScript + Vite
-   **Routing:** React Router DOM (v7)
-   **Styling:** Tailwind CSS (v3.4.x via PostCSS for stable configurations)
-   **Animations & Physics:**
    -   `gsap` & `@gsap/react` for complex ScrollTriggers and timeline manipulation
    -   `framer-motion` for AnimatePresence page transitions and micro-interactions
    -   `lenis` for the buttery smooth momentum scrolling that binds it all together

## 📂 Project Architecture

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Universal immersive navigation
│   │   ├── Footer.tsx         # Comprehensive site routing footer
│   │   ├── Preloader.tsx      # System-initialization styled loading screen
│   │   └── SmoothScroll.tsx   # Global Lenis physics wrapper
│   ├── pages/
│   │   ├── Home.tsx            # Index / Parallax Hero intro
│   │   ├── Intro.tsx           # Pinned scrolling storytelling
│   │   ├── Chapters.tsx        # Technical societies showcase
│   │   ├── Achievements.tsx    # Scroll-linked milestones
│   │   ├── Events.tsx          # Guest speakers & workshops list
│   │   ├── ExecutiveBoard.tsx  # Dynamic grid of current leadership
│   │   ├── Join.tsx            # Registration overview (Fallback screen)
│   │   └── about/              # Nested dashboard layout for foundational data
│   │       ├── AboutLayout.tsx
│   │       ├── AboutIndex.tsx
│   │       ├── Governance.tsx
│   │       └── Leadership.tsx
│   ├── App.tsx                # Master routing and AnimatePresence host
│   ├── index.css              # Custom font imports & Lenis base styles
│   └── main.tsx               # Bootstrap
├── tailwind.config.js         # Master color palette and custom typings
└── package.json
```

## ⚡ Getting Started Locally

Because the frontend is fully self-contained using Vite, spinning it up takes seconds.

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```
2. **Install the Node dependencies:**
   ```bash
   npm install
   ```
3. **Run the local development server:**
   ```bash
   npm run dev
   ```
4. **Visit:** Output will confirm the local port (usually `http://localhost:5173`).

## 🔗 External Integrations

*   **Registration Flow:** For security and compliance, the primary "Join" navigation links are explicitly routed outward directly to the official IEEE global onboarding portal `https://www.ieee.org/`. 

---

*Engineered For Impact. Built By The Branch.*

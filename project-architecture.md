# MEGAPLUS Logistics — Project Architecture

> A modern, animation-rich, bilingual (EN/VI) marketing website for **MEGA PLUS IMPORT EXPORT CO., LTD** — a Vietnamese logistics & agricultural-export company. Built with **React 18 + TypeScript + Vite + Tailwind CSS (CDN) + GSAP + Lenis**.

---

## 1. Tech Stack

| Layer | Technology | npm (`package.json`) | importmap (`index.html`) |
|-------|-----------|---------------------|---------------------------|
| Build Tool | **Vite** | `^5.1.4` | `vite@^7.3.1` |
| Language | **TypeScript** | `^5.3.3` | — |
| UI Framework | **React** (mounted via `createRoot` in `index.tsx`) | `^18.3.1` | `react@^19.2.3` |
| Routing | **react-router-dom** (`HashRouter`) | `^6.22.3` | `react-router-dom@^7.12.0` |
| Styling | **Tailwind CSS** loaded via CDN in `index.html` (config inlined) + custom `index.css` | — | CDN |
| Animation | **GSAP** + `@gsap/react` (`useGSAP`) + `ScrollTrigger` plugin | `^3.12.5` / `^2.1.0` | `gsap@^3.14.2` / `@gsap/react@^2.1.2` |
| Smooth Scroll | **Lenis** (synced with GSAP ticker) | `^1.0.42` | `lenis@^1.3.17` |
| Fonts | Google Fonts — **Inter** (sans) & **Montserrat** (secondary) | — | — |

> ⚠️ **Version drift**: the `index.html` importmap (used by the AI Studio in-browser preview) pins newer majors than `package.json` (React 19 vs 18, react-router 7 vs 6, Vite 7 vs 5). A `vite build` resolves the npm versions; the importmap is only consulted by the no-bundler browser sandbox. This may cause subtle behavioral differences between the two run modes.

### Key Scripts (`package.json`)
```bash
npm run dev      # vite dev server on :3000 (host 0.0.0.0)
npm run build    # production build
npm run preview  # preview prod build
```

### Vite Configuration Highlights (`vite.config.ts`)
- Dev server port: **3000**, host **0.0.0.0**
- Path alias: `@` → project root
- Exposes `process.env.GEMINI_API_KEY` and `process.env.API_KEY` from `.env` (loaded via `loadEnv`) — currently unused in code but reserved for AI Studio integration

---

## 2. Folder Structure

```
megaplusvn/
├── index.html                # HTML shell — Tailwind CDN config, font preload, importmap, Lenis CSS
├── index.tsx                 # React entry — mounts <App /> in StrictMode
├── index.css                 # Global CSS — custom cursor SVG, noise overlay, kinetic typography utils
├── App.tsx                   # Root component — providers + router + global effect layers
├── metadata.json             # AI Studio template metadata
├── vite.config.ts
├── tsconfig.json
│
├── components/               # Reusable UI + effect orchestrators
│   ├── Header.tsx            # Floating morph header (GSAP scroll scrub + matchMedia)
│   ├── Footer.tsx            # 3-column footer (info / links / FB iframe)
│   ├── Logo.tsx              # Inline SVG brand mark
│   ├── ThemeToggle.tsx       # Light/dark toggle (localStorage + `dark` class)
│   ├── LanguageToggle.tsx    # EN/VI toggle button
│   ├── Magnetic.tsx          # Cursor-attraction wrapper (GSAP quickTo)
│   ├── Typewriter.tsx        # Char-by-char typewriter w/ blinking caret
│   ├── AnimatedSection.tsx   # Generic scroll-triggered reveal (8 animation types)
│   ├── ScrollLinkedAnimator.tsx  # Render-prop scroll progress (0..1)
│   ├── SmoothScrollLayout.tsx    # Initializes Lenis + syncs ScrollTrigger + scroll-to-top on route change
│   ├── LivingBackground.tsx  # 3 floating gradient blobs w/ mouse parallax (fixed bg layer)
│   ├── GlobalEffects.tsx     # DOM-wide kinetic text splitter + liquid-image velocity skew
│   ├── Partners.tsx          # Two-row infinite-scroll partner-logo marquee
│   ├── CustomCursor.tsx      # (Legacy/unused after recent commit) custom cursor follower
│   └── icons/                # Inline SVG icons (Air, Ocean, Road, Warehouse, Pricing, Tracking, Security)
│
├── pages/                    # Route-level views
│   ├── Home.tsx              # Hero w/ kinetic text, intro, pain points, services, articles, zig-zag sections, testimonials, CTA
│   ├── Company.tsx           # Hero + What-we-do + Vision/Mission + Core Values + Who-we-serve + Advantages + Partners
│   ├── About.tsx             # Banner + Vision/Mission + Core Values + Partners
│   ├── Services.tsx          # Two-pane catalog → drill-down ServiceDetail w/ sticky TOC + sectioned content
│   ├── WhoWeServe.tsx        # Hero + image grid + vision items + core value + Partners
│   └── Contact.tsx           # Two-column info + form (alert-only submit, no backend)
│
├── contexts/
│   └── LanguageContext.tsx   # i18n provider — `language`, `setLanguage`, `t(key)` (dot-notation lookup)
│
├── hooks/
│   └── useSmoothScroll.tsx   # Legacy lerp-based wheel scroller (superseded by Lenis in SmoothScrollLayout)
│
├── utils/
│   └── translations.ts       # Bilingual dictionary { en: {...}, vi: {...} } with nested namespaces
│
├── README.md                 # AI-Studio bootstrap notes
├── .agents/                  # Local agent skills (frontend-design)
├── skills-lock.json
└── package-lock.json
```

---

## 3. Application Bootstrap & Composition

### 3.1 Entry Chain
```
index.html  →  /index.tsx  →  <React.StrictMode><App /></React.StrictMode>
```

### 3.2 Root Component (`App.tsx`)
The `App` component layers four orthogonal concerns from outermost to innermost:

```tsx
<LanguageProvider>          // i18n (EN/VI) via React Context
  <HashRouter>              // Hash-based routing (suits static deploy)
    <div className="noise-overlay" />     // Topmost SVG film grain (z-9998)
    <LivingBackground />                  // Bottom layer — animated gradient blobs (z-0)
    <SmoothScrollLayout>                  // Lenis smooth-scroll wrapper
      <GlobalEffects />                   // Headless DOM enhancer (kinetic text + liquid images)
      <AppContent />                      // Header + <Routes /> + Footer
    </SmoothScrollLayout>
  </HashRouter>
</LanguageProvider>
```

### 3.3 Routing Map
| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `Home` | Marketing hero & service overview |
| `/company` | `Company` | About-the-company narrative |
| `/services` | `Services` | Service catalog + detail drill-down |
| `/who-we-serve` | `WhoWeServe` | Target customer segments |
| `/about` | `About` | Vision / mission / values (lighter than `/company`) |
| `/contact` | `Contact` | Contact details + lead-capture form |

> Note: `/about` is reachable via the footer only — the header omits it.

---

## 4. Cross-Cutting Systems

### 4.1 Internationalization (`contexts/LanguageContext.tsx` + `utils/translations.ts`)
- Two locales: **`en`** and **`vi`**, persisted to `localStorage['language']`.
- `t(key)` performs dot-notation lookup: `t('nav.home')` → `translations[lang].nav.home`.
- Returns the raw key if missing (graceful fallback, no crash).
- Switched via `<LanguageToggle />` in the header.
- Translation namespaces (verified): `common`, `nav`, `footer`, `home`, `company`, `services`, `services.details.<id>`, `about`, `who_we_serve`, `contact`, `partners`.
- The `nav` namespace contains only `home / company / services / contact` — **`Who We Serve`** is hardcoded as English literal in `Header.tsx` (does not switch on language toggle).

### 4.2 Theming (`components/ThemeToggle.tsx`)
- Class-based dark mode: toggles `dark` on `<html>`.
- Persisted to `localStorage['theme']`; falls back to `prefers-color-scheme`.
- Tailwind config in `index.html` sets `darkMode: 'class'`.

### 4.3 Smooth Scroll (`components/SmoothScrollLayout.tsx`)
- Initializes a single **Lenis** instance per app session.
- Bridges Lenis ↔ GSAP: `lenis.on('scroll', ScrollTrigger.update)` and adds a `gsap.ticker` callback that drives `lenis.raf(time)`.
- Disables `gsap.ticker.lagSmoothing(0)` to keep both tickers in lockstep.
- Exposes the instance globally via `window.lenis` so any component (e.g. `Home.tsx` "Explore" button) can call `window.lenis.scrollTo(...)`.
- Resets scroll to top on every route change (`useLocation().pathname`).

> `hooks/useSmoothScroll.tsx` is an **older lerp-based implementation** that is no longer wired into the app; Lenis superseded it.

### 4.4 Background Atmosphere (`components/LivingBackground.tsx`)
A `fixed inset-0 z-0 pointer-events-none` div containing three blurred color blobs (orange, blue, teal) that:
1. Float on randomized infinite GSAP yoyo tweens.
2. Respond to `mousemove` with parallax depth (`overwrite: 'auto'`).

### 4.5 Film-Grain Overlay (`App.tsx` + `index.css`)
A `fixed`, `pointer-events-none`, `z-9998` div with a fractal-noise SVG data URI at 5% opacity for cinematic grain.

### 4.6 Global Effects Engine (`components/GlobalEffects.tsx`)
A **headless** component (`return <div className="hidden" />`) that runs a single `useGSAP` hook on mount to:
1. **Kinetic Typography** — auto-splits every `h1/h2/h3:not(.manual-anim)` into per-word/per-char `<span>`s and applies a 3D `expo.out` reveal triggered by `ScrollTrigger`.
2. **Liquid Images** — wraps every `<img>:not(.no-liquid)` in a `clip-path` reveal container and binds a velocity-driven `skewY` + scale compensation that reads `ScrollTrigger.getVelocity()`.

This is why **most pages don't manually animate headings** — they get it for free as long as the heading lacks the `manual-anim` opt-out class. The home page hero uses `manual-anim` so it can run a bespoke kinetic timeline instead.

### 4.7 Custom Cursor / Selection (`index.css`)
- A yellow SVG cursor is set as `cursor: url(...) !important` on body + interactive selectors.
- `::selection` highlight is bright yellow on black.
- The recent commit "Remove custom cursor and update CSS for selection" removed `<CustomCursor />` from the tree; the file remains but is unused.

---

## 5. Reusable Animation Primitives

### 5.1 `<AnimatedSection>` (`components/AnimatedSection.tsx`)
Generic GSAP-powered reveal wrapper with 8 modes:

| `type` | Effect |
|--------|--------|
| `fade-up` / `fade-down` | Translate Y + opacity |
| `fade-in` | Opacity only |
| `reveal` | Children mask-clip + slide from bottom (sets `overflow: hidden`) |
| `scale` | Scale 0.8 → 1 + opacity |
| `3d-flip` | rotationX 45° → 0 |
| `slide-left` / `slide-right` | Translate X + opacity |
| `skew-up` | Y translate + skewY |

Props: `delay` (ms), `duration` (s), `stagger`, `threshold` (0..1), `distance` (px). Each instance kills only its own stale `ScrollTrigger`s on cleanup.

### 5.2 `<Magnetic>` (`components/Magnetic.tsx`)
Wraps a child element and applies a cursor-attraction tween via `gsap.quickTo` with elastic ease. Disabled on coarse pointers (`pointer: coarse` media query). Used heavily on CTA buttons and nav links.

### 5.3 `<Typewriter>` (`components/Typewriter.tsx`)
Char-by-char reveal with a blinking border-right caret. Configurable `speed` (ms/char), `startDelay`, and rendered `tag`.

### 5.4 `<ScrollLinkedAnimator>` (`components/ScrollLinkedAnimator.tsx`)
A render-prop component that exposes a `progress: 0..1` value derived from the element's position relative to viewport `start`/`end` thresholds. Uses `requestAnimationFrame`-throttled scroll listening (independent of Lenis/GSAP).

---

## 6. Header Behavior (`components/Header.tsx`)

The header has two distinct visual states linked to scroll position:

| State | Trigger | Visual |
|-------|---------|--------|
| **Top-of-page** | `scrollY < 0` | Full-width transparent bar, no blur, no border |
| **Scrolled (≥ 1024px)** | scrubbed over 150 px scroll | Floating pill: `width: 85%` (max 1280 px), `top: 20px`, `borderRadius: 50px`, dark `rgba(10,23,41,0.85)`, `backdropFilter: blur(12px)`, drop shadow |
| **Scrolled (< 1024px)** | scrubbed over 100 px scroll | Background fade + border + shadow only (no pill) |

Centering is achieved with `position: fixed; left: 50%` + GSAP `xPercent: -50` (avoids Tailwind translate-x conflicts during the morph). An intro animation slides the bar down from `yPercent: -100` on mount.

The mobile menu is a full-screen translate-x overlay (`z-100`) with numbered nav items and the same theme/language toggles.

---

## 7. Page Patterns

All pages follow the same **"hero + alternating zig-zag sections"** pattern wrapped in `<AnimatedSection>` for reveals.

### 7.1 Home (`pages/Home.tsx`)
The most elaborate page, with its own bespoke GSAP timeline for the hero reveal:
1. Overlay curtain rises (`height: 0`).
2. Hero background scales/unblurs from `scale: 1.4 + blur(10px)`.
3. `.kinetic-word` spans elastic-bounce in.
4. Secondary content fades up.
5. Hero text container is parallaxed `yPercent: -50` with `scrub: true` as the user scrolls.

It also runs a 6-second auto-rotating background slider (`heroImages[]`).

Sections (top → bottom):
Hero → Intro → Pain Points + Solution → 3-Card Services → Recent Articles → Safe & Reliable (zig-zag) → Air Freight (zig-zag) → Sea Freight (zig-zag) → Domestic Transport (zig-zag) → Testimonials → CTA → `<Partners />`.

### 7.2 Services (`pages/Services.tsx`)
- **List view**: Two-panel card with vertical "SERVICES" type on the left and a 2-column category grid on the right.
- `servicesData` defines two categories — **Logistics** (sea, reefer, trucking, air, customs, insurance) and **Export** (rice, coffee, fresh fruit, frozen fruit, dry agro).
- Clicking an item swaps in `<ServiceDetail>` (in-page state, not a route).
- **Detail view**: Immersive header image + sticky TOC sidebar + 5 sections (intro, pain, solution, process, benefits) + CTA. Content is pulled from `services.details.<id>.<section>` keys; missing keys cause the section to be skipped. Markdown-style `**bold**` is parsed inline by `renderRichText`.

### 7.3 Company / About / WhoWeServe
Variations on the zig-zag template — alternating image/text pairs separated by colored vertical accent bars (orange / blue / green) and decorative blurred glow circles.

### 7.4 Contact (`pages/Contact.tsx`)
- Left: address + phone with icon badges.
- Right: form (`name`, `phone`, `email`) — submit handler currently shows an `alert(...)` and resets state. **No backend integration.**

### 7.5 Partners (`components/Partners.tsx`)
Two infinitely scrolling rows of logo cards using Tailwind's custom `animate-scroll-left` / `animate-scroll-right` keyframes (defined in `index.html` Tailwind config). The arrays are quadrupled and the bottom row is reversed to create a "U-turn" effect at the edges.

---

## 8. Tailwind Configuration (inlined in `index.html`)

| Token | Value |
|-------|-------|
| `font-sans` | Inter |
| `font-secondary` | Montserrat |
| `text-h1 / h2 / h3` | 42px / 30px / 21px |
| `fastway-orange` | `#F97316` (primary accent) |
| `fastway-dark` | `#111827` |
| `fastway-dark-blue` | `#0A1729` (page bg + scrollbar track) |
| `text-main` / `text-sub` | `#1F2937` / `#6B7280` |
| Keyframes | `blink-border`, `scroll-left`, `scroll-right` |
| `darkMode` | `'class'` |

> Loading Tailwind via CDN means there is **no `tailwind.config.js`** in the repo; all theme extension lives in `index.html`. PostCSS is not used.

---

## 9. State & Data Flow

```
┌──────────────────────────────────────────────────┐
│  LanguageProvider (Context: language, setLang, t) │
│   └── reads/writes localStorage['language']      │
└───────────────┬──────────────────────────────────┘
                │ useLanguage()
                ▼
┌──────────────────────────────────────────────────┐
│  Pages & Components                              │
│   - All copy goes through t('namespace.key')     │
│   - Local UI state: useState (form, selected     │
│     service, mobile-menu open, theme, hero       │
│     image index)                                 │
│   - No global store (no Redux/Zustand/Jotai)     │
│   - No data fetching layer (all content static)  │
└──────────────────────────────────────────────────┘
```

The app is **fully static** — no API calls, no SSR, no runtime data fetching. All copy is shipped in `utils/translations.ts`. Images are referenced from external CDNs (`picsum.photos`, `freepik.com`, `pinimg.com`, `unsplash.com`, `randomuser.me`, etc.).

---

## 10. Layering & Z-Index Strategy

| Layer | z-index | Source |
|-------|--------|--------|
| Mobile menu overlay | `100` | `Header.tsx` |
| Noise / film grain | `9998` | `App.tsx` + `index.css` |
| Hero curtain (load-time) | `50` | `Home.tsx` |
| Header | `50` | `Header.tsx` |
| Page content (`AppContent`) | `10` (relative) | `App.tsx` |
| Living background blobs | `0` (fixed) | `LivingBackground.tsx` |

---

## 11. Notable Conventions & Gotchas

1. **Heading auto-animation opt-out** — add `class="manual-anim"` on any `h1/h2/h3` you want to animate yourself; otherwise `GlobalEffects` will tear it apart and re-render with per-char spans.
2. **Image auto-wrap opt-out** — add `class="no-liquid"` on any `<img>` that should not be wrapped by the liquid-image effect (used on hero parallax images on Home).
3. **Tailwind via CDN** means custom utility classes from JS files (e.g. `kinetic-word`, `clip-text-container`) must already exist in `index.css` or `index.html`'s Tailwind config — JIT compilation works in-browser at runtime.
4. **HashRouter** is intentional — enables hosting on any static-file server without server-side rewrites.
5. **`window.lenis`** is the canonical way to programmatically scroll (e.g. `Home.tsx`'s "Explore Our Services" CTA scrolls to `#intro-section` via Lenis).
6. **Scroll-to-top on navigation** is handled inside `SmoothScrollLayout`'s `useEffect([location.pathname])`, not via React-Router.
7. **`gsap.matchMedia`** is used inside `Header.tsx` so the scroll-morph differs between desktop (≥1024px pill morph) and mobile (background-only fade).
8. **`metadata.json`** is an AI-Studio template descriptor, not a runtime config.
9. **`claude` package** appears in `package.json` dependencies (`^0.1.1`) but is not imported anywhere in the source — likely scaffolding leftover.
10. **Dead Tailwind classes** — `pages/Services.tsx` references `vertical-text`, `lg:writing-mode-vertical`, `text-shadow-xl`, and `animate-fade-in-up`, none of which are defined in the inline Tailwind config or `index.css`. They render as no-ops.
11. **Hard-coded English string** — `Who We Serve` in the desktop nav (`Header.tsx:161`) and the mobile menu (`Header.tsx:219`) is not run through `t()`, so it stays English even in VI mode.

---

## 12. Build & Deployment

The repo expects a Node.js environment for Vite (`npm install && npm run build`), producing static assets in `dist/`. The HTML uses an in-browser `importmap` pointing to `esm.sh` for ad-hoc dev-without-bundler use (AI Studio sandbox), but a normal Vite build will resolve all imports through node_modules.

For production deployment, any static host (Netlify, Vercel, GitHub Pages, S3+CloudFront) works because routing is hash-based.

---

## 13. Recent Trajectory (from `git log`)

- `65e8215` — Removed custom cursor; tightened CSS selection styling.
- `028245b` — GSAP integration in header (slide-down intro + scroll morph).
- `bdebdc8` — Replaced **anime.js** with **GSAP** as the animation engine.
- `763da01` — Renamed app, added animejs alias (since superseded).
- `36f6fe2` — Initial animejs + tsconfig changes.

The codebase is mid-migration toward consolidating on **GSAP + Lenis** as the single animation/scroll stack. Legacy artifacts to be aware of: `hooks/useSmoothScroll.tsx`, `components/CustomCursor.tsx`, the `claude` npm dependency.

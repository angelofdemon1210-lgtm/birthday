# Chapter 22: Our Beautiful Journey 💛

A premium, cinematic, dark-romantic birthday website built for a 22nd
birthday love story — React + Vite, Tailwind CSS, Framer Motion, and GSAP.

## ✨ Features

- Full-screen hero with typewriter text, twinkling stars & floating hearts
- Animated vertical love timeline (alternating scroll-reveal cards)
- Masonry memory gallery with hover-zoom + lightbox
- 22 interactive "gift box" reasons with heart-particle reveals
- Sealed envelope → typewriter secret letter
- Parallax "Future Dreams" cards (GSAP ScrollTrigger)
- Elegant custom audio player for a personal voice message
- Grand finale with confetti, fireworks bursts, and a glowing replay button
- Background music control, cursor glow, particle background,
  dark/light toggle, animated heartbeat loading screen
- Fully responsive (mobile + desktop)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## 🎨 Customize Your Story

Everything personal lives in **`src/data/content.js`**:

- `timelineEvents` — your love timeline (date, title, description, photo)
- `galleryPhotos` — masonry gallery images + captions
- `reasons` — the 22 reasons (array of strings)
- `secretLetter` — your heartfelt letter (use `\n\n` for new paragraphs)
- `futureDreams` — the 4 future dream cards
- `siteMeta` — background music & voice message file paths

### Adding Photos

1. Drop image files into `src/assets/photos/`.
2. Import them at the top of `src/data/content.js`:
   ```js
   import firstMeet from '../assets/photos/first-meet.jpg'
   ```
3. Set `image: firstMeet` on the matching timeline/gallery entry.

### Adding Music & Voice Message

1. Drop audio files (mp3) into `src/assets/audio/`.
2. Import + set them in `src/data/content.js`:
   ```js
   import bgMusic from '../assets/audio/romantic-piano.mp3'
   import voiceMsg from '../assets/audio/my-message.mp3'

   export const siteMeta = {
     ...
     backgroundMusic: bgMusic,
     voiceMessage: voiceMsg,
   }
   ```

## 📦 Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## ▲ Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo on [vercel.com](https://vercel.com).
3. Framework preset: **Vite** (auto-detected). No extra config needed —
   build command `npm run build`, output directory `dist`.

Or deploy directly from CLI:

```bash
npm i -g vercel
vercel
```

## 🛠 Tech Stack

- React 18 + Vite
- Tailwind CSS (custom romantic palette: black, deep purple, gold, blush pink)
- Framer Motion (scroll reveals, modals, micro-interactions)
- GSAP + ScrollTrigger (parallax dream cards)
- canvas-confetti (finale celebration)
- react-icons

---

Made with love, for a lifetime of memories. ❤

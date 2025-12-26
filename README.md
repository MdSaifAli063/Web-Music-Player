# 🎧 Playify — Web Music Player

A modern, responsive web music player with a sleek black-and-green aesthetic, smooth animations, accessible controls, and keyboard shortcuts — built with plain HTML, CSS, and Vanilla JS.

![Made with HTML](https://img.shields.io/badge/HTML5-E44D26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Material Symbols](https://img.shields.io/badge/Material%20Symbols-1DB954?logo=google&logoColor=white&labelColor=0b0c0e)
![License: MIT](https://img.shields.io/badge/License-MIT-0b0c0e)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
![Responsive](https://img.shields.io/badge/Responsive-Yes-1db954)

---

## ✨ Features

- 🟢 Polished dark UI with subtle green accents (no overpowering tints)
- 📱 Fully responsive layout with off‑canvas sidebar on small screens
- ▶️ Play/Pause, ⏭ Next, ⏮ Previous, 🔀 Shuffle, 🔁 Repeat (off/all/one)
- ❤️ Like/save tracks with persistence via localStorage
- 🔊 Volume slider with memory across sessions
- ⏱️ Seekbar with smooth updates and scrubbing (mouse/touch)
- ⌨️ Keyboard shortcuts for playback and volume
- 🪟 Glassy buttons, hover animations, and accessible focus styles
- 🖼️ Playlist cards with hover play and dynamic playlists

---

## 📂 Project Structure

. ├── index.html # App markup and layout ├── css/ │ └── style.css # Theme, layout, components, responsive rules └── js/ └── script.js # Playback logic, UI wiring, playlists/tracks

---

## 🖼️ Preview

  ![image](https://github.com/MdSaifAli063/Web-Music-Player/blob/29d5e820506ffba61d536256df9ddd25269c5a59/Screenshot%202025-10-11%20013114_edited.png)

---
## 🚀 Getting Started

1) Clone or download this repository
- Download ZIP or:
```bash
git clone <your-repo-url>
cd playify
```
- Run locally (pick one)
- VS Code Live Server (recommended): Right‑click index.html → Open with Live Server
- Python
- Python 3: python3 -m http.server 5173
- Python 2: python -m SimpleHTTPServer 5173
- Node
- npx serve .
- npx http-server -p 5173
- Open in browser
- http://localhost:5173 (or your chosen port)
  
Note: Audio sources come from SoundHelix (CORS‑friendly). If you replace with your own files, ensure they are accessible from your server.

## 🕹️ Usage

- Use the big Play button to start/stop playback
- Shuffle and Repeat toggle via their icons
- Click playlist cards to load their tracks and start playing
- Like button saves the current track (persists across sessions)
- Drag the seekbar or click to scrub
- Adjust volume via the slider or arrow keys

## ⌨️ Keyboard Shortcuts

- Space: Play/Pause
- Arrow Right: Seek forward 5s
- Arrow Left: Seek backward 5s
- Arrow Up: Volume up
- Arrow Down: Volume down

## 🎨 Customize

Colors and Theme

All theme variables live at the top of css/style.css under :root. Tweak these to quickly change the look:

```bash
:root {
  --bg: #0b0c0e;
  --text: #e8f3e8;
  --primary: #1db954; /* green accent */
  --border: #23282d;
  /* ... */
}
```

- Brand and Icons
- Brand wordmark is a styled text element in index.html: Playify
- Icons use Material Symbols Rounded (Google Fonts). You can switch icons by changing their text content, e.g.: shuffle
- Add Your Songs
- Open js/script.js and edit the tracks array:

```bash
const tracks = [
  {
    id: "my-1",
    title: "My First Track",
    artist: "Me",
    src: "https://your.cdn.example.com/audio/my-track.mp3",
    cover: "https://your.cdn.example.com/covers/my-cover.jpg",
    duration: null, // keep null; it will auto-fill from metadata
  },
  // ...
];
```

Then optionally add your track IDs to a playlist in playlists:

```bash
const playlists = [
  {
    id: "pl-custom",
    title: "My Mix",
    desc: "Handpicked favorites.",
    cover: "https://your.cdn.example.com/covers/mix.jpg",
    trackIds: ["my-1", "qodo-2", "qodo-3"],
  },
];
```
No extra wiring needed: the UI will render playlists and durations automatically.

## 🧭 Files Overview

- index.html — semantic layout, Material Symbols, and basic structure
- css/style.css — refined black/green theme, controls, responsive sidebar, accessible focus
- js/script.js — Audio element setup, playlist rendering, queue management, seek, volume, repeat/shuffle, likes

## 🧩 Implementation Notes

- Audio is driven by a single HTMLAudioElement with JS event listeners
- Likes and volume are persisted with localStorage keys:
- playify_likes
- playify_volume
- Repeat supports three modes: off → all → one
- Sidebar becomes an off‑canvas drawer under 1024px (hamburger to open, close button inside)

## 🧪 Troubleshooting

- Audio won’t start automatically: Most browsers block autoplay with sound. Click the Play button once.
- Icons look like empty squares: Ensure you have the Material Symbols link in the head and an active internet connection.
- Green accents look too strong: Reduce --primary or remove subtle green mixes on hover in css/style.css.

## 📜 Credits

- Audio samples: SoundHelix (Public demo MP3s) — https://www.soundhelix.com/
- Cover images: Unsplash placeholders — https://unsplash.com
- Icons: Material Symbols Rounded — https://fonts.google.com/icons
- Please ensure your production assets (images/audio) are properly licensed for your use.

## 📄 License

MIT License — free to use, modify, and distribute.

## 🤝 Contributing

PRs are welcome! If you have UI tweaks, accessibility improvements, or new features:

- Fork the repo
- Create a feature branch
- Commit your changes
- Open a pull request

## 💬 Feedback

Have an idea to make the player even better? Open an issue or drop suggestions in discussions. Enjoy the music! 🎵

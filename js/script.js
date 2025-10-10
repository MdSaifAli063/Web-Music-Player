/**
 * Playify - Web Player Script
 * Features:
 * - Free songs + cover art
 * - Featured playlists
 * - Render song list (Your Library)
 * - Play/Pause/Next/Prev
 * - Shuffle/Repeat (off, all, one)
 * - Draggable seekbar, time display
 * - Volume with persistence
 * - Favorites (likes) with persistence
 * - Keyboard shortcuts
 * - Responsive sidebar toggle
 */

/* ------------------------ Data ------------------------ */
const songs = [
  {
    id: 1,
    title: "Night Owl",
    artist: "Broke For Free",
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3",
    cover:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "SoundHelix Song 1",
    artist: "T. Schürger",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Dreams",
    artist: "Joakim Karud",
    url: "https://cdn.pixabay.com/download/audio/2022/05/26/audio_91fc8b996c.mp3?filename=dreams-110734.mp3",
    cover:
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Corporate Motivation",
    artist: "Ashot Danielyan",
    url: "https://cdn.pixabay.com/download/audio/2022/10/15/audio_0d4d9b7092.mp3?filename=corporate-motivation-epic-121441.mp3",
    cover:
      "https://images.unsplash.com/photo-1518188233306-4f06508e27b3?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Sevish - Vivid",
    artist: "Sevish",
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Sevish/EDM_Compli/Sevish_-_02_-_Vivid.mp3",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Electro Cabello",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Electro%20Cabello.mp3",
    cover:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Sunrise Drive",
    artist: "RKVC",
    url: "https://cdn.pixabay.com/download/audio/2023/02/28/audio_ae1cf6408a.mp3?filename=sunrise-drive-140174.mp3",
    cover:
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Epic Sport Rock",
    artist: "Alex Grohl",
    url: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_fa6dfef8d4.mp3?filename=epic-sport-rock-113059.mp3",
    cover:
      "https://images.unsplash.com/photo-1515777315835-281b94c9589a?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Island",
    artist: "Declan DP",
    url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_946a8b672b.mp3?filename=island-110010.mp3",
    cover:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Acoustic Breeze",
    artist: "Benjamin Tissot",
    url: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    cover:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "SoundHelix Song 2",
    artist: "SoundHelix",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Sunny",
    artist: "Ikson",
    url: "https://cdn.pixabay.com/download/audio/2021/08/04/audio_9e20f1d1f7.mp3?filename=sunny-113242.mp3",
    cover:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "Better Days",
    artist: "Bensound",
    url: "https://www.bensound.com/bensound-music/bensound-betterdays.mp3",
    cover:
      "https://images.unsplash.com/photo-1444671946638-0b8d9b8f4d62?w=600&q=80&auto=format&fit=crop",
  },
];

// Featured playlists
const playlists = [
  {
    id: "chill-vibes",
    title: "Chill Vibes",
    desc: "Lo-fi, mellow and cozy tracks.",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80&auto=format&fit=crop",
    songs: [1, 3, 5, 7, 9],
  },
  {
    id: "focus-beats",
    title: "Focus Beats",
    desc: "Keep your head in the game.",
    cover:
      "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=800&q=80&auto=format&fit=crop",
    songs: [2, 4, 6, 3],
  },
  {
    id: "indie-mix",
    title: "Indie Mix",
    desc: "Fresh finds, indie flavor.",
    cover:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80&auto=format&fit=crop",
    songs: [1, 2, 3, 4, 5],
  },
  {
    id: "workout-boost",
    title: "Workout Boost",
    desc: "High-energy to power your reps.",
    cover:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80&auto=format&fit=crop",
    songs: [8, 5, 2, 6, 7],
  },
  {
    id: "acoustic-sunday",
    title: "Acoustic Sunday",
    desc: "Easy like Sunday morning.",
    cover:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&q=80&auto=format&fit=crop",
    songs: [10, 9, 3],
  },
];

/* ------------------------ State ------------------------ */
let baseQueue = songs.map((s) => s.id); // default: all songs
let queue = [...baseQueue];
let currentIndex = 0;

let isPlaying = false;
let isSeeking = false;
let isShuffle = JSON.parse(localStorage.getItem("playify_shuffle") || "false");
let repeatMode = localStorage.getItem("playify_repeat") || "off"; // off | all | one
let likedSet = new Set(
  JSON.parse(localStorage.getItem("playify_likes") || "[]")
);

const savedVolume = parseFloat(localStorage.getItem("playify_volume") || "0.8");

/* ------------------------ DOM ------------------------ */
const el = (id) => document.getElementById(id);

const sidebar = el("sidebar");
const openSidebarBtn = el("openSidebar");
const closeSidebarBtn = el("closeSidebar");

const songListUl = el("songListUl");
const cardContainer = el("cardContainer");

const playbar = el("playbar");
const playBtn = el("play");
const playIcon = el("playIcon"); // <-- NEW: material icon span inside play button (fallback handled below)
const nextBtn = el("next");
const prevBtn = el("previous");
const shuffleBtn = el("shuffle");
const repeatBtn = el("repeat");
const likeBtn = el("likeBtn");

const seekbar = el("seekbar");
const progress = el("progress");
const circle = el("circle");

const currentTimeEl = el("currentTime");
const totalTimeEl = el("totalTime");

const songTitleEl = el("songTitle");
const songArtistEl = el("songArtist");
const coverThumbEl = el("coverThumb");

const volumeRange = el("volumeRange");
const navBack = el("navBack");
const navForward = el("navForward");

/* ------------------------ Audio ------------------------ */
const audio = new Audio();
audio.preload = "metadata";
audio.crossOrigin = "anonymous"; // help with some hosts that allow CORS; harmless otherwise
audio.volume = Number.isFinite(savedVolume) ? savedVolume : 0.8;

/* ------------------------ Utils ------------------------ */
function getSongById(id) {
  return songs.find((s) => s.id === id);
}

function formatTime(sec) {
  if (!Number.isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2, "0");
}

function shuffleArray(arr) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function percentFromEvent(e) {
  const rect = seekbar.getBoundingClientRect();
  // Support mouse and touch
  let clientX = 0;
  if (e.touches && e.touches[0]) clientX = e.touches[0].clientX;
  else if (e.changedTouches && e.changedTouches[0])
    clientX = e.changedTouches[0].clientX;
  else if (typeof e.clientX === "number") clientX = e.clientX;
  const x = clientX - rect.left;
  const p = x / rect.width;
  return Math.max(0, Math.min(1, p));
}

/* ------------------------ Rendering ------------------------ */
function renderSongList() {
  songListUl.innerHTML = "";
  queue.forEach((songId, idx) => {
    const s = getSongById(songId);
    const li = document.createElement("li");
    li.dataset.index = String(idx);
    li.innerHTML = `
      <div class="song-index">${idx + 1}</div>
      <div class="song-meta">
        <div class="song-title">${s.title}</div>
        <div class="song-artist">${s.artist}</div>
      </div>
      <button class="icon-btn play-small" aria-label="Play ${
        s.title
      }" title="Play">
        <span class="material-symbols-rounded" aria-hidden="true">play_arrow</span>
      </button>
    `;
    // Highlight current
    if (idx === currentIndex) {
      li.style.background = "rgba(255,255,255,.06)";
      li.setAttribute("aria-current", "true");
    }
    // Row click -> load & play
    li.addEventListener("click", (e) => {
      const liIndex = Number(li.dataset.index);
      if (!Number.isNaN(liIndex)) {
        loadSongByIndex(liIndex);
        playCurrent();
      }
    });
    // Play button inside row - stop propagation so row click doesn't fire twice
    const btn = li.querySelector(".play-small");
    btn?.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const liIndex = Number(li.dataset.index);
      if (!Number.isNaN(liIndex)) {
        loadSongByIndex(liIndex);
        playCurrent();
      }
    });
    songListUl.appendChild(li);
  });
}

function renderPlaylists() {
  cardContainer.innerHTML = "";
  playlists.forEach((pl) => {
    const div = document.createElement("div");
    div.className = "card";
    div.dataset.playlistId = pl.id;
    div.innerHTML = `
      <img class="cover" src="${pl.cover}" alt="${pl.title} cover" />
      <div class="title">${pl.title}</div>
      <p class="desc">${pl.desc}</p>
      <div class="play-fab" title="Play">
        <img src="img/play.svg" width="18" alt="Play" />
      </div>
    `;
    div.addEventListener("click", () => setPlaylist(pl.id, true));
    cardContainer.appendChild(div);
  });
}

function updateNowPlayingUI() {
  const currentSong = getSongById(queue[currentIndex]);
  if (!currentSong) return;

  songTitleEl.textContent = currentSong.title;
  songArtistEl.textContent = currentSong.artist;
  coverThumbEl.src = currentSong.cover || "img/cover.svg";

  // Update like state
  const liked = likedSet.has(currentSong.id);
  likeBtn.dataset.liked = liked ? "true" : "false";
  likeBtn.title = liked ? "Unlike" : "Like";

  // Update song list highlight
  [...songListUl.children].forEach((li, i) => {
    if (i === currentIndex) {
      li.style.background = "rgba(255,255,255,.06)";
      li.setAttribute("aria-current", "true");
    } else {
      li.style.background = "transparent";
      li.removeAttribute("aria-current");
    }
  });
}

function updatePlayButtonUI() {
  // Prefer material icon span; if absent, fallback to <img> approach
  if (playIcon) {
    if (isPlaying) {
      playIcon.textContent = "pause";
      playBtn.title = "Pause";
      playBtn.setAttribute("aria-pressed", "true");
    } else {
      playIcon.textContent = "play_arrow";
      playBtn.title = "Play";
      playBtn.setAttribute("aria-pressed", "false");
    }
    return;
  }
  // Fallback: handle img inside play button (older markup)
  const img = playBtn.querySelector("img");
  if (!img) return;
  if (isPlaying) {
    img.src = "img/pause.svg";
    img.alt = "Pause";
    playBtn.title = "Pause";
  } else {
    img.src = "img/play.svg";
    img.alt = "Play";
    playBtn.title = "Play";
  }
}

function updateShuffleUI() {
  shuffleBtn.setAttribute("aria-pressed", isShuffle ? "true" : "false");
  shuffleBtn.title = isShuffle ? "Shuffle: On" : "Shuffle: Off";
}

function updateRepeatUI() {
  // off | all | one
  let title = "Repeat: Off";
  if (repeatMode === "all") title = "Repeat: All";
  if (repeatMode === "one") title = "Repeat: One";
  repeatBtn.title = title;
  repeatBtn.dataset.mode = repeatMode;
}

/* ------------------------ Queue / Playlist ------------------------ */
function setPlaylist(playlistId, autoplay = false) {
  const pl = playlists.find((p) => p.id === playlistId);
  if (!pl) return;

  baseQueue = pl.songs.slice();
  queue = isShuffle
    ? [
        getSongById(currentSongId())?.id || baseQueue[0],
        ...shuffleArray(baseQueue.filter((id) => id !== currentSongId())),
      ]
    : baseQueue.slice();
  currentIndex = 0;

  renderSongList();
  loadSongByIndex(0);
  if (autoplay) playCurrent();
}

function currentSongId() {
  return queue[currentIndex];
}

/* ------------------------ Player Controls ------------------------ */
function loadSongByIndex(index) {
  if (index < 0 || index >= queue.length) return;
  currentIndex = index;
  const s = getSongById(queue[currentIndex]);
  if (!s) return;

  // Stop current audio if playing
  audio.pause();
  audio.currentTime = 0;

  // Set new source
  audio.src = s.url;

  // Force load and handle errors
  try {
    audio.load();
    // Wait for metadata before allowing play
    audio.addEventListener("loadedmetadata", function onMetadata() {
      updateNowPlayingUI();
      audio.removeEventListener("loadedmetadata", onMetadata);
    });
  } catch (err) {
    console.error("Error loading audio:", err);
    nextSong(); // Skip to next song on load error
    return;
  }

  updateNowPlayingUI();
  // Reset times
  currentTimeEl.textContent = "0:00";
  totalTimeEl.textContent = formatTime(audio.duration || 0);
  updateSeekbarUI(0);
}

async function playCurrent() {
  if (!audio.src) {
    loadSongByIndex(currentIndex);
  }

  try {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      await playPromise;
      isPlaying = true;
      updatePlayButtonUI();
    }
  } catch (err) {
    console.error("Playback failed:", err);
    isPlaying = false;
    updatePlayButtonUI();
  }
}

function pauseCurrent() {
  audio.pause();
  isPlaying = false;
  updatePlayButtonUI();
}

function togglePlay() {
  if (isPlaying) pauseCurrent();
  else playCurrent();
}

function nextSong() {
  if (repeatMode === "one") {
    // Replay current
    audio.currentTime = 0;
    playCurrent();
    return;
  }

  if (currentIndex < queue.length - 1) {
    loadSongByIndex(currentIndex + 1);
    playCurrent();
  } else if (repeatMode === "all") {
    loadSongByIndex(0);
    playCurrent();
  } else {
    // End of queue
    pauseCurrent();
    audio.currentTime = 0;
  }
}

function prevSong() {
  if (audio.currentTime > 3) {
    // Restart if into the track
    audio.currentTime = 0;
    return;
  }
  if (currentIndex > 0) {
    loadSongByIndex(currentIndex - 1);
    playCurrent();
  } else if (repeatMode === "all") {
    loadSongByIndex(queue.length - 1);
    playCurrent();
  } else {
    audio.currentTime = 0;
  }
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  localStorage.setItem("playify_shuffle", JSON.stringify(isShuffle));

  const curId = currentSongId();

  if (isShuffle) {
    // Shuffle remaining while keeping current first
    const remaining = baseQueue.filter((id) => id !== curId);
    queue = [curId, ...shuffleArray(remaining)];
    currentIndex = 0;
  } else {
    // Return to base order, place current accordingly
    queue = baseQueue.slice();
    currentIndex = queue.indexOf(curId);
    if (currentIndex === -1) currentIndex = 0;
  }

  renderSongList();
  updateNowPlayingUI();
  updateShuffleUI();
}

function cycleRepeat() {
  if (repeatMode === "off") repeatMode = "all";
  else if (repeatMode === "all") repeatMode = "one";
  else repeatMode = "off";
  localStorage.setItem("playify_repeat", repeatMode);
  updateRepeatUI();
}

function toggleLike() {
  const curId = currentSongId();
  if (!curId) return;
  if (likedSet.has(curId)) likedSet.delete(curId);
  else likedSet.add(curId);
  localStorage.setItem("playify_likes", JSON.stringify(Array.from(likedSet)));
  updateNowPlayingUI();
}

/* ------------------------ Seekbar ------------------------ */
function updateSeekbarUI(percent) {
  percent = Math.max(0, Math.min(1, percent));
  progress.style.width = `${percent * 100}%`;
  circle.style.left = `${percent * 100}%`;
}

function seekToPercent(p) {
  if (!Number.isFinite(audio.duration)) return;
  audio.currentTime = audio.duration * p;
}

/* ------------------------ Event Listeners ------------------------ */
function bindEvents() {
  // Sidebar open/close must toggle 'open' class (CSS expects .left.open)
  openSidebarBtn?.addEventListener("click", () =>
    sidebar.classList.add("open")
  );
  closeSidebarBtn?.addEventListener("click", () =>
    sidebar.classList.remove("open")
  );

  // Browser navigation buttons
  navBack?.addEventListener("click", () => history.back());
  navForward?.addEventListener("click", () => history.forward());

  // Core controls (made defensive)
  playBtn?.addEventListener("click", togglePlay);
  nextBtn?.addEventListener("click", nextSong);
  prevBtn?.addEventListener("click", prevSong);
  shuffleBtn?.addEventListener("click", toggleShuffle);
  repeatBtn?.addEventListener("click", cycleRepeat);
  likeBtn?.addEventListener("click", toggleLike);

  // Volume
  if (volumeRange) {
    volumeRange.min = "0";
    volumeRange.max = "1";
    volumeRange.step = "0.01";
    volumeRange.value = String(audio.volume);
    volumeRange.addEventListener("input", (e) => {
      const v = parseFloat(e.target.value);
      audio.volume = Number.isFinite(v) ? v : 0.8;
      localStorage.setItem("playify_volume", String(audio.volume));
    });
  }

  // Seekbar interactions (mouse + touch)
  seekbar.addEventListener("mousedown", (e) => {
    isSeeking = true;
    const p = percentFromEvent(e);
    updateSeekbarUI(p);
  });
  window.addEventListener("mousemove", (e) => {
    if (!isSeeking) return;
    const p = percentFromEvent(e);
    updateSeekbarUI(p);
  });
  window.addEventListener("mouseup", (e) => {
    if (!isSeeking) return;
    const p = percentFromEvent(e);
    seekToPercent(p);
    isSeeking = false;
  });

  // Touch support
  seekbar.addEventListener(
    "touchstart",
    (e) => {
      isSeeking = true;
      const p = percentFromEvent(e);
      updateSeekbarUI(p);
      e.preventDefault();
    },
    { passive: false }
  );
  window.addEventListener(
    "touchmove",
    (e) => {
      if (!isSeeking) return;
      const p = percentFromEvent(e);
      updateSeekbarUI(p);
    },
    { passive: false }
  );
  window.addEventListener("touchend", (e) => {
    if (!isSeeking) return;
    // use circle left as last-known position
    const left = parseFloat(circle.style.left || "0");
    seekToPercent(left / 100);
    isSeeking = false;
  });

  // Click-to-seek (for taps)
  seekbar.addEventListener("click", (e) => {
    const p = percentFromEvent(e);
    seekToPercent(p);
  });

  // Audio events with error handling
  audio.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(audio.duration)) {
      totalTimeEl.textContent = formatTime(audio.duration);
      currentTimeEl.textContent = formatTime(audio.currentTime);
      updateSeekbarUI((audio.currentTime || 0) / audio.duration);
    }
  });

  audio.addEventListener("error", (e) => {
    console.error("Audio error:", e.target.error);
    setTimeout(() => nextSong(), 1000); // Try next song after error
  });

  // Keyboard shortcuts
  window.addEventListener("keydown", (e) => {
    const tag = document.activeElement?.tagName?.toLowerCase();
    // Avoid interfering with typing in inputs
    if (tag === "input" || tag === "textarea") return;

    switch (e.key) {
      case " ":
        e.preventDefault();
        togglePlay();
        break;
      case "ArrowRight":
        audio.currentTime = Math.min(
          audio.currentTime + 5,
          audio.duration || audio.currentTime + 5
        );
        break;
      case "ArrowLeft":
        audio.currentTime = Math.max(audio.currentTime - 5, 0);
        break;
      case "ArrowUp":
        e.preventDefault();
        audio.volume = Math.min(1, audio.volume + 0.05);
        volumeRange.value = String(audio.volume);
        localStorage.setItem("playify_volume", String(audio.volume));
        break;
      case "ArrowDown":
        e.preventDefault();
        audio.volume = Math.max(0, audio.volume - 0.05);
        volumeRange.value = String(audio.volume);
        localStorage.setItem("playify_volume", String(audio.volume));
        break;
      case "n":
      case "N":
        nextSong();
        break;
      case "p":
      case "P":
        prevSong();
        break;
      case "s":
      case "S":
        toggleShuffle();
        break;
      case "r":
      case "R":
        cycleRepeat();
        break;
      case "l":
      case "L":
        toggleLike();
        break;
      default:
        break;
    }
  });
}

/* ------------------------ Initialization ------------------------ */
function init() {
  renderPlaylists();

  // Setup default queue (all songs)
  baseQueue = songs.map((s) => s.id);
  if (isShuffle) {
    queue = shuffleArray(baseQueue);
  } else {
    queue = baseQueue.slice();
  }
  currentIndex = 0;

  renderSongList();
  loadSongByIndex(0);

  updateNowPlayingUI();
  updatePlayButtonUI();
  updateShuffleUI();
  updateRepeatUI();

  bindEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  // If the script runs after DOMContentLoaded (script at end of body),
  // call init immediately so the app initializes correctly.
  init();
}

// Service Worker for Vibe Coding Blog
const CACHE_NAME = 'vibe-coding-v1';
const urlsToCache = [
  './',
  './index.html',
  './assets/index-DVDmb0Gy.css',
  './assets/index-CBDib8xb.js',
  './assets/browser-P_T96fpo.js',
  './assets/stegaEncodeSourceMap-D3z7VPmC.js',
  './vite.svg',
  './images/pessham.png',
  './images/jissha.png',
  './images/metamake.jpg',
  './images/metamakeblack.jpg'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  // 同一オリジンのリクエストのみキャッシュ処理
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
        .catch(() => {
          // フォールバック：オフライン時はindex.htmlを返す
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        })
    );
  }
});

// Update Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
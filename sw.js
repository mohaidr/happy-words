const CACHE_NAME = 'happy-words-v63';
const urlsToCache = [
  '/',
  '/index.html',
  '/home.html',
  '/style.css',
  '/script.js',
  '/favicon.svg',
  '/manifest.json',
  '/icons/icon-192.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/screenshot-wide.png',
  '/icons/screenshot-narrow.png',
  '/css/games.css',
  '/js/game-utils.js',
  '/js/analytics.js',
  '/js/i18n.js',
  '/locales/en.json',
  '/locales/ar.json',
  '/games/game.html',
  '/games/abc-order.html',
  '/games/animal-sounds.html',
  '/games/balloon-math.html',
  '/games/category-fun.html',
  '/games/category-logic.html',
  '/games/category-math.html',
  '/games/category-reading.html',
  '/games/clock-time.html',
  '/games/color-match.html',
  '/games/counting-game.html',
  '/games/emoji-feelings.html',
  '/games/greater-less.html',
  '/games/math-racing.html',
  '/games/memory-match.html',
  '/games/number-muncher.html',
  '/games/odd-one-out.html',
  '/games/opposite-match.html',
  '/games/pattern-puzzle.html',
  '/games/rhyme-time.html',
  '/games/shape-spotter.html',
  '/games/sight-words.html',
  '/games/sorting-fun.html',
  '/games/story-comprehension.html',
  '/games/word-builder.html'
];

// Install event - cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache failed:', err);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-http(s) requests (like chrome-extension://)
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // Clone and cache the response
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
      .catch(() => {
        // Offline fallback could go here
      })
  );
});

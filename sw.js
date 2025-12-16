const CACHE = "finanzas-pwa-v2";

const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./android-launchericon-192-192.png",
  "./android-launchericon-512-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

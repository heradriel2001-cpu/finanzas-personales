const CACHE = "finanzas-pwa-v3";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll([
        "/finanzas-personales/",
        "/finanzas-personales/index.html",
        "/finanzas-personales/manifest.json"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

var CACHE_NAME = 'puzzle-magique-v1';
var urlsToCache = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap',
  'https://media.base44.com/images/public/6add0ef1f9d87dbc214db732/7e527848b_generated_image.png',
  'https://media.base44.com/images/public/6add0ef1f9d87dbc214db732/66d96a089_generated_image.png',
  'https://media.base44.com/images/public/6add0ef1f9d87dbc214db732/c7e96b6e3_generated_image.png',
  'https://media.base44.com/images/public/6add0ef1f9d87dbc214db732/6a27ec510_generated_image.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});

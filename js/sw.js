const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/index.html',
  '/styles.css',
  '/data.json',
  '/js/main.js',
  '/js/tlfunctions.js',
  '/js/sw.js',
  '/img/bg.jpg',
  '/img/top-bg.png',
  '/img/avatar.jpg',
  '/img/icons.svg',
  '/img/icons-vcard.svg',
  '/img/logo.svg',
  '/img/vcard.svg',
  '/img/favicon.ico',
  'https://fonts.googleapis.com/css?family=Open+Sans:400,300,700',
  'https://code.jquery.com/jquery-3.4.1.min.js',

];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
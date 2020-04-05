const staticCacheName = 'anujs.com.np_v1';
const assets = [
  '/',
  '/index.html',
  '/styles.css',
  '/data.json',
  '/js/main.js',
  '/js/tlfunctions.js',
  '/img/bg.jpg',
  '/img/top-bg.png',
  '/img/avatar.jpg',
  '/img/icons.svg',
  '/img/icons-vcard.svg',
  '/img/logo.svg',
  '/img/logomask.svg',
  '/img/logo16.svg',
  '/img/logo32.svg',
  '/img/logo48.svg',
  '/img/logo96.svg',
  '/img/logo144.svg',
  '/img/logo192.svg',
  '/img/logo256.svg',
  '/img/logo512.svg',
  '/img/vcard.svg',
  '/img/favicon.ico',
  'https://fonts.googleapis.com/css?family=Open+Sans:400,300,700',
  'https://code.jquery.com/jquery-3.4.1.min.js',

];
// install event
self.addEventListener('install', evt => {evt.waitUntil(caches.open(staticCacheName).then((cache) => {cache.addAll(assets);}));});
// activate event
self.addEventListener('activate', evt => {evt.waitUntil(caches.keys().then(keys => {return Promise.all(keys
  .filter(key => key !== staticCacheName)
  .map(key => caches.delete(key))
);}));});
// fetch event
self.addEventListener('fetch', evt => {evt.respondWith(caches.match(evt.request).then(cacheRes => {return cacheRes || fetch(evt.request);}));});
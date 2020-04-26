const staticCacheName = "anujs.com.np_v1.3";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/data.json",
  "/vcard.html",
  "/404.html",
  "/main.js",
  "/img/bg.svg",
  "/img/avatar.jpg",
  "/img/icons.svg",
  "/img/skills.svg",
  "/img/icons-vcard.svg",
  "/img/logo.svg",
  "/img/pwa/logomask.svg",
  "/img/pwa/logo16.png",
  "/img/pwa/logo32.png",
  "/img/pwa/logo48.png",
  "/img/pwa/logo96.png",
  "/img/pwa/logo144.png",
  "/img/pwa/logo192.png",
  "/img/pwa/logo256.png",
  "/img/pwa/logo512.png",
  "/img/vcard.svg",
  "/img/favicon.ico",
  "/fonts/Regular.woff2",
  "/fonts/Light.woff2",
  "/fonts/Bold.woff2",
  "/fonts/Italic.woff2",
  "/fonts/BoldItalic.woff2",
  "/fonts/LightItalic.woff2",
];
// install event
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
//new serviceworker avaialbe
self.addEventListener("controllerchange", function () {
  alert("New version available, please wait while refreshing.");
  setTimeout(function () {
    window.location.reload();
  }, 500);
});

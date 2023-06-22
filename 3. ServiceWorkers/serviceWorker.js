let cacheAssets = ["Index.html", "About.html"];
// all the files you want to cache.
//self is a new object.. for service worker. // its equivalent to this.
// window object is not available in web workers.
//self is used here to remove confusion between THIS and SELF as window.
self.addEventListener("install", (e) => {
  console.log("Service Worker : Installed !");
  e.waitUntil(
    caches
      .open("v1") // the open function uses promises.
      .then((cache) => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", () => {
  console.log("Service Worker Activated !");
});

self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

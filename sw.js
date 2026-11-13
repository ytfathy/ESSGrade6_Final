/* Offline support: always try the network first, fall back to the last copy saved on this device. */
const CACHE = "iee-g6ss-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET" || !/^https?:/.test(r.url)) return;
  e.respondWith(fetch(r).then(res => { if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)).catch(() => {}); } return res; })
    .catch(() => caches.match(r, {ignoreSearch: true}).then(m => m || (r.mode === "navigate" ? caches.match("./").then(x => x || Response.error()) : Response.error()))));
});

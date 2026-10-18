const CACHE_NAME = 'mowglai-cache-v1';
const PRECACHE_ASSETS = [
    '/',
    '/offline/',
    '/site.webmanifest',
    '/favicon.ico',
    '/logo1.png',
    '/fonts/Boldonse-Regular.ttf',
    '/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf',
];

// Install: Cache critical shell assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(PRECACHE_ASSETS).catch((err) => {
                console.warn('[SW] Precache asset fetch warning:', err);
            });
        }).then(() => self.skipWaiting())
    );
});

// Activate: Clean up older cache versions
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch: Strategy based on request type
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle HTTP/HTTPS GET requests within same origin
    if (request.method !== 'GET' || !url.protocol.startsWith('http')) {
        return;
    }

    // 1. Navigation requests (HTML pages)
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response.status === 200) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                    }
                    return response;
                })
                .catch(async () => {
                    const cached = await caches.match(request);
                    if (cached) return cached;
                    const offlinePage = await caches.match('/offline/');
                    return offlinePage || new Response('Offline - Mowglai', {
                        status: 503,
                        headers: { 'Content-Type': 'text/plain' },
                    });
                })
        );
        return;
    }

    // 2. Static Assets (CSS, JS, Fonts, Images)
    if (
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'font' ||
        request.destination === 'image' ||
        url.pathname.startsWith('/_next/') ||
        url.pathname.startsWith('/fonts/') ||
        url.pathname.startsWith('/images/')
    ) {
        event.respondWith(
            caches.match(request).then((cachedResponse) => {
                if (cachedResponse) {
                    // Stale-While-Revalidate: serve cached immediately, update cache in background
                    fetch(request)
                        .then((networkResponse) => {
                            if (networkResponse && networkResponse.status === 200) {
                                caches.open(CACHE_NAME).then((cache) => {
                                    cache.put(request, networkResponse);
                                });
                            }
                        })
                        .catch(() => {});
                    return cachedResponse;
                }

                // If not in cache, fetch from network and store
                return fetch(request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(request, responseToCache);
                        });
                    }
                    return networkResponse;
                });
            })
        );
        return;
    }

    // Default network-first for other requests
    event.respondWith(
        fetch(request).catch(() => caches.match(request))
    );
});

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {

    workbox.routing.registerRoute(
        new RegExp('/.*'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'sixl-restaurant-reviews-cache-same-origin'
        })
    );

    workbox.routing.registerRoute(
        new RegExp('https://unpkg.com/(.*)'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'sixl-restaurant-reviews-cache-unpkg'
        }),
    );

    workbox.routing.registerRoute(
        new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
        workbox.strategies.cacheFirst({
            cacheName: 'sixl-restaurant-reviews-cache-google-fonts',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 30,
                }),
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200]
                }),
            ],
        }),
    );

}
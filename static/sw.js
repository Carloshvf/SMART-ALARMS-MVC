importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f3aeba8faa007d306c2.js",
    "revision": "679908647359a65622d3147746f15f7f"
  },
  {
    "url": "/_nuxt/47194d6e9b81b36424aa.js",
    "revision": "fa80641d0036f67ac2dad2ba39db54f2"
  },
  {
    "url": "/_nuxt/57500e11be83e0bff690.js",
    "revision": "a94146c90275e22bb066858c084cf00b"
  },
  {
    "url": "/_nuxt/7c9ad7d760f6a6cc5dd3.js",
    "revision": "0ed0d335c9d6f2a4adbf7d737adee570"
  },
  {
    "url": "/_nuxt/86dcacdb3f9c431e4507.js",
    "revision": "82a629d4ca58f82ac10e50d639c19f5e"
  },
  {
    "url": "/_nuxt/8878fa584e368e5a83ea.js",
    "revision": "904f0621ea2f572517fe3311beb3950a"
  },
  {
    "url": "/_nuxt/8f1cbab0c64c13c6cfec.js",
    "revision": "d26259e030627d706947e68724f73d38"
  },
  {
    "url": "/_nuxt/b3d02240e55e07bd4fb1.js",
    "revision": "3737156f29e8b5d96672bb70bf756026"
  },
  {
    "url": "/_nuxt/e80701357230042dbc70.js",
    "revision": "32929f4a3500f954735380bad93be160"
  },
  {
    "url": "/_nuxt/e877a84a3cfaaacd4802.js",
    "revision": "e9e23e2d35582fd11f6e2aa4cb224610"
  },
  {
    "url": "/_nuxt/f2c53870c307152322e4.js",
    "revision": "9e46d36c999f4e638c35a90661195187"
  }
], {
  "cacheId": "smart-alarms",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

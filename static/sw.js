importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04c916b1bae773f90b59.js",
    "revision": "d807e7e2b91167aab9639383f85cadda"
  },
  {
    "url": "/_nuxt/167e0f527c11d0d978eb.js",
    "revision": "e577fdd232612a66357affd6ae47eae2"
  },
  {
    "url": "/_nuxt/1a926714773b89f6e4c8.js",
    "revision": "f5fea3d2d9a02aa034d08f24370e7444"
  },
  {
    "url": "/_nuxt/4577ca7362e4b01e7f84.js",
    "revision": "55c22902261938a1053f9238eb1adcbc"
  },
  {
    "url": "/_nuxt/4af2e4004e8f80282897.js",
    "revision": "ad520856b84e47fdd7c69dc7118c4f34"
  },
  {
    "url": "/_nuxt/6cd2c8f8cb2d6c809c9d.js",
    "revision": "8aa51fe727742714323af4d529c133b7"
  },
  {
    "url": "/_nuxt/6efd3261e0464560ada6.js",
    "revision": "bc0c1afc2a122ee235198142411dbb2d"
  },
  {
    "url": "/_nuxt/806589aafeb611ad03f9.js",
    "revision": "74f6925dddde78a139c3db0c0049f5a9"
  },
  {
    "url": "/_nuxt/900c9ebad570cc42a2ca.js",
    "revision": "316ede4a3078ac81542f3950fd6350ea"
  },
  {
    "url": "/_nuxt/902fc80a15bdea339bd4.js",
    "revision": "248f9a06b8ae35c41b6071645a724be6"
  },
  {
    "url": "/_nuxt/9ce500e4257627e25c1f.js",
    "revision": "9317fe464b746f48472289dd568e4c68"
  },
  {
    "url": "/_nuxt/a00822f634249cebca4e.js",
    "revision": "1d7748aff412ef21574135dd2c896021"
  },
  {
    "url": "/_nuxt/a65e951290c0884f6d81.js",
    "revision": "0aa49ad19c9605fbb4f330345d466e26"
  },
  {
    "url": "/_nuxt/c4f6f0c2e358c039c93e.js",
    "revision": "5f3b387cdd18b3179233a3beaae58ff9"
  },
  {
    "url": "/_nuxt/c55f851a18ee6784924b.js",
    "revision": "bc405cedb7a916b26c65d6f664d83fc8"
  },
  {
    "url": "/_nuxt/cfb2ff193074d400a2ac.js",
    "revision": "a6be8d803c6c6e42bdb5876a7be697ae"
  },
  {
    "url": "/_nuxt/d29134234f5da2a2010e.js",
    "revision": "d9c70667da3e4d673f82f2802e84423e"
  },
  {
    "url": "/_nuxt/d64c097557b513b9df93.js",
    "revision": "950f8bcb9fe43c42c61312a8978a7328"
  },
  {
    "url": "/_nuxt/e03c82820d3789cacb93.js",
    "revision": "04eb1f16305b97c013027bf940f19c5d"
  },
  {
    "url": "/_nuxt/e08520c32f98a191caf2.js",
    "revision": "60bfc02292e1a7fb797c833c8dcdece0"
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

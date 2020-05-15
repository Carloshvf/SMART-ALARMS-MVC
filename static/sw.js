importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2a66ee3c9c07a389dd79.js",
    "revision": "db26aa1e9954d515231b3b3658905c8c"
  },
  {
    "url": "/_nuxt/66298351715d5c73134b.js",
    "revision": "498d20017c43d82f57e9017c428e3eb5"
  },
  {
    "url": "/_nuxt/6fb01dd78fec098359fd.js",
    "revision": "318208c004c55bd550e922842f31b805"
  },
  {
    "url": "/_nuxt/8f9b4f0f3d95451ec447.js",
    "revision": "00d1a83892f9f3f3128cea2331e1e8ad"
  },
  {
    "url": "/_nuxt/a3aa78662459cbc22943.js",
    "revision": "9171bd4cca5396a21b9d9e38362a0f0f"
  },
  {
    "url": "/_nuxt/a8b3f00743bc7c04515c.js",
    "revision": "381e451b8bfd7f8d7fd37fcc3d610ae0"
  },
  {
    "url": "/_nuxt/a95a7ee4e05662273ece.js",
    "revision": "81bed2714abe9f4d8212f12bbade5bad"
  },
  {
    "url": "/_nuxt/b9899ba482ab01eea288.js",
    "revision": "2d9594a98bbe0ec5a18398ee5e689799"
  },
  {
    "url": "/_nuxt/c005bcab6ffd878d0833.js",
    "revision": "5edca0b1ce51f70d7fc08c6daa5648ee"
  },
  {
    "url": "/_nuxt/d6aa818445bce8057587.js",
    "revision": "8e8c66dde8abd53f9b7c5d5cde5cbf53"
  },
  {
    "url": "/_nuxt/e255a50c973994bca09c.js",
    "revision": "046ad5ad8e0b19c5038559f6c0f4207d"
  },
  {
    "url": "/_nuxt/fb71ab601c2623e28ebc.js",
    "revision": "9fff91479ca70f4d194b1aa3d9625696"
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

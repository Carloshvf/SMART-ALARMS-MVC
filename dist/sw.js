importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e5543901fcf3d8e7c50.js",
    "revision": "c2b7fe8bf28c940931f6ab2c2c292200"
  },
  {
    "url": "/_nuxt/502268cb149f9100eb13.js",
    "revision": "4d30fc5dce592b26081a805c5d43f642"
  },
  {
    "url": "/_nuxt/66298351715d5c73134b.js",
    "revision": "498d20017c43d82f57e9017c428e3eb5"
  },
  {
    "url": "/_nuxt/67a1e49b534ac36d8f4a.js",
    "revision": "93783fc1757df26de7c9b6fa9fbb94fd"
  },
  {
    "url": "/_nuxt/6860fdbe3aafe3f9385d.js",
    "revision": "4b5043ad0d4ebd941ae78f958808bd05"
  },
  {
    "url": "/_nuxt/6b96d23e6f2ca3ea7172.js",
    "revision": "f0368372278c4b04069b9ef4059dad5e"
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
    "url": "/_nuxt/bf8e24a7e7aecde3f2f8.js",
    "revision": "312f32cb05465d42355130bb874d73d3"
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

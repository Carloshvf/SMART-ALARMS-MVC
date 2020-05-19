importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08763ff5c7473e24c171.js",
    "revision": "da32bd844993ca38ef3f85a16294bdd0"
  },
  {
    "url": "/_nuxt/67a1e49b534ac36d8f4a.js",
    "revision": "93783fc1757df26de7c9b6fa9fbb94fd"
  },
  {
    "url": "/_nuxt/84e23b46004c3e023cdb.js",
    "revision": "d79a8b6c9f53f45ee5f7abd8011f84b2"
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
    "url": "/_nuxt/ae68fc7cc17f64cb4874.js",
    "revision": "7343b9cc121ade15cbefa8b3f74f55df"
  },
  {
    "url": "/_nuxt/bd544329399b3226b82f.js",
    "revision": "bc33abee0642918fc302f005f6cd2eda"
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
    "url": "/_nuxt/c1adadbec94914ce2ef0.js",
    "revision": "f58c87ebd269790e90b21bdcc038790f"
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

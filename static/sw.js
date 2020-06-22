importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1ad25e93224d3f3174ef.js",
    "revision": "d84705928514c3b83f0ba77c781cd695"
  },
  {
    "url": "/_nuxt/2785dd8ea0c918f32370.js",
    "revision": "9bf155c3e77d48cdabfb9a1858629e9f"
  },
  {
    "url": "/_nuxt/58477a255398c6f9c4ce.js",
    "revision": "e5da547ac47d15a926af55e0357ec13c"
  },
  {
    "url": "/_nuxt/663d2193435a93aaf34e.js",
    "revision": "738e4725c3ec1323a7e8b9822cc18c15"
  },
  {
    "url": "/_nuxt/821007a92746b55cd7c1.js",
    "revision": "648001c81bb801dcbce4e545d2c30bea"
  },
  {
    "url": "/_nuxt/860fba762ebb23e77a52.js",
    "revision": "1d02f31aa4d736c7449d5d46f1b53f2b"
  },
  {
    "url": "/_nuxt/9c6d3e6af86ca29703e8.js",
    "revision": "0b2ef5ebb79de78873969b847fb0122e"
  },
  {
    "url": "/_nuxt/aa5138b2ac38334d3c03.js",
    "revision": "c7b02c1023f48e1221f68f89027a495f"
  },
  {
    "url": "/_nuxt/b3cf2ded04bd340af234.js",
    "revision": "0f97a1e22df51a8465118a90d01972b6"
  },
  {
    "url": "/_nuxt/be398ddb57b36ed8f518.js",
    "revision": "4188ce26a782298175c23a915bc7d8ce"
  },
  {
    "url": "/_nuxt/caf25f7a484784d1a808.js",
    "revision": "ed1e1510707b04d34686845cc2291603"
  },
  {
    "url": "/_nuxt/ec9e2a2161b5e0817c75.js",
    "revision": "e5cfdddade483f7c6f6a925776e967cf"
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

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
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
    "url": "/_nuxt/71e282d6c92bbfdf43c6.js",
    "revision": "5c47ebafc65421c48fbe6f74c750953e"
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
    "url": "/_nuxt/bf2912e39fd1ac54afa4.js",
    "revision": "9bbc5baf42c7c844271d122b59cf8ce5"
  },
  {
    "url": "/_nuxt/caf25f7a484784d1a808.js",
    "revision": "ed1e1510707b04d34686845cc2291603"
  },
  {
    "url": "/_nuxt/e23dece45d27b1a5271c.js",
    "revision": "fc6ddabe24d7038c39de2c885e7acf6f"
  },
  {
    "url": "/_nuxt/ec9e2a2161b5e0817c75.js",
    "revision": "e5cfdddade483f7c6f6a925776e967cf"
  },
  {
    "url": "/_nuxt/f5d35c515f867a7892bb.js",
    "revision": "a8f94375f11aca676aed59fe202d2209"
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

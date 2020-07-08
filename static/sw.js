importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2785dd8ea0c918f32370.js",
    "revision": "9bf155c3e77d48cdabfb9a1858629e9f"
  },
  {
    "url": "/_nuxt/393ae5b071155e3d3237.js",
    "revision": "3d52cd5977b4e4c4110952ed07b14809"
  },
  {
    "url": "/_nuxt/58477a255398c6f9c4ce.js",
    "revision": "e5da547ac47d15a926af55e0357ec13c"
  },
  {
    "url": "/_nuxt/65a4693033993105cbf6.js",
    "revision": "e017dec47c389860c1aa5c395922979f"
  },
  {
    "url": "/_nuxt/663d2193435a93aaf34e.js",
    "revision": "738e4725c3ec1323a7e8b9822cc18c15"
  },
  {
    "url": "/_nuxt/6dc495b47420a7963815.js",
    "revision": "25d0e1c499684570209180d4f9a97256"
  },
  {
    "url": "/_nuxt/9c6d3e6af86ca29703e8.js",
    "revision": "0b2ef5ebb79de78873969b847fb0122e"
  },
  {
    "url": "/_nuxt/b174420fb031bbeda5f0.js",
    "revision": "7e37ed7859727d596bbca43e3561a8d5"
  },
  {
    "url": "/_nuxt/c9f3163987053196afd6.js",
    "revision": "32c8c0f496e19669c301af0f3ab273b5"
  },
  {
    "url": "/_nuxt/daa39e5c58ae15a58a60.js",
    "revision": "edb12b9a0cc0e1ed5c7b00c947b343ee"
  },
  {
    "url": "/_nuxt/daf416f55892c8c6bf6f.js",
    "revision": "9d2d6ae3507c7974815f19977e195a2b"
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

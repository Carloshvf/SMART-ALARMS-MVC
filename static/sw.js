importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1204c945c34d0cd51203.js",
    "revision": "67d7c6223070a0149a04edccdc0ae4f5"
  },
  {
    "url": "/_nuxt/1f17eb3b0f413780dae3.js",
    "revision": "de3c844785723be999f8d55287da526c"
  },
  {
    "url": "/_nuxt/2ef529d0d6fc804dae1e.js",
    "revision": "8ae40d5d7d0f72145428c65674999478"
  },
  {
    "url": "/_nuxt/32f49f86fbcaa53f2631.js",
    "revision": "82dac9cb25c8d55b906696d5a360dfb9"
  },
  {
    "url": "/_nuxt/47ed5a3105a31e001a08.js",
    "revision": "bbccdb78596f4283861312cd769e893d"
  },
  {
    "url": "/_nuxt/4eae79fffa35062cc025.js",
    "revision": "84350ff8b8f5ba5006f040e10a0ffb84"
  },
  {
    "url": "/_nuxt/55772cca21cc9fa763b0.js",
    "revision": "ce97b2c365577d38b203f8d93ec4357f"
  },
  {
    "url": "/_nuxt/6d2f2909930e7801e184.js",
    "revision": "713b19f6daa1865c0a6cf1cb93605400"
  },
  {
    "url": "/_nuxt/747f268e4a4b6465fda4.js",
    "revision": "8dbcd3b24ade5e5bbc00075de3ac79ac"
  },
  {
    "url": "/_nuxt/7fc131044006e710938a.js",
    "revision": "92273993be8e8ebe8987230fe24084de"
  },
  {
    "url": "/_nuxt/9637546302994b4d11b0.js",
    "revision": "e93465afc0acc5ffefb1692eb9966f17"
  },
  {
    "url": "/_nuxt/a0d1b6c8deb148824575.js",
    "revision": "7daad475d14053df5c5cee3456ab66c4"
  },
  {
    "url": "/_nuxt/a60507ba6c2ba488fc85.js",
    "revision": "c702c9df9e09d9e323e23666113bd17c"
  },
  {
    "url": "/_nuxt/a664d5df8c3c3d7ff8d1.js",
    "revision": "6b16b7ed11457ec7ebf1caef1aad1b2d"
  },
  {
    "url": "/_nuxt/a7ce556fe04fba9f37bd.js",
    "revision": "e0a1b6f26e54990df2e166c160614d61"
  },
  {
    "url": "/_nuxt/b3f5da848203d883cdfc.js",
    "revision": "3b549d004576e8416923c287f3078039"
  },
  {
    "url": "/_nuxt/db6d7445488620ff96d1.js",
    "revision": "228004bc51cfa0e1afef15173239c14e"
  },
  {
    "url": "/_nuxt/f9a9a3a7abd5967a03d8.js",
    "revision": "c051f39eb8801081b4e78a300173c14a"
  },
  {
    "url": "/_nuxt/fa4348a43497bf429c6a.js",
    "revision": "776e511b7ea1c041f482f351c9ff0df7"
  },
  {
    "url": "/_nuxt/fa547140dc33798e8851.js",
    "revision": "27f6f6c0e7935eb51efa067c61b653d8"
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

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/017a4085c6f65e46f89c.js",
    "revision": "4e1b52124a7bd265fc800187b56ed9f5"
  },
  {
    "url": "/_nuxt/062dc7d601183e673565.js",
    "revision": "b175f7f01f051715add2a0f1b018c453"
  },
  {
    "url": "/_nuxt/1d04336e289d345961ee.js",
    "revision": "4ae44580ac7307599c7989227b8b5c82"
  },
  {
    "url": "/_nuxt/47ead438541b7fc57648.js",
    "revision": "6250f28e053e2e5db79a73916a530fdf"
  },
  {
    "url": "/_nuxt/6423ca54a0b055614bbd.js",
    "revision": "7dd047ca82f372360238eed5d55ed9eb"
  },
  {
    "url": "/_nuxt/68c00798c8dba596afd5.js",
    "revision": "7a5bde4033961567c78fa02616ea33bf"
  },
  {
    "url": "/_nuxt/6c4698f9938ca2ae3874.js",
    "revision": "76119e550a0179d902ca1839ff7a0255"
  },
  {
    "url": "/_nuxt/85ce4b4aedbef5b39705.js",
    "revision": "0262738bc0c7341bfde413f31aa84e8e"
  },
  {
    "url": "/_nuxt/86342a54af52215152c8.js",
    "revision": "5dd5570673c59977e966cc94be221355"
  },
  {
    "url": "/_nuxt/87bebd0104ce9ad3d43d.js",
    "revision": "721ee74856dc5e5f7c9b3b01057efe74"
  },
  {
    "url": "/_nuxt/8b84251d4f7168d2e6db.js",
    "revision": "e255f46a463b3bc98cf209e24593458d"
  },
  {
    "url": "/_nuxt/969308a7f17ae6faedfe.js",
    "revision": "94bd74e01b7a72334e43202fb415e0ce"
  },
  {
    "url": "/_nuxt/9ffe394513270bc21fea.js",
    "revision": "e3c017f455b6542d88233c156f3ee3fa"
  },
  {
    "url": "/_nuxt/c176323161960085b6e4.js",
    "revision": "21f0debc47fd993af814cff0abde0fd3"
  },
  {
    "url": "/_nuxt/c3dddfc0c2bd434cea25.js",
    "revision": "3be0a1fa3acad33f44827b3cd1d4fdd8"
  },
  {
    "url": "/_nuxt/cecd5a69f603cd5b9d8d.js",
    "revision": "7d7d7145df81d599e7e95173ef7add99"
  },
  {
    "url": "/_nuxt/e8b5841db9e88bd85e0f.js",
    "revision": "3d8d308ee57a89134db210353a59e602"
  },
  {
    "url": "/_nuxt/f42e3781cd8beba358d8.js",
    "revision": "7c764653371f3d8bc159c178c3879273"
  },
  {
    "url": "/_nuxt/f71329829ff932031519.js",
    "revision": "c92fb04f39b80416d0c1d9523ca177e7"
  },
  {
    "url": "/_nuxt/fd0f0799de60dd515ef6.js",
    "revision": "ca44a16c0d9f01b6d4f7f485818ca043"
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

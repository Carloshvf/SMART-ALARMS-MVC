importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/062dc7d601183e673565.js",
    "revision": "b175f7f01f051715add2a0f1b018c453"
  },
  {
    "url": "/_nuxt/15532f3c1bed974ddc92.js",
    "revision": "4f348ce5c6f5548f62ce693aa9e5aaaa"
  },
  {
    "url": "/_nuxt/3be9f9c205c0c31ffc13.js",
    "revision": "d8eadd43124de78dba4df4eecc6d0a86"
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
    "url": "/_nuxt/930accd44139fa40a75a.js",
    "revision": "cc3889d35a97f41f71a3d6839633c939"
  },
  {
    "url": "/_nuxt/969308a7f17ae6faedfe.js",
    "revision": "94bd74e01b7a72334e43202fb415e0ce"
  },
  {
    "url": "/_nuxt/9e36b842abfadb504160.js",
    "revision": "210932dedb13af617e47b0b183777bc3"
  },
  {
    "url": "/_nuxt/9ffe394513270bc21fea.js",
    "revision": "e3c017f455b6542d88233c156f3ee3fa"
  },
  {
    "url": "/_nuxt/b3835d9b2f4ffead0e00.js",
    "revision": "dd577f852b3d7463a0d12182454c8450"
  },
  {
    "url": "/_nuxt/c176323161960085b6e4.js",
    "revision": "21f0debc47fd993af814cff0abde0fd3"
  },
  {
    "url": "/_nuxt/e5ecace99e78569fc0f7.js",
    "revision": "807d46603a1d507bbd41c7ca9a109f07"
  },
  {
    "url": "/_nuxt/ebded75af27dc917b762.js",
    "revision": "afb2bc4c690acf615a946f54f4a3606e"
  },
  {
    "url": "/_nuxt/f42e3781cd8beba358d8.js",
    "revision": "7c764653371f3d8bc159c178c3879273"
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

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01e134b54e5206d43941.js",
    "revision": "bcff0c9fe0ad72f8e283d97a41b6c349"
  },
  {
    "url": "/_nuxt/0a740de6759ade831f7f.js",
    "revision": "aa04c32e23dac7a0ffbc1c7c83a235b0"
  },
  {
    "url": "/_nuxt/1204c945c34d0cd51203.js",
    "revision": "67d7c6223070a0149a04edccdc0ae4f5"
  },
  {
    "url": "/_nuxt/1c3e227d7d0787f2f2f2.js",
    "revision": "158fdfd38c481cb751299deb5114b46b"
  },
  {
    "url": "/_nuxt/68c00798c8dba596afd5.js",
    "revision": "7a5bde4033961567c78fa02616ea33bf"
  },
  {
    "url": "/_nuxt/762541c09e70f5cc80cd.js",
    "revision": "b95adfa9fecd4b12dceb655d53aa93ae"
  },
  {
    "url": "/_nuxt/9411b5e3d206a3226669.js",
    "revision": "0d4e2140777def1d3866e85c936bbfa6"
  },
  {
    "url": "/_nuxt/9c09fb6fe834b55fdfed.js",
    "revision": "147ed4b8dbe34af543980a9d6c929ad6"
  },
  {
    "url": "/_nuxt/9fb711b6f9250196eaa3.js",
    "revision": "62b08001d81d5504c18177e6898dab5e"
  },
  {
    "url": "/_nuxt/a717659d9591aa2fccbd.js",
    "revision": "a05ce11adb3735b592833301b43ed6db"
  },
  {
    "url": "/_nuxt/af3c229f3fa84fbb8d51.js",
    "revision": "351790963dfdffb46a7752a5fe797fcb"
  },
  {
    "url": "/_nuxt/bd0e86d1bf8890acb08d.js",
    "revision": "67c0a9c43fde255ede1c3a11d5b5e6dc"
  },
  {
    "url": "/_nuxt/bee43eb7a1ea6bbf496c.js",
    "revision": "2358abc9a01af582ce4a213c5e8314f8"
  },
  {
    "url": "/_nuxt/bf44d42b69c6377b60df.js",
    "revision": "78fc0b74cb3544398f6d28f126f3be60"
  },
  {
    "url": "/_nuxt/c1d95affb2978af502df.js",
    "revision": "fe69c68433f9bd736c7c2ce69ee4402d"
  },
  {
    "url": "/_nuxt/c5a067000a0c56a9b89d.js",
    "revision": "3ee3456d65a2c9b6682a6e999be257c3"
  },
  {
    "url": "/_nuxt/cabe6536e6b5bd6ab937.js",
    "revision": "c029a0ef74c41c4a7e2fadb622cf478e"
  },
  {
    "url": "/_nuxt/f0d162eceb98f719aa16.js",
    "revision": "9599c579ada249c12031258dc4dc0e7e"
  },
  {
    "url": "/_nuxt/fa547140dc33798e8851.js",
    "revision": "27f6f6c0e7935eb51efa067c61b653d8"
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

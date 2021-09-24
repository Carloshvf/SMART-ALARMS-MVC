importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1204c945c34d0cd51203.js",
    "revision": "67d7c6223070a0149a04edccdc0ae4f5"
  },
  {
    "url": "/_nuxt/17af9ab52b2def390c37.js",
    "revision": "a7d987df748b42c4f107689dc5ce1319"
  },
  {
    "url": "/_nuxt/2394b7f513da0bb33078.js",
    "revision": "159ef70d67171e09638d17344484b272"
  },
  {
    "url": "/_nuxt/2d453712fd94df8f24df.js",
    "revision": "c38b32ac1d17b0aee7afa19189fbb0c4"
  },
  {
    "url": "/_nuxt/30e3ef67715422402c90.js",
    "revision": "43bef299b22e80be4fe8f0962d60eeb1"
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
    "url": "/_nuxt/9fb711b6f9250196eaa3.js",
    "revision": "62b08001d81d5504c18177e6898dab5e"
  },
  {
    "url": "/_nuxt/af3c229f3fa84fbb8d51.js",
    "revision": "351790963dfdffb46a7752a5fe797fcb"
  },
  {
    "url": "/_nuxt/bee43eb7a1ea6bbf496c.js",
    "revision": "2358abc9a01af582ce4a213c5e8314f8"
  },
  {
    "url": "/_nuxt/c03c8f31a569ddb6d683.js",
    "revision": "0971f4796733e3a74cf54476c6394a65"
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
    "url": "/_nuxt/d248b249858e694b8d46.js",
    "revision": "89ddc95f87815eb0b3c1ed646532c772"
  },
  {
    "url": "/_nuxt/e75e6514fbbb25a1d83b.js",
    "revision": "23eaeb3f641e346ded60def9d9a4de28"
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
    "url": "/_nuxt/fbd3832da4343f70568e.js",
    "revision": "5a5c4477fe8647acde397465c6e2c50a"
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

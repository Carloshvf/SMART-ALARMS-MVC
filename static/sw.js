importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16d72fa.js",
    "revision": "940394a47430ce01ad02f1950508df1f"
  },
  {
    "url": "/_nuxt/1c811d9.js",
    "revision": "589c075ef3023a9de1261d073b5e6b9e"
  },
  {
    "url": "/_nuxt/1e63cd2.js",
    "revision": "b6aebec9d6eb69318278e5524a00bf4a"
  },
  {
    "url": "/_nuxt/216f4fe.js",
    "revision": "f963676b2ad2016f7204ebff238ef0b7"
  },
  {
    "url": "/_nuxt/2af0c65.js",
    "revision": "9cdd9d4dd3fe75d14b3154fde45d69ff"
  },
  {
    "url": "/_nuxt/321dfd2.js",
    "revision": "785e17d56a4a655937b7495a023abbb8"
  },
  {
    "url": "/_nuxt/329b602.js",
    "revision": "71e548d1d115b95b35e1d0d013ddd702"
  },
  {
    "url": "/_nuxt/3743b3b.js",
    "revision": "660f2b5d2518e6fe62c13d099812c5fc"
  },
  {
    "url": "/_nuxt/47f398a.js",
    "revision": "16f985b610ebb049b2425b57dae0487d"
  },
  {
    "url": "/_nuxt/63ced15.js",
    "revision": "c34ca71592015946989785df4a9c29c3"
  },
  {
    "url": "/_nuxt/721454b.js",
    "revision": "cbef19d7f8fc16ade5c64ff5e15f488c"
  },
  {
    "url": "/_nuxt/745c847.js",
    "revision": "541ec66f08b03b5658e04e2248f612fc"
  },
  {
    "url": "/_nuxt/8048b91.js",
    "revision": "e2a4d3fe119864ad48dffca691c893ae"
  },
  {
    "url": "/_nuxt/823b4cb.js",
    "revision": "5276f214e184ec9865b44f7fca3daab3"
  },
  {
    "url": "/_nuxt/84f2dab.js",
    "revision": "83c3ea6f47b6d72f372aa5cd94fba293"
  },
  {
    "url": "/_nuxt/89676c4.js",
    "revision": "64dab5ffbf47e45e42a52f092b1485aa"
  },
  {
    "url": "/_nuxt/9362513.js",
    "revision": "5791f9bac988698dbf052a5c673b5825"
  },
  {
    "url": "/_nuxt/9ded5ab.js",
    "revision": "3e7f7027a14eafc565ff9bdf2a29a199"
  },
  {
    "url": "/_nuxt/ab618b0.js",
    "revision": "3d6dd2498508c7ec10206b80280d8e85"
  },
  {
    "url": "/_nuxt/dd80a9f.js",
    "revision": "1d2f039fd74e72b55a7ccf8c83ca6941"
  },
  {
    "url": "/_nuxt/fe064b8.js",
    "revision": "53726a9c4175de3a962e5a780d4da1c4"
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

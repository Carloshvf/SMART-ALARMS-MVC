importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1c9a118fc7eb30f2f47f.js",
    "revision": "31dccc9af4fe389f192446f2fe6bfd45"
  },
  {
    "url": "/_nuxt/209b79fdc68b6da44ae8.js",
    "revision": "1c9230c64f221af58782a23613604229"
  },
  {
    "url": "/_nuxt/22bd68c6a9299bb154a1.js",
    "revision": "4aeab306f879b25eb50ff96d790be607"
  },
  {
    "url": "/_nuxt/30fa8c385c0ed276cbdf.js",
    "revision": "fbc741d63a59b1edbdb976b11d9e6a45"
  },
  {
    "url": "/_nuxt/42abc8c30254d5b60da3.js",
    "revision": "4e71bdb75468a09c6e9a2eea14112178"
  },
  {
    "url": "/_nuxt/579fae4b50893c861e9a.js",
    "revision": "0d5291a72ada4ec2d70a6da18ae4fb34"
  },
  {
    "url": "/_nuxt/5a949d909e7dd8cbae17.js",
    "revision": "9b1abd91bfdb4b64e79d0e6c73840113"
  },
  {
    "url": "/_nuxt/61ec6328e09bdc5a5f20.js",
    "revision": "1db4a9d057f1758f12c3dda11deedbe7"
  },
  {
    "url": "/_nuxt/67d7676ee88b2d1079dc.js",
    "revision": "81078895363b8b44cab9321e44860557"
  },
  {
    "url": "/_nuxt/803a833cc81455635646.js",
    "revision": "0a582d036ef2f57a4920e792adbf4520"
  },
  {
    "url": "/_nuxt/94316f71b333507c4081.js",
    "revision": "f8394ed14d1a5fd24c0bda9f9f2dac65"
  },
  {
    "url": "/_nuxt/b525353576431c243dc2.js",
    "revision": "4812104c717d427ed6d917a4dc091054"
  },
  {
    "url": "/_nuxt/c5e0c698a25ec1b9929f.js",
    "revision": "62ca1127eb6af005524665774a3cec4b"
  },
  {
    "url": "/_nuxt/ce11f3f089b525c70489.js",
    "revision": "540e3b85b8df8c055eb7ad8cd3e06599"
  },
  {
    "url": "/_nuxt/d9b371bfb0160df6b691.js",
    "revision": "00cbbdf9dca2eaecf5fdd7655d874123"
  },
  {
    "url": "/_nuxt/eaaa42fb691e651143e9.js",
    "revision": "94839b0a56965d5d33f697a60604f983"
  },
  {
    "url": "/_nuxt/f736dc58fd1ecca6f23c.js",
    "revision": "aafaa4365001ade1632588c99f8345f0"
  },
  {
    "url": "/_nuxt/faf31da6b375758dac62.js",
    "revision": "d108b8b17be0c2d1d07218bcdcde8a73"
  },
  {
    "url": "/_nuxt/fc1e8edba2aa704bc16a.js",
    "revision": "5bfde1534bdabaeb3009209ce6279a81"
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

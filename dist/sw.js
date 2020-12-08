importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04c916b1bae773f90b59.js",
    "revision": "d807e7e2b91167aab9639383f85cadda"
  },
  {
    "url": "/_nuxt/4577ca7362e4b01e7f84.js",
    "revision": "55c22902261938a1053f9238eb1adcbc"
  },
  {
    "url": "/_nuxt/4af2e4004e8f80282897.js",
    "revision": "ad520856b84e47fdd7c69dc7118c4f34"
  },
  {
    "url": "/_nuxt/4eb86c425ace409b0ee5.js",
    "revision": "0055be23984382715d19bdef685bf6c4"
  },
  {
    "url": "/_nuxt/611d2eef412562d64273.js",
    "revision": "a0dd19c61a30e88c788704d6d250ba05"
  },
  {
    "url": "/_nuxt/6b8551c52e07c030165a.js",
    "revision": "ed04e316c31769662743282101b77f9d"
  },
  {
    "url": "/_nuxt/6cd2c8f8cb2d6c809c9d.js",
    "revision": "8aa51fe727742714323af4d529c133b7"
  },
  {
    "url": "/_nuxt/6efd7b5725bc37cda89d.js",
    "revision": "d38a384034ed0b9de91898ff02b0b559"
  },
  {
    "url": "/_nuxt/806589aafeb611ad03f9.js",
    "revision": "74f6925dddde78a139c3db0c0049f5a9"
  },
  {
    "url": "/_nuxt/9ce500e4257627e25c1f.js",
    "revision": "9317fe464b746f48472289dd568e4c68"
  },
  {
    "url": "/_nuxt/9e8bfbb2d37026cedd03.js",
    "revision": "895815e68f64fbfe56e65a345988ce9d"
  },
  {
    "url": "/_nuxt/a01c3ae8108f594b7955.js",
    "revision": "ac74207de0811863046cb48e7bcfa6ab"
  },
  {
    "url": "/_nuxt/a65e951290c0884f6d81.js",
    "revision": "0aa49ad19c9605fbb4f330345d466e26"
  },
  {
    "url": "/_nuxt/c4f6f0c2e358c039c93e.js",
    "revision": "5f3b387cdd18b3179233a3beaae58ff9"
  },
  {
    "url": "/_nuxt/c55f851a18ee6784924b.js",
    "revision": "bc405cedb7a916b26c65d6f664d83fc8"
  },
  {
    "url": "/_nuxt/cfe0c85bfdd2674b82b4.js",
    "revision": "8272149b1427690e8cd9b910f9d473a2"
  },
  {
    "url": "/_nuxt/d29134234f5da2a2010e.js",
    "revision": "d9c70667da3e4d673f82f2802e84423e"
  },
  {
    "url": "/_nuxt/d847ff12f712f2c24a45.js",
    "revision": "a84c4e088eaec6f57c2dad84f6bc7723"
  },
  {
    "url": "/_nuxt/efbf05cb72d3c5ac90f0.js",
    "revision": "8970dc0e339f67543345dc78430efdf8"
  },
  {
    "url": "/_nuxt/fd331bb929acea518dd8.js",
    "revision": "3e8cf41ddf39f3ae54590cce62ce39e1"
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

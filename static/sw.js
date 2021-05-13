importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06da0859808d676967d9.js",
    "revision": "4e58753e478a1dab88994509b5bb4d72"
  },
  {
    "url": "/_nuxt/14fb26595570939d5abb.js",
    "revision": "ac6d2d8cfcf6af02cd6ee2a7c337dfca"
  },
  {
    "url": "/_nuxt/2dced049c687ce30f912.js",
    "revision": "0e3be82028ee11049bb91957e2bedd1e"
  },
  {
    "url": "/_nuxt/48c2b845e41a55d794bd.js",
    "revision": "f84f676aea340efdfb154031ba0af426"
  },
  {
    "url": "/_nuxt/52289f0930135aa08109.js",
    "revision": "9c61de3926fc1102d10c43bcde6a5020"
  },
  {
    "url": "/_nuxt/5cb3c90720a64299a365.js",
    "revision": "d0ac4d693af108b7afb73ae400c21c0a"
  },
  {
    "url": "/_nuxt/85ca09716a2aa74843f0.js",
    "revision": "460239d3cd205901aa37a6f0db9fef72"
  },
  {
    "url": "/_nuxt/aa38927115835b6c3b8e.js",
    "revision": "b05d9c327feed5109753b6604907aa73"
  },
  {
    "url": "/_nuxt/b1a60761b14882243461.js",
    "revision": "68cb531eb0a12acf1e1b9980a1a0b856"
  },
  {
    "url": "/_nuxt/b681ee1620508e997917.js",
    "revision": "19b8b945d8a12e5e0acb8ee433f90086"
  },
  {
    "url": "/_nuxt/ca73bdbef3cbd98f0a42.js",
    "revision": "886cad538a543af9db7f339255a0fb4b"
  },
  {
    "url": "/_nuxt/cb3d03a26b8e6333e191.js",
    "revision": "9021f9f7e1180258ec62cc20d8d30bcf"
  },
  {
    "url": "/_nuxt/d9f4520bcb82584dab03.js",
    "revision": "b0a5125ebf2a2a5952cebbb8a0cc43e2"
  },
  {
    "url": "/_nuxt/dc7d9f09acd950cacd08.js",
    "revision": "c8a5c4eb3960e92edf23d45ac15d20d2"
  },
  {
    "url": "/_nuxt/dfbad4ff0e8ee2016ae0.js",
    "revision": "a16c8fddc86784639d6b81262d02b784"
  },
  {
    "url": "/_nuxt/e796935323cc1fbf5a7a.js",
    "revision": "b78df5de1d621343d40854c64d34bd2d"
  },
  {
    "url": "/_nuxt/ebea2d6fcb9e24858620.js",
    "revision": "1a0085ab1b9c922f1788fdbd72b8dbc3"
  },
  {
    "url": "/_nuxt/f12e3fb9f09ac6ce7be9.js",
    "revision": "9edf0beb32afdf666954a39e52da3ea6"
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

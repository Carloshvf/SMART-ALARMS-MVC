importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/006d438b3b6c382ad33e.js",
    "revision": "afd98282b3db5e9049560e8d89571b4b"
  },
  {
    "url": "/_nuxt/097f77de6539d6b0ca00.js",
    "revision": "c9259445207ee0622e4ca6c750cc0124"
  },
  {
    "url": "/_nuxt/14fb26595570939d5abb.js",
    "revision": "ac6d2d8cfcf6af02cd6ee2a7c337dfca"
  },
  {
    "url": "/_nuxt/48c2b845e41a55d794bd.js",
    "revision": "f84f676aea340efdfb154031ba0af426"
  },
  {
    "url": "/_nuxt/4a64188f1e5ae28e452d.js",
    "revision": "9cbab4be3032a6ff780a03ac65fe5620"
  },
  {
    "url": "/_nuxt/65b57c911675de429486.js",
    "revision": "18893181545bfd2ea841b1b81351249b"
  },
  {
    "url": "/_nuxt/8195fd1c6d8e095518f4.js",
    "revision": "137a873bae02487e14d226761644f1ff"
  },
  {
    "url": "/_nuxt/8fe6b2fa13b4dc26aaa6.js",
    "revision": "45d56c6dd7871d0b2329dd7e6fc0b78c"
  },
  {
    "url": "/_nuxt/9883ff211d8d93a738c4.js",
    "revision": "a4cf3b36d529887133285b6094367ed3"
  },
  {
    "url": "/_nuxt/a20e1f1f53bd6ca1f0c6.js",
    "revision": "b808664c0ce7911ad0c4bc7807033273"
  },
  {
    "url": "/_nuxt/a8212ae2c9c6d15e6874.js",
    "revision": "70aae9db5f4e9fc0d20da6a78099449d"
  },
  {
    "url": "/_nuxt/b1a60761b14882243461.js",
    "revision": "68cb531eb0a12acf1e1b9980a1a0b856"
  },
  {
    "url": "/_nuxt/c2626f1206d157fa2239.js",
    "revision": "47b8d8199ef4e9e48c0730221a4bed1b"
  },
  {
    "url": "/_nuxt/ded164e346d99d93a8e3.js",
    "revision": "086d6d5a673fdb5085ba0b2711108efc"
  },
  {
    "url": "/_nuxt/dfbad4ff0e8ee2016ae0.js",
    "revision": "a16c8fddc86784639d6b81262d02b784"
  },
  {
    "url": "/_nuxt/f12e3fb9f09ac6ce7be9.js",
    "revision": "9edf0beb32afdf666954a39e52da3ea6"
  },
  {
    "url": "/_nuxt/f5df4a9dee14c58da215.js",
    "revision": "8685d1d691990acd6aba9d7fcab377ce"
  },
  {
    "url": "/_nuxt/fcc9ff57be8d9b5833b0.js",
    "revision": "724a706c3a74c6a7dfb449268063b20a"
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

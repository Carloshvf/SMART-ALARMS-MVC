importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/097f77de6539d6b0ca00.js",
    "revision": "c9259445207ee0622e4ca6c750cc0124"
  },
  {
    "url": "/_nuxt/14fb26595570939d5abb.js",
    "revision": "ac6d2d8cfcf6af02cd6ee2a7c337dfca"
  },
  {
    "url": "/_nuxt/30a3d6cdbaf31f607cb8.js",
    "revision": "22c22fff200608857f17db4468127f3b"
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
    "url": "/_nuxt/5300792b90251cdb821e.js",
    "revision": "cf275c91000e338b15c06357f36c8f32"
  },
  {
    "url": "/_nuxt/54abab257452b92142a2.js",
    "revision": "06c2e21979370cbf057efe5aaa448a78"
  },
  {
    "url": "/_nuxt/65b57c911675de429486.js",
    "revision": "18893181545bfd2ea841b1b81351249b"
  },
  {
    "url": "/_nuxt/7af1d485e9421fd90707.js",
    "revision": "a33c97d77e413aa81e084d8a2d6a5548"
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
    "url": "/_nuxt/b1a60761b14882243461.js",
    "revision": "68cb531eb0a12acf1e1b9980a1a0b856"
  },
  {
    "url": "/_nuxt/c716178b9bb2481d7b35.js",
    "revision": "b2cb586d2831d8e40147182ad89594cd"
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
    "url": "/_nuxt/ef2cb6671151478fff10.js",
    "revision": "f657d766872cb574066edbf7004d6ec7"
  },
  {
    "url": "/_nuxt/f12e3fb9f09ac6ce7be9.js",
    "revision": "9edf0beb32afdf666954a39e52da3ea6"
  },
  {
    "url": "/_nuxt/fd0f0799de60dd515ef6.js",
    "revision": "ca44a16c0d9f01b6d4f7f485818ca043"
  },
  {
    "url": "/_nuxt/ff4db666740b8672075e.js",
    "revision": "981c0558627bc754a6cdb405078ce204"
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

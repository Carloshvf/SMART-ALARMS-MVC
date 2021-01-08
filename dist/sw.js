importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/043797b5dbb8a5104d42.js",
    "revision": "ab5a4cd47fab68e69d56b2ccbc6997fa"
  },
  {
    "url": "/_nuxt/0c4f45c79b05f32678eb.js",
    "revision": "681b14bc69120a1805d029c6a3fee1bd"
  },
  {
    "url": "/_nuxt/3f6956d24e4338d33d58.js",
    "revision": "e5c0ec57612bd288e373a2f2019662f3"
  },
  {
    "url": "/_nuxt/426fb9953011e13defe6.js",
    "revision": "110dba77754ed5123746998a84b17611"
  },
  {
    "url": "/_nuxt/479cacf2846a43ad76f3.js",
    "revision": "f31320252c8ec8520cd9cc8a00b0bb16"
  },
  {
    "url": "/_nuxt/497e27edc5965afe926a.js",
    "revision": "58d435c3fba5bb46f0bb77a2c7dd7bd3"
  },
  {
    "url": "/_nuxt/4af9ec1b45c2c7d454a4.js",
    "revision": "1d8d643f941bd380387772a5a1c50ac0"
  },
  {
    "url": "/_nuxt/4c7283e8bd986f30d0b1.js",
    "revision": "140b71bafe4cbe912e94493cee7508bb"
  },
  {
    "url": "/_nuxt/54d32d990f94503d2871.js",
    "revision": "fda721ba5c0f7f09562c703032ffdbb9"
  },
  {
    "url": "/_nuxt/68c00798c8dba596afd5.js",
    "revision": "7a5bde4033961567c78fa02616ea33bf"
  },
  {
    "url": "/_nuxt/7d2e9c897704e566961e.js",
    "revision": "87265fd422198f341769eb4ee6feb605"
  },
  {
    "url": "/_nuxt/89f403e1583447fe7e2a.js",
    "revision": "99197f182e418f42483c34c0361338d2"
  },
  {
    "url": "/_nuxt/a2cbd4ae8ffd667ec825.js",
    "revision": "9f911c5ba0de76d321da8568980c6734"
  },
  {
    "url": "/_nuxt/b74353785d709e68273c.js",
    "revision": "8f276eb4fef63e7073386b76b569ad45"
  },
  {
    "url": "/_nuxt/d0f3a837938333237073.js",
    "revision": "6800bf8a407631415c6d9ac9cec97cd2"
  },
  {
    "url": "/_nuxt/e67b37c12b4e56403707.js",
    "revision": "20d250643a5d5c51a43aedf7b0c339ac"
  },
  {
    "url": "/_nuxt/f8096bee43db45fd64c9.js",
    "revision": "2e68b23a25b1de2af87a9396f1be8e0f"
  },
  {
    "url": "/_nuxt/f97b8f04e89ef4509194.js",
    "revision": "bf98fd234efb4d63573c494147fc519a"
  },
  {
    "url": "/_nuxt/fd0f0799de60dd515ef6.js",
    "revision": "ca44a16c0d9f01b6d4f7f485818ca043"
  },
  {
    "url": "/_nuxt/ff6fada898217695f73b.js",
    "revision": "f0f64c2e1d2a380712c06889afa552ba"
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

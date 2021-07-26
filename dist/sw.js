importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/028f41d105a434dde303.js",
    "revision": "0ffee8d266e15818698e4d4e3dfb3552"
  },
  {
    "url": "/_nuxt/109c5f0dba814273ad7e.js",
    "revision": "038385ef32885592e86c68329d52c7af"
  },
  {
    "url": "/_nuxt/1204c945c34d0cd51203.js",
    "revision": "67d7c6223070a0149a04edccdc0ae4f5"
  },
  {
    "url": "/_nuxt/1c073a5693fe05647c87.js",
    "revision": "885c0f729d658a9518e4e59c4c6de90d"
  },
  {
    "url": "/_nuxt/1f17eb3b0f413780dae3.js",
    "revision": "de3c844785723be999f8d55287da526c"
  },
  {
    "url": "/_nuxt/32e37f961ac2f58ea0f8.js",
    "revision": "2728173acad9cc339f1a0be525b585f7"
  },
  {
    "url": "/_nuxt/3f4860162964cbcb0f16.js",
    "revision": "6e11c72782a9fdca615337893ef9264a"
  },
  {
    "url": "/_nuxt/5e7fd2f1f97cb3f5a0bf.js",
    "revision": "af7077419451c8fe49a6495f927a59d5"
  },
  {
    "url": "/_nuxt/6f9aaa669347f068a7cc.js",
    "revision": "6a93eb0ad0821e96890c477d82c422c2"
  },
  {
    "url": "/_nuxt/74997ddfdca2c4bf4751.js",
    "revision": "5d60ff8c58c0f03ec2ae52ddde25658f"
  },
  {
    "url": "/_nuxt/7b9eadf1389105ce6e94.js",
    "revision": "20a1dbdeb732a07d941554de344eb24e"
  },
  {
    "url": "/_nuxt/9c7dff5607f12d9074cb.js",
    "revision": "1ddc091f9fcee44e20c074d143b5b27a"
  },
  {
    "url": "/_nuxt/a0d1b6c8deb148824575.js",
    "revision": "7daad475d14053df5c5cee3456ab66c4"
  },
  {
    "url": "/_nuxt/a60507ba6c2ba488fc85.js",
    "revision": "c702c9df9e09d9e323e23666113bd17c"
  },
  {
    "url": "/_nuxt/b3f5da848203d883cdfc.js",
    "revision": "3b549d004576e8416923c287f3078039"
  },
  {
    "url": "/_nuxt/cfc7d4c8820f9e1818ca.js",
    "revision": "72264e132d4be681c845a6f8d7856c25"
  },
  {
    "url": "/_nuxt/d950ccd9c19f92efdf92.js",
    "revision": "90384eda479e405bbc4a30273b6377c3"
  },
  {
    "url": "/_nuxt/e99cd4d68fc8502b802f.js",
    "revision": "a01f3e90744a8d40a9bd848071aa2791"
  },
  {
    "url": "/_nuxt/fa547140dc33798e8851.js",
    "revision": "27f6f6c0e7935eb51efa067c61b653d8"
  },
  {
    "url": "/_nuxt/fabde4826f9507dbea60.js",
    "revision": "52f63501b0f540953e21188c2f80f73f"
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

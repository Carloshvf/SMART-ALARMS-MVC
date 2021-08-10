importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1204c945c34d0cd51203.js",
    "revision": "67d7c6223070a0149a04edccdc0ae4f5"
  },
  {
    "url": "/_nuxt/13e443c98fc7796ba32a.js",
    "revision": "271630f8fb9ec76c947de5301afed90f"
  },
  {
    "url": "/_nuxt/33592a43f1adca883891.js",
    "revision": "ca0856611994bfcf2be62d5f8da7dd97"
  },
  {
    "url": "/_nuxt/4de0ef4941f55e8b09b1.js",
    "revision": "5e8c6b6d600e47a75d3c530ffcc1fc97"
  },
  {
    "url": "/_nuxt/61428f6db7ef45a9176d.js",
    "revision": "f51d76cb41c896ebec251a8ee2aac460"
  },
  {
    "url": "/_nuxt/65509afa577adda17538.js",
    "revision": "abbc7338cc194eba2829ef7276a5caea"
  },
  {
    "url": "/_nuxt/68c00798c8dba596afd5.js",
    "revision": "7a5bde4033961567c78fa02616ea33bf"
  },
  {
    "url": "/_nuxt/70aa0f31f72b16426a60.js",
    "revision": "f27671a002a3e18c795b684b6ffd2bc5"
  },
  {
    "url": "/_nuxt/763b61c447b0fc1ca6aa.js",
    "revision": "a6b6587a2b8b148279ef52c4c044d10a"
  },
  {
    "url": "/_nuxt/7b8e6bf1530a2ebb147c.js",
    "revision": "6ba45a2a6533f2d0c706dda96c8f81ca"
  },
  {
    "url": "/_nuxt/7de0158551f8a4a4af74.js",
    "revision": "d88d5ba95e26f77f288ec137d299db67"
  },
  {
    "url": "/_nuxt/ac622c579aaec1c0a363.js",
    "revision": "8cc3f58158f5e6846ab51a66f0011c38"
  },
  {
    "url": "/_nuxt/bf28582a38964c73566b.js",
    "revision": "5a19d4a8ba4c725569fa0856ed816ed4"
  },
  {
    "url": "/_nuxt/cabe6536e6b5bd6ab937.js",
    "revision": "c029a0ef74c41c4a7e2fadb622cf478e"
  },
  {
    "url": "/_nuxt/d9815c500cfee38f4910.js",
    "revision": "129a557c77365921af75453cf8546ca2"
  },
  {
    "url": "/_nuxt/e5ae1ec190b9135ad198.js",
    "revision": "ea448fab3c00e21711c9ebf5dcee578f"
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
    "url": "/_nuxt/fa9c2b9faca01500fe73.js",
    "revision": "50d7ccc40334429df47cdff7b6335d3f"
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

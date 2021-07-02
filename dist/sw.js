importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07c1cb6c8b9c2aa01d89.js",
    "revision": "4533a6a725a85773be1c566aacd05edf"
  },
  {
    "url": "/_nuxt/1204c945c34d0cd51203.js",
    "revision": "67d7c6223070a0149a04edccdc0ae4f5"
  },
  {
    "url": "/_nuxt/232c0fd2f7b37a0e25c2.js",
    "revision": "3f7f02ee6f12a9f8544878f87ae72b99"
  },
  {
    "url": "/_nuxt/2d8571227929c8ac5f0d.js",
    "revision": "548d543dd586f7a608b13e2cd012759d"
  },
  {
    "url": "/_nuxt/3575d2021433e6c9f211.js",
    "revision": "f51d76cb41c896ebec251a8ee2aac460"
  },
  {
    "url": "/_nuxt/40aa72c68233bc6c3e81.js",
    "revision": "9e622508f9ec0fefc46394ccb94927b5"
  },
  {
    "url": "/_nuxt/4fd935779c7c7a9e3c36.js",
    "revision": "1d0191b82aa4268b3965d35e87921faa"
  },
  {
    "url": "/_nuxt/52f957b6f87abe4dac25.js",
    "revision": "a9650d98f1723eb384c5be750f70ccc5"
  },
  {
    "url": "/_nuxt/5f29cbd844b640b21ee4.js",
    "revision": "5e8c029e2997bee0455e04aa34ed33fa"
  },
  {
    "url": "/_nuxt/67317f177957cf53b5c2.js",
    "revision": "722e7c93a0915d28c784b187fe5130ea"
  },
  {
    "url": "/_nuxt/68c00798c8dba596afd5.js",
    "revision": "7a5bde4033961567c78fa02616ea33bf"
  },
  {
    "url": "/_nuxt/6db37b11ae8e0d38af0c.js",
    "revision": "3badb106f432be40d368a873c2e3f4d8"
  },
  {
    "url": "/_nuxt/7b6947ba3c9e2b856f2e.js",
    "revision": "1cd2bb08dccf50f1dbd5ea639ac2a6c0"
  },
  {
    "url": "/_nuxt/bac5eef3de217d45e8ab.js",
    "revision": "bc8c7bb4522693425989cf38f63192c9"
  },
  {
    "url": "/_nuxt/cbc0f2fae96947b31814.js",
    "revision": "f568af0a093366bf1ff6c2351a732660"
  },
  {
    "url": "/_nuxt/d2e4d2b9f3fbca283cd0.js",
    "revision": "fe9a9b5777d984cb86bc54fe6c645530"
  },
  {
    "url": "/_nuxt/ed35ff882bc551fa2809.js",
    "revision": "bce0c3d644d8db3d8085f73509addb55"
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

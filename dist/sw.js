importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1ad885d258543a243ee8.js",
    "revision": "785081a3313d84547b7c8f1acc59fd16"
  },
  {
    "url": "/_nuxt/1b9d6775bd4e72542195.js",
    "revision": "35dac60a539f4bf181637e7e69a6907e"
  },
  {
    "url": "/_nuxt/475faa0262baffda06b1.js",
    "revision": "4d471e94ab0220ad78b7df7bc42c5a7e"
  },
  {
    "url": "/_nuxt/48c2b845e41a55d794bd.js",
    "revision": "f84f676aea340efdfb154031ba0af426"
  },
  {
    "url": "/_nuxt/5d6b0a4f460002afedfe.js",
    "revision": "b22f32dbf80731965d54c0ce6da27ea7"
  },
  {
    "url": "/_nuxt/617cd8fb45a1163f8899.js",
    "revision": "78a774427b4e5500169ab7e55a350a79"
  },
  {
    "url": "/_nuxt/6821f3a5d60c1d5ae7be.js",
    "revision": "441ee6fc0b9a6098256f5b11a566b4b2"
  },
  {
    "url": "/_nuxt/74168cca8deb922c0896.js",
    "revision": "bbe12768f2a846eea2957e3df8e7741d"
  },
  {
    "url": "/_nuxt/81a7ba2ca057d03afe52.js",
    "revision": "7a88928f4eec03ca4c55b27aa8afeead"
  },
  {
    "url": "/_nuxt/ad7876dc7f5f3b6bcca1.js",
    "revision": "55af729a3568a12b0d49780095a45a28"
  },
  {
    "url": "/_nuxt/af2833656a15ccde3330.js",
    "revision": "d8ea59a48bf585db2ed758679dab50fa"
  },
  {
    "url": "/_nuxt/af355003e08baabcc623.js",
    "revision": "4cd9f9e53615c03721cee38b7b16ba2b"
  },
  {
    "url": "/_nuxt/bad7b73501ffe391b005.js",
    "revision": "d8780eab6b9ae75b5286b74971747b94"
  },
  {
    "url": "/_nuxt/c56a2629226442869af2.js",
    "revision": "a5be9d12eed4eb47e8afb837d9e11765"
  },
  {
    "url": "/_nuxt/d04e3ce9a76c7c804c22.js",
    "revision": "7be6dcb12d1238e6552e98582f508a4a"
  },
  {
    "url": "/_nuxt/d9cf6bc9db3e97353e3b.js",
    "revision": "81bfb8c5955b0abee90911da130d7f82"
  },
  {
    "url": "/_nuxt/f89342230250a1a14d3c.js",
    "revision": "a21e9a865e612b7da77360db7f34f020"
  },
  {
    "url": "/_nuxt/fd0f0799de60dd515ef6.js",
    "revision": "ca44a16c0d9f01b6d4f7f485818ca043"
  },
  {
    "url": "/_nuxt/ff7f52fd91ca63fac2ce.js",
    "revision": "7ee143d6d68f871fe5c21490e7b17e22"
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

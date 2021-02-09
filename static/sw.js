importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/048d42134404de52e13b.js",
    "revision": "4a71d8146f7c511cff00c353bffed4bb"
  },
  {
    "url": "/_nuxt/0ea8738c61f54ab06da3.js",
    "revision": "decc666f28ed3eb29bf490f40d07ff84"
  },
  {
    "url": "/_nuxt/1662032e3328952e3b04.js",
    "revision": "4b1f3315b7745c601e5bdd869253cc13"
  },
  {
    "url": "/_nuxt/1ad885d258543a243ee8.js",
    "revision": "785081a3313d84547b7c8f1acc59fd16"
  },
  {
    "url": "/_nuxt/48c2b845e41a55d794bd.js",
    "revision": "f84f676aea340efdfb154031ba0af426"
  },
  {
    "url": "/_nuxt/511670b1f68bcca19bb8.js",
    "revision": "1d2171866900d0fe16accaf3f6043986"
  },
  {
    "url": "/_nuxt/5b5e870842e7ebaeabd4.js",
    "revision": "d2e3632cd026e4f2d6e2b2b29d28ef7f"
  },
  {
    "url": "/_nuxt/609c367245b33e391b6c.js",
    "revision": "0e813658705ceb7eef665f25b69fb413"
  },
  {
    "url": "/_nuxt/6ab1d6aefe9021d1128b.js",
    "revision": "38854a5278a44dbf5071f67104b95b7c"
  },
  {
    "url": "/_nuxt/73fa50e080f0e811ac2a.js",
    "revision": "ec93a416232945fef52581eab41b019e"
  },
  {
    "url": "/_nuxt/74168cca8deb922c0896.js",
    "revision": "bbe12768f2a846eea2957e3df8e7741d"
  },
  {
    "url": "/_nuxt/75ac849eef70fc1d0a81.js",
    "revision": "babdeecc83fa2f8234a47b4250514d56"
  },
  {
    "url": "/_nuxt/a7c243ed2baff4051a44.js",
    "revision": "10c2e2739c60e63c96c8d330b1a3832a"
  },
  {
    "url": "/_nuxt/a9a55ae7651458ed35bf.js",
    "revision": "6c61e609cdb079441209816ed1875016"
  },
  {
    "url": "/_nuxt/af355003e08baabcc623.js",
    "revision": "4cd9f9e53615c03721cee38b7b16ba2b"
  },
  {
    "url": "/_nuxt/b4b6c4501d670fb74086.js",
    "revision": "acb59eb4121667562cd73dc77a40f06d"
  },
  {
    "url": "/_nuxt/ca0c36086ae7c912c2a8.js",
    "revision": "01f83e7c22edb133f9eff82c01afb206"
  },
  {
    "url": "/_nuxt/ceece66e07d94d283fe2.js",
    "revision": "e418c72dc07b5a9d0af5258647c81da7"
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

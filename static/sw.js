importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/158b18bde08ff060c63f.js",
    "revision": "78debc662edf349dcc0b9f25a869922a"
  },
  {
    "url": "/_nuxt/229305034fe462330be6.js",
    "revision": "0eac08a630a563e80d527178566031d1"
  },
  {
    "url": "/_nuxt/295f09f06ba7dbc23505.js",
    "revision": "4f5e2cfb015d1e480d0d234b8c1e416b"
  },
  {
    "url": "/_nuxt/53a62a7b8e374e77715a.js",
    "revision": "c9e4eeac4590990f2dc226e5008deb32"
  },
  {
    "url": "/_nuxt/7375d5b4bf860955e7ee.js",
    "revision": "a244b45cf160e4651002442bbe7cbedd"
  },
  {
    "url": "/_nuxt/819c433ce6ce8cbb118e.js",
    "revision": "075e4af7ead0e64c3521ca0a1b33fb50"
  },
  {
    "url": "/_nuxt/8b94e553a530e7d33f01.js",
    "revision": "3f25208c46f654c49698815e35321c35"
  },
  {
    "url": "/_nuxt/92beb3ca8033dcee1efd.js",
    "revision": "bb933ffd0898391cf3bb2cff0fffc57a"
  },
  {
    "url": "/_nuxt/9a276c638ec1f2f552d5.js",
    "revision": "60289a831cb3caa74a09fb25a4e70e9a"
  },
  {
    "url": "/_nuxt/a94915897a5ea9ae4c9e.js",
    "revision": "7c2ee0998b0840d73c76fabd25e7d8c3"
  },
  {
    "url": "/_nuxt/aefe9f9a3d6903fc1194.js",
    "revision": "8b2fe6416ccaf34f8c5ab873c7c03c21"
  },
  {
    "url": "/_nuxt/b36b38a58eec37675ff9.js",
    "revision": "394110aa5cc11a14f911dc7be64c2260"
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

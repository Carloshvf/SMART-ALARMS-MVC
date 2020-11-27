importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04c916b1bae773f90b59.js",
    "revision": "d807e7e2b91167aab9639383f85cadda"
  },
  {
    "url": "/_nuxt/17b06097804c9676a943.js",
    "revision": "4e66774df2037030185ed625e064253a"
  },
  {
    "url": "/_nuxt/1e54c127d1466d06a4ff.js",
    "revision": "b79cb98eb132445f5c189e557d3ddc53"
  },
  {
    "url": "/_nuxt/28264497f934b8e85102.js",
    "revision": "ea46eb3be01132859bb8d0240fb2b8e3"
  },
  {
    "url": "/_nuxt/54238e0c67e2fbdcabfd.js",
    "revision": "05eec4befe3e387296b970aeec79514b"
  },
  {
    "url": "/_nuxt/5474fa1f172d1b3666f1.js",
    "revision": "3605bb4fa807512a7bf552978fdb6e45"
  },
  {
    "url": "/_nuxt/680d0b4415aa81d095f0.js",
    "revision": "9a626a98db885b6ede7fdc52d42a2525"
  },
  {
    "url": "/_nuxt/68632d6995f44c3199a8.js",
    "revision": "c40ac3e44e4b9b5b4aa30c86d9607627"
  },
  {
    "url": "/_nuxt/92ecd57ea79a19d62d53.js",
    "revision": "6850e14cc874f62ed4c2f678ac1f5594"
  },
  {
    "url": "/_nuxt/93a778e3df00cccc9af4.js",
    "revision": "4443d8143959e898c4fb910e30feb71d"
  },
  {
    "url": "/_nuxt/a29d2f71a02726e1a4c1.js",
    "revision": "411c71ec28a65e3bc1e42a2675822db3"
  },
  {
    "url": "/_nuxt/c4f6f0c2e358c039c93e.js",
    "revision": "5f3b387cdd18b3179233a3beaae58ff9"
  },
  {
    "url": "/_nuxt/c55f851a18ee6784924b.js",
    "revision": "bc405cedb7a916b26c65d6f664d83fc8"
  },
  {
    "url": "/_nuxt/c8d4b56110e43019420e.js",
    "revision": "e25f7b81a604f8d213ffda83185fd767"
  },
  {
    "url": "/_nuxt/c9b9f15a6f02eae9d18e.js",
    "revision": "641d8f93bd63fdfac469aba395e6f39f"
  },
  {
    "url": "/_nuxt/cfddfaf1e5e321ca8fd7.js",
    "revision": "c49ad48dad884e57c7a43592fa109c90"
  },
  {
    "url": "/_nuxt/d29134234f5da2a2010e.js",
    "revision": "d9c70667da3e4d673f82f2802e84423e"
  },
  {
    "url": "/_nuxt/e096b87ff75ebf755405.js",
    "revision": "833a4ebcdaee40ebe13e026701eb57a9"
  },
  {
    "url": "/_nuxt/ee4706a94105df2e728c.js",
    "revision": "e2861f6539b6f815e7a5ef267851070f"
  },
  {
    "url": "/_nuxt/f37f314c8875b07d0b5b.js",
    "revision": "d43641df294dbfdf0149182b70948bac"
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

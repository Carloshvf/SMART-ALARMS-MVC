importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04c916b1bae773f90b59.js",
    "revision": "d807e7e2b91167aab9639383f85cadda"
  },
  {
    "url": "/_nuxt/061a5f9f914825e09a89.js",
    "revision": "537a5c5cfffd2f74e59010f34268fde3"
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
    "url": "/_nuxt/326e7d4681ed941b89b3.js",
    "revision": "67a351228a6f7244b7bb862831b6664d"
  },
  {
    "url": "/_nuxt/3dd320eadb3cb9d013df.js",
    "revision": "c05f7d468d2c20112f9882161362ca37"
  },
  {
    "url": "/_nuxt/5474fa1f172d1b3666f1.js",
    "revision": "3605bb4fa807512a7bf552978fdb6e45"
  },
  {
    "url": "/_nuxt/66e5eb7a0592c5f85c58.js",
    "revision": "84b3658ae7d229fefe64cf849b4a27d5"
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
  },
  {
    "url": "/_nuxt/f3ba83e7035ea00c8f21.js",
    "revision": "5280ab7f59caf56adededa197b1e0bac"
  },
  {
    "url": "/_nuxt/f7682e9c458935bb6a0f.js",
    "revision": "0d54c949a26592f9c1bb3774e974a1a9"
  },
  {
    "url": "/_nuxt/f8e0c6b2dce35891a650.js",
    "revision": "86d93a44f7ec41dc604d466117a6c407"
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

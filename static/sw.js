importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1204c945c34d0cd51203.js",
    "revision": "67d7c6223070a0149a04edccdc0ae4f5"
  },
  {
    "url": "/_nuxt/28d33370ec63f3880464.js",
    "revision": "68acde167d817cb482231528a4464b57"
  },
  {
    "url": "/_nuxt/39f4fe9b04902f5aed05.js",
    "revision": "d19bfe7fb2d62c2214b59aeafcd573e6"
  },
  {
    "url": "/_nuxt/3ce18b7d609aecbd0def.js",
    "revision": "a44adc4c49468836a8965e6f3effb260"
  },
  {
    "url": "/_nuxt/4546020000a0abbcbc97.js",
    "revision": "526b5ea9e2fd56eb20efb9c653c9803e"
  },
  {
    "url": "/_nuxt/68c00798c8dba596afd5.js",
    "revision": "7a5bde4033961567c78fa02616ea33bf"
  },
  {
    "url": "/_nuxt/6e78dce822e59fc07134.js",
    "revision": "cbf14956adf27d0b30d502cacc0889ce"
  },
  {
    "url": "/_nuxt/707da780a487a4b98721.js",
    "revision": "296c10c186f321534ef935683b20570f"
  },
  {
    "url": "/_nuxt/7f1b26f24b69d758c5a0.js",
    "revision": "fa97d145636fdbb0dcb2b2731b7fd92c"
  },
  {
    "url": "/_nuxt/908aa7fe739aa2628932.js",
    "revision": "584df313d5fade7cbdf2ca12ac7043e3"
  },
  {
    "url": "/_nuxt/addb832d2950d223a75e.js",
    "revision": "fd1998611c142768e8f2945a21a96118"
  },
  {
    "url": "/_nuxt/b240cf564ea37d0a8595.js",
    "revision": "279e4e4cbca67735efad6562e602c75f"
  },
  {
    "url": "/_nuxt/b8a98cc328071b9143bc.js",
    "revision": "616f8ed0c9609bfcb2d00df84880b5bf"
  },
  {
    "url": "/_nuxt/bb0393bda46a99291239.js",
    "revision": "3fc57f74dbf66efe7549bed30f59f0b3"
  },
  {
    "url": "/_nuxt/c5b5cf978fb51d748075.js",
    "revision": "5a835ac7aaae807dc4c4b0ec944ce6e3"
  },
  {
    "url": "/_nuxt/da51a548411a0ed1cbaf.js",
    "revision": "803af6125370a442b6dc604195977128"
  },
  {
    "url": "/_nuxt/ecb87a4e128061b52ef2.js",
    "revision": "c1278061cdd75dc67f13321bee3ccdf0"
  },
  {
    "url": "/_nuxt/fa547140dc33798e8851.js",
    "revision": "27f6f6c0e7935eb51efa067c61b653d8"
  },
  {
    "url": "/_nuxt/fb1b7a532c0b43ed61b2.js",
    "revision": "3df66ec7ff7a0c0767bccf69602babd9"
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

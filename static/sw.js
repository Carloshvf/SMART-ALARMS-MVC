importScripts('/_nuxt/workbox.4c4f5ca6.js');

import data from './sw_data.json';

workbox.precaching.precacheAndRoute(data, {
  "cacheId": "smart-alarms",
  "directoryIndex": "/",
  "cleanUrls": false
});

workbox.clientsClaim();
workbox.skipWaiting();

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET');

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET');

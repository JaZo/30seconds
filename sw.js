importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "d48e609558693599d4f19aef9c450031"
  },
  {
    "url": "static/audio/ringing.7187257.mp3"
  },
  {
    "url": "static/audio/ticking.7e66da0.mp3"
  },
  {
    "url": "static/css/app.8a465cd94bc22d739379eb25690a7805.css"
  },
  {
    "url": "static/js/app.8957443146d662f15df1.js"
  },
  {
    "url": "static/js/manifest.fca1e198378a03433c88.js"
  },
  {
    "url": "static/js/vendor.71b048bb8f4cbed5edc3.js"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "guess-them-all",
  "skipWaiting": true,
  "clientsClaim": true,
  "directoryIndex": "index.html"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("/");workboxSW.router.registerRoute(/fonts.(gstatic|googleapis).com\/(.*)/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');

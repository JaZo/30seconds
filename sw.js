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
    "revision": "f7728f0a8b34c5fa285f4530545c7eda"
  },
  {
    "url": "static/css/app.b9c9fa896bb2ec819e75f1cdee28e480.css"
  },
  {
    "url": "static/js/app.546d6c49423c01411b4e.js"
  },
  {
    "url": "static/js/manifest.619d17c0ca8697ee21d5.js"
  },
  {
    "url": "static/js/vendor.7b38cfaadf5373a99e4b.js"
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

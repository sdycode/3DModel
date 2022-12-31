'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7cc64c8447e62d742cc86c76312e944b",
"assets/assets/Arapey-Regular.ttf": "0b5809c6e02a643b712fa7ca1db11944",
"assets/assets/bunny/bunny/bunny.obj": "8b8089bd99609c69c9cef99f0e21d287",
"assets/assets/cube/cube.obj": "17e92f67f70420382e3ff88f5b1bb406",
"assets/assets/curvePointIcons/angleSymmetric.png": "05f927f1a90e7bc3199af2bd30dd3391",
"assets/assets/curvePointIcons/arc.png": "98b8ee18aadca6186a60d54a42dd0734",
"assets/assets/curvePointIcons/nonSymmetric.png": "56f8a6eee9b35b3b4a9dd21a881983a8",
"assets/assets/curvePointIcons/normal.png": "f7cdb18301555b69b3119f1fdfdd89ad",
"assets/assets/curvePointIcons/symmetric.png": "e8ccf39ae8256e059e6b7ab36ace0326",
"assets/assets/earth/4096_bump.jpg": "0eb50b4bff2c5a23a011f5a35e27f8dd",
"assets/assets/earth/4096_clouds.jpg": "4d7a77dd09da435802cbade4a651dce5",
"assets/assets/earth/4096_clouds.png": "e0a9fa6e750a1e2478f6263744d84da5",
"assets/assets/earth/4096_earth.jpg": "cd4dc98debcbd1309465b4b194e5fc31",
"assets/assets/earth/4096_night_lights.jpg": "54ccbb8cb3ff8d7ecb8de45977e325b9",
"assets/assets/earth/4096_normal.jpg": "cb6d4b725217e42e5f9cd9e83abb4a03",
"assets/assets/earth/earth.3DS": "8a34da04f921d7990bf322644110b4d0",
"assets/assets/earth/earth.max": "7c4d74c0bf05704705b0a40db02a2192",
"assets/assets/earth/earth.mtl": "0e822880ef05243d31663b59315cdf15",
"assets/assets/earth/earth.obj": "fc1e91f9917ed54b96da30b29e2ba360",
"assets/assets/icons/translate_arrow.png": "b1ca9bdab309012ecc1fac03e72ea67a",
"assets/assets/icons/translate_arrow_transp.png": "9ee674374edfad8ddce2fb1b271b4390",
"assets/assets/IslamicIcons.ttf": "28ee92dd0a0b20a52ec70864df91fcaf",
"assets/assets/ruby_rose/crescentRose_diff.png": "f01a8d8f23633809a0abda3094cc4382",
"assets/assets/ruby_rose/crescentRose_met.png": "e88b0c98206946af9338a6a2a1ea10f7",
"assets/assets/ruby_rose/crescentRose_norm.png": "26fbf3d63a14aba49cd669eb40378b9d",
"assets/assets/ruby_rose/eyeOcclusion_diff.png": "1df5225908979ef36b2489c24b579901",
"assets/assets/ruby_rose/file2_Normal_Bump.png": "4a88733548925ae2fc7cecfdd8453521",
"assets/assets/ruby_rose/file6_Normal_Bump.png": "4a88733548925ae2fc7cecfdd8453521",
"assets/assets/ruby_rose/file7_Normal_Bump.png": "4a88733548925ae2fc7cecfdd8453521",
"assets/assets/ruby_rose/rubyEye_diff.png": "13c47d726f29dcd7d3191407cd32d889",
"assets/assets/ruby_rose/rubyEye_norm.png": "48c6bc3811cf5dd3a68ae3ea01d50315",
"assets/assets/ruby_rose/rubyHair_diff.png": "0bb58fb4542d411e3daaf63cd06ba3ab",
"assets/assets/ruby_rose/rubyHair_norm.png": "e5d5eb61e5997009e4c0d2aba815b69d",
"assets/assets/ruby_rose/ruby_diff.png": "88d0758f157ba165725ddd3281ca384b",
"assets/assets/ruby_rose/ruby_norm.png": "fa59a00d68df1639ed63a732f8d49634",
"assets/assets/ruby_rose/ruby_rose.mtl": "0ec4185afb429dfe7d84f86d7a762c60",
"assets/assets/ruby_rose/ruby_rose.obj": "13f9fb0742254bf977542c44342b4b7f",
"assets/assets/stars/2k_stars.jpg": "aa84ebe0af724ac3a335285c2808971a",
"assets/FontManifest.json": "2c15b6cc7fb73a3eec328a870ef618f0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3679bb20656dbe1d5911ab2f5c54eddb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b3e27c0d08da98c43257e56014beffb0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b71891a95b11de9b166fa1ccddaf09b6",
"/": "b71891a95b11de9b166fa1ccddaf09b6",
"main.dart.js": "3ccd0ae1aea63d0335810caf7e9f9ceb",
"manifest.json": "bbe030f573d09b10e9e33018da6eba5b",
"version.json": "8708fea975794f496b94ab19097c8534"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

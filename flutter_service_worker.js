'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ff9a4db326deaaab3327ebc5325d5e2e",
".git/config": "e8353c273750467a58d6101e126da065",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b87e8d2ad8d8990f3e6006f1ca152173",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ca062809eb8119e734d02510c002a2d0",
".git/logs/refs/heads/master": "4333508484632d7ee9fdf167dc01f1f3",
".git/logs/refs/remotes/origin/master": "24b1596b54114391ef9b29fa5b028558",
".git/objects/03/6cce0a090966191d48a1962db603a05ae04511": "c07aa68d205e34e0491e2d0dd749b591",
".git/objects/05/24459981a5a964298f99c8b881dbbda8b4ade1": "18e4897c40714e446d79c9491da0124e",
".git/objects/06/565fd00b17ce5e93179ef540a5c263ce519d23": "f594dfdae6fc86c95b7502768ba75ae3",
".git/objects/0d/f53eaaf5c41ab63f36613377e6b21c5517e17c": "af207d6614ab49c7f2e2e0f7f3cce329",
".git/objects/0f/e8a40fc8b83989c2d63979d90ae5160f667ecd": "4a9e56f3e2db7070b9d120a59dd4b2ec",
".git/objects/12/3d930ddcd61c7ac73765a7cc7ee38f11a3fa6a": "782a762ed80547054246b4e03286e130",
".git/objects/19/fd2d4f8565c8c393e3983e2002e7571766385c": "c0cf401153cd530df7b0b12882c60e40",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/772aa42478df2e7a0ebd7f342563cad4433df1": "dd87f9dce57a4806c1b50e8ca5c3347d",
".git/objects/24/046c4285dd41e91d78e2e863f1a14c6eff5f83": "967af239d3568468658aaf06ae0bfced",
".git/objects/24/ba7d030f39a10f3bf1651a893b295efc60db6b": "45a79ffdf3a92c22e3c338451059dd3b",
".git/objects/29/e2b404d99f95c9f6d89e4a93e749694a152602": "06667b581ef7c52e651b9a6c2fee60f5",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/ff871174f465b51ebb796fc34d810050ccd558": "fbd7bdd70bfd09987bc30790f2436e04",
".git/objects/2f/2b3384ccab17aa93ed82995edd626a6ffda2a2": "c3aaaf782842f076aea56c38d42a9a18",
".git/objects/31/d0080a0f03048e9f8fead364903b199f011258": "d152b7d34664a26d51654ffc23724044",
".git/objects/32/d5f3825decb972006d273bb38ba618b4800bcc": "d02e037a0b4681d0f86c2c1bc8ad4464",
".git/objects/34/5649458b1d5c54ef045e14a841928a18c2ab7d": "62df33dcf0ab6efa41d4c83dad7f5962",
".git/objects/37/ec42706e2e028863d3f9eaea8ee58ec38cb6b9": "4d212bed4ee96472c4f1ccb754c569bf",
".git/objects/3e/958d1999bb2dd421ebb9bb62e01c36dba41953": "ff57b674d49bb5e5b0344a2291f7629d",
".git/objects/3e/e351430789e4df9c6e8cb8c3f7cd2adece7137": "245a52681836f34c84c51f2ada0bd1c6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/8ffb3a40c59f9179cdb45068859d927a79f61a": "f56d72953cc861d61dbd8a0e1d1750e5",
".git/objects/44/e0b670058a3dc8d5e63007ed57ea44a055c63f": "d9d45fdb304ebc9a180b44cafee6c74d",
".git/objects/48/c0a6490226cb3508ec698d43976c81e6b0df7b": "2a789fd244b69d1b9b69cdeecf06b7dd",
".git/objects/4e/35e1e0699f699db0a75b5b0b5d51573cdec23e": "32dfc5f890b07f7ef406bebcd371a430",
".git/objects/51/08aa16c63a497a476c1c8da0407b8f7eb303cb": "216a2e15cd8445e39db6323d8775f8e0",
".git/objects/5c/b378c4b9ae951510d415f7f8be473c5492784a": "2d2eb879ab72ebbbc872a73b653b0f4d",
".git/objects/61/dc0e4b78f45ecfc1916f6ca5e8f2c320bd483d": "443787625634a0e8cc742f1f614c3523",
".git/objects/6f/6fbe3a0f3b2c64fc5e572cc1385126edc35913": "11314520cf82f933c7d70c9b4a641d31",
".git/objects/73/95c48a0481edb0d6fb846df2d41dd57d99bcd1": "bfad42e1bd28c5eb84a1fadef891dce5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/81/aec8b56f4d2f0d1aab105ec374aca065e6ae65": "63118f33dc28eb85541d76dc6b256309",
".git/objects/88/b6ecbb72b19ac3ef0007c266acfb0399a7f802": "579879f8f439f1d9b764d90fd67d0f93",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d018e953ceb4f8e4183fe06eb51a578948330e": "d5c95f6c25d7a91a59cfb49f06f9cd28",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/d373e5fd75b769130101fa6eedfe76c471999b": "faa316d354bc654018d936d78f2d15a8",
".git/objects/93/8445edfb9cb8b0bdad614f461010f12871371d": "af34caf2b28ea346fe827e014695e1cc",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/a8bd076b28fdcaa8a487794212a7ee99748e47": "b4dcab532e19424ee5907dde97cee02d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/ec8539df1042aac95efd8333c77781aa6df419": "d85d690eeb3c1bfa54847d970bf43bee",
".git/objects/a6/8c4679d19a5884a43a4342d2a277576786aff8": "0ba68bb9400173bb936e7638e5900771",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/b1935677e2672be0b121f2d138231ca9e8ea87": "1c8cd273e6a6b02e621c894755c426fc",
".git/objects/ae/40275e0a806d870c71fc6c332476425fd16e79": "43d1584f2848115828c0f4b7de1d2cf6",
".git/objects/b2/760728b1dde260f8428c7dc8d0540aa1ff7921": "ed6acd892d586d2ae5ec54accfc6219f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/faf0b9c2a7b2c6cbfe41c3cabb969991e06b78": "1baa4a7bdde99f90eabf4d3ca50f4012",
".git/objects/c1/9e33d00270afe7700740bb60b57a47f1a997de": "b00697b2e113d313610828a7303f4c08",
".git/objects/c3/c29eb6eaabe581cd8d91f3b9dc5a609d5c4e83": "64f2e773e55acb2b4eb572d5bfa3d647",
".git/objects/c7/01da090f28358402d22d5750793e12818baa9b": "10535842f63da7f0c1ae649f2454128e",
".git/objects/c9/c6501102fb0f0a2df6a9b30bc3dbed9a644462": "d61ac1834554ebeb44ace57bb303a281",
".git/objects/ca/547577f828bdeb4c0ba24d6edf4f7ef27e505c": "583eb18012281b6c11d9e6bfe8f6c9d7",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/b5c9c2321cac563af09941510ea8a77b606d54": "f6b5885798bda9f6ac1fedc4314de023",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d3/4a96624d29c40a142b674901d2a91cf93d8536": "37960a32ab65ce4be654b3d0f21f8c0f",
".git/objects/d5/81e906361f7dacdfd1e127e78c0472a026a763": "21af12f1c7ccdbbdbee04bef29603ed4",
".git/objects/d6/60408fe384935257eb674767f2770c04765df9": "c20c5c87dd6137070fc2f827b6645b6a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f229df90c20791dff572a4b8fdbb15234be641": "b683535333a1053da56c7397fb7fe729",
".git/objects/dc/9981109b37e6c6528366a713b96fef2268e908": "24a21c74bdf34eb3a4ddd02facba1f84",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/6481d1ca495c79eb495c84f02cc24bea70c8a4": "4dbe6a00e17d6a410f1d8a000aa03d8d",
".git/objects/df/b34bae0d4bae8029e733f3300331b9f710364c": "d8958a52c47b7ce51ce9906b4512582f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/bd9483e6e74214577c37e7c8ca3334e9d59da6": "e2c0a5086e05be9173b0cd6f2889e9c4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/0e87523eaa2bdaa1d8708cbd8d6418002ba3ce": "a1a38c42fb45de3790722129b9e94277",
".git/objects/f6/1aca79a20b0d396ded5a2efb938f6c87ab3042": "6a4b461ab2583950fea8396cca5af75d",
".git/objects/fe/cd586d37861506190f61df6c0251a121e6efbf": "89ae632e7218a425f68ce6dbd2805842",
".git/refs/heads/master": "d549d220548a51eac5f08606258f2bae",
".git/refs/remotes/origin/master": "d549d220548a51eac5f08606258f2bae",
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
"icons/android-chrome-192x192.png": "bd670390308ac9537f7ae5122e3ff6ee",
"icons/android-chrome-512x512.png": "5c924b547e728930f99fd0fbe9588782",
"icons/apple-touch-icon.png": "ff8cd3785b49185889382a4f00085653",
"index.html": "79eb738b0c9e8159763587730d01ec1f",
"/": "79eb738b0c9e8159763587730d01ec1f",
"logo.png": "bd670390308ac9537f7ae5122e3ff6ee",
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

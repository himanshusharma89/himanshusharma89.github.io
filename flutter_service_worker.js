'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ff7391e70a2ed8faa7f4ee5a510a7205",
"assets/assets/experience/google.png": "6c1c184ba6c84516ba5914fae176e2a1",
"assets/assets/experience/gssoc.png": "b8cb3f231b92c24e4a0da74addf4e704",
"assets/assets/experience/ieee.png": "c549cba2153dda2eb693aece0772aab5",
"assets/assets/experience/jwoc.jfif": "f8f6f648d339b673be0facbaa5659d09",
"assets/assets/experience/QSwhite.png": "10726360a3c3ec3a6716886d0a5c423f",
"assets/assets/flutter.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9",
"assets/assets/fonts/SfDistantGalaxyAlternate-OE4d.ttf": "1b345d1f96e129e663afd200ec1babeb",
"assets/assets/IMG_0602%2520-%2520Copy.JPG": "0547ba28646f4178d6d0c7bae88d1417",
"assets/assets/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"assets/assets/profile.png": "cb94d030317c17a689bce84eef942cdc",
"assets/assets/social/gfg.png": "dec6818e4b4f765953439799c292db38",
"assets/assets/social/gfg1.png": "b432edbd3895d483718609fddeafb556",
"assets/assets/social/gfg2.png": "b8ca9f841a293392d7b2f9452f06c66f",
"assets/assets/social/github.png": "6ab40f6ad84d5fc3ddf80e437e2bb894",
"assets/assets/social/instagram.png": "27fa639be5347982c656131a33bc5f1d",
"assets/assets/social/linkedIn.png": "912f3b338873586411d29ac982465431",
"assets/assets/social/logo_blank.png": "d4bc03134dfeed88b5845c137590555a",
"assets/assets/social/medium.png": "65307fbbc0d3435f76472f78d72fb97a",
"assets/assets/social/stack-overflow.png": "b2fe48cfe515f6588f9025c387f41530",
"assets/assets/social/twitter.png": "f09dff1cf7cbf0c7e32140ff7dfbe870",
"assets/assets/tech/c++.png": "baaa832726b13cb7645fcb473e4fc31f",
"assets/assets/tech/c.png": "9f4c53d7bb0c658d69a5578331f8c6aa",
"assets/assets/tech/css.png": "0d10c6221c282e24508f94b186d8f6cf",
"assets/assets/tech/dart.png": "7a0cddaf66ee751a2b6e3fac9357020b",
"assets/assets/tech/html.png": "7a4f0bb67699d4c1173ffcebabcebc17",
"assets/assets/tech/java.png": "0414fcd53fdb6903fb57134fdd8a9af2",
"assets/FontManifest.json": "d640438b9dfc588261f1eb00f6808469",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0f38cac03e7428238b79788b66c66529",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_dev.png": "1a2713cc6b685e0cafc692a490caa6d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8cca35d025fddbf03ebe0b5ca5813eed",
"main.dart.js": "b61ca496f8af3a197121673d190a1d9e",
"manifest.json": "1be9db6342f3c7d5d6ad928f61c39cf0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

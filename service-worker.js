const CACHE="ranger-v1";

const files=[

"/",

"/index.html",

"/css/style.css",

"/js/app.js",

"/js/storage.js",

"/js/stations.js",

"/manifest.json"

];

self.addEventListener("install",e=>{

e.waitUntil(

caches.open(CACHE)

.then(cache=>cache.addAll(files))

);

});

self.addEventListener("fetch",e=>{

e.respondWith(

caches.match(e.request)

.then(r=>r||fetch(e.request))

);

});
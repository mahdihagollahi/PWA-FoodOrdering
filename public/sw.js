if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const f=e=>a(e,c),r={module:{uri:c},exports:t,require:f};s[c]=Promise.all(n.map((e=>r[e]||f(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Image/icon-128x128.png",revision:"846eb9efd55bbb4d770072a7048b7855"},{url:"/Image/icon-144x144.png",revision:"8830d5a5aa2b7305770071f24e0ab4cc"},{url:"/Image/icon-152x152.png",revision:"8cf539d61d2e963342297268f5d4f2d6"},{url:"/Image/icon-192x192.png",revision:"2d66cb649b1d5984fac30d2e844da231"},{url:"/Image/icon-384x384.png",revision:"0b474229723c95af2a65a04802c7f4fe"},{url:"/Image/icon-512x512.png",revision:"5d4a25db856285ec3b9f78e87e8dbabb"},{url:"/Image/icon-72x72.png",revision:"e805792f5d7934cc89d5cb540b13fa27"},{url:"/Image/icon-96x96.png",revision:"6e89d3d0eeeeb0e6a51b83e559b39a8a"},{url:"/_next/app-build-manifest.json",revision:"9357a6cc5de6789a7b74407afe978279"},{url:"/_next/static/chunks/4bd1b696-7222c2acdd121abc.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/505-1b959796682f3ed3.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/517-8f529cb7a359e118.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/565-795d4dc4dd4bd32a.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/app/_not-found/page-1f409811a5ec6b8a.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/app/layout-da59c777ff7a0793.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/app/page-6db1556b0ac13e04.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/framework-0d635b52335dc518.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/main-72254d287cc45e3d.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/main-app-7046b0561dcae6b2.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-decb145ea5426c4a.js",revision:"wPX3v36fRq5hL85fuleGQ"},{url:"/_next/static/css/364ff8554dff3abb.css",revision:"364ff8554dff3abb"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/gg.8cbb85f4.jpg",revision:"8cbb85f4"},{url:"/_next/static/media/gg.8cbb85f4.jpg",revision:"edf438e51cb26e1b312c3fc0d63936a6"},{url:"/_next/static/wPX3v36fRq5hL85fuleGQ/_buildManifest.js",revision:"ff922c5cfc902466bc8002c14198983b"},{url:"/_next/static/wPX3v36fRq5hL85fuleGQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/manifest.json",revision:"348abfdad19e04a62dc8ba5959501271"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

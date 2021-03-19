/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/service-worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/node_modules/@sapper/service-worker.js":
/*!****************************************************!*\
  !*** ./src/node_modules/@sapper/service-worker.js ***!
  \****************************************************/
/*! exports provided: timestamp, files, assets, shell, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timestamp\", function() { return timestamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"files\", function() { return files; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assets\", function() { return files; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shell\", function() { return shell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n// This file is generated by Sapper — do not edit it!\nconst timestamp = 1616133394687;\n\nconst files = [\n\t\"/service-worker-index.html\",\n\t\"/favicon.png\",\n\t\"/favicon1.png\",\n\t\"/global.css\",\n\t\"/logo-192.png\",\n\t\"/logo-512.png\",\n\t\"/manifest.json\"\n];\n // legacy\n\nconst shell = [\n\t\"/client/d44c277a70ea8df27ea3/0.0.js\",\n\t\"/client/d44c277a70ea8df27ea3/index.index.js\",\n\t\"/client/d44c277a70ea8df27ea3/main.js\",\n\t\"/client/d44c277a70ea8df27ea3/picam1.picam1.js\",\n\t\"/client/d44c277a70ea8df27ea3/picam2.picam2.js\"\n];\n\nconst routes = [\n\t{ pattern: /^\\/$/ },\n\t{ pattern: /^\\/picam1\\/?$/ },\n\t{ pattern: /^\\/picam2\\/?$/ }\n];\n\n//# sourceURL=webpack:///./src/node_modules/@sapper/service-worker.js?");

/***/ }),

/***/ "./src/service-worker.js":
/*!*******************************!*\
  !*** ./src/service-worker.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sapper/service-worker */ \"./src/node_modules/@sapper/service-worker.js\");\n\n\nconst ASSETS = `cache${_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"timestamp\"]}`;\n\n// `shell` is an array of all the files generated by the bundler,\n// `files` is an array of everything in the `static` directory\nconst to_cache = _sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"shell\"].concat(_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"files\"]);\nconst staticAssets = new Set(to_cache);\n\nself.addEventListener('install', event => {\n\tevent.waitUntil(\n\t\tcaches\n\t\t\t.open(ASSETS)\n\t\t\t.then(cache => cache.addAll(to_cache))\n\t\t\t.then(() => {\n\t\t\t\tself.skipWaiting();\n\t\t\t})\n\t);\n});\n\nself.addEventListener('activate', event => {\n\tevent.waitUntil(\n\t\tcaches.keys().then(async keys => {\n\t\t\t// delete old caches\n\t\t\tfor (const key of keys) {\n\t\t\t\tif (key !== ASSETS) await caches.delete(key);\n\t\t\t}\n\n\t\t\tself.clients.claim();\n\t\t})\n\t);\n});\n\n\n/**\n * Fetch the asset from the network and store it in the cache. \n * Fall back to the cache if the user is offline.\n */\nasync function fetchAndCache(request) {\n\tconst cache = await caches.open(`offline${_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"timestamp\"]}`)\n\n\ttry {\n\t\tconst response = await fetch(request);\n\t\tcache.put(request, response.clone());\n\t\treturn response;\n\t} catch (err) {\n\t\tconst response = await cache.match(request);\n\t\tif (response) return response;\n\n\t\tthrow err;\n\t}\n}\n\nself.addEventListener('fetch', event => {\n\tif (event.request.method !== 'GET' || event.request.headers.has('range')) return;\n\n\tconst url = new URL(event.request.url);\n\n\t// don't try to handle e.g. data: URIs\n\tconst isHttp = url.protocol.startsWith('http');\n\tconst isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;\n\tconst isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);\n\tconst skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;\n\n\tif (isHttp && !isDevServerRequest && !skipBecauseUncached) {\n\t\tevent.respondWith(\n\t\t\t(async () => {\n\t\t\t\t// always serve static files and bundler-generated assets from cache.\n\t\t\t\t// if your application has other URLs with data that will never change,\n\t\t\t\t// set this variable to true for them and they will only be fetched once.\n\t\t\t\tconst cachedAsset = isStaticAsset && await caches.match(event.request);\n\n\t\t\t\t// for pages, you might want to serve a shell `service-worker-index.html` file,\n\t\t\t\t// which Sapper has generated for you. It's not right for every\n\t\t\t\t// app, but if it's right for yours then uncomment this section\n\t\t\t\t/*\n\t\t\t\tif (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {\n\t\t\t\t\treturn caches.match('/service-worker-index.html');\n\t\t\t\t}\n\t\t\t\t*/\n\n\t\t\t\treturn cachedAsset || fetchAndCache(event.request);\n\t\t\t})()\n\t\t);\n\t}\n});\n\n\n//# sourceURL=webpack:///./src/service-worker.js?");

/***/ })

/******/ });
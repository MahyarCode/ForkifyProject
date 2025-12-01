// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5DuvQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8ad96e854a59a05f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"7dWZ8":[function(require,module,exports,__globalThis) {
// TODO the C part of MVC project architecture
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _configJs = require("./config.js");
const controlRecipes = async function() {
    try {
        // DESC Get the hash from the url
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewJsDefault.default).renderSpinner();
        // TODO 0. results view to mark selected search result
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultPage(_modelJs.state.search.page));
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        //TODO 1. Loading recipe
        await _modelJs.loadRecipe(id);
        //TODO Rendering Recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (error) {
        (0, _recipeViewJsDefault.default).renderError();
        console.error(error);
    }
};
const controlSearchResults = async function() {
    try {
        (0, _resultsViewJsDefault.default).renderSpinner();
        // TODO 1. Get search query
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        // TODO 2. Load search result
        await _modelJs.loadSearchResult(query);
        // TODO 3. Render search result
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPage(_modelJs.state.search.page));
        // TODO the initial pagination button:
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (error) {
        console.log(error);
    }
};
const controlPagination = function(goToPage) {
    // Render new results
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPage(goToPage));
    // Render new pagination
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    // update the recipe servings (in state)
    _modelJs.updateServings(newServings);
    // update the recipe view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    // add and remove bookmark
    if (!_modelJs.state.recipe.bookmark) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe);
    // update recipe view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    // render bookmarks
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    try {
        // render spinner
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        // upload recipe data
        await _modelJs.uploadRecipe(newRecipe);
        // render recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        // display success message
        (0, _addRecipeViewJsDefault.default).renderSuccessMessage();
        // render bookmark view
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        // change id in the url
        window.history.pushState(null, '', `#${_modelJs.state.recipe.id}`);
        // close form window:
        setTimeout(()=>{
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SECONDS) * 1000);
    } catch (error) {
        console.error("\u274C\u274C", error);
        (0, _addRecipeViewJsDefault.default).renderError(error.message);
    }
// Upload new Recipe data
};
const init = function() {
    (0, _bookmarksViewJsDefault.default).addHandlerRenderBookmark(controlBookmarks);
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addRecipeViewJsDefault.default)._addHandlerUpload(controlAddRecipe);
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./model.js":"3QBkH","./views/recipeView.js":"3wx5k","./views/searchView.js":"kbE4Z","./views/resultsView.js":"kBQ4r","./views/paginationView.js":"7NIiB","./views/bookmarksView.js":"1qGeA","./views/addRecipeView.js":"8AWnP","./config.js":"2hPh4"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3QBkH":[function(require,module,exports,__globalThis) {
// TODO the M part of MVC project architecture
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResult", ()=>loadSearchResult);
parcelHelpers.export(exports, "getSearchResultPage", ()=>getSearchResultPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: '',
        result: [],
        resultsPerPage: (0, _configJs.RESULTS_PER_PAGE),
        page: 1
    },
    bookmarks: []
};
const createRecipe = function(data) {
    const { recipe } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        servings: recipe.servings,
        source: recipe.source_url,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}/${id}?key=${(0, _configJs.KEY)}`);
        state.recipe = createRecipe(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmark = true;
        else state.recipe.bookmark = false;
    } catch (error) {
        console.error(`\u{274C}\u{274C}${error}\u{274C}\u{274C}`);
        throw error;
    }
};
const loadSearchResult = async function(query) {
    try {
        state.search.query = query;
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?search=${query}&key=${(0, _configJs.KEY)}`);
        state.search.result = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (error) {
        console.error(`\u{274C}\u{274C}${error}\u{274C}\u{274C}`);
        throw error;
    }
};
const getSearchResultPage = function(page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.result.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * (newServings / state.recipe.servings);
    });
    state.recipe.servings = newServings;
};
const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    // add bookmark
    state.bookmarks.push(recipe);
    // Mark current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmark = true;
    persistBookmarks();
};
const deleteBookmark = function(recipe) {
    // delete bookmark
    const indexItem = state.bookmarks.findIndex((item)=>item.id === recipe.id);
    state.bookmarks.splice(indexItem, 1);
    // Remove the current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmark = false;
    persistBookmarks();
};
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith('ingredient') && entry[1] !== '').map((ing)=>{
            const ingArr = ing[1].split(',').map((el)=>el.trim());
            if (ingArr.length !== 3) throw new Error('Wrong Ingredient Format. Please Use the Correct Format!');
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.KEY)}`, recipe);
        state.recipe = createRecipe(data);
        addBookmark(state.recipe);
    } catch (error) {
        throw error;
    }
};
const init = function() {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./config.js":"2hPh4","./helpers.js":"7nL9P"}],"2hPh4":[function(require,module,exports,__globalThis) {
// TODO the constant variables that used multiple times
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "TIMEOUT_SECONDS", ()=>TIMEOUT_SECONDS);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE);
parcelHelpers.export(exports, "MODAL_CLOSE_SECONDS", ()=>MODAL_CLOSE_SECONDS);
parcelHelpers.export(exports, "mockJSON", ()=>mockJSON);
parcelHelpers.export(exports, "mockIDjson", ()=>mockIDjson);
const API_URL = 'https://forkify-api.jonas.io/api/v2/recipes';
const KEY = '0d0d8b6b-5947-4b9a-a64c-06abf1f37f3c';
const TIMEOUT_SECONDS = 10;
const RESULTS_PER_PAGE = 10;
const MODAL_CLOSE_SECONDS = 2.5;
const mockJSON = `{"status":"success","results":53,"data":{"recipes":[{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/100111309d9.jpg","title":"Double Crust Stuffed Pizza","id":"664c8f193e7aa067e94e8297"},{"publisher":"What's Gaby Cooking","image_url":"http://forkify-api.herokuapp.com/images/IMG_15866d21.jpg","title":"Grilled BBQ Chicken Pizza","id":"664c8f193e7aa067e94e8a12"},{"publisher":"Vintage Mixer","image_url":"http://forkify-api.herokuapp.com/images/CauliflowerPizzaCrustRecipe06fdc.jpg","title":"Cauliflower Pizza Crust Recipe","id":"664c8f193e7aa067e94e8906"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg","title":"PW\u{2019}s Favorite Pizza","id":"664c8f193e7aa067e94e86ba"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg","title":"One Basic Pizza Crust","id":"664c8f193e7aa067e94e8673"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/5278973957_3f9f9a21c2_o7a1b.jpg","title":"Fig-Prosciutto Pizza with Arugula","id":"664c8f193e7aa067e94e866f"},{"publisher":"101 Cookbooks","image_url":"http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg","title":"Best Pizza Dough Ever","id":"664c8f193e7aa067e94e8704"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg","title":"Deep Dish Fruit Pizza","id":"664c8f193e7aa067e94e8658"},{"publisher":"Real Simple","image_url":"http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg","title":"English-Muffin Egg Pizzas","id":"664c8f193e7aa067e94e85be"},{"publisher":"Real Simple","image_url":"http://forkify-api.herokuapp.com/images/pizza_30061a5d763.jpg","title":"Salami and Brussels Sprouts Pizza","id":"664c8f193e7aa067e94e8605"},{"publisher":"BBC Good Food","image_url":"http://forkify-api.herokuapp.com/images/1813674_MEDIUM6f4a.jpg","title":"Salami &amp; peppadew pizza","id":"664c8f193e7aa067e94e856b"},{"publisher":"Closet Cooking","image_url":"http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg","title":"Pizza Quesadillas (aka Pizzadillas)","id":"664c8f193e7aa067e94e84c2"},{"publisher":"What's Gaby Cooking","image_url":"http://forkify-api.herokuapp.com/images/PepperoniPizzaMonkeyBread8cd5.jpg","title":"Pepperoni Pizza Monkey Bread","id":"664c8f193e7aa067e94e8433"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/191121d99d.jpg","title":"Fast English Muffin Pizzas","id":"664c8f193e7aa067e94e82b4"},{"publisher":"Chow","image_url":"http://forkify-api.herokuapp.com/images/30624_RecipeImage_620x413_pepperoni_pizza_dip_4774d.jpg","title":"Pepperoni Pizza Dip Recipe","id":"664c8f193e7aa067e94e8a31"},{"publisher":"My Baking Addiction","image_url":"http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg","title":"Spicy Chicken and Pepper Jack Pizza","id":"5ed6604591c37cdc054bc886"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/237891b5e4.jpg","title":"Jay\u{2019}s Signature Pizza Crust","id":"5ed6604591c37cdc054bc990"},{"publisher":"Two Peas and Their Pod","image_url":"http://forkify-api.herokuapp.com/images/avocadopizzawithcilantrosauce4bf5.jpg","title":"Avocado Pita Pizza with Cilantro Sauce","id":"664c8f193e7aa067e94e880c"},{"publisher":"Two Peas and Their Pod","image_url":"http://forkify-api.herokuapp.com/images/peachbasilpizza6c7de.jpg","title":"Peach, Basil, Mozzarella, & Balsamic Pizza","id":"664c8f193e7aa067e94e882f"},{"publisher":"Bon Appetit","image_url":"http://forkify-api.herokuapp.com/images/figandgoatcheesepizzawitharugula646698d.jpg","title":"Fig and Goat Cheese Pizza with Arugula","id":"664c8f193e7aa067e94e877e"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/4433733640_8b0a5d19fbace0.jpg","title":"CPK\u{2019}s BBQ Chicken Pizza","id":"664c8f193e7aa067e94e86b9"},{"publisher":"Closet Cooking","image_url":"http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg","title":"Avocado Breakfast Pizza with Fried Egg","id":"664c8f193e7aa067e94e8476"},{"publisher":"Real Simple","image_url":"http://forkify-api.herokuapp.com/images/20meals14_30007e78232.jpg","title":"Artichoke Pizzas With Lemony Green Bean Salad","id":"664c8f193e7aa067e94e85a2"},{"publisher":"Closet Cooking","image_url":"http://forkify-api.herokuapp.com/images/Thai2BChicken2BPizza2Bwith2BSweet2BChili2BSauce2B5002B435581bcf578.jpg","title":"Thai Chicken Pizza with Sweet Chili Sauce","id":"664c8f193e7aa067e94e84e2"},{"publisher":"Two Peas and Their Pod","image_url":"http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg","title":"Sweet Potato Kale Pizza with Rosemary & Red Onion","id":"664c8f193e7aa067e94e8823"},{"publisher":"Closet Cooking","image_url":"http://forkify-api.herokuapp.com/images/Strawberry2BBalsamic2BPizza2Bwith2BChicken252C2BSweet2BOnion2Band2BSmoked2BBacon2B5002B300939d125e2.jpg","title":"Balsamic Strawberry and Chicken Pizza with Sweet Onions and Smoked Bacon","id":"664c8f193e7aa067e94e8482"},{"publisher":"Jamie Oliver","image_url":"http://forkify-api.herokuapp.com/images/395_1_1350903959_lrgdd8a.jpg","title":"Egg, prosciutto, artichokes, olives, mozzarella, tomato sauce &amp; basil pizza topping","id":"664c8f193e7aa067e94e8937"},{"publisher":"Two Peas and Their Pod","image_url":"http://forkify-api.herokuapp.com/images/minifruitpizzas52c00.jpg","title":"Mini Fruit Pizzas","id":"664c8f193e7aa067e94e880a"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/391236ba85.jpg","title":"Veggie Pizza","id":"664c8f193e7aa067e94e845a"},{"publisher":"My Baking Addiction","image_url":"http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg","title":"Pizza Dip","id":"664c8f193e7aa067e94e840d"},{"publisher":"A Spicy Perspective","image_url":"http://forkify-api.herokuapp.com/images/IMG_4351180x1804f4a.jpg","title":"Greek Pizza","id":"664c8f193e7aa067e94e8438"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/7988559586.jpg","title":"Valentine Pizza","id":"664c8f193e7aa067e94e8454"},{"publisher":"BBC Good Food","image_url":"http://forkify-api.herokuapp.com/images/1649634_MEDIUMd3fc.jpg","title":"Pitta pizzas","id":"664c8f193e7aa067e94e838d"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/567c8fe.jpg","title":"Pizza Pinwheels","id":"664c8f193e7aa067e94e836e"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/104254d419.jpg","title":"Pesto Pizza","id":"664c8f193e7aa067e94e8355"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/5100898cc5.jpg","title":"Pizza Casserole","id":"664c8f193e7aa067e94e836b"},{"publisher":"BBC Good Food","image_url":"http://forkify-api.herokuapp.com/images/679637_MEDIUM765c.jpg","title":"Puff pizza tart","id":"664c8f193e7aa067e94e8abd"},{"publisher":"Epicurious","image_url":"http://forkify-api.herokuapp.com/images/51150600f4cb.jpg","title":"Veggi-Prosciutto Pizza","id":"664c8f193e7aa067e94e89af"},{"publisher":"My Baking Addiction","image_url":"http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg","title":"Barbecue Chicken Pizza","id":"664c8f193e7aa067e94e89c9"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/pizza3464.jpg","title":"Pizza Potato Skins","id":"664c8f193e7aa067e94e88b9"},{"publisher":"Closet Cooking","image_url":"http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg","title":"Cauliflower Pizza Crust (with BBQ Chicken Pizza)","id":"664c8f193e7aa067e94e8706"},{"publisher":"Bon Appetit","image_url":"http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg","title":"No-Knead Pizza Dough","id":"664c8f193e7aa067e94e8783"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/4797377235_c07589b7d4_be953.jpg","title":"Mexican \u{201C}Flatbread\u{201D} Pizza","id":"664c8f193e7aa067e94e86af"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/grilledveggie79bd.jpg","title":"Grilled Veggie Pizza","id":"664c8f193e7aa067e94e867b"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg","title":"Pepperoni Pizza Burgers","id":"664c8f193e7aa067e94e863d"},{"publisher":"The Pioneer Woman","image_url":"http://forkify-api.herokuapp.com/images/burger53be.jpg","title":"Supreme Pizza Burgers","id":"664c8f193e7aa067e94e863b"},{"publisher":"Closet Cooking","image_url":"http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg","title":"Taco Quesadilla Pizzas","id":"664c8f193e7aa067e94e84de"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/580542e3ec.jpg","title":"Hot Pizza Dip","id":"664c8f193e7aa067e94e82f4"},{"publisher":"Lisa's Kitchen","image_url":"http://forkify-api.herokuapp.com/images/hummus_pizza25f37.jpg","title":"Homemade Spicy Hummus Pizza","id":"664c8f193e7aa067e94e8ad1"},{"publisher":"My Baking Addiction","image_url":"http://forkify-api.herokuapp.com/images/PizzaDough1of12edit5779.jpg","title":"Simple No Knead Pizza Dough","id":"664c8f193e7aa067e94e8a79"},{"publisher":"What's Gaby Cooking","image_url":"http://forkify-api.herokuapp.com/images/PizzaHandPie4e08.jpg","title":"Pepperoni Pizza Hand Pies","id":"664c8f193e7aa067e94e8a13"},{"publisher":"Whats Gaby Cooking","image_url":"http://forkify-api.herokuapp.com/images/IMG_98428b96.jpg","title":"Loaded Veggie and Prosciutto Pizza","id":"664c8f193e7aa067e94e898a"},{"publisher":"BBC Good Food","image_url":"http://forkify-api.herokuapp.com/images/2150654_MEDIUM6068.jpg","title":"Pizza bianco with artichoke hearts","id":"664c8f193e7aa067e94e897b"}]}}`;
const mockIDjson = `{"status":"success","data":{"recipe":{"publisher":"The Pioneer Woman","ingredients":[{"quantity":1,"unit":"tsp","description":"active dry yeast"},{"quantity":0.75,"unit":"cup","description":"warm water"},{"quantity":2,"unit":"cups","description":"all-purpose flour"},{"quantity":0.75,"unit":"tsp","description":"kosher salt"},{"quantity":3,"unit":"tbsps","description":"olive oil"},{"quantity":1,"unit":"","description":"whole recipe pizza crust"},{"quantity":1,"unit":"","description":"whole skirt steak or flank steak"},{"quantity":null,"unit":"","description":"Salt and pepper to taste"},{"quantity":2,"unit":"","description":"whole red onions sliced thin"},{"quantity":3,"unit":"tbsps","description":"butter"},{"quantity":4,"unit":"tbsps","description":"balsamic vinegar"},{"quantity":0.5,"unit":"tsp","description":"worcestershire sauce"},{"quantity":2,"unit":"cups","description":"marinara sauce"},{"quantity":12,"unit":"oz","description":"weight fresh mozzarella cheese sliced thin"},{"quantity":null,"unit":"","description":"Shaved parmesan cheese"},{"quantity":0.5,"unit":"cup","description":"good steak sauce"}],"source_url":"http://thepioneerwoman.com/cooking/2011/09/steakhouse-pizza/","image_url":"http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg","title":"One Basic Pizza Crust","servings":4,"cooking_time":105,"id":"664c8f193e7aa067e94e8673"}}}`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7nL9P":[function(require,module,exports,__globalThis) {
// TODO functions that we are going to use multiple times in our project
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _config = require("./config");
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SECONDS))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} {${res.status}}`);
        return data;
    } catch (error) {
        throw error;
    }
};
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./config":"2hPh4"}],"3wx5k":[function(require,module,exports,__globalThis) {
// TODO the V part of MVC project architecture
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Because of Parcel2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class RecipeView extends (0, _viewJsDefault.default) {
    addHandlerRender(handler) {
        // DESC when we want to execute multiple events for a single callback function
        // window.addEventListener('hashchange', controlRecipes);
        // window.addEventListener('load', controlRecipes);
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--update-servings');
            if (!btn) return;
            const updateTo = +btn.dataset.servings;
            if (updateTo > 0) handler(updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--bookmark');
            if (!btn) return;
            handler();
        });
    }
    _generateHTML() {
        return `
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
            </svg>
            <span data-servings="${this._data.servings}" class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button data-servings="${+this._data.servings - 1}" class="btn--tiny btn--update-servings">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
              </button>
              <button data-servings="${+this._data.servings + 1}" class="btn--tiny btn--update-servings">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmark ? '-fill' : ''}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map((ing)=>this._generateHTMLIngredients(ing)).join('')}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.source}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;
    }
    _generateHTMLIngredients(ing) {
        return `
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
                <use href="${ing.quantity ? (0, _iconsSvgDefault.default) : ''}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity ? ing.quantity : ''}</div>
            <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
            </div>
        </li>
        `;
    }
}
exports.default = new RecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./View.js":"jSw21","url:../../img/icons.svg":"fd0vu"}],"jSw21":[function(require,module,exports,__globalThis) {
//TODO this going to be used only as a parent class; no instances will be made from it
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // Because of Parcel2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _parentElement = document.querySelector('.recipe');
    _data;
    _errorMessage = "We couldn't find the food. Please try another one";
    _successMessage = '';
    /**
     * render the received object to the DOM
     * @param {Object | Object[]} data the data to be rendered (e.g. recipe)
     * @param {boolean} [render = true] (optional) if false, creates HTMLstring instead of rendering to the DOM
     * @returns {undefined | string} A HTML string is returned if render=false
     * @this {Object} View instance
     * @author Jonas Schmedtmann
     */ render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0 || Object.keys(data).length === 0) return this.renderError();
        this._data = data;
        const HTML = this._generateHTML();
        if (!render) return HTML;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', HTML);
    }
    renderSpinner = function() {
        const html = `
        <div class="spinner">
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
          </svg>
        </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    };
    renderError(message = this._errorMessage) {
        const html = `
        <div class="error">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    }
    renderSuccessMessage(message = this._successMessage) {
        const html = `
        <div class="message">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    }
    update(data) {
        this._data = data;
        const newHTML = this._generateHTML();
        const newDOM = document.createRange().createContextualFragment(newHTML);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        // The element which we want to update
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // Updates changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') curEl.textContent = newEl.textContent;
            // Updates changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fd0vu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("icons.0809ef97.svg") + "?" + Date.now();

},{}],"kbE4Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector('.search');
    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handlerFn) {
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handlerFn();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kBQ4r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipe is found for the searched item. Please Try again';
    _successMessage = '';
    _generateHTML() {
        return this._data.map((result)=>(0, _previewViewJsDefault.default).render(result, false)).join('');
    }
}
exports.default = new ResultsView();

},{"./View.js":"jSw21","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./previewView.js":"6tKHS"}],"6tKHS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Because of Parcel2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewView extends (0, _viewJsDefault.default) {
    _generateHTML() {
        const id = window.location.hash.slice(1);
        return `
          <li class="preview">
            <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">
                  <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `;
    }
}
exports.default = new PreviewView();

},{"./View.js":"jSw21","url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7NIiB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Because of Parcel2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const gotoPage = +btn.dataset.goto;
            handler(gotoPage);
        });
    }
    _generateHTML() {
        // first, we need to know how many pages there are:
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.result.length / this._data.resultsPerPage); // round it to next number
        // Scenario 1: we are at page 1 and we HAVE other pages
        if (currentPage === 1 && numPages > 1) return `
          <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </button>
            `;
        // Scenario 2: we are in other pages
        if (currentPage !== 1 && currentPage < numPages) return `
          <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </button>
            `;
        // Scenario 3: we are in the last page
        if (currentPage === numPages && numPages > 1) return `
          <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
            `;
        // Scenario 4: we are at page 1 and THERE IS NO other pages
        return '';
    }
}
exports.default = new PaginationView();

},{"./View.js":"jSw21","url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1qGeA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a recipe and bookmark it.';
    _successMessage = '';
    addHandlerRenderBookmark(handler) {
        window.addEventListener('load', handler);
    }
    _generateHTML() {
        return this._data.map((bookmark)=>(0, _previewViewJsDefault.default).render(bookmark, false)).join('');
    }
}
exports.default = new BookmarksView();

},{"./View.js":"jSw21","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./previewView.js":"6tKHS"}],"8AWnP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class AddRecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.upload');
    _successMessage = 'Recipe successfully uploaded';
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    constructor(){
        super();
        this._btnOpen.addEventListener('click', this._addHandlerWindowCloseAndOpen.bind(this));
        this._btnClose.addEventListener('click', this._addHandlerWindowCloseAndOpen.bind(this));
        this._overlay.addEventListener('click', this._addHandlerWindowCloseAndOpen.bind(this));
    }
    _addHandlerWindowCloseAndOpen() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    _addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const dataArray = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArray);
            handler(data);
        });
    }
    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
}
exports.default = new AddRecipeView();

},{"./View.js":"jSw21","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5DuvQ","7dWZ8"], "7dWZ8", "parcelRequire3a11", {}, "./", "/")

//# sourceMappingURL=Forkify.4a59a05f.js.map

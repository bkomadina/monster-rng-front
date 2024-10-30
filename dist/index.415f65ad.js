// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fwRZa":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6c6cd86f415f65ad";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
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
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
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
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3YLil":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "notificationToggle", ()=>notificationToggle);
parcelHelpers.export(exports, "closingAnimation", ()=>closingAnimation);
parcelHelpers.export(exports, "createMonsterHandler", ()=>createMonsterHandler);
parcelHelpers.export(exports, "getMonsterHandler", ()=>getMonsterHandler);
var _renderMonsterJs = require("./renderMonster.js");
var _difficultyJs = require("./difficulty.js");
var _fightMonsterJs = require("./fightMonster.js");
const formCreate = document.getElementById("form-create");
const formDifficulty = document.getElementById("form-difficulty");
const backendUrl = "http://localhost:8000";
const clearForm = (form)=>{
    form.reset();
};
const notificationToggle = (text, type = "timed")=>{
    const notification = document.querySelector(".notification");
    const notificationText = document.querySelector("#notificationType");
    notification.classList.toggle("active");
    notificationText.classList.toggle("notificationText");
    notificationText.innerText = `${text}`;
    const notificationHandler = ()=>{
        notificationText.innerText = ``;
        notification.classList.toggle("active");
        notificationText.classList.toggle("notificationText");
        window.removeEventListener("mouseup", notificationHandler);
    };
    if (type === "stay") window.addEventListener("mouseup", notificationHandler);
    else setTimeout(notificationHandler, 2000);
};
const closingAnimation = ()=>{
    document.querySelector(".up").classList.toggle("up-close");
    document.querySelector(".down").classList.toggle("down-close");
};
const createMonsterHandler = (event)=>{
    event.preventDefault();
    const formCreate = document.getElementById("form-create");
    fetch(`${backendUrl}/add-monster`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: formCreate.name.value.toUpperCase(),
            HP: formCreate.HP.value,
            damage: formCreate.damage.value,
            difficulty: (0, _difficultyJs.determineDifficulty)(formCreate.HP.value, formCreate.damage.value)
        })
    }).then((response)=>{
        if (response.status === 400) throw new Error("Too crazy monster stats");
        else if (response.status === 500) throw new Error("Server is down");
        return response.json();
    }).then((data)=>{
        if (!data.id) {
            notificationToggle("Monster has no ID");
            clearForm(formCreate);
            return;
        }
        notificationToggle("Monster created!");
        window.localStorage.setItem("last created", JSON.stringify(data.id));
        clearForm(formCreate);
    }).catch((error)=>{
        console.error(error);
        notificationToggle(error);
    });
};
const getMonsterHandler = (event)=>{
    event.preventDefault();
    const formDifficulty = document.getElementById("form-difficulty");
    const difficulty = formDifficulty.querySelector('input[name="difficulty"]:checked').value;
    let lastCreatedId;
    try {
        lastCreatedId = JSON.parse(window.localStorage.getItem("last created"));
    } catch (error) {
        const message = `No last created monster found", ${error}`;
        console.error(message);
        notificationToggle(message);
        return;
    }
    if (difficulty === "last" && lastCreatedId) fetch(`${backendUrl}/lastcreated/${lastCreatedId}`).then((response)=>{
        if (response.status === 404) throw new Error("Your last created monster escaped. Create another one");
        else if (response.status === 500) throw new Error("Server is down");
        return response.json();
    }).then((data)=>{
        window.randomMonster = {
            name: data.name,
            HP: data.hp,
            damage: data.damage
        };
        formCreate.removeEventListener("submit", createMonsterHandler);
        formDifficulty.removeEventListener("submit", getMonsterHandler);
        closingAnimation();
        setTimeout(()=>{
            (0, _renderMonsterJs.renderMonster)();
            (0, _fightMonsterJs.fightMonster)();
        }, 600);
    }).catch((error)=>{
        console.error(error);
        notificationToggle(error);
    });
    else fetch(`${backendUrl}/monster/${difficulty}`).then((response)=>{
        if (response.status === 404) throw new Error("Could not find monster with selected difficulty, please create more");
        else if (response.status === 500) throw new Error("Server is down");
        return response.json();
    }).then((data)=>{
        window.randomMonster = {
            name: data.name,
            HP: data.hp,
            damage: data.damage
        };
        formCreate.removeEventListener("submit", createMonsterHandler);
        formDifficulty.removeEventListener("submit", getMonsterHandler);
        closingAnimation();
        setTimeout(()=>{
            (0, _renderMonsterJs.renderMonster)();
            (0, _fightMonsterJs.fightMonster)();
        }, 600);
    }).catch((error)=>{
        console.error(error);
        notificationToggle(error);
    });
};
formCreate.addEventListener("submit", createMonsterHandler);
formDifficulty.addEventListener("submit", getMonsterHandler);

},{"./renderMonster.js":"2evGk","./difficulty.js":"94ITx","./fightMonster.js":"2JCeA","@parcel/transformer-js/src/esmodule-helpers.js":"96qt5"}],"2evGk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderMonster", ()=>renderMonster);
var _createMonsterJs = require("./createMonster.js");
const renderMonster = ()=>{
    const mainBody = document.getElementById("background");
    mainBody.innerHTML = "";
    mainBody.innerHTML = `
    <section>
    <section class="up up-close">
      <h1 class="monster-name">${randomMonster.name} HP:</h1>
      <progress id="monster-hp" max="" value=""></progress>
      <h1 class="player">Your HP:</h1>
      <progress id="player-hp" max="" value=""></progress>
      <div class="fight-container">
        <button id="att-btn" class="fight-btn">Attack</button>
        <button id="heavy-att-btn" class="fight-btn">Heavy Attack</button>
      </div>
    </section>
    </section>
    <section>
    <section class="down down-close">
      <div class="heal">
        <button id="heal-btn" class="fight-btn">Heal</button>
      </div>
      <button id="retry-btn">Retry</button>
      <button id="home-btn">Create another monster</button>
    </section>
    </section>
  `;
    setTimeout(()=>{
        (0, _createMonsterJs.closingAnimation)();
    }, 100);
};

},{"./createMonster.js":"3YLil","@parcel/transformer-js/src/esmodule-helpers.js":"96qt5"}],"96qt5":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"94ITx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "determineDifficulty", ()=>determineDifficulty);
const determineDifficulty = (hp, damage)=>{
    if (damage <= 12 && hp <= 70 || damage <= 7 && hp <= 130 || damage <= 30 && hp <= 25) return "easy";
    else if (damage <= 15 && hp <= 80 || damage <= 9 && hp <= 140 || damage <= 30 && hp <= 35) return "medium";
    else return "hard";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"96qt5"}],"2JCeA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fightMonster", ()=>fightMonster);
var _renderHomeJs = require("./renderHome.js");
var _createMonsterJs = require("./createMonster.js");
const fightMonster = ()=>{
    let monsterMaxHp = +randomMonster.HP;
    let monsterDamage = +randomMonster.damage;
    let currentMonsterHp;
    const playerMaxHp = 100;
    const playerDamage = 10;
    let currentPlayerHp;
    let healUses;
    const monsterHpProg = document.getElementById("monster-hp");
    const playerHpProg = document.getElementById("player-hp");
    const attackBtn = document.getElementById("att-btn");
    const heavyAttackkBtn = document.getElementById("heavy-att-btn");
    const healBtn = document.getElementById("heal-btn");
    const retryBtn = document.getElementById("retry-btn");
    const homeBtn = document.getElementById("home-btn");
    const setMaxHp = (monsterHp)=>{
        monsterHpProg.max = monsterHp;
        monsterHpProg.value = monsterHp;
        currentMonsterHp = monsterHp;
        playerHpProg.max = playerMaxHp;
        playerHpProg.value = playerMaxHp;
        currentPlayerHp = playerMaxHp;
        healUses = true;
    };
    const randomDamage = ()=>{
        return Math.round((Math.random() - 0.5) * 10);
    };
    const monsterAttack = ()=>{
        let monsterDmg = monsterDamage + randomDamage();
        if (monsterDmg < 0) monsterDmg = 0;
        currentPlayerHp -= monsterDmg;
        playerHpProg.value = currentPlayerHp;
    };
    const playerAttack = ()=>{
        let playerDmg = playerDamage + randomDamage();
        currentMonsterHp -= playerDmg;
        monsterHpProg.value = currentMonsterHp;
        monsterAttack();
        checkWin();
    };
    const playerHeavyAtt = ()=>{
        let playerDmg = playerDamage * 1.8 + randomDamage();
        currentMonsterHp -= playerDmg;
        monsterHpProg.value = currentMonsterHp;
        monsterAttack();
        if (checkWin()) return;
        else {
            monsterAttack();
            checkWin();
        }
    };
    const playerHeal = ()=>{
        if (healUses) {
            currentPlayerHp += 45 + randomDamage();
            if (currentPlayerHp >= playerMaxHp) {
                currentPlayerHp = playerMaxHp;
                playerHpProg.value = currentPlayerHp;
            } else playerHpProg.value = currentPlayerHp;
            healUses = false;
            monsterAttack();
            checkWin();
        } else (0, _createMonsterJs.notificationToggle)("No healing uses left", "stay");
    };
    const checkWin = ()=>{
        if (currentMonsterHp <= 0 && currentPlayerHp >= 0) {
            (0, _createMonsterJs.notificationToggle)("You won!", "stay");
            setMaxHp(monsterMaxHp);
            return true;
        } else if (currentPlayerHp <= 0 && currentMonsterHp >= 0) {
            (0, _createMonsterJs.notificationToggle)("You lost!", "stay");
            setMaxHp(monsterMaxHp);
            return true;
        } else if (currentMonsterHp <= 0 && currentPlayerHp <= 0) {
            (0, _createMonsterJs.notificationToggle)("Draw!", "stay");
            setMaxHp(monsterMaxHp);
            return true;
        }
    };
    const clearListenersRenderHomeHandler = ()=>{
        attackBtn.removeEventListener("click", playerAttack);
        heavyAttackkBtn.removeEventListener("click", playerHeavyAtt);
        healBtn.removeEventListener("click", playerHeal);
        retryBtn.removeEventListener("click", setMaxHp.bind(undefined, monsterMaxHp));
        homeBtn.removeEventListener("click", (0, _renderHomeJs.renderHome));
        (0, _createMonsterJs.closingAnimation)();
        setTimeout(()=>{
            (0, _renderHomeJs.renderHome)();
        }, 600);
    };
    setMaxHp(monsterMaxHp);
    attackBtn.addEventListener("click", playerAttack);
    heavyAttackkBtn.addEventListener("click", playerHeavyAtt);
    healBtn.addEventListener("click", playerHeal);
    retryBtn.addEventListener("click", setMaxHp.bind(undefined, monsterMaxHp));
    homeBtn.addEventListener("click", clearListenersRenderHomeHandler);
};

},{"./renderHome.js":"ahoEx","./createMonster.js":"3YLil","@parcel/transformer-js/src/esmodule-helpers.js":"96qt5"}],"ahoEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHome", ()=>renderHome);
var _createMonsterJs = require("./createMonster.js");
const renderHome = ()=>{
    const mainBody = document.getElementById("background");
    mainBody.innerHTML = "";
    mainBody.innerHTML = `
  <section>
  <section class="up up-close">
      <h1 class="top-heading">Create your monster</h1>
      <form id="form-create">
        <label for="name">Name:</label>
        <input id="name" type="text" pattern="[a-zA-Z0-9\s]{2,20}" title="2 to 20 letters, no special characters" required="required" autocomplete="off">
        <label for="HP">HP:</label>
        <input id="HP" type="number" min="15" max="160">
        <label for="damage">Damage:</label>
        <input id="damage" type="number" min="5" max="30">
        <button type="submit">Create</button>
      </form>
      <!-- <div class="border"></div> -->
    </section>
    </section>
    <section>
    <section class="down down-close">
      <h1 class="bottom-heading">Select difficulty:</h1>
      <form id="form-difficulty">
          <ul>
            <li>
              <input name="difficulty" id="easy" value="easy" type="radio" checked="checked" class="circle">
              <label for="easy">Easy</label>
            </li>
            <li>
              <input name="difficulty" id="medium" value="medium" type="radio" class="circle">
              <label for="medium">Medium</label>
              </li>
              <li>
                <input name="difficulty" id="hard" value="hard" type="radio" class="circle">
                <label for="hard">Hard</label>
              </li>
              <li class="last">
                <input name="difficulty" id="last" value="last" type="radio" class="circle">
                <label for="last">Last Created</label>
              </li>
              <li class="last">
                <button id="fight-monster-btn" type="submit">Fight monster</button>
              </li>
            </ul>
        </form>
    </section>
    </section>
`;
    setTimeout(()=>{
        (0, _createMonsterJs.closingAnimation)();
    }, 100);
    const formCreate = document.getElementById("form-create");
    const formDifficulty = document.getElementById("form-difficulty");
    const difficulty = formDifficulty.querySelector('input[name="difficulty"]:checked').value;
    formCreate.addEventListener("submit", (0, _createMonsterJs.createMonsterHandler));
    formDifficulty.addEventListener("submit", (0, _createMonsterJs.getMonsterHandler));
};

},{"./createMonster.js":"3YLil","@parcel/transformer-js/src/esmodule-helpers.js":"96qt5"}]},["fwRZa","3YLil"], "3YLil", "parcelRequirecd11")

//# sourceMappingURL=index.415f65ad.js.map

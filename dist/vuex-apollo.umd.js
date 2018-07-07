// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped, ModuleConfig) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(ModuleConfig);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({7:[function(require,module,exports) {
module.exports={name:"vuex-apollo",version:"1.1.0",description:"Vuex Setup with Apollo Integration",main:"dist/vuex-apollo.umd.js",module:"dist/vuex-apollo.esm.js",unpkg:"dist/vuex-apollo.min.js",scripts:{"build:browser":"parcel build src/index.js --out-dir dist --out-file vuex-apollo.min.js --target browser","build:es":"parcel build src/index.js --out-dir dist --out-file vuex-apollo.esm.js --target electron","build:umd":"parcel build src/index.js --out-dir dist --out-file vuex-apollo.umd.js --target node",build:"npm run build:browser && npm run build:es && npm run build:umd","docs:dev":"vuepress dev docs","docs:build":"vuepress build docs",demo:"parcel tests/demo/index.html --out-dir tests/demo/dist"},repository:{type:"git",url:"git+https://github.com/alajfit/vuex-apollo.git"},keywords:["vuex","apollo","graphql"],author:"Alan J. Fitzpatrick <alajfit@gmail.com>",license:"ISC",bugs:{url:"https://github.com/alajfit/vuex-apollo/issues"},homepage:"https://github.com/alajfit/vuex-apollo#readme",devDependencies:{"@vue/component-compiler-utils":"^2.1.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-es2015":"^6.24.1","node-sass":"^4.9.1",parcel:"^1.9.4","parcel-bundler":"^1.9.4","parcel-plugin-vue":"^1.5.0",vue:"^2.5.16",vuepress:"^0.10.2"},dependencies:{"apollo-boost":"^0.1.10",graphql:"^0.13.2","graphql-tag":"^2.9.2",vuex:"^3.0.1"}};
},{}],9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("vuex"),e=o(t);function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return t&&"function"==typeof t.then}function s(t,e,o,s){const c=t._actions[e]||(t._actions[e]=[]);c.length>0&&c.pop(),c.push(function(e,c){let n=o({dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state,apollo:t.$apollo,gql:t.$gql},e,c);return r(n)||(n=Promise.resolve(n)),t._devtoolHook?n.catch(e=>{throw t._devtoolHook.emit("vuex:error",e),e}):n})}function c(t,e,o,r){const n=t._modules.getNamespace(e),i=o.context;o.forEachAction((e,o)=>s(t,n+o,e,i)),o.forEachChild((o,s)=>c(t,e.concat(s),o,r))}exports.default=(t=>{c(t,[],t._modules.root);const o=e.default.Store.prototype.registerModule;e.default.Store.prototype.registerModule=function(t,e){o.call(this,t,e),c(this,[].concat(t),this._modules.get([t])),this.dispatch(`${t}/INIT`)}});
},{}],3:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../package.json"),l=require("./plugins/apollo-gql-plugin"),o=r(l);function r(e){return e&&e.__esModule?e:{default:e}}exports.default=((l,{apollo:r,gql:t})=>{const u=new l.Store({state:{version:e.version},plugins:[o.default]});return u.$apollo=r,u.$gql=t,u});
},{"../../package.json":7,"./plugins/apollo-gql-plugin":9}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("apollo-boost"),r=t(e);function t(e){return e&&e.__esModule?e:{default:e}}exports.default=(e=>new r.default({uri:e.uri}));
},{}],1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createNamespacedHelpers=exports.mapState=exports.mapGetters=exports.mapActions=void 0;var e=require("vuex"),t=u(e),r=require("graphql-tag"),a=u(r),s=require("./store"),o=u(s),p=require("./apollo"),l=u(p);function u(e){return e&&e.__esModule?e:{default:e}}const d={install(e,r){e.use(t.default);const s=(0,l.default)(r),p=(0,o.default)(t.default,{apollo:s,gql:a.default});r.modules.forEach(e=>p.registerModule(e.name,e.store)),e.prototype.$store=p}},c=exports.mapActions=e.mapActions,m=exports.mapGetters=e.mapGetters,i=exports.mapState=e.mapState,n=exports.createNamespacedHelpers=e.createNamespacedHelpers;exports.default=d;
},{"./store":3,"./apollo":4}]},{},[1])
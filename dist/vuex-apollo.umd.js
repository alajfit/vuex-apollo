parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({3:[function(require,module,exports) {
module.exports={name:"vuex-apollo",version:"1.0.0",description:"Vuex Setup with Apollo Integration",main:"dist/vuex-apollo.umd.js",module:"dist/vuex-apollo.esm.js",unpkg:"dist/vuex-apollo.min.js",scripts:{"build:browser":"parcel build src/index.js --out-dir dist --out-file vuex-apollo.min.js --target browser","build:es":"parcel build src/index.js --out-dir dist --out-file vuex-apollo.esm.js --target electron","build:umd":"parcel build src/index.js --out-dir dist --out-file vuex-apollo.umd.js --target node",build:"npm run build:browser && npm run build:es && npm run build:umd","docs:dev":"vuepress dev docs","docs:build":"vuepress build docs"},repository:{type:"git",url:"git+https://github.com/alajfit/vuex-apollo.git"},keywords:["Vuex","Apollo","GraphQL"],author:"Alan J. Fitzpatrick",license:"ISC",bugs:{url:"https://github.com/alajfit/vuex-apollo/issues"},homepage:"https://github.com/alajfit/vuex-apollo#readme",devDependencies:{parcel:"^1.9.4",vuepress:"^0.10.2"},dependencies:{"apollo-boost":"^0.1.10",graphql:"^0.13.2",vuex:"^3.0.1"}};
},{}],1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const{version:e}=require("../package.json"),s={install(s,r){s.$va={version:e}}};exports.default=s;
},{"../package.json":3}]},{},[1], null)
//# sourceMappingURL=/vuex-apollo.umd.map
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{109:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[W]}function o(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[M]||!!e.constructor[M]||l(e)||d(e))}function a(e,t,n){void 0===n&&(n=!1),0===c(e)?(n?Object.keys:K)(e).forEach((function(n){return t(n,e[n],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function c(e){var t=e[W];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:l(e)?2:d(e)?3:0}function u(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function s(e,t){return 2===c(e)?e.get(t):e[t]}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function l(e){return H&&e instanceof Map}function d(e){return I&&e instanceof Set}function p(e){return e.o||e.t}function v(e,t){if(void 0===t&&(t=!1),Array.isArray(e))return e.slice();var n=Object.create(Object.getPrototypeOf(e));return a(e,(function(i){if(i!==W){var o=Object.getOwnPropertyDescriptor(e,i),a=o.value;o.get&&(t||r(1),a=o.get.call(e)),o.enumerable?n[i]=a:Object.defineProperty(n,i,{value:a,writable:!0,configurable:!0})}})),n}function h(e,t){i(e)||y(e)||!o(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=m),Object.freeze(e),t&&a(e,(function(e,t){return h(t,!0)}),!0))}function m(){r(2)}function y(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function b(e){var t=U[e];return t||r(19,e),t}function g(){return R}function O(e,t){t&&(b("Patches"),e.u=[],e.s=[],e.v=t)}function j(e){P(e),e.p.forEach(w),e.p=null}function P(e){e===R&&(R=e.l)}function S(e){return R={p:[],l:R,h:e,m:!0,_:0}}function w(e){var t=e[W];0===t.i||1===t.i?t.j():t.O=!0}function E(e,t){t._=t.p.length;var n=t.p[0],i=void 0!==e&&e!==n;return t.h.g||b("ES5").S(t,e,i),i?(n[W].P&&(j(t),r(4)),o(e)&&(e=A(t,e),t.l||C(t,e)),t.u&&b("Patches").M(n[W],e,t.u,t.s)):e=A(t,n,[]),j(t),t.u&&t.v(t.u,t.s),e!==J?e:void 0}function A(e,t,n){if(y(t))return t;var r=t[W];if(!r)return a(t,(function(i,o){return N(e,r,t,i,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return C(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=v(r.k,!0):r.o;a(i,(function(t,o){return N(e,r,i,t,o,n)})),C(e,i,!1),n&&e.u&&b("Patches").R(r,n,e.u,e.s)}return r.o}function N(e,t,n,r,a,l){if(i(a)){var d=A(e,a,l&&t&&3!==t.i&&!u(t.D,r)?l.concat(r):void 0);if(v=r,h=d,2===(m=c(p=n))?p.set(v,h):3===m?(p.delete(v),p.add(h)):p[v]=h,!i(d))return;e.m=!1}var p,v,h,m;if((!t||!f(a,s(t.t,r)))&&o(a)){if(!e.h.N&&e._<1)return;A(e,a),t&&t.A.l||C(e,a)}}function C(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&h(t,n)}function k(e,t){var n=e[W],r=Reflect.getOwnPropertyDescriptor(n?p(n):e,t);return r&&r.value}function D(e){if(!e.P){if(e.P=!0,0===e.i||1===e.i){var t=e.o=v(e.t);a(e.p,(function(e,n){t[e]=n})),e.p=void 0}e.l&&D(e.l)}}function z(e){e.o||(e.o=v(e.t))}function T(e,t,n){var r=l(t)?b("MapSet").T(t,n):d(t)?b("MapSet").F(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:g(),P:!1,I:!1,D:{},l:t,t:e,k:null,p:{},o:null,j:null,C:!1},i=r,o=L;n&&(i=[r],o=$);var a=Proxy.revocable(i,o),c=a.revoke,u=a.proxy;return r.k=u,r.j=c,u}(t,n):b("ES5").J(t,n);return(n?n.A:g()).p.push(r),r}var x,R,F="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),H="undefined"!=typeof Map,I="undefined"!=typeof Set,_="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,J=F?Symbol("immer-nothing"):((x={})["immer-nothing"]=!0,x),M=F?Symbol("immer-draftable"):"__$immer_draftable",W=F?Symbol("immer-state"):"__$immer_state",K=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),U={},L={get:function(e,t){if(t===W)return e;var n=e.p;if(!e.P&&u(n,t))return n[t];var r=p(e)[t];if(e.I||!o(r))return r;if(e.P){if(r!==k(e.t,t))return r;n=e.o}return n[t]=T(e.A.h,r,e)},has:function(e,t){return t in p(e)},ownKeys:function(e){return Reflect.ownKeys(p(e))},set:function(e,t,n){if(!e.P){var r=k(e.t,t);if(n?f(r,n)||n===e.p[t]:f(r,n)&&t in e.t)return!0;z(e),D(e)}return e.D[t]=!0,e.o[t]=n,!0},deleteProperty:function(e,t){return void 0!==k(e.t,t)||t in e.t?(e.D[t]=!1,z(e),D(e)):e.D[t]&&delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=p(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&(r.writable=!0,r.configurable=1!==e.i||"length"!==t),r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},$={};a(L,(function(e,t){$[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),$.deleteProperty=function(e,t){return L.deleteProperty.call(this,e[0],t)},$.set=function(e,t,n){return L.set.call(this,e[0],t,n,e[0])};var V=new(function(){function e(e){this.g=_,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var i=t;t=e;var a=this;return function(e){var n=this;void 0===e&&(e=i);for(var r=arguments.length,o=Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];return a.produce(e,(function(e){var r;return(r=t).call.apply(r,[n,e].concat(o))}))}}var c;if("function"!=typeof t&&r(6),void 0!==n&&"function"!=typeof n&&r(7),o(e)){var u=S(this),s=T(this,e,void 0),f=!0;try{c=t(s),f=!1}finally{f?j(u):P(u)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return O(u,n),E(e,u)}),(function(e){throw j(u),e})):(O(u,n),E(c,u))}if((c=t(e))!==J)return void 0===c&&(c=e),this.N&&h(c,!0),c},t.produceWithPatches=function(e,t){var n,r,i=this;return"function"==typeof e?function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))}:[this.produce(e,t,(function(e,t){n=e,r=t})),n,r]},t.createDraft=function(e){o(e)||r(8);var t=S(this),n=T(this,e,void 0);return n[W].C=!0,P(t),n},t.finishDraft=function(e,t){var n=(e&&e[W]).A;return O(n,t),E(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){_||r(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var o=b("Patches").U;return i(e)?o(e,t):this.produce(e,(function(e){return o(e,t.slice(n+1))}))},e}()),X=V.produce;V.produceWithPatches.bind(V),V.setAutoFreeze.bind(V),V.setUseProxies.bind(V),V.applyPatches.bind(V),V.createDraft.bind(V),V.finishDraft.bind(V);t.a=X},159:function(e,t,n){"use strict";var r=n(7),i=n(102),o=function(){};t.a=function(e,t,n){if(!i.a)return[t,o,o];if(!e)throw new Error("useLocalStorage key may not be falsy");var a=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,c=Object(r.useState)((function(){try{var r=n?n.raw?String:n.serializer:JSON.stringify,i=localStorage.getItem(e);return null!==i?a(i):(t&&localStorage.setItem(e,r(t)),t)}catch(c){return t}})),u=c[0],s=c[1],f=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(u):t;if("undefined"===typeof r)return;var i=void 0;i=n?n.raw?"string"===typeof r?r:JSON.stringify(r):n.serializer?n.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,i),s(a(i))}catch(c){}}),[e,s]),l=Object(r.useCallback)((function(){try{localStorage.removeItem(e),s(void 0)}catch(c){}}),[e,s]);return[u,f,l]}},248:function(e,t,n){"use strict";n.r(t);var r=n(90),i=n(27),o=n(17),a=n(24),c=n(112),u=n(96),s=n.n(u),f=n(99),l=n.n(f),d=n(109),p=n(7),v=n.n(p),h=n(317),m=n(133),y=n(101),b=n(291),g=n(159),O=Object(p.lazy)((function(){return n.e(17).then(n.bind(null,253))})),j=Object(b.a)({S:768});var P=v.a.memo((function(e){var t=e.handleSort,n=e.sortData,r=e.statistic,o=j(),u=Object(h.a)().t;return v.a.createElement("div",{className:"cell heading",onClick:function(){return t(r)}},n.sortColumn===r&&v.a.createElement("div",{className:s()("sort-icon",{invert:n.isAscending})},v.a.createElement(c.b,{size:10})),v.a.createElement("div",{className:s()(Object(i.a)({},"is-".concat(r),"S"===o)),title:Object(a.a)(r)},"S"===o?Object(a.a)(r.slice(0,1)):u(Object(a.a)(r))))}),(function(e,t){return!!l()(e.sortData,t.sortData)}));var S=v.a.memo((function(){var e=Object(h.a)().t;return v.a.createElement(v.a.Fragment,null,v.a.createElement("h5",{className:"text"},e("Model v1"),".",e(" Predictions updated on 20 Jun."),v.a.createElement("br",null),e("Recovered and Deceased are statically computed.")))}));t.default=v.a.memo((function(e){var t=e.data,n=e.regionHighlighted,i=e.setRegionHighlighted,u=Object(h.a)().t,f=Object(g.a)("sortData",{sortColumn:"confirmed",isAscending:!1}),l=Object(r.a)(f,2),b=l[0],j=l[1],w=Object(p.useCallback)((function(e){j(Object(d.a)(b,(function(t){t.isAscending=!b.isAscending,t.sortColumn=e})))}),[b,j]),E=Object(p.useCallback)((function(e,n){if("stateName"!==b.sortColumn){var r=Object(a.j)(t[e],"total",b.sortColumn),i=Object(a.j)(t[n],"total",b.sortColumn);return b.isAscending?r-i:i-r}return b.isAscending?e.localeCompare(n):n.localeCompare(e)}),[b,t]),A=Object(y.e)(2,(function(){return{transform:"translate3d(0, 10px, 0)",opacity:0,config:y.b.wobbly}})),N=Object(r.a)(A,2),C=N[0];(0,N[1])({transform:"translate3d(0, 0px, 0)",opacity:1});var k=Object(p.useRef)(),D=Object(m.useIsVisible)(k);return v.a.createElement(v.a.Fragment,null,v.a.createElement(y.a.div,{className:"fineprint",style:C[0]},v.a.createElement(S,null)),v.a.createElement(y.a.div,{className:"table",style:C[1]},v.a.createElement("div",{className:"row heading"},v.a.createElement("div",{className:"cell heading",onClick:function(){return w("stateName")}},v.a.createElement("div",null,u("State/UT")),"stateName"===b.sortColumn&&v.a.createElement("div",{className:s()("sort-icon",{invert:!b.isAscending})},v.a.createElement(c.b,{size:10}))),o.m.map((function(e){return v.a.createElement(P,Object.assign({key:e},{statistic:e,sortData:b},{handleSort:function(){w(e)}}))}))),Object.keys(t).filter((function(e){var n;return"TT"!==e&&t[e]&&(null===(n=t[e].total)||void 0===n?void 0:n.confirmed)})).sort((function(e,t){return E(e,t)})).slice(0,D?Object.keys(t).length-1:10).map((function(e){return v.a.createElement(O,Object.assign({key:e,data:t[e]},{stateCode:e,regionHighlighted:n,setRegionHighlighted:i}))})),!D&&v.a.createElement("span",{className:"intersection",ref:k}),v.a.createElement(O,Object.assign({key:"TT",data:t.TT,stateCode:"TT"},{regionHighlighted:n,setRegionHighlighted:i}))))}),(function(e,t){return!!l()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(!!l()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&!!l()(e.data.TT.total.confirmed,t.data.TT.total.confirmed))}))},291:function(e,t,n){"use strict";var r=n(7);t.a=function(e){return void 0===e&&(e={laptopL:1440,laptop:1024,tablet:768}),function(){var t=Object(r.useState)(0),n=t[0],i=t[1];Object(r.useEffect)((function(){var e=function(){i(window.innerWidth)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var o=Object(r.useMemo)((function(){return Object.entries(e).sort((function(e,t){return e[1]>=t[1]?1:-1}))}),[e]);return o.reduce((function(e,t){var r=t[0],i=t[1];return n>=i?r:e}),o[0][0])}}}}]);
//# sourceMappingURL=Table.15ccb0f3.chunk.js.map
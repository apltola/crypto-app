(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],l=0,h=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(h.length)h.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1bfe0597":"05a563ac","chunk-1ef3288a":"81f39d29","chunk-3109f1e3":"f404d76b","chunk-4e3b19a1":"99c457ac","chunk-50bf5250":"7bd3ea12","chunk-7f1487ac":"8918b5df","chunk-3b260310":"6c5fed38","chunk-7a440fc0":"5601cbe1","chunk-c87f3d52":"73e58dc3"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1bfe0597":1,"chunk-1ef3288a":1,"chunk-3109f1e3":1,"chunk-4e3b19a1":1,"chunk-50bf5250":1,"chunk-7f1487ac":1,"chunk-3b260310":1,"chunk-7a440fc0":1,"chunk-c87f3d52":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1bfe0597":"04782e43","chunk-1ef3288a":"83ae3237","chunk-3109f1e3":"453ae3f6","chunk-4e3b19a1":"572c50f0","chunk-50bf5250":"83ae3237","chunk-7f1487ac":"724feb91","chunk-3b260310":"2cc9798c","chunk-7a440fc0":"da124f90","chunk-c87f3d52":"64f2aa8c"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){i=h[u],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var h=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var h=0;h<i.length;h++)t(i[h]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ce1":function(e,t,n){"use strict";var r=n("4846"),a=n.n(r);a.a},4846:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",{staticClass:"app-content"},[n("router-view")],1),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app-footer"},[n("div",[e._v("© allu 2020")])])}],c=(n("96cf"),n("1da1")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app-header"},[n("div",{staticClass:"header-left"},[n("router-link",{staticClass:"brand",attrs:{to:"/"}},[e._v(" crypto.app ")])],1),n("div",{staticClass:"header-right"},[this.$store.state.currentUser?n("div",[n("div",{staticClass:"hide-mobile"},[n("router-link",{staticClass:"header-link",attrs:{to:"/dashboard"}},[e._v(" View Portfolios ")]),n("button",{staticClass:"logout-button",on:{click:e.logout}},[e._v(" Logout "+e._s(this.$store.state.currentUser.username)+" ")])],1)]):n("div",{staticClass:"hide-mobile"},[n("router-link",{staticClass:"header-link",attrs:{to:"/auth/signin"}},[e._v(" Sign In ")]),n("router-link",{staticClass:"register",attrs:{to:"/auth/register"}},[e._v(" Register ")])],1),n("div",{staticClass:"show-mobile"},[n("button",{staticClass:"menu-button",on:{click:function(t){e.showMenu=!e.showMenu}}},[n("font-awesome-icon",{staticClass:"menu-icon",attrs:{icon:"bars"}})],1)])]),n("transition",{attrs:{name:"fade"}},[e.showMenu?n("div",{staticClass:"show-mobile mobile-menu"},[n("div",{staticClass:"mobile-header"},[n("button",{staticClass:"close-btn",on:{click:e.closeMenu}},[n("font-awesome-icon",{staticClass:"close-icon",attrs:{icon:"times"}})],1)]),this.$store.state.currentUser?n("div",{staticClass:"mobile-menu-links"},[n("router-link",{attrs:{to:"/"}},[n("button",{on:{click:e.closeMenu}},[e._v("Home")])]),n("router-link",{attrs:{to:"/dashboard"}},[n("button",{on:{click:e.closeMenu}},[e._v("Portfolios")])]),n("button",{on:{click:e.logout}},[e._v(" Logout "+e._s(this.$store.state.currentUser.username)+" ")])],1):n("div",{staticClass:"mobile-menu-links"},[n("router-link",{attrs:{to:"/auth/signin"}},[n("button",{on:{click:e.closeMenu}},[e._v("Sign In")])]),n("router-link",{attrs:{to:"/auth/register"}},[n("button",{on:{click:e.closeMenu}},[e._v("Create Account")])])],1)]):e._e()])],1)},s=[],i={name:"Header",data:function(){return{showMenu:!1}},methods:{closeMenu:function(){this.showMenu=!1},logout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showMenu=!1,t.next=3,e.$store.dispatch("logout");case 3:case"end":return t.stop()}}),t)})))()}}},l=i,h=(n("0ce1"),n("2877")),f=Object(h["a"])(l,u,s,!1,null,"57a87180",null),p=f.exports,d=n("bc3a"),m=n.n(d),b={components:{Header:p},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchCurrentUser");case 2:case"end":return t.stop()}}),t)})))()}},v=b,g=(n("5c0b"),Object(h["a"])(v,a,o,!1,null,null,null)),k=g.exports,w=n("a18c"),C=(n("d81d"),n("2f62"));r["a"].use(C["a"]);var _=new C["a"].Store({state:{currentUser:!1},mutations:{SET_CURRENTUSER:function(e,t){e.currentUser=t}},actions:{fetchCurrentUser:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,e.dispatch,t.next=3,m.a.get("/api/auth/currentuser");case 3:r=t.sent,n("SET_CURRENTUSER",r.data.currentUser);case 5:case"end":return t.stop()}}),t)})))()},register:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,e.dispatch,n.prev=1,n.next=4,m.a.post("/api/auth/signup",t);case 4:return a=n.sent,r("SET_CURRENTUSER",a.data),w["a"].push("/dashboard"),n.abrupt("return",{errors:null});case 10:if(n.prev=10,n.t0=n["catch"](1),!n.t0.response){n.next=15;break}return o=n.t0.response.data.errors.map((function(e){return e.msg})),n.abrupt("return",{errors:o});case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()},signin:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,e.dispatch,n.prev=1,n.next=4,m.a.post("/api/auth/signin",t);case 4:return a=n.sent,r("SET_CURRENTUSER",a.data),w["a"].push("/dashboard"),n.abrupt("return",{errors:null});case 10:if(n.prev=10,n.t0=n["catch"](1),!n.t0.response){n.next=15;break}return o=n.t0.response.data.errors.map((function(e){return e.msg})),n.abrupt("return",{errors:o});case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()},logout:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,m.a.post("/api/auth/signout");case 3:n("SET_CURRENTUSER",null),"/"!==w["a"].currentRoute.path&&w["a"].push("/");case 5:case"end":return t.stop()}}),t)})))()}},modules:{}}),y=n("ecee"),R=n("c074"),E=n("ad3d");y["c"].add([R["n"],R["m"],R["a"],R["o"],R["k"],R["c"],R["b"],R["i"],R["j"],R["g"],R["h"],R["f"],R["l"],R["d"],R["e"]]),r["a"].component("font-awesome-icon",E["a"]),r["a"].config.productionTip=!1,new r["a"]({router:w["a"],store:_,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),a=n("8c4f"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home"},[n("h1",[e._v("home page")])])}],u={name:"Home",components:{}},s=u,i=n("2877"),l=Object(i["a"])(s,o,c,!1,null,null,null),h=l.exports;r["a"].use(a["a"]);var f=[{path:"/",name:"Home",component:h},{path:"/auth/signin",name:"Signin",component:function(){return n.e("chunk-1ef3288a").then(n.bind(null,"4a33"))},props:{authType:"signin"}},{path:"/auth/register",name:"Register",component:function(){return n.e("chunk-50bf5250").then(n.bind(null,"73cf"))},props:{authType:"register"}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-3109f1e3").then(n.bind(null,"7277"))}},{path:"/portfolio/:portfolioId/transaction",name:"AddTransaction",component:function(){return n.e("chunk-1bfe0597").then(n.bind(null,"5233"))}},{path:"/chart/portfolio/:id",name:"CryptoChart",component:function(){return Promise.all([n.e("chunk-7f1487ac"),n.e("chunk-7a440fc0")]).then(n.bind(null,"396c"))}},{path:"/portfolio/add",name:"AddPortfolio",component:function(){return n.e("chunk-4e3b19a1").then(n.bind(null,"7ac4"))}},{path:"/manage",name:"Manage",component:function(){return n.e("chunk-c87f3d52").then(n.bind(null,"29e6"))}},{path:"/chart/crypto",name:"CryptoChart",component:function(){return Promise.all([n.e("chunk-7f1487ac"),n.e("chunk-3b260310")]).then(n.bind(null,"d144"))}}],p=new a["a"]({mode:"history",routes:f});t["a"]=p}});
//# sourceMappingURL=app.02de0ad4.js.map
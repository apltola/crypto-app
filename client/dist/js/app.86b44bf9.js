(function(e){function t(t){for(var r,a,u=t[0],c=t[1],i=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"896d3efe","chunk-4b838412":"29d0b382","chunk-58562cde":"64f7e53c","chunk-b6c4ab94":"6ef3cc18","chunk-da292776":"42287300"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-4b838412":1,"chunk-58562cde":1,"chunk-b6c4ab94":1,"chunk-da292776":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-4b838412":"5d6db9f8","chunk-58562cde":"01ee315a","chunk-b6c4ab94":"337ecd6a","chunk-da292776":"5d6db9f8"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3ce0":function(e,t,n){"use strict";var r=n("84bd"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",{staticClass:"app-content"},[n("router-view")],1),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app-footer"},[n("div",[e._v("© allu 2020")])])}],s=(n("96cf"),n("1da1")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app-header"},[n("div",{staticClass:"header-left"},[n("router-link",{staticClass:"brand",attrs:{to:"/"}},[e._v(" crypto.app ")])],1),n("div",{staticClass:"header-right"},[this.$store.state.currentUser?n("div",[n("div",{staticClass:"hide-mobile"},[n("router-link",{staticClass:"dashboard",attrs:{to:"/dashboard"}},[e._v(" View Portfolios ")]),n("button",{on:{click:e.logout}},[e._v(" Logout "+e._s(this.$store.state.currentUser.username)+" ")])],1)]):n("div",{staticClass:"hide-mobile"},[n("router-link",{staticClass:"signin",attrs:{to:"/auth/signin"}},[e._v(" Sign In ")]),n("router-link",{staticClass:"register",attrs:{to:"/auth/register"}},[e._v(" Register ")])],1),n("div",{staticClass:"show-mobile"},[n("button",{staticClass:"menu-button",on:{click:function(t){e.showMenu=!e.showMenu}}},[n("font-awesome-icon",{staticClass:"menu-icon",attrs:{icon:"bars"}})],1)])]),n("transition",{attrs:{name:"fade"}},[e.showMenu?n("div",{staticClass:"show-mobile mobile-menu"},[n("div",{staticClass:"mobile-header"},[n("button",{staticClass:"close-btn",on:{click:e.closeMenu}},[n("font-awesome-icon",{staticClass:"close-icon",attrs:{icon:"times"}})],1)]),this.$store.state.currentUser?n("div",{staticClass:"mobile-menu-links"},[n("router-link",{attrs:{to:"/dashboard"}},[n("button",{on:{click:e.closeMenu}},[e._v("View Portfolios")])]),n("button",{on:{click:e.logout}},[e._v(" Logout "+e._s(this.$store.state.currentUser.username)+" ")])],1):n("div",{staticClass:"mobile-menu-links"},[n("router-link",{attrs:{to:"/auth/signin"}},[n("button",{on:{click:e.closeMenu}},[e._v("Sing In")])]),n("router-link",{attrs:{to:"/auth/register"}},[n("button",{on:{click:e.closeMenu}},[e._v("Register")])])],1)]):e._e()])],1)},c=[],i={name:"Header",data:function(){return{showMenu:!1}},methods:{closeMenu:function(){this.showMenu=!1},logout:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showMenu=!1,t.next=3,e.$store.dispatch("logout");case 3:case"end":return t.stop()}}),t)})))()}}},l=i,d=(n("3ce0"),n("2877")),p=Object(d["a"])(l,u,c,!1,null,"3f129cf8",null),h=p.exports,f=n("bc3a"),m=n.n(f),b={components:{Header:h},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchCurrentUser");case 2:case"end":return t.stop()}}),t)})))()}},v=b,g=(n("5c0b"),Object(d["a"])(v,a,o,!1,null,null,null)),w=g.exports,k=n("a18c"),_=(n("d81d"),n("2f62"));r["a"].use(_["a"]);var C=new _["a"].Store({state:{currentUser:null},mutations:{SET_CURRENTUSER:function(e,t){e.currentUser=t}},actions:{fetchCurrentUser:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,e.dispatch,t.next=3,m.a.get("/api/auth/currentuser");case 3:r=t.sent,n("SET_CURRENTUSER",r.data.currentUser);case 5:case"end":return t.stop()}}),t)})))()},register:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,e.dispatch,n.prev=1,n.next=4,m.a.post("/api/auth/signup",t);case 4:return a=n.sent,r("SET_CURRENTUSER",a.data),k["a"].push("/dashboard"),n.abrupt("return",{errors:null});case 10:if(n.prev=10,n.t0=n["catch"](1),!n.t0.response){n.next=15;break}return o=n.t0.response.data.errors.map((function(e){return e.msg})),n.abrupt("return",{errors:o});case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()},signin:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,e.dispatch,n.prev=1,n.next=4,m.a.post("/api/auth/signin",t);case 4:return a=n.sent,r("SET_CURRENTUSER",a.data),k["a"].push("/dashboard"),n.abrupt("return",{errors:null});case 10:if(n.prev=10,n.t0=n["catch"](1),!n.t0.response){n.next=15;break}return o=n.t0.response.data.errors.map((function(e){return e.msg})),n.abrupt("return",{errors:o});case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()},logout:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,m.a.post("/api/auth/signout");case 3:n("SET_CURRENTUSER",null),"/"!==k["a"].currentRoute.path&&k["a"].push("/");case 5:case"end":return t.stop()}}),t)})))()}},modules:{}}),y=n("ecee"),R=n("c074"),E=n("ad3d");y["c"].add([R["d"],R["c"],R["a"],R["e"],R["b"]]),r["a"].component("font-awesome-icon",E["a"]),r["a"].config.productionTip=!1,new r["a"]({router:k["a"],store:C,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"84bd":function(e,t,n){},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),a=n("8c4f"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home"},[n("h1",[e._v("home page")])])}],u={name:"Home",components:{}},c=u,i=n("2877"),l=Object(i["a"])(c,o,s,!1,null,null,null),d=l.exports;r["a"].use(a["a"]);var p=[{path:"/",name:"Home",component:d},{path:"/auth/signin",name:"Signin",component:function(){return n.e("chunk-4b838412").then(n.bind(null,"4a33"))},props:{authType:"signin"}},{path:"/auth/register",name:"Register",component:function(){return n.e("chunk-da292776").then(n.bind(null,"73cf"))},props:{authType:"register"}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-58562cde").then(n.bind(null,"7277"))}},{path:"/portfolio/:portfolioId/transaction",name:"AddTransaction",component:function(){return n.e("chunk-b6c4ab94").then(n.bind(null,"5233"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],h=new a["a"]({mode:"history",routes:p});t["a"]=h}});
//# sourceMappingURL=app.86b44bf9.js.map
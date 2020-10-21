(function(e){function t(t){for(var n,a,s=t[0],i=t[1],c=t[2],p=0,l=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"89f8f8a6"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"f597c10e"}[e]+".css",o=i.p+n,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===n||p===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],p=c.getAttribute("data-href");if(p===n||p===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],f.parentNode.removeChild(f),r(u)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=u);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=s(e);var l=new Error;c=function(t){p.onerror=p.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=p;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0214":function(e,t,r){"use strict";var n=r("c556"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("main",{staticClass:"app-content"},[r("router-view")],1),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"app-footer"},[r("div",[e._v(" this is the footer ")])])}],u=(r("96cf"),r("1da1")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"app-header"},[r("div",{staticClass:"header-left"},[r("router-link",{staticClass:"brand",attrs:{to:"/"}},[e._v(" crypto.app ")])],1),r("div",{staticClass:"header-right"},[this.$store.state.currentUser?r("div",[r("router-link",{staticClass:"dashboard",attrs:{to:"/dashboard"}},[e._v(" Go To Dashboard ")]),r("button",{on:{click:e.logout}},[e._v(" Logout "+e._s(this.$store.state.currentUser.username)+" ")])],1):r("div",[r("router-link",{staticClass:"signin",attrs:{to:"/auth/signin"}},[e._v(" Sign In ")]),r("router-link",{staticClass:"register",attrs:{to:"/auth/register"}},[e._v(" Register ")])],1)])])},i=[],c={name:"Header",methods:{logout:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:case"end":return t.stop()}}),t)})))()}}},p=c,l=(r("0214"),r("2877")),f=Object(l["a"])(p,s,i,!1,null,"315dedc8",null),h=f.exports,d=r("bc3a"),m=r.n(d),v={components:{Header:h},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchCurrentUser");case 2:case"end":return t.stop()}}),t)})))()}},g=v,b=(r("5c0b"),Object(l["a"])(g,a,o,!1,null,null,null)),w=b.exports,_=r("a18c"),y=(r("d81d"),r("2f62"));n["a"].use(y["a"]);var R=new y["a"].Store({state:{currentUser:null},mutations:{SET_CURRENTUSER:function(e,t){e.currentUser=t}},actions:{fetchCurrentUser:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,e.dispatch,t.next=3,m.a.get("/api/auth/currentuser");case 3:n=t.sent,r("SET_CURRENTUSER",n.data.currentUser);case 5:case"end":return t.stop()}}),t)})))()},register:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,e.dispatch,r.prev=1,r.next=4,m.a.post("/api/auth/signup",t);case 4:return a=r.sent,n("SET_CURRENTUSER",a.data),_["a"].push("/dashboard"),r.abrupt("return",{errors:null});case 10:if(r.prev=10,r.t0=r["catch"](1),!r.t0.response){r.next=15;break}return o=r.t0.response.data.errors.map((function(e){return e.msg})),r.abrupt("return",{errors:o});case 15:case"end":return r.stop()}}),r,null,[[1,10]])})))()},signin:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,e.dispatch,r.prev=1,r.next=4,m.a.post("/api/auth/signin",t);case 4:return a=r.sent,n("SET_CURRENTUSER",a.data),_["a"].push("/dashboard"),r.abrupt("return",{errors:null});case 10:if(r.prev=10,r.t0=r["catch"](1),!r.t0.response){r.next=15;break}return o=r.t0.response.data.errors.map((function(e){return e.msg})),r.abrupt("return",{errors:o});case 15:case"end":return r.stop()}}),r,null,[[1,10]])})))()},logout:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,m.a.post("/api/auth/signout");case 3:r("SET_CURRENTUSER",null),"/"!==_["a"].currentRoute.path&&_["a"].push("/");case 5:case"end":return t.stop()}}),t)})))()}},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:_["a"],store:R,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(e,t,r){},a18c:function(e,t,r){"use strict";r("d3b7");var n=r("2b0e"),a=r("8c4f"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"home"},[r("h1",[e._v("home component")])])}],s={name:"Home",components:{}},i=s,c=r("2877"),p=Object(c["a"])(i,o,u,!1,null,null,null),l=p.exports;n["a"].use(a["a"]);var f=[{path:"/",name:"Home",component:l},{path:"/auth/signin",name:"Signin",component:function(){return r.e("about").then(r.bind(null,"4a33"))},props:{authType:"signin"}},{path:"/auth/register",name:"Register",component:function(){return r.e("about").then(r.bind(null,"73cf"))},props:{authType:"register"}},{path:"/dashboard",name:"Dashboard",component:function(){return r.e("about").then(r.bind(null,"7277"))}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],h=new a["a"]({mode:"history",routes:f});t["a"]=h},c556:function(e,t,r){}});
//# sourceMappingURL=app.638f031f.js.map
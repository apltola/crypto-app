(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"4a33":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v("Sign In")]),t("AuthForm",{attrs:{authType:"signin"}})],1)},a=[],n=t("7289"),o={name:"Signin",components:{AuthForm:n["a"]}},u=o,i=t("2877"),c=Object(i["a"])(u,s,a,!1,null,"cd568c90",null);r["default"]=c.exports},"53fe":function(e,r,t){},7277:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("h1",[e._v("dashboard")]),t("div",[e._v(" you are signed in as: "+e._s(this.$store.state.currentUser.username||"")+" ")])])},a=[],n=t("a18c"),o={name:"Dashboard",mounted:function(){this.$store.state.currentUser||n["a"].push("/")}},u=o,i=t("2877"),c=Object(i["a"])(u,s,a,!1,null,null,null);r["default"]=c.exports},7289:function(e,r,t){"use strict";var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container"},[t("form",{staticClass:"formi",on:{submit:e.onSubmit}},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username"},domProps:{value:e.username},on:{input:function(r){r.target.composing||(e.username=r.target.value)}}}),t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),"register"===e.authType?t("label",{attrs:{for:"confirmpw"}},[e._v("Confirm Password")]):e._e(),"register"===e.authType?t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPw,expression:"confirmPw"}],attrs:{type:"password",name:"confirmpw"},domProps:{value:e.confirmPw},on:{input:function(r){r.target.composing||(e.confirmPw=r.target.value)}}}):e._e(),t("button",{staticClass:"submit",class:{disabled:""===e.username||""===e.password},attrs:{type:"submit",disabled:""===e.username||""===e.password}},[e._v(" Submit ")]),e.errors.length>0?t("div",{staticClass:"error"},e._l(e.errors,(function(r){return t("div",{key:r.msg},[e._v(" "+e._s(r)+" ")])})),0):e._e()])])},a=[],n=(t("96cf"),t("1da1")),o=(t("bc3a"),{name:"AuthForm",props:["authType"],data:function(){return{username:"",password:"",confirmPw:"",errors:[]}},methods:{onSubmit:function(e){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.preventDefault(),r.errors=[],"register"!==r.authType||r.password===r.confirmPw){t.next=5;break}return r.errors=["passwords don't match"],t.abrupt("return");case 5:if(s={username:r.username,password:r.password},a=null,"register"!==r.authType){t.next=13;break}return t.next=10,r.$store.dispatch("register",s);case 10:a=t.sent,t.next=16;break;case 13:return t.next=15,r.$store.dispatch("signin",s);case 15:a=t.sent;case 16:a.errors&&(r.errors=a.errors);case 17:case"end":return t.stop()}}),t)})))()}}}),u=o,i=(t("7aa4"),t("2877")),c=Object(i["a"])(u,s,a,!1,null,"778aae8a",null);r["a"]=c.exports},"73cf":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v("Create New Account")]),t("AuthForm",{attrs:{authType:"register"}})],1)},a=[],n=t("7289"),o={name:"Register",components:{AuthForm:n["a"]}},u=o,i=t("2877"),c=Object(i["a"])(u,s,a,!1,null,"5e2576ba",null);r["default"]=c.exports},"7aa4":function(e,r,t){"use strict";var s=t("53fe"),a=t.n(s);a.a},f820:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"about"},[t("h1",[e._v("This is an about page")])])}],n=t("2877"),o={},u=Object(n["a"])(o,s,a,!1,null,null,null);r["default"]=u.exports}}]);
//# sourceMappingURL=about.533f35a8.js.map
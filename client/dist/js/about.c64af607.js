(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"4a33":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Sign In")]),a("AuthForm",{attrs:{authType:"signin"}})],1)},r=[],s=a("7289"),o={name:"Signin",components:{AuthForm:s["a"]}},u=o,i=a("2877"),c=Object(i["a"])(u,n,r,!1,null,"cd568c90",null);t["default"]=c.exports},7289:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("form",{staticClass:"formi",on:{submit:e.onSubmit}},[a("label",{attrs:{for:"username"}},[e._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),"register"===e.authType?a("label",{attrs:{for:"confirmpw"}},[e._v("Confirm Password")]):e._e(),"register"===e.authType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPw,expression:"confirmPw"}],attrs:{type:"password",name:"confirmpw"},domProps:{value:e.confirmPw},on:{input:function(t){t.target.composing||(e.confirmPw=t.target.value)}}}):e._e(),a("button",{staticClass:"submit",attrs:{type:"submit"}},[e._v(" Submit ")])])])},r=[],s={name:"AuthForm",props:["authType"],data:function(){return{username:"",password:"",confirmPw:""}},methods:{onSubmit:function(e){e.preventDefault(),console.log("submittia");this.authType}}},o=s,u=(a("fe05"),a("2877")),i=Object(u["a"])(o,n,r,!1,null,"60fd33b5",null);t["a"]=i.exports},"73cf":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Create New Account")]),a("AuthForm",{attrs:{authType:"register"}})],1)},r=[],s=a("7289"),o={name:"Register",components:{AuthForm:s["a"]}},u=o,i=a("2877"),c=Object(i["a"])(u,n,r,!1,null,"5e2576ba",null);t["default"]=c.exports},"929a":function(e,t,a){},f820:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],s=a("2877"),o={},u=Object(s["a"])(o,n,r,!1,null,null,null);t["default"]=u.exports},fe05:function(e,t,a){"use strict";var n=a("929a"),r=a.n(n);r.a}}]);
//# sourceMappingURL=about.c64af607.js.map
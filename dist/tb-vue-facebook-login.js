!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define("tb-vue-facebook-login",["vue"],n):"object"==typeof exports?exports["tb-vue-facebook-login"]=n(require("vue")):e["tb-vue-facebook-login"]=n(e.vue)}(window,function(e){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(n,t){n.exports=e},function(e,n,t){"use strict";t.r(n);t(0);var o=function(){var e=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;var i=function(e,n,t,o,i,s,r,c){var a,u="function"==typeof e?e.options:e;if(n&&(u.render=n,u.staticRenderFns=t,u._compiled=!0),o&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),r?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=a):i&&(a=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(u.functional){u._injectStyles=a;var l=u.render;u.render=function(e,n){return a.call(n),l(e,n)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:u}}({name:"FacebookLoginComponent",methods:{emitFacebookAuthSuccess:function(e){this.$emit("authSuccess",e)},emitLoginSuccessWithFBToken:function(e){this.$emit("loginSuccess",e),this.disconnectGoogle()},emitFacebookAuthFail:function(e){this.$emit("authFail",e)},emitLoginFailWithFBToken:function(e){this.$emit("loginFail",e)},setup:function(){window.emitFacebookAuthSuccess=this.emitFacebookAuthSuccess.bind(this),window.emitLoginSuccessWithFBToken=this.emitLoginSuccessWithFBToken.bind(this),window.emitFacebookAuthFail=this.emitFacebookAuthFail.bind(this),window.emitLoginFailWithFBToken=this.emitLoginFailWithFBToken.bind(this)},disconnectGoogle:function(){delete window.emitFacebookAuthSuccess,delete window.emitFacebookAuthFail,delete window.emitLoginFailWithFBToken,delete window.emitLoginSuccessWithFBToken}},created:function(){this.setup()}},o,[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{},[n("script",{attrs:{type:"application/javascript"}},[this._v("\n    window.fbAsyncInit = function() {\n      var id = document.querySelector(\"meta[name='facebook-signin-app_id']\").getAttribute(\"content\");\n      FB.init({\n        appId      : id,\n        cookie     : true,\n        xfbml      : true,\n        version    : 'v3.2'\n      });\n\n      window.statusChangeCallback = function(response) {\n        window.emitFacebookAuthSuccess(response);\n        if (response.status !== \"unknown\") {\n            sendToken(response.authResponse.accessToken);\n            FB.logout(function(response){});\n        }\n      }\n\n      FB.getLoginStatus(function(response) {\n          window.statusChangeCallback(response);\n      });\n      FB.AppEvents.logPageView();\n\n      function sendToken(token) {\n        var xhr = new XMLHttpRequest();\n        xhr.open('POST', window.facebookAuthUrl);\n        xhr.setRequestHeader('Content-Type', 'application/json');\n        xhr.onload = function() {\n          if (xhr.status === 200) {\n            window.emitLoginSuccessWithFBToken(xhr.response)\n          } else {\n            window.emitLoginFailWithFBToken(xhr.response)\n          }\n          FB.logout(function(){});\n        };\n        xhr.send(JSON.stringify({ token }));\n      }\n    };\n\n    (function(d, s, id){\n      var js, fjs = d.getElementsByTagName(s)[0];\n      if (d.getElementById(id)) {return;}\n      js = d.createElement(s); js.id = id;\n      js.src = \"https://connect.facebook.net/en_US/sdk.js\";\n      fjs.parentNode.insertBefore(js, fjs);\n    }(document, 'script', 'facebook-jssdk'));\n  ")]),this._v(" "),n("fb:login-button",{pre:!0,attrs:{size:"large",scope:"public_profile,email",onlogin:"checkLoginState();"}},[this._v("\n    Sign in with Facebook\n  ")]),this._v(" "),n("script",{attrs:{type:"application/javascript"}},[this._v("\n    function checkLoginState() {\n      FB.getLoginStatus(function(response) {\n        window.statusChangeCallback(response);\n      });\n    }\n  ")])],1)}],!1,null,"34994c6b",null);i.options.__file="src/facebook-login-component.vue";var s=i.exports;function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t.d(n,"default",function(){return c});var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,o=[{key:"install",value:function(e,n){if(!n.loginUrl)throw"Login URL not defined for facebook authentication!";window.loginUrlForFacebookToken=n.loginUrl,e.component("facebook-login-component",s)}}],(t=null)&&r(n.prototype,t),o&&r(n,o),e}()}])});
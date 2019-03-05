# Vue facebook login plugin

### Usage
Install in your VueJS project:

```bash
npm i -s tb-vue-facebook-login
```

Import in __main.js__ and install:

```javascript
import FacebookLoginPlugin from 'tb-vue-facebook-login'

Vue.use(FacebookLoginPlugin, { login: "http://your-website.com/api/login" })
// /login will receive { "token": "ejysdfusdh.alfjsdk.sdfsdfds" }
```

A global _facebook-login-component_ tag will be installed.<br>

Add the following tag to your index.html:
```html
<meta name="facebook-signin-app_id" content="yourappid">
```

Use _facebook-login-component_ in any component you wish:

```html
<template>
  <div id="auth-popup">
    <facebook-login-component
      @loginSuccess="loginSuccessHandler">
    </facebook-login-component>
  </div>
</template>
```

<hr>

And you are good to go!

Emitted events and props:

```html
<template>
  <div id="auth-popup">
    <facebook-login-component

      @loginSuccess="methodCalledWhenLoginIsCompletedOnYourSite"

      @authSuccess="methodCalledWhenFacebookAuthTokenArrived"

      @loginFail="methodCalledWhenLoginFailedOnYourSite"

      @authFail="methodCalledWhenFacebookAuthFailed">

    </facebook-login-component>
  </div>
</template>
```

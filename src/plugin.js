import Vue from 'vue'
import FacebookLoginComponent from './facebook-login-component.vue'

export default class FacebookLoginPlugin {

  static install(Vue, options) {
    if (!options.loginUrl) throw "Login URL not defined for facebook authentication!";
    window.loginUrlForFacebookToken = options.loginUrl;
    Vue.component('facebook-login-component', FacebookLoginComponent);
  }

}

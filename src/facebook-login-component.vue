<template lang="html">
  <div class="">
    <script type="application/javascript">
      window.fbAsyncInit = function() {
        var id = document.querySelector("meta[name='facebook-signin-app_id']").getAttribute("content");
        FB.init({
          appId      : id,
          cookie     : true,
          xfbml      : true,
          version    : 'v3.2'
        });

        window.statusChangeCallback = function(response) {
          window.emitFacebookAuthSuccess(response);
          if (response.status !== "unknown") {
              sendToken(response.authResponse.accessToken);
          }
        }

        FB.getLoginStatus(function(response) {
            window.statusChangeCallback(response);
        });
        FB.AppEvents.logPageView();

        function sendToken(token) {
          var xhr = new XMLHttpRequest();
          xhr.open('POST', window.loginUrlForFacebookToken);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status === 200) {
              window.emitLoginSuccessWithFBToken(xhr.response)
            } else {
              window.emitLoginFailWithFBToken(xhr.response)
            }
          };
          xhr.send(JSON.stringify({ token }));
        }
      };

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>

    <fb:login-button
      v-pre
      size="large"
      scope="public_profile,email"
      onlogin="attemptLogin();">
      Sign in with Facebook
    </fb:login-button>

    <script type="application/javascript">
      function attemptLogin() {
        FB.login(function(response) {
          window.statusChangeCallback(response);
        }, {scope: "email"});
      }
    </script>
  </div>
</template>

<script>
export default {
  name: "FacebookLoginComponent",
  methods: {
    emitFacebookAuthSuccess: function(res) {
      this.$emit("authSuccess", res)
    },
    emitLoginSuccessWithFBToken: function(res) {
      this.$emit("loginSuccess", res)
      this.disconnectGoogle()
    },
    emitFacebookAuthFail: function(res) {
      this.$emit("authFail", res)
    },
    emitLoginFailWithFBToken: function(res) {
      this.$emit("loginFail", res)
    },
    setup: function() {
      window.emitFacebookAuthSuccess = this.emitFacebookAuthSuccess.bind(this)
      window.emitLoginSuccessWithFBToken = this.emitLoginSuccessWithFBToken.bind(this)
      window.emitFacebookAuthFail = this.emitFacebookAuthFail.bind(this)
      window.emitLoginFailWithFBToken = this.emitLoginFailWithFBToken.bind(this)
    },
    disconnectGoogle: function() {
      delete window["emitFacebookAuthSuccess"]
      delete window["emitFacebookAuthFail"]
      delete window["emitLoginFailWithFBToken"]
      delete window["emitLoginSuccessWithFBToken"]
    }
  },
  created() {
    this.setup()
  }
}
</script>

<style lang="css" scoped>
</style>

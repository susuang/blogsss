<template>
  <div class="login">
  	<div class="logo">
  		<img src="./assets/bog-logo.png" height="200px">
  		<h1>{{ msg }}</h1>
  	</div>
    <div class="content">
    	<form class="loginForm">
      <input type="text" v-model= "loginForm.userName" class="form-control" placeholder="Plass enter your username">
      <input type="password" v-model= "loginForm.password" class="form-control" placeholder="Plass enter your password">
      <button class="btn loginBtn" data-loading-text="Loading..." type="button" @click="doLogin()"> LOGIN</button>
      <button class="btn enrollBtn" data-loading-text="Enroll..." type="button"> 注册</button>
    	</form>
    </div>
	</div>
</template>

<script>
/*import {mapGetters, mapMutations, mapActions} from 'vuex';*/
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Login page',
      loginForm: {
      	userName: '',
      	password: ''
      }
    }
  },
  methods: {
  	doLogin() {
  		const _self = this;
  		const loginForm = _self.loginForm;
  		if(loginForm.userName == '' || loginForm.password == '') {
  			alert("用户名或密码不能为空！")
  		}
  		$(".loginBtn").button('loading');
      $(".enrollBtn").hide(500);
      console.info(_self.$store.state);
      /*$.post(api + '/doLogin', loginForm, function(){
      	
      });*/
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login {
		width: 100%;
		height: 100%;
  }
  .logo {color: #53538f;}
	.content {margin:0 auto;background: #e2e2f6;width: 50%;;max-width: 500px;padding: 30px;
						border-radius: 10px}
	.loginForm {margin:0 auto;}
	.loginForm .form-control {margin:10px 0;height: 50px;}
	.loginForm .loginBtn,.enrollBtn {background: #53538F;color: #fff;font-size: 20px;}
	.enrollBtn {background: #f5c7bc;font-size: 12px;}
</style>

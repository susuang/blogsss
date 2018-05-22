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
import Vue from 'vue';
import {mapActions} from 'vuex';
import {getCookie, setCookie} from '@/util/cookie'
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
  	...mapActions([
      'updateUserInfo'
    ]),
  	doLogin() {
  		const _self = this;
  		const loginForm = _self.loginForm;
  		const api = _self.$store.state.api;
  		if(loginForm.userName == '' || loginForm.password == '') {
  			alert("用户名或密码不能为空！")
  			return ;
  		}
  		$(".loginBtn").button('loading');
      $(".enrollBtn").hide(500);
      /*this.$shiLoading.open();*/
     this.$shiMessage.error({
     	msg:'错误',
     	callback: function(){
     		console.info(1);
     	}
     });
      /*$.post(api + '/doLogin', loginForm, function(result){
      	if(!result.success) {
      		alert(result.msg);
      		$(".loginBtn").button('reset');
      		$(".enrollBtn").show(500);
      		return ;
      	}else {
      		setCookie("session", result.token, 2);
      		_self.updateUserInfo({//修改vuex的值
      			name:loginForm.userName,
      			login:true
      		});
      		_self.$router.push('/home');
      	}
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

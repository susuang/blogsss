<template>
  <div class="home">
  	<header>
  		<img class="blog-text" src="../assets/blog-name.png" />
  		<nav>
  			<a>首页</a>
  			<a>文章</a>
  			<a>学无止境</a>
  			<a>关于我</a>
  		</nav>
  		<img class="logo-home" src="../assets/bog-logo.png" />
  	</header>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: this.$store.state.userName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
	margin: 0 auto;
	height: 100%;
	width: 100%;
	max-width: 980px;
	background: #fafcfe url(../assets/blog-bg.png) no-repeat;
	background-size: 100%;
	background-position-y: 100px;
}
header {position: relative;height:130px;text-align: left;}
.blog-text {
	position: absolute;
	top: 20%;
  left: 10%;
	width: 25%;
}
.logo-home {
	position: absolute;
	top: 6%;
  right: 2%;
	width: 15%;
}
nav {
	position: absolute;
	bottom: 6%;
	left: 12%;
	padding: 0 5px;
	background: #53538f;
	border-radius: 10px;
}
nav a {
	display: inline-block;
	padding: 5px 40px;
	color: #fff;
	font-size: 17px;
}
</style>

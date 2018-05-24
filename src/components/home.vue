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
	height: 100%;
	widows: 100%;
	background: #dbe0e6;
}
header {position: relative;margin: 0 auto;height:150px;background: #fafcfe;text-align: left;}
.blog-text {
	position: absolute;
	top: 20%;
  left: 10%;
	width: 40%;
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

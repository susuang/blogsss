const http 								= require('http')
const webpack							= require('webpack')
const express             = require('express')
const app                 = express()

//导入webpack的配置文件
const webpackConfig				= require('../build/webpack.base.conf.js')
var compiler = webpack(webpackConfig);
 // Step 2: 将编译器挂载给 webpack dev middleware
 const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true
  }
});
app.use(compiler)

// 处理根目录的get请求
app.get('/doLogin.action',function(req,res){
    res.sendfile('public/main.html') ;
    console.log('main page is required ');
}) ;


// 监听3000端口
var server = http.createServer(app);
server.listen(process.env.PORT || 8080, function() {
  console.log("Listening on %j", server.address());
});
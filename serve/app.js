
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var multer  = require('./models/Multer');//用法https://github.com/expressjs/multer

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('photos', path.join(__dirname, 'public/photos'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.logger('dev'));
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/', routes.photos.photosList);
app.get('/upload', routes.photos.upload);
app.post('/upload', routes.photos.submit);
app.get('/users', user.list);
app.post('/doLogin',function(req,res){
	const user = {
		"admin":'123456'
	};
	const vUser = req.body;
	var result = {};
	if(!user.hasOwnProperty(vUser.userName)) {
		result["success"] = false
		result["msg"] = "不存在该用户!"
	}else {
		result["success"] = true
		result["msg"] = "登入成功!"
		if(user[vUser.userName] != vUser.password){
			result["success"] = false
			result["msg"] = "密码不正确!"
		}
	}
	res.send(result);
}) ;
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

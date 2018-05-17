const crypto = require('crypto');//nodejs的内置模块 加密
//const hmac = crypto.createHmac('sha256', 'blogsss');如果这样写，再第二次操作的时候就会报”HashUpdate fail“
/*
 * GET users listing.
 */
const user = {
	"admin":'123456'
};

exports.doLogin = function(req, res, next){
  const vUser = req.body;
	var result = {};
	if(!user.hasOwnProperty(vUser.userName)) {
		result["success"] = false
		result["msg"] = "不存在该用户!"
	}else {
		result["success"] = false
		result["msg"] = "密码不正确!"
		if(user[vUser.userName] == vUser.password){
			//const hash = hmac.update(vUser.userName+"date="+new Date()).digest('hex');
			const hash = crypto.createHmac('sha256', 'blogsss').update(vUser.userName+"date="+new Date()).digest('hex');
			result["success"] = true
			result["msg"] = "登入成功!"
			result["token"] = hash
		}
	}
	res.send(result);
};
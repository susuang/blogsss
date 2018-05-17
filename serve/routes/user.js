
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
		result["success"] = true
		result["msg"] = "登入成功!"
		if(user[vUser.userName] != vUser.password){
			result["success"] = false
			result["msg"] = "密码不正确!"
		}
	}
	res.send(result);
};
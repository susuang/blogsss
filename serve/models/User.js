var redis = require('redis');
var bcrypt = require('bcrypt');
var db = redis.createClient();

function User(obj) {
    for(var key in obj) {
        this[key] = obj[key];
    }
}

User.prototype =  {
    save: function() {
        if(this.userId) {

        }else {
            var _self = this;

        }
    },
    //加密
    hashPassword: function(fn) {
        var _self = this;
        bcrypt.genSalt(12, function(err, salt) {
            if(err) return fn(err);
            _self.salt = salt;
            bcrypt.hash(_self.pass, salt, function(err, hash) {
                if(err) return fn(err);
                _self.pass = hash;
                fn();
            });
        });
    }
};

module.exports = User;
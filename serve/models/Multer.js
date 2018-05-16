var multer = require('multer');//参考http://www.jb51.net/article/95488.htm
var storage = multer.diskStorage({
    //设置上传后文件的路径
    destination: function(req, file, cd) {
        cd(null, './public/photos')
    },
    //给上传的文件重命名，获取新的后缀名
    filename: function(req, file, cd) {
        var fileFomat = (file.originalname).split(".");
        cd(null, file.fieldname +'-'+Date.now()+'.'+fileFomat[fileFomat.length-1]);
    }
});

var upload = multer({
    storage: storage
});

module.exports = upload;
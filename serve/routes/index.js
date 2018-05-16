var photos = require('./photos');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
 * GET photo page.
 */
exports.photos = photos;

/*
 * UPLOAD photo page.
 */
/*exports.upload = photos.upload;*/
/*exports.upload = function(req, res){
    res.render('upload', { 
        title: 'Photos up'
    });
};*/
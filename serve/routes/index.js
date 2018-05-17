const photos = require('./photos');
const user = require('./user');
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

exports.user = user;
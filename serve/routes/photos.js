var fs = require('fs');
var path = require('path');
var multer  = require('../models/Multer');
var uploadPhoto = multer.single('image');
var photos = [];

photos.push({
    name: "node.js Logo",
    path: "http://nodejs.org/images/logos/nodejs-green.png"
});

photos.push({
    name: "Ryan Speaking",
    path: "http://nodejs.org/images/ryan-speaker.jpg"
});

exports.photosList = function(req, res, next){
    res.render('photos', { 
        title: 'Photos',
        photos: photos 
    });
};

exports.upload = function(req, res){
    res.render('upload', { 
        title: 'Photos upload'
    });
};

exports.submit = function(req, res, next){
    uploadPhoto(req, res, function(err){
        if(err) { return next(err);}
        var name = req.body.name || req.file.filename;
        photos.push({
            name: name,
            path: "/photos/"+req.file.filename
        });
        res.redirect('/');
    });
}

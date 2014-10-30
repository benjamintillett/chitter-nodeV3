var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Message = mongoose.model('Message');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Message.find(function (err, messages) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      messages: messages,
      username: req.session.username
    });
  });
});

router.post("/", function (req,res,next){

  var message = new Message({ text: req.body.message });
  message.save(function (err, fluffy) {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('new',{
        message: message
      })
    }
  });
});

router.post("/signup",function(req,res,next){
  req.session.username = req.body.username;
  Message.find(function (err, messages) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      messages: messages,
      username: req.session.username
    });
  });


})
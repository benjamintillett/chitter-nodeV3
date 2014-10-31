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
      username: req.session.username,
      alert: req.flash('alert'),
      users_online: users_online,
      user_colors: user_colors
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
      req.flash('alert', "Thankyou for messaging!")
      res.redirect("/")
    }
  });
});

router.post("/signout",function(req,res,next){
  req.session.username = null;
  res.redirect("/")
});

router.post("/signup",function(req,res,next){
  req.session.username = req.body.username;
  users_online.push(req.body.username)
  res.redirect("/");
})



var users_online = ["Benjamin Tillett"]
var user_colors = ["info", "success","danger","warning","active"]








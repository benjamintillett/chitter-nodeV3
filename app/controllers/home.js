var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Message = mongoose.model('Message'),
  User = mongoose.model('User');


module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  getUsers(function(){
    Message.find(function (err, messages) {     
      if (err) return next(err);
      res.render('index', {
        title: 'Node Chat',
        messages: messages.reverse(),
        username: req.session.username,
        alert: req.flash('alert'),
        users_online: users_online,
        user_colors: user_colors
      });
    });
  });

});

router.post("/", function (req,res,next){

  var message = new Message({ text:     req.body.message, 
                              user_id:  req.session.user_id,
                              color:    req.session.color, 
                              username: req.session.username });
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
  User.remove({ _id: req.session.user_id },function(err,user){
    req.session.username = null;
    res.redirect("/")
  });
});

router.post("/signup",function(req,res,next){
  User.count(function(err,count){
    var user = new User({username: req.body.username, color: user_colors[count%6] });
    user.save(function (err, user) {
      if (err) {
        return console.error(err);
      }
      else {
        req.session.username = req.body.username;
        req.session.user_id = user.id
        req.session.color = user.color
        res.redirect("/");    
      }
    });
  });
});





var users_online;

function getUsers(callback){
  User.find(function (err, users) {
      if (err) {
        return console.error(err);
      }
      else {
        users_online = users     
        callback();
      }
  });
}

var user_colors = ["info", "success","danger","warning","active"]






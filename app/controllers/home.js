var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Peep = mongoose.model('Peep');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  Peep.find(function (err, peeps) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      peeps: peeps
    });
  });
});

router.post("/", function (req,res,next){

  var peep = new Peep({ peep: "This is the first peep im goingto save in mongodb"});
  peep.save(function (err, fluffy) {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('new')
    }
  });
});
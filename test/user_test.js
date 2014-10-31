process.env.NODE_ENV = 'test';
var expect = require('expect.js');
var mongoose = require('mongoose');
var User = require('../app/models/user');
var User = mongoose.model('User');
mongoose.connect('mongodb://localhost/chitter-node3-test');

describe("Users",function(){
	it("a user can be created",function(){
		var user = new User({ username: "test", password: "test password" });
  		user.save(function() {
  			User.count(function(count){
  				expect(count).to.eql(1);
  			});
		});
	});
});

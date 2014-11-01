process.env.NODE_ENV = 'test';
var server = require('../app');
var expect = require('expect.js')
var Browser = require('zombie');
var io = require('socket.io-client');
var socketCleaner = require('./socketCleaner.js');
var mongoose = require('mongoose');

  beforeEach(function (done) {   
      mongoose.connect('mongodb://localhost/chitter-node3-test', function(){
          mongoose.connection.db.dropDatabase(function(){
              done()
          })    
      })
  })

describe('Signup feature', function() {
  var browser;
  var socket;
  socketCleaner()
  
  before(function() {
    this.server = server.listen(3000);
    // initialize the browser using the same port as the test application
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    browser.visit('/', done);
  });  

  it('has a sign up form', function(){
    expect(browser.text('button.signup')).to.eql('Sign up');
  });

  describe("signingup",function(){
    before(function(done){
      browser.
      fill("username", "Fantastic Mr Fox").
      pressButton("Sign up",done);
    });

    it("a user can sign up", function(){
      expect(browser.text('h1.welcome-message')).to.eql("Welcome: Fantastic Mr Fox")
    });
  });


});
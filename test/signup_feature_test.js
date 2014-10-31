process.env.NODE_ENV = 'test';
var server = require('../app');
var expect = require('expect.js')
var Browser = require('zombie');
var io = require('socket.io-client');
var socketCleaner = require('./socketCleaner.js');



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


  it("a user can sign up", function(){
    browser.
      fill("username", "Fantastic Mr Fox").
      pressButton("Sign up").then(function(){
        expect(browser.text('h4.user')).to.eql("Welcome: Fantastic Mr Fox")
      });
  });

});
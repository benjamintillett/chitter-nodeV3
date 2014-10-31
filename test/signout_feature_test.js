process.env.NODE_ENV = 'test';
var server = require('../app');
var expect = require('expect.js')
var Browser = require('zombie');
var io = require('socket.io-client');
var socketCleaner = require('./socketCleaner.js');


describe('Signout feature', function() {
  var browser;

  var browser;
  var socket;
  
  before(function() {
    this.server = server.listen(3000);
    // initialize the browser using the same port as the test application
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    browser.visit('/', done);
  });  

  it("a signed in user can sign out",function(){
      browser.
      fill("username", "Fantastic Mr Fox").
        pressButton("Sign up").then(function(){
          browser.pressButton("Sign out").then(function(){
            expect(browser.text('button.signup')).to.eql('Sign up');
      });
    });
  }); 
});
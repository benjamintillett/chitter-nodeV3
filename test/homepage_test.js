process.env.NODE_ENV = 'test';
var server = require('../app');
var expect = require('expect.js')
var Browser = require('zombie');
var io = require('socket.io-client');
var socketCleaner = require('./socketCleaner.js');

describe('home page', function() {
  
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

  it('should show a welcome message', function(){
    expect(browser.text('h1.welcome-message')).to.eql('Welcome to Node Chat');
  });

  it("has a form to add a peep",function(){
    browser.
      fill("message", "hello this is marvelous").
      pressButton("Submit")
  });

});
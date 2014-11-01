process.env.NODE_ENV = 'test';
var server = require('../app');
var expect = require('expect.js')
var Browser = require('zombie');
var io = require('socket.io-client');
var socketCleaner = require('./test_helpers/socketCleaner.js');
var clean_db = require('./test_helpers/dbCleaner.js');


describe('messaging', function() {
    var browser;
    var socket;
    clean_db();
    socketCleaner();

  before(function() {
    this.server = server.listen(3000);
    // initialize the browser using the same port as the test application
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    browser.visit('/', done);
  });

  describe("creating a message",function(){
    before(function(done){
      browser.visit('/',function(){
        browser.
          fill("message", "hello this is marvelous").
          pressButton("Submit",done)
      })
    })

    it("thanks you for messaging",function(){
      expect(browser.text(".alert")).to.eql("Thankyou for messaging!");
    });

    it("redirects to the homepage",function(){
      expect(browser.text("h1.welcome-message")).to.eql("Welcome to Node Chat");
    });

    it("cointains messages of the correct color",function(){
      expect(browser.query('.text-undefined')).to.be.ok
    });

    it("displays all messages on the homepage", function(){
		browser.visit('/').then(function(){
    		expect(browser.text(".messages")).to.contain("hello this is marvelous");
    	});
    });
  });
 });



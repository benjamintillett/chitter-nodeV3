process.env.NODE_ENV = 'test';
var server = require('../app');
var expect = require('expect.js')
var Browser = require('zombie');
var io = require('socket.io-client');
var socketCleaner = require('./test_helpers/socketCleaner.js');
var clean_db = require('./test_helpers/dbCleaner.js');

describe('Signout feature', function() {

  var browser;
  var socket;
  socketCleaner();
  clean_db();

  


  before(function() {
    this.server = server.listen(3000);
    // initialize the browser using the same port as the test application
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    browser.visit('/', done);
  });  

  

  describe("a signed in user can sign out",function(){
    before(function(done){
      browser.
      fill("username", "Fantastic Mr Fox").
        pressButton("Sign up").then(function(){
          browser.pressButton("Sign out",done);
        });     
    });  
    it("can sign out",function(){
        expect(browser.text('table')).not.to.contain("Fantastic Mr Fox")
        expect(browser.text('button.signup')).to.eql('Sign up');
    });
  }); 
});
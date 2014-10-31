process.env.NODE_ENV = 'test';
var server = require('../app');
var expect = require('expect.js')
var Browser = require('zombie');

describe('Signout feature', function() {
  var browser;
  
  before(function() {
    this.server = server.listen(3000);
    // initialize the browser using the same port as the test application
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    browser.visit('/', done);
  });  

  describe("a signed in user",function(){
    before(function(done){
      browser.
        fill("username", "Fantastic Mr Fox").
        pressButton("Sign up",done)
    });
    
    it("a user can sign out", function(){
      browser.pressButton("Sign out").then(function(){
        expect(browser.text('button.signup')).to.eql('Sign up');
      });
    });
  });


  after(function(done) {
      this.server.close(done);
  });


});
process.env.NODE_ENV = 'test';
var server = require('../app');
var expect = require('expect.js')
var Browser = require('zombie');


describe('messaging', function() {
  var browser;
  
  before(function() {
    this.server = server.listen(3000);
    // initialize the browser using the same port as the test application
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    browser.visit('/', done);
  });

  describe("messaging",function(){
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

    it("displays you my message", function(){
      expect(browser.text(".message")).to.eql("hello this is marvelous")
    })

    it("displays all messages on the homepage", function(){
		browser.visit('/',function(){
    		expect(browser.text(".messages")).to.contain("hello this is marvelous")
    	});
    });


  })
   after(function(done) {
      this.server.close(done);
  });
 });
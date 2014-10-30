process.env.NODE_ENV = 'test';
var server = require('../app');
var expect = require('expect.js')
var Browser = require('zombie');


describe('peeping', function() {
  var browser;
  
  before(function() {
    this.server = server.listen(3000);
    // initialize the browser using the same port as the test application
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    browser.visit('/', done);
  });

  describe("Peeping",function(){
    before(function(done){
      browser.visit('/',function(){
        browser.
          fill("peep", "hello this is marvelous").
          pressButton("Submit",done)
      })
    })

    it("thanks you for peeping",function(){
      expect(browser.text(".alert")).to.eql("Thankyou for Peeping!");
    });

    it("displays you my peep", function(){
      expect(browser.text(".peep")).to.eql("hello this is marvelous")
    })

  })
 });
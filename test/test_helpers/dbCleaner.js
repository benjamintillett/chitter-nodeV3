var mongoose = require('mongoose');


module.exports = function(){
	beforeEach(function (done) {   
	    mongoose.connect('mongodb://localhost/chitter-node3-test', function(){
	        mongoose.connection.db.dropDatabase(function(){
	            done()
	        })    
	    })
	})
}
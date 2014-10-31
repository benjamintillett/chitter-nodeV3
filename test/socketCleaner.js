var io = require('socket.io-client');

module.exports = function socketCleaner() {
    beforeEach(function(done) {
        // Setup
        socket = io.connect('http://localhost:3000', {
            'reconnection delay' : 0
            , 'reopen delay' : 0
            , 'force new connection' : true
        });
        socket.on('connect', function() {
            done();
        });
        socket.on('disconnect', function() {
        })
    });

    afterEach(function(done) {
        // Cleanup
        if(socket.connected) {
            socket.disconnect();
        } else {
            // There will not be a connection unless you have done() in beforeEach, socket.on('connect'...)
            console.log('no connection to break...');
        }
        done();
    });
}
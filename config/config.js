var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chitter-node3'
    },
    port: 3000,
    db: "mongodb://heroku_app31131782:t79lde00lc2a7eqdnik8nh9rvo@ds047950.mongolab.com:47950/heroku_app31131782"
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'chitter-node3'
    },
    port: 3000,
    db: 'mongodb://localhost/chitter-node3-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'chitter-node3'
    },
    port: 3000,
    db: process.env.MONGOLAB_URI
    
  }
};

module.exports = config[env];

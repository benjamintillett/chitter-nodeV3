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
    db: 'mongodb://localhost/chitter-node3-development'
    
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

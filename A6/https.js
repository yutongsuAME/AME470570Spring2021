var homeDir = require('path').join(require('os').homedir());
require('greenlock-express').create({
  version: 'draft-11'
, server: 'https://acme-v02.api.letsencrypt.org/directory'
, email: 'yutongsu@asu.edu'                                     // CHANGE THIS
, agreeTos: true
, approveDomains: [ 'yutongsu.httpsexample.xyz', 'www.yutongsu.httpsexample.xyz' ]              // CHANGE THIS
, store: require('greenlock-store-fs')
, configDir: homeDir
, app: require('./server.js')
}).listen(8080, 8443);


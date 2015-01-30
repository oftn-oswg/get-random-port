var net = require('net');
var Promise = require('bluebird');

module.exports = function (done) {
  return new Promise(function (resolve, reject) {
    var server = net.createServer()
      .listen(0, function () {
        var port = server.address().port;
        server.close(function () { resolve(port); });
      })
      .on('error', reject);
  }).nodeify(done);
};

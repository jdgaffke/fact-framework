//

var http = require('http');
var path = require('path');
var express = require('express');

var router = express();
var server = http.createServer(router);

router.use(express.static("static"));

server.listen(process.env.PORT || 80, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("HTTP server listening at ", addr.address + ":" + addr.port);
});

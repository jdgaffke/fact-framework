var express = require('express');
var util = require('util');
var router = exports.router = new express.Router({
    mergeParams: true
});

var metadata = require('./metadata.js').api;

router.get("/:name", function(req, res, next) {
    var op = req.params.name;
    var version = 20141001;
    metadata.getOperatorMetadata(op, version, found);

    function found(err, result) {
        var body = err ? err : result ? result : "Unknown Error";
        res.type('text/plain');
        res.send(util.inspect(body, {
            depth: null
        }));
    }
});

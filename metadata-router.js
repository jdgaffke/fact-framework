
var express = require('express');
var router = exports.router = new express.Router({
    mergeParams: true
});

var metadal= require('./metadata.js').metadal;

router.get("/:name", function(req, res, next) {
    var today = 20141001;
    metadal.getOperatorMetadata( req.params.name, today, found)
    
    function found(answer) {
        res.send(answer);
    }
});

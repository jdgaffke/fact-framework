var express = require('express');
var router = exports.router = new express.Router({
    mergeParams: true
});

router.get("/:name", function(req, res, next) {
    res.send("Metadata for " + req.params.name + "!");
});

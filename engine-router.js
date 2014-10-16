debugger;

var express = require('express');
var router = exports.router = express.Router({
    mergeParams: true
});

// Execute query 
router.use("/query", function(req, res, next) {
    res.send("Executing!");
});

router.use("/perf", function(req, res, next) {
    res.send("Perf stats!");
});

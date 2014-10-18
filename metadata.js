// Metadata processor/provider.

var metadal = exports.metadal = {};

var find = require('find');
var fs = require('fs');

metadal.getOperatorMetadata = function(name, version, callback) {
    var dirPath = __dirname + "/operators";
    var nameFilter = new RegExp("^" + name + ".\\d{8}.xml");
    
    find.file(nameFilter, dirPath, function(files) {
        if (files && files.length > 0) {
            callback(fs.readFileSync(files[0]));
        }
        callback("Operator [" + name + "] not found");
    });
};

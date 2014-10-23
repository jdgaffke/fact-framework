/**
 * Operator metadata processor/producer.
 */

var find = require('find'),
    fs = require('fs'),
    xml2js = require('xml2js'),
    dom = require('xmldom').DOMParser,
    xpath= require('xpath')
    ;

// Configuration
var metaPath = __dirname + "/operators/meta";
var metaFileRegex = /([\w\.]+)\.(\d{8})\.xml/i;

// Exported API.
var dao = exports.dao = {};

/**
 * Reload metadata from disk, creating in-memory index.
 */
dao.createIndex = function() {
    throw "Unimplemented";
};

/**
 * Lookup and return metadata for specified operator.
 *
 * @param name Operator name. Case sensitive.
 * @param version Operator version. Will match the nearest preceeding version.
 * @param callback function(err, obj) where [obj] is the in-memory meta object.
 */
dao.getOperatorMetadata = function(name, version, callback) {
    var nameFilter = new RegExp("^" + name + ".\\d{8}.xml");
    find.file(nameFilter, metaPath, function(files) {
        if (files && files.length > 0) {
            var fullPath = files[0];
            var parser = new xml2js.Parser();
            var xml = fs.readFileSync(fullPath);
            parser.parseString(xml, callback);
        }
        else {
            callback("Operator [" + name + "] not found");
        }
    });
};

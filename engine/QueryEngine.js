/**
 * Root query engine object.
 * Instantiates and manages individual queries.
 * 
 */

var meta = require("../metadata.js").api;

var example = 
[
"<query>",
"<contact c:contactId=''/>",
"</query>"    
].join('');

exports.QueryEngine = function QueryEngine() {
    
}
var express = require('express'),
    app = express();

// Documentation
app.get("/", express.static("./static"));

// Query engine API
app.use("/engine", require('./engine-router.js').router);

// Metadata API 
app.use("/op", require('./metadata-router.js').router);

app.listen(8080);
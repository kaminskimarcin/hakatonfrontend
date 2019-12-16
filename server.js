//Install express server
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/barcodefront'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

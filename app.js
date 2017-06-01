console.log('The app has started');

var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, '/docs')))

// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/demo/index.html'));
//     res.sendFile(path.join(__dirname + '/demo/assets/css/justForms.css'));
//
// });

app.listen(8080);

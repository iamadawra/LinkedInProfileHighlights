/**
 Server file to serve the static JSON for D3 consumption
 Author: @adawra
*/

var express = require('express');
var app = express();
var path = require('path');

// __dirname should use the current path from where you run this file 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/')));

app.listen(8000);
console.log('Listening on port 8000');
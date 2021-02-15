var express = require('express');
var path = require('path');
const service = require("./modules/services/service").getInstance();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require("./modules/router"));

module.exports = app;

#!/usr/bin/env node
var http = require('http');

var express = require('express');
var app = express();

var answerclient=0;

app.configure(function () {
    app.use(
        "/", //the URL throught which you want to access to you static content
        express.static("../") //where your static content is located in your filesystem
    );
});

app.use(express.bodyParser());

app.listen(3000);

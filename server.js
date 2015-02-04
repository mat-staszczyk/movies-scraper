var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res){

  //All the magic will happen here

}).listen('8081');

console.log('Magic happens on port 8081');

exports = module.exports = app;

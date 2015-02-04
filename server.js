var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    app = express();

app.get('/scrape', function(req, res){

  //All the magic will happen here

}).listen('8081');

console.log('Magic happens on port 8081');

exports = module.exports = app;

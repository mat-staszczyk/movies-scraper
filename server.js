var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    app = express();

app.get('/scrape', function(req, res){

  url = 'http://www.imdb.com/title/tt0421054/';

  request(url, function(error, response, html){

      if(!error){

          var $ = cheerio.load(html);

          var title, release, rating;
          var json = { title : "", release : "", rating : ""};

          $('.header').filter(function () {

            var data = $(this);
            title = data.children().first().text();

            json.title = title;
          })
        }
      })

}).listen('8081');

console.log('Magic happens on port 8081');

exports = module.exports = app;

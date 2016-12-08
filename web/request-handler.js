var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');
var helpers = require('./http-helpers.js');


exports.handleRequest = function (req, res) {
  if (req.method === 'GET') {
    if (req.url === '/') {
      fs.readFile('/Users/ConnorParsons/Documents/immersion2016/opspark/course.web-historian.exercise/web/public/index.html', function (err, html) {
        if (err) {
          console.log(err);
        }
        res.writeHead(200, helpers.headers);
        return res.end(html);
      });
      // helpers.serveAssets(res, '/Users/ConnorParsons/Documents/immersion2016/opspark/course.web-historian.exercise/web/public/index.html', function(){});



    }
  }
  // res.end(archive.paths.list);
};

var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');
var helpers = require('./http-helpers.js');
const url = require('url');


exports.handleRequest = function (req, res) {
  if (req.method === 'GET') {
    if (req.url === '/') {
      fs.readFile('/Users/ConnorParsons/Documents/immersion2016/opspark/course.web-historian.exercise/web/public/index.html', function (err, html) {
        res.writeHead(200, helpers.headers);
        return res.end(html);
      });
      // helpers.serveAssets(res, '/Users/ConnorParsons/Documents/immersion2016/opspark/course.web-historian.exercise/web/public/index.html', function(){});
    } else {
      var pathName = req.url;
      fs.readFile(archive.paths.archivedSites + pathName, 'utf8', function(err, data) {
        if (data === undefined) {
          res.writeHead(404, helpers.headers);
          res.end();
        } else {
          res.writeHead(200, helpers.headers);
          return res.end(data);
        }
      });

    }

    //  if (archive.isUrlArchived(url.pathname)) {
    //   var newRL = JSON.parse(url.pathname);
    //   // fs.readFile(newRL, function(err, data) {
    //     res.writeHead(200, helpers.headers);
    //     return res.end(newRL);
    //   // });
    // } else {
    //   res.writeHead(404, helpers.headers);
    //   res.end();
    // }
  }

  // res.end(archive.paths.list);
};

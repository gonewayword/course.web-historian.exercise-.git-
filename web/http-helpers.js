var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, filename, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  console.log(filename, 'heres file name inside serve assets');
  let filePath = archive.paths.siteAssets + filename;
  console.log(filePath, 'heres file path inside serve assets');
  fs.readFile(filePath, callback);
};
  // fs.readFile('/Users/gonewayword/Hack_Reactor/sprints/course.web-historian.exercise/web/public/index.html', function (err, html) {
  //   res.writeHead(200, helpers.headers);
  //   return res.end(html);



// As you progress, keep thinking about what helper functions you can put here!

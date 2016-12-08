var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');
var helpers = require('./http-helpers.js');
const url = require('url');


exports.handleRequest = function (req, res) {
  if (req.method === 'GET') {
    if (req.url === '/') {
      var pathName = req.url + 'index.html';
      console.log(pathName);
      helpers.serveAssets(
        res,
        pathName,
        function(err, html) {
          if (err) {
            console.log(err, 'ERROR with serving assets, ERROR WILL ROBINSON');
            return res.end(err);
          }
          res.writeHead(200, helpers.headers);
          res.end(html);
        }
      );
    } else {
      var pathName = req.url;
      console.log(pathName);
      fs.readdir(archive.paths.siteAssets, function(err, files) {
        files.forEach(file => {
          if (pathName === file) {
            helpers.serveAssets(res, pathName, function(err, html) {
              if (err) {
                console.log(err, 'ERROR with serving assets, ERROR WILL ROBINSON');
                return res.end(err);
              }
              res.writeHead(200, helpers.headers);
              res.end(html);
            });
          }
        });
      });
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
  }
  if (req.method === 'POST') {
    req.on('data', function(data) {
      var cleaned = data.toString().slice(4) + '\n';
      var path = '/Users/gonewayword/Hack_Reactor/sprints/course.web-historian.exercise/web/archives/sites.txt';
      fs.open(path, 'ax', 0o666, function(err, fd) {
        if (err) {
          // alert('file already on list! Please be patient you impatient cocksucker');
        }
        fs.appendFile(path, cleaned, 'utf8', 0o666, function(err) {
          if (err) {
            console.log('error');
          } else {
            fs.close(id, function() {
              console.log('file closed');
            });
            // alert('Your data was appended you son of a bitch');
          }
        });

      });
      res.writeHead(302, helpers.headers);
      return res.end();
    });
    // req.on('n
  }

  // res.end(archive.paths.list);
};


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

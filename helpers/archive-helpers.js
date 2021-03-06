var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  console.log(exports.paths.list, 'is this sites.txt');
  return fs.readFile(exports.paths.list, callback);
};

exports.isUrlInList = function(path) {
  // exports.readListOfUrls(function(err, data) {
  //   if (err) {
  //     console.log('Error!');
  //   }
  //   data = data.toString();
  //   if (data.indexOf(path) > - 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
};

exports.addUrlToList = function() {
};

exports.isUrlArchived = function(pathName) {
  fs.readFile(`/Users/gonewayword/Hack_Reactor/sprints/course.web-historian.exercise/web/archives/sites${pathName}`, function(err, data) {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
};

exports.downloadUrls = function() {
};

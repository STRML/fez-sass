'use strict';
var sass = require('node-sass'),
    Promise = require('bluebird'),
    xtend = require('xtend');

module.exports = function(options) {
  var defaults = {
    includePaths: [],
    outputStyle: 'nested',
    sourceComments: 'none',
    sourceMap: false
  };
  options = xtend(defaults, options);

  function sassc(input) {
    return new Promise(function(resolve, reject){
      var taskOpts = xtend(options, {
        file: input.getFilename(),
        success: resolve,
        error: reject
      });
      sass.render(taskOpts);
    });
  }

  return function sass(inputs) {
    return Promise.all(inputs.map(sassc));
  };
};
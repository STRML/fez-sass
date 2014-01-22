'use strict';
var assert = require('assert');
var fezsass = require('../src/main');
var fs = require('fs');

describe('Basic tests:', function() {
  it('Should handle basic nested scss', function(done){
    fezsass({})([
      {
        getFilename: function(){
          return __dirname + '/fixtures/nesting.scss';
        }
      }
    ]).then(function(outputs) {
      assert.equal(outputs[0], fs.readFileSync(__dirname + '/fixtures/nesting.css').toString());
      done();
    }); 
  });
  it('Should handle imports', function(done){
    fezsass({})([
      {
        getFilename: function(){
          return __dirname + '/fixtures/imports.scss';
        }
      }
    ]).then(function(outputs) {
      assert.equal(outputs[0], fs.readFileSync(__dirname + '/fixtures/imports.css').toString());
      done();
    });
  });
});

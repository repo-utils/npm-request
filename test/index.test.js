/**
 * Copyright(c) repo-utils and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var assert = require('assert');
var request = require('..');

describe('test/index.test.js', function() {
  it('should work', function(done) {
    request({
      method: 'get',
      path: 'connect/latest',
    }, function (err, data) {
      if (err) return done(err);
      assert.equal(data.name, 'connect');
      done();
    });
  });
});

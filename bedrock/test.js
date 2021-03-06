/*
 * Copyright (c) 2015-2017 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');
var fs = require('fs');
var path = require('path');

require('bedrock-protractor');
require('bedrock-requirejs');
require('bedrock-views');

var config = bedrock.config;
var dir = path.join(__dirname, '..');

// add bedrock-angular-form bower package
config.requirejs.bower.packages.push({
  path: dir,
  manifest: JSON.parse(fs.readFileSync(
    path.join(dir, 'bower.json'), {encoding: 'utf8'}))
});

bedrock.start();

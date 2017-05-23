/*
 * Bedrock Configuration.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 */
var path = require('path');

module.exports = function(bedrock) {
  if(bedrock.config.protractor) {
    var config = bedrock.config.protractor.config;
    // add protractor tests
    config.suites['bedrock-angular-filters'] =
      path.join(__dirname, './tests/**/*.js');
    // config.params.config.onPrepare.push();
  }
};

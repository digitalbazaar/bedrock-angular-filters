/*!
 * Filters module.
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([
  'angular',
  './ceil-filter',
  './bytes-filter',
  './ellipsis-filter',
  './embedded-string-filter',
  './encodeuricomponent-filter',
  './floor-filter',
  './mask-filter',
  './now-filter',
  './prefill-filter'
], function(
  angular,
  ceil,
  bytes,
  ellipsis,
  embeddedString,
  encodeURIComponent_,
  floor,
  mask,
  now,
  prefill) {

'use strict';

var module = angular.module('bedrock.filters', []);

module.filter(ceil);
module.filter(bytes);
module.filter(ellipsis);
module.filter(embeddedString);
module.filter(encodeURIComponent_);
module.filter(floor);
module.filter(mask);
module.filter(now);
module.filter(prefill);

return module.name;

});

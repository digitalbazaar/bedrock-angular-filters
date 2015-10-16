/*!
 * isEmpty filter.
 *
 * Copyright (c) 2012-2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define(['angular'], function(angular) {

'use strict';

/* @ngInject */
function factory() {
  return function(value) {
    if(angular.isArray(value) || angular.isString(value)) {
      return value.length === 0;
    }
    if(angular.isObject(value)) {
      return Object.keys(value).length === 0;
    }
    throw new Error('Unknown value for isEmpty filter.');
  };
}

return {isEmpty: factory};

});

/*!
 * Embedded string filter.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
/* @ngInject */
export default function factory() {
  return function(value) {
    if(value === undefined || value === null) {
      return '';
    }
    return value.replace(/\r/g, '\\r').replace(/\n/g, '\\n');
  };
}

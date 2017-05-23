/*!
 * Mask filter.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
/* @ngInject */
export default function factory() {
  return function(value, length) {
    if(length === undefined) {
      length = 5;
    }
    value = value.substr(value.length - 4);
    return new Array(length - value.length + 1).join('*') + value;
  };
}

/*!
 * Ellipsis filter.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
/* @ngInject */
export default function factory() {
  return function(value, length) {
    length = Math.max(3, length);
    length -= 3;
    if(value && value.length > length) {
      value = value.substr(0, length) + '...';
    }
    return value;
  };
}

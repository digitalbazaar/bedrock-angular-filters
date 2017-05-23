/*!
 * Prefill filter.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
/* @ngInject */
export default function factory() {
  return function(value, length, ch) {
    if(length === undefined) {
      length = 2;
    }
    if(ch === undefined) {
      ch = '0';
    }
    value = (value === undefined || value === null) ? '' : value.toString();
    return new Array(length - value.length + 1).join(ch) + value;
  };
}

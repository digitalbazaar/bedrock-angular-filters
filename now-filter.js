/*!
 * Now date filter.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
/* @ngInject */
export default function factory($filter) {
  return function(value, format) {
    return $filter('date')(new Date(), format);
  };
}

/*!
 * Filters module.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
import angular from 'angular';
import CeilFilter from './ceil-filter.js';
import BytesFilter from './bytes-filter.js';
import EllipsisFilter from './ellipsis-filter.js';
import EmbeddedStringFilter from './embedded-string-filter.js';
import EncodeUriComponentFilter from './encode-uri-component-filter.js';
import FloorFilter from './floor-filter.js';
import IsEmptyFilter from './isempty-filter.js';
import MaskFilter from './mask-filter.js';
import NowFilter from './now-filter.js';
import PrefillFilter from './prefill-filter.js';

var module = angular.module('bedrock.filters', []);

module.filter('ceil', CeilFilter);
module.filter('bytes', BytesFilter);
module.filter('ellipsis', EllipsisFilter);
module.filter('embeddedString', EmbeddedStringFilter);
module.filter('encodeURIComponent', EncodeUriComponentFilter);
module.filter('floor', FloorFilter);
module.filter('isEmpty', IsEmptyFilter);
module.filter('mask', MaskFilter);
module.filter('now', NowFilter);
module.filter('prefill', PrefillFilter);
